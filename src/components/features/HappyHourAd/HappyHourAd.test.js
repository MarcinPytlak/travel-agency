import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

const mockProps = {
  headerText: 'Lorem',
  promoDescription: 'Ipsum',
};

beforeAll(() => {
  const utilsModule = jest.requireActual('../../../utils/formatTime.js');
  utilsModule.formatTime = jest.fn(seconds => seconds);
});

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });
  it('should render with heading and description', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });
  it('should render with header props', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);
    const title = component.find(select.title).text();
    expect(title).toEqual(mockProps.headerText);
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
    global.Date = mockDate(`2020-03-25T${time}.135Z`);
  
    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);
  
    global.Date = trueDate;
  });
};
  
describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('11:57:58', '00:02:02');
  checkDescriptionAtTime('11:59:59', '00:00:01');
  checkDescriptionAtTime('13:00:00', '23:00:00');
});

const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
  it(`should show correct value ${delaySeconds} seconds after ${time}`, () => {
    jest.useFakeTimers();
    global.Date = mockDate(`2020-03-25T${time}.135Z`);
    
    const component = shallow(<HappyHourAd {...mockProps} />);
    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + delaySeconds);
    global.Date = mockDate(newTime.getTime());

    jest.advanceTimersByTime(delaySeconds * 1000);
    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);
    
    global.Date = trueDate;
    jest.useRealTimers();
  });
};
describe('Component HappyHourAd with mocked Date and delay', () => {
  checkDescriptionAfterTime('11:57:58', 2, '00:02:00');
  checkDescriptionAfterTime('11:59:58', 1, '00:00:01');
  checkDescriptionAfterTime('13:00:00', 60 * 60, '22:00:00');
});

describe('Component HappyHourAd with promo description', () => {
  checkDescriptionAtTime('12:00:00', mockProps.promoDescription);
  checkDescriptionAtTime('12:30:30', mockProps.promoDescription);
  checkDescriptionAtTime('12:59:59', mockProps.promoDescription);
});
describe('Component HappyHourAd with mocked Date and when test start before promotion', () => {
  checkDescriptionAfterTime('11:57:58', 123, mockProps.promoDescription);
  checkDescriptionAfterTime('11:59:52', 9, mockProps.promoDescription);
  checkDescriptionAfterTime('10:00:00', 2 * 60 * 60, mockProps.promoDescription);
});
