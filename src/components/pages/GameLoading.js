import { useContext, useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { GeneralDataContext } from "../organisms/Contexts"

//import {Grid} from "@mui/material"

import { iAmOnline } from "../../requests/iAmOnline"
import { areTheyOnline } from "../../requests/areTheyOnline"

const GameLoading = props => {
    const [generalData, setGeneralData] = useContext(GeneralDataContext)
    const navigate = useNavigate()

    const iAmOnlineFunc = () => {
        iAmOnline().then(
            () => {
                console.log("i_am_online", "ok")
            },
            err => {
                console.error(err)
                navigate("/", {state: {err: "I_AM_ONLINE"}})
            }
        )
    }
    const areTheyOnlineFunc = () => {
        areTheyOnline().then(
            () => {
                console.log("are_they_online", "ok")},
            err => {
                console.error(err)
                navigate("/", {state: {err: "ARE_THEY_ONLINE"}})
            }
        )
    }

    useEffect(() => {
        if(isSet(generalData.clientId)) {
            if(isSet(generalData.iAmOnline)) clearInterval(generalData.iAmOnline)
            if(isSet(generalData.areTheyOnline)) clearInterval(generalData.areTheyOnline)
            
            iAmOnlineFunc()
            areTheyOnlineFunc()
            setGeneralData(prev => ({
                ...prev,
                iAmOnline: setInterval(() => iAmOnlineFunc(), 4000),
                areTheyOnline: setInterval(() => areTheyOnlineFunc(), 4000)
            }))
        }
    }, [])

    return <>
        {isUnset(generalData.clientId) ? (
            <Navigate to="/" replace={true}/>
        ) : <>game loading</>
            /*<Grid container sx={{minHeight: "100vh", minWidth: "100vw"}} alignItems="center" justifyContent="center">
                <Grid item xl={12}>
                    <p>Loading</p>
                </Grid>
            </Grid>*/
        }
    </>
}

const isUnset = foo => typeof foo === "undefined" 
const isSet = foo => typeof foo !== "undefined" 

export default GameLoading