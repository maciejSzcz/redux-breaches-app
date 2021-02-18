import * as types from '../constants/ActionTypes'

export const addBreach = (breach) => { 
    return {
        type: types.ADD_BREACH,
        breach: breach
    }
}
