Welcome to another OpenCV tutorial. In this tutorial, we'll be covering thresholding for image and video analysis. The idea of thresholding is to further-simplify visual data for analysis. First, you may convert to gray-scale, but then you have to consider that grayscale still has at least 255 values. What thresholding can do, at the most basic level, is convert everything to white or black, based on a threshold value. Let's say we want the threshold to be 125 (out of 255), then everything that was 125 and under would be converted to 0, or black, and everything above 125 would be converted to 255, or white. If you convert to grayscale as you normally will, you will get white and black. If you do not convert to grayscale, you will get thresholded pictures, but there will be color.

While that sounds good enough, it often isn't. We will be covering multiple examples and different types of thresholding here to illustrate this.

Sample code and text-based tutorial: https://pythonprogramming.net/thresholding-image-analysis-python-opencv-tutorial/

https://pythonprogramming.net
https://twitter.com/sentdex
https://www.facebook.com/pythonprogramming.net/
https://plus.google.com/+sentdex