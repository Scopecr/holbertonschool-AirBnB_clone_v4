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