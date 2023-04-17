export const mockedLocationData = [
  {
    dest_id: '-402849',
    type: 'ci',
    city_name: 'Seville',
    dest_type: 'city',
    country: 'Spain',
    cc1: 'es',
    region: 'Andalucía',
    label: 'Seville, Andalucía, Spain',
    image_url:
      'https://cf.bstatic.com/xdata/images/city/150x150/645961.jpg?k=590a1d750ec44a3b9c5f6d9dd1c84f2d8b87693e1c553f2dc76ac2cebe75f1a2&o=',
    b_max_los_data: {
      default_los: 45,
      experiment: 'long_stays_android_extend_los_2',
      max_allowed_los: 90,
      has_extended_los: 1,
      extended_los: 90,
      is_fullon: 0,
    },
    nr_hotels: 3353,
    name: 'Seville',
    latitude: 37.388634,
    timezone: 'Europe/Madrid',
    longitude: -5.995552,
    hotels: 3353,
    rtl: 0,
    lc: 'xu',
    city_ufi: null,
  },
  {
    b_max_los_data: {
      default_los: 45,
      experiment: 'long_stays_android_extend_los_2',
      max_allowed_los: 90,
      extended_los: 90,
      has_extended_los: 1,
      is_fullon: 0,
    },
    image_url:
      'https://cf.bstatic.com/xdata/images/district/150x150/37952.jpg?k=f56d564b42998abce5e79e77193a8569131712a305da65d05c22dcb333a7214f&o=',
    nr_hotels: 1823,
    name: 'Old Town',
    city_name: 'Seville',
    type: 'di',
    dest_id: '1218',
    country: 'Spain',
    cc1: 'es',
    dest_type: 'district',
    region: 'Andalucía',
    label: 'Old Town, Seville, Andalucía, Spain',
    rtl: 0,
    timezone: 'Europe/Madrid',
    longitude: -5.993739,
    hotels: 1823,
    city_ufi: -402849,
    lc: 'xu',
    latitude: 37.392025,
  },
  {
    region: 'Provincia de Sevilla',
    label: 'Provincia de Sevilla, Spain',
    dest_id: '774',
    type: 're',
    city_name: '',
    dest_type: 'region',
    cc1: 'es',
    country: 'Spain',
    name: 'Provincia de Sevilla',
    nr_hotels: 3971,
    image_url:
      'https://cf.bstatic.com/xdata/images/region/150x150/70796.jpg?k=a202262eefd4dcf3698cd3339bb0e704e44bd0bad9d1ecdeeac44eb03b69a9d1&o=',
    b_max_los_data: {
      has_extended_los: 1,
      extended_los: 90,
      is_fullon: 0,
      max_allowed_los: 90,
      experiment: 'long_stays_android_extend_los_2',
      default_los: 45,
    },
    latitude: 37.395626,
    lc: 'xu',
    city_ufi: null,
    hotels: 3971,
    longitude: -5.898213,
    rtl: 0,
  },
  {
    latitude: 37.4233,
    city_ufi: -402849,
    lc: 'xu',
    timezone: 'Europe/Madrid',
    longitude: -5.89968,
    hotels: 83,
    rtl: 0,
    label: 'Seville Airport, Seville, Andalucía, Spain',
    region: 'Andalucía',
    dest_type: 'airport',
    country: 'Spain',
    cc1: 'es',
    type: 'ai',
    dest_id: '270',
    city_name: 'Seville',
    name: 'Seville Airport',
    nr_hotels: 83,
    image_url: 'https://cf.bstatic.com/static/img/plane-100.jpg',
    b_max_los_data: {
      extended_los: 90,
      has_extended_los: 1,
      is_fullon: 0,
      max_allowed_los: 90,
      experiment: 'long_stays_android_extend_los_2',
      default_los: 45,
    },
  },
  {
    longitude: -6.0095477,
    timezone: 'Europe/Madrid',
    hotels: 1,
    rtl: 0,
    city_ufi: -402849,
    lc: 'en',
    latitude: 37.390648,
    image_url:
      'https://cf.bstatic.com/xdata/images/hotel/150x150/362425946.jpg?k=113663aa072235b380305787559fc912f94fe8bc90d8bf321229966ec5516c66&o=',
    b_max_los_data: {
      extended_los: 90,
      has_extended_los: 1,
      is_fullon: 0,
      experiment: 'long_stays_android_extend_los_2',
      default_los: 45,
      max_allowed_los: 90,
    },
    nr_hotels: 1,
    name: 'Eurostars Torre Sevilla',
    type: 'ho',
    dest_id: '2560926',
    city_name: 'Seville',
    dest_type: 'hotel',
    country: 'Spain',
    cc1: 'es',
    region: 'Andalucía',
    label: 'Eurostars Torre Sevilla, Seville, Andalucía, Spain',
  },
];

