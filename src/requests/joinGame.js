import anyRequest from "./anyRequest";

const joinGameRequest = (X, Y, Z) => {
    return new Promise((resolve, reject) => {
        anyRequest("POST", "/join_game", {body: {X, Y, Z}}).then(
            response => {
                if(response.status) {
                    return reject([response.status, response.error, response.path])
                }
                if(!response.client_id) {
                    return reject(["WRONG_BODY", "client_id", response.client_id])
                }
                resolve(response.client_id)
            },
            err => {
                reject(["JOIN_GAME", "WRONG_FETCH_SYNTAX", err])
            }
        )
        
    })
}

export {joinGameRequest}