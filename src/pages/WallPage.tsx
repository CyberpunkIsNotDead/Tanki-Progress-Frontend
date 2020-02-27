import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { SummaryTable } from '../components/SummaryTable';
import { TimePlayedGraph } from '../components/TimePlayedGraph';
import { UserEventsBlock } from '../components/UserEventsBlock';
import { FriendsBlock } from '../components/FriendsBlock';
import { AchievementsBlock } from '../components/AchievementsBlock';

export const WallPage = () => (
  <Fragment>
    <div>
      <Link to='/'>back</Link>
    </div>
    <div className='sidebar'>
      <FriendsBlock />
      <AchievementsBlock />
    </div>
    <div className='content'>
      <SummaryTable />
      <TimePlayedGraph />
      <UserEventsBlock />
    </div>
  </Fragment>
);
