


const initSlider = () => {
    const slideButtons = document.querySelectorAll('.slideBTN') 
    const productsList = document.querySelector('.products') 
    const slideScroll = document.querySelector('.scrollbar') 
    const scrollThum = slideScroll.querySelector('.scrollbar-thum') 
    const maxScroll_Left = productsList.scrollWidth - productsList.clientWidth

    
    scrollThum.addEventListener("mousedown", (e)=>{
        const startX = e.clientX;
        const thum_Possition = scrollThum.offsetLeft;

        function handleMouseMove(e){
            const deltaX = e.clientX - startX;
            const newThumPossition = thum_Possition + deltaX;

            const maxThumPostion = slideScroll.getBoundingClientRect().width - scrollThum.offsetWidth
            const BoundedPossition = Math.max(0, Math.min(maxThumPostion, newThumPossition))
            const scrollPosition = (BoundedPossition/maxThumPostion)*maxScroll_Left

            scrollThum.style.left = `${BoundedPossition}px`
            productsList.scrollLeft = scrollPosition
        }

        function handleMouseup() {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseup", handleMouseup)
        }

        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseup", handleMouseup)
    })


    slideButtons.forEach((Buton)=>(
        Buton.addEventListener('click',()=>{
            const direction = Buton.id=== 'left-Arow' ? -0.25 : 0.25 ;
            const scrollAmount = productsList.clientWidth * direction
            productsList.scrollBy({ left: scrollAmount, behavior : 'smooth'})
        })
    ))
    
    function handleBtns(){
        slideButtons[0].style.display = productsList.scrollLeft <= 0 ? 'none' : 'block';
        slideButtons[1].style.display = productsList.scrollLeft >= maxScroll_Left ? 'none' : 'block';
    }

    function updateScrollPosition(){
        const scrollPosition = productsList.scrollLeft;
        const thumPossition = (scrollPosition / maxScroll_Left) * (slideScroll.clientWidth - scrollThum.offsetWidth)
        scrollThum.style.left = `${thumPossition}px`
    }

    productsList.addEventListener('scroll', ()=> {
        handleBtns()
        updateScrollPosition()
    })

    Arrrivals()

    function Arrrivals(){
        const New_arrivals = document.querySelector('.New_arrivals') 
        const maxScroll_Left = New_arrivals.scrollWidth - New_arrivals.clientWidth

        const moveBTN = document.querySelectorAll('.moveBTN')
        moveBTN.forEach((Buton)=>{
            Buton.addEventListener('click', ()=>{
                const direction = Buton.id=== 'left-Arow' ? -0.25 : 0.25 ;
                const New_arrivalsAmount = New_arrivals.clientWidth * direction
                New_arrivals.scrollBy({ left: New_arrivalsAmount, behavior : 'smooth'})
            })
        })
       
        slideButtons[0].style.display = productsList.scrollLeft <= 0 ? 'none' : 'block';
        slideButtons[1].style.display = productsList.scrollLeft >= maxScroll_Left ? 'none' : 'block';
    }
}
window.addEventListener('load', initSlider)



//  ===============  Avertising images ==========================//
//  ===============  Avertising images ==========================//


const imgSlides1 = document.querySelectorAll('.Adver_img1')
const imgSlides2 = document.querySelectorAll('.Adver_img2')
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", intilizeSlides)
document.addEventListener("DOMContentLoaded", startSlide)

function intilizeSlides(){
    if(imgSlides1.length > 0){
        imgSlides1[slideIndex].classList.add("showImg")
        intervalId = setInterval(NextSlide, 5000)
    }
}
function showSlide1(index){

    if(index >= imgSlides1.length){
       slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = imgSlides1.length - 1
    }

   imgSlides1.forEach((img)=>{
    img.classList.remove("showImg")
   })
   imgSlides1[slideIndex].classList.add("showImg")
}

function NextSlide(){
    slideIndex ++
    showSlide1(slideIndex)
    showSlide2(slideIndex)
}

function startSlide(){
    if(imgSlides2.length > 0){
        imgSlides2[slideIndex].classList.add("showImg")
        intervalId = setInterval(NextSlide, 5000)
    }
}
function showSlide2(index){
  if(index >= imgSlides2.length){
    slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = imgSlides2.length - 1
    }

    imgSlides2.forEach((img)=>{
    img.classList.remove("showImg")
    })
    imgSlides2[slideIndex].classList.add("showImg")
}


//  ===============  Avertising images ==========================//
//  ===============  Avertising images ==========================//


// ||||||||||||||||||||| Navactions ||||||||||||||||||||||||//
Navactions()
export function Navactions(){
    let menueBtn = document.getElementById("menue"),
    navClose = document.getElementById("close"),
    navMenue = document.getElementById("Nav-side")

    menueBtn.addEventListener('click', ()=>{
        navMenue.classList.add('show_nav')
    })

    navClose.addEventListener('click', ()=>{
        navMenue.classList.remove('show_nav')
    })
}

// ||||||||||||||||||||| searchForm ||||||||||||||||||||||||//

let searchForm = document.getElementById("search"),
    searchClose = document.getElementById("search-close"),
    search_btn = document.getElementById("search_btn")

search_btn.addEventListener('click', ()=>{
    searchForm.classList.add('show-search')
})

searchClose.addEventListener('click', ()=>{
    searchForm.classList.remove('show-search')
})


// |||||||||||||||||||||LOIG Form ||||||||||||||||||||||||//


let LoginForm = document.getElementById("login"),
    LoginClose = document.getElementById("login-close"),
    user_btn = document.querySelectorAll("#user")

user_btn.forEach((user)=>{
    user.addEventListener('click', ()=>{
        LoginForm.classList.add('show-login')
    })
})

LoginClose.addEventListener('click', ()=>{
    LoginForm.classList.remove('show-login')
})


// =========================  OBSERVER SIDE  ====================//

const observer = new IntersectionObserver((Entries)=> {
    Entries.forEach((entry)=>{
       
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
})


let hidenElments = document.querySelectorAll('.hidden')
hidenElments.forEach((Elment)=> observer.observe(Elment))

let hidenProducts = document.querySelectorAll('.hidde')
hidenProducts.forEach((Elment)=> observer.observe(Elment))

// =========================  OBSERVER SIDE  ====================//

