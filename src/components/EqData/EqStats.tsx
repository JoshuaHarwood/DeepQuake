import React, {useEffect, useState} from 'react';
import {IonGrid, IonItem, IonLabel} from "@ionic/react";
import {getEqStats} from "./GetEqStats";

const EqStats: React.FC = () => {

    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({});

    useEffect(() => {
        const stats = getEqStats().then((stats) => {
            setStats(stats);
            setLoading(false);
            console.log(stats);
        });
    }, []);

    return (
        <IonGrid>
            <IonItem>
                <code>
                    {
                        JSON.stringify(stats)
                    }
                </code>
            </IonItem>
        </IonGrid>
    );
}

export default EqStats;