let config = {
    url: 'localhost:8000/api/',
    route: {
        list: "/todos"
    }
}

function list(username) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    return fetch(config.url+config.route.list, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.json().then(data => {
        return data;
    });
}

export const Api = { list };