const state = {
    globalWhere: {}
}

const mutations = {
    SET_CONFIG_WHERE(state, where) {
        const _where = {}

        _where[where.id] = where.where;
        state.globalWhere = {
            ...state.globalWhere,
            ..._where
        }
    }
}

const actions = {
    addWhere({commit}, where) {
        commit(
            'SET_CONFIG_WHERE',
            where
        )
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}