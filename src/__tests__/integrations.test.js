import React from 'react'
import { mount } from 'enzyme'
import Root from '../Root'
import App from '../components/App'
import moxios from 'moxios'


beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'Fetch #1'}, { name: 'Fetch #2' }, { name: 'Fetch #3' }]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('Can fetch a list of comments and display then', (done) => {
    // Attempt to render the *entire* app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    // Find the 'fetchComments' button and click it
    wrapped.find('.fetch-comments').simulate('click');

    // introduce a TINY little pause / set-timeout
    moxios.wait(() => {
        wrapped.update();

        // Expect to find a list of comments!
        expect(wrapped.find('li').length).toEqual(3);

        done();
        wrapped.unmount()
    });
});
