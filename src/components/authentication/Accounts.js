import React, { createContext } from "react";
import {CognitoUser, AuthenticationDetails, CognitoUserAttribute} from "amazon-cognito-identity-js";
import Pool from "../../UserPool";
import {defaultPreferences} from "../../Settings/Pref";

const AccountContext = createContext();

const Account = props => {
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

    const saveSettings = async (settings) => {

        getSession().then(({ user }) => {
            const attributes = [
                new CognitoUserAttribute({ Name: "custom:preferences", Value: JSON.stringify(settings) }),
            ];

            user.updateAttributes(attributes, (err, result) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(result);
                    window.location.reload();
                }
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
                saveSettings,
                logout
            }}
        >
            {props.children}
        </AccountContext.Provider>
    );
};

export { Account, AccountContext };