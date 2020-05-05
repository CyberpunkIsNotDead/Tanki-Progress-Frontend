import React from 'react';
import { SummaryTable } from '../../components/SummaryTable';
import { TimePlayedGraph } from '../../components/TimePlayedGraph';
import { UserEventsBlock } from '../../components/UserEventsBlock';
// import { SidebarBlock } from '../../components/SidebarBlock'
// import { PropertyTable } from '../../components/PropertyTable'
// import {
//   // achievements,
//   // friends,
//   obj } from './data'


export const WallPage = () => (
  <div id='wall'>
    {/* <section id='sidebar'>
      <SidebarBlock
        dataArr={friends}
        blockHeader='Friends'
        blockClassName='friends-block'
        itemClassName='friend'
      />
      <SidebarBlock
        dataArr={achievements}
        blockHeader='Achievements'
        blockClassName='achievements-block'
        itemClassName='achievement'
      />
    </section> */}
    <section id='content-block'>
      <SummaryTable />
      <TimePlayedGraph />
      <UserEventsBlock />
    </section>
  </div>
);
