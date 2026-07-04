const username = localStorage.getItem("username");
const capitalized = username ? username.charAt(0).toUpperCase() + username.slice(1) : "";
document.getElementById("username").textContent = capitalized;

const start = document.getElementById("startBtn");
const stop = document.getElementById("stopBtn");
const reset = document.getElementById("resetBtn");
const timer = document.getElementById("timer");

let timeLeft = 1500;
let interval;

const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60

    timer.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
};

function startTimer() {
    if (interval) return;
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            clearInterval(interval);
            interval = null;
            alert("Time is up!")
            timeLeft = 1500;
            updateTimer()
        }
    }, 1000);
};

function stopTimer() {
    clearInterval(interval)
    interval = null;
}

function resetTimer() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

let tasks = [];

function displayTasks() {
    let html = "";

    for (let i = 0; i < tasks.length; i++) {
        html += `
            <li onclick="setCurrentTask(${i})">
                ${tasks[i]}
                <button
                    class="delete-btn"
                    onclick="event.stopPropagation(); removeTask(${i})">
                    ×
                </button>
            </li>
        `;
    }

    document.getElementById("list").innerHTML = html;
}

function setCurrentTask(i) {
    document.getElementById("ongoingTask").textContent = tasks[i];
    localStorage.setItem("currentTask", tasks[i]);
}

function addTask() {
    if (tasks.length >= 4) {
    alert("You can only have 4 tasks.");
    return;
}
    let taskInput = document.getElementById("task");
    let text = taskInput.value;
    if (text === "") {
        return;
    }
    tasks.unshift(text);
    taskInput.value = "";
    saveTasks();
    displayTasks();
}

function removeTask(i) {
    const removedTask = tasks[i];

    tasks.splice(i, 1);

    if (localStorage.getItem("currentTask") === removedTask) {
        localStorage.removeItem("currentTask");
        document.getElementById("ongoingTask").textContent = "Ongoing Task";
    }

    saveTasks();
    displayTasks();
}
    
function clearAll() {
    tasks = [];
    saveTasks();
    displayTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let saved = localStorage.getItem("tasks");
    if (saved !== null) {
        tasks = JSON.parse(saved);
    }
}

loadTasks();
displayTasks()

const currentTask = localStorage.getItem("currentTask");

if (currentTask) {
    document.getElementById("ongoingTask").textContent = currentTask;
}

const quotes = [
    "One little step.",
    "The fireflies are waiting.",
    "Stay with this moment.",
    "Tiny progress counts.",
    "25 minutes. That's all.",
    "A quiet evening to grow.",
    "Keep the streak alive.",
    "Even the stars take their time."
];

const random = Math.floor(Math.random() * quotes.length);
document.getElementById("quote").textContent = quotes[random];