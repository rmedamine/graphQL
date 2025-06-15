import { getJWT } from "./getJWT.js";

const CONTAINER_CLASS = "container";

export default function login() {
    const container = document.querySelector(`.${CONTAINER_CLASS}`);
    
    const loginContainer = document.createElement("div");
    loginContainer.className = "login-container";
    
    const loginCard = document.createElement("div");
    loginCard.className = "login-card";
    
    const loginHeader = document.createElement("div");
    loginHeader.className = "login-header";
    
    const title = document.createElement("h2");
    title.textContent = "Connexion to graphQl";
    title.className = "login-title";
    
    const subtitle = document.createElement("p");
    subtitle.textContent = "Welcome !";
    subtitle.className = "login-subtitle";
    
    loginHeader.appendChild(title);
    loginHeader.appendChild(subtitle);
    
    const form = document.createElement("form");
    form.className = "login-form";
    
    const usernameGroup = createFormGroup("username", "Username ", "text");
    const passwordGroup = createFormGroup("password", "Password ", "password");
    
    const button = createButton("submit");
    
    form.appendChild(usernameGroup);
    form.appendChild(passwordGroup);
    form.appendChild(button);
    
    loginCard.appendChild(loginHeader);
    loginCard.appendChild(form);
    loginContainer.appendChild(loginCard);
    container.appendChild(loginContainer);
    
    form.addEventListener("submit", handleSubmit);
}

function createFormGroup(id, label, type) {
    const group = document.createElement("div");
    group.className = "form-group";
    
    const labelElement = document.createElement("label");
    labelElement.htmlFor = id;
    labelElement.textContent = label;
    
    const input = document.createElement("input");
    input.id = id;
    input.type = type;
    input.className = "form-input";
    input.placeholder = `Enter your ${label.toLowerCase()}`;
    
    group.appendChild(labelElement);
    group.appendChild(input);
    
    return group;
}

function createButton(text) {
    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = text;
    button.className = "login-button";
    return button;
}

async function handleSubmit(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (!username || !password) {
        showError("Veuillez remplir tous les champs");
        return;
    }
    
    await getJWT(username, password, document.querySelector(`.${CONTAINER_CLASS}`));
}

function showError(message) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;
    
    const form = document.querySelector(".login-form");
    form.insertBefore(errorDiv, form.firstChild);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

export function logout() {
    const container = document.querySelector(`.${CONTAINER_CLASS}`);
    
    container.innerHTML = '';
    
    const logoutButton = document.createElement("button");
    logoutButton.className = "login-button"; 
    logoutButton.textContent = "Logout";
    
    container.appendChild(logoutButton);
    
    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("jwt");
        location.reload();
    });
}
