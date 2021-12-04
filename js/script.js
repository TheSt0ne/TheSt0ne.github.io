const toggleBackground = document.getElementById('nav'); 

function changeBG() {
  if (document.body.scrollTop > 500|| document.documentElement.scrollTop > 500) {
    toggleBackground.className = "toggleBackground";
  } else {
    toggleBackground.className = "";
  }
}
window.addEventListener('scroll',() => {
	// if( window.innerHeight + window.scrollY >= document.body.offsetHeight -200){
		changeBG();
	
});
