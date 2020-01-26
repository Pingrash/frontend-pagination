import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './Pagination';
import { findByDataTest, checkProps } from '../../Utilities';

const setup = (props = {}) => {
  const component = shallow(<Pagination {...props} />);
  return component;
};

describe('Pagination renders without errors', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      postsPerPage: 10,
      totalPosts: 100,
      currentPage: 1
    };
    wrapper = setup(props);
  });

  it('Renders without errors', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Renders a previous button', () => {
    const btn = findByDataTest(wrapper, 'previous');
    expect(btn.length).toBe(1);
  });

  it('Renders a next button', () => {
    const btn = findByDataTest(wrapper, 'next');
    expect(btn.length).toBe(1);
  });

  it('Renders 10 page buttons', () => {
    const btn = findByDataTest(wrapper, 'page-number');
    expect(btn.length).toBe(10);
  });
});

describe('Pagination has correct prop-types', () => {
  it('Should not throw an error', () => {
    const testFunc = () => null;
    const expectedProps = {
      postsPerPage: 1,
      totalPosts: 2,
      paginate: testFunc,
      currentPage: 3,
      setPostsPerPageSize: testFunc
    };

    const propsError = checkProps(Pagination, expectedProps);

    expect(propsError).toBeUndefined();
  });
});
