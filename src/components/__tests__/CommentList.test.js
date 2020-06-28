import React from 'react'
import { mount } from 'enzyme'

import CommentList from '../CommentList'
import Root from '../../Root'

let wrapped;

beforeEach(() => {
    const initialState = {
        comments: ['Comment 1', 'Comment 2', 'Comment 3']
    };

    wrapped = mount(
        <Root initialState={initialState} >
            <CommentList />
        </Root>
    );
});

it('Creates one LI per comment', () => {
    // console.log(wrapped.find('li').length);
    expect(wrapped.find('li').length).toEqual(3);
});

it('Show the text for each text', () => {
    // console.log(wrapped.render().text());
    expect(wrapped.render().text()).toContain('Comment 1')
    expect(wrapped.render().text()).toContain('Comment 2')
    expect(wrapped.render().text()).toContain('Comment 3')
});