


import argparse
from moviepy.editor import VideoFileClip
from moviepy.video.fx import resize

def convert_mp4_to_gif(input_file, output_file, width, height, fps, quality):
    try:
        # 读取视频文件
        video = VideoFileClip(input_file)

        # 如果宽度或高度为 None，保持比例进行计算
        if width is None and height is not None:
            width = int(video.w * (height / video.h))  # 按照目标高度计算宽度
        elif height is None and width is not None:
            height = int(video.h * (width / video.w))  # 按照目标宽度计算高度

        # 调整视频大小，保持比例
        video_resized = resize.resize(video, newsize=(width, height))

        # 设置帧率
        video_resized = video_resized.set_fps(fps)

        # 创建 GIF 文件
        video_resized.write_gif(output_file, fps=fps, program='ffmpeg', opt='nq', fuzz=quality)

        print(f"转换成功！GIF 文件保存为 {output_file}")

    except Exception as e:
        print(f"发生错误: {e}")

def main():
    parser = argparse.ArgumentParser(description="将 MP4 转换为 GIF")
    
    # 定义命令行参数及默认值
    parser.add_argument("--input_file", default="/media/zhourui/zhourui.github.io/images/paper_teaser/output.mp4", help="输入的 MP4 文件路径")
    parser.add_argument("--output_file", default="/media/zhourui/zhourui.github.io/images/paper_teaser/quest3_teleop.gif", help="输出的 GIF 文件路径")
    parser.add_argument("width", type=int, default=480, nargs="?", help="GIF 的目标宽度，默认值是 320")
    parser.add_argument("height", type=int, default=None, nargs="?", help="GIF 的目标高度，默认值是 240")
    parser.add_argument("fps", type=int, default=10, nargs="?", help="GIF 的帧率，默认值是 15")
    
    # 压缩等级参数，帮助中详细说明范围
    parser.add_argument("quality", type=int, default=0, nargs="?", help="压缩等级，数值范围从 1 到 100，数值越小文件越小，质量越差；默认值是 20")
    
    # 解析参数
    args = parser.parse_args()

    # 调用转换函数
    convert_mp4_to_gif(args.input_file, args.output_file, args.width, args.height, args.fps, args.quality)

if __name__ == "__main__":
    main()
