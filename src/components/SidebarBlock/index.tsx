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

const blockClass = 'sidebar-block';
// const headerClass = blockClass + '-header';
// const contentClass = blockClass + '-content';
// const wrapperClass = blockClass + '-wrapper';

export const SidebarBlock = (props: IProps) => (
  <div className={`${blockClass} ${props.blockClassName}`}>
    <h3 className={`${blockClass}-header`}>{props.blockHeader}</h3>
    <ul className={`${blockClass}-content`}>
      {
        props.dataArr
        ? props.dataArr.map(item => (
          <li className={`${blockClass}-item-wrapper`}>
            <img
              className={`${blockClass}-item-img ${props.itemClassName}`}
              src={item.imgUrl}
              alt={item.name}
            />
            <p className={`${blockClass}-item-name`}>{item.name}</p>
          </li>
        ))
        : null
      }
    </ul>
  </div>
);
