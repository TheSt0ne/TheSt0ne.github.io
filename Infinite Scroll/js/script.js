const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader-container');
const submit = document.getElementById('submit');
const query =
document.getElementById('query');

//Add Query for different searches
let Query;

let ready=false;
let imagesLoaded=0;
let totalImages=0;
let photosArray = [];
//Unsplash API
const apiKey = 'mJwhVMrCFlbZernDrcRVjT9Tr6BRGQfnWjh5hkgke6M';
let count = 5;
const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=${Query}`;

function imageLoaded(){
	imagesLoaded++;
	if(imagesLoaded === totalImages){
		
		ready=true;
		loader.hidden=true;
		count=30;
	}
}
function setAttributes(element,attributes) {
	for( const key in attributes) {
		element.setAttribute(key,attributes[key]);
	}
}

//creat elements for links & photos
function displayPhotos(){
	imagesLoaded=0;
	totalImages=photosArray.length;
	photosArray.forEach((photos) => {

		const item = document.createElement('a');
		setAttributes( item,{
			href:photos.links.html,
			target:'_blank',
		});
        
		const img =document.createElement('img');
		setAttributes( img,{
			src:photos.urls.regular,
			alt:photos.alt_description,
			title:photos.alt_description,
		});
		
		img.addEventListener('load',imageLoaded);
		item.appendChild(img);
		imageContainer.appendChild(item);
	}); 
}

async function getPhoto() {
	try{
		const response = await fetch(apiUrl);
		photosArray= await response.json();
		displayPhotos();
	}catch(error){

	}
}

window.addEventListener('scroll',() => {
	if( window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
		ready=false;
		getPhoto();
	}
})

// onload
getPhoto();
