import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';


function App() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });
 return (
   <ReactMapGL 
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}   
      
   >


   </ReactMapGL>
 );
}

export default App;
    

