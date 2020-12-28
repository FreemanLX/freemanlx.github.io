function round_type(ex){
		if(ex < 10)
			 return '0' + ex;
	return ex;
}

function generate_animation(element){
	var elem = document.getElementById(element);
    elem.style.animationName="fadeIn";
	elem.style.animationDuration="1s";	
}

function lambda_type(){
		datejs = new Date();
		y = datejs.getFullYear();
		m = datejs.getMonth() + 1;
		d = datejs.getDate();
		var inner = document.getElementById("date");
		var h = round_type(datejs.getHours());
		var min = round_type(datejs.getMinutes());
		var s = round_type(datejs.getSeconds());
		inner.innerHTML = "Date: 	" + m + "/" + d + "/" + y + "   	Time: " + h + ":" + min + ":" + s;
}

function update(){ 
   setInterval(lambda_type,1000);
}
			  
			  
function hide_wexp(){
	    generate_animation("work");
        document.getElementById("work").style.display = "block";
        document.getElementById("home").style.display = "none"; 
        document.getElementById("education").style.display = "none"; 
        document.getElementById("projects").style.display = "none"; 
        document.getElementById("about").style.display="none";
		document.getElementById("data").style.display="none";
}

function hide_edexp(){
	    generate_animation("education");
        document.getElementById("education").style.display = "block";
        document.getElementById("home").style.display = "none"; 
        document.getElementById("work").style.display = "none"; 
        document.getElementById("projects").style.display = "none"; 
        document.getElementById("about").style.display="none";
		document.getElementById("data").style.display="none";
   
}

function hide_myprojects(){
	    generate_animation("projects");
        document.getElementById("projects").style.display = "block"; 
        document.getElementById("home").style.display = "none"; 
        document.getElementById("education").style.display = "none"; 
        document.getElementById("work").style.display = "none"; 
        document.getElementById("about").style.display="none";
		document.getElementById("data").style.display="none";
}

function listen(s){
	   if(s.matches){
			document.getElementById("data").style.display="block";
		}
		else{
			document.getElementById("data").style.display="none";
		}
	
}

function hide_home(){
	    generate_animation("home");
        document.getElementById("home").style.display = "block";
        document.getElementById("work").style.display = "none"; 
        document.getElementById("education").style.display = "none"; 
        document.getElementById("projects").style.display = "none"; 
		document.getElementById("about").style.display="none";
		var s = window.matchMedia("(min-width: 1280px) and (min-height: 900px)");
		listen(s);
		s.addListener(listen);
}
   
function about(){
	    generate_animation("about");
        document.getElementById("home").style.display = "none";
        document.getElementById("work").style.display = "none"; 
        document.getElementById("education").style.display = "none"; 
        document.getElementById("projects").style.display = "none"; 
        document.getElementById("about").style.display = "block";
        document.getElementById("data").style.display="none";			
}
   
   
function remove_popup(){
        //document.getElementById("popup").style.display="none";
        document.getElementById("home").style.display="block";
		document.getElementById("navbar_p").style.display="block";
        var remove = document.getElementById("popup");
		var parent = document.getElementById("corp");
		parent.removeChild(remove);
}