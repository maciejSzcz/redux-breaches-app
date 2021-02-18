import { createAction } from 'redux-api-middleware';
import * as types from '../constants/ActionTypes'

export const getBreaches = () => createAction({
    endpoint: 'https://user-sec-app.herokuapp.com/',
    method: 'GET',
    types: [
        types.BREACHES_REQUEST,
        types.BREACHES_SUCCESS,
        types.BREACHES_FAILURE
    ]
});

export const sortByCount = () => { 
    return {
        type: types.SORT_BREACHES_BY_COUNT 
    }
}

export const sortByName = () => { 
    return {
        type: types.SORT_BREACHES_BY_NAME
    }
}

export const deleteBreachById = (id) => { 
    return {
        type: types.DELETE_BREACH_BY_ID,
        id: id
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: types.SET_VISIBILITY_FILTER,
        filter
    }
}

export const setKeyword = (keyword) => {
    return {
        type: types.SET_KEYWORD,
        keyword
    }
}