import { Routes, Route, useLocation } from 'react-router-dom'
import PopupHandler from './components/templates/PopupHandler'
import RouteChangeHandler from './components//templates/RouteChangeHandler'
import { AnimatePresence } from 'framer-motion'

import Playground from './components/pages/Playground';
import Menu from './components/pages/Menu';
import GameLoading from './components/pages/GameLoading';

const IndexAnimation = () => {
    const location = useLocation()

    return (
        <AnimatePresence>
            <PopupHandler>
                <RouteChangeHandler>
                    <Routes location={location} key={location.pathname}>
                            <Route path="/join_game" element={<GameLoading/>}/>
                            <Route path="playground" element={<Playground/>}/>
                            <Route path="/" element={<Menu/>}/>
                    </Routes>
                </RouteChangeHandler>
            </PopupHandler>
        </AnimatePresence>
    )
}
export default IndexAnimation