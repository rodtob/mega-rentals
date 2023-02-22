import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { mockedData } from '../data/mockedData';
import config from 'mega-rentals/config/environment';

export default class IndexRoute extends Route {
  @service store;

  async model(params) {
    console.log(params);
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': config.API_KEY,
    //     'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
    //   },
    // };

    // const response = await fetch(
    //   'https://booking-com.p.rapidapi.com/v1/hotels/search?room_number=1&checkout_date=2023-08-19&dest_type=city&dest_id=-553173&adults_number=2&locale=en-gb&checkin_date=2023-08-18&order_by=popularity&filter_by_currency=AED&units=metric&page_number=0&children_number=2&include_adjacency=true&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&children_ages=5%2C0',
    //   options
    // );
    // const { result } = await response.json();
    // console.log(result);
    //   return result;
    return mockedData;
  }
}
