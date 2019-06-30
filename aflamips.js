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
	Vivo: function() {
		return navigator.userAgent.match(/Vivo/i);
    },
	Chrome: function() {
		return navigator.userAgent.match(/Chrome/i);
    },	
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
    }
};


var embedded = "hembedplayer";
if (isMobile.any()){
    embedded = "membedplayer";
}
if 	(isMobile.iOS() || isMobile.Vivo()){
    embedded = "iembedplayer";
}

if (isMobile.Chrome()) {
	e = "" + e + "1";
}

if (typeof(width) == 'undefined') width = 220;
if (typeof(height) == 'undefined') height = 250;
document.write('<iframe width='+width+' height='+height+' scrolling=no frameborder=0 scrolling=no allowtransparency=true marginwidth="0" marginheight="0" allowfullscreen src=https://www.mipsplayer.net/'+embedded+'/'+channel+'/'+e+'/'+width+'/'+height+' ></iframe>')
