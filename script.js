function round_type(ex){
		if(ex < 10)
			 return '0' + ex;
	return ex;
}

function verify(){
	var x = document.forms["form_t"];
	for(i = 0; i<x.length; i++){
		if(x[i].value == ""){
		    alert("Something isn't filled or you didn't checked the agreement of data collection.");
		    return false;
		}
	}
	var t = document.form["form_t"]["condition"].value;
	if(t == ""){
        alert("Something isn't filled or you didn't checked the agreement of data collection.");
		return false;
	}
	
	return true;
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


let menus = ["work", "home", "education", "projects", "about", "contact"]; ///main menus

function update(){ 
   setInterval(lambda_type,1000);
}
		
function hide(element){
	document.getElementById(element).style.display = "none";
}		

function show(element){
	document.getElementById(element).style.display = "block";
}

function if_is_hidden(element){
	if(document.getElementById(element).style.display == "block")
		  return 0; 
	return 1;
}

function moving_to(element){
	generate_animation(element);
	for(i = 0; i<menus.length; i++){
	     if(if_is_hidden(menus[i]) == 0){
			  hide(menus[i]);
		 }
			 
	}
	if(element != "home"){
		hide("home");
		hide("data");
	}
	show(element);
}			
			  
function hide_wexp(){
	    moving_to("work");
}

function hide_edexp(){
	    moving_to("education");
}

function hide_myprojects(){
	    moving_to("projects");
}

function contact_form(){
	    moving_to("contact");
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
	    moving_to("home");
		var s = window.matchMedia("(min-width: 1280px) and (min-height: 900px)");
		listen(s);
		s.addListener(listen);
}
   
function about(){
	    moving_to("about");		
}