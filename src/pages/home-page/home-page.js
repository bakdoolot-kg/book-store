import React from 'react';
import BookItem from '../../components/book-item/Book-item';

import './home-page.css'

const BOOKS = [
  {
    id: 1,
    title: 'Production-Ready Microservices',
    author: 'Susan J. Fowler',
    price: 32,
    coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
  },
  {
    id: 2,
    title: 'Release It!',
    author: 'Michael T. Nygard',
    price: 45,
    coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
  },
  {
    id: 3,
    title: 'Verity',
    author: 'Collen Hoover',
    price: 11,
    coverImage: 'https://images-na.ssl-images-amazon.com/images/I/415gCVvwKlL._SX331_BO1,204,203,200_.jpg'
  },
  {
    id: 4,
    title: 'The Sandman Book One',
    author: 'Neil Gaiman',
    price: 24,
    coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51INyFujltL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
  },
];

const HomePage = () => {
  return (
    <div className='homePage'>
      {BOOKS.map(item => <BookItem book={item} key={item.id} />)}
    </div>
  );
};

export default HomePage;