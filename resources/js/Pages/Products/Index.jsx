import { Link, router } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";

const Index = ({ products }) => {
 const [name, setName] = useState('');
 const [price, setPrice] = useState('');
 const [description, setDescription] = useState('');

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(name, price, description);
  // axios.post('/api/products', {
  //  name,
  //  price,
  //  description
  // });
  router.post('/products', {
   name,
   price,
   description
  });
  setDescription('');
  setName('');
  setPrice('');
 }
  return (
   <>
    <form onSubmit={handleSubmit}>
     <input type='text' name='name' value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
     <input type='number' name='price' value={price} placeholder="Enter Price" onChange={(e) => setPrice(e.target.value)} />
     <input type='text' name='description' value={description} placeholder="Enter Description" onChange={(e) => setDescription(e.target.value)} />
     <button type='submit'>Submit</button>

    </form>
    <div>
     <h1>Products</h1>
     <ul>
      {products.map((product) => (
       <li key={product.id}>
        {product.name} - ${product.price} 
        <Link className='text-blue-500' href={`/products/${product.id}`}>View</Link>
       </li>
      ))}
      
     </ul>
    </div>
   </>
  );
 }

 export default Index; 