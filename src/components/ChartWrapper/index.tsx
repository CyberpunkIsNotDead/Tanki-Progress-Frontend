import React, { useState } from 'react';
import { Chart } from '../Chart'


export interface IEntry {
  timestamp?: string,
  kills?: number,
  deaths?: number,
  cry?: number,
  score?: number,
  time?: number,
  hasPremium?: boolean
}

export interface IData {
  login: string,
  daily: Array<IEntry>,
  weekly: Array<IEntry>,
  monthly: Array<IEntry> // type for an empty array?
}

interface IChartData {
  [key: string]: number | string | boolean | undefined
} // should be an intersection type or smth

interface ChartWrapperProps {
  data: IData,
  dataKey: string,
};


export default function ChartWrapper(props: ChartWrapperProps): React.ReactElement {

  const data = props.data

  const [typeState, setTypeState] = useState({
    chartData: selectDataType('cry', 'daily'),
    dataKey: 'cry',
    period: 'daily'
  }); 


  function selectDataType(key: keyof IEntry, period: keyof IData): Array<IChartData> {
    let newData = (data[period] as Array<IEntry>).map((obj: IEntry) => {
      let dateString: string

      if (typeof obj.timestamp === 'string') {
        const date = new Date(obj.timestamp)
        dateString = date.getDate() + '/' + date.getMonth()
      } else {
        dateString = '?'
      }

      return ({
        day: dateString,
        [key]: obj[key] === undefined ? 0 : obj[key]
      });
    });

    return newData
  }


  function changeType(key: keyof IEntry) {
    setTypeState({
      ...typeState,
      chartData: selectDataType(key, typeState.period as keyof IData),
      dataKey: key
    })
  }


  function changePeriod(period: string) {
    setTypeState({
      ...typeState,
      chartData: selectDataType(typeState.dataKey as keyof IEntry, period as keyof IData)
    })
  }
  

  return (
    <div className='chart-block'>
      <div>
          <button onClick={() => changePeriod('daily')}>daily</button>
          <button onClick={() => changePeriod('weekly')}>weekly</button>
          <button onClick={() => changePeriod('monthly')}>monthly</button>
      </div>
      <Chart
        data={typeState.chartData}
        dataKey={typeState.dataKey}
      />
      <div>
        <button onClick={() => changeType('cry')}>Cry</button>
        <button onClick={() => changeType('score')}>Exp</button>
        <button onClick={() => changeType('time')}>Time</button>
      </div>
    </div>
  );
}
