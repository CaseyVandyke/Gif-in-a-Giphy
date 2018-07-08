/* Gif call */

function getDataFromGiphy(search) {

    const URL = 'http://api.giphy.com/v1/gifs/search';
    // set up the query
    const query = {
        api_key: 'RVU0bZkFNjUyjUwwV8wHHrO37B0V01jy',
        q: search,
        limit: 25
    }

    $.getJSON(URL, query, function (gif) {
        $('.results').html('');
        for (let i = 0; i < gif.data.length; i++) {
            $('.results').append(`<img class="gif-box" src="${gif.data[i].images.fixed_height_small.url}" alt="${gif.data[i].images}">`);
        }

    })

}

/* Sticker call */

function getDataForSticker(search) {

    const URL = 'http://api.giphy.com/v1/stickers/search';
    // set up the query
    const query = {
        api_key: 'RVU0bZkFNjUyjUwwV8wHHrO37B0V01jy',
        q: search,
        limit: 25
    }

    $.getJSON(URL, query, function (sticker) {
        $('.results').html('');
        for (let i = 0; i < sticker.data.length; i++) {
            $('.results').append(`<img class="gif-box" src="${sticker.data[i].images.fixed_height_small.url}" alt="${sticker.data[i].images}">`);
        }

    })
}

/* Random call */

function getDataForRandom(search) {

    const URL = 'http://api.giphy.com/v1/gifs/random';
    // set up the query
    const query = {
        api_key: 'RVU0bZkFNjUyjUwwV8wHHrO37B0V01jy',
        tag: search
    }

    $.getJSON(URL, query, function (random) {
        $('.results').html('');
        var newArr = $.makeArray(random.data);
            for (let i = 0; i < newArr.length; i++) {
                 $('.results').append(`<img class="gif-box" src="${newArr[i].images.fixed_height_small.url}" alt="${newArr[i].images}">`);
            }
        })

    }




$('.js-catcher').on('submit', function (event) {
    event.preventDefault();
    let selectedGif = $("#gif-select option:selected").val();
    let userInfo = $('#usr').val();
    if (selectedGif === "gif") {
        $('.sticker-results').html('');
        getDataFromGiphy(userInfo);
    } else if (selectedGif === "sticker") {
        $('.results').html('');
        getDataForSticker(userInfo);
    } else if (selectedGif === "random") {
        $('.results').html('');
        getDataForRandom(userInfo);
    }

});
