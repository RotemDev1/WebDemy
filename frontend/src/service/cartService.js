import { httpService } from "./generalService/httpService";

export const cartService = {
    query,
    payCart
}


function query() {
    return httpService.get('course/carts')
}

function payCart(payCart) {
    return httpService.post(`course/pay`, payCart)
}