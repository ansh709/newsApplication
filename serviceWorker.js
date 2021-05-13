var staticNewsApp = "news-app-site-v1";

var assets = [
   "/",
   "/index.html",
   "/style.css",
   "/app.js",
   "/images/banner.jpg",
   "/images/poster01.png"
];

self.addEventListener("install", installEvent  => {
	installEvent.waitUntil(
	   caches.open(staticNewsApp).then(cache => {
		   cache.addAll(assets);
	   })
	);
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
