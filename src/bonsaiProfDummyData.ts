const bonsaiChapterData1 = {
  photoUrls: [
    'https://res.cloudinary.com/dscsiijis/image/upload/v1721414755/IMG_3701_bkure4.jpg'
  ],
  bonsaiId: '1',
  date: new Date(),
  caption:
    "1 year mark. Bonsai collected from Burton, WA forest, where it was growing from a fallen tree, it's base lying perpendicular to the ground"
};

const bonsaiChapterData2 = {
  photoUrls: [
    'https://res.cloudinary.com/dscsiijis/image/upload/v1712589554/wildRoots/sunflower_atfd07.png'
  ],
  bonsaiId: '1',
  date: new Date(),
  caption: 'Woah it became a sunflower'
};

const bonsaiData = {
  id: '1',
  user: 'Pablo',
  bonsaiChapters: [bonsaiChapterData1, bonsaiChapterData2],
  geoLocation: 'San Francisco, CA',
  hardinessZone: '9A',
  height: '6in',
  width: '3in',
  nebari: '2in',
  style: 'Literati',
  species: 'Western Hemlock'
};

const bonsaiCardData = {
  id: '1',
  photoUrl: bonsaiChapterData1.photoUrls[0],
  species: bonsaiData.species,
  user: bonsaiData.user,
  location:
    bonsaiData.geoLocation !== ''
      ? bonsaiData.geoLocation
      : bonsaiData.hardinessZone,
  style: bonsaiData.style
};

export { bonsaiData, bonsaiChapterData1, bonsaiChapterData2, bonsaiCardData };
