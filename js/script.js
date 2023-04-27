$('document').ready(function(){
	$('input[type="text"], input[type="email"], textarea').focus(function(){
		var background = $(this).attr('id');
		$('#' + background + '-form').addClass('formgroup-active');
		$('#' + background + '-form').removeClass('formgroup-error');
	});
	$('input[type="text"], input[type="email"], textarea').blur(function(){
		var background = $(this).attr('id');
		$('#' + background + '-form').removeClass('formgroup-active');
	});

function errorfield(field){
	$(field).addClass('formgroup-error');
	console.log(field);	
}

$("#waterform").submit(function() {
	var stopsubmit = false;

if($('#name').val() == "") {
	errorfield('#name-form');
	stopsubmit=true;
}
if($('#email').val() == "") {
	errorfield('#email-form');
	stopsubmit=true;
}
  if(stopsubmit) return false;
});
		
});

//JS Form Validation
function validateform(){  
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  if (name == "" || name == null){  
    alert("Please enter your name");  
  }
    if (email == "" || email == null){  
    alert("Please enter your email");  
  }
  if (message == "" || message == null){  
    alert("Please enter your message");  
  }
}

//About us Menu
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//ISUD MENU
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}
function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}
function myFunction4() {
  document.getElementById("myDropdown4").classList.toggle("show");
}
function myFunction5() {
  document.getElementById("myDropdown5").classList.toggle("show");
}