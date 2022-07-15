import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import { useState } from 'react';
import { TextField } from '@mui/material'
import './Menu.scss';
import { Button } from '@mui/material';
import {joinGameRequest, joinGameRequestNC} from "../../requests/joinGame"

const App = () => {
  const [X, setX] = useState(0)
  const [Y, setY] = useState(0)
  const [Z, setZ] = useState(0)
  return (
    <>
      <Container sx={{
        marginY: 4
      }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField id="outlined-basic" label="X" variant="outlined" name='X' onChange={e => setX(e.target.value)}/>
          </Grid>
          <Grid item xs={8}>
            <TextField id="outlined-basic" label="Y" variant="outlined" name="Y" onChange={e => setY(e.target.value)}/>
          </Grid>
          <Grid item xs={8}>
            <TextField id="outlined-basic" label="Z" variant="outlined" name="Z" onChange={e => setZ(e.target.value)}/>
          </Grid>
          <Grid item xs={8}>
            <Button variant="outlined" onClick={() => joinGameRequest(X, Y, Z)}>Połącz z grą (Z cookies)</Button>
          </Grid>
          <Grid item xs={8}>
            <Button variant="outlined" onClick={() => joinGameRequestNC(X, Y, Z)}>Połącz z grą (Bez Cookies)</Button>
          </Grid>
        </Grid>      
      </Container>
    </>
  );
}

export default App;
