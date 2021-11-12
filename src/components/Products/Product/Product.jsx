import React from 'react'
import { Card, CardActions,CardContent,CardMedia } from '@material-ui/core'


const Product = ({Product}) => {
    console.log("hit")
    return (
        <div>
            <h1>{Product}</h1>
        </div>
    )
}




export default Product;
