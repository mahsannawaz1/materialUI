import { Stack,TextField,InputAdornment } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react"

const MuiText = () => {
    const [showPass,setShowPass] = useState(false)
    return (
        <>
        <Stack spacing={4} marginTop={1}>
            <Stack direction="row" spacing={4}>
                <TextField label="Name" variant="outlined"  />
                <TextField label="Email" variant="filled" />
                <TextField label="Password" variant="standard" />
            </Stack>
            <Stack direction="row" spacing={4}>
                <TextField label="Small" variant="standard" size="small"   />
                <TextField label="Medium" variant="filled" size="medium" />
                <TextField label="Medium" variant="filled" size="medium" color="secondary" />
                <TextField label="Required" variant="outlined" size="medium" color="error" required />
                <TextField label="Password" variant="outlined" size="medium" color="error" helperText="Do not share your password" type="password" />

            </Stack>
            <Stack direction="row" spacing={4}>

                <TextField label="Upload Image"  variant="outlined" size="medium" color="error" InputProps={{ readOnly:true }}  />

            </Stack>
            <Stack direction="row" spacing={4}>

                <TextField label="Amount" type="number" InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>
                }} />
                <TextField label="Amount" InputProps={{
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>
                }} />
                <TextField  label="Password" type={showPass ? "password" : "text"} InputProps={{
                    endAdornment: <InputAdornment position="end">{
                        showPass ? <VisibilityOffIcon onClick={()=>setShowPass(!showPass)} /> : <VisibilityIcon onClick={()=>setShowPass(!showPass)} />
                    }</InputAdornment>
                }} />

            </Stack>
        </Stack>
        </>
    )
}

export default MuiText