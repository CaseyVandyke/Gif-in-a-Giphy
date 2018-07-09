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
        clearResults();
        for (let i = 0; i < gif.data.length; i++) {
            $('.results').append(`<a href="${gif.data[i].url}">
            <img class="gif-box" src="${gif.data[i].images.fixed_height_small.url}" alt="${gif.data[i].images}" title="${gif.data[i].title}"></a>`);
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
        clearResults();
        for (let i = 0; i < sticker.data.length; i++) {
            $('.results').append(`<a href="${sticker.data[i].url}">
            <img class="gif-box" src="${sticker.data[i].images.fixed_height_small.url}" alt="${sticker.data[i].images}"></a>`);
        }

    })
}

/* Random call */

function getDataForRandomGif(search) {

    const URL = 'http://api.giphy.com/v1/gifs/random';
    // set up the query
    const query = {
        api_key: 'RVU0bZkFNjUyjUwwV8wHHrO37B0V01jy',
        tag: search
    }

    $.getJSON(URL, query, function (random) {
        clearResults()
        var newArr = $.makeArray(random.data);
        for (let i = 0; i < newArr.length; i++) {
            $('.results').append(`<a href="${newArr[i].url}"><img class="gif-box" src="${newArr[i].images.fixed_height_small.url}" alt="${newArr[i].images}" title="${newArr[i].title}">`);
        }
    })

}

function getDataForRandomSticker(search) {

    const URL = 'http://api.giphy.com/v1/stickers/random';
    // set up the query
    const query = {
        api_key: 'RVU0bZkFNjUyjUwwV8wHHrO37B0V01jy',
        tag: search
    }

    $.getJSON(URL, query, function (random) {
        clearResults()
        var newArr = $.makeArray(random.data);
        for (let i = 0; i < newArr.length; i++) {
            $('.results').append(`<img class="gif-box" src="${newArr[i].images.fixed_height_small.url}" alt="${newArr[i].images}">`);
        }
    })

}

function clearResults() {
    const clear = $('.results').html('');
    return clear;
}


$('.js-catcher').on('submit', function (event) {
    event.preventDefault();
    let selectedGif = $("#gif-select option:selected").val();
    let userInfo = $('#usr').val();
    if (selectedGif === "gif") {
        clearResults();
        getDataFromGiphy(userInfo);
    } else if (selectedGif === "sticker") {
        clearResults();
        getDataForSticker(userInfo);
    } else if (selectedGif === "random") {
        clearResults();
        getDataForRandomGif(userInfo);
    } else if (selectedGif === "random-sticker") {
        clearResults();
        getDataForRandomSticker(userInfo);
    }

});