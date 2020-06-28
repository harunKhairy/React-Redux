// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '../App';

// it('shows a comment box', () => {
//     const div = document.createElement('div');

//     ReactDOM.render(<App/>, div);

//     // !Looks inside the div
//     // !and checks to see if the CommentBox is in there
//     // console.log(div.innerHTML);
//     // expect(div.innerHTML).toContain('Comment Box');
//     // expect(div.innerHTML).toBeTruthy();
//     expect(div.innerHTML).toContain('Box for Comment');

//     ReactDOM.unmountComponentAtNode(div);
// });

import React from 'react';
import { shallow } from 'enzyme'
import App from 'components/App';
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

let wrapper;

beforeEach(() => {
    wrapper = shallow(<App />);
});

it('shows a comment box', () => {
    expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
    expect(wrapper.find(CommentList).length).toEqual(1);
});

