import React, {useEffect, useState} from "react";
import QuakeMap from "./QuakeMap"
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption
} from "@ionic/react";
import {getEqData} from "../GetEqData";

const EqRecentQuakes: React.FC = () => {

    const [reload, setReload] = useState(false);

    const [stats, setStats] = useState({"features": []});

    const [MMI, setMMI] = useState(6);

    useEffect(() => {
        pullData(MMI);}, []);

    function pullData(i : any) {
        setMMI(i);
        const stats = getEqData('https://api.geonet.org.nz/quake?MMI='+i)
            .then((stats) => {
                setStats(stats);
                setReload(!reload)
            })
    }

    const [point, setPoint] = useState();
    const [selectedQuake, setSelectedQuake] = useState({});

    function showQuake(element : any){
        setPoint(element.geometry.coordinates)
        setSelectedQuake(element)
        setReload(!reload)
    }
    return (
        <>
            {point !== undefined && (
                <>
                    <QuakeMap point={point}/>
                </>
            )}
            <IonCard>
                <IonCardContent>
                    Currently Showing earthquakes with a MMI of {MMI} or greater
                </IonCardContent>
                <IonItem>
                    <IonLabel>Change the search:</IonLabel>
                    <IonSelect
                        value={MMI}
                        placeholder={MMI.toString()}
                        onIonChange={e =>
                            pullData(e.detail.value)
                        }
                    >
                        <IonSelectOption value={1}>1</IonSelectOption>
                        <IonSelectOption value={2}>2</IonSelectOption>
                        <IonSelectOption value={3}>3</IonSelectOption>
                        <IonSelectOption value={4}>4</IonSelectOption>
                        <IonSelectOption value={5}>5</IonSelectOption>
                        <IonSelectOption value={6}>6</IonSelectOption>
                        <IonSelectOption value={7}>7</IonSelectOption>
                        <IonSelectOption value={8}>8</IonSelectOption>
                        <IonSelectOption value={9}>9</IonSelectOption>
                        <IonSelectOption value={10}>10</IonSelectOption>
                    </IonSelect>
                </IonItem>
            </IonCard>

            {(stats !== undefined) &&
            (stats.features).map((element : any) => (
                <>
                    <IonCard>
                    <IonItem>
                        <IonCardContent>{element.properties.locality}</IonCardContent>
                    </IonItem>
                    <IonItem>
                        <IonCardContent>Depth: {element.properties.depth}</IonCardContent>
                        <IonCardContent>Magnitude: {element.properties.magnitude}</IonCardContent>
                    </IonItem>
                    <IonItem>
                        <IonCardSubtitle>{element.properties.time}</IonCardSubtitle>
                    </IonItem>
                    <IonItem>
                        <IonButton
                            expand="block"
                            onClick= {() => {
                                showQuake(element)
                            }}
                        >
                            Show on Map
                        </IonButton>
                    </IonItem>
                </IonCard>
                </>
            ))}
            {stats === undefined && (
                <>
                <IonCard>
                    <IonItem>
                        <IonCardContent>
                            There are no Quakes at this MMI
                        </IonCardContent>
                    </IonItem>
                </IonCard>
                </>
            )}
        </>
    )
}

export default EqRecentQuakes