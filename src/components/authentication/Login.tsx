import {IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonRow} from '@ionic/react';
import React, {useState, useContext} from 'react';
import { AccountContext } from "./Accounts";
import ForgotPassword from "./ForgotPassword";

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState("");

    const { authenticate } = useContext(AccountContext);

    const onSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        authenticate(email, password)
            .then((data: any) => {
                console.log("Logged in!", data);
                window.location.reload();
            })
            .catch((err: any) => {
                console.log("Failed to Login!", err);
                setErrorMessage(err.message);
            });
    };

    return (
        <>
            {(errorMessage !== "" &&
                <>
                    <IonGrid>
                        <IonItem>
                            <h4>Something went wrong...</h4>
                        </IonItem>
                        <IonItem>
                            <IonLabel>
                                { errorMessage }
                            </IonLabel>
                        </IonItem>
                    </IonGrid>
                </>
            )}

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
        </>
    );
};

export default Login;
