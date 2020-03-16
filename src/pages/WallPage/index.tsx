import React, { Fragment } from 'react';
import { SummaryTable } from '../../components/SummaryTable';
import { TimePlayedGraph } from '../../components/TimePlayedGraph';
import { UserEventsBlock } from '../../components/UserEventsBlock';
import { SidebarBlock } from '../../components/SidebarBlock'
import { achievements, friends } from './data'


export const WallPage = () => (
  <Fragment>
    <section id='sidebar'>
      <SidebarBlock dataArr={achievements} blockClassName='achievements-block' itemClassName='achievement' />
      <SidebarBlock dataArr={friends} blockClassName='friends-block' itemClassName='friend' />
    </section>
    <section id='content-block'>
      <SummaryTable />
      <TimePlayedGraph />
      <UserEventsBlock />
    </section>
  </Fragment>
);
