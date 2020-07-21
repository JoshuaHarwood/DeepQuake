import React from 'react';
import {IonButton, IonContent, IonHeader, IonPage, IonRouterOutlet, IonTitle, IonToolbar} from '@ionic/react';
import './MyAccount.css';
import Signup from "../components/Signup";
import Login from "../components/Login";

const MyAccount: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

              <Signup />

              <Login />


      </IonContent>
    </IonPage>
  );
};

export default MyAccount;
