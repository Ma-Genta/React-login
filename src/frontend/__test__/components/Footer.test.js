import React from 'React';   
import { mount } from 'enzyme';
import Footer from '../../components/Footer.jsx';
import { create } from 'react-test-renderer';

describe('<Footer />', () => {
  const footer = mount(<Footer/>);

  test('Render Footer component. ', () => {
    expect(footer.length).toEqual(1);
  });

  test('Footer have 3 anchors. ', () => {
    expect(footer.find('a')).toHaveLength(3);
  });
  
  test('Footer snapshot', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
  
});

