const username = document.getElementById("name").value;
function sendName() {
    localStorage.setItem("username", username);
    window.location.href = "index.html";
}

var input = document.getElementById('name');
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    localStorage.setItem("username", username);
    document.getElementById("continueBtn").click();
  }
});
