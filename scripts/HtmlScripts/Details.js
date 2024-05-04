
import { proDetails, } from "../Data Scripts/Pro-Details.js";
import { products, ToDecimals } from "../Data Scripts/product.js";
import { countCarts, countFvorites, AddToCart } from "../Data Scripts/Cart.js";
 
countCarts()
countFvorites()

let productDetailHTML = '';
proDetails.forEach((detail)=>{

    let productId = detail.productId

    let matchingproduct;
    products.forEach((product)=>{
        if(product.Id === productId){
            matchingproduct = product
        }
    })
    console.log(matchingproduct)

   productDetailHTML += `
   <div class="product-box">
       <div class="produt_header">
           <div class="colors">
               <p class="hidden Colors">${matchingproduct.colors.color_1}</p>
               <p class="hidden Colors">${matchingproduct.colors.color_2}</p>
               <p class="hidden Colors">${matchingproduct.colors.color_3}</p>
               <p class="hidden Colors">${matchingproduct.colors.color_4}</p>
               <p class="hidden Colors">${matchingproduct.colors.color_5}</p>
           </div>
           <div class="product-stars hidden">
              ${matchingproduct.rating.stars}
               <small>${matchingproduct.Reviews} Reviews</small>
           </div>
       </div>
       <div class="product__container" data-matching-product-Name="${matchingproduct.Name}">
           <div class="product_images" >    
                <div class="product-image" >
                ${matchingproduct.Image}  
                </div>
                <div class="color-shapes hidden">
                ${matchingproduct.images.image1}
                ${matchingproduct.images.image2}
                ${matchingproduct.images.image3}
                ${matchingproduct.images.image4}
                ${matchingproduct.images.image5}
                </div>
           </div>
       
           <div class="detail">
               <div class="name-detail hidden">
                   <h2>${matchingproduct.Name}</h2>
               </div>
               
               <div class="pro_price hidden">
                   <p>$${ToDecimals(matchingproduct.price)}</p>
                   <small>$${ToDecimals(matchingproduct.discount)}</small>
               </div>

               <div class="product-sizes">
                   <div class="sise-measure">
                       <h2>Size : US</h2> <p><i class="ri-ruler-line"></i> Size Guide</p>
                   </div>
                   <div class="sizes hidden">
                       ${matchingproduct.sizes.size_1}
                       ${matchingproduct.sizes.size_2}
                       ${matchingproduct.sizes.size_3}
                       ${matchingproduct.sizes.size_4}
                       ${matchingproduct.sizes.size_5}
                   </div>
                   <div class="sise-Table" id="sise-Table">
                       <div class="Table-data hidden">
                           <p>Tag Size</p>
                           <small>M</small>
                       </div>
                       <div class="Table-data hidden">
                           <p>Bust</p>
                           <small>44.90 inch</small>
                       </div>
                       <div class="Table-data hidden">
                           <p>Sleeve Length</p>
                           <small>20.47 inch</small>
                       </div>
                       <div class="Table-data hidden">
                           <p>Length</p>
                           <small>25.98 inch</small>
                       </div>
                   </div>
               </div>
               <div class="pro_buttons hidden">
                   <button class="CartBtn" data-matching-product-Name="${matchingproduct.Id}"><i class='bx bx-cart-add'></i> Add to Cart</button>
                   <div class="favourites">
                       <i class="ri-heart-2-fill"></i>
                       <p>${matchingproduct.favorite}</p>
                   </div>
               </div>
               <div class="delivery-container">
                   <div class="delivery hidden">
                       <div class="delivry-icon">
                           <i class="ri-truck-fill"></i>
                       </div>
                       <div class="delivry-detail hidden">
                           <p>Fast Delivery</p>
                           <small>In stock usually dispatched in one business day</small>
                       </div>
                   </div>

                   <div class="delivery hidden">
                       <div class="delivry-icon">
                           <i class="ri-replay-30-line"></i>
                       </div>
                       <div class="delivry-detail hidden">
                           <p>30-days Return Policy</p>
                           <small>Learn More</small>
                       </div>
                   </div>
               </div>
               <div class="Description-container">
                   <h2>Description</h2>
                   <div class="description-box hidden">
                       <div class="description">
                           <p>Color :</p>
                           <small>${matchingproduct.colors.color_1} ${matchingproduct.colors.color_2} ${matchingproduct.colors.color_3} ${matchingproduct.colors.color_4} ${matchingproduct.colors.color_5} </small>
                       </div>
                       <div class="description">
                           <p>Occasion :</p>
                           <small>Daily</small>
                       </div>
                       <div class="description">
                           <p>Size :</p>
                           <small>${matchingproduct.size}</small>
                       </div>
                       <div class="description">
                           <p>Pattern :</p>
                           <small>${matchingproduct.pattern}</small>
                       </div>
                       <div class="description">
                           <p>Collar :</p>
                           <small>${matchingproduct.collar}</small>
                       </div>
                       <div class="description">
                           <p>Material :</p>
                           <small>${matchingproduct.Material}</small>
                       </div>
                       <div class="description">
                           <p>Sleeve Length :</p>
                           <small>${matchingproduct.Sleeve}</small>
                       </div>
                       <div class="description">
                           <p>Brand :</p>
                           <small>${matchingproduct.Brand}</small>
                       </div>
                       <div class="description">
                           <p>Thickness :</p>
                           <small>${matchingproduct.Thickness}</small>
                       </div>
                       <div class="description">
                           <p>Season :</p>
                           <small>${matchingproduct.seasons}</small>
                       </div>
                   </div>
               </div>
               <div class="alert hidden">
                   <p>Please Note :</p>
                   <small>Please see the Size Reference to find the correct size.</small>
               </div>
               
           </div>
       </div>
   </div>
   `
   document.querySelector('.product-container').innerHTML = productDetailHTML
})



document.querySelectorAll('.CartBtn').forEach((BuTTon)=>{
    BuTTon.addEventListener('click', ()=>{
        const productId = BuTTon.dataset.productId
        AddToCart(productId)
    })
})

let Main_img = document.querySelectorAll('.Main_img');
let Small_img = document.querySelectorAll('.Small_img')

Main_img.forEach((mainImg)=> {
    Small_img.forEach((imge)=>{
        imge.addEventListener('click', ()=>{
            mainImg.src = imge.src
        })
    })
    document.querySelectorAll('.Colors').forEach((color)=>{
        color.addEventListener('click', ()=>{
            console.log(color.textContent)
            if(color.textContent === color.color_1){
                    mainImg.src = Small_img[0].src

            } else if(color.textContent === color.color_2){
                    mainImg.src = Small_img[1].src
            }  else if(color.textContent === color.color_3){
                    mainImg.src = Small_img[2].src
            }else if(color.textContent === color.color_4){
                mainImg.src = Small_img[3].src
            }else if(color.textContent === color.color_5){
                mainImg.src = Small_img[4].src
            }
        })
    })
})


 

