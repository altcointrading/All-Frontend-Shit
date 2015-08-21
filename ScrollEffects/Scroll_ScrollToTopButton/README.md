### No joy in IE 
   
   
```
$.fn.scrollView = function() {
    return this.each(function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    });
};
$('.last').click(function() {
    $('html').scrollView();
});
```
  
http://stackoverflow.com/questions/8313905/how-to-scroll-to-the-top-of-page-in-ie-with-jquery
