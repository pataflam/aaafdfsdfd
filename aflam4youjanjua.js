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
    Mozilla: function() {
       return navigator.userAgent.match(/Mozilla/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    MacOSX: function() {
        return navigator.userAgent.match(/Macintosh/i);
    },
	Chrome: function() {
		return navigator.userAgent.match(/Chrome/i);
    },	
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


var embedded = "hembedplayer";
if (isMobile.any()){
    embedded = "membedplayer";
}
if 	(!isMobile.Chrome() && !isMobile.Mozilla() && (isMobile.iOS() || isMobile.MacOSX())){
    embedded = "iembedplayer";
}

//if (isMobile.MacOSX()) {
// g=1;
//}
// JavaScript Document
if (typeof(width) == 'undefined') width = 280;
if (typeof(height) == 'undefined') height = 250;
if (width < 280) width = 280;
if (height < 250) height = 250;
if (width < height) height = width;
document.write('<iframe width='+width+' height='+height+' scrolling=no frameborder=0 scrolling=no allowtransparency=true marginwidth="0" marginheight="0" src=https://www.janjuaplayer.com/sharedcdn/'+embedded+'/'+channel+'/'+g+'/'+width+'/'+height+' allowfullscreen ></iframe>')