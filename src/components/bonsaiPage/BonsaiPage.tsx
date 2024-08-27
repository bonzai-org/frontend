import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { bonsaiData } from '../../bonsaiProfDummyData';

interface BonsaiChapter {
  photoUrls: string[];
  date: Date;
  caption: string;
  bonsaiId: string;
}

interface Bonsai {
  id: string;
  user: string;
  species: string;
  geoLocation: string;
  style: string;
  height: string;
  width: string;
  nebari: string;
  hardinessZone: string;
  bonsaiChapters: BonsaiChapter[];
}

export default function BonsaiPage() {
  const { id } = useParams<{ id: string }>();
  const [bonsai, setBonsai] = useState<Bonsai | null>(null);

  useEffect(() => {
    console.log('Fetching bonsai with ID: ', id);
    setBonsai(bonsaiData);
  }, [id]);

  return (
    <div>
      <h1>Bonsai Page</h1>
      <p>Displaying details for bonsai with ID: {id}</p>
      {bonsai && (
        <div>
          <p>Species: {bonsai.species}</p>
          <p>User: {bonsai.user}</p>
        </div>
      )}
    </div>
  );
}
