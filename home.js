import { Cards } from "./src/js/allcard.js"
import login from "./src/js/login.js"
import { headers } from "./src/js/header.js";


const JWT_STORAGE_KEY = "jwt"

async function initializeApp() {
    const token = localStorage.getItem(JWT_STORAGE_KEY)
    
    if (token) {
        try {
            headers()
            await Cards()
        } catch (error) {
            console.error("Error initializing app:", error)
            localStorage.removeItem(JWT_STORAGE_KEY)
            login()
        }
    } else {
        login()
    }
}

initializeApp()