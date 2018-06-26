function tubeSearch(search) {

    const key = 'AIzaSyDCnL8sLhq05QgnhiwqvMFCDbKsAhYfmbA';
    const URL = 'https://www.googleapis.com/youtube/v3/search';

    const params = {
        part: 'snippet',
        key: key,
        q: search,
        maxResults: 10
    }

   
        $.getJSON(URL, params, function (data) {
            $('.results').html('');
            for(let i = 0; i < data.items.length; i++) {
               $('.results').append(`<h3>${data.items[i].snippet.title}</h3>`);
                 $('.results').append(`<img src="${data.items[i].snippet.thumbnails.medium.url}"/>`);
                
            }
    })

}

$('.js-catcher').on('submit', function (event) {
    event.preventDefault();
    let searchHolder = $('#usr').val();
    tubeSearch(searchHolder);
});
