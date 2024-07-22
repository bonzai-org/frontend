const bonsaiData = {
  user: 'Pablo',
  bonsaiChapter: '',
  geoLocation: 'San Francisco, CA',
  hardinessZone: '9A',
  height: '6in',
  width: '3in',
  nebari: '2in',
  style: 'Literati',
  species: 'Western Hemlock'
};

const bonsaiChapterData = {
  photoUrls: [
    'https://res.cloudinary.com/dscsiijis/image/upload/v1721414755/IMG_3701_bkure4.jpg'
  ],
  bonsai: bonsaiData,
  date: Date.now(),
  caption:
    "1 year mark. Bonsai collected from Burton, WA forest, where it was growing from a fallen tree, it's base lying perpendicular to the ground"
};

const bonsaiCardData = {
  photoUrl: bonsaiChapterData.photoUrls[0],
  species: bonsaiData.species,
  user: bonsaiData.user,
  location:
    bonsaiData.geoLocation !== ''
      ? bonsaiData.geoLocation
      : bonsaiData.hardinessZone,
  style: bonsaiData.style
};

export { bonsaiData, bonsaiChapterData, bonsaiCardData };
