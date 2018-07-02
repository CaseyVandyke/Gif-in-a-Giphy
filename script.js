function getDataFromGiphy(search) {
    
    const URL = 'http://api.giphy.com/v1/gifs/search';
    // set up the query
    const query = {
        api_key: 'RVU0bZkFNjUyjUwwV8wHHrO37B0V01jy',
        q: search,
        limit: 150,
    }

    $.getJSON(URL, query, function (gif) {
        $('.results').html('');
        for (let i = 0; i <gif.data.length; i++) {
            $('.results').append(`<img class="gif-box" src="${gif.data[i].images.fixed_height_small.url}" alt="${gif.data[i].images}">`);
            
        }
    })
}

$('.js-catcher').on('submit', function (event) {
    event.preventDefault();
    let userInfo = $('#usr').val();
    getDataFromGiphy(userInfo);
})
