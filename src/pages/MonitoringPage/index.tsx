import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ChartWrapper from '../../components/ChartWrapper'
import {
  base,
  // base2
} from '../../data'


export const MonitoringPage = () => (
  <Fragment>
    <Link to='/'>back</Link>
    MonitoringPage
    <ChartWrapper data={base} />
  </Fragment>
);
