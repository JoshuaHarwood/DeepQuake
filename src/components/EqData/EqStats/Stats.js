import React from "react";
import {
    IonCol,
    IonGrid, IonItem, IonLabel, IonRow
} from "@ionic/react"
import Days365Table from "./Components/Days365Table";

const Stats = (props) => (
    <code>
        <Days365Table data={props.data}/>
    </code>
);

export default Stats;