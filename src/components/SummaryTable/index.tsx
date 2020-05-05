import React from 'react';
import { PropertyTable } from '../../components/PropertyTable'
import {
  // achievements,
  // friends,
  obj } from '../../data'

export const SummaryTable = () => (
  <div id='summary-table'>
    <PropertyTable obj={obj} />
  </div>
);
