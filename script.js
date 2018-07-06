function getDataFromGiphy(search) {

    const URL = 'http://api.giphy.com/v1/gifs/search';
    // set up the query
    const query = {
        api_key: 'RVU0bZkFNjUyjUwwV8wHHrO37B0V01jy',
        q: search,
        limit: 25,
    }

    $.getJSON(URL, query, function (gif) {
        $('.results').html('');
        for (let i = 0; i < gif.data.length; i++) {
            $('.results').append(`<img class="gif-box" src="${gif.data[i].images.fixed_height_small.url}" alt="${gif.data[i].images}">`);
        }

    })

}



function getDataForSticker(search) {

    const URL = 'http://api.giphy.com/v1/stickers/search';
    // set up the query
    const query = {
        api_key: '7Q2Zlr9K4UiisLdt8XuwfGiZXEHuxr7n',
        q: search,
        limit: 24,
    }

    $.getJSON(URL, query, function (sticker) {
        $('.sticker-results').html('');
        for (let i = 0; i < sticker.data.length; i++) {
            $('.sticker-results').append(`<img class="gif-box" src="${sticker.data[i].images.fixed_height_small.url}" alt="${sticker.data[i].images}">`);
        }

    })
}

$("#gif-select").change(function() {
    let selectedGif = $("#gif-select option:selected").val();


$('.js-catcher').on('submit', function (event) {
    event.preventDefault();
    let userInfo = $('#usr').val();
    if (selectedGif === "gif") {
        getDataFromGiphy(userInfo);
    } else if(selectedGif === "sticker"){
        getDataForSticker(userInfo);
    }

})
});