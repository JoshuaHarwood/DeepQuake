import React, { useState } from "react";
import { CognitoUser } from "amazon-cognito-identity-js";
import Pool from "../../UserPool";
import {IonButton, IonCol, IonGrid, IonInput, IonItem, IonRow} from "@ionic/react";

export default () => {
    const [stage, setStage] = useState(1); // 1 = email stage, 2 = code stage
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const getUser = () => {
        return new CognitoUser({
            Username: email.toLowerCase(),
            Pool
        });
    };

    const sendCode = event => {
        event.preventDefault();

        getUser().forgotPassword({
            onSuccess: data => {
                console.log("onSuccess:", data);
            },
            onFailure: err => {
                console.error("onFailure:", err);
            },
            inputVerificationCode: data => {
                console.log("Input code:", data);
                setStage(2);
            }
        });
    };

    const resetPassword = event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            console.error("Passwords are not the same");
            return;
        }

        getUser().confirmPassword(code, password, {
            onSuccess: data => {
                console.log("onSuccess:", data);
            },
            onFailure: err => {
                console.error("onFailure:", err);
            }
        });
    };

    return (
        <IonGrid>
            {stage === 1 && (
                <IonCol>
                    <IonItem>
                    <IonInput
                        value={email}
                        placeholder={"Email"}
                        onIonChange={event => setEmail(event.target.value)}
                    />
                    </IonItem>
                    <IonItem>
                        <IonButton
                            size="small"
                            href="/touchid"
                            expand="fit"
                            onClick={sendCode}
                        >
                        Send verification code
                    </IonButton>
                    </IonItem>
                </IonCol>
            )}

            {stage === 2 && (
                <IonCol>
                    <IonItem>
                    <IonInput
                        value={code}
                        placeholder={"Code"}
                        onIonChange={event => setCode(event.target.value)}
                    />
                    </IonItem>
                    <IonItem>
                    <IonInput
                        value={password}
                        placeholder={"New Password"}
                        onIonChange={event => setPassword(event.target.value)}
                    />
                    </IonItem>
                    <IonItem>
                    <IonInput
                        value={confirmPassword}
                        placeholder={"ConfirmPassword"}
                        onIonChange={event => setConfirmPassword(event.target.value)}
                    />
                    </IonItem>
                    <IonItem>
                        <IonButton
                            size="small"
                            href="/touchid"
                            expand="fit"
                            onClick={resetPassword}
                        >
                        Change password
                    </IonButton>
                    </IonItem>
                </IonCol>
            )}
        </IonGrid>
    );
};
