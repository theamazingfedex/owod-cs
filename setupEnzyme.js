import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { configure } from 'enzyme';

configure({ adapter: new Adapter() });
export default Enzyme;