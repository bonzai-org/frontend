import React, { useState} from 'react';
import styles from './BonsaiDataForm.module.css';
import { Bonsai, User } from '../../interfaces';

function BonsaiDataForm({
  onSubmit,
  bonsaiData,
  userData
}: {
  onSubmit: (data: Bonsai) => void;
  bonsaiData?: Bonsai;
  userData: User;
}) {
  const [hardinessZone, setHardinessZone] = useState(
    bonsaiData?.hardinessZone || ''
  );
  const [height, setHeight] = useState(bonsaiData?.height || '');
  const [width, setWidth] = useState(bonsaiData?.width || '');
  const [nebari, setNebari] = useState(bonsaiData?.nebari || '');
  const [style, setStyle] = useState(bonsaiData?.style || '');
  const [species, setSpecies] = useState(bonsaiData?.species || '');

  const HARDINESSZONES = ['0a', '0b', '1a', '1b', '2a', '2b', '3a', '3b', 
    '4a', '4b', '5a', '5b', '6a', '6b', '7a', '7b', '8a', '8b', '9a', '9b',
     '10a', '10b', '11a', '11b', '12a', '12b', '13a', '13b'];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const bonsaiData: Bonsai = {
      id: '',
      user: userData,
      geoLocation: '',
      bonsaiChapters: [],
      hardinessZone: hardinessZone,
      height: height,
      species: species,
      width: width !== '' ? width : '',
      nebari: nebari !== '' ? nebari : '',
      style: style !== '' ? style : ''
    };
    onSubmit(bonsaiData);
  };




  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Bonsai Data</h2>
      <div>
        <label className={styles.hardinessLabel}>Hardiness Zone:</label>
        <select
          value={hardinessZone}
          onChange={(e) => setHardinessZone(e.target.value)}
          required
        >
          <option value="" disabled>
            Select Hardiness Zone
          </option>
          {HARDINESSZONES.map((zone) => (
            <option key={zone} value={zone}>
              {zone}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) =>
            setHeight(e.target.value )
          }
          required
        />
      </div>
      <div>
        <label>Width (cm):</label>
        <input
          type="number"
          value={width}
          onChange={(e) =>
            setWidth(e.target.value )
          }
        />
      </div>
      <div>
        <label>Nebari (cm):</label>
        <input
          type="number"
          value={nebari}
          onChange={(e) =>
            setNebari(e.target.value )
          }
        />
      </div>
      <div>
        <label>Style:</label>
        <input
          type="text"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        />
      </div>
      <div>
        <label>Species:</label>
        <input
          type="text"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          required
        />
      </div>
      <button type="submit" className={styles.btn}>
        Next
      </button>
    </form>
  );
}

export default BonsaiDataForm;
