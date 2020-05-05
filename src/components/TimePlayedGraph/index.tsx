import React from 'react';
import ChartWrapper from '../ChartWrapper';
import {
  base,
  // base2
} from '../../data'

export const TimePlayedGraph = () => (
  <div id='time-played-graph'>
    <ChartWrapper data={base} dataKey='kills' />
  </div>
);
