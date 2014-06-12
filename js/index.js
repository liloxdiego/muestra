(function(){
	window.addEventListener("scroll", function(){
		var scrollPosition = window.scrollY;
		var tag = document.getElementById("nav-bar-top");
		console.log(scrollPosition);
		if(scrollPosition > 0){
			tag.style.background = "#1F6C93";
			tag.style.borderBottom = "3px solid rgba(255, 255, 255, 0.54)";				
		}else{
			tag.style.background = "transparent";
			tag.style.borderBottom = "none";
		}
	});
}())