import { TierTitle } from "./interfaces";
import {motion} from "framer-motion"

function SponsorTierTitles(props: {title: TierTitle}){
    let text = props.title.text
    return(
        <div>
            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            viewport={{
                margin:"-100px",
                
            }}
            transition={{duration:1}}
            style={{display:"flex", justifyContent:"center",alignItems:"center", fontSize:"50px",
            textAlign:"center", textDecoration:"underline", textUnderlineOffset:"10px",
            
        }}
        >
            {text}
            </motion.div>
            <div style={{height:"50px"}}></div>
        </div>
        
    );
}
export default SponsorTierTitles;