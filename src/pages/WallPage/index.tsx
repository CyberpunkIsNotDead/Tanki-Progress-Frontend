import React from 'react';
import { SummaryTable } from '../../components/SummaryTable';
import { TimePlayedGraph } from '../../components/TimePlayedGraph';
import { UserEventsBlock } from '../../components/UserEventsBlock';
import { SidebarBlock } from '../../components/SidebarBlock'
import { achievements, friends } from './data'


export const WallPage = () => (
  <div id='wall'>
    <section id='sidebar'>
      <SidebarBlock
        dataArr={achievements}
        blockHeader='Achievements'
        blockClassName='achievements-block'
        itemClassName='achievement'
      />
      <SidebarBlock
        dataArr={friends}
        blockHeader='Friends'
        blockClassName='friends-block'
        itemClassName='friend'
      />
    </section>
    <section id='content-block'>
      <SummaryTable />
      <TimePlayedGraph />
      <UserEventsBlock />
    </section>
  </div>
);
