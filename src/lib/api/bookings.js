import { HAPIO_API_URL } from '$lib/config.js';
import { HAPIO_API_TOKEN } from '$lib/config.js';

export async function getBookingList(header, params='') {

    try {
      const queryString = Object.keys(params).length > 0
      ? `?${new URLSearchParams(params).toString()}`
      : '';
      const response = await fetch(HAPIO_API_URL + '/v1/bookings/' + queryString, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${HAPIO_API_TOKEN}`, // Include the JWT token in the header
          //'Access-Control-Allow-Origin': '*',
        },
      });
      return response;
    } catch (error) {
      throw new Error(`Error fetching locations list: ${error.message}`);
    }
  }

export async function createBooking(header, body) {
  console.log("creating a location...")
  try {
    const response = await fetch(HAPIO_API_URL + '/v1/bookings', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${HAPIO_API_TOKEN}`, // Include the JWT token in the header
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      // Handle success (e.g., return response data or show a success message)
      const data = await response.json();
      return data;
    } else {
      // Handle error (e.g., throw an error or show an error message)
      throw new Error('Failed to create location');
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}


  
  export async function deleteBooking(header, params) {
      console.log("deleting a booking...")
      try {
        const response = await fetch(HAPIO_API_URL + '/v1/bookings/' + params.id , {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${HAPIO_API_TOKEN}` // Include the JWT token in the header
          },
        });
    
        if (response.ok) {
          // Handle success (e.g., return response data or show a success message)
        } else {
          // Handle error (e.g., throw an error or show an error message)
          throw new Error('Failed to delete a booking');
        }
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    }