import { products, ToDecimals } from "../Data Scripts/product.js";
import { proDetails, saveToStrage } from "../Data Scripts/Pro-Details.js";
import { Favorites, AddToFavorite,countCarts, countFvorites, DelFavorites, AddToCart } from "../Data Scripts/Cart.js";


RenderFvorites()
countCarts()
countFvorites()

export function RenderFvorites(){

    let FavoritesHTML = '';
    Favorites.forEach((FavoriteItem)=>{

        let FavoriteId = FavoriteItem.FavoriteId
        let Favorite__Item = '';
        products.forEach((product)=>{
            if(product.Id === FavoriteId){
                Favorite__Item = product
            }
        })
        console.log(Favorite__Item)

        FavoritesHTML += `
        <div class="product-wraper">
            <div class="product-profile hidde">
                <div class="produt-img">
                    <div class="star-cont">
                    <h3>${Favorite__Item.status}</h3>
                    </div>
                    <div class="favorite">
                    <i class="ri-heart-2-fill favoriteBTN RemFavorite FVbtn-${Favorite__Item.Id}" data-product-id="${Favorite__Item.Id}"></i>
                    </div>
                    <div class="Add_Message SMS-${Favorite__Item.Id}">
                        <i class="ri-checkbox-circle-fill"></i>
                        <p>Added</p>
                    </div>
                ${Favorite__Item.Image}
                </div>
                <div class="product-Name">
                    <p>${Favorite__Item.Name}</p>
                    <small>$${ToDecimals(Favorite__Item.price)}</small>
                </div>
                <div class="product-Rating">
                    <div class="Rating__stars">
                    ${Favorite__Item.rating.stars}
                    </div>
                    <span>${Favorite__Item.rating.count}</span>
                </div>
                <div class="product-btns">
                    <button class="CartBtn" data-product-id="${Favorite__Item.Id}">Add to cart</button>
                    <button class="DetailBtn" data-product-id="${Favorite__Item.Id}"><a href="Details.html">See Details</a></button>
                </div>
            </div>
        </div>
        `
        document.querySelector('.Favorites').innerHTML = FavoritesHTML  

        if (FavoriteItem) {
            document.querySelectorAll('.favoriteBTN').forEach((FavoriteBtn) => {
              FavoriteBtn.classList.add('favorite-active');
            });
        }

    })

    let Favoritebtn = document.querySelectorAll('.favoriteBTN')
    Favoritebtn.forEach((Favorite)=>{
        Favorite.addEventListener('click', ()=>{
            let productId = Favorite.dataset.productId
            console.log(productId)
            AddToFavorite(productId)
        })
    })

 
    document.querySelectorAll('.RemFavorite').forEach((RemFavorite)=>{
        RemFavorite.addEventListener('click', ()=>{
            let productId = RemFavorite.dataset.productId
            DelFavorites(productId)
            countFvorites()
            window.location.reload();
            console.log("Deleted sucessfully")
        })
    })

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

}
 
