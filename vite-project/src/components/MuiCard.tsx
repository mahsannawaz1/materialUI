
import { Box,Card,CardActions,CardContent, Typography,Button, CardMedia } from '@mui/material'

const MuiCard = () => {
    return (
        <Box width="300px" marginY={5}>
            <Card>
                <CardMedia 
                image='https://source.unsplash.com/random' 
                component="img" 
                height="200px" 
                alt='unsplash random image'
                />
                <CardContent>
                    <Typography
                    component='div'
                    gutterBottom
                    variant='h5'
                    >React</Typography>
                    <Typography variant='body2' color="text.secondary">React is a popular JavaScript library for building user interfaces, particularly single-page applications where you need a responsive, interactive, and dynamic experience</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">
                        Share
                    </Button>
                    <Button size="small">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </Box>
    )
    }

export default MuiCard