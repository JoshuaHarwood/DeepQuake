import React, {useContext, useEffect, useState} from "react";

import Days365Table from "./Components/Year/Days365Table";
import Days7Table from "./Components/Week/Days7Table";
import Days28Table from "./Components/Month/Days28Table";
import {IonGrid, IonItem, IonItemDivider, IonLabel, IonToggle} from "@ionic/react";
import {AccountContext} from "../../authentication/Accounts";
import { defaultPreferences } from "../../../Settings/Pref"

function Stats (props) {

    const [showYear, setShowYear] = useState(false);
    const [showMonth, setShowMonth] = useState(false);
    const [showWeek, setShowWeek] = useState(true);

    const [showSettings, setShowSettings] = useState(false);

    const [preferences, setPreferences] = useState({});

    const { getSession } = useContext(AccountContext);

    useEffect(() => {
        getSession().then((data) => {
            let json = JSON.parse(data["custom:preferences"])
            setPreferences(json);

            // Load the saved settings into the page
            setShowYear(json.Settings.Stats.ShowYear);
            setShowMonth(json.Settings.Stats.ShowMonth);
            setShowWeek(json.Settings.Stats.ShowWeek);
        });
    }, []);

    return (
        <>


        {console.log("Settings: ", (preferences))}
            {console.log("Default: ", defaultPreferences())}
            <IonGrid>
                <IonItemDivider>Want to see more or less graphs?</IonItemDivider>
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
                <Days365Table data={props.data} showSettings={showSettings}/>
            )}
            { showMonth && (
                <Days28Table data={props.data} showSettings={showSettings}/>
            )}
            { showWeek && (
                <Days7Table data={props.data} showSettings={showSettings}/>
            )}

        </code>
        </>
    );
}

export {Stats}