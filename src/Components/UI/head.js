



 export const setIcon = ()=>{
    const ham = document.querySelector(".hamburger-icon");
    const move = document.querySelector(".move");
    
    ham.addEventListener('click',()=>{
    move.style.right=`${0}px`
})

}


export const removeIcon = ()=>{
    const can = document.querySelector(".icon");
    const move = document.querySelector(".move");
    
    can.addEventListener('click',()=>{
    move.style.right=`${-300}px`
})
}



