import styled from "@emotion/styled";
import {Box, Grid} from '@mui/material'

const CenterBox = styled(Box)`
    display: grid;
    place-items: center;
`
const GameGrid = styled(Grid)(props => {
    let finCss = {}
    if(props.minHeight) finCss.minHeight = props.minHeight
    return finCss
})
export {CenterBox, GameGrid}