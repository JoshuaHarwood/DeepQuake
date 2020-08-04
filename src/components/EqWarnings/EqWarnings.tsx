import React, {useEffect, useState} from 'react';
import {getEqData} from "../GetEqData";
import LoadingCard from "../Loading/LoadingCard";
import { Warnings } from "./Warnings";

const EqWarnings: React.FC = () => {

    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({});

    useEffect(() => {
        const stats = getEqData('https://api.geonet.org.nz/news/geonet')
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
                    <Warnings data={stats}/>
                </code>
            )}
        </>
    );
}

export default EqWarnings;