import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonInput,
    IonItem,
    IonLabel,
    IonRouterOutlet,
    IonRow
} from '@ionic/react';
import React, {useState} from 'react';
// import './Home.css';
import UserPool from "../../UserPool";
import {text} from "ionicons/icons";

const Signup: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        UserPool.signUp(email, password,
            [], [],
            (err, data) => {
                if (err) console.error(err);
                console.log(data);
            });
    };

    return (

        <IonGrid>
            <IonRow justify-content-center>
                <IonCol align-self-center size-md="6" size-lg="5" size-xs="12">
                    <div>
                        <h4>Create an account</h4>
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
                            Sign Up
                        </IonButton>
                    </div>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default Signup;
