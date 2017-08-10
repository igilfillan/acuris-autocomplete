import React from 'react';

let DataTable = (props) => {

  let rows = [];

  const TYPES = {
    listedEntity: 'Listed Entity',
    isPEVCHouse: 'PEVC House'
  };

  props.data.map((item, index) => {

    rows.push(
      <tr className="results__row" key={index}>
        <td className="results__td results__company">
          <p className="results__name">{item.name}</p>
          <p className="results__description">{item.description}</p>
        </td>
        <td className="results__td results__type">
          <p className="results__listed">{item.isListedEntity ? TYPES.listedEntity : 'NOT Listed'}</p>
          <p className="results__pevc">{item.isPEVCHouse ? TYPES.isPEVCHouse : 'Not PEVC'}</p>
        </td>
        <td className="results__td results__hq">
          <span className="results__state">
            {item.geography.state ? `${item.geography.state}, `: '' }
          </span>
          <span className="results__country">{item.geography.country}
          </span>
        </td>
      </tr>
    );

    //TODO:  Not sure why this needs to be here. check linting rules
    return true;

  });

  return (
    <table className="results">
      <thead>
      <tr>
        <th className="results__th">Name</th>
        <th className="results__th">Type</th>
        <th className="results__th">Headquarter</th>
      </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>);

};

export default DataTable;