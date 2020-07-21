import React, { useState, useEffect, useContext } from "react";
import { AccountContext } from "./Accounts";
import ChangePassword from "./ChangePassword";
import {IonGrid} from "@ionic/react";

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
                    <h1>Settings</h1>

                    <IonGrid>
                    <ChangePassword />
                    </IonGrid>
                </>
            )}
        </div>
    );
};