import React, { useState } from 'react';
import style from './BonsaiDataForm.module.css';

interface BonsaiData {
  hardiness_zone: string; // Ensure this is a string
  height: number | '';
  width: number | '';
  nebari: number | '';
  style: string;
  species: string;
}

interface BonsaiDataFormProps {
  onSubmit: (data: BonsaiData) => void;
  bonsaiData?: BonsaiData;
}

const BonsaiDataForm: React.FC<BonsaiDataFormProps> = ({
  onSubmit,
  bonsaiData
}) => {
  const [hardinessZone, setHardinessZone] = useState(
    bonsaiData?.hardiness_zone || ''
  );
  const [height, setHeight] = useState<number | ''>(bonsaiData?.height || '');
  const [width, setWidth] = useState<number | ''>(bonsaiData?.width || '');
  const [nebari, setNebari] = useState<number | ''>(bonsaiData?.nebari || '');
  const [style, setStyle] = useState(bonsaiData?.style || '');
  const [species, setSpecies] = useState(bonsaiData?.species || '');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const bonsaiData = {
      hardiness_zone: hardinessZone,
      height: height,
      width: width,
      nebari: nebari,
      style: style,
      species: species
    };
    onSubmit(bonsaiData);
  };

  const hardinessZones = [];
  for (let i = 0; i <= 13; i++) {
    hardinessZones.push(`${i}a`, `${i}b`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Bonsai Data</h2>
      <div>
        <label>Hardiness Zone:</label>
        <select
          value={hardinessZone}
          onChange={(e) => setHardinessZone(e.target.value)}
          required
        >
          <option value="" disabled>
            Select Hardiness Zone
          </option>
          {hardinessZones.map((zone) => (
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
            setHeight(e.target.value ? parseFloat(e.target.value) : '')
          }
        />
      </div>
      <div>
        <label>Width (cm):</label>
        <input
          type="number"
          value={width}
          onChange={(e) =>
            setWidth(e.target.value ? parseFloat(e.target.value) : '')
          }
        />
      </div>
      <div>
        <label>Nebari (cm):</label>
        <input
          type="number"
          value={nebari}
          onChange={(e) =>
            setNebari(e.target.value ? parseFloat(e.target.value) : '')
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
      <button type="submit">Next</button>
    </form>
  );
};

export default BonsaiDataForm;
