const apiUrl = "http://localhost:3000"

export async function getModels() {
    try {
        const response = await fetch(`${apiUrl}/models`);
        return await response.json();
    } catch (error) {
        return [];
    }
}

export async function getModel(modelId) {
    try {
        const response = await fetch(`${apiUrl}/models/${modelId}`);
        return await response.json();
    } catch (error) {
        return [];
    }
}

export async function getComponents(modelId) {
    try {
        const response = await fetch(`${apiUrl}/components/?modelId=${modelId}`);
        return await response.json();
    } catch (error) {
        return [];
    }
}





export async function createUser(data) {
    const response = await fetch(`/api/user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: data })
    })
    return await response.json();
}