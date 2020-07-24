export const getEqStats = async  () => {

    try {
        const response = await fetch(
            'https://api.geonet.org.nz/quake/stats'
        );

        return await response.json();
    } catch (e) {
        console.error(e.message)
    }
}