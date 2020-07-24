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
                <IonSkeletonText animated className={"loading-card__top"}/>
                <IonSkeletonText animated className={"loading-card__top"}/>
                <IonSkeletonText animated className={"loading-card__top"}/>
                <br/>
                <IonSkeletonText animated className={"loading-card__top"}/>
                <IonSkeletonText animated className={"loading-card__top"}/>
                <IonSkeletonText animated className={"loading-card__top"}/>
                <IonSkeletonText animated className={"loading-card__top"}/>
                <br/>
                <IonSkeletonText animated className={"loading-card__top"}/>
                <IonSkeletonText animated className={"loading-card__top"}/>
                <br/>
                <IonSkeletonText animated className={"loading-card__top"}/>
                <IonSkeletonText animated className={"loading-card__top"}/>
                <IonSkeletonText animated className={"loading-card__top"}/>
                <IonSkeletonText animated className={"loading-card__top"}/>
                <br/>
                <IonSkeletonText animated className={"loading-card__top"}/>
                <IonSkeletonText animated className={"loading-card__top"}/>
                <IonSkeletonText animated className={"loading-card__top"}/>
                <IonSkeletonText animated className={"loading-card__top"}/>
            </IonCardSubtitle>
        </IonCardHeader>
    </IonCard>

    )}

export default LoadingCard;