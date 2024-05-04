

export let Cart = JSON.parse(localStorage.getItem('Cart')) 
if(!Cart){
    Cart =  [{
      productId : 'E_commerce_web_product_Id_Num_000151',
      quantity : 1
    }]
}

export function saveCarts() {
    localStorage.setItem('Cart', JSON.stringify(Cart))
}

export function AddToCart(productId){
    let matchingItem;
    Cart.forEach((Cartitem)=>{
        if(productId === Cartitem.productId){
            matchingItem = Cartitem
        }
        })
      if(matchingItem){
          matchingItem.quantity += 1
      }else{
          Cart.push({
              productId : productId,
              quantity : 1
          })
          countCarts()
        }
      saveCarts()
  }


  export function countCarts(){
    let cartAmount = 0;
    Cart.forEach((CartQuantity)=>{
      CartQuantity = cartAmount ++
    })
    document.querySelectorAll('.cartCount').forEach((count)=>{
      count.innerHTML = cartAmount
    })
  }


// ==============  FAvourites  =============== //
// ==============  FAvourites  =============== //
// ==============  FAvourites  =============== //

export let Favorites = JSON.parse(localStorage.getItem("Favorites"))
if (!Favorites){
    Favorites = [{
      FavoriteId : 'E_commerce_web_product_Id_Num_000151',
      quantity : 1
    }]
}


  export function SaveFavorites(){
    localStorage.setItem("Favorites", JSON.stringify(Favorites))
  }
 

  export function AddToFavorite(productId){
    let matchingFavo;
    Favorites.forEach((FavoriteItem)=>{
        if(productId === FavoriteItem.FavoriteId){
            matchingFavo = FavoriteItem
        }
        })
      if(!matchingFavo){
        Favorites.push({
          FavoriteId : productId,
          quantity : 1
      })
      countFvorites()
      }else {
        DelFavorites(productId)
        }
        countFvorites()
      console.log(Favorites)
      SaveFavorites()
  }

  export function countFvorites(){
    let FavoriteAmount = 0;
    Favorites.forEach((FavoritesQuantity)=>{
      FavoritesQuantity = FavoriteAmount ++
    })
    document.querySelectorAll('.FavoriteCount').forEach((count)=>{
      count.innerHTML = FavoriteAmount
    })
  }



  export function DeletFromChart(productId){
    let NewCart = [];
    Cart.forEach((cartItem)=>{
        if (cartItem.productId !== productId){
            NewCart.push(cartItem)
        }
    })
    Cart = NewCart;
    saveCarts()
}

export function DelFavorites(productId){
  let NewFvorites = [];
  Favorites.forEach((FavoriteItem)=>{
      if (FavoriteItem.FavoriteId !== productId){
          NewFvorites.push(FavoriteItem)
      }
  })
  Favorites = NewFvorites;
  SaveFavorites()
}