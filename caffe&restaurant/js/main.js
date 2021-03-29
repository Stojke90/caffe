// General
var caffeName = document.querySelector('header h2');
var navUl = document.querySelector('.nav');
var secAboutCafe = document.querySelector('.about');
var secMenu = document.querySelector('.menu');
var secWhereFoundCaffe = document.querySelector('.where');
var aboutButt = document.querySelector('.nav :first-child');
var menuButt = document.querySelector('.nav :nth-child(2)');
var whereButt = document.querySelector('.nav :nth-child(3)');


function createTagElement(type, property, path) {
	var element = document.createElement(type);
		element.innerHTML = property;
		if(type === 'img') {
			element.setAttribute('src',path);
		}
	return element;
};

// body
document.querySelector('body').style.backgroundImage = "url(https://wallpapercave.com/wp/wp1874155.jpg)";

// HEADER

caffeName.innerText = 'La Mamma Mia';

// Main

// first card
function cardAbout() {
	var firstText = createTagElement('p','The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
	var secondText = createTagElement('p','We  make pizza lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
	var imgOfRoom = createTagElement('img','','https://media.istockphoto.com/photos/interior-of-cozy-restaurant-loft-style-picture-id843610508?k=6&m=843610508&s=612x612&w=0&h=41DLQdNj3YtjIbSUQtX2zEvdJHAdHAq5c1MVS37VNzo=');
	var workTime = createTagElement('p','<span>Opening hours:</span> everyday from 9am to 9pm.');
	var address = createTagElement('p','<span>Address:</span> 15 Adr street, 5015, NY');

	var exitButt = createTagElement('button','X');

	secAboutCafe.prepend(exitButt, firstText, secondText, imgOfRoom, workTime, address);
}

////////////////////////////////////////////////////////////////////////////////////

function cardMenu() {
	var exitButt = createTagElement('button','X');
	var menu = createTagElement('div','<p>Drinks</p><p>Eat</p>');
	var drinks = createTagElement('article','');
	var meal = createTagElement('article','');

	mealAtributes(meal);
	drinksAtributes(drinks);
	secMenu.prepend(exitButt ,menu, drinks, meal);
	drinkS();
	pizzaS();
}

function attributes(element1, property, element2, id1, id2) {
		element1.style.backgroundImage = property;
		element1.setAttribute('id',id1);
	var element2 = createTagElement('aside','');
		element2.setAttribute('id', id2);
}

function drinksAtributes(drinks) {
		drinks.style.backgroundImage = 'url(https://st2.depositphotos.com/1036506/8355/i/950/depositphotos_83557876-stock-photo-old-paper-background-with-decorative.jpg)';
		drinks.setAttribute('id','cardDrinks');
	var textDrinks = createTagElement('aside','');
		textDrinks.setAttribute('id', 'drinks');

	drinks.prepend(textDrinks);
}

function mealAtributes(meal) {
		meal.style.backgroundImage = 'url(https://images.sampletemplates.com/wp-content/uploads/2015/07/07135454/Blank-Menu-on-the-Wooden-Board.jpg)';
		meal.setAttribute('id','mealCard');
	var textMeal = createTagElement('aside','');
		textMeal.setAttribute('id','eat');

	meal.prepend(textMeal);		
}


function drinkS() {
	
	var coffee = createTagElement('p','Coffee &#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46; 1.50 &#8364;');
	var espresso = createTagElement('p','Espresso  &#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;2.00 &#8364;');
	var esspresoMilk = createTagElement('p','Espresso with milk   &#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46; 2.25 &#8364;');
	var wather1 = createTagElement('p','Still water 0.33     &#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;1.00 &#8364;');
	var wather2 = createTagElement('p','Mineral water 0.33 &#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;1.00&#8364;');
	var cocoCola = createTagElement('p','Coca-Cola 0.33 &#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;1.85 &#8364;');
	var fanta = createTagElement('p','Fanta 0.33 &#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;1.85&#8364;');
	var juice = createTagElement('p','Juice 0.20 &#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;1.45 &#8364;');
	var redVine = createTagElement('p','Red wine 0.70 &#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;25.00 &#8364;');
	var whiteVine = createTagElement('p','White wine 0.70 &#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;25.00&#8364;');
	var wisky = createTagElement('p','Wisky 0.03 &#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;2.50 &#8364;');

	document.querySelector('#drinks').prepend(coffee, espresso, esspresoMilk, wather1, wather2, cocoCola, fanta, juice, redVine, whiteVine, wisky);

}


function pizzaS() {
	var margherita = createTagElement('p','Margherita &#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46; 14 &#8364;');
	var capricciosa = createTagElement('p','Capricciosa &#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46; 18 &#8364;');
	var stagioni = createTagElement('p','Quattro Stagioni &#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46; 17 &#8364;');
	var formaggi = createTagElement('p','Quattro Formaggi &#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;17 &#8364;');
	var vegeteriana = createTagElement('p','Vegeteriana &#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;14 &#8364;');
	var homeMade = createTagElement('p','La Mamma Mia &#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;&#46;20 &#8364;');

	document.querySelector('#eat').prepend(margherita, capricciosa, stagioni, formaggi, vegeteriana, homeMade);
}
///////////////////////////////////////////////////////////////////////////////////////
function where() {
	var text = createTagElement('p','Our location...');
	var exitButt = createTagElement('button','X');
	var fonNumber = createTagElement('p','<span>Conctac number:</span> 06x-xxx-xxx');
	secWhereFoundCaffe.prepend(exitButt, text);
	secWhereFoundCaffe.append(fonNumber);
}

////////////////////////////////////////////////////////////////////////////////
function clickEvent(element, elementS) {
		element.addEventListener('click', function(){
		elementS.style.display = 'block';
		elementS.style.animation = 'secondMOve 3s 0s linear';
	});

	elementS.firstElementChild.addEventListener('click', function(){
		elementS.style.animation = 'mymove 3s 0s linear';
		setTimeout(function(){
			elementS.style.display = 'none';
			elementS.style.animation= 'none';
		},2900);
	});
}
/////////////////////////////////////////////////////////////////////
function switchMenu() {
	/*eat*/
		document.querySelector('.menu div :nth-child(2)').addEventListener('click', function(e){
		document.querySelector('#cardDrinks').style.display = 'none';
		document.querySelector('#mealCard').style.display = 'block';
		document.querySelector('.menu div :nth-child(2)').style = 'background: linear-gradient(45deg, black, red)';
		document.querySelector('.menu div :first-child').style = 'background: none';
	});

	/*drink*/
	document.querySelector('.menu div :first-child').addEventListener('click', function(e){
		document.querySelector('#mealCard').style.display = 'none';
		document.querySelector('#cardDrinks').style.display = 'block';
		document.querySelector('.menu div :first-child').style = 'background: linear-gradient(45deg, black, red)';
		document.querySelector('.menu div :nth-child(2)').style = 'background: none';
	});
}





/////////////////////////////////////////////////////////////////////////
cardAbout();
cardMenu();
where();

clickEvent(menuButt, secMenu);
clickEvent(aboutButt, secAboutCafe);
clickEvent(whereButt, secWhereFoundCaffe);

switchMenu();


