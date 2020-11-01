import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

describe('Render Footer component', () => {
  it('Render Footer component without error', () => {
    shallow(<Footer />);
  });

  it('Render Title correctly', () => {
    const component = shallow(<Footer />);
    const footerText = component.text().trim();
    expect(footerText).toBe('Footer here');
  });
});
