var myHomeData = [
 {
	poster:'images/poster01.png',
    title:'App tracking has only 5% opt-in rate since iOS 14.5 update',
},{
	poster:'images/poster01.png',
    title:'App tracking has only 5% opt-in rate since iOS 14.5 update',
},{
	poster:'images/poster01.png',
    title:'App tracking has only 5% opt-in rate since iOS 14.5 update',
},{
	poster:'images/poster01.png',
    title:'App tracking has only 5% opt-in rate since iOS 14.5 update',
},]

 
AllData = () => {
	myHomeData.forEach(i =>{
	 document.querySelector('.news>ul').innerHTML+=`
	    <li>
		    <a href="#">
			    <div class="card">
				    <img src="${i.poster}">
					<div class="data">
					    <p>${i.title}</p>
					</div>
				</div>
			</a>
		</li>
	 `
  });
}
document.addEventListener("DOMContentLoaded", AllData);

if("serviceWorker" in navigator){
	window.addEventListener("load",function(){
		navigator.serviceWorker.register("serviceWorker.js").then(res => console.log("service worker ragisterd")).catch(err => console.log("service worker not ragisterd", err));	
	});
}