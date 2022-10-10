import React from "react";
import Card from "./Card";
import "./AllCourses.css";

const CardArray = [
    {
        img :"BlockchainImg.png",
        text:"Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network."
    },
    {
        img :"AI_ML.png",
        text:"AI/ML—short for artificial intelligence (AI) and machine learning (ML)—represents an important evolution in computer science and data processing that is quickly transforming a vast array of industries"
    },
    
]
const CardArray2 = [
    {
        img :"AR_VR.png",
        text:"Augmented reality (AR) and Virtual Reality (VR) bridge the digital and physical worlds. They allow you to take in information and content visually, in the same way you take in the world."
    },
    {
        img :"MetaverseImg.png",
        text:"In the metaverse, users traverse a virtual world that mimics aspects of the physical world using such technologies such as virtual reality (VR), augmented reality (AR), AI, social media and digital currency."
    },
    
]

export default function AllCourses() {
  return (
    <div className="AllCourses">
      <h2 className="animate-charcter">Explore More Courses</h2>
      <div className="Card_Div">
        {CardArray.map((d)=>(
            <Card  data = {d}/>

        ))}
    
      </div>
      <div className="Card_Div_2">
      {CardArray2.map((d)=>(
            <Card  data = {d}/>

        ))}
      </div>
    </div>
  );
}
