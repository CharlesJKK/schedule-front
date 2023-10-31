/*let passwordInput = document.getElementById('password');
let emailInput = document.getElementById('sign-in-email')*/

function revealPassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

function signIn() {
  let passwordInput = document.getElementById('password').value
  let emailInput = document.getElementById('sign-in-email').value

  const dados = {
    email: emailInput,
    password: passwordInput
  }

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
  };

  fetch('http://localhost:3000/schedule/login', options).then((response) => {
    if(response.status == 200){
      alert("Você está logado!")
    } else {
      alert("Erro ao logar!")
    }
  }).catch((err) => console.log(err))
}

function signUp() {
  let usernameInput = document.getElementById('username').value
  let emailInput = document.getElementById('sign-up-email').value
  let passwordInput = document.getElementById('password').value
  let confirmPasswordInput = document.getElementById('confirmpassword').value

  const dados = {
    username: usernameInput,
    email: emailInput,
    password: passwordInput,
    confirmpassword: confirmPasswordInput
  }

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
  };

  fetch('http://localhost:3000/schedule/register', options).then((response) => {
    if(response.status == 201){
      alert("Usuário registrado com sucesso")
    } else{
      alert("Houve um erro ao cadastrar o usuário!")
    }
  }).catch((err) => console.log(err))
}