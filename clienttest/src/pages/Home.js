import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';
import { useEffect, useState } from 'react';
import Auth from '../utils/auth'

const Home = () => {

  return (
    <div>
      <h1>THIS IS OUR HOMEPAGE</h1>
    </div>
  );
};

export default Home;