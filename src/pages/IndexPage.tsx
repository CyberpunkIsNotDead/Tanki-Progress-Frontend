import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const IndexPage = () => (
  <Fragment>
    <Link to='/wall'>wall</Link>
    <Link to='/summary'>summary</Link>
    <Link to='/monitoring'>monitoring</Link>
    <Link to='/logs'>logs</Link>
  </Fragment>
);
