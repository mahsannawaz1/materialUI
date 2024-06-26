import React, { useState } from 'react'
import { Accordion,AccordionSummary,AccordionDetails,Typography } from '@mui/material'
import  ExpandMore  from '@mui/icons-material/ExpandMore'

const MuiAccordion = () => {
    const [expanded,setExpanded] = useState<string | false>(false)
    const handleClick = (isExpanded:boolean,value:string)=>{
        setExpanded(isExpanded ? value : false)
    }
    return (
        <>
        <Accordion expanded={expanded === 'panel1'} onChange={(event,isExpanded)=>handleClick(isExpanded,'panel1')} >
            <AccordionSummary id="panel1-header" aria-controls='panel1-content' expandIcon={<ExpandMore />}>
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, quibusdam incidunt? Amet sunt assumenda voluptatum dolorum perferendis quisquam, vitae suscipit.
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={(event,isExpanded)=>handleClick(isExpanded,'panel2')}>
                <AccordionSummary id="panel2-header" aria-controls='panel2-content' expandIcon={<ExpandMore />}>
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, quibusdam incidunt? Amet sunt assumenda voluptatum dolorum perferendis quisquam, vitae suscipit.
                </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={(event,isExpanded)=>handleClick(isExpanded,'panel3')}>
                <AccordionSummary id="panel3-header" aria-controls='panel3-content' expandIcon={<ExpandMore />}>
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, quibusdam incidunt? Amet sunt assumenda voluptatum dolorum perferendis quisquam, vitae suscipit.
                </AccordionDetails>
        </Accordion>
        </>
        
    )
}

export default MuiAccordion