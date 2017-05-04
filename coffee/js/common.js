(function (win,doc) {
	function change() {
		document.documentElement.style.fontSize=100*document.documentElement.clientWidth/640+'px';
    }
    doc.addEventListener('DOMContentLoaded',change,false);
    win.addEventListener('resize',change,false);
})(window,document);