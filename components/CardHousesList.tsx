import React from 'react';
import CardHouse from './CardHouse';

const defaultHouse = {
  img: 'http://localhost:3000/images/home_test.jpg',
  contentDescription: 'Nueva casa se alquila en zona alta de esta gran ciudad',
  acquireLabel: 'Adquirir',
};

const CardHousesList = () => (
  <div className="container is-flex-wrap-wrap is-flex is-justify-content-center">
    {[1, 2, 3, 4, 5, 6].map((item) => (
      <CardHouse {...defaultHouse} key={item} />
    ))}
  </div>
);

export default CardHousesList;
