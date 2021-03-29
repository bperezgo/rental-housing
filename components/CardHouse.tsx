import React from 'react';
import Link from 'next/link';

type HouseProps = {
  img: string;
  contentDescription: string;
  acquireLabel: string;
};

const House = ({ img, contentDescription, acquireLabel }: HouseProps) => (
  <div className="CardHouse__container">
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={img} alt="Placeholder" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">John Smith</p>
            <p className="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div className="content">{contentDescription}</div>
      </div>
      <footer className="card-footer">
        <Link href="/insurance-form" as="/insurance-form" passHref>
          <span className="AcquireButton__span card-footer-item">
            {acquireLabel}
          </span>
        </Link>
        <Link href="/">
          <span className="AcquireButton__span card-footer-item">Edit</span>
        </Link>
      </footer>
    </div>
  </div>
);

export default House;
