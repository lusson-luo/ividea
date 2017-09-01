/** 我看视频 */
var resolutionURL = "";
function watchByWMXW() {
	alert("111");
	resolutionURL = "http://www.vipjiexi.com/tong.PHP?url=" + location.href;
	watch();
}
function watchByWVIPJX() {
	alert("111");
	resolutionURL = "http://www.wmxz.wang/video.php?url=" + location.href;
	watch();
}
function watch() {
	location.href = resolutionURL;
}