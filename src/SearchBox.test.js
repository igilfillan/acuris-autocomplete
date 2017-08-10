import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

const mockProps = {
  searchValue: 'string',
  changeHandler: () => {},
  clickHandler: () => {}
};


it('renders without crashing', () => {
  shallow(<SearchBox {...mockProps} />);
});


it('renders a label for accessibility', () => {
  const wrapper = shallow(<SearchBox {...mockProps} />);
  expect(wrapper.find('label.accessibility').length).toBe(1);
  expect(wrapper.find('label.accessibility').text()).toContain('Search');

});

it('renders a label for accessibility', () => {
  const wrapper = shallow(<SearchBox {...mockProps} />);
  expect(wrapper.find('label.accessibility').length).toBe(1);

});

it('display a magnifying glass image', () => {
  const wrapper = shallow(<SearchBox {...mockProps} />);
  expect(wrapper.find('.search__magnifyGlass').length).toBe(1);

});


it('renders an input box', () => {

  const wrapper = shallow(<SearchBox {...mockProps} />);
  expect(wrapper.find('.search__input').length).toBe(1);

});

it('displays correct value in input box', () => {

  const wrapper = shallow(<SearchBox {...mockProps} />);

  expect(wrapper.find('.search__input').props().value).toBe(mockProps.searchValue);

});

it('calls the input box changeHandler', () => {

  const myMockChangeHandler = jest.fn();
  const wrapper = shallow(<SearchBox  changeHandler={myMockChangeHandler} />);

  wrapper.find('.search__input').simulate('change', {target: {value: 'sony'}} );
  wrapper.find('.search__input').simulate('change', {target: {value: 'sonys'}} );

  expect(myMockChangeHandler.mock.calls.length).toBe(2);

});


it('renders a clear button', () => {

  const wrapper = shallow(<SearchBox {...mockProps} />);
  expect(wrapper.find('.search__clear').length).toBe(1);

});


it('calls the clear button clickHandler', () => {

  const myMockClickHandler = jest.fn();
  const wrapper = shallow(<SearchBox  clickHandler={myMockClickHandler} />);

  wrapper.find('.search__clear').simulate('click');

  expect(myMockClickHandler.mock.calls.length).toBe(1);

});




