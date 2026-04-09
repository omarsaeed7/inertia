import React from "react";
import Layout from "../Layout.jsx";

function Contact({name}){
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact {name}</h1>
      <p className="text-lg text-gray-600">This is the contact page</p>
    </div>
  )
}
Contact.layout = page => <Layout>{page}</Layout>;
export default Contact