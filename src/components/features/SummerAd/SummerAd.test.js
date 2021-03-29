import React from 'react';
import { shallow } from 'enzyme';
import SummerAd from './SummerAd';

const select = {
  title: '.title',
  summerDescription : '.summerDescription',
};

const mockProps = {
  headerText: ' to summer',
  promoDescription: 'Ipsum',
};

describe('Component SummerAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<SummerAd />);
    expect(component).toBeTruthy();
  });
  it('should render with header',() => {
    const component = shallow(<SummerAd />);
    expect(component.exists(select.title)).toEqual(true);
  });
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`${time}`);
  
    const component = shallow(<SummerAd {...mockProps} />);
    const renderedTime = component.find('.title').text();
    expect(renderedTime).toEqual(expectedDescription);
  
    global.Date = trueDate;
  });
};
describe('Component SummerAd with mocked Date', () => {
  checkDescriptionAtTime('2021, 06, 20', '1 day to summer');
  checkDescriptionAtTime('2021, 03, 29', '84 days to summer');
  checkDescriptionAtTime('2021, 09, 27', '267 days to summer');
});

describe('Component SummerAd shouldt render during summer',() => {
  checkDescriptionAtTime('2021, 09, 23', '');
  checkDescriptionAtTime('2021, 06, 22', '');
  checkDescriptionAtTime('2021, 07, 12', '');
});
