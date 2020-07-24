import React, {useState} from "react";

import Days365Table from "./Components/Days365Table";
import Days7Table from "./Components/Days7Table";
import Days28Table from "./Components/Days28Table";
import {IonButton, IonGrid, IonItem, IonItemDivider, IonLabel, IonToggle} from "@ionic/react";


export default (props) => {

    const [showYear, setShowYear] = useState(true);
    const [showMonth, setShowMonth] = useState(false);
    const [showWeek, setShowWeek] = useState(false);

    const [showSettings, setShowSettings] = useState(false);


    return (
        <>
            <IonGrid>
                <IonItemDivider>Change Some Display Settings:</IonItemDivider>
                <IonItem>
                    <IonLabel>Show Settings:</IonLabel>
                    <IonToggle checked={showSettings}
                               onIonChange={
                                   e => setShowSettings(e.detail.checked)
                               }
                    />
                </IonItem>
            </IonGrid>
            {showSettings && (
                <IonGrid>
                    <IonItemDivider>Show the stats for:</IonItemDivider>
                        <IonItem>
                            <IonLabel>Year</IonLabel>
                            <IonToggle checked={showYear}
                                       onIonChange={
                                           e => setShowYear(e.detail.checked)
                                       }
                            />
                        </IonItem>
                    <IonItem>
                        <IonLabel>Month</IonLabel>
                        <IonToggle checked={showMonth}
                                   onIonChange={
                                       e => setShowMonth(e.detail.checked)
                                   }
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Week</IonLabel>
                        <IonToggle checked={showWeek}
                                   onIonChange={
                                       e => setShowWeek(e.detail.checked)
                                   }
                        />
                    </IonItem>
                </IonGrid>
            )}
        <code>
            { showYear && (
                <Days365Table data={props.data}/>
            )}
            { showMonth && (
                <Days28Table data={props.data}/>
            )}
            { showWeek && (
                <Days7Table data={props.data}/>
            )}

        </code>
        </>
    );

};
