import { useState } from "react"
import {GeneralDataContext} from "../organisms/Contexts"

const GeneralDataContextManager = props => {
    const [generalData, setGeneralData] = useState([])
    return <GeneralDataContext.Provider value={[generalData, setGeneralData]}>{props.children}</GeneralDataContext.Provider>
}

const ContextManagers = props => {
    return  <>
        <GeneralDataContextManager>{props.children}</GeneralDataContextManager>
    </>
}

export default ContextManagers;