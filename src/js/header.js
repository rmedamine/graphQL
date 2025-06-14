import { logout } from "./login.js";
import { DivsIndes } from "./utils.js";


export  function headers() {
    let container = document.querySelector(".container")
    let headers = DivsIndes("headers")
    let header = DivsIndes("header")
    let h1 = document.createElement("h1")
    let button = document.createElement("button")
    h1.textContent = "Data Overview"
    button.textContent = "Log Out"
    button.classList = "button"
    header.appendChild(h1)
    headers.append(header, button)
    container.appendChild(headers)
    logout()

}