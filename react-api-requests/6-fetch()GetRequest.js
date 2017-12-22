// Include data for accessing Google APIs
const apiKey = 'AIzaSyDt68Yxf4uStRD9jQHujqjb4nBKW_P5ehI';

const url = 'https://www.googleapis.com/urlshortener/v1/url';

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

function expandUrl() {
  const urlToExpand = url + '?shortUrl=' + $inputField.val() +
  '&key=' +apiKey;
  fetch(urlToExpand).then(response => {
    if(response.ok) {
      console.log(response.json());
    }
    throw new Error ('Request failed!');
  })
};

function shortenUrl() {};

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
};

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
};

$expandButton.click(expand);
$shortenButton.click(shorten);
