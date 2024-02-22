import { HAPIO_API_URL } from '$lib/config.js';
import { HAPIO_API_TOKEN } from '$lib/config.js';

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