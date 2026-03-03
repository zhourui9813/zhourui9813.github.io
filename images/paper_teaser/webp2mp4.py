import os
import subprocess
from PIL import Image, ImageSequence

def convert_webp_to_mp4(input_path, output_path, fps=25):
    # 1. 使用 Pillow 打开 WebP 文件
    with Image.open(input_path) as img:
        # 获取图片的宽高
        width, height = img.size
        # 确保宽高是 2 的倍数（H.264 编码强制要求）
        if width % 2 != 0: width -= 1
        if height % 2 != 0: height -= 1

        print(f"正在解析 {input_path} ({width}x{height})...")

        # 2. 构建 FFmpeg 命令行
        # 我们通过管道 (stdin) 将图片帧一帧帧喂给 ffmpeg
        command = [
            'ffmpeg',
            '-y',              # 覆盖已存在的文件
            '-f', 'image2pipe',
            '-vcodec', 'png',
            '-r', str(fps),    # 设置帧率
            '-i', '-',         # 从管道读取输入
            '-c:v', 'libx264',
            '-pix_fmt', 'yuv420p',
            '-crf', '20',      # 画质设置
            output_path
        ]

        # 启动 FFmpeg 进程
        process = subprocess.Popen(command, stdin=subprocess.PIPE)

        try:
            # 3. 遍历 WebP 的每一帧并写入管道
            for frame in ImageSequence.Iterator(img):
                # 如果有透明通道，转为 RGB (背景默认为黑色，可自行改为白色)
                if frame.mode == 'RGBA':
                    canvas = Image.new('RGB', (width, height), (0, 0, 0))
                    canvas.paste(frame, mask=frame.split()[3])
                    frame = canvas
                else:
                    frame = frame.convert('RGB')
                
                # 调整尺寸（如果原始尺寸不是2的倍数）
                if frame.size != (width, height):
                    frame = frame.resize((width, height))

                # 将帧以 PNG 格式保存到管道的输入流
                frame.save(process.stdin, 'PNG')
            
            # 关闭管道并等待进程结束
            process.stdin.close()
            process.wait()
            print(f"转换完成！输出文件: {output_path}")

        except Exception as e:
            print(f"转换出错: {e}")
            process.kill()

if __name__ == "__main__":
    # 使用示例
    convert_webp_to_mp4('demo.webp', 'output.mp4', fps=25)