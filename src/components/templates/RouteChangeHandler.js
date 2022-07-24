import { useEffect, useContext } from "react"
import {useLocation} from "react-router-dom"
import { GeneralDataContext } from "../organisms/Contexts"

const RouteChange = props => {
    const location = useLocation()
    
    const [generalData, setGeneralData] = useContext(GeneralDataContext)

    const GAMEPATHS = ["/join_game", "/game"]

    useEffect(() => {
        if(!GAMEPATHS.includes(location.pathname)) {
            if(generalData.iAmOnline) {
                clearTimeout(generalData.iAmOnline)
            }
            if(generalData.areTheyOnline) {
                clearTimeout(generalData.areTheyOnline)
            }
            setGeneralData({})
        }
    }, [location])

    return <>
        {props.children}
    </>
}
export default RouteChange