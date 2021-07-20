const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    // const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`); 
    const config = { params: { q: searchTerm, test: 'haha' } };
    const res = await axios.get('https://api.tvmaze.com/search/shows', config)
    makeImages(res.data);
    form.elements.query.value = "";
})

const makeImages = (showArr) => {
    for (result of showArr) {
        // If result has image, append to body
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }

}