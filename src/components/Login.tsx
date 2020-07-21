import {IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonRow} from '@ionic/react';
import React, {useState} from 'react';
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const user = new CognitoUser({
            Username: email,
            Pool: UserPool
        });

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password
        });

        user.authenticateUser(authDetails, {
            onSuccess: data => {
                console.log('onSuccess', data);
            },
            onFailure: err => {
                console.error('onFailure', err);
            },
            newPasswordRequired : data => {
                console.log('newPasswordRequired', data);
            }
        });

    };

    return (

        <IonGrid>
            <IonRow justify-content-center>
                <IonCol align-self-center size-md="6" size-lg="5" size-xs="12">
                    <div>
                        <h4>Login to an existing account</h4>
                    </div>
                    <div>
                        <IonItem>
                            <IonInput
                                value={email}
                                placeholder="Email"
                                onIonChange={
                                    e => setEmail(e.detail.value!)
                                }
                            />
                        </IonItem>

                        <IonItem>
                            <IonInput
                                value={password}
                                placeholder="Password"
                                onIonChange={
                                    e => setPassword(e.detail.value!)
                                }
                            />
                        </IonItem>
                    </div>

                    <div>
                        <IonButton
                            size="large"
                            href="/touchid"
                            expand="block"
                            onClick={onSubmit}
                        >
                            Login
                        </IonButton>
                    </div>
                </IonCol>
            </IonRow>
        </IonGrid>

    );
};

export default Login;