export const mockedRentalsData: Array<{
  id: number;
  name: string;
  mainPhotoId: number;
  photoMainUrl: string;
  photoUrls: Array<string>;
  position: number;
  rankingPosition: number;
  countryCode: string;
  latitude: number;
  longitude: number;
  priceBreakdown: {
    benefitBadges:
      | [
          {
            explanation: string;
            variant: string;
            identifier: string;
            text: string;
          }
        ]
      | [];
    taxExceptions: [];
    strikethroughPrice?: {
      currency: string;
      value: number;
    };
    grossPrice: {
      value: number;
      currency: string;
    };
  };
  currency: string;
  checkin: {
    fromTime: string;
    untilTime: string;
  };
  checkout: {
    fromTime: string;
    untilTime: string;
  };
  checkoutDate: string;
  checkinDate: string;
  reviewScore: number;
  reviewScoreWord: string;
  reviewCount: number;
  qualityClass: number;
  isFirstPage: true;
  accuratePropertyClass: number;
  propertyClass: number;
  ufi: number;
  wishlistName: string;
  optOutFromGalleryChanges: number;
}> = [
  {
    id: 3059070,
    name: 'Casa Gloria Apartments',
    mainPhotoId: 127991573,
    photoMainUrl:
      'https://cf.bstatic.com/xdata/images/hotel/400x800/127991573.jpg?k=4d83816c1d8785289e92c36d3fb391cfbd517e9a3ba2d1f3b056e0daea59cc30&o=',
    photoUrls: [
      'https://cf.bstatic.com/xdata/images/hotel/square60/127991573.jpg?k=4d83816c1d8785289e92c36d3fb391cfbd517e9a3ba2d1f3b056e0daea59cc30&o=',
    ],
    position: 3,
    rankingPosition: 3,
    countryCode: 'es',
    latitude: 37.391766,
    longitude: -5.999773,
    priceBreakdown: {
      benefitBadges: [
        {
          explanation: 'Mobile-only price',
          variant: 'constructive',
          identifier: 'Mobile Rate',
          text: 'Mobile-only price',
        },
      ],
      taxExceptions: [],
      strikethroughPrice: {
        currency: 'EUR',
        value: 153,
      },
      grossPrice: {
        value: 110.16,
        currency: 'EUR',
      },
    },
    currency: 'EUR',
    checkin: {
      fromTime: '15:00',
      untilTime: '00:00',
    },
    checkout: {
      fromTime: '08:30',
      untilTime: '12:00',
    },
    checkoutDate: '2023-09-06',
    checkinDate: '2023-09-05',
    reviewScore: 9,
    reviewScoreWord: 'Superb',
    reviewCount: 1210,
    qualityClass: 4,
    isFirstPage: true,
    accuratePropertyClass: 0,
    propertyClass: 0,
    ufi: -402849,
    wishlistName: 'Seville',
    optOutFromGalleryChanges: 0,
  },
  {
    id: 91260,
    name: 'Petit Palace Marques Santa Ana',
    mainPhotoId: 131158955,
    photoMainUrl:
      'https://cf.bstatic.com/xdata/images/hotel/400x800/131158955.jpg?k=ef37f96f7c4efbce1cd78094cd9ecd29efe9a9150fd9581d12e0b13a32134d4a&o=',
    photoUrls: [
      'https://cf.bstatic.com/xdata/images/hotel/square60/131158955.jpg?k=ef37f96f7c4efbce1cd78094cd9ecd29efe9a9150fd9581d12e0b13a32134d4a&o=',
    ],
    position: 4,
    rankingPosition: 4,
    countryCode: 'es',
    latitude: 37.3873159431388,
    longitude: -5.9953299164772,
    priceBreakdown: {
      benefitBadges: [
        {
          variant: 'constructive',
          identifier: 'Mobile Rate',
          text: 'Mobile-only price',
          explanation: 'Mobile-only price',
        },
      ],
      taxExceptions: [],
      strikethroughPrice: {
        value: 174,
        currency: 'EUR',
      },
      grossPrice: {
        value: 133.11,
        currency: 'EUR',
      },
    },
    currency: 'EUR',
    checkin: {
      untilTime: '00:00',
      fromTime: '12:00',
    },
    checkout: {
      fromTime: '00:00',
      untilTime: '12:00',
    },
    checkoutDate: '2023-09-06',
    checkinDate: '2023-09-05',
    reviewScore: 8.6,
    reviewScoreWord: 'Fabulous',
    reviewCount: 2470,
    qualityClass: 0,
    isFirstPage: true,
    accuratePropertyClass: 4,
    propertyClass: 4,
    ufi: -402849,
    wishlistName: 'Seville',
    optOutFromGalleryChanges: 0,
  },
  {
    id: 91159,
    name: 'Silken Al-Andalus Palace',
    mainPhotoId: 12813945,
    photoMainUrl:
      'https://cf.bstatic.com/xdata/images/hotel/400x800/12813945.jpg?k=5f064470f73644bf7d1d8ba44f589ba7f08f1b671cf930304ab634f233ba2a74&o=',
    photoUrls: [
      'https://cf.bstatic.com/xdata/images/hotel/square60/12813945.jpg?k=5f064470f73644bf7d1d8ba44f589ba7f08f1b671cf930304ab634f233ba2a74&o=',
    ],
    position: 5,
    rankingPosition: 5,
    countryCode: 'es',
    latitude: 37.3541181193342,
    longitude: -5.98022371530533,
    priceBreakdown: {
      strikethroughPrice: {
        currency: 'EUR',
        value: 158.1,
      },
      benefitBadges: [
        {
          identifier: 'Mobile Rate',
          text: 'Mobile-only price',
          variant: 'constructive',
          explanation: 'Mobile-only price',
        },
      ],
      taxExceptions: [],
      grossPrice: {
        value: 142.29,
        currency: 'EUR',
      },
    },
    currency: 'EUR',
    checkin: {
      untilTime: '00:00',
      fromTime: '14:00',
    },
    checkout: {
      untilTime: '12:00',
      fromTime: '00:00',
    },
    checkoutDate: '2023-09-06',
    checkinDate: '2023-09-05',
    reviewScore: 8.4,
    reviewScoreWord: 'Very good',
    reviewCount: 15052,
    qualityClass: 0,
    isFirstPage: true,
    accuratePropertyClass: 4,
    propertyClass: 4,
    ufi: -402849,
    wishlistName: 'Seville',
    optOutFromGalleryChanges: 0,
  },
  {
    id: 91657,
    name: 'Exe Isla Cartuja',
    mainPhotoId: 362425689,
    photoMainUrl:
      'https://cf.bstatic.com/xdata/images/hotel/400x800/362425689.jpg?k=6992961840c42358978d6a8379889e51c986b1a157e09fd7334c64a6a2d9c5bb&o=',
    photoUrls: [
      'https://cf.bstatic.com/xdata/images/hotel/square60/362425689.jpg?k=6992961840c42358978d6a8379889e51c986b1a157e09fd7334c64a6a2d9c5bb&o=',
    ],
    position: 7,
    rankingPosition: 7,
    countryCode: 'es',
    latitude: 37.4169362244029,
    longitude: -6.00488662719727,
    priceBreakdown: {
      grossPrice: {
        value: 124.6,
        currency: 'EUR',
      },
      benefitBadges: [],
      taxExceptions: [],
    },
    currency: 'EUR',
    checkin: {
      untilTime: '00:00',
      fromTime: '14:00',
    },
    checkout: {
      fromTime: '00:00',
      untilTime: '12:00',
    },
    checkoutDate: '2023-09-06',
    checkinDate: '2023-09-05',
    reviewScore: 8.3,
    reviewScoreWord: 'Very good',
    reviewCount: 3849,
    qualityClass: 0,
    isFirstPage: true,
    accuratePropertyClass: 4,
    propertyClass: 4,
    ufi: -402849,
    wishlistName: 'Seville',
    optOutFromGalleryChanges: 0,
  },
  {
    id: 93546,
    name: 'Hotel Novotel Sevilla',
    mainPhotoId: 201386378,
    photoMainUrl:
      'https://cf.bstatic.com/xdata/images/hotel/400x800/201386378.jpg?k=c71c974693c7c022c41575835a7e3ed3c8451f58e733cd6c375bf21f830f8711&o=',
    photoUrls: [
      'https://cf.bstatic.com/xdata/images/hotel/square60/201386378.jpg?k=c71c974693c7c022c41575835a7e3ed3c8451f58e733cd6c375bf21f830f8711&o=',
    ],
    position: 8,
    rankingPosition: 8,
    countryCode: 'es',
    latitude: 37.3827796602623,
    longitude: -5.97211137413979,
    priceBreakdown: {
      taxExceptions: [],
      benefitBadges: [],
      grossPrice: {
        currency: 'EUR',
        value: 123,
      },
    },
    currency: 'EUR',
    checkin: {
      untilTime: '00:00',
      fromTime: '12:00',
    },
    checkout: {
      fromTime: '00:00',
      untilTime: '12:00',
    },
    checkoutDate: '2023-09-06',
    checkinDate: '2023-09-05',
    reviewScore: 8.5,
    reviewScoreWord: 'Very good',
    reviewCount: 2585,
    qualityClass: 0,
    isFirstPage: true,
    accuratePropertyClass: 4,
    propertyClass: 4,
    ufi: -402849,
    wishlistName: 'Seville',
    optOutFromGalleryChanges: 1,
  },
  {
    id: 90574,
    name: 'Catalonia Santa Justa',
    mainPhotoId: 231333115,
    photoMainUrl:
      'https://cf.bstatic.com/xdata/images/hotel/400x800/231333115.jpg?k=907a1b698e66d4affbdaed3e55b5d56dc2272b8eb560738ae2ba82bc2cc0412a&o=',
    photoUrls: [
      'https://cf.bstatic.com/xdata/images/hotel/square60/231333115.jpg?k=907a1b698e66d4affbdaed3e55b5d56dc2272b8eb560738ae2ba82bc2cc0412a&o=',
    ],
    position: 10,
    rankingPosition: 10,
    countryCode: 'es',
    latitude: 37.3936579673198,
    longitude: -5.98273694515228,
    priceBreakdown: {
      grossPrice: {
        currency: 'EUR',
        value: 152,
      },
      benefitBadges: [],
      taxExceptions: [],
    },
    currency: 'EUR',
    checkin: {
      untilTime: '00:00',
      fromTime: '15:00',
    },
    checkout: {
      untilTime: '12:00',
      fromTime: '00:00',
    },
    checkoutDate: '2023-09-06',
    checkinDate: '2023-09-05',
    reviewScore: 8.7,
    reviewScoreWord: 'Fabulous',
    reviewCount: 4363,
    qualityClass: 0,
    isFirstPage: true,
    accuratePropertyClass: 4,
    propertyClass: 4,
    ufi: -402849,
    wishlistName: 'Seville',
    optOutFromGalleryChanges: 0,
  },
  {
    id: 91982,
    name: 'Petit Palace Santa Cruz',
    mainPhotoId: 129594393,
    photoMainUrl:
      'https://cf.bstatic.com/xdata/images/hotel/400x800/129594393.jpg?k=a483b70b7f37f245ab93fd7a2e250cb93310e629a60ae0741a4b12099ac0ca48&o=',
    photoUrls: [
      'https://cf.bstatic.com/xdata/images/hotel/square60/129594393.jpg?k=a483b70b7f37f245ab93fd7a2e250cb93310e629a60ae0741a4b12099ac0ca48&o=',
    ],
    position: 11,
    rankingPosition: 11,
    countryCode: 'es',
    latitude: 37.3884401145708,
    longitude: -5.98957657814026,
    priceBreakdown: {
      strikethroughPrice: {
        currency: 'EUR',
        value: 171,
      },
      benefitBadges: [
        {
          variant: 'constructive',
          text: 'Mobile-only price',
          identifier: 'Mobile Rate',
          explanation: 'Mobile-only price',
        },
      ],
      taxExceptions: [],
      grossPrice: {
        value: 130.82,
        currency: 'EUR',
      },
    },
    currency: 'EUR',
    checkin: {
      untilTime: '00:00',
      fromTime: '12:00',
    },
    checkout: {
      untilTime: '12:00',
      fromTime: '00:00',
    },
    checkoutDate: '2023-09-06',
    checkinDate: '2023-09-05',
    reviewScore: 8.7,
    reviewScoreWord: 'Fabulous',
    reviewCount: 1734,
    qualityClass: 0,
    isFirstPage: true,
    accuratePropertyClass: 4,
    propertyClass: 4,
    ufi: -402849,
    wishlistName: 'Seville',
    optOutFromGalleryChanges: 0,
  },
  {
    id: 429200,
    name: 'Apartamentos Eslava',
    mainPhotoId: 13438037,
    photoMainUrl:
      'https://cf.bstatic.com/xdata/images/hotel/400x800/13438037.jpg?k=f6b5fd3348219fae6b41d6fba9a33409767713b87bcc6b0017c922564f263a44&o=',
    photoUrls: [
      'https://cf.bstatic.com/xdata/images/hotel/square60/13438037.jpg?k=f6b5fd3348219fae6b41d6fba9a33409767713b87bcc6b0017c922564f263a44&o=',
    ],
    position: 12,
    rankingPosition: 12,
    countryCode: 'es',
    latitude: 37.397480823495,
    longitude: -5.99693387746811,
    priceBreakdown: {
      benefitBadges: [],
      taxExceptions: [],
      grossPrice: {
        value: 135,
        currency: 'EUR',
      },
    },
    currency: 'EUR',
    checkin: {
      fromTime: '15:00',
      untilTime: '20:00',
    },
    checkout: {
      fromTime: '00:00',
      untilTime: '12:00',
    },
    checkoutDate: '2023-09-06',
    checkinDate: '2023-09-05',
    reviewScore: 9.4,
    reviewScoreWord: 'Superb',
    reviewCount: 362,
    qualityClass: 4,
    isFirstPage: true,
    accuratePropertyClass: 0,
    propertyClass: 0,
    ufi: -402849,
    wishlistName: 'Seville',
    optOutFromGalleryChanges: 0,
  },
  {
    id: 90468,
    name: 'Vértice Sevilla',
    mainPhotoId: 221422793,
    photoMainUrl:
      'https://cf.bstatic.com/xdata/images/hotel/400x800/221422793.jpg?k=a11852b565e8531008d3bedad531527c5617c8afccc45c77864bdbb105cd521d&o=',
    photoUrls: [
      'https://cf.bstatic.com/xdata/images/hotel/square60/221422793.jpg?k=a11852b565e8531008d3bedad531527c5617c8afccc45c77864bdbb105cd521d&o=',
    ],
    position: 13,
    rankingPosition: 13,
    countryCode: 'es',
    latitude: 37.3883548699344,
    longitude: -5.92065453529358,
    priceBreakdown: {
      taxExceptions: [],
      benefitBadges: [
        {
          text: 'Mobile-only price',
          identifier: 'Mobile Rate',
          variant: 'constructive',
          explanation: 'Mobile-only price',
        },
      ],
      strikethroughPrice: {
        currency: 'EUR',
        value: 169.94,
      },
      grossPrice: {
        currency: 'EUR',
        value: 152.95,
      },
    },
    currency: 'EUR',
    checkin: {
      fromTime: '14:00',
      untilTime: '00:00',
    },
    checkout: {
      untilTime: '12:00',
      fromTime: '00:00',
    },
    checkoutDate: '2023-09-06',
    checkinDate: '2023-09-05',
    reviewScore: 8.4,
    reviewScoreWord: 'Very good',
    reviewCount: 5777,
    qualityClass: 0,
    isFirstPage: true,
    accuratePropertyClass: 4,
    propertyClass: 4,
    ufi: -402849,
    wishlistName: 'Seville',
    optOutFromGalleryChanges: 0,
  },
  {
    id: 7967218,
    name: 'Casa Señorial del Siglo XVIII',
    mainPhotoId: 422835262,
    photoMainUrl:
      'https://cf.bstatic.com/xdata/images/hotel/400x800/422835262.jpg?k=6000fddfcba7e395f095df8ff63f09915113611aeac0f82aabf26fa46ace4c5e&o=',
    photoUrls: [
      'https://cf.bstatic.com/xdata/images/hotel/square60/422835262.jpg?k=6000fddfcba7e395f095df8ff63f09915113611aeac0f82aabf26fa46ace4c5e&o=',
    ],
    position: 14,
    rankingPosition: 14,
    countryCode: 'es',
    latitude: 37.397349575365,
    longitude: -5.995250975463,
    priceBreakdown: {
      grossPrice: {
        value: 139.5,
        currency: 'EUR',
      },
      strikethroughPrice: {
        value: 155,
        currency: 'EUR',
      },
      benefitBadges: [
        {
          explanation: 'Mobile-only price',
          text: 'Mobile-only price',
          identifier: 'Mobile Rate',
          variant: 'constructive',
        },
      ],
      taxExceptions: [],
    },
    currency: 'EUR',
    checkin: {
      fromTime: '15:00',
      untilTime: '00:00',
    },
    checkout: {
      fromTime: '08:00',
      untilTime: '11:00',
    },
    checkoutDate: '2023-09-06',
    checkinDate: '2023-09-05',
    reviewScore: 9.2,
    reviewScoreWord: 'Superb',
    reviewCount: 305,
    qualityClass: 4,
    isFirstPage: true,
    accuratePropertyClass: 0,
    propertyClass: 0,
    ufi: -402849,
    wishlistName: 'Seville',
    optOutFromGalleryChanges: 0,
  },
  {
    id: 90573,
    name: 'Catalonia Giralda',
    mainPhotoId: 81731246,
    photoMainUrl:
      'https://cf.bstatic.com/xdata/images/hotel/400x800/81731246.jpg?k=009d9f1d320f25fdfe31c60eb42d597832ab8196d86c7f4711367a781c0c4698&o=',
    photoUrls: [
      'https://cf.bstatic.com/xdata/images/hotel/square60/81731246.jpg?k=009d9f1d320f25fdfe31c60eb42d597832ab8196d86c7f4711367a781c0c4698&o=',
    ],
    position: 15,
    rankingPosition: 15,
    countryCode: 'es',
    latitude: 37.390138593746,
    longitude: -5.9847754240036,
    priceBreakdown: {
      grossPrice: {
        value: 192,
        currency: 'EUR',
      },
      taxExceptions: [],
      benefitBadges: [],
    },
    currency: 'EUR',
    checkin: {
      fromTime: '15:00',
      untilTime: '00:00',
    },
    checkout: {
      untilTime: '12:00',
      fromTime: '00:00',
    },
    checkoutDate: '2023-09-06',
    checkinDate: '2023-09-05',
    reviewScore: 8.6,
    reviewScoreWord: 'Fabulous',
    reviewCount: 4301,
    qualityClass: 0,
    isFirstPage: true,
    accuratePropertyClass: 4,
    propertyClass: 4,
    ufi: -402849,
    wishlistName: 'Seville',
    optOutFromGalleryChanges: 0,
  },
  {
    id: 235401,
    name: 'Exe Sevilla Palmera',
    mainPhotoId: 275674664,
    photoMainUrl:
      'https://cf.bstatic.com/xdata/images/hotel/400x800/275674664.jpg?k=b410e27677c81c35e9f22b5dbf176dd4df4c3666a598c0428ac5e729f4d11f04&o=',
    photoUrls: [
      'https://cf.bstatic.com/xdata/images/hotel/square60/275674664.jpg?k=b410e27677c81c35e9f22b5dbf176dd4df4c3666a598c0428ac5e729f4d11f04&o=',
    ],
    position: 16,
    rankingPosition: 16,
    countryCode: 'es',
    latitude: 37.3653267452396,
    longitude: -5.97907572984695,
    priceBreakdown: {
      grossPrice: {
        currency: 'EUR',
        value: 118.4,
      },
      benefitBadges: [],
      taxExceptions: [],
    },
    currency: 'EUR',
    checkin: {
      untilTime: '00:00',
      fromTime: '14:00',
    },
    checkout: {
      untilTime: '12:00',
      fromTime: '05:00',
    },
    checkoutDate: '2023-09-06',
    checkinDate: '2023-09-05',
    reviewScore: 8.1,
    reviewScoreWord: 'Very good',
    reviewCount: 5323,
    qualityClass: 0,
    isFirstPage: true,
    accuratePropertyClass: 4,
    propertyClass: 4,
    ufi: -402849,
    wishlistName: 'Seville',
    optOutFromGalleryChanges: 0,
  },
  {
    id: 8188829,
    name: 'Hotel Giralda Center',
    mainPhotoId: 388875835,
    photoMainUrl:
      'https://cf.bstatic.com/xdata/images/hotel/400x800/388875835.jpg?k=c0fd9280aa49d1af5786ac7c796a7c58a45380652ad808ae27edaec2616d783e&o=',
    photoUrls: [
      'https://cf.bstatic.com/xdata/images/hotel/square60/388875835.jpg?k=c0fd9280aa49d1af5786ac7c796a7c58a45380652ad808ae27edaec2616d783e&o=',
    ],
    position: 17,
    rankingPosition: 17,
    countryCode: 'es',
    latitude: 37.382422,
    longitude: -5.983729,
    priceBreakdown: {
      benefitBadges: [],
      taxExceptions: [],
      grossPrice: {
        currency: 'EUR',
        value: 246.84,
      },
    },
    currency: 'EUR',
    checkin: {
      fromTime: '14:00',
      untilTime: '00:00',
    },
    checkout: {
      untilTime: '12:00',
      fromTime: '06:00',
    },
    checkoutDate: '2023-09-06',
    checkinDate: '2023-09-05',
    reviewScore: 9.3,
    reviewScoreWord: 'Superb',
    reviewCount: 1589,
    qualityClass: 0,
    isFirstPage: true,
    accuratePropertyClass: 4,
    propertyClass: 4,
    ufi: -402849,
    wishlistName: 'Seville',
    optOutFromGalleryChanges: 0,
  },
  {
    id: 90643,
    name: 'Occidental Sevilla Viapol',
    mainPhotoId: 270460562,
    photoMainUrl:
      'https://cf.bstatic.com/xdata/images/hotel/400x800/270460562.jpg?k=bfce7ad9c415a97b61ed5515010b5107a13ceb2d0627434014688b3db41db8a9&o=',
    photoUrls: [
      'https://cf.bstatic.com/xdata/images/hotel/square60/270460562.jpg?k=bfce7ad9c415a97b61ed5515010b5107a13ceb2d0627434014688b3db41db8a9&o=',
    ],
    position: 18,
    rankingPosition: 18,
    countryCode: 'es',
    latitude: 37.3786597913751,
    longitude: -5.97807258367538,
    priceBreakdown: {
      taxExceptions: [],
      benefitBadges: [],
      grossPrice: {
        currency: 'EUR',
        value: 169.26,
      },
    },
    currency: 'EUR',
    checkin: {
      untilTime: '00:00',
      fromTime: '14:00',
    },
    checkout: {
      untilTime: '12:00',
      fromTime: '00:00',
    },
    checkoutDate: '2023-09-06',
    checkinDate: '2023-09-05',
    reviewScore: 8.8,
    reviewScoreWord: 'Fabulous',
    reviewCount: 2603,
    qualityClass: 0,
    isFirstPage: true,
    accuratePropertyClass: 4,
    propertyClass: 4,
    ufi: -402849,
    wishlistName: 'Seville',
    optOutFromGalleryChanges: 0,
  },
  {
    id: 7086750,
    name: 'Oboe Sevilla Catedral',
    mainPhotoId: 295310542,
    photoMainUrl:
      'https://cf.bstatic.com/xdata/images/hotel/400x800/295310542.jpg?k=c28683ceaf1f3765d5329c42cfe06ef8ad4c948125092b5d45b401a88de38fb0&o=',
    photoUrls: [
      'https://cf.bstatic.com/xdata/images/hotel/square60/295310542.jpg?k=c28683ceaf1f3765d5329c42cfe06ef8ad4c948125092b5d45b401a88de38fb0&o=',
    ],
    position: 19,
    rankingPosition: 19,
    countryCode: 'es',
    latitude: 37.3871651,
    longitude: -5.9913766,
    priceBreakdown: {
      strikethroughPrice: {
        currency: 'EUR',
        value: 207,
      },
      benefitBadges: [
        {
          explanation: 'Mobile-only price',
          variant: 'constructive',
          identifier: 'Mobile Rate',
          text: 'Mobile-only price',
        },
      ],
      taxExceptions: [],
      grossPrice: {
        currency: 'EUR',
        value: 186.3,
      },
    },
    currency: 'EUR',
    checkin: {
      untilTime: '00:00',
      fromTime: '16:00',
    },
    checkout: {
      untilTime: '11:00',
      fromTime: '00:00',
    },
    checkoutDate: '2023-09-06',
    checkinDate: '2023-09-05',
    reviewScore: 9.2,
    reviewScoreWord: 'Superb',
    reviewCount: 502,
    qualityClass: 4,
    isFirstPage: true,
    accuratePropertyClass: 0,
    propertyClass: 0,
    ufi: -402849,
    wishlistName: 'Seville',
    optOutFromGalleryChanges: 1,
  },
  {
    id: 90114,
    name: 'Zenit Sevilla',
    mainPhotoId: 102166847,
    photoMainUrl:
      'https://cf.bstatic.com/xdata/images/hotel/400x800/102166847.jpg?k=0ff8a7faaa4d84464eec50dfd34165c02164c1d8765c569d077a2e2a337907b5&o=',
    photoUrls: [
      'https://cf.bstatic.com/xdata/images/hotel/square60/102166847.jpg?k=0ff8a7faaa4d84464eec50dfd34165c02164c1d8765c569d077a2e2a337907b5&o=',
    ],
    position: 20,
    rankingPosition: 20,
    countryCode: 'es',
    latitude: 37.3827319196218,
    longitude: -6.00491210818291,
    priceBreakdown: {
      taxExceptions: [],
      benefitBadges: [],
      grossPrice: {
        currency: 'EUR',
        value: 214,
      },
    },
    currency: 'EUR',
    checkin: {
      untilTime: '00:00',
      fromTime: '14:00',
    },
    checkout: {
      fromTime: '00:00',
      untilTime: '12:00',
    },
    checkoutDate: '2023-09-06',
    checkinDate: '2023-09-05',
    reviewScore: 8.9,
    reviewScoreWord: 'Fabulous',
    reviewCount: 4315,
    qualityClass: 0,
    isFirstPage: true,
    accuratePropertyClass: 4,
    propertyClass: 4,
    ufi: -402849,
    wishlistName: 'Seville',
    optOutFromGalleryChanges: 0,
  },
  {
    id: 6776884,
    name: 'Magdalena Premium Suites',
    mainPhotoId: 295915515,
    photoMainUrl:
      'https://cf.bstatic.com/xdata/images/hotel/400x800/295915515.jpg?k=0103864b64f6144b1d8d0468cd8bf76526fae1b94c1ee0415a1366d68d3fcde8&o=',
    photoUrls: [
      'https://cf.bstatic.com/xdata/images/hotel/square60/295915515.jpg?k=0103864b64f6144b1d8d0468cd8bf76526fae1b94c1ee0415a1366d68d3fcde8&o=',
    ],
    position: 21,
    rankingPosition: 21,
    countryCode: 'es',
    latitude: 37.390389515451,
    longitude: -5.997956751521,
    priceBreakdown: {
      grossPrice: {
        value: 131.72,
        currency: 'EUR',
      },
      strikethroughPrice: {
        value: 146.36,
        currency: 'EUR',
      },
      benefitBadges: [
        {
          explanation: 'Mobile-only price',
          variant: 'constructive',
          text: 'Mobile-only price',
          identifier: 'Mobile Rate',
        },
      ],
      taxExceptions: [],
    },
    currency: 'EUR',
    checkin: {
      untilTime: '23:30',
      fromTime: '15:00',
    },
    checkout: {
      fromTime: '07:00',
      untilTime: '11:00',
    },
    checkoutDate: '2023-09-06',
    checkinDate: '2023-09-05',
    reviewScore: 8.3,
    reviewScoreWord: 'Very good',
    reviewCount: 506,
    qualityClass: 4,
    isFirstPage: true,
    accuratePropertyClass: 0,
    propertyClass: 0,
    ufi: -402849,
    wishlistName: 'Seville',
    optOutFromGalleryChanges: 0,
  },
  {
    id: 91679,
    name: 'Exe Sevilla Macarena',
    mainPhotoId: 89918729,
    photoMainUrl:
      'https://cf.bstatic.com/xdata/images/hotel/400x800/89918729.jpg?k=cd550a76d2ec22646325c7d2707865c92bd41440e6cd00dbc36ff9a3ea6cf5ff&o=',
    photoUrls: [
      'https://cf.bstatic.com/xdata/images/hotel/square60/89918729.jpg?k=cd550a76d2ec22646325c7d2707865c92bd41440e6cd00dbc36ff9a3ea6cf5ff&o=',
    ],
    position: 22,
    rankingPosition: 22,
    countryCode: 'es',
    latitude: 37.403269074852,
    longitude: -5.98737046122551,
    priceBreakdown: {
      benefitBadges: [],
      taxExceptions: [],
      grossPrice: {
        value: 149,
        currency: 'EUR',
      },
    },
    currency: 'EUR',
    checkin: {
      fromTime: '14:00',
      untilTime: '00:00',
    },
    checkout: {
      untilTime: '12:00',
      fromTime: '00:00',
    },
    checkoutDate: '2023-09-06',
    checkinDate: '2023-09-05',
    reviewScore: 7.5,
    reviewScoreWord: 'Good',
    reviewCount: 8410,
    qualityClass: 0,
    isFirstPage: true,
    accuratePropertyClass: 4,
    propertyClass: 4,
    ufi: -402849,
    wishlistName: 'Seville',
    optOutFromGalleryChanges: 0,
  },
  {
    id: 7504305,
    name: 'Eurostars Guadalquivir',
    mainPhotoId: 307602207,
    photoMainUrl:
      'https://cf.bstatic.com/xdata/images/hotel/400x800/307602207.jpg?k=d285b52747b26cb6c17f9c4c8297a67e309c076ce96eef63127cc6ee9b348629&o=',
    photoUrls: [
      'https://cf.bstatic.com/xdata/images/hotel/square60/307602207.jpg?k=d285b52747b26cb6c17f9c4c8297a67e309c076ce96eef63127cc6ee9b348629&o=',
    ],
    position: 23,
    rankingPosition: 23,
    countryCode: 'es',
    latitude: 37.37775,
    longitude: -6.001395,
    priceBreakdown: {
      grossPrice: {
        value: 243.5,
        currency: 'EUR',
      },
      taxExceptions: [],
      benefitBadges: [],
    },
    currency: 'EUR',
    checkin: {
      untilTime: '00:00',
      fromTime: '14:00',
    },
    checkout: {
      fromTime: '00:00',
      untilTime: '12:00',
    },
    checkoutDate: '2023-09-06',
    checkinDate: '2023-09-05',
    reviewScore: 9.1,
    reviewScoreWord: 'Superb',
    reviewCount: 4390,
    qualityClass: 0,
    isFirstPage: true,
    accuratePropertyClass: 4,
    propertyClass: 4,
    ufi: -402849,
    wishlistName: 'Seville',
    optOutFromGalleryChanges: 0,
  },
  {
    id: 1276108,
    name: 'Sevilla Central Suites Apartamentos Puerta Jerez',
    mainPhotoId: 409423512,
    photoMainUrl:
      'https://cf.bstatic.com/xdata/images/hotel/400x800/409423512.jpg?k=6225e6f0df6930101043d740f1a7fb9bcfb4cc3f08b4779da6c5a77fdb6cd413&o=',
    photoUrls: [
      'https://cf.bstatic.com/xdata/images/hotel/square60/409423512.jpg?k=6225e6f0df6930101043d740f1a7fb9bcfb4cc3f08b4779da6c5a77fdb6cd413&o=',
    ],
    position: 24,
    rankingPosition: 24,
    countryCode: 'es',
    latitude: 37.3829794929153,
    longitude: -5.99323503191181,
    priceBreakdown: {
      taxExceptions: [],
      benefitBadges: [],
      grossPrice: {
        currency: 'EUR',
        value: 128.22,
      },
    },
    currency: 'EUR',
    checkin: {
      fromTime: '15:00',
      untilTime: '00:00',
    },
    checkout: {
      fromTime: '00:00',
      untilTime: '11:00',
    },
    checkoutDate: '2023-09-06',
    checkinDate: '2023-09-05',
    reviewScore: 9.2,
    reviewScoreWord: 'Superb',
    reviewCount: 308,
    qualityClass: 4,
    isFirstPage: true,
    accuratePropertyClass: 0,
    propertyClass: 0,
    ufi: -402849,
    wishlistName: 'Seville',
    optOutFromGalleryChanges: 0,
  },
];

