import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from './Accounts';
import {IonButton, IonCol, IonGrid, IonRow} from "@ionic/react";

export default () => {
    const [status, setStatus] = useState(false);

    const { getSession, logout } = useContext(AccountContext);

    useEffect(() => {
        getSession()
            .then(session => {
                console.log('Session:', session);
                setStatus(true);
            })
    }, []);

    return (
        <IonGrid>
            <IonRow>
            {status ? (
                <IonCol>
                    You are logged in.
                    <IonCol>
                        <IonButton onClick={logout}>Logout</IonButton>
                    </IonCol>
                </IonCol>
            ) : 'Please login below.'}
            </IonRow>
        </IonGrid>
    );
};