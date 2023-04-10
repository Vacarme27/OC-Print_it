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
let timerSlide = setInterval(timer, 3000);

//____________Flèche gauche____________

arrowLeft.addEventListener("click", function(){	
	clearInterval(timerSlide)
	if (i === 0) {
		i = totalSlides - 1;
	}
	else {
		i--;
	}
	moveSlide();
	timerSlide = setInterval(timer, 3000);
});

//____________Flèche droite____________

arrowRight.addEventListener("click", function(){	
	clearInterval(timerSlide)
	if (i === totalSlides -1){
		i = 0;		
	}
	else {
		i++;
	}moveSlide();
	timerSlide = setInterval(timer, 3000);	
});

//___________Clique Dot___________

// On appelle la fonction clickDot lorsqu'on clique sur un dot
const dots = document.querySelectorAll(".dot");
for (let j = 0; j < dots.length; j++){
	dots[j].addEventListener("click", clickDot);
}

//_________Fonctions_______ //

//Changement image et tagline selon l'indice de [slides]
function moveSlide(){
	bannerImg.src = `assets/images/slideshow/${slides[i].image}`;
	bannerTxt.innerHTML = slides[i].tagLine;
	linkDot();	
}

//Suppression et ajout de la class "dot_selected : permet de lier les dots aux slides" 
function linkDot(){
	const link = document.getElementsByClassName("dot");	
	for (let i = 0; i < link.length; i++){		
		link[i].classList.remove("dot-selected");
	}
	link[i].classList.add("dot-selected");	
}

//On lie le click d'un dot à l'indice correspondant à l'image grâce à l'attribut "data-imageindex" et change la valeur de "i"
function clickDot(clickEvent){
	clearInterval(timerSlide);
	const dot = clickEvent.target;
	i = parseInt(dot.dataset.imageindex);//parseInt permet de transformer une chaîne de caractères en entier
	moveSlide();
	timerSlide = setInterval(timer, 3000);
}

//Fonction qui determine les conditions du "setInterval", ce qui permet de boucler le défilement du carrousel
function timer (){	
	if (i === totalSlides -1) {
		i = 0;
	}
	else{
		i++;
	}
	moveSlide();
}