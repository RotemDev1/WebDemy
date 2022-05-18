import Card from "../components/UI/Card";
import { httpService } from "./generalService/httpService";

export const purchaseService = {
    query,
    payCart,
    addProductToCart
}

function addProductToCart(cart, product) {
    cart.prodcuts.push(product);
    cart.price += product.prict;
    return cart
}

function query() {
    return httpService.get('purchase/carts')
}

function payCart(payCart) {
    return httpService.post(`course/pay`, payCart)
}