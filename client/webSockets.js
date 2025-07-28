const ws = new webSocket('https://cometswipe-test.onrender.com');

ws.onmessage = (event) => {
  const output = document.getElementById('output');
  output.textContent += 'Server: ' + event.data + '\n';
};
