var logoutBtn = document.getElementById("logoutBtn");
var activeUser = (userList = JSON.parse(localStorage.getItem("sessionUser")));
var displayName = document.getElementById("displayName");


logoutBtn.addEventListener("click", function () {
  window.location = "./index.html";
  localStorage.removeItem("sessionUser");
});

displayName.innerHTML = activeUser.name;