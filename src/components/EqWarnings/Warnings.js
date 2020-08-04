import React, {useContext, useEffect, useState} from "react";
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonItem,
    IonLabel,
    IonTitle
} from "@ionic/react";

function Warnings (props) {

    return(
        <>
            {(props.data.feed).map((element) => (
                <IonCard class={"wrap"}>
                    <IonItem>
                        <IonCardTitle>{element.title.split(": ")[0]}</IonCardTitle>
                    </IonItem>
                    <IonItem>
                        <IonCardContent>{element.title.split(": ")[1]}</IonCardContent>
                    </IonItem>
                    <IonItem>
                        <IonCardSubtitle>
                            {element.published.split("T")[1].split("Z")[0]}
                            {<string> on </string>}
                            {element.published.split("T")[0]}
                        </IonCardSubtitle>
                    </IonItem>
                        <IonButton href={element.link}>Find out more...</IonButton>

                </IonCard>
            ))}
        </>
    );
}

export {Warnings}