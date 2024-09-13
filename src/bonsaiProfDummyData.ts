const bonsaiChapterData1 = {
  photoUrls: [
    'https://res.cloudinary.com/dscsiijis/image/upload/v1721414755/IMG_3701_bkure4.jpg',
    'https://res.cloudinary.com/dscsiijis/image/upload/v1712589554/wildRoots/sunflower_atfd07.png'
  ],
  bonsaiId: '1',
  date: new Date(),
  caption:
    "1 year mark. Bonsai collected from Burton, WA forest, where it was growing from a fallen tree, it's base lying perpendicular to the ground"
};

const bonsaiChapterData2 = {
  photoUrls: [
    'https://res.cloudinary.com/dscsiijis/image/upload/v1712589554/wildRoots/sunflower_atfd07.png',
    'https://res.cloudinary.com/dscsiijis/image/upload/v1721414755/IMG_3701_bkure4.jpg'
  ],
  bonsaiId: '1',
  date: new Date(),
  caption: 'Woah it became a sunflower'
};

const userData = {
  id: '1',
  profilePhoto:
    'https://res.cloudinary.com/dscsiijis/image/upload/v1721414755/IMG_3701_bkure4.jpg',
  username: 'JNaka',
  bio: 'GoAt',
  email: 'johnnaka@bmail.com'
  
};


const bonsaiData = {
  id: '1',
  username: 'JNaka',
  bonsaiChapters: [bonsaiChapterData1, bonsaiChapterData2],
  geoLocation: 'San Francisco, CA',
  hardinessZone: '9A',
  height: '6in',
  width: '3in',
  nebari: '2in',
  style: 'Literati',
  species: 'Western Hemlock'
};



export { bonsaiData, bonsaiChapterData1, bonsaiChapterData2, userData };
