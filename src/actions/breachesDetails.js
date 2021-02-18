import * as types from '../constants/ActionTypes'

export const setEditing = (editing) => { 
    return {
        type: types.SET_EDITING,
        editing: editing
    }
}

export const updateBreach = (breach) => { 
    return {
        type: types.UPDATE_BREACH,
        breach: breach
    }
}