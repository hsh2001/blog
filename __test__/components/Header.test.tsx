import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('Render Header component', () => {
  it('Render Header component without error', () => {
    shallow(<Header />);
  });

  it('Render Title correctly', () => {
    const component = shallow(<Header />);
    const headerText = component.text().trim();
    expect(headerText).toBe('Header here');
  });
});
