import React, { createContext } from "react";
import {CognitoUser, AuthenticationDetails, CognitoUserAttribute} from "amazon-cognito-identity-js";
import Pool from "../../UserPool";
import {defaultPreferences} from "../../Settings/Pref";
import {codeSharp} from "ionicons/icons";

const AccountContext = createContext();

const Account = props => {

    let userSettings;

    const getSession = async () =>
        await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();
            if (user) {
                user.getSession(async (err, session) => {
                    if (err) {
                        reject();
                    } else {
                        const attributes = await new Promise((resolve, reject) => {
                            user.getUserAttributes((err, attributes) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    const results = {};

                                    for (let attribute of attributes) {
                                        const { Name, Value } = attribute;
                                        results[Name] = Value;

                                        if(userSettings === undefined){
                                            if (Name === "custom:preferences"){
                                                userSettings = JSON.parse(Value);
                                            }
                                        }

                                    }

                                    resolve(results);
                                }
                            });
                        });

                        resolve({
                            user,
                            ...session,
                            ...attributes
                        });
                    }
                });
            } else {
                reject();
            }
        });

    const authenticate = async (Username, Password) =>
        await new Promise((resolve, reject) => {
            const user = new CognitoUser({ Username, Pool });
            const authDetails = new AuthenticationDetails({ Username, Password });

            user.authenticateUser(authDetails, {
                onSuccess: data => {
                    console.log("onSuccess:", data);
                    resolve(data);
                },

                onFailure: err => {
                    console.error("onFailure:", err);
                    reject(err);
                },

                newPasswordRequired: data => {
                    console.log("newPasswordRequired:", data);
                    resolve(data);
                }
            });
        });

    const getSettings = () => {

        if(userSettings === undefined){
            console.log("ERROR LOADING SETTINGS")
            return defaultPreferences();

        } else {
            return userSettings;
        }
    }

    const setSettings = async (pref) => {
        userSettings = pref;
        saveSettings().then(r => {
            console.log("SET SETTINGS: ", userSettings, pref)
            window.location.reload()
        });
    }
    const saveSettings = async () => {
        await new Promise((resolve, reject) => {
            getSession().then(({user}) => {
                const attributes = [
                    new CognitoUserAttribute({Name: "custom:preferences", Value: JSON.stringify(userSettings)}),
                ];

                user.updateAttributes(attributes, (err, result) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    } else {
                        console.log(result);
                        resolve(result)
                    }
                });
            });
        });
    }

    const logout = () => {
        const user = Pool.getCurrentUser();
        if (user) {
            user.signOut();
            window.location.reload();
        }
    };

    return (
        <AccountContext.Provider
            value={{
                authenticate,
                getSession,
                getSettings,
                setSettings,
                saveSettings,
                logout
            }}
        >
            {props.children}
        </AccountContext.Provider>
    );
};

export { Account, AccountContext };