const input = document.getElementById('userInput');
const chatbox = document.getElementById('chatbox');
const sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) return;

  // Show what you typed
  chatbox.innerHTML += `<p><b>You:</b> ${text}</p>`;
  input.value = '';

  // Temporary fake bot reply (placeholder for now)
  setTimeout(() => {
    chatbox.innerHTML += `<p><b>Bot:</b> (placeholder) I'll be an AI reply soon.</p>`;
  }, 500);
});
