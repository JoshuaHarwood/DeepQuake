import {IonButton, IonCol, IonGrid, IonInput, IonItem, IonLabel, IonRow} from '@ionic/react';
import React, {useState} from 'react';
// import './Home.css';
import UserPool from "../../UserPool";

const Signup: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");


    const onSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            console.error("Passwords are not the same");
            setErrorMessage("Passwords do not match")
            return;
        }

        UserPool.signUp(email, password,
            [], [],
            (err, data) => {
                if (err) {
                    console.error(err);
                    setErrorMessage(err.message)
                } else {
                    console.log(data);
                }
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
                    <IonItem>
                        <h4>Create an account</h4>
                    </IonItem>
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
                        <IonItem>
                            <IonInput
                                value={confirmPassword}
                                placeholder="Confirm Password"
                                onIonChange={
                                    e => setConfirmPassword(e.detail.value!)
                                }
                            />
                        </IonItem>

                        <IonButton
                            size="large"
                            href="/touchid"
                            expand="block"
                            onClick={onSubmit}
                        >
                            Sign Up
                        </IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
        </>
    );
};

export default Signup;
