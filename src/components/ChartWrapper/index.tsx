import React, { useState } from 'react';
import { Chart } from '../Chart'

interface IDaily {
  timestamp?: string,
  kills?: number,
  deaths?: number,
  cry?: number,
  score?: number,
  time?: number,
  hasPremium?: boolean
}

interface IData {
  login: string,
  daily: Array<IDaily>,
  weekly: Array<IDaily>,
  monthly: Array<IDaily> // type for empty array?
}

interface IChartData {
  [key: string]: number | string | boolean | undefined
} // should be an intersection type or smth

interface ChartWrapperProps {
  data: IData,
  dataKey: string,
};

export default function ChartWrapper(props: ChartWrapperProps): React.ReactElement {

  const [localState, setLocalState] = useState({
    chartData: selectDataType('cry'),
    dataKey: 'cry'
  });

  // const daily = props.data.daily
  // const weekly = props.data.weekly
  // const monthly = props.data.monthly

  // 


  function selectDataType(key: keyof IDaily): Array<IChartData> {
    let newData = props.data.daily.map((obj: IDaily) => {
      // console.log(obj[key])
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

  function selectDataPeriod(period: string): void {
    switch(period) {
      case 'week':
        console.log('week');
        setLocalState({...localState});
        break;
      case 'month':
        console.log('month');
        setLocalState({...localState});
        break;
      case 'all':
        console.log('all');
        setLocalState({...localState});
        break;
      default:
        console.log('all');
        setLocalState({...localState});
        break;
    }
  };

  function updateState(key: keyof IDaily) {
    setLocalState({
      ...localState, chartData: selectDataType(key), dataKey: key
    })
  }

  return (
    <div className='chart-block'>
      <div>
          <button onClick={() => selectDataPeriod('week')}>week</button>
          <button onClick={() => selectDataPeriod('month')}>month</button>
          <button onClick={() => selectDataPeriod('all')}>all</button>
      </div>
      <Chart
        data={localState.chartData}
        dataKey={localState.dataKey}
      />
      <div>
        <button onClick={() => updateState('cry')}>Cry</button>
        <button onClick={() => updateState('score')}>Exp</button>
        <button onClick={() => updateState('time')}>Time</button>
      </div>
    </div>
  );
}
