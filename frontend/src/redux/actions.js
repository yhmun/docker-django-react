import axios from 'axios'
import Types from './types'

export const getPosts = () => {
    return dispatch => {
        dispatch({type: Types.POSTS_LOADING, payload: true})
        axios.get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/posts`)
            .then(response => {
                dispatch({type: Types.GET_POSTS, payload: response.data});
            })
            .catch(err => {
                console.log(err);
                dispatch({type: Types.POSTS_LOADING, payload: false});
            });
    }
}

export const deletePost = (id, cb) => {
    return dispatch => {
        dispatch({type: Types.POSTS_LOADING, payload: true})
        axios.delete(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/posts/${id}/`)
            .then(response => {
                dispatch({type: Types.DELETE_POST, payload: id});
                cb();
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export const createPost = (data, cb) => {
    return dispatch => {
        axios.post(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/posts`, data)
            .then(response => {
                dispatch({type: Types.CREATE_POST, payload: response.data});
                cb();
            })
            .catch(err => {
                console.log(err);
                dispatch({type: Types.POSTS_LOADING, payload: false});
            })
    }
}
