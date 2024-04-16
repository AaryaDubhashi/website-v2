import { SponsorCard  } from "./interfaces";
import Atropos from "atropos/react";
import { Box, Grid} from "@mui/material"
import {motion} from "framer-motion"


function Sponsors(props: {project : SponsorCard}) {
    let tierColor = ""
    if (props.project.tier == "platinum"){
        tierColor = "#778899";
    }
    else if (props.project.tier == "gold"){
        tierColor = "#C1AE7C"
    }
    else {
        tierColor = "#8E4A49"
    }
    return (
        <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            viewport={{
                margin:"-100px",
                
            }}
            transition={{duration:1}}
            style={{display:"flex", justifyContent:"center",alignItems:"center"}}
        >
                <Atropos
                highlight={false}
                style={{height: "500px", width: "800px", cursor: "pointer"}}
                >
                    <Box
                        minHeight="500px"
                        minWidth="800px"
                        borderRadius="35px"
                        padding="30px"
                        gap= "15px"
                        color= "#000000"
                        bgcolor = {tierColor}
                        height= "100px"
                    >
                        <Grid 
                            container
                            direction="row"
                            justifyContent="space-evenly"
                            alignItems="center"

                        >
                                

                        </Grid>

                        
                        
                    </Box>
                </Atropos>
        </motion.div>
    
        
    );
}
export default Sponsors;