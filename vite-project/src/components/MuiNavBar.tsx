
import { AppBar,IconButton,Stack,Toolbar, Typography,Button,Menu,MenuItem} from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';

const MuiNavBar = () => {
    const [anchorElement,setAnchorElement] = useState<HTMLElement | null >(null)
    const open = Boolean(anchorElement)
    const handleClick = (event:React.MouseEvent<HTMLButtonElement>)=>{
        setAnchorElement(event.currentTarget)
    }
    const handleClose= (event:React.MouseEvent)=>{
        setAnchorElement(null)
    }
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
                    <Button endIcon={ open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} color='inherit' 
                    id='resources-btn' 
                    onClick={handleClick} 
                    aria-label={open ? 'resources-menu': undefined}
                    aria-haspopup='true'
                    aria-expanded={open ? 'true' : undefined}
                    >Resources</Button>
                </Stack>
                <Menu open={open} id='resources-menu' anchorEl={anchorElement} 
                MenuListProps={{
                    'aria-labelledby':'resources-btn'
                }}
                onClose={handleClose}
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal:'right'
                }}
                transformOrigin={{
                    vertical:'top',
                    horizontal:'right'
                }}
                >
                    <MenuItem onClick={handleClose}>Blog</MenuItem>
                    <MenuItem onClick={handleClose}>Podcast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default MuiNavBar