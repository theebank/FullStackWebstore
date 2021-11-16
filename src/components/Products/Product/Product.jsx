import React from 'react'
import { Card, CardActions,CardContent,CardMedia, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'


const Product = ({product}) => {
    
    return (
        
        <div>
            <Card >
                <CardMedia image = {product.productpath} title = {product.product} style={{height: 0, paddingTop: '100%'}}/>
                <CardContent>
                    <div >
                        <Typography variant = "h5" gutterBottom>
                            {product.product}
                        </Typography>
                        <Typography variant = "h5">
                            {product.price}
                        </Typography>
                    </div>
                    
                    <Typography dangerouslySetInnerHTML={{ __html: product.description}}variant = "body2" color = "textSecondary" />
                </CardContent>
                <CardActions disableSpacing >
                    <IconButton aria-label = "Add to Cart"> 
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card> 




        </div>
    )
}

////onClick = {()=> onAddToCart(product.id,1)}


export default Product;
