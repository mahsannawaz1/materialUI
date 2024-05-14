import { Box,FormControlLabel,Checkbox, FormGroup, FormLabel, FormControl } from "@mui/material"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { useState } from "react"



const MuiCheckBox = () => {
    const [acceptance,setAcceptance] = useState<boolean>(false)
    
    const [skills,setSkills] = useState<string[]>([])
    console.log(skills)
    const handleSkillChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        const index = skills.indexOf(value)
        if(index==-1){
            setSkills([...skills,value])
        }
        else{
            setSkills(skills.filter(skill=>skill!=value))
        }
    }
    return (
        <>
        <Box marginTop={2}>
            <Box>
                <FormControlLabel  control={<Checkbox checked={acceptance} onChange={()=>setAcceptance(!acceptance)}  />} label='I accept terms and conditions'  />
            </Box>
            <Box>
                <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} checked={acceptance} onChange={()=>setAcceptance(!acceptance)} />
            </Box>
        </Box>
        <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup>
                    <FormControlLabel value="js" label='Javascript' control={<Checkbox checked={skills.includes('js')} onChange={handleSkillChange}  />} />
                    <FormControlLabel value="react" label='React JS' control={<Checkbox checked={skills.includes('react')} onChange={handleSkillChange} />}  />
                    <FormControlLabel value="express" label='Express JS' control={<Checkbox checked={skills.includes('express')} onChange={handleSkillChange} />} />
                </FormGroup>
            </FormControl>
        </Box>
        </>
        
    )
}

export default MuiCheckBox