import {  products, ToDecimals } from "../Data Scripts/product.js";
import { Cart } from "../Data Scripts/Cart.js";


export function RenderTransection(){
    let productPrice = 0;

    Cart.forEach((CartItem) => {

        let CartId = CartItem.productId
        let Equl__Item = '';
        products.forEach((product)=>{
            if(product.Id === CartId){
                Equl__Item = product
            }
        })
   
        productPrice += Equl__Item.price * CartItem.quantity
    });
    let shipping = productPrice * 0.05
    let Tax = productPrice*0.1
    let Total = productPrice + shipping + Tax

 let TransectoinHTML =
    ` <div class="Transections">
        <h2>Order Summary</h2>
        <div class="OrderSummary">
            <div class="sumry-box-1">
                <div class="summary">
                    <p>Item(<span class="cartCount"> </span>)</p>
                    <small>$${ToDecimals(productPrice)}</small>
                </div>
                <div class="summary">
                    <p>Shipping & Handling</p>
                    <small>$${ToDecimals(shipping)}</small>
                </div>
            </div>
            <div class="sumry-box">
                <div class="summary">
                    <p>Estimated tax</p>
                    <small>$${ToDecimals(Tax)}</small>
                </div>
            </div>
        </div>
        <div class="payment">
            <div class="total">
                <p>Order Total</p>
                <small>$${ToDecimals(Total)}</small>
            </div>
            <p>Use Paypal <input type="checkbox"></p>
            <button>Place your Order</button>
        </div>
    </div>
   `;


    document.querySelector(".transection-side").innerHTML = TransectoinHTML
} 