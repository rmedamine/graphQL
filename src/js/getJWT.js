const API_SRC = "https://learn.zone01oujda.ma/api/auth/signin"
const JWT_STORAGE_KEY = "jwt"

export async function getJWT(username, password, container) {
    try {
        const credentials = btoa(`${username}:${password}`)
        const response = await fetch(API_SRC, {
            method: "POST",
            headers: {
                'Authorization': `Basic ${credentials}`,
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            const error = await response.json()
            throw new Error(error.message || 'Authentication failed')
        }

        const token = await response.json()
        localStorage.setItem(JWT_STORAGE_KEY, token)
        
        if (container) {
            container.remove()
        }
        
        window.location.reload()
    } catch (error) {
        console.error('Authentication error:', error)
        alert(error.message || 'An error occurred during authentication')
    }
}






