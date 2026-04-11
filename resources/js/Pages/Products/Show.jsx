import React from "react";
import Layout from "../../Layout";


function Show({product}){
 return (
  <div>
   <h1>Show</h1>
   <p>This is the show page</p>
   <p>Name: {product.name}</p>
   <p>Price: {product.price}</p>
   <p>Description: {product.description}</p>
  </div>
 )
}
Show.layout = page => <Layout>{page}</Layout>
export default Show;