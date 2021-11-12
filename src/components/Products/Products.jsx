import React from 'react'
import Product from './Product/Product'
import { Grid } from '@material-ui/core'

const Products = ({products}) => {
    return (
        <div>
            <Grid container justify="center" spacing={5}>
            {products.map((product)=>(
                <Grid item key = {product.id} xs = {12} sm = {6} md = {4} lg = {3}>
                    <Product products = {product}/>
                </Grid>


            ))}
            </Grid>
            
        </div>
    )
}

export default Products;
