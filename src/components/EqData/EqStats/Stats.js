import React, {useContext, useEffect, useState} from "react";

import Days365Table from "./Components/Year/Days365Table";
import Days7Table from "./Components/Week/Days7Table";
import Days28Table from "./Components/Month/Days28Table";
import {IonGrid, IonItem, IonItemDivider, IonLabel, IonToggle} from "@ionic/react";
import {AccountContext} from "../../authentication/Accounts";
import {reload} from "ionicons/icons";

function Stats (props) {

    const { getSettings, setSettings, pullSettings } = useContext(AccountContext);
    let pref = getSettings();

    const [reload, setReload] = useState(false);

    return (
        <>
            <IonGrid>
                <IonItemDivider>Want to see more or less graphs?</IonItemDivider>
                <IonItem>
                    <IonLabel>Show Settings:</IonLabel>
                    <IonToggle checked={pref.Settings.Stats.ShowSettings}
                               onIonChange={
                                    e => {
                                        pref.Settings.Stats.ShowSettings = (e.detail.checked)
                                        setSettings(pref)
                                        setReload(!reload)
                                    }
                               }
                    />
                </IonItem>
            </IonGrid>
            {pref.Settings.Stats.ShowSettings && (
                <IonGrid>
                    <IonItemDivider>Show the stats for:</IonItemDivider>
                        <IonItem>
                            <IonLabel>Year</IonLabel>
                            <IonToggle checked={pref.Settings.Stats.ShowYear}
                                       onIonChange={
                                           e => {
                                               pref.Settings.Stats.ShowYear = (e.detail.checked)
                                               setSettings(pref)
                                               setReload(!reload)
                                           }
                                       }
                            />
                        </IonItem>
                    <IonItem>
                        <IonLabel>Month</IonLabel>
                        <IonToggle checked={pref.Settings.Stats.ShowMonth}
                                   onIonChange={
                                       e => {
                                           pref.Settings.Stats.ShowMonth = (e.detail.checked)
                                           setSettings(pref)
                                           setReload(!reload)
                                       }
                                   }
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Week</IonLabel>
                        <IonToggle checked={pref.Settings.Stats.ShowWeek}
                                   onIonChange={
                                       e => {
                                           pref.Settings.Stats.ShowWeek = (e.detail.checked)
                                           setSettings(pref)
                                           setReload(!reload)
                                       }
                                   }
                        />
                    </IonItem>
                </IonGrid>
            )}
            <code>
                { pref.Settings.Stats.ShowYear && (
                    <Days365Table data={props.data}/>
                )}
                { pref.Settings.Stats.ShowMonth && (
                    <Days28Table data={props.data}/>
                )}
                { pref.Settings.Stats.ShowWeek && (
                    <Days7Table data={props.data} />
                )}

            </code>
        </>

    );
}

export {Stats}