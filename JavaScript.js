var gatunek = new Array(5);

var film = new Array(9);

	film[0] = "Zielona mila";
	film[1] = "Skazani na Shawshank";
	film[2] = "Nietykalni";
	film[3] = "Forrest Gump";
	film[4] = "Władca Pierścieni Powrót króla";
	film[5] = "Lista Schindlera";
	film[6] = "Joker";
	film[7] = "Chłopcy z ferajny";
	film[8] = "Incepcja";
	film[9] = "James Bond Skyfall";

gatunek[0] = film;



var ksiazka = new Array(9);
	ksiazka[0] = "Pieśń o Achillesie";
	ksiazka[1] = "Żądze";
	ksiazka[2] = "Harry Potter";
	ksiazka[3] = "Egzekucja";
	ksiazka[4] = "Diuna";
	ksiazka[5] = "Złamane więzi";
	ksiazka[6] = "Niewinny";
	ksiazka[7] = "Bezwzględny";
	ksiazka[8] = "Siedem sióstr";
	ksiazka[9] = "Ostatni dom na zapomnianej ulicy";

gatunek [1] = ksiazka;

var przyslowia = new Array(9);
	przyslowia[0] = "co dwie głowy, to nie jedna";
	przyslowia[1] = "co kraj, to obyczaj";
	przyslowia[2] = "co marzec wypiecze, to kwiecień wysiecze";
	przyslowia[3] = "co za dużo, to niezdrowo";
	przyslowia[4] = "czas to pieniądz";
	przyslowia[5] = "dla towarzystwa dał się Cygan powiesić";
	przyslowia[6] = "gdy kota nie ma, myszy harcują";
	przyslowia[7] = "elektryka prąd nie tyka";
	przyslowia[8] = "dzieci i ryby głosu nie mają";
	przyslowia[9] = "do trzech razy sztuka";

gatunek [2] = przyslowia;

var gry = new Array(9);
	gry[0] = "league of legends";
	gry[1] = "Tomb rider";
	gry[2] = "grand theft Auto";
	gry[3] = "tekken";
	gry[4] = "hollow knight";
	gry[5] = "warcraft";
	gry[7] = "far cry";
	gry[8] = "age of empires";
	gry[9] = "diablo";

gatunek [3] = gry;

var seriale = new Array(9);

	seriale[0] = "squid game";
	seriale[1] = "czarnobyl";
	seriale[2] = "gra o tron";
	seriale[3] = "breaking bad";
	seriale[4] = "sherlock";
	seriale[5] = "narcos";
	seriale[6] = "prawo ulicy";
	seriale[7] = "wikingowie";
	seriale[8] = "czarne lustro";
	seriale[9] = "dom z papieru";

gatunek[4] = seriale;

var element = new Array ();
	
	element[0] = "tyt1";
	element[1] = "tyt2";
	element[2] = "tyt3";
	element[3] = "tyt4"
	element[4] = "tyt5";

var nazwy0 = "Filmy";
var nazwy1 = "Książki";
var nazwy2 = "Przysłowia";
var nazwy3 = "Gry";
var nazwy4 = "Seriale";

var losowanie = Math.floor(Math.random()*10);

var haslo = "";

var dlugosc;
var ile_skuch = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var haslo1 = "";

function dlugi()
{
for (i=0;i<dlugosc;i++)
{
	if(haslo.charAt(i)==" ")haslo1= haslo1 + " ";
	else haslo1 = haslo1 + "-";
}
}

function losowanie_hasel()
{
	if (losowanie>9) losowanie++;
		
}

function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
}

var numer;

var field;

function wybor(tresc_diva)
{
	var spr = true;
	

	
	var check = true
	var tresc_diva = "";
	
	tresc_diva = tresc_diva + '<div class="tytul" onclick="check1()" style="clear:both; id="'+element[0]+'">'+nazwy0+'</div>';

	tresc_diva = tresc_diva + '<div class="tytul" onclick="check2()" style="clear:both; id="'+element[1]+'">'+nazwy1+'</div>';
	
	tresc_diva = tresc_diva + '<div class="tytul" onclick="check3()" style="clear:both; id="'+element[2]+'">'+nazwy2+'</div>';
	
	tresc_diva = tresc_diva + '<div class="tytul" onclick="check4()" style="clear:both; id="'+element[3]+'">'+nazwy3+'</div>';
	
	tresc_diva = tresc_diva + '<div class="tytul" onclick="check5()" style="clear:both; id="'+element[4]+'">'+nazwy4+'</div>';
	
	document.getElementById("alfabet").innerHTML = tresc_diva;


	return tresc_diva;
}
window.onload = wybor;



function check1()
{
	haslo = film[losowanie];
	haslo = haslo.toUpperCase();
	dlugosc = haslo.length;
	dlugi();
	wypisz_haslo();
	start();
}

function check2()
{
	haslo = ksiazka[losowanie];
	haslo = haslo.toUpperCase();
	dlugosc = haslo.length;
	dlugi();
	wypisz_haslo();
	start();
}

function check3()
{
	haslo = przyslowia[losowanie];
	haslo = haslo.toUpperCase();
	dlugosc = haslo.length;
	dlugi();
	wypisz_haslo();
	start();
}

function check4()
{
	haslo = gry[losowanie];
	haslo = haslo.toUpperCase();
	dlugosc = haslo.length;
	dlugi();
	wypisz_haslo();
	start();
}

function check5()
{
	haslo = seriale[losowanie];
	haslo = haslo.toUpperCase();
	dlugosc = haslo.length;
	dlugi();
	wypisz_haslo();
	start();
}
var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

function start()
{
	var tresc_diva = "";
	
	for (i=0;i<=34;i++)
	{
		var element2 = "lit" + i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element2+'">'+litery[i]+'</div>';
		if ((i+1)%7==0)tresc_diva = tresc_diva + '<div style="clear:both;></div>"'
	}
	
	
	document.getElementById("alfabet").innerHTML = tresc_diva;
	
	
	wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}

function sprawdz(nr)
{	

	var trafiona = false;

	for(i=0;i<dlugosc; i++)
	{
		if(haslo.charAt(i)== litery[nr])
		{
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
			trafiona = true;
		}
	}
	if(trafiona == true)
	{
		yes.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		
		wypisz_haslo();
	}
	else
	{
		no.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick",";");
		
		//skucha
		ile_skuch++;
		var obraz = "img/s"+ile_skuch+".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';
	}
	
	//wygrana
	if(haslo == haslo1)
	document.getElementById("alfabet").innerHTML = "Tak jest! Podano prawidłowe hasło: "+haslo+
	'<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
	
	//przegrana
	if(ile_skuch>=9)
		document.getElementById("alfabet").innerHTML = "Przegrana! Prawidłowe hasło to: "+haslo+
	'<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
}