export let populars = JSON.parse(localStorage.getItem('populars')) 
if(!populars){
    populars =  [{
       popular__Id : 0,
   },
   {
       popular__Id : 5,
   },
   {
       popular__Id : 10,
   },
   {
       popular__Id : 15,
   },
   {
       popular__Id : 20,
   },
   {
       popular__Id : 25,
   },
   {
       popular__Id : 30,
   },
   {
       popular__Id : 35,
   },
   {
       popular__Id : 40,
   },
   {
       popular__Id : 45,
   }
]}

export function savePopulars() {
    localStorage.setItem('populars', JSON.stringify(populars))
}
