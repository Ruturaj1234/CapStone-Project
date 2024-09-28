import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../ImageSlider/imageslider";
import Content from "../content/content";

export default function Home() {
  return (
    <>
    <div className="p-6 bg-gray-50">
    <ImageSlider />
    <Content />
    </div>
    
    </>

  );
}
 