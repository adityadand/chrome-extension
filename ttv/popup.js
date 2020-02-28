function validate(){
var inp = document.getElementById("test").value;
var msg = new SpeechSynthesisUtterance(inp);
window.speechSynthesis.speak(msg);
}