import { render, screen } from '@testing-library/react';
import App from './App';
import {mount, shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { MovieDetail } from './components/MovieDetail';
import MovieDetailProps from "./MovieDetailProps.mock";
import MovieNameProps from "./MovieDetailProps.mock";

Enzyme.configure({ adapter: new Adapter() });

test('renders <App /> component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Fetching data.../i);
  expect(linkElement).toBeInTheDocument();
  const wrapper=mount(<App />);
  wrapper.find("Welcome to StarWar movies")
 
});
describe('<MyComponent />', () => {
  it('renders <MovieDetail /> components', () => {
    const wrapper = mount(<MovieDetail {...MovieDetailProps}/>);
    expect(wrapper.episode_id).toEqual(undefined);
  });
  it('renders <MovieName /> components', () => {
    const wrapper = shallow(<MovieDetail {...MovieNameProps}/>);
    expect(wrapper.episode_id).toEqual(undefined);
  });
})
