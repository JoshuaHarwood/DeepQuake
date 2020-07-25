export const getEqData = async (url) => {

    try {
        const response = await fetch(
            url
        );

        return await response.json();
    } catch (e) {
        console.error(e.message)
    }
}