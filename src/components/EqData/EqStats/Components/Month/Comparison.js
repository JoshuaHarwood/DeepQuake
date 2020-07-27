import {IonCard, IonItem} from "@ionic/react";
import React from "react";

import {Bar} from 'react-chartjs-2';
import {CompareTo} from "../../CompareTo";

let state = {
    labels: [],
    datasets: [
        {
            backgroundColor: [],
            data: []
        }
    ]
}

function comp(props, i) {
    return CompareTo(
        props.data.magnitudeCount.days28[i],
        props.data.magnitudeCount.days365[i],
        13)
}

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
                data: [
                    comp(props, 0),
                    comp(props, 1),
                    comp(props, 2),
                    comp(props, 3),
                    comp(props, 4),
                    comp(props, 5),
                    comp(props, 6),
                    comp(props, 7),
                    comp(props, 8),
                    comp(props, 9),
                    comp(props, 10)
                ]
            }
        ]
    }
}

const Comparison = (props) => (



    <>
        <code>
            {
                setState(props)
            }
        </code>
        {}
        <IonCard>
            <Bar
                data={state}
                options={{
                    title:{
                        display:true,
                        text:'+/- Per Month Compared to the Past Year',
                        fontSize:20
                    },
                    legend:{
                        display:false,
                        position:'right'
                    }
                }}
            />
        </IonCard>
    </>

);

export default Comparison;