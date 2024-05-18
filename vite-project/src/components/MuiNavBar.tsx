
import { AppBar,IconButton,Stack,Toolbar, Typography,Button} from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const MuiNavBar = () => {
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{flexGrow:1}}>POKEMON APP</Typography>
                <Stack direction={'row'} spacing={2}>
                    <Button color='inherit'>Features</Button>
                    <Button color='inherit'>About</Button>
                    <Button color='inherit'>Home</Button>
                    <Button color='inherit'>FAQ</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default MuiNavBar