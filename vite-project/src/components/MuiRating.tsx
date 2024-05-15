import { Stack,Rating } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useState } from "react"

const MuiRating = () => {
    const [rating,setRating] = useState<number | null>(2)
    console.log(rating)
    const handleChange = (event:React.ChangeEvent<{}>,value:number | null) =>{
        setRating(value)
    }
    return (
        <Stack spacing={2}>
            <Rating highlightSelectedOnly value={rating} onChange={handleChange} precision={0.5} icon={<FavoriteIcon color={ rating!=null ? rating < 2.5 ? 'error' : rating < 3.5 ? 'warning' : 'success' : 'inherit' } />} emptyIcon={<FavoriteBorderIcon />} />
        </Stack>
    )
}

export default MuiRating