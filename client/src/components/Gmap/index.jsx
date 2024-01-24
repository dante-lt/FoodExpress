import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

const Gmap = (props) => {
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });
    const gmapCenter = { lat: 36.15238699720779, lng: -86.84162386612854 };

    return (
        <div>
            {
                !isLoaded ? (
                    <h1>Loading....</h1>
                ) : (
                    <GoogleMap
                        center={gmapCenter}
                        zoom={15} 
                        mapContainerStyle={{ height: `1000px`, width: `1000px` }}
                    >
                        <MarkerF
                            position={gmapCenter} 
                        />
                    </GoogleMap>
                )
            }
        </div>
    )
}

export default Gmap