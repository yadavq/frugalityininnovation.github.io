var i = 2;
var j;

function login_func(){
	document.getElementById("registration").style.display = "none";
	document.getElementById("login").style.display = "block";
	document.getElementById("conti").style.display="none"

}

function register_fun(){
	document.getElementById("login").style.display = "none";
	document.getElementById("registration").style.display = "block";
	document.getElementById("conti").style.display="none"

}

function contingent(){
	document.getElementById("login").style.display = "none";
	document.getElementById("registration").style.display = "none";
	document.getElementById("conti").style.display="block"
}

function addMember(){
	a = document.getElementById("member");
	b = document.createElement("input");
	b.setAttribute("type","text");
	b.setAttribute("id","memberemail"+(i++));
	b.setAttribute("class","form-control");

	a.appendChild(b);

}


function login(){

	var email = document.getElementById("email_login").value;
	var password = document.getElementById("password_login").value;
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  window.alert("Error : "+ errorMessage);
});
	a = document.getElementById("goback_button_login");
	b = document.createElement("button");
	b.setAttribute("class","btn oneMusic-btn mt-30");
	c = document.createTextNode("Go Back");
	b.appendChild(c);
	a.appendChild(b);
}

function getValueIndi(){
	window.indiaccomodation = document.getElementById("accomodation").value;
	console.log(indiaccomodation);
}


function create(){
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var name = document.getElementById("name").value;
	var college = document.getElementById("college").value;
	var phone = document.getElementById("phone").value;

	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  window.alert("Error : "+ errorMessage);
	}).then(function verification(){
			var user = firebase.auth().currentUser;

		user.sendEmailVerification().then(function() {
		  // Email sent.
		  window.alert("Successfully Registered. Verification Mail Sent, Please Verify Your E-mail");
		}).catch(function(error) {
		  console.log(error);
		});


		console.log(name);
		user.updateProfile({
		  displayName: name
		}).then(function() {
		  // Update successful.
		}).catch(function(error) {
		  // An error happened.
		});


		console.log(college + email);
		var database = firebase.database();
		var ref = database.ref("individual");
		var detail = {
			name: name,
			email: user.email,
			college: college,
			phone: phone,
			accomodation: window.indiaccomodation
		}
		ref.push(detail);



	});

	a = document.getElementById("goback_button");
	b = document.createElement("button");
	b.setAttribute("class","btn oneMusic-btn mt-30");
	c = document.createTextNode("Go Back");
	b.appendChild(c);
	a.appendChild(b);
}



function getValue(){

	window.accomo = document.getElementById("leaderaccomodation").value;
	console.log(accomo);
}

function contiCreate(){
	var leaderemail = document.getElementById("leaderemail").value;
	var leaderpassword = document.getElementById("leaderpassword").value;
	var leadername = document.getElementById("leadername").value;
	var conticollege = document.getElementById("conticollege").value;
	var leaderphone = document.getElementById("leaderphone").value;
	var memberemail =" ";
	for (j=1; j<i; j++){
		var mail = document.getElementById("memberemail"+(j)).value;
		memberemail += mail+" ";
	}
	console.log(memberemail);
	firebase.auth().createUserWithEmailAndPassword(leaderemail, leaderpassword).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  window.alert("Error : "+ errorMessage);
	}).then(function verification(){
			var user = firebase.auth().currentUser;

		user.sendEmailVerification().then(function() {
		  // Email sent.
		  window.alert("Verification Sent, Please Verify Your E-mail");
		}).catch(function(error) {
		  console.log(error);
		});


		console.log(leadername);
		user.updateProfile({
		  displayName: leadername
		}).then(function() {
		  // Update successful.
		}).catch(function(error) {
		  // An error happened.
		});


		console.log(leadername);
		var database = firebase.database();
		var ref = database.ref("contingent");
		var detail = {
			leadername:leadername,
			leaderemail: user.email,
			conticollege: conticollege,
			leaderphone: leaderphone,
			memberemail: memberemail,
			accomodation: window.accomo
			
		}
		ref.push(detail);
		a = document.getElementById("goback_button_conti");
		b = document.createElement("button");
		b.setAttribute("class","btn oneMusic-btn mt-30");
		c = document.createTextNode("Go Back");
		b.appendChild(c);
		a.appendChild(b);
	});

	}
