import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ChartWrapper } from '../../components/ChartWrapper'


export const MonitoringPage = () => (
  <Fragment>
    <Link to='/'>back</Link>
    MonitoringPage
    <ChartWrapper />
  </Fragment>
);
