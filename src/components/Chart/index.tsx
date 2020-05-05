import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartProps {
  data: Array<Object>,
  dataKey: string,

};

export const Chart = (props: ChartProps): React.ReactElement => {
  return (
    <ResponsiveContainer width='90%' height='80%'>
      <LineChart
        // width={1200}
        // height={300}
        data={props.data}
        // margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type='monotone' dataKey={props.dataKey} stroke='#3a3af9' />
        <CartesianGrid stroke="#373737" strokeDasharray="5 5" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip
          // wrapperStyle={
          //   {
          //     width: 100,
          //     height: 100
          //   }
          // }
          />
      </LineChart>
    </ResponsiveContainer>
  );
};
