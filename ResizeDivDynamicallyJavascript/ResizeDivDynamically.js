// written for wordpress plugin
// ---------- functions to fire once, onload

window.addEventListener("load", function() {
      heightReset();
      a1Resize();
});

// ---------- functions to fire on browser window resize

window.addEventListener("resize", function() {
      heightReset();
      a1Resize();
      a1ResizeOnresize();

});

// ---------- logic

// check all boxes with text only, get sizes, find max height
// adjust all boxes with image only to have the max height
// ! image as div background cover center center
function heightReset() {

  var alldivs = document.getElementsByClassName('textonly');
  var imgdivs = document.getElementsByClassName('imageonly');
  var array_heights = new Array;
  var i;
  var x;


   for (i = 0; i < alldivs.length; i++) {
         var divh = alldivs[i].offsetHeight;
         array_heights.push(divh);
     }

   var largest = Math.max.apply(Math, array_heights);

   for (x = 0; x < imgdivs.length; x++) {
     var h = largest + "px";
     imgdivs[x].style.height = h;
   }

}

// find all headings of class a1, get sizes, find max height -- 2 lines or more
// set height of all a1 headings equal
// set cookie if adjustment for smaller screens:
// -- (possibly desktop window resize that will have to be undone if resized back to fullscreen)

function a1Resize() {

  var alldivs = document.getElementsByClassName('a1');
  var viewportwidth = window.innerWidth;
  var x;
  var i;
  var array_heights = new Array;

  for (i = 0; i < alldivs.length; i++) {
         divh = alldivs[i].offsetHeight;
         array_heights.push(divh);
     }

     var largest = Math.max.apply(Math, array_heights);
     var smallest = Math.min.apply(Math, array_heights);
     var h = largest + "px";
     var hs = smallest + "px";

  for (x = 0; x < alldivs.length; x++) {
    if ( alldivs[x].offsetHeight < largest  ) {
      alldivs[x].style.height = h;
      if ( viewportwidth < 1100 ) {
        var date = new Date();
        date.setTime(date.getTime()+(5*60*1000));
        document.cookie = "r=1; expires="+date.toGMTString();
      }
    }//largest
  }//for

}//  f

// on resize only
// if was resized and now is large screen, restore auto height, then run equalizing function again
function a1ResizeOnresize() {

  var alldivs = document.getElementsByClassName('a1');
  var viewportwidth = window.innerWidth;
  var x;

  if (document.cookie.indexOf("r=1") > 0) {
    if ( viewportwidth > 1200 ) {
          for (x = 0; x < alldivs.length; x++) {
              alldivs[x].style.height = "auto";
          }
          // repeat init resize:
          a1Resize();
      }
  }



}// f a1resize onresize
