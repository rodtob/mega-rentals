import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { mockedRentalData } from '../data/mockedData';
import config from 'mega-rentals/config/environment';

export default class RentalRoute extends Route {
  @service store;

  async model(params: { id: string }) {
    console.log(params);
    const hotelId = params.id || '1377073';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': config.API_KEY,
        'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
      },
    };

    // const response = await fetch(
    //   `https://booking-com.p.rapidapi.com/v1/hotels/data?locale=en-gb&hotel_id=${hotelId}`,
    //   options
    // );

    // const responsePhoto = await fetch(
    //   `'https://booking-com.p.rapidapi.com/v1/hotels/photos?locale=en-gb&hotel_id=${}`,
    //   options
    // );

    // const result = await response.json();
    // console.log(result);
    // return result;

    return mockedRentalData;
  }
}
