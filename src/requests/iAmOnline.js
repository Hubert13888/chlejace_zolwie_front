import anyRequest from "./anyRequest";

const iAmOnline = () => {
    return new Promise((resolve, reject) => {
        anyRequest("GET", "/i_am_online").then(
            response => {
                if(response?.status) {
                    return reject([response.status, response.error, response.path])
                }
                resolve()
            },
            err => {
                reject(["I_AM_ONLINE", "WRONG_FETCH_SYNTAX"])
            }
        )
        
    })
}

export {iAmOnline}