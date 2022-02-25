import React from 'react';
import {
Jumbotron
} from 'react-bootstrap';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Profile =() => {
return(
    <div>
    <h1>THIS IS OUR PROFILE PAGE</h1>
  </div>
)
}