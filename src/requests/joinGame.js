import anyRequest from "./anyRequest";

const joinGameRequest = async (X, Y, Z) => {
    let response;
    try {
        response = await anyRequest("POST", "/join_game", {X, Y, Z}, {}, true)
        console.log(response)
    }
    catch(err) {
        console.error(err)
    }
}

export {joinGameRequest}