I designed and implemented an automated video rendering pipeline running in AWS lambda, which used fabric.js to allow the client to add, scale, and position assets, and then fed those assets into ffmpeg, which created both graphics with video backgrounds, and allowed for motion effects like panzooms and fades on image content.

I would later update this to add video overlay effects like smoke, embers and sparks.

These features were hugely popular, and I eventually had to move this stack to EC2/ECS hardware to allow for larger files and faster renders.
