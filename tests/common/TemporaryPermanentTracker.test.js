import React from 'react';
import { mount, shallow } from 'enzyme';

import TemporaryPermanentTracker from '../../src/components/common/TemporaryPermanentTracker';
import Rating from 'react-rating';
// isTorment: PropTypes.bool,
// label: PropTypes.string.isRequired,
// onChangedCallback: PropTypes.func.isRequired,
// permanentValue: PropTypes.number.isRequired,
// temporaryValue: PropTypes.number.isRequired

const _getValueDotAtIndex = (wrapper, index) =>
  wrapper.find(`.permanent > span > span:nth-child(${index}) > span:nth-child(2) > span`)

describe('<TemporaryPermanentTracker />', () => {
  it('should render given required props', () => {
    let componentUnderTest =
      <TemporaryPermanentTracker
        label='test'
        onChangedCallback={() => {}}
        permanentValue={10}
        temporaryValue={10}
        />;
    let wrapper = shallow(componentUnderTest);

    expect(wrapper.find('.temp-permanent-tracker')).toExist();
  });
  describe('when clicking a temporary value less than the permanent value', () => {
    it('should fire the callback and update the component', () => {
      let testTemporaryValue = 5;
      let expectedTemporaryValue = 10;
      let resultantTemporaryValue = -1;
      let componentUnderTest =
        <TemporaryPermanentTracker
          label='test'
          onChangedCallback={(value) => resultantTemporaryValue = value.temporary}
          permanentValue={10}
          temporaryValue={5}
          />;
      let wrapper = shallow(componentUnderTest);
      // let ratingContainer = _getValueDotAtIndex(wrapper, 7);
      // ratingContainer.simulate('click');
      let selector = '.temporary > span > span:nth-child(7) > span:nth-child(2) > span';
      // TODO: figure out how to grab an index instead of `last()`
      wrapper.find(Rating).last().simulate('click');
      expect(resultantTemporaryValue).toEqual(10);
    });
  });
});