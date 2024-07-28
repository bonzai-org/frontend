import React, { useState } from 'react';
import style from './BonsaiDataForm.module.css';

const BonsaiDataForm: React.FC = () => {
  const [hardinessZone, setHardinessZone] = useState('');
  const [height, setHeight] = useState<number | ''>('');
  const [width, setWidth] = useState<number | ''>('');
  const [nebari, setNebari] = useState<number | ''>('');
  const [style, setStyle] = useState('');
  const [species, setSpecies] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const bonsaiData = {
      hardiness_zone: hardinessZone,
      height: height,
      width: width,
      nebari: nebari,
      style: style,
      species: species,
    };
    console.log(bonsaiData);
    // Add your form submission logic here (e.g., API call)
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
          onChange={(e) => setHeight(e.target.value ? parseFloat(e.target.value) : '')}
        />
      </div>
      <div>
        <label>Width:</label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value ? parseFloat(e.target.value) : '')}
        />
      </div>
      <div>
        <label>Nebari:</label>
        <input
          type="number"
          value={nebari}
          onChange={(e) => setNebari(e.target.value ? parseFloat(e.target.value) : '')}
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
      <button type="submit">Upload Bonsai Data</button>
    </form>
  );
};

export default BonsaiDataForm;