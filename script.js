let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('nav a');



window.onscroll=()=>{
    sections.forEach((sec)=>{
        let top=window.scrollY;
        let offset=sec.offsetTop;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach((link)=>{
                link.classList.remove('active');
                document.querySelector('nav a[href*='+id+']').classList.add('active');
            });
        };

    });
}

window.addEventListener("scroll", function(){
    const a = document.getElementById("header");
    const scrollPosition = window.scrollY;

    if(scrollPosition > 500){
      a.style.backgroundColor = "rgba(0,0,0,0.5)";
    }else{
        a.style.backgroundColor = "rgba(0,0,0,1)";
    }
})

