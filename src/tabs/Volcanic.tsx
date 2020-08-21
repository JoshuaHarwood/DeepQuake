import React, {useContext, useEffect, useState} from 'react';
import {IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './RecentQuakes.css';
import {AccountContext} from "../components/authentication/Accounts";
import PleaseLogIn from "../components/authentication/PleaseLogIn.jsx";
import EqVolcanic from "../components/VolcanicQuakes/EqVolcanic";

const Volcanic: React.FC = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    const { getSession } = useContext(AccountContext);

    useEffect(() => {
        getSession().then(() => {
            setLoggedIn(true);
        }).catch( () => {
            setLoggedIn(false);
        });
    }, []);


    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Volcanic Quakes</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Warnings</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    { !loggedIn && (
                        <PleaseLogIn />
                    )}
                    {loggedIn && (
                        <EqVolcanic/>
                    )}


                </IonContent>
            </IonPage>
        </>
    );
};

export default Volcanic;
