import React from 'react';
import { Chart } from '../Chart'
import { chartData } from '../../pages/WallPage/data'

export const ChartWrapper = (): React.ReactElement => (
  <div className='chart-block'>
    <div>
        <button>Set1</button>
        <button>Set2</button>
        <button>Set3</button>
    </div>
    <Chart data={chartData} />
    <div>
      <button>Period1</button>
      <button>Period2</button>
      <button>Period3</button>
    </div>
  </div>
);
