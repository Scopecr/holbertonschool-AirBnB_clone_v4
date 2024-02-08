#!/usr/bin/node
$(document).ready(function () {
  const amenityIds = {};

  $('input[type=checkbox]').change(function () {
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');

    if ($(this).prop('checked')) {
      amenityIds[amenityId] = amenityName;
    } else {
      delete amenityIds[amenityId];
    }

    $('.amenities h4').text(Object.values(amenityIds).join(', '));
  });
});

$.getJSON("http://0.0.0.0:5001/api/v1/status/", (data) => {
  if (data.status === "OK") {
    $("div#api_status").addClass("available");
  } else {
    $("div#api_status").removeClass("available");
  }
});


// send POST request to places_search
$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/places_search/',
  type: 'POST',
  contentType: 'application/json',
  data: JSON.stringify({}),
  success: function (data) {
      for (const place of data) {

          const article = `<article>
              <div class="title_box">
                  <h2>${place.name}</h2>
                  <div class="price_by_night">${place.price_by_night}</div>
              </div>
              <div class="information">
                  <div class="max_guest">${place.max_guest} Guest(s)</div>
                  <div class="number_rooms">${place.number_rooms} Bedroom(s)</div>
                  <div class="number_bathrooms">${place.number_bathrooms} Bathroom(s)</div>
              </div>
              <div class="description">
                  ${place.description}
              </div>
          </article>`;

          $('section.places').append(article);
      }
  }
});