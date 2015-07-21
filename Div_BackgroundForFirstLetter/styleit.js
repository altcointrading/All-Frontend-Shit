//written for a long A - Z list

var link=document.getElementsByTagName("li");

for(var i=0;i<link.length;i++) {
  var str = link[i].innerHTML;
  var n = str.charAt(0);
  //color bg at every other letter of abc
  if ( n == "A" || n == "C" || n == "E"|| n == "G"|| n == "C"|| n == "I"|| n == "K"|| n == "M"|| n == "O"|| n == "Q"|| n == "S"|| n == "U"|| n == "W"|| n == "Y") {
    link[i].style.background="#eff1f7";
  }
}
