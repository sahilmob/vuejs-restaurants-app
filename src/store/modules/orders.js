import { firebaseAction } from 'vuexfire'

const state = {
    orders: []
}

const getters = {
    getOrders: state => state.orders,
    numberOfOrders: state => state.orders.length
}

const mutations = {
    addOrder: (state, orders) => { state.orders.push(orders) }
}


const actions = {
    setOrdersRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
        bindFirebaseRef('orders', ref)
    })
}

export default {
    state,
    getters,
    mutations,
    actions
}
