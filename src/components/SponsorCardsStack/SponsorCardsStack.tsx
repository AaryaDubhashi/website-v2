import { Box, Typography } from "@mui/material"
import { useScroll } from "framer-motion";
import React from "react";
import { SponsorTier } from "../SponsorCreditCard/interfaces";
import SponsorCreditCard from "../SponsorCreditCard";

export default function SponsorCardsStack() {
    const cardContainer = React.useRef(null);
    const [cardContainerScale, setCardContainerScale] = React.useState(1);
    const [sponsorData, setSponsorData] = React.useState<SponsorTier[]>([]);
    const { scrollYProgress } = useScroll({
        target: cardContainer,
        offset: ['start start', 'end end']
    });

    React.useEffect(() => {
        scrollYProgress.on('change', (e) => {
            if (e < 0.9) 
                setCardContainerScale(Math.abs(1 - ((e * 0.08))));
        });

        setSponsorData(() => ([{
            px: 0,
            tier: "Platinum",
            members: [],
            logos: "",
        }, {
            px: 25,
            tier: "Gold",
            members: [],
            logos: "",
        }, {
            px: 50,
            tier: "Bronze",
            members: [],
            logos: "",
        }]));
    }, []);

    return (
        <Box 
            ref={cardContainer}
            sx={{
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                gap: '50px',
                minHeight: `${(60 * sponsorData.length) + 70}vh`,
                transform: `scale(${cardContainerScale})` 
            }}
        >
            <Typography 
                sx={{ 
                    position: 'sticky',
                    top: '130px',
                    fontSize: '3rem', 
                    fontWeight: 'bold', 
                }}
            >
                Meet Our Sponsors
            </Typography>
            {
                sponsorData.map((sponsor, index) => (
                    <SponsorCreditCard
                        project={sponsor} 
                        sx={{ 
                            top: `calc(30vh + ${index * 40}px)`,
                            transform: `scale(${1 + (index * 0.03)})` 
                        }}
                    />
                ))
            }
        </Box>
    );
}