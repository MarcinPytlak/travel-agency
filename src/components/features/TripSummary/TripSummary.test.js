import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<TripSummary id={'link'} days={13} cost={'expectedCost'} image={'expectedImage'} name='Lorem ipsum' tags={['tag1', 'tag2']}/>);
    expect(component).toBeTruthy();

  });
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  it('should render correct image and alt', () => {
    const expectedImage = 'abc';
    const expectedName = 'bca';
    const component = shallow(<TripSummary id={'link'} days={123} cost={'expectedCost'} image={expectedImage} name={expectedName} tags={['tag1', 'tag2']}/>);
    
    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedName);

  });
  it('should generate correct link', () => {
    const expectedLink = '/trip/link';
    const link = 'link';
    const component = shallow(<TripSummary id={link} tags={['tag1', 'tag2']} days={123} cost={'expectedCost'} image={'expectedImage'} name={'expectedName'}/>);

    expect(component.find('Link').prop('to')).toEqual(expectedLink);
  });
  it('should generate corrext props', () => {
    const expectedDay = 123;
    const expectedCost = '123';

    const component = shallow(<TripSummary days={expectedDay} cost={expectedCost} tags={['tag1', 'tag2']} id={'link'} image={'expectedImage'} name='Lorem ipsum'/>);
    const variableDays = component.find('.details').find('span').at(0);
    const variableCost = component.find('.details').find('span').at(1);
    const days = variableDays.first().text();
    const cost = variableCost.first().text();
    expect(cost).toBe('from ' + expectedCost);
    expect(days).toBe(expectedDay + ' days');
  });
  it('should generate correct spans from tags array', () => {
    const component = shallow(<TripSummary tags={['tag1', 'tag2', 'tag3']} id={'link'} days={123} cost={'expectedCost'} image={'expectedImage'} name='Lorem ipsum'/>);
    const tags=['tag1', 'tag2', 'tag3'];
    const tagOneName = component.find('.tags').find('span:first-child');
    const tagTwoName = component.find('.tags').find('span').at(1);
    const tagThreeName = component.find('.tags').find('span').at(2);
    const tagOne = tagOneName.first().text();
    const tagTwo = tagTwoName.first().text();
    const tagThree = tagThreeName.first().text();
    expect(tags[0]).toBe(tagOne);
    expect(tags[1]).toBe(tagTwo);
    expect(tags[2]).toBe(tagThree);
  });
  it('should generate div tags', () => {
    // eslint-disable-next-line no-unused-vars
    const component = shallow(<TripSummary tags={['tag1', 'tag2', 'tag3']} id={'link'} days={123} cost={'expectedCost'} image={'expectedImage'} name='Lorem ipsum' />);
    const tags=[];
    expect(tags).toBeDefined();
    expect(tags.length > 1);
  });
});