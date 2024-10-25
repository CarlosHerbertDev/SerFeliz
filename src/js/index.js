const gallery = document.getElementById('animated-thumbnails')
const lastOne = document.querySelectorAll('.last-one')
const nav = document.querySelector(".header")

let prevScrollops = window.pageYOffset;

window.addEventListener('scroll', () => {

    
    
    let currentScrollops = window.pageYOffset
        

    if (prevScrollops < currentScrollops) {
        nav.classList.add('hide')
    } else {
        nav.classList.remove('hide')
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



