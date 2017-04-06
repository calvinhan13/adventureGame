var table = [["X", "X"," ", "X", " ", " ", "X", "X"], 
			[" ", " "," ", " ", "X", " ", " ", "X"],
			[" ", " "," ", " ", " ", "X", " ", " "],
			["X", " "," ", " ", " ", " ", " ", " "],
			[" ", " "," ", "X", " ", " ", "X", "X"],
			["X", " "," ", " ", " ", " ", " ", " "],
			[" ", " ","X", " ", "X", " ", " ", " "],
			["X", " "," ", " ", " ", "X", "X", "X"]];


var challenge1 = {monster:"C1", hp: 130, prize: "skittles", runChallenge1: function()
{
	document.getElementById("challenge").innerHTML = "You have encountered skittles, battle? YES/NO?";

	document.getElementById("yes").disabled = false;
	document.getElementById("no").disabled = false;
	document.getElementById("up").disabled = true;
	document.getElementById("down").disabled = true;
	document.getElementById("left").disabled = true;
	document.getElementById("right").disabled = true;

	document.getElementById("yes").onclick = function() 
	{
		if(HP > 300)
		{
			HP -= 300;
			document.getElementById("challenge").innerHTML = "You have been hit 130 HP<br>current hp: " + HP + " HP</br><br>You have killed the skittles</br>Reward: " + challenge1.prize;
			adventure.prize[0] = challenge1.prize;
			document.getElementById("up").disabled = false;
			document.getElementById("down").disabled = false;
			document.getElementById("left").disabled = false;
			document.getElementById("right").disabled = false;
			document.getElementById("yes").disabled = true;
			document.getElementById("no").disabled = true;
		}
		else
		{
			document.write("you died GAMEOVER");
		}
	}

	document.getElementById("no").onclick = function() 
	{
		document.getElementById("challenge").innerHTML = "you ran away";
		document.getElementById("up").disabled = false;
		document.getElementById("down").disabled = false;
		document.getElementById("left").disabled = false;
		document.getElementById("right").disabled = false;
		document.getElementById("yes").disabled = true;
		document.getElementById("no").disabled = true;
	};

}}

var challenge2 = {monster:"C2", hp: 100, prize: "opium", runChallenge2: function(){
				
	document.getElementById("challenge").innerHTML = "You have encountered a YOLOSWAGLORD 5000, battle? Y/N";

	document.getElementById("yes").disabled = false;
	document.getElementById("no").disabled = false;
	document.getElementById("up").disabled = true;
	document.getElementById("down").disabled = true;
	document.getElementById("left").disabled = true;
	document.getElementById("right").disabled = true;

	document.getElementById("yes").onclick = function() 
	{
		if(HP > 1000)
		{
			HP -= 1000;
			document.getElementById("challenge").innerHTML = "You have been hit 1000 HP<br>current hp: " + HP + " HP</br><br>You have killed YOLOSWAGLORD 5000</br>Reward: " + challenge2.prize;
			adventure.prize[1] = challenge2.prize;
			document.getElementById("up").disabled = false;
			document.getElementById("down").disabled = false;
			document.getElementById("left").disabled = false;
			document.getElementById("right").disabled = false;
			document.getElementById("yes").disabled = true;
			document.getElementById("no").disabled = true;
		}
		else
		{
			document.write("you died GAMEOVER");
		}
	}
	
	document.getElementById("no").onclick = function() 
	{
		document.getElementById("challenge").innerHTML = "you ran away";
		document.getElementById("up").disabled = false;
		document.getElementById("down").disabled = false;
		document.getElementById("left").disabled = false;
		document.getElementById("right").disabled = false;
		document.getElementById("yes").disabled = true;
		document.getElementById("no").disabled = true;
	};
}}

var challenge3 = {monster:"C3", hp: 200, prize: "a slap", runChallenge3: function(){

	document.getElementById("challenge").innerHTML = "You have encountered ex, battle? YES/no";

	document.getElementById("yes").disabled = false;
	document.getElementById("no").disabled = false;
	document.getElementById("up").disabled = true;
	document.getElementById("down").disabled = true;
	document.getElementById("left").disabled = true;
	document.getElementById("right").disabled = true;
					
	document.getElementById("yes").onclick = function() 
	{
		if(HP > 1000)
		{
			HP -= 1000;
			document.getElementById("challenge").innerHTML = "You have been hit 700 HP<br>current hp: " + HP + " HP</br><br>You have survived your ex</br>Reward: " + challenge3.prize;
			adventure.prize[2] = challenge3.prize;
			document.getElementById("up").disabled = false;
			document.getElementById("down").disabled = false;
			document.getElementById("left").disabled = false;
			document.getElementById("right").disabled = false;
			document.getElementById("yes").disabled = true;
			document.getElementById("no").disabled = true;
		}
		else
		{
			document.write("you died GAMEOVER");
		}
	}
	
	document.getElementById("no").onclick = function() 
	{
		document.getElementById("challenge").innerHTML = "you ran away";
		document.getElementById("up").disabled = false;
		document.getElementById("down").disabled = false;
		document.getElementById("left").disabled = false;
		document.getElementById("right").disabled = false;
		document.getElementById("yes").disabled = true;
		document.getElementById("no").disabled = true;
	};
}}

