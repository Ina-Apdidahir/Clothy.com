

 export let proDetails = JSON.parse(localStorage.getItem('proDetails')) 
 if (!proDetails){
    proDetails = [{
      productId: 'E_commerce_web_product_Id_Num_000151'
    }]
    }

 export function saveToStrage (){
    localStorage.setItem('proDetails', JSON.stringify(proDetails) )
 }
