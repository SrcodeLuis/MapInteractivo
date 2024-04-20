const btnSingIn = document.getElementById("sign-in");
const btnSingUp = document.getElementById("sign-up");
const formRegister = document.querySelector(".Register1");
const formLogin = document.querySelector(".login");
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");


btnSingIn.addEventListener("click", e => {
    formLogin.classList.add("hide"); // Cambiar formlogin por formLogin
    formRegister.classList.remove("hide");
  });
  
  btnSingUp.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide"); // Cambiar formlogin por formLogin
  });
/*CAMBIO DE VENTANA*/

registerForm.addEventListener("submit", handleRegistration);

function handleRegistration(event) {
  event.preventDefault();
  const codeInput = document.getElementById("registerCode");
  const codeValue = codeInput.value;
  const validCode = "576Robert"; // Código válido

  if (codeValue === validCode) {
    registerUser();
  } else {
    alert("Código inválido. No se puede registrar.");
  }
}


function registerUser() {
    const email = document.getElementById("UserCliente").value;
    const password = document.getElementById("PassWCliente").value;
  
    const newUser = { email, password };
  
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    registeredUsers.push(newUser);
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
  
    alert("Registro exitoso");
    registerForm.reset();
  }


  loginForm.addEventListener("submit", handleLogin);

  function handleLogin(event) {
    event.preventDefault();
  
    const email = document.getElementById("UserCliente").value;
    const password = document.getElementById("PassWCliente").value;
  
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
  
    const user = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );
  
    if (user) {
      alert("Inicio de sesión exitoso");
      window.location.href = "Ventanas.html"; // Reemplaza con la ruta de tu página de destino
    } else {
      alert("Credenciales inválidas");
    }
  }