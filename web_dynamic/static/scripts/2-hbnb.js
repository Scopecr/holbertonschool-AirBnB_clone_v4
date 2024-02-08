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