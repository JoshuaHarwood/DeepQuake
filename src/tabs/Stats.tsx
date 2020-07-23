import React, {useContext, useEffect, useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './RecentQuakes.css';
import {AccountContext} from "../components/authentication/Accounts";
import PleaseLogIn from "../components/authentication/PleaseLogIn.jsx";
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
          <IonTitle>Stats</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Stats</IonTitle>
          </IonToolbar>
        </IonHeader>

          { !loggedIn && (
              <PleaseLogIn />
          )}
          {loggedIn && (
              <>

              </>
          )}


      </IonContent>
    </IonPage>
            </>
  );
};

export default Stats;
