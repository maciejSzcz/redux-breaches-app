import { createSelector } from 'reselect'

const getBreaches = state => state.breaches
const getVisibilityFilter = state => state.visibilityFilter
const getKeyword = state => state.keyword

export const getFilteredBreaches = createSelector(
    getVisibilityFilter,
    getBreaches,
    (visibilityFilter, breaches) => {
        switch (visibilityFilter) {
            case 'SHOW_ALL':
                return breaches
            case 'SHOW_VERIFIED':
                return breaches.filter(t => t.IsVerified)
            default:
                return breaches
        }
    }
)

export const getBreachesFilteredByKeyword = createSelector(
    getFilteredBreaches,
    getKeyword,
    (filteredBreaches, keyword) => {
        if(keyword !== "") {
            const withDuplicates = filteredBreaches.filter(breach => breach.Name.toLowerCase().includes(keyword) || breach.Description.toLowerCase().includes(keyword))

            return Array.from(new Set(withDuplicates.map(x => x._id)))
                .map(id => {
                    return withDuplicates.find(a => a._id === id)
                })
        }

        return filteredBreaches
    }
);