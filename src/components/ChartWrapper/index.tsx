import React, {
  useState,
  // useContext
} from 'react';
import { Chart } from '../Chart'
import { chartData } from '../../pages/WallPage/data'
// import { Context } from '../../context';

// interface data {

// }

interface ChartWrapperProps {
  data: Object,
};

export default function ChartWrapper(props: ChartWrapperProps): React.ReactElement {

  // const {dataState, setDataState} = useContext(Context)

  const [localState, setLocalState] = useState(chartData);

  // function fetchData() {
  //   fetch('')
  //   .then(data => {console.log(data)})
  // };

  console.log(props.data)

  function limitDataBy(period: string): void {
    switch(period) {
      case 'week':
        console.log('week');
        setLocalState(chartData);
        break;
      case 'month':
        console.log('month');
        setLocalState(chartData);
        break;
      case 'all':
        console.log('all');
        setLocalState(chartData);
        break;
      default:
        console.log('all');
        setLocalState(chartData);
        break;
    }
  }; 

  return (
    <div className='chart-block'>
      <div>
          <button onClick={() => limitDataBy('week')}>week</button>
          <button onClick={() => limitDataBy('month')}>month</button>
          <button onClick={() => limitDataBy('all')}>all</button>
      </div>
      <Chart data={localState} />
      <div>
        <button>Period1</button>
        <button>Period2</button>
        <button>Period3</button>
      </div>
    </div>
  );
}
