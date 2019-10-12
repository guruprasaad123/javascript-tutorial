In this OpenCV with Python tutorial, we're going to cover Morphological Transformations. These are some simple operations that we can perform based on the image's shape.

These tend to come in pairs. The first pair we're going to talk about is Erosion and Dilation. Erosion is where we will "erode" the edges. The way these work is we work with a slider (kernel). We give the slider a size, let's say 5 x 5 pixels. What happens is we slide this slider around, and if all of the pixels are white, then we get white, otherwise black. This may help eliminate some white noise. The other version of this is Dilation, which basically does the opposite: Slides around, if the entire area isn't black, then it is converted to white.

Sample code and text-based tutorial: https://pythonprogramming.net/morphological-transformation-python-opencv-tutorial/

https://pythonprogramming.net
https://twitter.com/sentdex
https://www.facebook.com/pythonprogramming.net/
https://plus.google.com/+sentdex