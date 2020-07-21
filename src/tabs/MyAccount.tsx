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

const MyAccount: React.FC = () => {

    const [createAccount, setCreateAccount] = useState(true);

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
              </>
          )}
          {!loggedIn && (
              <>
                  {createAccount && (
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
                                                setCreateAccount(false)
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
                  {!createAccount && (
                      <>
                        <Login />

                          <IonGrid>
                              <IonRow>
                                  <IonCol>
                                      <IonItem>
                                          <h6>Need and account? </h6>
                                      </IonItem>
                                      <IonItem>
                                          <IonButton onClick={ () => {
                                              return (
                                                  setCreateAccount(true)
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
              </>
          )}


      </IonContent>
    </IonPage>
  );
};

export default MyAccount;
