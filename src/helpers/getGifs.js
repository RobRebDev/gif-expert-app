export const getGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=6vT0ZZQxo5a6upK8syh9P8R48Yq6TyNp&limit=10`

    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifts = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    ));
    return (gifts)
}