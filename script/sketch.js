function point(temps,coordX,coordY){
	this.t=temps;
	this.coordX=coordX;
	this.coordY=coordY;
}

var tableauPoints=[];

var sketch=function(p){
		p.setup=function(){
			p.createCanvas(800,600);
		};

		p.draw=function(){
		
			if(p.mouseIsPressed ==true){
				p.line(p.mouseX,p.mouseY,p.pmouseX,p.pmouseY);
				acquisiton(p.millis(),p.mouseX,p.mouseY);
			}
		};
}

var myp5=new p5(sketch,'pcontainer');

var acquisiton=function(temps,coordX,coordY){
	var p =new point();
	p.constructor(temps,coordX,coordY);
	/*p.t=new Number(temps);
	p.x=new Number(coordX);
	p.y=new Number(coordY);*/


	/*var p = new point(temps,coordX,coordY);*/
	tableauPoints.push(p);
}

function view(){

	console.log(tableauPoints);
	var finalArray= []
	tableauPoints.forEach(function(element){
		if(element.coordX>=0&&element.coordY>=0){
			finalArray.push(element);
		}


	});
	
	console.log(finalArray);

	$.ajax({
    type: "POST",
    url: "./script/inserFile.php",
    data: {'mydata' :JSON.stringify(finalArray)},
    cache: false
  });

/*
Parameters
path 	String:

name of the file or url to load
[datatype] 	String:

"json", "jsonp", "xml", or "text"
[data] 	Object:

param data passed sent with request
[callback] 	Function:

function to be executed after httpGet() completes, data is passed in as first argument
[errorCallback] 	Function:

function to be executed if there is an error, response is passed in as first argument*/	

//save(myJSON, 'my.json');  
//myp5.save(tableauPoints,'my.json');
}

function erase(){
myp5.remove();
myp5=new p5(sketch,'pcontainer');
tableauPoints=[];
}
/*

u842927745_bdd
user u842927745_oli
mp bdd tutFhqaf8mZ*/
/*
Si on ne fait as de calcul de courbure.
Normaliser le temps  en commencant à 0.
Normaliser les coordonnées dans une fenètre avant d'enreigstrer

pour normaliser les points.

on a un centre bas-gauche (0,0) et on veut que le coin haut droit soit (1,1)


tester de réafficher
 les points en chargant le fichier 
 pour voir si le logiciel d'acquisiton fonctionne bien
 Ou redéssiner la lettre

ANN
 lien cs.stanford.edu/people/karpathy/convnetjs
*/