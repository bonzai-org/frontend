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
  user: {
    'username': 'JNaka',
    'profilePhoto':
      'https://res.cloudinary.com/dscsiijis/image/upload/v1721414755/IMG_3701_bkure4.jpg'
  },
  bonsaiChapters: [bonsaiChapterData1, bonsaiChapterData2],
  geoLocation: 'San Francisco, CA',
  hardinessZone: '9A',
  height: '6in',
  width: '3in',
  nebari: '2in',
  style: 'Literati',
  species: 'Western Hemlock'
};


const mockBonsaiArr = [
  {
    geoLocation: 'Palo Alto, CA',
    hardinessZone: '9b',
    species: 'Pomegranate',
    bonsaiChapters: [
      {
        photoUrls: [
          'https://res.cloudinary.com/dscsiijis/image/upload/v1727997307/bonsai_book/IMG_3909_Small_e8omtl.jpg',
          'https://res.cloudinary.com/dscsiijis/image/upload/v1727997305/bonsai_book/IMG_3910_Small_zdkrc5.jpg'],
        date: '2023-10-02T14:48:00.000Z',
        caption: 'The tree as I found it, growing in the ground in a yard',
      }
    ]
  },
  {
    geoLocation: 'Palo Alto, CA',
    hardinessZone: '9b',
    species: 'Feijoa',
    height: '40',
    style: 'Literati (Bunjin-gi)',
    bonsaiChapters: [
      {
        photoUrls: [
          'https://res.cloudinary.com/dscsiijis/image/upload/v1727997304/bonsai_book/IMG_3911_Small_dw4p3t.jpg'],
        date: '2023-10-01T14:48:00.000Z',
        caption: 'My earliest photo of the tree, growing in a pot. Approximately 2 years old, gifted by a family friend.',
      },
      {
        photoUrls: [
          'https://res.cloudinary.com/dscsiijis/image/upload/v1727997304/bonsai_book/IMG_3912_Small_lexdou.jpg'],
        date: '2023-10-02T14:48:00.000Z',
        caption: 'The tree from a different angle. I pruned lower branches and suckers to encourage it to grow with a single leader, in more of a tree form, rather than a bush.',
      }
    ]
  },
  {
    geoLocation: 'Palo Alto, CA',
    hardinessZone: '9b',
    species: 'Coast Redwood',
    height: '20',
    style: 'Formal upright (Chokkan)',
    bonsaiChapters: [
      {
        photoUrls: [
          'https://res.cloudinary.com/dscsiijis/image/upload/v1727997307/bonsai_book/IMG_3917_Small_vwpdbf.jpg'],
        date: '2023-10-03T14:48:00.000Z',
        caption: 'Growing in a nursery pot in partial shade. No pruning aside from occasional removal of suckers.',
      },
      {
        photoUrls: [
          'https://res.cloudinary.com/dscsiijis/image/upload/v1727997304/bonsai_book/IMG_3916_Small_qb7afp.jpg'],
        date: '2023-10-03T14:48:00.000Z',
        caption: 'My mighty redwood from a different angle.',
      }
    ]
  },
  {
    geoLocation: 'Palo Alto, CA',
    hardinessZone: '9b',
    species: 'Feijoa',
    height: '4',
    bonsaiChapters: [
      {
        photoUrls: [
          'https://res.cloudinary.com/dscsiijis/image/upload/v1727997304/bonsai_book/IMG_3914_Small_r51sdv.jpg',
          'https://res.cloudinary.com/dscsiijis/image/upload/v1727997304/bonsai_book/IMG_3913_Small_qrmw6w.jpg'],
        date: '2024-10-03T14:48:00.000Z',
        caption: 'Recently, I pruned off the lower branches on a larger Feijoa I have. Not wanting to waste stock from a fruit tree I cherish, I tried to propogate them as cuttings. This was the healthiest looking one, but small. The others I stuck in a mix of vermiculite and potting soil. This I just put in water. Within two weeks, it was sprouting roots. So, I planted it out with a little sunflower stalk fastened to it for support. Fingers crossed.',
      }
    ]
  },
  {
    geoLocation: 'Palo Alto, CA',
    hardinessZone: '9b',
    species: 'Eureka Lemon',
    height: '300',
    width: '4',
    bonsaiChapters: [
      {
        photoUrls: [
          'https://res.cloudinary.com/dscsiijis/image/upload/v1727997304/bonsai_book/IMG_3919_Small_ki1yk8.jpg',
          'https://res.cloudinary.com/dscsiijis/image/upload/v1727997304/bonsai_book/IMG_3918_Small_tn8fi6.jpg'],
        date: '2024-10-03T14:48:00.000Z',
        caption: 'Growing in the ground, at a home. In poor health, and in need of some pruning.',
      }
    ]
  },
  {
    geoLocation: 'Palo Alto, CA',
    hardinessZone: '9b',
    species: 'Key Lime',
    height: '300',
    width: '2',
    nebari: '10',
    bonsaiChapters: [
      {
        photoUrls: [
          'https://res.cloudinary.com/dscsiijis/image/upload/v1727997304/bonsai_book/IMG_3922_Small_hc6pk8.jpg',
          'https://res.cloudinary.com/dscsiijis/image/upload/v1727997304/bonsai_book/IMG_3920_Small_b0y9bp.jpg'],
        date: '2024-10-03T14:48:00.000Z',
        caption: 'This shaggy little thing has been sorely neglected, unsupported in a long struggle against powdery mildew. I aim to amend that. It\'s in a large pot, but should probably be repotted.',
      }
    ]
  },
  {
    geoLocation: 'Palo Alto, CA',
    hardinessZone: '9b',
    species: 'Rose',
    height: '120',
    width: '6',
    nebari: '1',
    bonsaiChapters: [
      {
        photoUrls: [
          'https://res.cloudinary.com/dscsiijis/image/upload/v1727997304/bonsai_book/IMG_3922_Small_hc6pk8.jpg',
          'https://res.cloudinary.com/dscsiijis/image/upload/v1727997304/bonsai_book/IMG_3920_Small_b0y9bp.jpg'],
        date: '2024-10-03T14:48:00.000Z',
        caption: 'Hunky little rose bush. Old thing. Growing in the ground. It\'s doing alright.',
      }
    ]
  },
];

export { bonsaiData, bonsaiChapterData1, bonsaiChapterData2, userData };