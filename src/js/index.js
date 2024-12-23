const gallery = document.getElementById('animated-thumbnails')
const lastOne = document.querySelectorAll('.last-one')
const nav = document.querySelector(".header")
const ulHeader = document.querySelector(".ul-header")
const saibaMais = document.querySelectorAll(".card-projetos")

saibaMais.forEach((item, index)=>{

    const saiba = document.querySelectorAll(".saiba-mais")[index]

    saiba.addEventListener('click', () => {

        // const itensAtivos = document.querySelector(".mostrar")

        // if (itensAtivos) itensAtivos.classList.remove("mostrar")

        // item.classList.add("mostrar")

        item.classList.contains("mostrar") ? item.classList.remove("mostrar") : item.classList.add("mostrar") 


    })
})













let prevScrollops = window.pageYOffset;

window.addEventListener('scroll', () => {
    
    let currentScrollops = window.pageYOffset
    
    
    if (prevScrollops < currentScrollops) {
        // nav.classList.add('hide')
        // ulHeader.classList.add('hidden')

        nav.classList.add('animate__flipOutX')
        nav.classList.remove('animate__flipInX')
        
        
    } else {

        nav.classList.remove('animate__flipOutX')
        nav.classList.add('animate__flipInX')

        // nav.classList.remove('hide')
        // ulHeader.classList.remove('hidden')
    }
    
    prevScrollops = currentScrollops;
})


const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("animate__fadeIn")
            // entry.target.classList.add("animate__animated")
            // entry.target.classList.remove("hidden")
            // entry.target.classList.add("show")
            
        } 
    })
})

lastOne.forEach((item) => {
    myObserver.observe(item)
})


lightGallery(gallery, {
    controls: true,
    download: false,
    allowMediaOverlap: true,
    toggleThumb: true,
    thumbnail: true,
    plugins: [lgAutoplay, lgZoom, lgFullscreen, lgThumbnail]
})



