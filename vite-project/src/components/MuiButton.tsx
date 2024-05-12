import { Stack,Button,IconButton,ButtonGroup,ToggleButton,ToggleButtonGroup } from "@mui/material"
import SendIcon from '@mui/icons-material/Send'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import React, { useState } from "react"


const MuiButton = () => {
    const [formats,setFormats] = useState<string[]>([])
    console.log(formats)
    const [sort,setSort] = useState<string>("")
    console.log(sort)
    const handleFormatChange = (event:React.MouseEvent<HTMLElement>,updateFormats:string[])=>{
        setFormats(updateFormats)
    }
    const handleSortChange = (event:React.MouseEvent<HTMLElement>,sort:string)=>{
        setSort(sort)
    }
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction="row">
                <Button variant="text" href="https://google.com">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>

            <Stack spacing={2} direction="row">
                <Button variant="contained" color="primary">Primary</Button>
                <Button variant="contained" color="secondary">Secondary</Button>
                <Button variant="contained" color="warning">Warning</Button>
                <Button variant="contained" color="success">Success</Button>
                <Button variant="contained" color="error">Error</Button>
                <Button variant="contained" color="info" >Info</Button>
            </Stack>

            <Stack display="block" spacing={2} direction={"row"}>
                <Button variant="contained" color="primary" size="small">Small</Button>
                <Button variant="contained" color="primary" size="medium">Medium</Button>
                <Button variant="contained" color="primary" size="large">Large</Button>

            </Stack>

            <Stack spacing={2} direction="row">
                <Button variant="contained" startIcon={< SendIcon />} disableElevation>Send</Button>
                <Button variant="contained" endIcon={< SendIcon />} disableRipple>Send</Button>
                <IconButton aria-label="send" color="success" size="small">
                    <SendIcon  />
                </IconButton>
            </Stack>

            <Stack direction="row">
                <ButtonGroup variant="contained" color="secondary" orientation="vertical" size="small" aria-label="alignment button group">
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                </ButtonGroup>
            </Stack>

            <Stack direction="row">
                <ToggleButtonGroup aria-label="text-formatting" value={formats} onChange={handleFormatChange}>
                    <ToggleButton value="bold"> <FormatBoldIcon/> </ToggleButton>
                    <ToggleButton value="italic"> <FormatItalicIcon /> </ToggleButton>
                    <ToggleButton value="underline"> <FormatUnderlinedIcon /> </ToggleButton>
                </ToggleButtonGroup>
            </Stack>

            <Stack direction="row">
                <ToggleButtonGroup aria-label="text-formatting" value={formats} onChange={handleSortChange} exclusive>
                    <ToggleButton value="b"> <FormatBoldIcon/> </ToggleButton>
                    <ToggleButton value="i"> <FormatItalicIcon /> </ToggleButton>
                    <ToggleButton value="u"> <FormatUnderlinedIcon /> </ToggleButton>
                </ToggleButtonGroup>
            </Stack>

        </Stack>
    )
}

export default MuiButton