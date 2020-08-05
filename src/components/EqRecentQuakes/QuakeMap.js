import React, { useEffect } from "react";
import "./map.css"
import {IonCard, IonCol, IonGrid, IonImg, IonItem, IonRow} from "@ionic/react";
import {APIKeys} from "../../Keys/keys";

class QuakeMap extends React.Component {


    componentDidMount() {
        const tt = window.tt

        var point = [176.8839722,-39.64704514];

        var map = tt.map({
            key: APIKeys().Keys.TomTom,
            container: 'map',
            style: 'tomtom://vector/1/basic-main',
            center: point,
            zoom: 5
        });
        map.addControl(new tt.FullscreenControl());
        map.addControl(new tt.NavigationControl());

        var marker = new tt.Marker().setLngLat(point).addTo(map);
    }

    render(){
        return (
            <IonGrid>
                <IonRow>
                    <IonCard id="map"/>
                </IonRow>
            </IonGrid>
        );
    }
}

export default QuakeMap;

// import React, { useEffect } from "react";
// import {APIKeys} from "../../Keys/keys";
//
// function QuakeMap (props) {
//
//     useEffect(() => {
//
//         console.log("Mounted")
//
//
//         // snip
//         const tt = window.tt
//
//         const map = tt.map({
//             key: process.env.REACT_APP_TOM_TOM_API_KEY,
//             container: 'map',
//             style: 'tomtom://vector/1/basic-main'
//         })
//         map.addControl(new tt.FullscreenControl())
//         map.addControl(new tt.NavigationControl())
//
//         this.map = map
//         this.tt = tt
//         this.points = [] // for management of points
//         // snip
//
//     })
//
//
//     return (
//         <>
//         <div id="map" />
//         </>
//         )
//
// }
//
// export default QuakeMap;