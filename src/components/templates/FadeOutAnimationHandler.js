import {motion} from "framer-motion"

const FadeOutAnimationTemplate = (props) => {
    return(
        <motion.div initial={{
            opacity: 0
        }} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div style={{minHeight: "100vh"}}>
                {props.children}
            </div>
        </motion.div>
    )
}
export default FadeOutAnimationTemplate