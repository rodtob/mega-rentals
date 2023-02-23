import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { mockedData } from '../data/mockedData';
import config from 'mega-rentals/config/environment';

export default class IndexRoute extends Route {
  @service store;

  async model(params) {
    // console.log(params);
    // const qName = params.q || 'Holiday Inn';
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': config.API_KEY,
    //     'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
    //   },
    // };

    // const response = await fetch(
    //   `https://booking-com.p.rapidapi.com/v1/hotels/locations?name=${qName}&locale=en-gb`,
    //   options
    // );
    // const result = await response.json();
    // console.log(result);
    // console.log(mockedData);
    // return result;
    return mockedData;
  }
}
