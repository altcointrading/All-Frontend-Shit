Repo of all frontend shit I have to deal with  

###### Notes  
###### Javascript | Dynamically resize div on load and on browser window resize  
see screenshot  
  
**1 | boxes with text or images (blue)**  
* **onload** | read text boxes heights, find max, adjust image boxes heights to that max
* image is div background cover center center  
* no cookie needed: img and text boxes have different classes in php logic. adjusted only img. no recursive looping.
* **on browser window resize** | div height changes on resize, adjust  
  
**2 | headings with underline of height dependent on amount of text (yellow)**  
* **onload** | make them all in line
* **on window resize** | if resized from full desktop (check?) to tablet width, store cookie. 
* if then resized back to full desktop, if cookie ( = has been resized) restore auto height, run initial heights check again

![http://ibin.co/28PFmUhTmz7y](http://ibin.co/28PFmUhTmz7y)
