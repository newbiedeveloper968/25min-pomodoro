const username = document.getElementById("name").value;
function sendName() {
    const username = document.getElementById("name").value.trim();

    localStorage.setItem("username", username);
    window.location.href = "main.html";
}

var input = document.getElementById('name');
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendName();
    }
});