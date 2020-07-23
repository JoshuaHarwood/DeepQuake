import React, { useState, useEffect, useContext } from "react";
import { AccountContext } from "./Accounts";
import ChangePassword from "./ChangePassword";
import {IonGrid, IonItem} from "@ionic/react";

export default () => {
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
        <div>
            {loggedIn && (
                <>
                    <IonGrid>
                        <IonItem>
                            <h1>Settings</h1>
                        </IonItem>
                        <IonItem>
                            <ChangePassword />
                        </IonItem>
                    </IonGrid>
                </>
            )}
        </div>
    );
};