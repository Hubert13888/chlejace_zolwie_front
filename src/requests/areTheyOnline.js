import anyRequest from "./anyRequest";

const areTheyOnline = () => {
    return new Promise((resolve, reject) => {
        anyRequest("GET", "/are_they_online", {}).then(
            response => {
                if(response?.status) {
                    return reject([response.status, response.error, response.path])
                }
                resolve()
            },
            err => {
                console.log(err)
                reject(["ARE_THEY_ONLINE", "WRONG_FETCH_SYNTAX", err])
            }
        )
        
    })
}

export {areTheyOnline}