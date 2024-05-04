
import { populars } from "../Data Scripts/Popular-products.js";
import { products, ToDecimals } from "../Data Scripts/product.js";
import { proDetails, saveToStrage } from "../Data Scripts/Pro-Details.js";
import { AddToCart, countCarts, AddToFavorite, countFvorites } from "../Data Scripts/Cart.js";


countCarts()
countFvorites()

let produtsHTML = "";
populars.forEach((populars_prod)=>{

    const popProductId = populars_prod.popular__Id
    let popularProduct;
    products.forEach((product)=>{
        if(product.Pop_Id === popProductId){
            popularProduct = product
        }
    })
    produtsHTML += `
    <div class="product-profile hidde">
        <div class="produt-img">
            <div class="status_container">
               <h3>${popularProduct.status}</h3>
            </div>
            <div class="favorite">
              <i class="ri-heart-2-fill favoriteBTN" data-product-id="${popularProduct.Id}"></i>
            </div>
            <div class="Add_Message SMS-${popularProduct.Id}">
               <i class="ri-checkbox-circle-fill"></i>
               <p>Added</p>
            </div>
           ${popularProduct.Image}
        </div>
        <div class="product-Name">
            <p>${popularProduct.Name}</p>
            <small>$${ToDecimals(popularProduct.price)}</small>
        </div>
        <div class="product-Rating">
            <div class="Rating__stars">
               ${popularProduct.rating.stars}
            </div>
            <span>${popularProduct.rating.count}</span>
        </div>
        <div class="product-btns">
            <button class="CartBtn" data-product-id="${popularProduct.Id}">Add to cart</button>
           <button class="DetailBtn" data-product-id="${popularProduct.Id}"><a href="Details.html">See Details</a></button>
        </div>
    </div>
    `
})
document.querySelector('.products').innerHTML = produtsHTML




function seeDetails(productId){

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
        seeDetails(productId)
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





