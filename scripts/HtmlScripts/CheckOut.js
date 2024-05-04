
import { Cart, countCarts, countFvorites, DeletFromChart, saveCarts} from "../Data Scripts/Cart.js";
import { saveToStrage,  proDetails  } from "../Data Scripts/Pro-Details.js";
import { products, getproduct, ToDecimals } from "../Data Scripts/product.js";
import { RenderTransection } from "./Transectoin.js";
 

RenderTransection()
RenderPage()
countCarts()
countFvorites()
function RenderPage(){
    let CartHtml = '';
    Cart.forEach((CartItem)=>{
    
        let productId = CartItem.productId
        let matchingProducts = '';
        products.forEach((product)=>{
            if(product.Id === productId){
                matchingProducts = product
            }
        })

        CartHtml += `
        <div class="order">
            <div class="Cart_header">
                <p>Item</p>
                <p>Quantity</p>
                <p>Total</p>
            </div>
            <div class="Cart_description">
                <div class="Item">
                    <div class="item_img">
                       ${matchingProducts.Image}
                    </div>
                    <div class="item_Descrip">
                        <h3> ${matchingProducts.Name}</h3>
                        <p>Price : <span>$${ToDecimals(matchingProducts.price)}</span></p>
                        <div class="buttons">
                        <button class="delBtn" data-product-id="${matchingProducts.Id}"><span class="Text">Delete</span><img src="Ecomerce img/ICONS/delete.png" alt=""></button>
                        <button class="DetailBtn viewBtn" data-product-id="${matchingProducts.Id}"><a href="Details.html"><span class="Text">view</span><img src="Ecomerce img/ICONS/arrows.png" alt=""></a></button>
                        </div>
                    </div>
                </div>
                <div class="item_quntity">
                    <i class="ri-subtract-fill  Minus" data-product-id="${matchingProducts.Id}"></i>
                    <p class="quanity-${matchingProducts.Id}" data-product-id="${matchingProducts.Id}">${CartItem.quantity}</p>
                    <i class="ri-add-line  Plus" data-product-id="${matchingProducts.Id}"></i>
                </div>
                <div class="item_price"><p>$${ToDecimals(matchingProducts.price * CartItem.quantity)}</p></div>
            </div>
        </div>
       `
        document.querySelector('.Emlent').innerHTML = CartHtml

    })
    
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



    document.querySelectorAll(".Plus").forEach((Plusbtn) => {
        Plusbtn.addEventListener('click', () => {
            const PlusbtnId = Plusbtn.dataset.productId; // Use const for product ID

            // Find the matching cart item
            const cartItem = Cart.find(item => item.productId === PlusbtnId);

            if (cartItem) {
                cartItem.quantity++; // Increment quantity directly on the cart item object

                // Update quantity display
                document.querySelectorAll(`.quanity-${PlusbtnId}`).forEach((quantityHtml) => {
                quantityHtml.innerHTML = cartItem.quantity;
                });
            } 
            else {
                console.log("Product not found in cart");
            }
            saveCarts(); // Call your function to save the updated Cart data
            RenderPage()
            RenderTransection()
        });
    });

    document.querySelectorAll(".Minus").forEach((Minusbtn) => {
        Minusbtn.addEventListener('click', () => {
            const MinusbtnId = Minusbtn.dataset.productId;
            console.log(MinusbtnId)

            const cartItem = Cart.find(item => item.productId === MinusbtnId);
            if (cartItem) {
                if (cartItem.quantity > 1) { // Check if quantity is greater than 0
                    cartItem.quantity -= 1;
                    
                    // Update quantity display on the page
                    document.querySelectorAll(`.quanity-${MinusbtnId}`).forEach((quantityHtml) => {
                    quantityHtml.innerHTML = cartItem.quantity;
                    });
                }
                else{
                  alert("Quantity Can't be Zero or less Than ")
                  cartItem.quantity = 1;
                }
            }
            saveCarts(); // Call your function to save the updated Cart data
            RenderPage()
            RenderTransection()
        });
    });
        
    DeleteFunc()
    function DeleteFunc(){
        document.querySelectorAll(".delBtn").forEach((deletebtn)=>{
            deletebtn.addEventListener('click', ()=>{
                const productId = deletebtn.dataset.productId
                DeletFromChart(productId)
                RenderPage()
                RenderTransection()
                countCarts()
            })
        })
    }
   
}
