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
