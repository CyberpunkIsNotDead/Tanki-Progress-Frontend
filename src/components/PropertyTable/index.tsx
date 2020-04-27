import React from 'react';

interface PropertyTableProps {
  obj: Object
}

export const PropertyTable = (props: PropertyTableProps) => (
  <ul>
    {
      Object.entries(props.obj).map(
        entry => {
          console.log(entry)
          const [key, value] = entry;
          console.log(`key: ${key} value: ${value}`)
          return (
            <li key={key}>
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
