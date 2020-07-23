import React, { useState, useContext } from "react";
import { AccountContext } from "./Accounts";
import {IonButton, IonCol, IonGrid, IonInput, IonItem, IonRow, IonTabs} from "@ionic/react";

export default () => {
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const { getSession, authenticate } = useContext(AccountContext);

    const onSubmit = event => {
        event.preventDefault();

        getSession().then(({ user, email }) => {
            authenticate(email, password).then(() => {
                user.changePassword(password, newPassword, (err, result) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log(result);
                    }
                });
            });
        });
    };


    return (
        <IonGrid>
            <IonItem>
                <h6>Change your password...</h6>
            </IonItem>
        <IonRow>
            <IonCol align-self-center size-md="6" size-lg="5" size-xs="12">
                <IonItem>
                    <IonInput
                        value={password}
                        placeholder="Password"
                        onIonChange={
                            e => setPassword(e.target.value)
                        }
                    />
                </IonItem>
            </IonCol>
            <IonCol align-self-center size-md="6" size-lg="5" size-xs="12">
                <IonItem>
                    <IonInput
                        value={newPassword}
                        placeholder="New Password"
                        onIonChange={
                            e => setNewPassword(e.target.value)
                        }
                    />
                </IonItem>
            </IonCol>
        </IonRow>

        <IonRow>
            <IonItem>
                <IonButton
                    href="/touchid"
                    expand="block"
                    onClick={onSubmit}
                >
                    Change Password
                </IonButton>
            </IonItem>
        </IonRow>
        </IonGrid>
    );
};
