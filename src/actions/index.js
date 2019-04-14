export const toggleNavbar = (navOpen) => {
    return{
        type: 'TOGGLE_NAV',
        payload: navOpen
    }
}

export const toggleCollapse = (colOpen, colId) => {
    return{
        type: 'TOGGLE_COLLAPSE',
        colId: colId,
        payload: colOpen
    }
}