import React, { useState } from 'react';
import styles from './BonsaiDataForm.module.css';
import { Bonsai, UserPartial } from '../../interfaces';
import { HARDINESSZONES, STYLES} from '../../BonsaiCategoryConstants';

function BonsaiDataForm({
  onSubmit,
  bonsaiData,
  userData
}: {
  onSubmit: (data: Bonsai) => void;
  bonsaiData?: Bonsai;
  userData: UserPartial;
}) {
  const [hardinessZone, setHardinessZone] = useState(
    bonsaiData?.hardinessZone || ''
  );
  const [height, setHeight] = useState(bonsaiData?.height || '');
  const [width, setWidth] = useState(bonsaiData?.width || '');
  const [nebari, setNebari] = useState(bonsaiData?.nebari || '');
  const [style, setStyle] = useState(bonsaiData?.style || '');
  const [species, setSpecies] = useState(bonsaiData?.species || '');
  const [geoLocation, setGeoLocation] = useState(bonsaiData?.geoLocation || '');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const bonsaiData: Bonsai = {
      id: '',
      username: userData.username,
      geoLocation: geoLocation,
      bonsaiChapters: [],
      hardinessZone: hardinessZone,
      species: species,
    };
    // Add in optional fields if they are not empty
    if (width !== '') bonsaiData.width = width;
    if (nebari !== '') bonsaiData.nebari = nebari;
    if (style !== '') bonsaiData.style = style;
    if (height !== '') bonsaiData.height = height;
    onSubmit(bonsaiData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Bonsai Data</h2>
      <div>
        <label className={styles.hardinessLabel} htmlFor="hardiness">
          Hardiness Zone:
        </label>
        <select
          value={hardinessZone}
          onChange={(e) => setHardinessZone(e.target.value)}
          required
          id="hardiness"
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
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div>
        <label>Width (cm):</label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </div>
      <div>
        <label>Nebari (cm):</label>
        <input
          type="number"
          value={nebari}
          onChange={(e) => setNebari(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="style">Bonsai Style: </label>
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          id="style"
        >
          <option value="" disabled>
            Select Style
          </option>
          {STYLES.map((style) => (
            <option key={style} value={style}>
              {style}
            </option>
          ))}
        </select>
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
      <div>
        <label>Geo Location:</label>
        <input
          type="text"
          value={geoLocation}
          onChange={(e) => setGeoLocation(e.target.value)}
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
