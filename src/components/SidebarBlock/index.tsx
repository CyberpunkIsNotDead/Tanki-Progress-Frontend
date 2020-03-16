import React from 'react';

interface Achievement {
  name: string,
  imgUrl?: string,
  current?: number | string,
  max?: number | string,
};

interface Friend {
  name: string,
  imgUrl?: string,
};

interface IProps {
  dataArr: Array<Achievement | Friend> | null,
  blockHeader: string,
  blockClassName: string,
  itemClassName: string,
};

export const SidebarBlock = (props: IProps) => (
  <div className={`sidebar-block ${props.blockClassName}`}>
    <h3 className='sidebar-block-header'>{props.blockHeader}</h3>
    <ul className='sidebar-block-content'>
      {
        props.dataArr
        ? props.dataArr.map(item => (
          <li className={`sidebar-block-item ${props.itemClassName}`}>
            {item.name}
          </li>
        ))
        : null
      }
    </ul>
  </div>
);
