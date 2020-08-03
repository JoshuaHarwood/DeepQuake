import React, {useContext, useEffect, useState} from "react";

import Days365Table from "./Components/Year/Days365Table";
import Days7Table from "./Components/Week/Days7Table";
import Days28Table from "./Components/Month/Days28Table";
import {IonGrid, IonItem, IonItemDivider, IonLabel, IonToggle} from "@ionic/react";
import {AccountContext} from "../../authentication/Accounts";

function Stats (props) {

    const { getSettings, setSettings, pullSettings } = useContext(AccountContext);

    let pref = getSettings();
    const [preferences, setPreferences] = useState(pref);

    return (
        <>
            <IonGrid>
                <IonItemDivider>Want to see more or less graphs?</IonItemDivider>
                <IonItem>
                    <IonLabel>Show Settings:</IonLabel>
                    <IonToggle checked={preferences.Settings.Stats.ShowSettings}
                               onIonChange={
                                    e => {
                                        pref.Settings.Stats.ShowSettings = (e.detail.checked)
                                        setSettings(pref)
                                        setPreferences(pref)
                                    }
                               }
                    />
                </IonItem>
            </IonGrid>
            {preferences.Settings.Stats.ShowSettings && (
                <IonGrid>
                    <IonItemDivider>Show the stats for:</IonItemDivider>
                        <IonItem>
                            <IonLabel>Year</IonLabel>
                            <IonToggle checked={preferences.Settings.Stats.ShowYear}
                                       onIonChange={
                                           e => {
                                               pref.Settings.Stats.ShowYear = (e.detail.checked)
                                               setSettings(pref)
                                               setPreferences(pref)
                                           }
                                       }
                            />
                        </IonItem>
                    <IonItem>
                        <IonLabel>Month</IonLabel>
                        <IonToggle checked={preferences.Settings.Stats.ShowMonth}
                                   onIonChange={
                                       e => {
                                           pref.Settings.Stats.ShowMonth = (e.detail.checked)
                                           setSettings(pref)
                                           setPreferences(pref)
                                       }
                                   }
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Week</IonLabel>
                        <IonToggle checked={preferences.Settings.Stats.ShowWeek}
                                   onIonChange={
                                       e => {
                                           pref.Settings.Stats.ShowWeek = (e.detail.checked)
                                           setSettings(pref)
                                           setPreferences(pref)
                                       }
                                   }
                        />
                    </IonItem>
                </IonGrid>
            )}
            <code>
                { preferences.Settings.Stats.ShowYear && (
                    <Days365Table data={props.data}/>
                )}
                { preferences.Settings.Stats.ShowMonth && (
                    <Days28Table data={props.data}/>
                )}
                { preferences.Settings.Stats.ShowWeek && (
                    <Days7Table data={props.data} />
                )}

            </code>
        </>

    );
}

export {Stats}