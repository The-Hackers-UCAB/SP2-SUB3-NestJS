#!/bin/bash

# The MIT License (MIT)
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.

# Image downloader by Ray Heffer, February 23 2019
# Blog: https://rayheffer.com
# GitHub: https://github.com/rayheffer/tpdne

# Configuration
max=150
url=https://www.thispersondoesnotexist.com/image
imgdir=images

printf 'Downloading '$max' images'
printf '\n'

# Loop to download images $max number of times
count=1
while [ $count -le $max ]
do
wget -q $url -P images/
printf '\r%2d Completed' $count
((count++))
done

# Create images directory if it doesn't exist
mkdir -p $imgdir
cd $imgdir

# Checks each file downloaded for file extension, to avoid overwriting existing images
for f in *; do
if [[ $f != *.jpg ]] # Checks each file for .jpg extension
then
mv $f `basename $f `.$$.jpg; # Adds process ID ($$) and .jpg extension (E.g. image.7232.jpg
fi
done;

# Complete!
printf '\n'
printf 'Downloads complete! All images saved to images/'
printf '\n'
