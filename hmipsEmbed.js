// JavaScript Document
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    MacOSX: function() {
        return navigator.userAgent.match(/Macintosh/i);
    },	
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
var embedded = "membedplayer";
//var embedded = "embedplayer";
if (!isMobile.any()){
        embedded = "hembedplayer";
}
if (typeof(width) == 'undefined') width = 150;
if (typeof(height) == 'undefined') height = 133;
if (width < 150) width = 50;
if (height < 133) height = 33;
if (width < height) height = width;
document.write('<iframe width='+width+' height='+height+' scrolling=no frameborder=0 scrolling=no allowfullscreen=true allowtransparency=true marginwidth="0" marginheight="0" src=http://www.mipsplayer.com/'+embedded+'/'+channel+'/'+e+'/'+width+'/'+height+' allowfullscreen ></iframe>')
