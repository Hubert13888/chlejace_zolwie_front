import React from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PopupHandler = props => {
  return (
    <div>
      <ToastContainer />
      {props.children}
    </div>
  );
}

/*
import { useContext } from "react"
import {PopupContext} from "../organisms/Contexts"

const isArrayEmpty = arr => arr.length === 0
const isArrayNotEmpty = arr => arr.length !== 0

const addPopup = (type, msg, [popupLine, setPopupLine]) => {
    let newPopupline = [...popupLine]
    newPopupline.push({
        type,
        msg,
        counter: isArrayEmpty(popupLine) ?
            setTimeout(() => setPopupLine(popupLine => 
                removePopup([popupLine, setPopupLine])
            ), 4000) :
            undefined
    })
    console.log(1, popupLine, newPopupline)
    setPopupLine(newPopupline)
}
const removePopup = ([popupLine, setPopupLine]) => {
    let newPopupline = [...popupLine]
    if(isArrayNotEmpty(newPopupline))
        clearTimeout(newPopupline[0].counter)
    newPopupline.shift()
    if(isArrayNotEmpty(newPopupline)) {
        newPopupline[0].counter = setTimeout(() => setPopupLine(popupLine => 
            removePopup([popupLine, setPopupLine])
        ), 4000)
    }
    return newPopupline
}

const PopupHandler = props => {
    const [popupLine, setPopupLine] = useContext(PopupContext)
    return (<>
        <div>
        Popups
        {popupLine.map((popup, index) => {
            let popupType = [{
                type: "",
                msg: "",
                counter: "",
            }]
            return <p key={index}>{popup.msg} : {popup.msg}</p>
        })}
        </div>
        <button onClick={() => addPopup("Jak", "Żyć", [popupLine, setPopupLine])}>Popup button</button>
        {props.children}
    </>)
} */

export default PopupHandler;