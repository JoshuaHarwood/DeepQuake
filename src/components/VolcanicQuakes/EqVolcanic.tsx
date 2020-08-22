import React, {useEffect, useState} from "react";
import {
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonItem,
    IonSelect,
    IonSelectOption
} from "@ionic/react";
import {getEqData} from "../GetEqData";

const EqVolcanic: React.FC = () => {

    const [reload, setReload] = useState(false);

    const [volcano, setVolcano] = useState("taupo");
    const [stats, setStats] = useState({"features" : []});

    useEffect(() => {
        pullData(volcano);}, []);

    function pullData(i : any) {
        setVolcano(i);
        const stats = getEqData('https://api.geonet.org.nz/volcano/quake/'+i)
            .then((stats) => {
                setStats(stats);
                console.log(stats)
            })

        setReload(!reload)
    }

    return(
        <>
            <IonCard>
                <IonItem>
                    <IonCardTitle>Please select a volcano to pull data from:</IonCardTitle>
                    <IonSelect
                        value={volcano}
                        placeholder={"Ruapehu"}
                        onIonChange={e =>
                            pullData(e.detail.value)
                        }
                    >
                        <IonSelectOption value={"taupo"}>Taupo</IonSelectOption>
                        <IonSelectOption value={"tongariro"}>Tongariro</IonSelectOption>
                        <IonSelectOption value={"whiteisland"}>White Island</IonSelectOption>
                        <IonSelectOption value={"aucklandvolcanicfield"}>Auckland Volcanic Field</IonSelectOption>
                        <IonSelectOption value={"kermadecislands"}>Kermadec Islands</IonSelectOption>
                        <IonSelectOption value={"mayorisland"}>Mayor Island</IonSelectOption>
                        <IonSelectOption value={"ngauruhoe"}>Ngauruhoe</IonSelectOption>
                        <IonSelectOption value={"northland"}>Northland</IonSelectOption>
                        <IonSelectOption value={"okataina"}>Okataina</IonSelectOption>
                        <IonSelectOption value={"rotorua"}>Rotorua</IonSelectOption>
                        <IonSelectOption value={"ruapehu"}>Ruapehu</IonSelectOption>
                        <IonSelectOption value={"taranakiegmont"}>Taranaki / Egmont</IonSelectOption>
                    </IonSelect>
                </IonItem>
            </IonCard>

            {
                (stats.features).map((element : any) => (
                    <IonCard>
                        <IonItem>
                            <IonCardTitle>
                                {element.properties.time.split("T")[1].split("Z")[0].split(".")[0] + " on "}
                                {element.properties.time.split("T")[0]}
                            </IonCardTitle>
                        </IonItem>
                        <IonItem>
                            <IonCardContent>
                                Depth: {element.properties.depth}
                            </IonCardContent>
                        </IonItem>
                        <IonItem>
                            <IonCardContent>
                                Magnitude: {element.properties.magnitude}
                            </IonCardContent>
                        </IonItem>
                        <IonItem>
                            <IonCardContent>
                                Intensity: {element.properties.intensity}
                            </IonCardContent>
                        </IonItem>
                        <IonItem>
                            <IonCardContent>
                                Location: {element.properties.locality}
                            </IonCardContent>
                        </IonItem>
                    </IonCard>

                ))
            }
        </>
    );
}

export default EqVolcanic