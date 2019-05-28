import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import TemporaryPermanentTracker from '../../src/components/common/TemporaryPermanentTracker';
import { exportAllDeclaration, isTSAnyKeyword } from '@babel/types';
  // isTorment: PropTypes.bool,
  // label: PropTypes.string.isRequired,
  // onChangedCallback: PropTypes.func.isRequired,
  // permanentValue: PropTypes.number.isRequired,
  // temporaryValue: PropTypes.number.isRequired
describe('<TemporaryPermanentTracker />', () => {
  it('renders', () => {
    let componentUnderTest =
      <TemporaryPermanentTracker
        label='test'
        onChangedCallback={() => {}}
        permanentValue={10}
        temporaryValue={10}
        />;
    // let wrapper = mount(componentUnderTest);
    // expect(wrapper).To
  });
});