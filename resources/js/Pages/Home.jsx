import React from "react";
import Layout from "../Layout.jsx";

function Home({name}){
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Hello {name}</h1>
      <p className="text-lg text-gray-600">Welcome to our Inertia.js + React + Laravel application</p>
    </div>
  )
}
Home.layout = page => <Layout>{page}</Layout>;
export default Home