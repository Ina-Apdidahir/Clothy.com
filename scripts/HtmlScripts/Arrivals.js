
import { NewArrivals } from "../Data Scripts/Arrivals-product.js";
import { ToDecimals, products } from "../Data Scripts/product.js";
import { proDetails, saveToStrage } from "../Data Scripts/Pro-Details.js";
import { AddToCart, AddToFavorite } from "../Data Scripts/Cart.js";
import { countCarts, countFvorites } from "../Data Scripts/Cart.js";


countCarts()
countFvorites()
let ArrivalsHTML = "";
NewArrivals.forEach((Arr_product)=>{

    let ArrivalId = Arr_product.pro_AR__Id
    let matchingProducts = '';
    products.forEach((product)=>{
        if(product.AR__Id === ArrivalId){
            matchingProducts = product
        }
    })
    // console.log(matchingProducts)

    ArrivalsHTML += `
    <div class="product-profile hidde">
        <div class="produt-img">
            <div class="star-cont">
                <h3>${matchingProducts.status}</h3>
            </div>
            <div class="favorite">
            <i class="ri-heart-2-fill favoriteBTN" data-product-id="${matchingProducts.Id}"></i>
            </div>
            <div class="Add_Message SMS-${matchingProducts.Id}">
                <i class="ri-checkbox-circle-fill"></i>
                <p>Added</p>
            </div>
           ${matchingProducts.Image}
        </div>
        <div class="product-Name">
            <p>${matchingProducts.Name}</p>
            <small>$${ToDecimals(matchingProducts.price)}</small>
        </div>
        <div class="product-Rating">
            <div class="Rating__stars">
               ${matchingProducts.rating.stars}
            </div>
            <span>${matchingProducts.rating.count}</span>
        </div>
        <div class="product-btns">
            <button class="CartBtn" data-product-id="${matchingProducts.Id}">Add to cart</button>
           <button class="DetailBtn" data-product-id="${matchingProducts.Id}"><a href="Details.html">See Details</a></button>
        </div>
    </div>
    `
})
document.querySelector('.New_arrivals').innerHTML = ArrivalsHTML


function viewDetails(productId){

    if(proDetails.length === 0){
        proDetails.push({
            productId : productId,
            quantity : 1
        })  
    }
    else{
        proDetails.length = 0
        proDetails.push({
            productId : productId,
            quantity : 1
        })  
    }

    saveToStrage ()
}
document.querySelectorAll('.DetailBtn').forEach((Buton)=>{
    Buton.addEventListener('click', ()=>{
        const productId = Buton.dataset.productId
        viewDetails(productId)
    })
})

document.querySelectorAll('.CartBtn').forEach((BuTTon)=>{
    BuTTon.addEventListener('click', ()=>{
        const productId = BuTTon.dataset.productId
        AddToCart(productId)
        let AddesMessage = document.querySelector(`.SMS-${productId}`)
        AddesMessage.classList.add('visible')
        setTimeout(()=>{
            AddesMessage.classList.remove('visible')
        },2000)
    })
})

let Favoritebtn = document.querySelectorAll('.favoriteBTN')
Favoritebtn.forEach((Favorite)=>{
    Favorite.addEventListener('click', ()=>{
        let productId = Favorite.dataset.productId
        console.log(productId)
        AddToFavorite(productId)
    })
})