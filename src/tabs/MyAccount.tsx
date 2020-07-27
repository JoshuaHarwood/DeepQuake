import React, {useContext, useEffect, useState} from 'react';
import {
    IonButton, IonCol,
    IonContent,
    IonGrid,
    IonHeader, IonItem,
    IonPage,
    IonRouterOutlet,
    IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './MyAccount.css';
import Signup from "../components/authentication/Signup";
import Login from "../components/authentication/Login";
import Status from "../components/authentication/Status";
import Settings from "../components/authentication/Settings";
import {AccountContext} from "../components/authentication/Accounts";
import ForgotPassword from "../components/authentication/ForgotPassword";
import UserPref from "../Settings/UserPref";
const MyAccount: React.FC = () => {

    const [state, setState] = useState(1);

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
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

          {/*We will either render Status or Login / sign up*/}
          {loggedIn && (
              <>
                  <Status />
                  < Settings />
                  <UserPref/>
              </>
          )}
          {!loggedIn && (
              <>
                  {state === 1 && (
                      <>
                        <Signup />

                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <h6>Already have an account? </h6>
                                    </IonItem>
                                    <IonItem>
                                        <IonButton onClick={ () => {
                                            return (
                                                setState(0)
                                            );
                                        }}>
                                            Login
                                        </IonButton>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </>
                  )}
                  {state === 0 && (
                      <>
                        <Login />

                          <IonGrid>
                              <IonRow>
                                  <IonCol>
                                      <IonItem>
                                          <h6>Forgot Password? </h6>
                                          <IonItem>
                                          <IonButton onClick={ () => {
                                              return (
                                                  setState(3)
                                              );
                                          }}>
                                            Go Here!
                                          </IonButton>
                                          </IonItem>
                                      </IonItem>
                                      <IonItem>
                                          <h6>Need and account? </h6>
                                      </IonItem>
                                      <IonItem>
                                          <IonButton onClick={ () => {
                                              return (
                                                  setState(1)
                                              );
                                          }}>
                                              Sign Up
                                          </IonButton>
                                      </IonItem>
                                  </IonCol>
                              </IonRow>
                          </IonGrid>
                      </>
                  )}
                  {state === 3 && (
                      <>
                        <ForgotPassword/>
                      </>
                  )}
              </>
          )}


      </IonContent>
    </IonPage>
  );
};

export default MyAccount;
