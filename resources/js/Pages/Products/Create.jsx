import { useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Create() {
 // const [name, setName] = useState('');
 // const [price, setPrice] = useState('');
 // const [description, setDescription] = useState('');

 const { data, setData, post, errors, processing } = useForm(
  {
   name: '',
   price: '',
   description: ''
  },
 );

 const handleSubmit = (e) => {
  e.preventDefault();
  post('/products', data);
 };
 return (
  <div>
   <h1>Create Product</h1>
   <form onSubmit={handleSubmit}>
    <input type='text' name='name' value={data.name} placeholder="Enter Name" onChange={(e) => setData('name', e.target.value)} />
    {errors.name && <div>{errors.name}</div>}
    <input type='text' name='price' value={data.price} placeholder="Enter Price" onChange={(e) => setData('price', e.target.value)} />
    {errors.price && <div>{errors.price}</div>}
    <input type='text' name='description' value={data.description} placeholder="Enter Description" onChange={(e) => setData('description', e.target.value)} />
    {errors.description && <div>{errors.description}</div>}
    <button type='submit'>Submit</button>
   </form>
  </div>
 );
}