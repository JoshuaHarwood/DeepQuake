import React, {useEffect, useState} from 'react';
import {getEqData} from "../GetEqData";
import LoadingCard from "../Loading/LoadingCard";
import { Stats } from "./Stats";

const EqStats: React.FC = () => {

    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({});

    useEffect(() => {
        const stats = getEqData('https://api.geonet.org.nz/quake/stats')
            .then((stats) => {
                setStats(stats);
                setLoading(false);
                console.log(stats);
            }
        );}, []);
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