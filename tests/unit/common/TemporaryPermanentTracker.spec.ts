// import { shallowMount } from "@vue/test-utils";

// import TemporaryPermanentTracker from '../../src/components/common/TemporaryPermanentTracker';
// import Rating from 'react-rating';

// // isTorment: PropTypes.bool,
// // label: PropTypes.string.isRequired,
// // onChangedCallback: PropTypes.func.isRequired,
// // permanentValue: PropTypes.number.isRequired,
// // temporaryValue: PropTypes.number.isRequired

// const _getValueDotAtIndex = (wrapper, index) =>
//   wrapper.find(`.permanent > span > span:nth-child(${index}) > span:nth-child(2) > span`)

// describe('<TemporaryPermanentTracker />', () => {
//   it('should render given required props', () => {
//     let componentUnderTest =
//       <TemporaryPermanentTracker
//         label='test'
//         onChangedCallback={() => {}}
//         permanentValue={10}
//         temporaryValue={10}
//         />;
//     let wrapper = shallow(componentUnderTest);

//     expect(wrapper.find('.temp-permanent-tracker')).toExist();
//   });

//   it('required props are rendered as provided', () => {
//     let testLabelValue = 'test';
//     let componentUnderTest =
//       <TemporaryPermanentTracker
//         label={testLabelValue}
//         onChangedCallback={() => {}}
//         permanentValue={10}
//         temporaryValue={9}
//         />;
//     let wrapper = shallow(componentUnderTest);
//     let tempPermTrackerComponent = wrapper.find('.temp-permanent-tracker');

//     expect(tempPermTrackerComponent).toExist();
//     expect(tempPermTrackerComponent.find('.label').text()).toEqual(testLabelValue);
//     expect(tempPermTrackerComponent.find(Rating).at(0).props().initialRating).toEqual(10);
//     expect(tempPermTrackerComponent.find(Rating).at(1).props().initialRating).toEqual(9);
//   });

//   describe('when clicking a valid permanent value', () => {
//     it('should fire the callback and update the component', () => {
//       let testPermanentValue = 7;
//       let resultantPermanentValue = -1;
//       let componentUnderTest =
//         <TemporaryPermanentTracker
//           label='test'
//           onChangedCallback={(value) => resultantPermanentValue = value.permanent}
//           permanentValue={10}
//           temporaryValue={5}
//           />;
//       let wrapper = shallow(componentUnderTest);

//       // Fire the onClick event for the Permanent Tracker
//       wrapper.find(Rating).at(0).props().onClick(testPermanentValue);
//       expect(resultantPermanentValue).toEqual(testPermanentValue);
//     });

//     it('that is lower than the temporaryValue should set both temporary and permanent values', () => {
//       let testPermanentValue = 7;
//       let resultantPermanentValue = -1;
//       let resultantTemporaryValue = -1;
//       let testCallback = (value) => {
//         resultantPermanentValue = value.permanent;
//         resultantTemporaryValue = value.temporary;
//       };
//       let componentUnderTest =
//         <TemporaryPermanentTracker
//           label='test'
//           onChangedCallback={testCallback}
//           permanentValue={10}
//           temporaryValue={10}
//           />;
//       let wrapper = shallow(componentUnderTest);

//       // Fire the onClick event for the permanent tracker
//       wrapper.find(Rating).at(0).props().onClick(testPermanentValue);
//       expect(resultantPermanentValue).toEqual(testPermanentValue);
//       expect(resultantTemporaryValue).toEqual(testPermanentValue);
//     });

//     it('clicking 1 when currentValue is 1 should set permanent and temporary values to 0', () => {
//       let testPermanentValue = 1;
//       let expectedValue = 0;
//       let resultantPermanentValue = -1;
//       let resultantTemporaryValue = -1;
//       let testCallback = (value) => {
//         resultantPermanentValue = value.permanent;
//         resultantTemporaryValue = value.temporary;
//       };
//       let componentUnderTest =
//         <TemporaryPermanentTracker
//           label='test'
//           onChangedCallback={testCallback}
//           permanentValue={1}
//           temporaryValue={1}
//           />;
//       let wrapper = shallow(componentUnderTest);

//       // Fire the onClick event for the Permanent Tracker
//       wrapper.find(Rating).at(0).props().onClick(testPermanentValue);
//       expect(resultantPermanentValue).toEqual(expectedValue);
//       expect(resultantTemporaryValue).toEqual(expectedValue);
//     });
//   });

//   describe('when clicking a temporary value less than the permanent value', () => {
//     it('should fire the callback and update the component', () => {
//       let testTemporaryValue = 7;
//       let resultantTemporaryValue = -1;
//       let componentUnderTest =
//         <TemporaryPermanentTracker
//           label='test'
//           onChangedCallback={(value) => resultantTemporaryValue = value.temporary}
//           permanentValue={10}
//           temporaryValue={5}
//           />;
//       let wrapper = shallow(componentUnderTest);

//       // Fire the onClick event for the Temporary Tracker
//       wrapper.find(Rating).at(1).props().onClick(testTemporaryValue);
//       expect(resultantTemporaryValue).toEqual(testTemporaryValue);
//     });

//     it('should set temporaryValue to 0 when currentTemporaryValue is 1 and 1 is clicked', () => {
//       let testTemporaryValue = 1;
//       let resultantPermanentValue = -1;
//       let resultantTemporaryValue = -1;
//       let testCallback = (value) => {
//         resultantPermanentValue = value.permanent;
//         resultantTemporaryValue = value.temporary;
//       };
//       let componentUnderTest =
//         <TemporaryPermanentTracker
//           label='test'
//           onChangedCallback={testCallback}
//           permanentValue={1}
//           temporaryValue={1}
//           />;
//       let wrapper = shallow(componentUnderTest);

//       // Fire the onClick event for the temporary Tracker
//       wrapper.find(Rating).at(1).props().onClick(testTemporaryValue);
//       expect(resultantPermanentValue).toEqual(1);
//       expect(resultantTemporaryValue).toEqual(0);
//     });
//   });
//   describe('when clicking a temporaryValue greater than the permanent value', () => {
//     it('should set the temporaryValue to match the existing permanentValue', () => {
//       let testTemporaryValue = 10;
//       let resultantPermanentValue = -1;
//       let resultantTemporaryValue = -1;
//       let testCallback = (value) => {
//         resultantPermanentValue = value.permanent;
//         resultantTemporaryValue = value.temporary;
//       };
//       let componentUnderTest =
//         <TemporaryPermanentTracker
//           label='test'
//           onChangedCallback={testCallback}
//           permanentValue={5}
//           temporaryValue={3}
//           />;
//       let wrapper = shallow(componentUnderTest);

//       // Fire the onClick event for the temporary Tracker
//       wrapper.find(Rating).at(1).props().onClick(testTemporaryValue);
//       expect(resultantPermanentValue).toEqual(5);
//       expect(resultantTemporaryValue).toEqual(5);
//     });
//   });
// });
