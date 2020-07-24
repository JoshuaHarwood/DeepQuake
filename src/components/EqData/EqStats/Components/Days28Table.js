import React from "react";
import {
    IonCard, IonCardContent, IonCardHeader,
    IonCol, IonContent,
    IonGrid, IonItem, IonLabel, IonRow, IonToolbar
} from "@ionic/react"

import {Bar, Doughnut, Pie} from 'react-chartjs-2';

let state = {
    labels: [],
    datasets: [
        {
            label: 'Magnitude',
            backgroundColor: [],
            hoverBackgroundColor: [],
            data: []
        }
    ]
}

function setState (props) {
    state = {
        labels: ['Mag 0', 'Mag 1', 'Mag 2',
            'Mag 3', 'Mag 4', 'Mag 5', 'Mag 6',
            'Mag 7', 'Mad 8', 'Mag 9', 'Mag 10'],
        datasets: [
            {
                label: 'Total',
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
                    props.data.magnitudeCount.days365[0],
                    props.data.magnitudeCount.days365[1],
                    props.data.magnitudeCount.days365[2],
                    props.data.magnitudeCount.days365[3],
                    props.data.magnitudeCount.days365[4],
                    props.data.magnitudeCount.days365[5],
                    props.data.magnitudeCount.days365[6],
                    props.data.magnitudeCount.days365[7],
                    props.data.magnitudeCount.days365[8],
                    props.data.magnitudeCount.days365[9],
                    props.data.magnitudeCount.days365[10],
                ]
            }
        ]
    }
}


const Days28Table = (props) => (

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
                        title:{
                            display:true,
                            text:'Earthquakes over the past 28 Days',
                            fontSize:20
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }}
                />
            </div>
        </IonCard>
    </>
);

export default Days28Table;