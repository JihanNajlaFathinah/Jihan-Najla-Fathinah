const form = document.getElementById("chatForm");
const chatList = document.getElementById("chatList");

let chats = JSON.parse(localStorage.getItem("komunitasChat")) || [];

function renderChat() {
  chatList.innerHTML = "";
  chats.forEach(chat => {
    const div = document.createElement("div");
    div.className = "forum-item";
    div.innerHTML = `
      <h3>${chat.user}</h3>
      <p>${chat.text}</p>
    `;
    chatList.appendChild(div);
  });
}

renderChat();

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const user = username.value;
  const text = message.value;
  chats.unshift({ user, text });
  localStorage.setItem("komunitasChat", JSON.stringify(chats));
  form.reset();
  renderChat();
});
