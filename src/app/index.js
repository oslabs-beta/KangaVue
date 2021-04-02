// var app = new Vue({ 
//     el: '#root',
//     data: {
//         message: 'Hello Vue!'
//     }
// });
document.addEventListener("DOMContentLoaded", () => {
  // const root = document.getElementById('root');
  // const newChild = document.createElement('p');
  // newChild.innerHTML = 'Hi world. This will be a vue app someday';
  // root.appendChild(newChild);
  console.log('index.js has been triggered!!!');
});

const NAME = 'Jon Doe Junior';
const rootApp = document.getElementById('root-app');
rootApp.innerHTML = `<p>Hello, ${NAME}</p>`;
