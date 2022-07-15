import VARS from "../clientData.js"

const joinGameRequest = async (X, Y, Z) => {
    let response, data;
    try {
        response = await fetch(`${VARS.serverURL}/join_game`, {
            method: "POST",
            credentials: 'include',
            mode: "cors",
            
            body: JSON.stringify({X, Y, Z})
        })
        console.log("Response", response)
        data = await response.json()
        console.log("Data", data)
    }
    catch(err) {
        console.error(err)
    }
}

const joinGameRequestNC = async (X, Y, Z) => {
    let response, data;
    try {
        response = await fetch(`${VARS.serverURL}/join_game`, {
            method: "POST",
            mode: "cors",
            
            body: JSON.stringify({X, Y, Z})
        })
        console.log("Response", response)
        data = await response.json()
        console.log("Data", data)
    }
    catch(err) {
        console.error(err)
    }
}
export {joinGameRequest, joinGameRequestNC}