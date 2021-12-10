const toggleBackground = document.getElementById('nav'); 
const toggleMenu = document.getElementById('static-menu');

function changeBG() {
  if (document.body.scrollTop > 500|| document.documentElement.scrollTop > 500) {
    toggleBackground.className = "toggleBackground";
  } else {
    toggleBackground.className = "";
  }
}
function myFunction(x) {
  x.classList.toggle("change");
  if(toggleMenu.hidden==true){
  	toggleMenu.hidden=false;
  }
  else{
  	toggleMenu.hidden=true;
  }
}
window.addEventListener('scroll',() => {
	// if( window.innerHeight + window.scrollY >= document.body.offsetHeight -200){
		changeBG();
	
});
