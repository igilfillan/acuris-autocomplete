import React from 'react';

let DataTable = (props) => {

  let rows = [];

  const TYPES = {
    listedEntity: 'Listed Entity',
    isPEVCHouse: 'PEVC House'
  };


  props.data.map((item, index) => {

    rows.push(
      <tr key={index}>
        <td className="results__td">
          <p className="results__name">{item.name}</p>
          <p className="results__description">{item.description}</p>
        </td>
        <td className="results__td">
          {item.isListedEntity ? <p className="results__listed">{TYPES.listedEntity}</p> : ''}
          {item.isPEVCHouse    ? <p className="results__pevc">{TYPES.isPEVCHouse}</p>    : ''}
        </td>
        <td className="results__td">
            {item.geography.state   ? <span className="results__state">{item.geography.state}, </span>   : '' }
            {item.geography.country ? <span className="results__country">{item.geography.country}</span> : '' }
        </td>
      </tr>
    );

    return true;

  });

  return (
    <table className="results">
      <thead>
      <tr>
        <th className="results__th results__company" scope="col">Name</th>
        <th className="results__th results__type" scope="col">Type</th>
        <th className="results__th results__hq" scope="col">Headquarter</th>
      </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>);

};

export default DataTable;