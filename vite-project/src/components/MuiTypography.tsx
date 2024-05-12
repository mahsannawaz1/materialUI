import { Typography } from "@mui/material"
import React from "react"

const MuiTypography = () => {
    return (
        <React.Fragment>
            <Typography variant="h1">h1 Heading</Typography>
            <Typography variant="h2">h2 Heading</Typography>
            <Typography variant="h3">h3 Heading</Typography>
            <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
            <Typography variant="h5">h5 Heading</Typography>
            <Typography variant="h6">h6 Heading</Typography>
            <Typography variant="subtitle1">subtitle 1</Typography>
            <Typography variant="subtitle2">subtitle 2</Typography>
            <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero dolorem quasi necessitatibus, voluptatibus, amet sunt voluptatem inventore officia iusto, natus veniam. Totam id cupiditate quas, accusamus nisi laboriosam? Dolores, perferendis.</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque earum placeat quam rerum voluptates sunt ratione libero possimus accusamus nulla! Illo saepe sapiente, qui excepturi dicta exercitationem numquam voluptatem impedit!</Typography>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque earum placeat quam rerum voluptates sunt ratione libero possimus accusamus nulla! Illo saepe sapiente, qui excepturi dicta exercitationem numquam voluptatem impedit!</Typography>
        </React.Fragment>
    )
}

export default MuiTypography