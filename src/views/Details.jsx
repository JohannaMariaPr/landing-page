import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyPlantsList from "../components/MyPlantsList";
import PlantItem from "../components/PlantItem";

   // 

export default function Details() {
    const { id } = useParams();

    return (

    <PlantItem />
  );
}