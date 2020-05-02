import React from 'react';

interface PropertyTableProps {
  obj: Object
}

export const PropertyTable = (props: PropertyTableProps) => (
  <ul className='property-table'>
    {
      Object.entries(props.obj).map(
        (entry, index) => {
          console.log(entry)
          const [key, value] = entry;
          console.log(`key: ${key} value: ${value}`)
          return (
            <li key={index}>
              <span>{key}</span>
              &nbsp;
              <span>{value}</span>
            </li>
          )
        }
      )
    }
  </ul>
);
