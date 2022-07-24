import VARS from "../clientData.js"

const anyRequest = async (method, endpoint, {body, extraProps = {}, noCredentials = false, stringify = true, noResponse = false}) => {
    return new Promise((resolve, reject) => {
        fetch(`${VARS.serverURL}${endpoint}`, {
            method,
            credentials: noCredentials ? undefined : 'include',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: (() => {
                if(method === 'GET' || !body) return undefined
                if(stringify) return JSON.stringify(body)
                return body
            })(),
            ...extraProps
        })
        .then(response => {
            if(noResponse) {
                return resolve()
            }
            return response.json()
        })
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
}

export default anyRequest;