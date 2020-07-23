import React from "react";
import {IonButton, IonGrid, IonItem} from "@ionic/react";

const PleaseLogIn: React.FC = () => {

    return (
        <IonGrid>
            <IonItem>
                <h3>Sorry but you must be logged in to access this content</h3>
            </IonItem>
            <IonButton
                size="large"
                href="/MyAccount"
                expand="block"

            >
                Login
            </IonButton>
        </IonGrid>
    );
}

export default PleaseLogIn;