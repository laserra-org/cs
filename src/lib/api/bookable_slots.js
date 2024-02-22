import { HAPIO_API_URL } from '$lib/config.js';
import { HAPIO_API_TOKEN } from '$lib/config.js';

export async function getBookableSlotList(header, params='') {

  try {
    const queryString = Object.keys(params).length > 0
    ? `?${new URLSearchParams(params).toString()}`
    : '';
    const response = await fetch(HAPIO_API_URL + '/v1/services/' + params.service + '/bookable-slots/' + queryString, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${HAPIO_API_TOKEN}`, // Include the JWT token in the header
        //'Access-Control-Allow-Origin': '*',
      },
    });
    return response;
  } catch (error) {
    throw new Error(`Error fetching bookable slot list: ${error.message}`);
  }
}
