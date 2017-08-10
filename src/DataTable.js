import React from 'react';

let DataTable = (props) => {

  let rows = [];

  props.data.map((item, index) => {

    rows.push(
      <tr className="results__row" key={index}>
        <td className="results__td">
          {item.name}
        </td>
      </tr>
    );

    //TODO:  Not sure why this needs to be here. check linting rules
    return true;

  });

  return (
    <table className="results">
      <tbody>{rows}</tbody>
    </table>);

};

export default DataTable;