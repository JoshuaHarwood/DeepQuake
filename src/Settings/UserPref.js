import React, { useEffect, useContext, useState } from "react";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { AccountContext } from "../components/authentication/Accounts";
import {IonButton, IonCard, IonInput, IonItem} from "@ionic/react";
import {defaultPreferences} from "./Pref";

export default () => {
    const [preferences, setPreferences] = useState('');

    const { getSession } = useContext(AccountContext);

    useEffect(() => {
        getSession().then((data) => {
            setPreferences(data["custom:preferences"]);
        });
    }, []);

    const onSubmit = (event) => {
        event.preventDefault();

        getSession().then(({ user }) => {
            const attributes = [
                new CognitoUserAttribute({ Name: "custom:preferences", Value: JSON.stringify(defaultPreferences()) }),
            ];

            user.updateAttributes(attributes, (err, result) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(result);
                }
            });
        });
    };

    return (
        <IonCard>
        <div>
            <h1>Update your plan:</h1>
            <IonItem>
                <IonInput value={preferences} onIonChange={(event) => setPreferences(event.target.value)} />

                <IonButton
                    href="/touchid"
                    expand="block"
                    onClick={onSubmit}
                >
                    Change Plan
                </IonButton>
            </IonItem>
        </div>
        </IonCard>
    );
};