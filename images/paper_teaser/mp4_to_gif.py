import argparse
import inspect
from pathlib import Path

try:
    from moviepy import VideoFileClip
except ImportError:
    from moviepy.editor import VideoFileClip


SCRIPT_DIR = Path(__file__).resolve().parent


def resize_clip(video, width, height):
    size = (width, height)

    if hasattr(video, "resized"):
        return video.resized(new_size=size)

    from moviepy.video.fx import resize

    return resize.resize(video, newsize=size)


def set_clip_fps(video, fps):
    if hasattr(video, "with_fps"):
        return video.with_fps(fps)

    return video.set_fps(fps)


def write_gif(clip, output_path, fps, quality):
    kwargs = {
        "fps": fps,
        "program": "ffmpeg",
        "opt": "nq",
        "fuzz": quality,
    }
    supported_kwargs = inspect.signature(clip.write_gif).parameters
    kwargs = {key: value for key, value in kwargs.items() if key in supported_kwargs}
    clip.write_gif(str(output_path), **kwargs)


def convert_mp4_to_gif(input_file, output_file, width, height, fps, quality):
    input_path = Path(input_file)
    output_path = Path(output_file)

    with VideoFileClip(str(input_path)) as video:
        if width is None and height is not None:
            width = int(video.w * (height / video.h))
        elif height is None and width is not None:
            height = int(video.h * (width / video.w))
        elif width is None and height is None:
            width, height = video.w, video.h

        clip = resize_clip(video, width, height)
        clip = set_clip_fps(clip, fps)
        write_gif(clip, output_path, fps, quality)

    print(f"Converted successfully: {output_path}")


def main():
    parser = argparse.ArgumentParser(description="Convert MP4 to GIF.")
    parser.add_argument(
        "--input_file",
        default=SCRIPT_DIR / "STAG-VIO-Video.mp4",
        type=Path,
        help="Input MP4 path.",
    )
    parser.add_argument(
        "--output_file",
        default=SCRIPT_DIR / "STAG-VIO-Video.gif",
        type=Path,
        help="Output GIF path.",
    )
    parser.add_argument("width", type=int, default=480, nargs="?", help="Target GIF width.")
    parser.add_argument("height", type=int, default=None, nargs="?", help="Target GIF height.")
    parser.add_argument("fps", type=int, default=20, nargs="?", help="Target GIF FPS.")
    parser.add_argument(
        "quality",
        type=int,
        default=0,
        nargs="?",
        help="GIF optimization fuzz value.",
    )

    args = parser.parse_args()
    convert_mp4_to_gif(
        args.input_file,
        args.output_file,
        args.width,
        args.height,
        args.fps,
        args.quality,
    )


if __name__ == "__main__":
    main()
