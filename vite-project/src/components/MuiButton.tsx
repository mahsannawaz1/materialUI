import { Stack,Button,IconButton } from "@mui/material"
import SendIcon from '@mui/icons-material/Send'

const MuiButton = () => {
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
        </Stack>
    )
}

export default MuiButton