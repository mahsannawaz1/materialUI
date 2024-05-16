import { Box,Stack,Divider,Grid, Paper } from "@mui/material"

const MuiLayout = () => {
    return (
        <Paper  sx={{
            padding:4,
            bgcolor:'primary.light'

        }}  elevation={5}>
        <Stack direction="row" spacing={2} divider={<Divider flexItem orientation="vertical" />} sx={{
            border:'1px solid black'
        }}>
            <Box  sx={{
            bgcolor:'secondary.dark',
            color:'white',
            height:'100px',
            width:'100px',
            padding:2,
            textAlign:'center',
            "&:hover":{
                cursor:'pointer',
                bgcolor:'primary.dark',
                
            }
        }}>
            MuiLayout
        </Box>
            <Box display="flex" height="100px" width="100px" bgcolor={"success.light"} p={2}>

            </Box>
        </Stack>
        <Grid container marginY={2} rowSpacing={2} columnSpacing={1}>
            <Grid item xs={12} sm={3} lg={6}>
                <Box bgcolor={"success.light"} p={2}>Item 1</Box>
            </Grid>
            <Grid item xs={12} sm={3} lg={6}>
                <Box bgcolor={"success.light"} p={2}>Item 2</Box>
            </Grid>
            <Grid item xs={12} sm={3} lg={6}>
                <Box bgcolor={"success.light"} p={2}>Item 3</Box>
            </Grid>
            <Grid item xs={12} sm={3} lg={6}>
                <Box bgcolor={"success.light"} p={2}>Item 4</Box>
            </Grid>
        </Grid>
        <Grid container marginY={2} spacing={2}>
            <Grid item xs>
                <Box bgcolor={"success.light"} p={2}>Item 1</Box>
            </Grid>
            <Grid item xs={"auto"}>
                <Box bgcolor={"success.light"} p={2}>Item 2</Box>
            </Grid>
            <Grid item xs>
                <Box bgcolor={"success.light"} p={2}>Item 3</Box>
            </Grid>
            <Grid item xs>
                <Box bgcolor={"success.light"} p={2}>Item 4</Box>
            </Grid>
        </Grid>
        
        </Paper>
        

    )
}

export default MuiLayout