import React from 'react';
import { shallow } from 'enzyme';
import DataTable from './DataTable';

const mockData = [
  {
    "id": "1",
    "name": "Sony Corporation",
    "description": "Japan-based company engaged in businesses of consumer and professional electronics, gaming, entertainment and financial services",
    "isListedEntity": true,
    "isPEVCHouse": false,
    "geography": {
      "country": "Japan",
      "state": "Kanto"
    }
  }, {
    "id": "2",
    "name": "Sonic Music Entertainment Inc.",
    "description": "US-based music publishing company",
    "isListedEntity": false,
    "isPEVCHouse": false,
    "geography": {
      "country": "USA",
      "state": "New York (NY)"
    }
  }
];



it('renders without crashing', () => {
  shallow(<DataTable data={mockData} />);
});


it('should render 2 rows', () => {

  const wrapper = shallow(<DataTable data={mockData} />);

  expect(wrapper.find('tbody tr').length).toBe(mockData.length);


});

it('should render correct names', () => {

  const wrapper = shallow(<DataTable data={mockData} />);


  wrapper.find('.results__company .results__name').forEach((node, i) => {

    expect(node.text()).toBe(mockData[i].name);

  });

});

