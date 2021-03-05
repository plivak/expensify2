import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';
//react-test-renderer

test('should render NoTFoundPage correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot(); 
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);

    // expect(renderer.getRenderOutput()).toMatchSnapshot();

    //console.log(renderer.getRenderOutput());
});
