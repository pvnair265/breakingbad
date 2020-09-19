import React from 'react';
import Card from './Card';

const CardGrid = ({ characters, loading }) => {
  console.log('card grid');
  return loading ? (
    'Loading...'
  ) : (
    <section className='cards'>
      {characters.map((element, index) => (
        <Card key={element.char_id} item={element} />
      ))}
    </section>
  );
};

export default CardGrid;
