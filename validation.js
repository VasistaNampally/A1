function validateForm() {
      var fname = document.getElementById("firstname").value;
      var lname = document.getElementById("lastname").value;
      var mname = document.getElementById("middlename").value;
      var cou = document.getElementById("course").value;
      var gen = document.getElementById("gender").value;
      var pho = document.getElementById("phone").value;
      var addr = document.getElementById("address").value;
      var eml = document.getElementById("email").value;
     var selectElement = document.getElementById("course");
if (selectElement.value == "") {
  alert("Please select an option.");
  return false;
}

var radioButtons = document.getElementsByName("gender");
var radioSelected = false;

for (var i = 0; i < radioButtons.length; i++) {
  if (radioButtons[i].checked) {
    radioSelected = true;
    break;
  }
}

if (!radioSelected) {
  alert("Please select an option.");
  return false;
}


      function validateRadioButtons(radioButtons) {
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      return true;
    }
  }
  return false;
}

      if (!validateEmail(eml)) {
       alert("Please enter a valid email address.");
       return false;
}
      function validateEmail(eml) {
 	 var regex = /^\S+@\S+\.\S+$/;
  	 return regex.test(eml);
	}
if (!validatePhoneNumber(pho)) {
  alert("Please enter a 10-digit phone number.");
  return false;
}
  function validatePhoneNumber(pho) {
  var regex = /^\d{10}$/;
  return regex.test(pho);
}


      var password = document.getElementById("password").value;
	if (!validatePassword(password)) {
 		 alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.");	
		  return false;
	}

	function validatePassword(password) {

  	if (password.length < 8) {
   	 return false;
  	}
	var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/;
  	if (!regex.test(password)) {
    	return false;
  	}

	  return true;
	}

      confirm("First Name : " + fname+ "\n" + "Middle Name : " + mname +"\n"+ "Last Name : " + lname +"\n"+ "Course : " + cou +"\n"+ "Gender : " + gen +"\n"+ "Email : " + eml +"\n"+ "Phone Number : " + pho+"\n" + "Address : " + addr);
} 
            
            if(confirm()== true)
		{ 
		return function(){
                document.getElementById("table").style.display="block";
                
                var table = document.getElementById("table");
                var row = table.insertRow(-1);
                var firstname= row.insertCell(0);
                var middlename = row.insertCell(1);
                var lastname = row.insertCell(2);
                var course= row.insertCell(3);
                var gender = row.insertCell(4);
                var email = row.insertCell(5);
                var phone= row.insertCell(6);
                var address = row.insertCell(7);
               

                firstname.innerHTML = fname;
                middlename.innerHTML = mname;
                lastname.innerHTML = lname;
 		course.innerHTML = cou;
                gender.innerHTML = gen;
                email.innerHTML = eml;
 		phone.innerHTML = pho;
                address.innerHTML =addr;

                
                return true;


}
