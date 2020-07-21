import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonActionSheet } from '@ionic/react';
import { camera, trash, close } from 'ionicons/icons';

const ViewRecentQuakes: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Photo Gallery</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Photo Gallery</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid>
                </IonGrid>

                <IonFab vertical="bottom" horizontal="center" slot="fixed">
                    <IonFabButton>
                        <IonIcon icon={camera}></IonIcon>
                    </IonFabButton>
                </IonFab>


            </IonContent>
        </IonPage>
    );
};

export default ViewRecentQuakes;
