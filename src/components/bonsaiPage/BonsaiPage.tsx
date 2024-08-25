import styles from './BonsaiPage.module.css';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function BonsaiPage() {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    console.log('Fetching bonsai with ID: ', id);
  }, [id]);

  return (
    <div>
      <h1>Bonsai Page</h1>
      <p>Displaying details for bonsai with ID: {id}</p>
    </div>
  );
}
