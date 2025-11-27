const chatBox = document.getElementById("chat-box");
const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const historyList = document.getElementById("history-list");
const searchBox = document.getElementById("history-search");

let fullHistory = [];

// Load history at start
window.onload = () => {
    updateTime();
    setInterval(updateTime, 1000);

    fetch("/history")
        .then(res => res.json())
        .then(data => {
            fullHistory = data.history;
            updateHistoryList(fullHistory);
        });
};

// Update current time
function updateTime() {
    document.getElementById("current-timestamp").textContent =
        new Date().toLocaleString();
}

// Update history list
function updateHistoryList(history) {
    historyList.innerHTML = "";
    history.forEach(item => {
        const div = document.createElement("div");
        div.className = "history-item";

        div.innerHTML = `
            <strong>You:</strong> ${item.user}<br>
            <strong>Bot:</strong> ${item.bot.substring(0, 50)}...
        `;

        div.onclick = () => loadHistoryChat(item);
        historyList.appendChild(div);
    });
}

// Search chats
searchBox.oninput = () => {
    const term = searchBox.value.toLowerCase();
    const filtered = fullHistory.filter(h =>
        h.user.toLowerCase().includes(term) ||
        h.bot.toLowerCase().includes(term)
    );
    updateHistoryList(filtered);
};

// Load old chat
function loadHistoryChat(item) {
    chatBox.innerHTML = `
        <div class="user"><b>You:</b> ${item.user}</div>
        <div class="bot"><b>Bot:</b> ${item.bot}</div>
    `;
}

// Send message
form.onsubmit = async (e) => {
    e.preventDefault();

    const userMsg = input.value;
    chatBox.innerHTML += `<div class="user"><b>You:</b> ${userMsg}</div>`;
    input.value = "";

    const res = await fetch("/chat", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({message: userMsg})
    });

    const data = await res.json();

    chatBox.innerHTML += `
        <div class="bot">
            <b>Bot:</b> ${data.response}
            <button class="like-btn" onclick="sendFeedback('${data.response}','like')">👍</button>
            <button class="dislike-btn" onclick="sendFeedback('${data.response}','dislike')">👎</button>
        </div>
    `;

    fullHistory = data.history;
    updateHistoryList(fullHistory);

    chatBox.scrollTop = chatBox.scrollHeight;
};

// Like / Dislike
function sendFeedback(message, type) {
    fetch("/feedback", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({message, feedback: type})
    });
}
