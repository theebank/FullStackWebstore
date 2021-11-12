//Given 2-D array render a list of each product given
//WIP:
//render Product

import React from 'react'
import Product from './Product/Product';
import { Grid } from '@material-ui/core'



const Products = ({products}) => {
    
    
    return (
        <div>
            <Grid container justifyContent="center" spacing={5}>
                {products.forEach(x => {
                console.log(x);
                <Product product = {x.price} />})
            }        
            </Grid>
            
        </div>
    )
}

export default Products;
