import { Box,TextField,MenuItem } from "@mui/material"
import { useState } from "react"

const MuiSelect = () => {
    const [countries,setCountries] = useState<string[]>([])
    console.log(countries)
    const handleChangeCountry = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const value = event.target.value
        console.log(value,typeof value)
        setCountries(typeof value==='string' ? value.split(',') : value)
    }
    return (
        <Box width="250px" marginTop={2}>
            <TextField 
            value={countries} label="Select Country"
            fullWidth 
            onChange={handleChangeCountry} 
            select
            SelectProps={{
                multiple:true
            }}
            >
                <MenuItem value="pak">Pakistan</MenuItem>
                <MenuItem value="ind">India</MenuItem>
                <MenuItem value="us">USA</MenuItem>
                <MenuItem value="aus">Austrailia</MenuItem>
            </TextField>
        </Box>
    )
}

export default MuiSelect