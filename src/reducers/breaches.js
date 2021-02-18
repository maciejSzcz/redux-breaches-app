import * as types from '../constants/ActionTypes'

const defaultState = {
    breaches: [],
    errors: [],
    visibilityFilter: 'SHOW_ALL',
    keyword: '',
    loaded: false,
    editing: false,
}


const breaches = (state=defaultState, action) => {
    switch(action.type) {
        case types.BREACHES_SUCCESS:
            return {
                ...state,
                breaches: [...state.breaches, ...action.payload],
                loaded: true
            }
        case types.ADD_BREACH:
            const newBreach = {
                DataClasses: action.breach.DataClasses,
                _id: action.breach._id,
                Name: action.breach.Name,
                Title: action.breach.Title,
                Domain: action.breach.Domain,
                BreachDate: action.breach.BreachDate,
                PwnCount: action.breach.PwnCount,
                Description: action.breach.Description,
                LogoPath: action.breach.LogoPath,
            }
            return {
                ...state,
                breaches: [...state.breaches, newBreach]
            }
        case types.UPDATE_BREACH:
            return {
                ...state,
                breaches: [...state.breaches.map(x => {
                    console.log(action.breach._id)
                    if(x._id === action.breach._id) {
                        return {
                            ...x,
                            DataClasses: action.breach.DataClasses,
                            _id: action.breach._id,
                            Name: action.breach.Name,
                            Title: action.breach.Title,
                            Domain: action.breach.Domain,
                            BreachDate: action.breach.BreachDate,
                            PwnCount: action.breach.PwnCount,
                            Description: action.breach.Description,
                        }
                    }
                    return x
                })]
            }
        case types.SORT_BREACHES_BY_NAME:
            const sortedByName = state.breaches.sort((a, b) => {
                return a.Name.localeCompare(b.Name)
            })

            return {
                ...state,
                breaches: [...sortedByName]
            }
        case types.SORT_BREACHES_BY_COUNT:
            const sortedByCount = state.breaches.sort((a, b) => {
                if(a.PwnCount < b.PwnCount) { return 1 }
                if(a.PwnCount > b.PwnCount) { return -1 }
                return 0
            })

            return {
                ...state,
                breaches: [...sortedByCount]
            }
        case types.DELETE_BREACH_BY_ID:
            const filtered = state.breaches.filter(x => x._id !== action.id)

            return {
                ...state,
                breaches: [...filtered]
            }
        case types.SET_VISIBILITY_FILTER:
            return {
                ...state,
                visibilityFilter: action.filter
            }
        case types.SET_KEYWORD:
            return {
                ...state,
                keyword: action.keyword
            }
        case types.SET_EDITING:
            return {
                ...state,
                editing: action.editing
            }
        default: 
            return state
    }
}

export default breaches;