const btnPing = document.getElementById('ping');
const btnPong = document.getElementById('pong');

const responseDiv = document.getElementById('response');
const codeDiv = document.getElementById('code');

const getPing = () => {
  fetch('http://localhost:3333/' + 'ping')
    .then((res) => res.json())
    .then((data) => (responseDiv.innerHTML = data));

  codeDiv.hidden = false;
};

const getPong = () => {
  fetch('http://localhost:3333/' + 'pong')
    .then((res) => res.json())
    .then((data) => (responseDiv.innerHTML = data));

  codeDiv.hidden = false;
};

const clearResponse = () => {
  responseDiv.innerHTML = '';
  codeDiv.hidden = true;
};
