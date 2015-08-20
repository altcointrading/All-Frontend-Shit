/**
* Custom menu hide/show children onclick
* Written for Joomla's Helix 3 framework
* @link http://www.joomshaper.com/joomla-templates/helix3
**/
window.addEventListener("load", function() {
 selectorStopDef();
 vanish();
  selectorOmg();
});

/**
*
* Prevent default
*
**/
    function stopDef( e ) {
      e.preventDefault();
    }
    function selectorStopDef() {
      var parentlink = document.getElementById("eng").getElementsByClassName("parent")[0].getElementsByTagName("a")[0];
      parentlink.addEventListener("click", stopDef, false);
    }
/**
*
* Get parent and child menu
*
**/
    function selectorOmg() {
      var parentlink = document.getElementById("eng").getElementsByClassName("parent")[0].getElementsByTagName("a")[0];
      parentlink.addEventListener("click", omg, false);
    }

    function omg() {
     var it = document.getElementById( "eng" ).getElementsByTagName("ul")[0].style.display;
       if ( it == "" ) {
         document.getElementById( "eng" ).getElementsByTagName("ul")[0].style.display = "none";    }
       else if (it == "none") {
         document.getElementById( "eng" ).getElementsByTagName("ul")[0].style.display = "";    }
    }
/**
*
* Hide child menu onload
*
**/
    function vanish() {
      document.getElementById( "eng" ).getElementsByTagName("ul")[0].style.display = "none";
    }
