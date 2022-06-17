import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import mars from '../asset/img/mars.jpg';
import MarsPhotoService from './mars-service.js'


$(".marsimg").attr("src", mars);

function getElements(response) {
  if (response.photos) {
    $('.img1').html(`<img src = ${response.photos[0].img_src} style="height:500px; width:600px;">`);
    
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
function getElement(response) {
  if (response.photos) {
    $('.img2').html(`<img src = ${response.photos[0].img_src} style="height:500px; width:600px;">`);
    
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
function getPicture(response) {
  if (response) {
    $('.picture').html(` ${response.copyright} `);
    $('.date').html(` ${response.date} `);
    $('.explanation').html(` ${response.explanation} `);
    $('.day').html(`<img src = ${response.hdurl} style= align-items:center;">`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
function getWeather(response) {
  if (response) {
    $('.min-temp').html(` <span> The minimum temperature is ${response.min_temp}k </span>`);
    $('.max-temp').html(`<span> The maximum temperature is ${response.max_temp}k </span> `);
    $ ('.pressure').html(`<span> The pressure is ${response.pressure}Pa </span>`);
    $('.condition').html(`<span> The weather right now is ${response.atmo_opacity} </span>`);
    $('.sunrise').html(`<span> The time for sunrise is ${response.sunrise}am </span>`);

    $('.sunset').html(`<span> The time for sunset is ${response.sunset} </span>`);

  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  MarsPhotoService.getPhotos()
      .then(function(response) {
        getElements(response);
      });
      MarsPhotoService.getAPhoto()
      .then(function(response) {
        getElement(response);
      });
      MarsPhotoService.pictureDay()
      .then(function(response) {
        getPicture(response);
      });
      MarsPhotoService.getWeateher()
      .then(function(response) {
        getWeather(response);
      });

});