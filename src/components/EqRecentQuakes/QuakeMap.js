import React from "react";
import "./map.css"
import {IonCard, IonGrid, IonRow} from "@ionic/react";
import {APIKeys} from "../../Keys/keys";

class QuakeMap extends React.Component {


    componentDidMount() {
        const tt = window.tt

        var point = (this.props.point !== undefined) ?
            this.props.point : [0,0];

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

        console.log(this.props)
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