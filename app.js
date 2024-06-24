document.addEventListener("DOMContentLoaded", function() {
    const featureBtn = document.querySelector(".feature");
    const companyBtn = document.querySelector(".Company");
    const featureContent = document.querySelector(".features-nav");
    const companyContent = document.querySelector(".company-nav");
    const featureArrowDown = document.querySelector(".feature .arrowdown");
    const featureArrowUp = document.querySelector(".feature .arrowup");
    const companyArrowDown = document.querySelector(".Company .arrowdown");
    const companyArrowUp = document.querySelector(".Company .arrowup");
    

  
    featureBtn.addEventListener("click", function() {
     if( featureContent.style.display==="none"){
        featureContent.style.display="flex"
        featureArrowDown.classList.toggle("hidden");
        featureArrowUp.classList.toggle("hidden");
     } else {
        featureContent.style.display="none"
        featureArrowDown.classList.toggle("hidden");
        featureArrowUp.classList.toggle("hidden");
     }
    
    });


    companyBtn.addEventListener("click", function() {
        if( companyContent.style.display==="none"){
            companyContent.style.display="flex"
            companyArrowDown.classList.toggle("hidden");
            companyArrowUp.classList.toggle("hidden");
        } else {
            companyContent.style.display="none"
            companyArrowDown.classList.toggle("hidden");
            companyArrowUp.classList.toggle("hidden");
        }
       
       });

  
  });

  //MOBILE /
  const openmenuBtn = document.querySelector('.openmenu');
    const closemenuBtn = document.querySelector('.closemenu')
    const menu= document.querySelector('.menu')

    openmenuBtn.addEventListener("click", ()=>{
        menu.style.display="block"
      
    })
    closemenuBtn.addEventListener('click', ()=>{
        menu.style.display="none"
    })
    const mobileFeature= document.querySelector("#featMobile")
    const featureMenu = document.querySelector(".features-mobile")

    mobileFeature.addEventListener("click",()=>{
        if(featureMenu.style.display==="none"){
            featureMenu.style.display ="flex"
           
            
        } else {
            featureMenu.style.display = "none"
           
        }
    })
    const comBtn= document.querySelector('#comp');
    const companyFeature = document.querySelector(".company-mobile")

   
comBtn.addEventListener('click', () => {
    if (companyFeature.style.display === "none" || companyFeature.style.display === "") {
        companyFeature.style.display = "flex";
    } else {
        companyFeature.style.display = "none";
    }
});