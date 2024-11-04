const gallery = document.getElementById('animated-thumbnails')
const lastOne = document.querySelectorAll('.last-one')
const nav = document.querySelector(".header")
const ulHeader = document.querySelector(".ul-header")

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



