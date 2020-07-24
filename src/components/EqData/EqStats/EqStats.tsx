import React, {useEffect, useState} from 'react';
import {IonGrid, IonItem, IonLabel} from "@ionic/react";
import {getEqStats} from "../GetEqStats";
import LoadingCard from "../../Loading/LoadingCard";
import { Stats } from "./Stats";

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
        <>
            { loading && (
                <>
                    <LoadingCard/>
                    <LoadingCard/>
                    <LoadingCard/>
                </>
            )}
            {!loading && (
                <code>
                    <Stats data={stats}/>
                </code>
            )}
        </>
    );
}

export default EqStats;