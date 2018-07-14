// Retrieves user input for gifs 
function getDataFromGiphy(search, numHolder) {

    const URL = 'https://api.giphy.com/v1/gifs/search';
    // set up the query
    const query = {
        api_key: 'RVU0bZkFNjUyjUwwV8wHHrO37B0V01jy',
        q: search,
        limit: numHolder
    }
    $.getJSON(URL, query, function (gif) {
        clearResults();
        for (let i = 0; i < gif.data.length; i++) {
            $('.results').append(`<a href="${gif.data[i].images.downsized_large.url}" class="click-gif">
                                    <img class="gif-box" src="${gif.data[i].images.downsized_large.url}" alt="${gif.data[i].images}" title="${gif.data[i].title}">
                                  </a>`);
        }
    })
}

// Retrieves user input for stickers 

function getDataForSticker(search, numHolder) {

    const URL = 'https://api.giphy.com/v1/stickers/search';
    // set up the query
    const query = {
        api_key: 'RVU0bZkFNjUyjUwwV8wHHrO37B0V01jy',
        q: search,
        limit: numHolder
    }
    $.getJSON(URL, query, function (sticker) {
        clearResults();
        for (let i = 0; i < sticker.data.length; i++) {
            $('.results').append(`<a href="${sticker.data[i].images.downsized_large.url}" class="click-gif">
                                    <img class="gif-box" src="${sticker.data[i].images.downsized_large.url}" alt="${sticker.data[i].images}">
                                  </a>`);
        }
    })
}

// Retrieves user input for random gifs 

function getDataForRandomGif(numHolder) {

    const URL = 'https://api.giphy.com/v1/gifs/random';
    // set up the query
    const query = {
        api_key: 'RVU0bZkFNjUyjUwwV8wHHrO37B0V01jy',
    }
    clearResults()
    for (let i = 0; i < numHolder; i++) {
        $.getJSON(URL, query, function (random) {
            $('.results').append(`<a href="${random.data.images.downsized_large.url}" class="click-gif">
                                    <img class="gif-box" src="${random.data.images.downsized_large.url}" alt="${random.data.images}" title="${random.data.title}">
                                  </a>`);
        })
    }
}

function getDataForTrendingGif(numHolder) {

    const URL = 'https://api.giphy.com/v1/gifs/trending';
    // set up the query
    const query = {
        api_key: 'RVU0bZkFNjUyjUwwV8wHHrO37B0V01jy',
        limit: numHolder
    }
    clearResults()
    for (let i = 0; i < numHolder; i++) {
        $.getJSON(URL, query, function (trending) {
            $('.results').append(`<a href="${trending.data[i].images.downsized_large.url}" class="click-gif">
                                    <img class="gif-box" src="${trending.data[i].images.downsized_large.url}" alt="${trending.data[i].images}" title="${trending.data[i].title}">
                                  </a>`);

        })
    }
}

function getDataForTrendingSticker(numHolder) {

    const URL = 'https://api.giphy.com/v1/stickers/trending';
    // set up the query
    const query = {
        api_key: 'RVU0bZkFNjUyjUwwV8wHHrO37B0V01jy',
        limit: numHolder
    }
    clearResults()
    for (let i = 0; i < numHolder; i++) {
        $.getJSON(URL, query, function (trending) {
            $('.results').append(`<a href="${trending.data[i].images.original.url}" class="click-gif">
                                    <img class="gif-box" src="${trending.data[i].images.original.url}" alt="${trending.data[i].images}" title="${trending.data[i].title}">
                                  </a>`);
        })
    }
}

// Clears user search 

function clearResults() {
    const clear = $('.results').html('');
    return clear;
}

// Adds functionality to clicked gif

$('.results').on('click', '.click-gif', function(event){
    event.preventDefault();
    
    let hold = ($(this).find("img").attr('src'));

    // Loads the modal
    
    $("#myContent").html(`<div class="iso-container">
                            <img src="${hold}" class="iso-gif">
                            <button class="btn btn-danger copy-url">Get Url</button>
                          </div>`);
    $("#myform").show(500);
    
});

// Closes the modal
$("#btnClose").click(function() {
    $("#myform").hide(400);
});

// Button that retrieves different search results depending on user selection 

$('.js-catcher').on('submit', function (event) {
    event.preventDefault();
    let numberHolder = $('.user-number').val();
    let selectedGif = $("#gif-select option:selected").val();
    let userInfo = $('#usr').val();
    if (userInfo.trim() === $('#usr').val("")) {
        alert('Nope enter text');
    } else {
        if (selectedGif === "gif") {
            clearResults();
            getDataFromGiphy(userInfo, numberHolder);
        } else if (selectedGif === "sticker") {
            clearResults();
            getDataForSticker(userInfo, numberHolder);
        } else if (selectedGif === "random") {
            clearResults();
            getDataForRandomGif(numberHolder);
        } else if (selectedGif === "trending") {
            clearResults();
            getDataForTrendingGif(numberHolder);
        } else if (selectedGif === "trend-stickers") {
            clearResults();
            getDataForTrendingSticker(numberHolder);
        }
    }
});

$('#gif-select').on('change', function (event) {
    if ($(this).val() == 'random' || ($(this).val() == 'trending' || ($(this).val() == 'trend-stickers'))) {
        $('#usr').hide();
        $('.user-number').css("width", "300px");
    } else {
        $('#usr').show();
        $('.user-number').css("width", "140px");
    }
});