//Given 2-D array render a list of each product given
//WIP:
//Product is not rendering :((((

import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'



const Products = ({products}) => {
    
    
    return (

        <main >
        <div />
       <Grid container justify="center" spacing = {5}>
            {products.map((product)=>(
                
               <Grid item key = {product.id} xs = {12} sm = {6} md = {4} lg = {3}>
                    <Product product = {product} />
               </Grid>
            ))}
       </Grid>
    </main>
    )
}

export default Products;
