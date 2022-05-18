const initialState = {
    cart: { products: [], totalPrice: 0 },
}

export function PurchaseReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            return { ...state, cart: action.data }
        case 'Delete_PRODUCT_TO_CART':
            return []
        default:
            return state
    }
}
