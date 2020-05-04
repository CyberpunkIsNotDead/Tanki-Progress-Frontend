import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

interface ChartProps {
  data: Array<Object>,
  dataKey: string,

};

export const Chart = (props: ChartProps): React.ReactElement => {
  return (
    <LineChart
      width={1200}
      height={300}
      data={props.data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type='monotone' dataKey={props.dataKey} stroke='#ff3333' />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip
        // wrapperStyle={
        //   {
        //     width: 100,
        //     backgroundColor: '#000',
        //     color: '#000'
        //   }
        // }
        />
    </LineChart>
  );
};
