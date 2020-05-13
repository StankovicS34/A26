 var audio;
 function wikipedia(a,b){
	 if (b==1)
	 switch(a){
	 case 1:
	 window.open("https://sh.wikipedia.org/wiki/Bas-gitara");
	 break;
	 case 2:
	 window.open("https://sh.wikipedia.org/wiki/Truba");
	 break;
	 case 3:
	 window.open("https://sh.wikipedia.org/wiki/Bubnjevi");
	 break;
	 case 4:
	 window.open("https://sh.wikipedia.org/wiki/Flauta");
	 break;
	 case 5:
	  window.open("https://sh.wikipedia.org/wiki/Klavir");
	  break;
	 case 6:
	  window.open("https://sh.wikipedia.org/wiki/Klarinet");
	  break;
	   }

	 
	 else{
		 switch(a){
		 
	 case 1:
	  audio = new Audio('bass.wav');
	 break;
	 case 2:
	  audio = new Audio('trumpet.wav');
	 break;
	 case 3:
	  audio = new Audio('drumms.wav');
	 break;
	 case 4:
	  audio = new Audio('flute.wav');
	 break;
	 case 5:
	   audio = new Audio('piano.wav');
	  break;
	 case 6:
	   audio = new Audio('clarinet.wav');
	  break;
	  }
	  audio.play();
	 }
	 
 }
 function zaustavi(){
	 audio.pause();
 }