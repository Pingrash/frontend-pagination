import React from 'react';
import { shallow } from 'enzyme';
import Posts from './Posts';
import { findByDataTest, checkProps } from '../../Utilities';

const setup = loading => {
  const props = {
    posts: [
      { id: 1, title: 'title1', body: 'body1' },
      { id: 2, title: 'title2', body: 'body2' },
      { id: 3, title: 'title3', body: 'body3' }
    ],
    loading: loading
  };

  const component = shallow(<Posts {...props} />);
  return component;
};

describe('Posts has correct PropTypes', () => {
  it('Should not throw a warning', () => {
    const expectedProps = {
      posts: [{ userId: 1, id: 1, title: 'test', body: 'test' }],
      loading: true
    };

    const propsError = checkProps(Posts, expectedProps);

    expect(propsError).toBeUndefined();
  });
});

describe('Posts renders elements correctly (not loading)', () => {
  const wrapper = setup(false);

  it('Renders 3 posts', () => {
    const elements = findByDataTest(wrapper, 'post');
    expect(elements.length).toBe(3);
  });
});

describe('Posts renders elements correctly (loading)', () => {
  const wrapper = setup(true);

  it('Renders a loading message', () => {
    const elements = findByDataTest(wrapper, 'loading');

    expect(elements.length).toBe(1);
  });
});
