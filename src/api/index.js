export const getRandomPost = async (size = 10) => {
    const response = await fetch(`http://api.icndb.com/jokes/random/${size}`);
    const data = await response.json();
    return data;
}