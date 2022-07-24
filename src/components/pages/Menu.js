import { useState, useContext, useEffect } from 'react';
import {Link, useNavigate, useLocation} from "react-router-dom"
import { GeneralDataContext } from "../organisms/Contexts"

import { Container } from '@mui/system';
import { Grid, Box } from '@mui/material';
import { TextField, Button, Typography } from '@mui/material'

import {joinGameRequest} from "../../requests/joinGame"
import FadeOutAnimationHandler from "../templates/FadeOutAnimationHandler"
import ErrorHandler from "../templates/ErrorHandler";
import {CenterBox, GameGrid} from "../organisms/ContentPosition"

import './Menu.scss';

const Menu = () => {
    const [generalData, setGeneralData] = useContext(GeneralDataContext)
    const navigate = useNavigate()
    const {state} = useLocation()

    const [X, setX] = useState(4)
    const [Y, setY] = useState(5)
    const [Z, setZ] = useState(6)

    const handleJoinGameButton = (X, Y, Z) => {
        joinGameRequest(X, Y, Z).then(
            res => {
                setGeneralData(prev => ({
                    ...prev,
                    clientId: res
                }))
                navigate("/join_game")
            },
            err => {
                ErrorHandler({msg: "JOIN_GAME", info: err})
            }
        )
    }
    
    useEffect(() => {
        if(state?.err) {
            ErrorHandler({msg: state.err})
            window.history.replaceState({}, document.title)
        }
    }, [])

    return (
    <FadeOutAnimationHandler>
            <Grid container sx={{minHeight: "100vh"}}>
                <Grid container md={6}>
                    <Grid container justifyContent={"center"} alignItems={"center"} sx={{height: "30vh"}}>
                        <Typography variant="h2" component="h2" textAlign={"center"}>
                            Połącz z grą
                        </Typography>
                    </Grid>
                    <Grid container direction="column" alignItems={"center"} spacing={3}>
                        <Grid item>
                            <TextField label="X" variant="outlined" name='X' value={X} onChange={e => setX(e.target.value)}/>
                        </Grid>
                        <Grid item>
                            <TextField label="Y" variant="outlined" name="Y" value={Y} onChange={e => setY(e.target.value)}/>
                        </Grid>
                        <Grid item>
                            <TextField label="Z" variant="outlined" name="Z" value={Z} onChange={e => setZ(e.target.value)}/>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" onClick={() => handleJoinGameButton(X, Y, Z)}>Połącz z grą</Button>
                        </Grid>
                        <Grid item>
                            <Link to="/playground"><Button variant="outlined">Playground</Button></Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="column" md={6}>
                    <Grid container sx={{height: "30vh"}} justifyContent={"center"} alignItems={"center"}>
                        <Typography variant="h2" component="h2" textAlign={"center"}>
                            Stoły
                        </Typography>
                    </Grid>
                    <Grid container direction="column">
                    </Grid>
                </Grid>
            </Grid>
    </FadeOutAnimationHandler>
    );
}

export default Menu;
