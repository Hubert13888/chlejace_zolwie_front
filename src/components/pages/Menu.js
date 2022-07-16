import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import { useState } from 'react';
import { TextField, Button } from '@mui/material'
import './Menu.scss';
import {joinGameRequest} from "../../requests/joinGame"

const App = () => {
    const [X, setX] = useState(4)
    const [Y, setY] = useState(5)
    const [Z, setZ] = useState(6)
    return (
    <>
        <Container sx={{
        marginY: 4
        }}>
        <Grid container spacing={2}>
            <Grid item xs={8}>
            <TextField id="outlined-basic" label="X" variant="outlined" name='X' value={X} onChange={e => setX(e.target.value)}/>
            </Grid>
            <Grid item xs={8}>
            <TextField id="outlined-basic" label="Y" variant="outlined" name="Y" value={Y} onChange={e => setY(e.target.value)}/>
            </Grid>
            <Grid item xs={8}>
            <TextField id="outlined-basic" label="Z" variant="outlined" name="Z" value={Z} onChange={e => setZ(e.target.value)}/>
            </Grid>
            <Grid item xs={8}>
            <Button variant="outlined" onClick={() => joinGameRequest(X, Y, Z)}>Połącz z grą</Button>
            </Grid>
        </Grid>      
        </Container>
    </>
    );
}

export default App;
