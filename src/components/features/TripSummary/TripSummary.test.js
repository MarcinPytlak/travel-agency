import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  it('should render correct image and alt', () => {
    const expectedImage = 'abc';
    const expectedName = 'bca';
    const component = shallow(<TripSummary image={expectedImage} name={expectedName} tags={['tag1', 'tag2']}/>);
    
    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedName);

  });
  it('should generate correct link', () => {
    const expectedLink = '/trip/link';
    const link = 'link';
    const component = shallow(<TripSummary id={link} tags={['tag1', 'tag2']}/>);
    console.log(component.debug());
    expect(component.find('Link').prop('to')).toEqual(expectedLink);
  });
});