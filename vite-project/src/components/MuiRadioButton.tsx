import { Box,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio } from "@mui/material"
import { useState } from "react"

const MuiRadioButton = () => {
    const [experience,setExperience] = useState<string>("")
    const handleChangeExperience = (event:React.ChangeEvent<HTMLInputElement>) =>{
        console.log(event.target.value)
        setExperience(event.target.value)
    }
    return (
        <Box marginTop={3}>
            <FormControl>
                <FormLabel color="primary" id="job-experience-group-label">Years Of Experience</FormLabel>
                <RadioGroup row name="job-experience-group" aria-labelledby="job-experience-group-label" value={experience} onChange={handleChangeExperience}>
                    <FormControlLabel control={<Radio size="small" color="secondary" /> } label="2-4" value="2-4" />
                    <FormControlLabel control={<Radio size="small" color="secondary"/> } label="0-2" value="0-2" />
                    <FormControlLabel control={<Radio size="small" color="secondary"/> } label="4-10" value="4-6" />
                </RadioGroup>
            </FormControl>
        </Box>
    )
}

export default MuiRadioButton