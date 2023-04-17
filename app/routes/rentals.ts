import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { mockedLocationData, mockedRentalsData } from '../data/mockedData';
import config from 'mega-rentals/config/environment';

export default class RentalsRoute extends Route {
  @service store;

  async model(params: { q: String }) {
    console.log(params);
    const destId = params.q || '-402849';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': config.API_KEY,
        'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
      },
    };

    // const response = await fetch(
    //   `https://booking-com.p.rapidapi.com/v2/hotels/search?dest_type=city&locale=en-gb&units=metric&adults_number=2&room_number=1&filter_by_currency=AED&order_by=popularity&checkin_date=2023-09-05&dest_id=${destId}&checkout_date=2023-09-06&children_number=2&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&include_adjacency=true&children_ages=5%2C0&page_number=0`,
    //   options
    // );

    // const { results } = await response.json();
    // console.log(results);
    // // console.log(mockedLocationData);
    // return results;

    return mockedRentalsData;
  }
}
