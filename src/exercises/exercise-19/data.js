export const animals = [
  {
    name: 'Lion',
    scientificName: 'Panthera leo',
    size: 140,
    diet: ['meat'],
    image: '/images/lion.png',
  },
  {
    name: 'Gorilla',
    scientificName: 'Gorilla beringei',
    size: 205,
    diet: ['plants', 'insects'],
    image: '/images/gorilla.png',
    additional: {
      notes:
        'This is the eastern gorilla. There is also a western gorilla that is a different species.',
    },
  },
  {
    name: 'Zebra',
    scientificName: 'Equus quagga',
    size: 322,
    diet: ['plants'],
    image: '/images/zebra.png',
    additional: {
      notes: 'There are three different species of zebra.',
      link: 'https://en.wikipedia.org/wiki/Zebra',
    },
  },
];
