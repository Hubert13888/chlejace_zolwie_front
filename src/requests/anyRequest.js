import VARS from "../clientData.js"

const anyRequest = async (method, endpoint, body, extraProps = {}, noCredentials = false, stringify = true) => {
    return new Promise((resolve, reject) => {
        fetch(`${VARS.serverURL}${endpoint}`, {
            method,
            credentials: noCredentials ? undefined : 'include',
            mode: 'cors',
            body: (() => {
                if(method === 'GET' || !body) return undefined
                if(stringify) return JSON.stringify(body)
                return body
            })(),
            ...extraProps
        })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
}

export default anyRequest;