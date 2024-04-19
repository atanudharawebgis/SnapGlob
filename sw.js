self.addEventListener('install', function (event) {
    console.log('Service worker is installed', event)
})

self.addEventListener('activate', function (event) {
    console.log('Service worker is Activated', event)
})

self.addEventListener('fetch', function (event) {
    console.log('fetch')
    console.log(event)

})