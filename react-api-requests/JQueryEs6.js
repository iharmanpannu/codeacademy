// Include data for accessing Google APIs

const apiKey = 'AIzaSyDt68Yxf4uStRD9jQHujqjb4nBKW_P5ehI';
const url = 'https://www.googleapis.com/urlshortener/v1/url';

// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

function expandUrl() {
  const urlToExpand = url + '?key=' + apiKey + '&shortUrl=' + $inputField.val();
  $.get(urlToExpand, response => {
    $responseField.append('<p>Your expanded url is: </p><p>' + response.longUrl + '</p>');
  }, 'json');
};

function shortenUrl() {
  const urlWithKey = url + '?key=' + apiKey;
  const urlToShorten = $inputField.val();

  $.ajax({
    url: urlWithKey,
    type: 'POST',
    data: JSON.stringify({longUrl: urlToShorten}),
    dataType: 'json',
    contentType: 'application/json',
    success(response) {
      $responseField.append('<p>Your shortened url is: </p><p>' + response.id + '</p>');
    },
    error(jqXHR, status, errorThrown) {
      console.log(jqXHR);
    }
  });
}

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
}

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
}

// Call functions on submit

$expandButton.click(expand);
$shortenButton.click(shorten);


// ANOTHER WAY TO AVOID MORE CODE 

// Include data for accessing Google APIs

const apiKey = 'AIzaSyDt68Yxf4uStRD9jQHujqjb4nBKW_P5ehI';
const url = 'https://www.googleapis.com/urlshortener/v1/url';

// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

function expandUrl() {
  const urlToExpand = url + '?key=' + apiKey + '&shortUrl=' + $inputField.val();
  $.getJSON(urlToExpand, response => {
    $responseField.append('<p>Your expanded url is: </p><p>' + response.longUrl + '</p>');
  });
};

function shortenUrl() {
  const urlWithKey = url + '?key=' + apiKey;
  const urlToShorten = $inputField.val();

  $.post({
    url: urlWithKey,
    data: JSON.stringify({longUrl: urlToShorten}),
    dataType: 'json',
    contentType: 'application/json',
    success(response) {
      $responseField.append('<p>Your shortened url is: </p><p>' + response.id + '</p>');
    },
    error(jqXHR, status, errorThrown) {
      console.log(jqXHR);
    }
  });
}

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
}

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
}

// Call functions on submit

$expandButton.click(expand);
$shortenButton.click(shorten);
