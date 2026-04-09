import React from "react";
import Layout from "../Layout.jsx";

function About({name}){
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">About {name}</h1>
      <p className="text-lg text-gray-600">This is the about page</p>
    </div>
  )
}
About.layout = page => <Layout>{page}</Layout>;
export default About