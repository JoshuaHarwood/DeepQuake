import React, {useContext, useState} from "react";
import {
    IonCard, IonGrid, IonItem, IonItemDivider, IonLabel, IonToggle
} from "@ionic/react"

import {Doughnut} from 'react-chartjs-2';
import Comparison from "./Comparison";
import {AccountContext} from "../../../authentication/Accounts";

let state = {}

function setState (props) {

    state = {
        labels: ['Mag 0', 'Mag 1', 'Mag 2',
            'Mag 3', 'Mag 4', 'Mag 5', 'Mag 6',
            'Mag 7', 'Mad 8', 'Mag 9', 'Mag 10'],
        datasets: [
            {
                backgroundColor: [
                    '#f44336',
                    '#9c27b0',
                    '#3f51b5',
                    '#03a9f4',
                    '#009688',
                    '#8bc34a',
                    '#ffeb3b',
                    '#ff9800',
                    '#795548',
                    '#9e9e9e',
                    '#607d8b'
                ],
                hoverBackgroundColor: [
                    '#ff7961',
                    '#d05ce3',
                    '#757de8',
                    '#67daff',
                    '#52c7b8',
                    '#bef67a',
                    '#ffff72',
                    '#ffc947',
                    '#a98274',
                    '#9e9e9e',
                    '#8eacbb'
                ],
                data: [
                    props.data.magnitudeCount.days28[0],
                    props.data.magnitudeCount.days28[1],
                    props.data.magnitudeCount.days28[2],
                    props.data.magnitudeCount.days28[3],
                    props.data.magnitudeCount.days28[4],
                    props.data.magnitudeCount.days28[5],
                    props.data.magnitudeCount.days28[6],
                    props.data.magnitudeCount.days28[7],
                    props.data.magnitudeCount.days28[8],
                    props.data.magnitudeCount.days28[9],
                    props.data.magnitudeCount.days28[10],
                ],
            }
        ]
    }
}


function Days28Table (props) {

    const { getSettings, setSettings, pullSettings } = useContext(AccountContext);

    let pref = getSettings();

    const [reload, setReload] = useState(false);

    return(
        <>
            <code>
                {
                    setState(props)
                }
            </code>
            <IonCard>
                <div>
                    <Doughnut
                        data={state}
                        width={100}
                        height={75}
                        options={{
                            title: {
                                display: true,
                                text: 'Earthquakes over the past 28 Days',
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
                </div>
                {pref.Settings.Stats.ShowSettings && (
                    <>
                        <IonGrid>
                            <IonItem>
                                <IonLabel>Show Extras</IonLabel>
                                <IonToggle checked={pref.Settings.Stats.MonthExtras}
                                           onIonChange={
                                               e => {
                                                   pref.Settings.Stats.MonthExtras = (e.detail.checked)
                                                   setSettings(pref)
                                                   setReload(!reload)
                                               }
                                           }
                                />
                            </IonItem>
                        </IonGrid>
                    </>
                )}
            </IonCard>
            { pref.Settings.Stats.MonthExtras && (
                <code>
                    <Comparison data={props.data}/>
                </code>
            )}
        </>

    )}

export default Days28Table;