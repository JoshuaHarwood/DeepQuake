import React from 'react';
import {IonButton, IonContent, IonHeader, IonPage, IonRouterOutlet, IonTitle, IonToolbar} from '@ionic/react';
import './MyAccount.css';
import Signup from "../components/authentication/Signup";
import Login from "../components/authentication/Login";
import Status from "../components/authentication/Status";

const MyAccount: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

          {/*We will either render Status or Login / sign up*/}
          <Status />
          <Signup />
          <Login />

      </IonContent>
    </IonPage>
  );
};

export default MyAccount;
