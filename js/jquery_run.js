
// JavaScript Document
sfHover = function() {
	var sfEls = document.getElementById("nav").getElementsByTagName("LI");
	for (var i=0; i<sfEls.length; i++) {
		sfEls[i].onmouseover=function() {
			this.className+=" sfhover";
		}
		sfEls[i].onmouseout=function() {
			this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
		}
	}
}
if (window.attachEvent) window.attachEvent("onload", sfHover);
// JQuery Document
(function($) {
	function reloadStylesheets() {
		var queryString = '?reload=' + new Date().getTime();
		$('link[rel="stylesheet"]').each(function () {
			this.href = this.href.replace(/\?.*|$/, queryString);
		});
	}
	/*window.onload = function() {  
	  var d = new Date();
	  $.get("home.htm?"+d.getTime(), function(data){
	    $("#main_bar").html(data);
	  });
	}
	$(document).ready(function() 
	{
	   $('ul.vmenu li a').click(function(e) 
	   { 
	     var d = new Date();
	     var linkfile = $(this).attr("a")+".htm?"+d.getTime();
	     $.get(linkfile, function(data){
			 //alert(data);
	       $("#main_bar").html(data);
		   //reloadStylesheets();
	     });
	   });
	});*/  
})(jQuery);