import {
    SAVE_COMMENT,
    FETCH_COMMENTS,
    CHANGE_AUTH
} from './types'
import axios from 'axios'

export const changeAuth = (isLoggedIn) => {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
};

export const saveComment = (comment) => {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export const fetchComments = () => {
    const response = axios.get('https://jsonplaceholder.typicode.com/comments')
    // debugger;
    return {
        type: FETCH_COMMENTS,
        payload: response
    };
};