var challenge4 = {monster:"C4", hp: 600, prize: "banana", runChallenge4: function(){
				
	document.getElementById("challenge").innerHTML = "You have encountered a monkey puppy baby, battle? Y/N";

	document.getElementById("up").disabled = true;
	document.getElementById("down").disabled = true;
	document.getElementById("left").disabled = true;
	document.getElementById("right").disabled = true;
	document.getElementById("yes").disabled = false;
	document.getElementById("no").disabled = false;

	document.getElementById("yes").onclick = function() 
	{
		if(HP > 1300)
		{
			HP -= 1300;
			document.getElementById("challenge").innerHTML = "You have been hit 900 HP<br>current hp: " + HP + " HP</br><br>You have survived the monkey puppy baby</br>Reward: " + challenge4.prize;
			adventure.prize[3] = challenge4.prize;
			document.getElementById("up").disabled = false;
			document.getElementById("down").disabled = false;
			document.getElementById("left").disabled = false;
			document.getElementById("right").disabled = false;
			document.getElementById("yes").disabled = true;
			document.getElementById("no").disabled = true;
		}
		else
		{
			document.write("you died GAMEOVER");
		}
	}

	document.getElementById("no").onclick = function() 
	{
		document.getElementById("challenge").innerHTML = "you ran away";
		document.getElementById("up").disabled = false;
		document.getElementById("down").disabled = false;
		document.getElementById("left").disabled = false;
		document.getElementById("right").disabled = false;
		document.getElementById("yes").disabled = true;
		document.getElementById("no").disabled = true;
	};
}}


var adventure = {name: "Adventurer", hp: 4000, prize: [" ", " "," " ," "]};

var initial = "Start";
var ending = "End";

var rows = Math.floor(Math.random()*(table.length));
var columns = Math.floor(Math.random()*(table.length));

var rows1 = Math.floor(Math.random()*(table.length));
var columns1 = Math.floor(Math.random()*(table.length));

var HP = 5000;

table[1][3] = challenge1.monster;
table[3][4] = challenge1.monster;
table[1][6] = challenge2.monster;
table[6][1] = challenge2.monster;
table[1][4] = challenge2.monster;
table[2][3] = challenge3.monster;
table[1][1] = challenge3.monster;
table[2][6] = challenge4.monster;
table[3][2] = challenge4.monster;

randomizer();
grid(8,8);


function grid (row,column){

	document.write("<table style ='border-collapse: collapse; width: 500px; height: 500px;background-color:#000000; border: 1px solid white;'>");

	for(var i = 0; i < row; i++)
	{
		document.write("<tr>");
    	for(var j =0; j < column; j++)
    	{
        	document.write("<td style='color: black; background-color:#000000; width: 900px;border: 1px solid white'>" + table[i][j]+ "</td>");

   		}
   		document.write("</tr>");
	}
	document.write("</table>");
}


function randomizer(){

	if((table[rows][columns] == " ") && (table[rows1][columns1] == " "))
	{
		if((table[rows][columns] == ending) || (table[rows1][columns1] == initial))
		{
			rows = Math.floor(Math.random()*(table.length));
  			columns = Math.floor(Math.random()*(table.length));
  			rows1 = Math.floor(Math.random()*(table.length));
 			columns1 = Math.floor(Math.random()*(table.length));
    		randomizer();
		}
		table[rows][columns] = initial; 
		table[rows1][columns1] = ending;
	} 
	else 
	{
		rows = Math.floor(Math.random()*(table.length));
		columns = Math.floor(Math.random()*(table.length));
		rows1 = Math.floor(Math.random()*(table.length));
		columns1 = Math.floor(Math.random()*(table.length));
	   	randomizer();
	}
}



