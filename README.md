#jQuery Lightbox

##Introduction
jWuery Popup plugin is simple, elegant, no need any extra markup plugin for jQuery.

##Instructions
Download the plugin, unzip it, copy files and include jWueryPopup.js and stylesheet in your document. Make sure you also load the jQuery.js.

#Example

```html
<link rel="stylesheet" href="jwpopup.css">
<script type="text/javascript" src="jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="jWueryPopup.js"></script>
```

```javascript
$("#newproject_popup").jwPopup({ top: 50 });
```

##Available Options
You can pass only one option as key/value object to jwPopup() method. It is possible to modify defaults directly at jWueryPopup.js file.

*Name* - top

*Description* - Top-Space inside jwPopup around the window. 

##Dependencies
jQuery 1.10.2
