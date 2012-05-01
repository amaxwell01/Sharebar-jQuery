Sharebar-jQuery
===============

Author: Andrew Maxwell
Created Date: 4/30/12
Version: 1.0.0

A simple website sharebar in under 100 lines of code for HTML, CSS and JavaScript (jQuery)

DEMO:
http://labs.andrewcmaxwell.com/sharebar-jquery/

REQUIREMENTS:
1. jQuery (Tested 1.7.1)


DOCUMENTATION:
==============
HTML
`
<div id="sharebar">
    <ul>
        <li></li>
    </ul>
</div>

CSS:
Adjust the styling to fit your needs. The only requirements are the following:
`#sharebar {
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
    width: <ENTER VALUE HERE>;
}`

JavaScript:
you will not have to modify the JavaScript at anytime, it will work out of the box