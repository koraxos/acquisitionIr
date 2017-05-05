function point(temps,coordX,coordY){
	this.t=temps;
	this.coordX=coordX;
	this.coordY=coordY;
}

var sketch=function(p){
		p.setup=function(){
			p.resizeCanvas(800,600);
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

	tableauPoints.push(p);
}

function view(){

	var finalArray= []
	tableauPoints.forEach(function(element){

		if((element.coordX>=0&&element.coordX<=800)&&(element.coordY>=0&&element.coordY<=600)){
      element.t=element.t.toString().slice(0,9);
      element.coordX=element.coordX.toString().slice(0,7);
			element.coordY=element.coordY.toString().slice(0,7);
      finalArray.push(element);
		}
	});
	
  /*console.log(finalArray);*/
	/*console.log(choice);*/

	$.ajax({
    type: "POST",
    url: "./script/inserFile.php",
    data: {'mydata' :JSON.stringify(finalArray),'dataType':choice},
    cache: false
  });

};	

function effacer(){
myp5.remove();
myp5=new p5(sketch,'pcontainer');
tableauPoints=[];
}

var tableauPoints=[];
var choices=["A","B","C","D"];
var choice="";

function randomChoice(){
	return choice=choices[Math.floor(Math.random() * choices.length)];
}

$(document).ready(function() {

	/*randomize();*/

	$("img.img-thumbnail").attr({src:"GIFPaint"+randomChoice()+".gif"});


var progressTimer;
var progressbar = $("div#progressbar");
var progressLabel = $("div.progress-label");
var dialogButtons = [{
		"class":"btn btn-primary",
        text: "Fermer",
        disabled:true,
        click: closeDownload
      }];

      dialog = $( "#dialog" ).dialog({
        autoOpen: false,
        closeOnEscape: false,
        show: { effect: "blind", duration: 800 },
        resizable: false,
        modal:true,
        position:{
		my: "top-100%",
  		at: "center",
  		of: "#pcontainer"
        },
        buttons: dialogButtons,
        open: function() {
          progressTimer = setTimeout( progress, 2000 );
        },
      });

      downloadButton = $( "#downloadButton" )
        .button()
        .on( "click", function() {
          $( this ).button( "option", {
            disabled: true,
            label: "Downloading..."
          });
          dialog.dialog( "open" );
        });
 
    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( "Progression :" + progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Fini!" );
        dialog.dialog( "option", "buttons", [{
         "class":"btn btn-primary",
        text: "Fermer",
        disabled:false,
        click: closeDownload
        }]);
        $(".ui-dialog button").last().trigger( "focus" );
      }
    });

    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
 
      progressbar.progressbar( "value", val + Math.floor( Math.random() * 3 ) );
 
      if ( val <= 99 ) {
        progressTimer = setTimeout( progress, 50 );
      }
    }
 
    function closeDownload() {
      clearTimeout( progressTimer );
      dialog
        .dialog( "option", "buttons", dialogButtons )
        .dialog( "close" );
      progressbar.progressbar( "value", false );
      progressLabel
        .text( "" );
      downloadButton.trigger( "focus" );
      effacer();
	};   

	$("li#downloadButton").on("click",function(event){
	choice=randomChoice();
	/*console.log(choice);*/

	$("img.img-thumbnail").attr({src:"GIFPaint"+choice+".gif"});
});

});	



