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
  blockClassName: string,
  itemClassName: string,
};

export const SidebarBlock = (props: IProps) => (
  <div className={props.blockClassName}>
    {
      props.dataArr
      ? props.dataArr.map(item => (
        <div className={props.itemClassName}>
          {item.name}
        </div>
      ))
      : null
    }
  </div>
);