window.onload = function adventure() {

	document.getElementById("up").onclick = function() {

		//moves up by 1 cell
		rows--;

    	document.getElementById("down").disabled = false;
   		document.getElementById("right").disabled = false;
   		document.getElementById("left").disabled = false;

		if(table[rows][columns] == "X")
		{
			//if its a wall, goes back to previous spot & color the wall
			table[rows][columns] = wall();
			rows++;
			document.getElementById("header").innerHTML = "You hit a wall!";
			document.getElementById("up").disabled = true;
		}
		else if(table[rows][columns] == ending)
		{
			document.write("YOU HAVE WON!");
		}
		else if(table[rows][columns] == "C1" || table[rows][columns] == "C2" || 
				table[rows][columns] == "C3"|| table[rows][columns] == "C4")
		{
			document.getElementById("up").disabled = false;
			abilities();
			document.getElementById("header").innerHTML = "Current position: "+ rows + " " + columns;
			table[rows][columns] = move();
		}
		else if(rows == -1)
		{
			document.getElementById("up").disabled = true;
			rows ++;
		}
		else
			document.getElementById("up").disabled = false;
			document.getElementById("header").innerHTML = "Current position: "+ rows + " " + columns;
			table[rows][columns] = initial;
			table[rows][columns] = move();
	};

  	document.getElementById("down").onclick = function() {

    	rows++;

    	document.getElementById("up").disabled = false;
   		document.getElementById("left").disabled = false;
   		document.getElementById("right").disabled = false;

		if(table[rows][columns] == "X")
		{
			table[rows][columns] = wall();
			rows--;
			document.getElementById("header").innerHTML = "You hit a wall!";
			document.getElementById("down").disabled = true;
		}
		else if(table[rows][columns] == ending)
		{
			document.write("YOU HAVE WON!");
		}
		else if(table[rows][columns] == "C1" || table[rows][columns] == "C2" || 
				table[rows][columns] == "C3"|| table[rows][columns] == "C4")
		{
			document.getElementById("down").disabled = false;
			abilities();
			document.getElementById("header").innerHTML = "Current position: "+ rows + " " + columns;
			table[rows][columns] = move();
		}
		else if(rows == 8)
		{
			document.getElementById("down").disabled = true;
			rows --;
		}
		else
			document.getElementById("down").disabled = false;
			document.getElementById("header").innerHTML = "Current position: "+ rows + " " + columns;
			table[rows][columns] = initial;
			table[rows][columns] = move();
	};

  	document.getElementById("left").onclick = function() {

   		columns--;

   		document.getElementById("up").disabled = false;
   		document.getElementById("down").disabled = false;
   		document.getElementById("right").disabled = false;

		if(table[rows][columns] == "X")
		{
			table[rows][columns] = wall();
			columns++;
			document.getElementById("header").innerHTML = "You hit a wall!";
			document.getElementById("left").disabled = true;
		}
			else if(table[rows][columns] == ending)
		{
			document.write("YOU HAVE WON!");
		}
		else if(table[rows][columns] == "C1" || table[rows][columns] == "C2" || 
				table[rows][columns] == "C3"|| table[rows][columns] == "C4")
		{
			document.getElementById("left").disabled = false;
			abilities();
			document.getElementById("header").innerHTML = "Current position: "+ rows + " " + columns;
			table[rows][columns] = move();
		}
		else if(columns == -1)
		{
			document.getElementById("left").disabled = true;
			columns++;
		}
		else
			document.getElementById("left").disabled = false;
			document.getElementById("header").innerHTML = "Current position: "+ rows + " " + columns;
			table[rows][columns] = initial;
			table[rows][columns] = move();
	};

 	document.getElementById("right").onclick = function() {

  		columns++;

   		document.getElementById("up").disabled = false;
   		document.getElementById("down").disabled = false;
   		document.getElementById("left").disabled = false;

		if(table[rows][columns] == "X")
		{
			table[rows][columns] = wall();
			columns--;
			document.getElementById("header").innerHTML = "You hit a wall!";
			document.getElementById("right").disabled = true;
		}
		else if(table[rows][columns] == ending)
		{
			document.write("WINNER!");
		}
		else if(table[rows][columns] == "C1" || table[rows][columns] == "C2" || 
				table[rows][columns] == "C3"|| table[rows][columns] == "C4")
		{
			document.getElementById("right").disabled = false;
			abilities();
			document.getElementById("header").innerHTML = "Current position: "+ rows + " " + columns;
			table[rows][columns] = move();
		}
		else if(columns == 8)
		{
			document.getElementById("right").disabled = true;
			columns--;
		}
		else
			document.getElementById("right").disabled = false;
			document.getElementById("header").innerHTML = "Current position: "+ rows + " " + columns;
			table[rows][columns] = initial;
			table[rows][columns] = move();
	};
};


function move(){ 
	var y = document.getElementsByTagName("tr")[rows].getElementsByTagName("td")[columns].style.backgroundColor = "orange";
}

function wall(){     
	var x = document.getElementsByTagName("tr")[rows].getElementsByTagName("td")[columns].style.backgroundColor = "blue";
}


function abilities(){

			if(table[rows][columns] == challenge1.monster)
			{
				challenge1.runChallenge1();			
			}
			if(table[rows][columns] == challenge2.monster)
			{
				challenge2.runChallenge2();
			}
			if(table[rows][columns] == challenge3.monster)
			{
				challenge3.runChallenge3();
			}
			if(table[rows][columns] == challenge4.monster)
			{
				challenge4.runChallenge4();
			}
		}