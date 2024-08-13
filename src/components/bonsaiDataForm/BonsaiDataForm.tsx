import React, { useState } from 'react';
import style from './BonsaiDataForm.module.css';

interface BonsaiData {
  hardiness_zone: string;
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

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Bonsai Data</h2>
      <div>
        <label>Hardiness Zone:</label>
        <input
          type="text"
          value={hardinessZone}
          onChange={(e) => setHardinessZone(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Height:</label>
        <input
          type="number"
          value={height}
          onChange={(e) =>
            setHeight(e.target.value ? parseFloat(e.target.value) : '')
          }
        />
      </div>
      <div>
        <label>Width:</label>
        <input
          type="number"
          value={width}
          onChange={(e) =>
            setWidth(e.target.value ? parseFloat(e.target.value) : '')
          }
        />
      </div>
      <div>
        <label>Nebari:</label>
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
