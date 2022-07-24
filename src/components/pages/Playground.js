import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import { useState } from 'react';
import { TextField, Button } from '@mui/material'
import './Menu.scss';
import anyRequest from "../../requests/anyRequest"
import FadeOutAnimationHandler from "../templates/FadeOutAnimationHandler"

const Playground = () => {
  let methodStorage = localStorage.getItem("test_method"),
  endpointStorage = localStorage.getItem("test_endpoint"),
  bodyStorage = localStorage.getItem("test_body")
  
  const [method, setMethod] = useState(methodStorage || "POST")
  const [endpoint, setEndpoint] = useState(endpointStorage || "/join_game")
  const [body, setBody] = useState(bodyStorage || `{"X": 4, "Y": 5, "Z": 6}`)


  return (
    <FadeOutAnimationHandler>
      <Container sx={{
        marginY: 4
      }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField id="outlined-basic" label="Method" variant="outlined" value={method} onChange={e => {
                setMethod(e.target.value)
                localStorage.setItem("test_method", e.target.value)
              }}/>
          </Grid>
          <Grid item xs={8}>
            <TextField id="outlined-basic" label="Endpoint" variant="outlined" value={endpoint} onChange={e => {
                setEndpoint(e.target.value)
                localStorage.setItem("test_endpoint", e.target.value)
              }}/>
          </Grid>
          <Grid item xs={8}>
            <TextField id="outlined-basic" label="Body" variant="outlined" value={body} onChange={e => {
                setBody(e.target.value)
                localStorage.setItem("test_body", e.target.value)
              }}/>
          </Grid>
          <Grid item xs={8}>
            <Button variant="outlined" onClick={() => anyRequest(method, endpoint, {body: JSON.parse(body)})}>Wyślij (Z cookies)</Button>
          </Grid>
          <Grid item xs={8}>
            <Button variant="outlined" onClick={() => anyRequest(method, endpoint, {body: JSON.parse(body), noCredentials: true})}>Wyślij (Bez Cookies)</Button>
          </Grid>
        </Grid>      
      </Container>
    </FadeOutAnimationHandler>
  );
}

export default Playground;