export const mockedRentalData = {
  review_score: '8.3',
  is_vacation_rental: 0,
  district_id: 5844,
  minrate: 109,
  email: '',
  preferred_plus: 0,
  url: 'https://www.booking.com/hotel/de/riu-plaza-berlin.html',
  hotel_facilities:
    '2,3,5,6,7,8,11,15,16,22,25,28,46,47,48,51,75,80,91,96,107,108,109,117,163,181,185,186,203,204,305,418,420,422,423,425,426,436,440,444,445,447,449,450,451,453,455,456,457,458,459,460,461,462,464,465,466,467,468,478,483,485,486,489,492,493,495,496,497',
  address: 'Martin-Luther-Strasse 1',
  currencycode: 'EUR',
  preferred: 1,
  city: 'Berlin',
  checkout: {
    to: '12:00',
    '24_hour_available': 0,
    from: '00:30',
  },
  is_single_unit_vr: 0,
  country: 'Germany',
  main_photo_id: 331395602,
  name: 'Riu Plaza Berlin',
  ranking: 9484861,
  maxrate: 799,
  entrance_photo_url:
    'https://cf.bstatic.com/images/hotel/square60/272/272369306.jpg',
  main_photo_url:
    'https://cf.bstatic.com/images/hotel/square60/331/331395602.jpg',
  class_is_estimated: 1,
  review_nr: 15729,
  city_id: -1746443,
  class: 4,
  booking_home: {
    quality_class: null,
    is_single_type_property: 0,
    is_single_unit_property: 0,
    is_vacation_rental: 0,
    is_booking_home: 0,
    group: 'hotels_and_others',
    is_aparthotel: 0,
    segment: 0,
  },
  district: null,
  countrycode: 'de',
  hotel_facilities_filtered:
    '3,5,6,7,8,11,15,16,22,25,28,48,51,75,80,91,108,109,117,163,181,185,186,203,204,305,418,420,422,423,425,426,436,440,444,445,447,449,450,451,453,455,456,457,458,459,460,461,462,464,465,466,467,468,478,483,485,486,489,492,493,495,496,497',
  hotel_id: 1377073,
  languages_spoken: {
    languagecode: ['ar', 'de', 'en-gb', 'es', 'fr', 'it'],
  },
  review_score_word: 'Very good',
  zip: '10777',
  hoteltype_id: 204,
  location: {
    latitude: 52.5002932226084,
    longitude: 13.3467457829422,
  },
  checkin: {
    '24_hour_available': 0,
    from: '15:00',
    to: '23:30',
  },
};
