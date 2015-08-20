// dep on jQuery

// get current url
var url = window.location.href;
// if last char is trailing slash ...
 if ( lastchar == "/" ) {
  // ...remove it
  var trailing = url.substring(0, url.length-1);
 } else {
  var trailing = url;
 }
//find last slash
var parse = trailing.lastIndexOf("/")+1;
//get all after last slash
var urlstring = trailing.substr( parse );

//add class active
 $(".uppermenu a").each(

  function(){
    if( $( this ).attr( "href" ) == urlstring ){
    $( this ).addClass(" active");
  }

 });
