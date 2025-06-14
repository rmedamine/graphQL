import { getJWT } from "./getJWT.js";

const INPUT_CLASS = "input";
const BUTTON_CLASS = "button";
const CONTAINER_CLASS = "container";

export default function login() {
    const container = document.querySelector(`.${CONTAINER_CLASS}`);
    
    const form = document.createElement("form");
    form.className = "login-form";
    
    const inputUsername = createInput("username", "Enter Username");
    const inputPassword = createInput("password", "Enter Password", "password");
    const button = createButton("Login!");
    
    form.appendChild(inputUsername);
    form.appendChild(inputPassword);
    form.appendChild(button);
    container.appendChild(form);
    
    form.addEventListener("submit", handleSubmit);
}

function createInput(id, placeholder, type = "text") {
    const input = document.createElement("input");
    input.id = id;
    input.type = type;
    input.placeholder = placeholder;
    input.className = INPUT_CLASS;
    return input;
}

function createButton(text) {
    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = text;
    button.className = BUTTON_CLASS;
    return button;
}

async function handleSubmit(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (!username || !password) {
        alert("Please enter both username and password");
        return;
    }
    
    await getJWT(username, password, document.querySelector(`.${CONTAINER_CLASS}`));
}

export function logout() {
    const logoutButton = document.querySelector(`.${BUTTON_CLASS}`);
    if (logoutButton) {
        logoutButton.addEventListener("click", (event) => {
            event.preventDefault();
            localStorage.removeItem("jwt");
            location.reload();
        });
    }
}
