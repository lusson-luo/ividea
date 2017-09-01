/** 我看视频 */
var resolutionURL = "";
function watchByWMXW() {
	resolutionURL = "http://www.vipjiexi.com/tong.PHP?url=" + location.href;
	watch();
}
function watchByWVIPJX() {
	resolutionURL = "http://www.wmxz.wang/video.php?url=" + location.href;
	watch();
}
function watch() {
	location.href = resolutionURL;
}