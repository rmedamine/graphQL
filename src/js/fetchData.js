const API_SRC = "https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql";
const JWT_STORAGE_KEY = "jwt";

export async function fetchData(query) {
    try {
        const jwt = localStorage.getItem(JWT_STORAGE_KEY);
        
        if (!jwt) {
            throw new Error('No authentication token found');
        }

        const response = await fetch(API_SRC, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${jwt}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'API request failed');
        }

        const result = await response.json();
        
        if (result.errors) {
            throw new Error(result.errors[0].message || 'GraphQL error');
        }

        return result;
    } catch (error) {
        console.error('API request error:', error);
        throw error;
    }
}


