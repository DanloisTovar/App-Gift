export const getGifts = async (categoria) => {
    const api_key = '1I5mQGrImzz5wRXT8OQBMZksvdBF2bLe';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categoria}&limit=10`;

    const res = await fetch(url);
    const { data } = await res.json();

    const gifts = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    /*  console.log(gifts); */

    return gifts;
};
