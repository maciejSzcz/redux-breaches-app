import { createSelector } from 'reselect'

const getBreaches = state => state.breaches.breaches
const getBreachId = (_state, props) => props.match.params.id

export const getBreachMatchingRouteId = createSelector(
    getBreaches,
    getBreachId,
    (breaches, id) => {
        return breaches.filter(x => x._id === id)[0]
    }
);