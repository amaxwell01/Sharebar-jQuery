Sharebar-jQuery
======

A simple website sharebar in under 100 lines of code for HTML, CSS and JavaScript (jQuery)

DEMO:
http://labs.andrewcmaxwell.com/sharebar-jquery/

REQUIREMENTS:
1. jQuery (Tested 1.7.1)


REQUIRED HTML
=============
<script type="text/javascript" src="jquery.min.js"></script>
<div id="sharebar">
    <ul>
        <li><ENTER VALUE HERE></li>
    </ul>
</div>



REQUIRED CSS
=============
#sharebar {
    overflow: hidden;
    position: absolute;
    top: <ENTER VALUE HERE>;
    width: <ENTER VALUE HERE>;
}
#sharebar ul {
    float: left;
}
#sharebar ul li {
    float: left;
    list-style: none;
}



REQUIRED JAVASCRIPT
===================
$(document).ready( function()
{
    sharebar   = $('#sharebar'),
    initialTop = sharebar[0].offsetTop;
});


$(window).scroll(function()
{
    var sharebarTop,
        sharebarPosition;
    
    if( initialTop < window.pageYOffset )
    {
        sharebarTop      = 0;
        sharebarPosition = 'fixed';
    }
    else
    {
        sharebarTop      = initialTop;
        sharebar.removeAttr('style');
    }
    
    sharebar.css({
        position: sharebarPosition,
        top: sharebarTop + 'px'
    });
});