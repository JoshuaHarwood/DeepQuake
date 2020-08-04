import React, {useContext, useEffect, useState} from 'react';
import {IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './RecentQuakes.css';
import {AccountContext} from "../components/authentication/Accounts";
import PleaseLogIn from "../components/authentication/PleaseLogIn.jsx";
import EqRecentQuakes from "../components/EqRecentQuakes/EqRecentQuakes"
const Stats: React.FC = () => {

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
                        <IonTitle>Recent Quakes</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Recent Quakes</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    { !loggedIn && (
                        <PleaseLogIn />
                    )}
                    {loggedIn && (
                        <>
                            <EqRecentQuakes/>
                        </>
                    )}


                </IonContent>
            </IonPage>
        </>
    );
};

export default Stats;
