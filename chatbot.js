document.addEventListener('DOMContentLoaded', () => {
  const chatContainer = document.getElementById('chatbot-container');
  const minimizeChat = document.getElementById('minimize-chat');
  const userInput = document.getElementById('user-input');
  const sendMessage = document.getElementById('send-message');
  const chatMessages = document.getElementById('chat-messages');

  minimizeChat.addEventListener('click', () => {
    chatContainer.classList.toggle('minimized');
    minimizeChat.textContent = chatContainer.classList.contains('minimized') ? '+' : '-';
  });

  sendMessage.addEventListener('click', sendUserMessage);
  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendUserMessage();
    }
  });

  function sendUserMessage() {
    const message = userInput.value.trim();
    if (message) {
      addMessage('user', message);
      userInput.value = '';
      setTimeout(() => {
        const botResponse = getBotResponse(message);
        addMessage('bot', botResponse);
      }, 1000);
    }
  }
    function addMessage(sender, message) {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', sender, 'animate__animated', 'animate__fadeInUp');
      messageElement.textContent = message;
      chatMessages.appendChild(messageElement);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Add an animation when the chat bot opens
    minimizeChat.addEventListener('click', () => {
      chatContainer.classList.toggle('minimized');
      minimizeChat.textContent = chatContainer.classList.contains('minimized') ? '+' : '-';
    
      if (!chatContainer.classList.contains('minimized')) {
        chatContainer.classList.add('animate__animated', 'animate__bounceIn');
        chatContainer.addEventListener('animationend', () => {
          chatContainer.classList.remove('animate__animated', 'animate__bounceIn');
        }, { once: true });
      }
    });

    function getBotResponse(message) {
      const responses = [
        "That's an interesting point about innovation!",
      "Innovation is crucial for success in today's fast-paced world.",
      "Have you considered brainstorming with your team for new ideas?",
      "Continuous learning is key to fostering innovation.",
      "Don't be afraid to think outside the box!"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // Add an initial bot message
  addMessage('bot', "Hello! I'm here to chat about innovation. How can I help you today?");
});