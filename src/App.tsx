import React from "react";
import logo from "./logo.svg";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Components/map";
import "./App.css";
import Mapagents from "./Components/mapagents";

export default function App() {
  const { isLoaded } = useLoadScript({
   
    googleMapsApiKey:"***************************************"
    // libraries:["places"]
  });

  if (!isLoaded)
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  return <Map />;
}
