

 export let NewArrivals = JSON.parse(localStorage.getItem('NewArrivals')) 
 if(!NewArrivals){
    NewArrivals =  [{
        pro_AR__Id : 1,
    },
    {
        pro_AR__Id : 11,
    },
    {
        pro_AR__Id : 21,
    },
    {
        pro_AR__Id : 31,
    },
    {
        pro_AR__Id : 41,
        quantity : 1
    },
    {
        pro_AR__Id : 51,
    },
    {
        pro_AR__Id : 61,
    },
    {
        pro_AR__Id : 71,
    },
    {
        pro_AR__Id : 81,
    },
    {
        pro_AR__Id : 91,
    },
    {
        pro_AR__Id : 101,
    },
    {
        pro_AR__Id : 111,
        quantity : 1
    },
    {
        pro_AR__Id : 121,
    },
    {
        pro_AR__Id : 131,
    },
    {
        pro_AR__Id : 141,
    },
    {
        pro_AR__Id : 151,
    },
    {
        pro_AR__Id : 161,
    },
    {
        pro_AR__Id : 171,
    },
    {
        pro_AR__Id : 181,
    },
    {
        pro_AR__Id : 191,
    }]
 }
 
 export function saveNewAR() {
     localStorage.setItem('NewArrivals', JSON.stringify(NewArrivals))
 }
 

