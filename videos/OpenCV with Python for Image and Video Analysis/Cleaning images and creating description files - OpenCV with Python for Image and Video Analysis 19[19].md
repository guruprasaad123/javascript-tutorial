Simple enough, this script will visit the links, grab the URLs, and proceed to visit them. From here, we grab the image, convert to grayscale, resize it, then save it. We use a simple counter for naming the images. Go ahead and run it. As you can probably see, there are a lot of missing pictures and such. That's okay. More problematic is some of these error pictures. Basically all white with some text that says they are no longer available, rather than serving and HTTP error. Now, we have a couple choices. We can just ignore this, or fix it. Hey, it's an image without a watch, so whatever right? Sure, you could take that opinion, but if you use this pulling method for positive then this is definitely a problem. You could manually delete them... or we can just use our new Image Analysis knowledge to detect these silly images and remove them!

I went ahead and made a new directory, calling it "uglies." Within that directory, I have click and dragged all ugly image versions (just one of each). There's only one major offender that I found with the negatives, so I just have one. Let's write a script to find all instances of this image and delete it.

Text-based tutorial and sample code: https://pythonprogramming.net/haar-cascade-object-detection-python-opencv-tutorial/

Digital Ocean Server: https://www.digitalocean.com/?refcode=d1c4c6e66979

https://pythonprogramming.net
https://twitter.com/sentdex
https://www.facebook.com/pythonprogramming.net/
https://plus.google.com/+sentdex