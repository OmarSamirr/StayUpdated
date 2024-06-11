var signupLink = document.getElementById("signupLink");
var loginBtn = document.getElementById("loginBtn");

var userEmail = document.getElementById("userEmail");
var userPassword = document.getElementById("userPassword");

var userList = [];
if (localStorage.getItem("users") != null) {
  userList = JSON.parse(localStorage.getItem("users"));
}

signupLink.addEventListener("click", function () {
  window.location.assign("./signup.html");
});

loginBtn.addEventListener("click", function () {
  var existingFlag = false;
  var validFlag = false;
  document.getElementById("invalidMsg1").classList.add("d-none");
  document.getElementById("incorrectMsg").classList.add("d-none");
  userEmail.classList.remove("is-invalid");
  userPassword.classList.remove("is-invalid");



  var user = {
    email: userEmail.value,
    password: userPassword.value,
  };

  for (var i = 0; i < userList.length; i++) {
    if (userList[i].email == user.email) {
      existingFlag = true;
      if (userList[i].password == user.password) {
        validFlag = true;
        user.name = userList[i].name;
      }
    }
  }

  if (user.email.length == 0 ) {
    document.getElementById("invalidMsg1").classList.remove("d-none");
    userEmail.classList.add("is-invalid");

  }else if(user.password == 0){
    document.getElementById("invalidMsg1").classList.remove("d-none");
    userPassword.classList.add("is-invalid");
  } 
  else if (existingFlag == false || validFlag == false) {
    document.getElementById("incorrectMsg").classList.remove("d-none");
  } else {
    //Save User to LS
    localStorage.setItem("sessionUser", JSON.stringify(user));

    //Go to Login Page
    window.location = "./home.html"
  }
});
