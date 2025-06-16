import { logout } from "./login.js";
import { DivsIndes } from "./utils.js";


export  function headers() {
    let container = document.querySelector(".container")
    let headers = DivsIndes("headers")
    let header = DivsIndes("header")
    let button = document.createElement("button")
    button.textContent = "Log Out"
    button.classList = "button"
    headers.append(header, button)
    container.appendChild(headers)
    logout()

}