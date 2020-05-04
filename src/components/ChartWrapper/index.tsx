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

interface ChartWrapperProps {
  data: IData,
  dataKey: string,
};

export default function ChartWrapper(props: ChartWrapperProps): React.ReactElement {

  const [localState, setLocalState] = useState({
    chartData: selectData('cry'),
    dataKey: 'cry'
  });


  function selectData(key: keyof IDaily) {
    let newData = props.data.daily.map((obj: IDaily) => {
      console.log(obj[key])
      return ({
        day: obj.timestamp,
        [key]: obj[key] === undefined ? 0 : obj[key]
      });
    });

    return newData
  }

  function limitDataBy(period: string): void {
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
      ...localState, chartData: selectData(key), dataKey: key
    })
  }

  return (
    <div className='chart-block'>
      <div>
          <button onClick={() => limitDataBy('week')}>week</button>
          <button onClick={() => limitDataBy('month')}>month</button>
          <button onClick={() => limitDataBy('all')}>all</button>
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
