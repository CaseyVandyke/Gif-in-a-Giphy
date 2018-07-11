
// Retrieves user input for gifs 
function getDataFromGiphy(search, numHolder) {

    const URL = 'http://api.giphy.com/v1/gifs/search';
    // set up the query
    const query = {
        api_key: 'RVU0bZkFNjUyjUwwV8wHHrO37B0V01jy',
        q: search,
        limit: numHolder
    }

    $.getJSON(URL, query, function (gif) {
        clearResults();
        for (let i = 0; i < gif.data.length; i++) {
            $('.results').append(`<img class="gif-box" src="${gif.data[i].images.fixed_height_small.url}" alt="${gif.data[i].images}" title="${gif.data[i].title}">`);
        }

    })

}

// Retrieves user input for stickers 

function getDataForSticker(search, numHolder) {

    const URL = 'http://api.giphy.com/v1/stickers/search';
    // set up the query
    const query = {
        api_key: 'RVU0bZkFNjUyjUwwV8wHHrO37B0V01jy',
        q: search,
        limit: numHolder
    }

    $.getJSON(URL, query, function (sticker) {
        clearResults();
        for (let i = 0; i < sticker.data.length; i++) {
            $('.results').append(`<img class="gif-box" src="${sticker.data[i].images.fixed_height_small.url}" alt="${sticker.data[i].images}">`);
        }

    })
}

// Retrieves user input for random gifs 

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
            $('.results').append(`<img class="gif-box" src="${newArr[i].images.fixed_height_small.url}" alt="${newArr[i].images}" title="${newArr[i].title}">`);
        }
    })

}

// Retrieves user input for random stickers 

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

// Clears user search 

function clearResults() {
    const clear = $('.results').html('');
    return clear;
}

// Button that retrieves different search results depending on user selection 

$('.js-catcher').on('submit', function (event) {
    event.preventDefault();
    let numberHolder = $('.user-number').val();
    let selectedGif = $("#gif-select option:selected").val();
    let userInfo = $('#usr').val();
    
    if (selectedGif === "gif") {
        clearResults();
        getDataFromGiphy(userInfo, numberHolder);
        
    } else if (selectedGif === "sticker") {
        clearResults();
        getDataForSticker(userInfo, numberHolder);
    } else if (selectedGif === "random") {
        clearResults();
        getDataForRandomGif(userInfo, numberHolder);
    } else if (selectedGif === "random-sticker") {
        clearResults();
        getDataForRandomSticker(userInfo, numberHolder);
    }

});