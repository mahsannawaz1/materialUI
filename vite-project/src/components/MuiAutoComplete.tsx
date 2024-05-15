
import { Stack,Autocomplete,TextField } from '@mui/material'
import { useState } from 'react'

interface Skill {
    id:number,
    label:string
}

const MuiAutoComplete = () => {
    const [value,setValue] = useState<string | null>(null)
    console.log(value)
    const [value1,setValue1] = useState<Skill | null>(null)
    console.log(value1)
    const skills = ['HTML','CSS','JavaScript','TypeScript','React']
    const skillOptions = skills.map((skill,index)=>{
        return {
            id:index + 1,
            label:skill
        }
    })
    const handleChange = (event:React.ChangeEvent<{}>,newValue:string | null)=>{
        setValue(newValue)
    }
    const handleChange1 = (event:React.ChangeEvent<{}>,newValue:Skill | null)=>{
        setValue1(newValue)
    }
    return (
        <>
        <Stack width={"250px"} spacing={2} >
            <Autocomplete 
            options={skills} 
            renderInput={(params)=><TextField {...params} label="Skills" />}
            value={value}
            freeSolo
            onChange={handleChange}
            />
        </Stack>

        <Stack width={"250px"} spacing={2} >
            <Autocomplete 
            
            options={skillOptions} 
            renderInput={(params)=><TextField {...params} label="Skills" />}
            value={value1}
            onChange={handleChange1}
            />
        </Stack>
        </>

    )
}

export default MuiAutoComplete