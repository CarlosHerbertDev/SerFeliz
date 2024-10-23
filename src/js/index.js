const gallery = document.getElementById('animated-thumbnails')

lightGallery(gallery, {
    controls: true,
    download: false,
    allowMediaOverlap: true,
    toggleThumb: true,
    thumbnail: true,
    plugins: [lgAutoplay, lgZoom, lgFullscreen, lgThumbnail]
})



