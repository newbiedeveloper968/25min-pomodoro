const username = document.getElementById("name").value;
function sendName() {
    const username = document.getElementById("name").value.trim();

    if (!username) return;

    localStorage.setItem("username", username);
    window.location.href = "pomodoro.html";
}

const input = document.getElementById("name");

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendName();
    }
});