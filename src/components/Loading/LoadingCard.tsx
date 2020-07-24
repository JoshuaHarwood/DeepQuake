import React from "react";
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonSkeletonText
} from "@ionic/react"

import "./LoadingCard.css"

const LoadingCard: React.FC = () => {

    return (
    <IonCard>
        <IonCardHeader>
            <IonCardSubtitle>
                <IonSkeletonText animated className={"loading-card__large"}/>
                <IonSkeletonText animated className={"loading-card__small"}/>
                <IonSkeletonText animated className={"loading-card__small"}/>

            </IonCardSubtitle>
        </IonCardHeader>
    </IonCard>

    )}

export default LoadingCard;