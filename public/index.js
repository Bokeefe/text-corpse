// Connect to the WebSocket server
const ws = new WebSocket('ws://localhost:3000');

// Handle connection open
ws.onopen = () => {
  console.log('Connected to the server');
};

// Handle incoming messages
ws.onmessage = (event) => {
  console.log('Received: ' + event.data);
};

// Handle connection close
ws.onclose = () => {
  console.log('Disconnected from the server');
};

// Handle errors
ws.onerror = (error) => {
  console.error('WebSocket error: ' + error);
};

// Send a message to the server
function sendMessage(message) {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(message);
  } else {
    console.error('WebSocket is not open. Unable to send message: ' + message);
  }
}

// Use the handleKeyUp function to send messages when the Enter key is pressed
function handleKeyUp(event) {
  if (event.key === 'Enter') {
    const message = document.getElementById('message').value;
    sendMessage(message);
  }
}