const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const bannerTxt = document.querySelector("#banner > p");

const totalSlides = slides.length;

let i = 0;
let timer;

timerSlide();

arrowLeft.addEventListener("click", function(){
	clearTimeout(timer);
	if (i === 0) {
		i = totalSlides - 1;
	}
	else {
		i--;
	}moveSlide();
	timerSlide();
});

arrowRight.addEventListener("click", function(){
	clearTimeout(timer);
	if (i === totalSlides -1){
		i = 0;		
	}
	else {
		i++;
	}moveSlide();
	timerSlide();
});


//_________Fonction_______ //


//Changement image et tagline selon l'indice de [slides]
function moveSlide(){
	bannerImg.src = `assets/images/slideshow/${slides[i].image}`;
	bannerTxt.innerHTML = slides[i].tagLine;
	linkDot();
}

//Suppression et ajout de la class "dot_selected : les " 
function linkDot(){
	const link = document.getElementsByClassName("dot");
	for (let i = 0; i < link.length; i++){
		link[i].classList.remove("dot_selected");		
	}
	link[i].classList.add("dot_selected");
}


//Timer des slides
function timerSlide(){
	timer = setTimeout(function(){
		if (i === totalSlides -1){
			i = 0;
		}
		else{
			i++
		}
		moveSlide();
		timerSlide();
	},3000);
}