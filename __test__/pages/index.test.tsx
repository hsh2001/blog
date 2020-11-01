import { shallow } from 'enzyme';
import Index from '../../pages/index';

describe('Render Index component', () => {
  it('Render Index component without error', () => {
    shallow(<Index />);
  });

  it('Render Title correctly', () => {
    const component = shallow(<Index />);
    expect(component.find('h1').text().trim()).toBe('hello world..!');
    expect(component.find('p').text().trim()).toBe('Content here');
  });
});
