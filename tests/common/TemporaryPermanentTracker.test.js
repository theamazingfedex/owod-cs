import React from 'react';
import { mount, shallow } from 'enzyme';

import TemporaryPermanentTracker from '../../src/components/common/TemporaryPermanentTracker';
import Rating from 'react-rating';
// isTorment: PropTypes.bool,
// label: PropTypes.string.isRequired,
// onChangedCallback: PropTypes.func.isRequired,
// permanentValue: PropTypes.number.isRequired,
// temporaryValue: PropTypes.number.isRequired

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
});