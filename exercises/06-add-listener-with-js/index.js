window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
	document.getElementById("theGreen").addEventListener("click", listenerFunction);
};

//the listener function here
function listenerFunction() {
	alert("wuju");
}
