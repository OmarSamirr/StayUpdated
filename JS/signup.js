var signinLink = document.getElementById("signinLink");
var signupBtn = document.getElementById("signupBtn");

var newUserName = document.getElementById("newUserName");
var newUserEmail = document.getElementById("newUserEmail");
var newUserPassword = document.getElementById("newUserPassword");

var userList = [];
if (localStorage.getItem("users") != null) {
  userList = JSON.parse(localStorage.getItem("users"));
}

signinLink.addEventListener("click", function () {
  window.location.assign("./index.html");
});
signupBtn.addEventListener("click", function () {
  var existingFlag = false;
  document.getElementById("repeatMsg").classList.add("d-none");
  document.getElementById("validMsg").classList.add("d-none");

  var user = {
    name: newUserName.value,
    email: newUserEmail.value,
    password: newUserPassword.value,
  };

  for (var i = 0; i < userList.length; i++) {
    if (userList[i].email == user.email) {
      existingFlag = true;
      document.getElementById("repeatMsg").classList.remove("d-none");
      break;
    }
  }

  if (
    existingFlag == false &&
    validate(newUserName) &&
    validate(newUserEmail) &&
    validate(newUserPassword)
  ) {
    //success msg
    document.getElementById("validMsg").classList.remove("d-none");

    //push to array
    userList.push(user);

    //add to local storage
    localStorage.setItem("users", JSON.stringify(userList));

    //Go to SignIn Page after 1000ms
    setInterval(function () {
      window.location = "./index.html";
    }, 1000);
  }
});

function validate(element) {
  var text = element.value;
  var regex = {
    newUserName: /^[a-z ,.'-]+$/i,
    newUserEmail: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    newUserPassword: /^\w+$/,
  };

  if (regex[element.id].test(text)) {
    element.classList.remove("is-invalid");
    document.getElementById("invalidMsg2").classList.add("d-none");
    return true;
  } else {
    element.classList.add("is-invalid");
    document.getElementById("invalidMsg2").classList.remove("d-none");
    return false;
  }
}
