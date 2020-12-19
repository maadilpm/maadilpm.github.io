


self.addEventListener('install', function(event) {
 event.waitUntil(
   caches.open('sw-cache').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/cloud.html',
       '/cloud-old.html',
       '/software.html',
       '/upload.html',
       'css/aoc.css',
       'css/bootstrap.min.css',
       'css/clock.css',
       'js/core/bootstrap.min.js',
       'js/core/jquery.3.2.1.min.js',
       'js/core/popper.min.js',
       'js/plugins/bootstrap-datepicker.js',
       'js/plugins/bootstrap-switch.js',
       'js/plugins/jquery.sharrre.js',
       'js/plugins/nouislider.min.js',
       'js/aos.js',
       'js/now-ui-kit.js',
       'styles/main.css',
       '/favicon.ico'
       
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
 event.respondWith(

 	cashes.match(event.request).then(function(response) {

 		return response || fetch(event.request);
 	})
 	);
});