import { purchaseService } from '../../service/purchaseService'

export function addProductToCart(cart, prodcut) {
    return async dispatch => {
        try {
            const newCart = await purchaseService.addProductToCart(cart, prodcut);
            dispatch({ type: 'ADD_PRODUCT_TO_CART', data: newCart })
        } catch (err) {
            console.log('purchaseService: err', err)
        }
    }
}
