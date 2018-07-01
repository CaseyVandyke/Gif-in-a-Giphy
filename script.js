function getDataFromGiphy(search) {
    
    const URL = 'http://api.giphy.com/v1/gifs/search';
    // set up the query
    const query = {
        api_key: 'RVU0bZkFNjUyjUwwV8wHHrO37B0V01jy',
        q: search,
        limit: 10,
    }

    $.getJSON(URL, query, function (data) {
        $('.results').html('');
        for (let i = 0; i < data.data.length; i++) {
            $('.results').append(`<h3>${data[i].title}</h3>`);
            
        }
    })
}

$('.js-catcher').on('submit', function (event) {
    event.preventDefault();
    let userInfo = $('#usr').val();
    getDataFromGiphy(userInfo);
})
