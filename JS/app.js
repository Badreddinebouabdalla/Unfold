const imageSliderContainer = document.querySelector('.imageSlider');
const imageSlider= imageSliderContainer.querySelector('img');
const contactForm = document.getElementById('contactForm');
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll('section');
const backToTop =document.querySelector('.backToTop');
var MyProjectsImages=[];


//Get the currnet section appear in the screen
document.addEventListener('DOMContentLoaded',()=>{  
    function setAciveLink(){
        var scrollPos = window.scrollY || window.scrollTop || window.getElementByTagName('html')[0].scrollTop;
        sections.forEach((section)=>{
            var sectionTop = section.offsetTop-50;
            if(scrollPos>=sectionTop && scrollPos<sectionTop+section.clientHeight){
                navLinks.forEach((link)=>{
                    link.classList.remove("active");
                });
                document.querySelector('nav a[href="#'+section.id+'"]').classList.add("active");
            }
            if(scrollPos==0){
                backToTop.style.display='none';
            }
        })
    }
    window.addEventListener('scroll',setAciveLink);
    setAciveLink();
})


document.querySelector('.works').querySelectorAll('img').forEach((img)=>{
    MyProjectsImages.push(img.src);
})


//********** open&close Navbar************ 
function slideNavbar(e){
    const nav = document.querySelector("nav");
    if(e.checked){
        nav.style.height='220px';
    }else{
        nav.style.height=0;
    }
}


//*********** Contact us form ************
contactForm.onsubmit=(e)=>{
    e.preventDefault();
    const formData = new FormData(contactForm);
    fetch('../PHP/contactMe.php',{
        method: 'POST',
        body:formData,
    })
    .then(res=>res.json)
    .then((res)=>{
        if(res.hasSended){
            alert('The message has been sent successfully');
        }else{
            alert("Sorry! the message couldn't be sent");
        }
        
    })
}

//******The image slider****************

function closeImageSlider(){
    imageSliderContainer.classList.remove('show');
    document.body.style.overflow='scroll';
}

imageSliderContainer.addEventListener('click',(e)=>{
    if(!e.target.matches('.imageSlider *')){
        closeImageSlider();
    }
})


function showImageSlider(e){
    imageSliderContainer.classList.add('show');
    document.body.style.overflow='hidden';

    const image = e.parentElement.parentElement.querySelector('img');
    imageSlider.src = image.src;
}
function slideRight(){
    var i = MyProjectsImages.indexOf(imageSlider.src);
    if(i<MyProjectsImages.length-1){
        i++;
    }else{
        i=0;
    }
    imageSlider.src=MyProjectsImages[i];
}

function slideLeft(){
    var i = MyProjectsImages.indexOf(imageSlider.src);   
    if(i>0){
        i--;
    }else{
        i=MyProjectsImages.length-1;
    }
    imageSlider.src=MyProjectsImages[i];
}

//********** Animation ****************
document.querySelectorAll('[data-animate-to="top"]').forEach((element)=>{
    gsap.fromTo(element,
    {
        y:200,
        opacity:0
    },{
        scrollTrigger:element,
        y:0,
        opacity:1,
        duration: 2,
        
    })
})
document.querySelectorAll('[data-animate-to="right"]').forEach((element)=>{
    gsap.fromTo(element,
    {
        x:-200,
        opacity:0
    },{
        scrollTrigger:element,
        x:0,
        opacity:1,
        duration: 1,
        
    })
})