
	var canvas = document.getElementById('myCanvas');
	//var style = canvas.style;
	var context = canvas.getContext('2d');
	//style.marginLeft = "auto";
	//style.marginRight = "auto";
	//var parentStyle = canvas.parentElement.style;
	//parentStyle.textAlign = "center";
	//parentStyle.width = "100%";

	var selected = 0;
	var boardSelected = 1;

	var player = [10];
	for(i = 0; i< 10; i++)
		player[i] = "No Data";

	var score = [10];
	for(i = 0; i< 10; i++)
		score[i] = 0;
	//Creates the 2D array and sets each value to 0
	var board = [9];
	for(i = 0; i < 9; i++)
		board[i] = [9];
	for(i = 0; i < 9; i++)
	{
		for(j = 0; j < 9; j++)
		{
			board[i][j] = 0;
		}
	}

	var correctOne = [18];
		for(i = 0; i < 18; i++)
			correctOne[i] = 0;
	var correctTwo = [3];
		for(i = 0; i<3; i++)
			correctTwo[i] = [3];

	drawBoard();
	board1();

	//Taken from the tictactoe project
	function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
			x: evt.clientX - rect.left,
			y: evt.clientY - rect.top
		};
	}

	/* 
		addEventListener:
			this function runs whenver someone clicks the mouse

		the x-coordinate of the mouse click is stored in mousePos.x
		the y-coordinate of the mouse click is stored in mousePos.y

		a message describing where the mouse was clicked is painted on the canvas
	*/
	canvas.addEventListener('mousedown', function(evt) {
		/******************************************/
			// don't change this code
    	var mousePos = getMousePos(canvas, evt);

		//numberNine(evt.clientX, evt.clientY);
		

		select(evt.clientX, evt.clientY);
		console.log("Selected = %d", selected);
		

				if(selected == 1)
				{
					numberOne(evt.clientX, evt.clientY);
				}		
				if(selected == 2)
				{
					numberTwo(evt.clientX, evt.clientY);
				}
				if(selected == 3)
				{
					numberThree(evt.clientX, evt.clientY);
				}
				if(selected == 4)
				{
					numberFour(evt.clientX, evt.clientY);
				}
				if(selected == 5)
				{
					numberFive(evt.clientX, evt.clientY);
				}
				if(selected == 6)
				{
					numberSix(evt.clientX, evt.clientY);
				}
				if(selected == 7)
				{
					numberSeven(evt.clientX, evt.clientY);
				}
				if(selected == 8)
				{
					numberEight(evt.clientX, evt.clientY);
				}
				if(selected == 9)
				{
					numberNine(evt.clientX, evt.clientY);
				}	

	//console.log("board[0][0] = %d" , board[0][0]);//testing
	//console.log("board[0][1] = %d" , board[0][1]);//testing

	}, false);

	//To draw the 9X9 Board, the select number boxes, and the select numbers
	function drawBoard()
	{
		//Draw 9x9 board
		context.beginPath();
		context.moveTo(50, 0);
		context.lineTo(50, 450);
		context.stroke();
		
		context.beginPath();
		context.moveTo(49, 0);
		context.lineTo(49, 450);
		context.stroke();

		context.beginPath();
		context.moveTo(48, 0);
		context.lineTo(48, 450);
		context.stroke();		
	
		context.beginPath();
		context.moveTo(100, 0);
		context.lineTo(100, 450);
		context.stroke();		
	
		context.beginPath();
		context.moveTo(150, 0);
		context.lineTo(150, 450);
		context.stroke();

		context.beginPath();
		context.moveTo(199, 0);
		context.lineTo(199, 450);
		context.stroke();		
	
		context.beginPath();
		context.moveTo(200, 0);
		context.lineTo(200, 450);
		context.stroke();		

		context.beginPath();
		context.moveTo(201, 0);
		context.lineTo(201, 450);
		context.stroke();	

		context.beginPath();
		context.moveTo(250, 0);
		context.lineTo(250, 450);
		context.stroke();		
	
		context.beginPath();
		context.moveTo(300, 0);
		context.lineTo(300, 450);
		context.stroke();		
	
		context.beginPath();
		context.moveTo(349, 0);
		context.lineTo(349, 450);
		context.stroke();

		context.beginPath();
		context.moveTo(350, 0);
		context.lineTo(350, 450);
		context.stroke();

		context.beginPath();
		context.moveTo(351, 0);
		context.lineTo(351, 450);
		context.stroke();		
	
		context.beginPath();
		context.moveTo(400, 0);
		context.lineTo(400, 450);
		context.stroke();		
	
		context.beginPath();
		context.moveTo(450, 0);
		context.lineTo(450, 450);
		context.stroke();		
	
		context.beginPath();
		context.moveTo(500, 0);
		context.lineTo(500, 450);
		context.stroke();

		context.beginPath();
		context.moveTo(501, 0);
		context.lineTo(501, 450);
		context.stroke();

		context.beginPath();
		context.moveTo(502, 0);
		context.lineTo(502, 450);
		context.stroke();			

		context.beginPath();
		context.moveTo(50, 0);
		context.lineTo(500, 0);
		context.stroke();

		context.beginPath();
		context.moveTo(50, 1);
		context.lineTo(500, 1);
		context.stroke();

		context.beginPath();
		context.moveTo(50, 2);
		context.lineTo(500, 2);
		context.stroke();		
	
		context.beginPath();
		context.moveTo(50, 50);
		context.lineTo(500, 50);
		context.stroke();		
	
		context.beginPath();
		context.moveTo(50, 100);
		context.lineTo(500, 100);
		context.stroke();

		context.beginPath();
		context.moveTo(50, 149);
		context.lineTo(500, 149);
		context.stroke();		
	
		context.beginPath();
		context.moveTo(50, 150);
		context.lineTo(500, 150);
		context.stroke();

		context.beginPath();
		context.moveTo(50, 151);
		context.lineTo(500, 151);
		context.stroke();		
	
		context.beginPath();
		context.moveTo(50, 200);
		context.lineTo(500, 200);
		context.stroke();		
	
		context.beginPath();
		context.moveTo(50, 250);
		context.lineTo(500, 250);
		context.stroke();

		context.beginPath();
		context.moveTo(50, 299);
		context.lineTo(500, 299);
		context.stroke();		
	
		context.beginPath();
		context.moveTo(50, 300);
		context.lineTo(500, 300);
		context.stroke();

		context.beginPath();
		context.moveTo(50, 301);
		context.lineTo(500, 301);
		context.stroke();		
	
		context.beginPath();
		context.moveTo(50, 350);
		context.lineTo(500, 350);
		context.stroke();		
	
		context.beginPath();
		context.moveTo(50, 400);
		context.lineTo(500, 400);
		context.stroke();		
	
		context.beginPath();
		context.moveTo(47, 450);
		context.lineTo(503, 450);
		context.stroke();

		context.beginPath();
		context.moveTo(47, 451);
		context.lineTo(503, 451);
		context.stroke();

		context.beginPath();
		context.moveTo(47, 452);
		context.lineTo(503, 452);
		context.stroke();

		//Draw select number boxes
		context.beginPath();
		context.moveTo(50, 550);
		context.lineTo(500, 550);
		context.stroke();

		context.beginPath();
		context.moveTo(50, 500);
		context.lineTo(500, 500);
		context.stroke();

		context.beginPath();
		context.moveTo(50, 550);
		context.lineTo(50, 500);
		context.stroke();

		context.beginPath();
		context.moveTo(100, 550);
		context.lineTo(100, 500);
		context.stroke();

		context.beginPath();
		context.moveTo(150, 550);
		context.lineTo(150, 500);
		context.stroke();

		context.beginPath();
		context.moveTo(200, 550);
		context.lineTo(200, 500);
		context.stroke();

		context.beginPath();
		context.moveTo(250, 550);
		context.lineTo(250, 500);
		context.stroke();

		context.beginPath();
		context.moveTo(300, 550);
		context.lineTo(300, 500);
		context.stroke();

		context.beginPath();
		context.moveTo(350, 550);
		context.lineTo(350, 500);
		context.stroke();

		context.beginPath();
		context.moveTo(400, 550);
		context.lineTo(400, 500);
		context.stroke();

		context.beginPath();
		context.moveTo(450, 550);
		context.lineTo(450, 500);
		context.stroke();

		context.beginPath();
		context.moveTo(500, 550);
		context.lineTo(500, 500);
		context.stroke();

		//Draw select numbers
			//selectOne
			context.beginPath();
			context.moveTo(75 - 7,525 - 9);
			context.lineTo(75, 525 - 15);
			context.stroke();
	
			context.beginPath();
			context.moveTo(75, 525 - 15);
			context.lineTo(75, 525 + 15);
			context.stroke();

			context.beginPath();
			context.moveTo(75 - 7, 525 + 15);
			context.lineTo(75 + 7, 525 + 15);
			context.stroke();

			//selectTwo
			context.beginPath();
			context.moveTo(125 - 7,525 - 15);
			context.lineTo(125 + 7, 525 - 15);
			context.stroke();
	
			context.beginPath();
			context.moveTo(125 + 7, 525 - 15);
			context.lineTo(125 + 7, 525);
			context.stroke();

			context.beginPath();
			context.moveTo(125 + 7, 525);
			context.lineTo(125 - 7, 525);
			context.stroke();

			context.beginPath();
			context.moveTo(125 - 7,525);
			context.lineTo(125 - 7, 525 + 15);
			context.stroke();
	
			context.beginPath();
			context.moveTo(125 - 7, 525 + 15);
			context.lineTo(125 + 7, 525 + 15);
			context.stroke();

			//selectThree
			context.beginPath();
			context.moveTo(175 - 7,525 - 15);
			context.lineTo(175 + 7, 525 - 15);
			context.stroke();
	
			context.beginPath();
			context.moveTo(175 + 7, 525 - 15);
			context.lineTo(175 + 7, 525);
			context.stroke();

			context.beginPath();
			context.moveTo(175 + 7, 525);
			context.lineTo(175 - 7, 525);
			context.stroke();

			context.beginPath();
			context.moveTo(175 + 7,525);
			context.lineTo(175 + 7, 525 + 15);
			context.stroke();
	
			context.beginPath();
			context.moveTo(175 - 7, 525 + 15);
			context.lineTo(175 + 7, 525 + 15);
			context.stroke();

			//selectFour
			context.beginPath();
			context.moveTo(225 + 7, 525 - 15);
			context.lineTo(225 + 7, 525 + 15);
			context.stroke();

			context.beginPath();
			context.moveTo(225 + 7, 525);
			context.lineTo(225 - 7, 525);
			context.stroke();

			context.beginPath();
			context.moveTo(225 - 7,525);
			context.lineTo(225 - 7, 525 - 15);
			context.stroke();

			//selectFive
			context.beginPath();
			context.moveTo(275 - 7,525 - 15);
			context.lineTo(275 + 7, 525 - 15);
			context.stroke();
	
			context.beginPath();
			context.moveTo(275 - 7, 525 - 15);
			context.lineTo(275 - 7, 525);
			context.stroke();

			context.beginPath();
			context.moveTo(275 + 7, 525);
			context.lineTo(275 - 7, 525);
			context.stroke();

			context.beginPath();
			context.moveTo(275 + 7,525);
			context.lineTo(275 + 7, 525 + 15);
			context.stroke();
	
			context.beginPath();
			context.moveTo(275 - 7, 525 + 15);
			context.lineTo(275 + 7, 525 + 15);
			context.stroke();

			//selectSix
			context.beginPath();
			context.moveTo(325 - 7,525 - 15);
			context.lineTo(325 + 7, 525 - 15);
			context.stroke();
	
			context.beginPath();
			context.moveTo(325 - 7, 525 - 15);
			context.lineTo(325 - 7, 525 + 15);
			context.stroke();

			context.beginPath();
			context.moveTo(325 + 7, 525);
			context.lineTo(325 - 7, 525);
			context.stroke();

			context.beginPath();
			context.moveTo(325 + 7,525);
			context.lineTo(325 + 7, 525 + 15);
			context.stroke();
	
			context.beginPath();
			context.moveTo(325 - 7, 525 + 15);
			context.lineTo(325 + 7, 525 + 15);
			context.stroke();

			//selectSeven
			context.beginPath();
			context.moveTo(375 - 7,525 - 15);
			context.lineTo(375 + 7, 525 - 15);
			context.stroke();

			context.beginPath();
			context.moveTo(375 + 7,525 - 15);
			context.lineTo(375, 525 + 15);
			context.stroke();

			//selectEight
			context.beginPath();
			context.moveTo(425 - 7,525 - 15);
			context.lineTo(425 + 7, 525 - 15);
			context.stroke();
	
			context.beginPath();
			context.moveTo(425 + 7, 525 - 15);
			context.lineTo(425 + 7, 525);
			context.stroke();

			context.beginPath();
			context.moveTo(425 + 7, 525);
			context.lineTo(425 - 7, 525);
			context.stroke();

			context.beginPath();
			context.moveTo(425 + 7,525);
			context.lineTo(425 + 7, 525 + 15);
			context.stroke();
	
			context.beginPath();
			context.moveTo(425 - 7, 525 + 15);
			context.lineTo(425 + 7, 525 + 15);
			context.stroke();

			context.beginPath();
			context.moveTo(425 - 7,525 - 15);
			context.lineTo(425 - 7, 525 + 15);
			context.stroke();

			//selectNine
			context.beginPath();
			context.moveTo(475 - 7,525 - 15);
			context.lineTo(475 + 7, 525 - 15);
			context.stroke();
	
			context.beginPath();
			context.moveTo(475 - 7, 525 - 15);
			context.lineTo(475 - 7, 525);
			context.stroke();

			context.beginPath();
			context.moveTo(475 + 7, 525);
			context.lineTo(475 - 7, 525);
			context.stroke();

			context.beginPath();
			context.moveTo(475 + 7,525 - 15);
			context.lineTo(475 + 7, 525 + 15);
			context.stroke();
	
			context.beginPath();
			context.moveTo(475 - 7, 525 + 15);
			context.lineTo(475 + 7, 525 + 15);
			context.stroke();
			
			console.log("Board Selected: %d", boardSelected);
			//window.localStorage.getItem("PlayerName");
		
	}

	//Draw the number 1
	function numberOne(row, col)
	{
		//to put number in a box
		if(row > 50 && row <= 100)
			row = 75;
		if(row > 100 && row <= 150)
			row = 125;
		if(row > 150 && row <= 200)
			row = 175;
		if(row > 200 && row <= 250)
			row = 225;
		if(row > 250 && row <= 300)
			row = 275;
		if(row > 300 && row <= 350)
			row = 325;
		if(row > 350 && row <= 400)
			row = 375;
		if(row > 400 && row <= 450)
			row = 425;
		if(row > 450 && row <= 500)
			row = 475;

		if(col > 0 && col <= 50)
			col = 25;
		if(col > 50 && col <= 100)
			col = 75;
		if(col > 100 && col <= 150)
			col = 125;
		if(col > 150 && col <= 200)
			col = 175;
		if(col > 200 && col <= 250)
			col = 225;
		if(col > 250 && col <= 300)
			col = 275;
		if(col > 300 && col <= 350)
			col = 325;
		if(col > 350 && col <= 400)
			col = 375;
		if(col > 400 && col <= 450)
			col = 425;

		//setting the 2D array to 1
		for(i = 0; i < 9; i++)
		{
			for(j = 0; j < 9; j++)
			{
				if(row == (75 + j * 50) && col == (25 + i * 50) && board[i][j] == 0)
				{
					board[i][j] = 1;

					if(row <= 500 && col <= 450 && row > 50 && col > 0)//draws the number
					{
						context.beginPath();
						context.moveTo(row - 7,col - 9);
						context.lineTo(row, col - 15);
						context.stroke();
		
						context.beginPath();
						context.moveTo(row, col - 15);
						context.lineTo(row, col + 15);
						context.stroke();
		
						context.beginPath();
						context.moveTo(row - 7, col + 15);
						context.lineTo(row + 7, col + 15);
						context.stroke();
					}
				}

			}
		}




	}
	//Draw the number 2
	function numberTwo(row, col)
	{
		//to put number in a box
		if(row > 50 && row <= 100)
			row = 75;
		if(row > 100 && row <= 150)
			row = 125;
		if(row > 150 && row <= 200)
			row = 175;
		if(row > 200 && row <= 250)
			row = 225;
		if(row > 250 && row <= 300)
			row = 275;
		if(row > 300 && row <= 350)
			row = 325;
		if(row > 350 && row <= 400)
			row = 375;
		if(row > 400 && row <= 450)
			row = 425;
		if(row > 450 && row <= 500)
			row = 475;

		if(col > 0 && col <= 50)
			col = 25;
		if(col > 50 && col <= 100)
			col = 75;
		if(col > 100 && col <= 150)
			col = 125;
		if(col > 150 && col <= 200)
			col = 175;
		if(col > 200 && col <= 250)
			col = 225;
		if(col > 250 && col <= 300)
			col = 275;
		if(col > 300 && col <= 350)
			col = 325;
		if(col > 350 && col <= 400)
			col = 375;
		if(col > 400 && col <= 450)
			col = 425;

		//setting the 2D array to 2
		for(i = 0; i < 9; i++)
		{
			for(j = 0; j < 9; j++)
			{
				if(row == (75 + j * 50) && col == (25 + i * 50) && board[i][j] == 0)
				{
					board[i][j] = 2;

					if(row <= 500 && col <= 450 && row > 50 && col > 0)//draws the number
					{
						context.beginPath();
						context.moveTo(row - 7,col - 15);
						context.lineTo(row + 7, col - 15);
						context.stroke();
			
						context.beginPath();
						context.moveTo(row + 7, col - 15);
						context.lineTo(row + 7, col);
						context.stroke();
		
						context.beginPath();
						context.moveTo(row + 7, col);
						context.lineTo(row - 7, col);
						context.stroke();
	
						context.beginPath();
						context.moveTo(row - 7,col);
						context.lineTo(row - 7, col + 15);
						context.stroke();
				
						context.beginPath();
						context.moveTo(row - 7, col + 15);
						context.lineTo(row + 7, col + 15);
						context.stroke();
					}
				}

			}
		}



		
	}
	//Draw the number 3
	function numberThree(row, col)
	{
		//to put number in a box
		if(row > 50 && row <= 100)
			row = 75;
		if(row > 100 && row <= 150)
			row = 125;
		if(row > 150 && row <= 200)
			row = 175;
		if(row > 200 && row <= 250)
			row = 225;
		if(row > 250 && row <= 300)
			row = 275;
		if(row > 300 && row <= 350)
			row = 325;
		if(row > 350 && row <= 400)
			row = 375;
		if(row > 400 && row <= 450)
			row = 425;
		if(row > 450 && row <= 500)
			row = 475;

		if(col > 0 && col <= 50)
			col = 25;
		if(col > 50 && col <= 100)
			col = 75;
		if(col > 100 && col <= 150)
			col = 125;
		if(col > 150 && col <= 200)
			col = 175;
		if(col > 200 && col <= 250)
			col = 225;
		if(col > 250 && col <= 300)
			col = 275;
		if(col > 300 && col <= 350)
			col = 325;
		if(col > 350 && col <= 400)
			col = 375;
		if(col > 400 && col <= 450)
			col = 425;

		//setting the 2D array to 3
		for(i = 0; i < 9; i++)
		{
			for(j = 0; j < 9; j++)
			{
				if(row == (75 + j * 50) && col == (25 + i * 50) && board[i][j] == 0)
				{
					board[i][j] = 3;

					if(row <= 500 && col <= 450 && row > 50 && col > 0)//draws the number
					{			
						context.beginPath();
						context.moveTo(row - 7,col - 15);
						context.lineTo(row + 7, col - 15);
						context.stroke();
	
						context.beginPath();
						context.moveTo(row + 7, col - 15);
						context.lineTo(row + 7, col);
						context.stroke();
			
						context.beginPath();
						context.moveTo(row + 7, col);
						context.lineTo(row - 7, col);
						context.stroke();

						context.beginPath();
						context.moveTo(row + 7,col);
						context.lineTo(row + 7, col + 15);
						context.stroke();
				
						context.beginPath();
						context.moveTo(row - 7, col + 15);
						context.lineTo(row + 7, col + 15);
						context.stroke();
					}
				}
			}
		}



	}
	//Draw the number 4
	function numberFour(row, col)
	{
		//to put number in a box
		if(row > 50 && row <= 100)
			row = 75;
		if(row > 100 && row <= 150)
			row = 125;
		if(row > 150 && row <= 200)
			row = 175;
		if(row > 200 && row <= 250)
			row = 225;
		if(row > 250 && row <= 300)
			row = 275;
		if(row > 300 && row <= 350)
			row = 325;
		if(row > 350 && row <= 400)
			row = 375;
		if(row > 400 && row <= 450)
			row = 425;
		if(row > 450 && row <= 500)
			row = 475;

		if(col > 0 && col <= 50)
			col = 25;
		if(col > 50 && col <= 100)
			col = 75;
		if(col > 100 && col <= 150)
			col = 125;
		if(col > 150 && col <= 200)
			col = 175;
		if(col > 200 && col <= 250)
			col = 225;
		if(col > 250 && col <= 300)
			col = 275;
		if(col > 300 && col <= 350)
			col = 325;
		if(col > 350 && col <= 400)
			col = 375;
		if(col > 400 && col <= 450)
			col = 425;


		//setting the 2D array to 4
		for(i = 0; i < 9; i++)
		{
			for(j = 0; j < 9; j++)
			{
				if(row == (75 + j * 50) && col == (25 + i * 50) && board[i][j] == 0)
				{
					board[i][j] = 4;

					if(row <= 500 && col <= 450 && row > 50 && col > 0)//draws the number
					{
		
						context.beginPath();
						context.moveTo(row + 7, col - 15);
						context.lineTo(row + 7, col + 15);
						context.stroke();
			
						context.beginPath();
						context.moveTo(row + 7, col);
						context.lineTo(row - 7, col);
						context.stroke();
			
						context.beginPath();
						context.moveTo(row - 7,col);
						context.lineTo(row - 7, col - 15);
						context.stroke();
					}
				}
			}
		}



	}
	//Draw the number 5
	function numberFive(row, col)
	{
		//to put number in a box
		if(row > 50 && row <= 100)
			row = 75;
		if(row > 100 && row <= 150)
			row = 125;
		if(row > 150 && row <= 200)
			row = 175;
		if(row > 200 && row <= 250)
			row = 225;
		if(row > 250 && row <= 300)
			row = 275;
		if(row > 300 && row <= 350)
			row = 325;
		if(row > 350 && row <= 400)
			row = 375;
		if(row > 400 && row <= 450)
			row = 425;
		if(row > 450 && row <= 500)
			row = 475;

		if(col > 0 && col <= 50)
			col = 25;
		if(col > 50 && col <= 100)
			col = 75;
		if(col > 100 && col <= 150)
			col = 125;
		if(col > 150 && col <= 200)
			col = 175;
		if(col > 200 && col <= 250)
			col = 225;
		if(col > 250 && col <= 300)
			col = 275;
		if(col > 300 && col <= 350)
			col = 325;
		if(col > 350 && col <= 400)
			col = 375;
		if(col > 400 && col <= 450)
			col = 425;

		//setting the 2D array to 5
		for(i = 0; i < 9; i++)
		{
			for(j = 0; j < 9; j++)
			{
				if(row == (75 + j * 50) && col == (25 + i * 50) && board[i][j] == 0)
				{
					board[i][j] = 5;

					if(row <= 500 && col <= 450 && row > 50 && col > 0)//draws the number
					{		
						context.beginPath();
						context.moveTo(row - 7,col - 15);
						context.lineTo(row + 7, col - 15);
						context.stroke();
				
						context.beginPath();
						context.moveTo(row - 7, col - 15);
						context.lineTo(row - 7, col);
						context.stroke();
			
						context.beginPath();
						context.moveTo(row + 7, col);
						context.lineTo(row - 7, col);
						context.stroke();
			
						context.beginPath();
						context.moveTo(row + 7,col);
						context.lineTo(row + 7, col + 15);
						context.stroke();
	
						context.beginPath();
						context.moveTo(row - 7, col + 15);
						context.lineTo(row + 7, col + 15);
						context.stroke();
					}
				}
			}
		}


	}
	//Draw the number 6
	function numberSix(row, col)
	{
		//to put number in a box
		if(row > 50 && row <= 100)
			row = 75;
		if(row > 100 && row <= 150)
			row = 125;
		if(row > 150 && row <= 200)
			row = 175;
		if(row > 200 && row <= 250)
			row = 225;
		if(row > 250 && row <= 300)
			row = 275;
		if(row > 300 && row <= 350)
			row = 325;
		if(row > 350 && row <= 400)
			row = 375;
		if(row > 400 && row <= 450)
			row = 425;
		if(row > 450 && row <= 500)
			row = 475;

		if(col > 0 && col <= 50)
			col = 25;
		if(col > 50 && col <= 100)
			col = 75;
		if(col > 100 && col <= 150)
			col = 125;
		if(col > 150 && col <= 200)
			col = 175;
		if(col > 200 && col <= 250)
			col = 225;
		if(col > 250 && col <= 300)
			col = 275;
		if(col > 300 && col <= 350)
			col = 325;
		if(col > 350 && col <= 400)
			col = 375;
		if(col > 400 && col <= 450)
			col = 425;

		//setting the 2D array to 6
		for(i = 0; i < 9; i++)
		{
			for(j = 0; j < 9; j++)
			{
				if(row == (75 + j * 50) && col == (25 + i * 50) && board[i][j] == 0)
				{
					board[i][j] = 6;

					if(row <= 500 && col <= 450 && row > 50 && col > 0)//draws the number
					{
						context.beginPath();
						context.moveTo(row - 7,col - 15);
						context.lineTo(row + 7, col - 15);
						context.stroke();
				
						context.beginPath();
						context.moveTo(row - 7, col - 15);
						context.lineTo(row - 7, col + 15);
						context.stroke();
			
						context.beginPath();
						context.moveTo(row + 7, col);
						context.lineTo(row - 7, col);
						context.stroke();
			
						context.beginPath();
						context.moveTo(row + 7,col);
						context.lineTo(row + 7, col + 15);
						context.stroke();
				
						context.beginPath();
						context.moveTo(row - 7, col + 15);
						context.lineTo(row + 7, col + 15);
						context.stroke();
					}
				}
			}
		}


	}
	//Draw the number 7
	function numberSeven(row, col)
	{
		//to put number in a box
		if(row > 50 && row <= 100)
			row = 75;
		if(row > 100 && row <= 150)
			row = 125;
		if(row > 150 && row <= 200)
			row = 175;
		if(row > 200 && row <= 250)
			row = 225;
		if(row > 250 && row <= 300)
			row = 275;
		if(row > 300 && row <= 350)
			row = 325;
		if(row > 350 && row <= 400)
			row = 375;
		if(row > 400 && row <= 450)
			row = 425;
		if(row > 450 && row <= 500)
			row = 475;

		if(col > 0 && col <= 50)
			col = 25;
		if(col > 50 && col <= 100)
			col = 75;
		if(col > 100 && col <= 150)
			col = 125;
		if(col > 150 && col <= 200)
			col = 175;
		if(col > 200 && col <= 250)
			col = 225;
		if(col > 250 && col <= 300)
			col = 275;
		if(col > 300 && col <= 350)
			col = 325;
		if(col > 350 && col <= 400)
			col = 375;
		if(col > 400 && col <= 450)
			col = 425;

		//setting the 2D array to 7
		for(i = 0; i < 9; i++)
		{
			for(j = 0; j < 9; j++)
			{
				if(row == (75 + j * 50) && col == (25 + i * 50) && board[i][j] == 0)
				{
					board[i][j] = 7;

					if(row <= 500 && col <= 450 && row > 50 && col > 0)//draws the number
					{			
						context.beginPath();
						context.moveTo(row - 7,col - 15);
						context.lineTo(row + 7, col - 15);
						context.stroke();
			
						context.beginPath();
						context.moveTo(row + 7,col - 15);
						context.lineTo(row, col + 15);
						context.stroke();
					}	
				}
			}
		}



	}
	//Draw the number 8
	function numberEight(row, col)
	{
		//to put number in a box
		if(row > 50 && row <= 100)
			row = 75;
		if(row > 100 && row <= 150)
			row = 125;
		if(row > 150 && row <= 200)
			row = 175;
		if(row > 200 && row <= 250)
			row = 225;
		if(row > 250 && row <= 300)
			row = 275;
		if(row > 300 && row <= 350)
			row = 325;
		if(row > 350 && row <= 400)
			row = 375;
		if(row > 400 && row <= 450)
			row = 425;
		if(row > 450 && row <= 500)
			row = 475;

		if(col > 0 && col <= 50)
			col = 25;
		if(col > 50 && col <= 100)
			col = 75;
		if(col > 100 && col <= 150)
			col = 125;
		if(col > 150 && col <= 200)
			col = 175;
		if(col > 200 && col <= 250)
			col = 225;
		if(col > 250 && col <= 300)
			col = 275;
		if(col > 300 && col <= 350)
			col = 325;
		if(col > 350 && col <= 400)
			col = 375;
		if(col > 400 && col <= 450)
			col = 425;

		//setting the 2D array to 8
		for(i = 0; i < 9; i++)
		{
			for(j = 0; j < 9; j++)
			{
				if(row == (75 + j * 50) && col == (25 + i * 50) && board[i][j] == 0)
				{
					board[i][j] = 8;

					if(row <= 500 && col <= 450 && row > 50 && col > 0)//draws the number
					{
						context.beginPath();
						context.moveTo(row - 7,col - 15);
						context.lineTo(row + 7, col - 15);
						context.stroke();
	
						context.beginPath();
						context.moveTo(row + 7, col - 15);
						context.lineTo(row + 7, col);
						context.stroke();

						context.beginPath();
						context.moveTo(row + 7, col);
						context.lineTo(row - 7, col);
						context.stroke();
			
						context.beginPath();
						context.moveTo(row + 7,col);
						context.lineTo(row + 7, col + 15);
						context.stroke();
				
						context.beginPath();
						context.moveTo(row - 7, col + 15);
						context.lineTo(row + 7, col + 15);
						context.stroke();

						context.beginPath();
						context.moveTo(row - 7,col - 15);
						context.lineTo(row - 7, col + 15);
						context.stroke();
					}
				}
			}
		}



	}
	//Draw the number 9
	function numberNine(row, col)
	{
		//to put number in a box
		if(row > 50 && row <= 100)
			row = 75;
		if(row > 100 && row <= 150)
			row = 125;
		if(row > 150 && row <= 200)
			row = 175;
		if(row > 200 && row <= 250)
			row = 225;
		if(row > 250 && row <= 300)
			row = 275;
		if(row > 300 && row <= 350)
			row = 325;
		if(row > 350 && row <= 400)
			row = 375;
		if(row > 400 && row <= 450)
			row = 425;
		if(row > 450 && row <= 500)
			row = 475;

		if(col > 0 && col <= 50)
			col = 25;
		if(col > 50 && col <= 100)
			col = 75;
		if(col > 100 && col <= 150)
			col = 125;
		if(col > 150 && col <= 200)
			col = 175;
		if(col > 200 && col <= 250)
			col = 225;
		if(col > 250 && col <= 300)
			col = 275;
		if(col > 300 && col <= 350)
			col = 325;
		if(col > 350 && col <= 400)
			col = 375;
		if(col > 400 && col <= 450)
			col = 425;

		//setting the 2D array to 9
		for(i = 0; i < 9; i++)
		{
			for(j = 0; j < 9; j++)
			{
				if(row == (75 + j * 50) && col == (25 + i * 50) && board[i][j] == 0)
				{
					board[i][j] = 9;

					if(row <= 500 && col <= 450 && row > 50 && col > 0)//draws the number
					{
						context.beginPath();
						context.moveTo(row - 7,col - 15);
						context.lineTo(row + 7, col - 15);
						context.stroke();
				
						context.beginPath();
						context.moveTo(row - 7, col - 15);
						context.lineTo(row - 7, col);
						context.stroke();
			
						context.beginPath();
						context.moveTo(row + 7, col);
						context.lineTo(row - 7, col);
						context.stroke();
		
						context.beginPath();
						context.moveTo(row + 7,col - 15);
						context.lineTo(row + 7, col + 15);
						context.stroke();
	
						context.beginPath();
						context.moveTo(row - 7, col + 15);
						context.lineTo(row + 7, col + 15);
						context.stroke();
					}
				}
			}
		}


	}


	//Choosing a number
	function select(row, col)
	{
		if(row > 50 && row < 100 && col > 500 && col < 550)
		{
			selectOne();
		}
		if(row > 100 && row < 150 && col > 500 && col < 550)
		{
			selectTwo();
		}
		if(row > 150 && row < 200 && col > 500 && col < 550)
		{
			selectThree();
		}
		if(row > 200 && row < 250 && col > 500 && col < 550)
		{
			selectFour();
		}
		if(row > 250 && row < 300 && col > 500 && col < 550)
		{
			selectFive();
		}
		if(row > 300 && row < 350 && col > 500 && col < 550)
		{
			selectSix();
		}
		if(row > 350 && row < 400 && col > 500 && col < 550)
		{
			selectSeven();
		}
		if(row > 400 && row < 450 && col > 500 && col < 550)
		{
			selectEight();
		}
		if(row > 450 && row < 500 && col > 500 && col < 550)
		{
			selectNine();
		}

	}

	//Select 1
	function selectOne()
	{
		return selected = 1;
		//console.log("Selected = %d", selected);//testing
	}

	//Select 2
	function selectTwo()
	{
		return selected = 2;
	}

	//Select 3
	function selectThree()
	{
		return selected = 3;
	}

	//Select 4
	function selectFour()
	{
		return selected = 4;
	}

	//Select 5
	function selectFive()
	{
		return selected = 5;
	}

	//Select 6
	function selectSix()
	{
		return selected = 6;
	}

	//Select 7ith
	function selectSeven()
	{
		return selected = 7;
	}

	//Select 8
	function selectEight()
	{
		return selected = 8;
	}

	//Select 9
	function selectNine()
	{
		return selected = 9;
	}

	function resetBtn()
	{
		if(boardSelected == 1)
			board1();
		if(boardSelected == 2)
			board2();
		if(boardSelected == 3)
			board3();
		if(boardSelected == 4)
			board4();
		if(boardSelected == 5)
			board5();
		if(boardSelected == 6)
			board6();
			

	}

	function checkGameBtn()
	{

		
		for(i = 0; i < 9; i++)
		{
			if(board[i][0] != board[i][1] && board[i][0] != board[i][2] && board[i][0] != board[i][3] && board[i][0] != board[i][4] && board[i][0] != board[i][5] && board[i][0] != board[i][6] && board[i][0] != board[i][7] && board[i][0] != board[i][8] && board[i][1] != board[i][2] && board[i][1] != board[i][3] && board[i][1] != board[i][4] && board[i][1] != board[i][5] && board[i][1] != board[i][6] && board[i][1] != board[i][7] && board[i][1] != board[i][8] && board[i][2] != board[i][3] && board[i][2] != board[i][4] && board[i][2] != board[i][5] && board[i][2] != board[i][6] && board[i][2] != board[i][7] && board[i][2] != board[i][8] && board[i][3] != board[i][4] && board[i][3] != board[i][5] && board[i][3] != board[i][6] && board[i][3] != board[i][7] && board[i][3] != board[i][8]  && board[i][4] != board[i][5] && board[i][4] != board[i][6] && board[i][4] != board[i][7] && board[i][4] != board[i][8] && board[i][5] != board[i][6] && board[i][5] != board[i][7] && board[i][5] != board[i][8] && board[i][6] != board[i][7] && board[i][6] != board[i][8] && board[i][7] != board[i][8] && (board[i][0] + board[i][1] + board[i][2] + board[i][3] + board[i][4] + board[i][5] + board[i][6] + board[i][7] + board[i][8] == 45))
			correctOne[i] = 1;
			else
			correctOne[i] = 0;

		}
		for(j = 0; j < 9; j++)
		{
			if(board[0][j] != board[1][j] && board[0][j] != board[2][j] && board[0][j] != board[3][j] && board[0][j] != board[4][j] && board[0][j] != board[5][j] && board[0][j] != board[6][j] && board[0][j] != board[7][j] && board[0][j] != board[8][j] && board[1][j] != board[2][j] && board[1][j] != board[3][j] && board[1][j] != board[4][j] && board[1][j] != board[5][j] && board[1][j] != board[6][j] && board[1][j] != board[7][j] && board[1][j] != board[8][j] && board[2][j] != board[3][j] && board[2][j] != board[4][j] && board[2][j] != board[5][j] && board[2][j] != board[6][j] && board[2][j] != board[7][j] && board[2][j] != board[8][j] && board[3][j] != board[4][j] && board[3][j] != board[5][j] && board[3][j] != board[6][j] && board[3][j] != board[7][j] && board[3][j] != board[8][j] && board[4][j] != board[5][j] && board[4][j] != board[6][j] && board[4][j] != board[7][j] && board[4][j] != board[8][j] && board[5][j] != board[6][j] && board[5][j] != board[7][j] && board[5][j] != board[8][j] && board[6][j] != board[7][j] && board[6][j] != board[8][j] && board[7][j] != board[8][j] && (board[0][j] + board[1][j] + board[2][j] + board[3][j] + board[4][j] + board[5][j] + board[6][j] + board[7][j] + board[8][j]) == 45)
			correctOne[j+9] = 1;
			else
			correctOne[j+9] = 0;

		}

		for(k = 0; k < 3; k++)
		{
			for(n = 0; n < 3; n++)
			{
			if(board[0 + 3*k][0 + 3*n] != board[0 + 3*k][1 + 3*n] && board[0 + 3*k][0 + 3*n] != board[0 + 3*k][2 + 3*n] && board[0 + 3*k][0 + 3*n] != board[1 + 3*k][0 + 3*n] && board[0 + 3*k][0 + 3*n] != board[1 + 3*k][1 + 3*n] && board[0 + 3*k][0 + 3*n] != board[1 + 3*k][2 + 3*n] && board[0 + 3*k][0 + 3*n] != board[2 + 3*k][0 + 3*n] && board[0 + 3*k][0 + 3*n] != board[2 + 3*k][1 + 3*n] && board[0 + 3*k][0 + 3*n] != board[2 + 3*k][2 + 3*n] && board[0 + 3*k][1 + 3*n] != board[0 + 3*k][2 + 3*n] && board[0 + 3*k][1 + 3*n] != board[1 + 3*k][0 + 3*n] && board[0 + 3*k][1 + 3*n] != board[1 + 3*k][1 + 3*n] && board[0 + 3*k][1 + 3*n] != board[1 + 3*k][2 + 3*n] && board[0 + 3*k][1 + 3*n] != board[2 + 3*k][0 + 3*n] && board[0 + 3*k][1 + 3*n] != board[2 + 3*k][1 + 3*n] && board[0 + 3*k][1 + 3*n] != board[2 + 3*k][2 + 3*n] && board[0 + 3*k][2 + 3*n] != board[1 + 3*k][0 + 3*n] && board[0 + 3*k][2 + 3*n] != board[1 + 3*k][1 + 3*n] && board[0 + 3*k][2 + 3*n] != board[1 + 3*k][2 + 3*n] && board[0 + 3*k][2 + 3*n] != board[2 + 3*k][0 + 3*n] && board[0 + 3*k][2 + 3*n] != board[2 + 3*k][1 + 3*n] && board[0 + 3*k][2 + 3*n] != board[2 + 3*k][2 + 3*n] && board[1 + 3*k][0 + 3*n] != board[1 + 3*k][1 + 3*n] && board[1 + 3*k][0 + 3*n] != board[1 + 3*k][2 + 3*n] && board[1 + 3*k][0 + 3*n] != board[2 + 3*k][0 + 3*n] && board[1 + 3*k][0 + 3*n] != board[2 + 3*k][1 + 3*n] && board[1 + 3*k][0 + 3*n] != board[2 + 3*k][2 + 3*n] && board[1 + 3*k][1 + 3*n] != board[1 + 3*k][2 + 3*n] && board[1 + 3*k][1 + 3*n] != board[2 + 3*k][0 + 3*n] && board[1 + 3*k][1 + 3*n] != board[2 + 3*k][1 + 3*n] && board[1 + 3*k][1 + 3*n] != board[2 + 3*k][2 + 3*n] && board[1 + 3*k][2 + 3*n] != board[2 + 3*k][0 + 3*n] && board[1 + 3*k][2 + 3*n] != board[2 + 3*k][1 + 3*n] && board[1 + 3*k][2 + 3*n] != board[2 + 3*k][2 + 3*n] && board[2 + 3*k][0 + 3*n] != board[2 + 3*k][1 + 3*n] && board[2 + 3*k][0 + 3*n] != board[2 + 3*k][2 + 3*n] && board[2 + 3*k][1 + 3*n] != board[2 + 3*k][2 + 3*n] && (board[0 + 3*k][0 + 3*n] + board[0 + 3*k][1 + 3*n] + board[0 + 3*k][2 + 3*n] + board[1 + 3*k][0 + 3*n] + board[1 + 3*k][1 + 3*n] + board[1 + 3*k][2 + 3*n] + board[2 + 3*k][0 + 3*n] + board[2 + 3*k][1 + 3*n] + board[2 + 3*k][2 + 3*n]) == 45)
			correctTwo[k][n] = 1;
			else
			correctTwo[k][n] = 0;
			console.log("correctTwo[%d][%d] = %d" , k, n, correctTwo[k][n]);
			}


		}

		if((correctOne[0] + correctOne[1] + correctOne[2] + correctOne[3] + correctOne[4] + correctOne[5] + correctOne[6] + correctOne[7] + correctOne[8] + correctOne[9] + correctOne[10] + correctOne[11] + correctOne[12] + correctOne[13] + correctOne[14] + correctOne[15] + correctOne[16] + correctOne[17] + correctTwo[0][0] + correctTwo[0][1] + correctTwo[0][2] + correctTwo[1][0] + correctTwo[1][1] + correctTwo[1][2] + correctTwo[2][0] + correctTwo[2][1] + correctTwo[2][2]) == 27)
		{
			alert("Correct!");
			player[0] = prompt("What is your name?");
			if(boardSelected == 1)
				score[0] = 100;
			if(boardSelected == 2)
				score[0] = 100;
			if(boardSelected == 3)
				score[0] = 200;
			if(boardSelected == 4)
				score[0] = 200;
			if(boardSelected == 5)
				score[0] = 250;
			if(boardSelected == 6)
				score[0] = 300;
			//window.localStorage.setItem("PlayerName", player[0]);
		}
		else
		{
			alert("Sorry, you are Wrong. Click the RESET button to restart.");
			//player[0] = prompt("What is your name?");
			//window.localStorage.setItem("PlayerName", player[0]);
		}


			
	for(i = 0; i < 18; i++)
		console.log("correctOne[%d] = %d" , i, correctOne[i]);

	}
	function board1()
	{
		boardSelected = 1;
		for(i = 0; i < 9; i++)
		{
			for(j = 0; j < 9; j++)
			{
				board[i][j] = 0;
			}
		}
		context.clearRect ( 0 , 0 , 550 , 551 );
		drawBoard();
		selected = 0;

		numberThree(125, 25);
		numberFive(175, 25);
		numberNine(225, 25);
		numberOne(275, 25);
		numberEight(325, 25);
		numberTwo(75, 75);
		numberSix(325, 75);
		numberFour(375, 75);
		numberEight(125, 125);
		numberFour(325, 125);
		numberOne(375, 125);
		numberTwo(125, 175);
		numberNine(375, 175);
		numberEight(425, 175);
		numberSix(475, 175);
		numberSeven(75, 225);
		numberNine(125, 225);
		numberEight(225, 225);
		numberOne(325, 225);
		numberTwo(425, 225);
		numberFour(475, 225);
		numberFive(75, 275);
		numberFour(125, 275);
		numberEight(175, 275);
		numberSeven(425, 275);
		numberTwo(175, 325);
		numberOne(225, 325);
		numberFour(425, 325);
		numberThree(175, 375);
		numberTwo(225, 375);
		numberNine(475, 375);
		numberSeven(225, 425);
		numberEight(275, 425);
		numberNine(325, 425);
		numberSix(375, 425);
		numberThree(425, 425);

	}
	function board2()
	{
		boardSelected = 2;
		for(i = 0; i < 9; i++)
		{
			for(j = 0; j < 9; j++)
			{
				board[i][j] = 0;
			}
		}
		context.clearRect ( 0 , 0 , 550 , 551 );
		drawBoard();
		selected = 0;

		numberNine(275, 25);
		numberThree(375, 25);
		numberTwo(425, 25);
		numberSeven(475, 25);
		numberSix(125, 75);
		numberSeven(225, 75);
		numberFive(275, 75);
		numberEight(75, 125);
		numberTwo(275, 125);
		numberFour(325, 125);
		numberFive(425, 125);
		numberSix(475, 125);
		numberEight(325, 175);
		numberThree(475, 175);
		numberFive(75, 225);
		numberTwo(125, 225);
		numberNine(175, 225);
		numberSix(225, 225);
		numberSeven(325, 225);
		numberEight(375, 225);
		numberFour(425, 225);
		numberOne(475, 225);
		numberOne(75, 275);
		numberFive(225, 275);
		numberThree(75, 325);
		numberEight(125, 325);
		numberNine(225, 325);
		numberSeven(275, 325);
		numberFive(475, 325);
		numberEight(275, 375);
		numberOne(325, 375);
		numberSix(425, 375);
		numberSeven(75, 425);
		numberNine(125, 425);
		numberOne(175, 425);
		numberSix(275, 425);

	}
	function board3()
	{
		boardSelected = 3;
		for(i = 0; i < 9; i++)
		{
			for(j = 0; j < 9; j++)
			{
				board[i][j] = 0;
			}
		}
		context.clearRect ( 0 , 0 , 550 , 551 );
		drawBoard();
		selected = 0;

		numberSeven(175, 25);
		numberFive(275, 25);
		numberSix(425, 25);
		numberNine(75, 75);
		numberThree(175, 75);
		numberSeven(325, 75);
		numberFive(425, 75);
		numberEight(75, 125);
		numberTwo(225, 125);
		numberTwo(75, 175);
		numberOne(375, 175);
		numberSeven(75, 225);
		numberSix(175, 225);
		numberFive(225, 225);
		numberTwo(275, 225);
		numberOne(325, 225);
		numberFour(375, 225);
		numberEight(475, 225);
		numberFour(175, 275);
		numberFive(475, 275);
		numberFour(325, 325);
		numberNine(475, 325);
		numberSeven(125, 375);
		numberSix(225, 375);
		numberFive(375, 375);
		numberThree(475, 375);
		numberFour(125, 425);
		numberOne(225, 425);
		numberSeven(375, 425);
		

	}
	function board4()
	{
		boardSelected = 4;
		for(i = 0; i < 9; i++)
		{
			for(j = 0; j < 9; j++)
			{
				board[i][j] = 0;
			}
		}
		context.clearRect ( 0 , 0 , 550 , 551 );
		drawBoard();
		selected = 0;

		numberTwo(125, 25);
		numberFour(225, 25);
		numberFive(275, 25);
		numberThree(325, 25);
		numberEight(125, 75);
		numberFour(175, 75);
		numberSix(225, 75);
		numberThree(425, 75);
		numberTwo(475, 75);
		numberOne(175, 125);
		numberFour(375, 125);
		numberSeven(275, 175);
		numberThree(75, 225);
		numberOne(225, 225);
		numberFour(275, 225);
		numberNine(325, 225);
		numberEight(475, 225);
		numberSix(275, 275);
		numberEight(175, 325);
		numberOne(375, 325);
		numberFour(75, 375);
		numberFive(125, 375);
		numberSix(325, 375);
		numberSeven(375, 375);
		numberEight(425, 375);
		numberSeven(225, 425);
		numberEight(275, 425);
		numberTwo(325, 425);
		numberFive(425, 425);

	}
	function board5()
	{
		boardSelected = 5;
		for(i = 0; i < 9; i++)
		{
			for(j = 0; j < 9; j++)
			{
				board[i][j] = 0;
			}
		}
		context.clearRect ( 0 , 0 , 550 , 551 );
		drawBoard();
		selected = 0;

		numberNine(175, 25);
		numberFour(325, 25);
		numberFour(75, 75);
		numberSeven(125, 75);
		numberNine(225, 75);
		numberEight(125, 125);
		numberTwo(275, 125);
		numberFive(425, 125);
		numberSeven(75, 175);
		numberFour(275, 175);
		numberSix(375, 175);
		numberOne(75, 225);
		numberFour(175, 225);
		numberSeven(275, 225);
		numberFive(375, 225);
		numberTwo(475, 225);
		numberEight(175, 275);
		numberFive(275, 275);
		numberNine(475, 275);
		numberFive(125, 325);
		numberNine(275, 325);
		numberThree(425, 325);
		numberEight(325, 375);
		numberNine(425, 375);
		numberSix(475, 375);
		numberSix(225, 425);
		numberEight(375, 425);

	}
	function board6()
	{
		boardSelected = 6;
		for(i = 0; i < 9; i++)
		{
			for(j = 0; j < 9; j++)
			{
				board[i][j] = 0;
			}
		}
		context.clearRect ( 0 , 0 , 550 , 551 );
		drawBoard();
		selected = 0;

		numberSix(325, 25);
		numberOne(375, 25);
		numberNine(425, 25);
		numberFive(475, 25);
		numberNine(225, 125);
		numberFive(275, 125);
		numberTwo(425, 75);
		numberSeven(475, 75);
		numberSix(425, 125);
		numberTwo(75, 175);
		numberOne(175, 175);
		numberSeven(425, 175);
		numberEight(225, 225);
		numberFour(325, 225);
		numberFour(125, 275);
		numberEight(375, 275);
		numberOne(475, 275);
		numberSeven(125, 325);
		numberNine(75, 375);
		numberOne(125, 375);
		numberThree(275, 375);
		numberFive(325, 375);
		numberFive(75, 425);
		numberTwo(125, 425);
		numberSix(175, 425);
		numberFour(225, 425);

	}

	function topTen()
	{
		
		//alert("Top Ten Scores\n", name[0]);
		//for(i=0;i<10;i++)
		//{
			//console.log("%s", name[i]);
			//if (player[0] != null)
			//{
		// var newPlayer = localStorage.getItem("PlayerName");
				document.getElementById("stuff1").innerHTML = "1: " + player[0] + ": " + score[0];
				document.getElementById("stuff2").innerHTML = "2: " + player[1] + ": " + score[1];
				document.getElementById("stuff3").innerHTML = "3: " + player[2] + ": " + score[2];
				document.getElementById("stuff4").innerHTML = "4: " + player[3] + ": " + score[3];
				document.getElementById("stuff5").innerHTML = "5: " + player[4] + ": " + score[4];
				document.getElementById("stuff6").innerHTML = "6: " + player[5] + ": " + score[5];
				document.getElementById("stuff7").innerHTML = "7: " + player[6] + ": " + score[6];
				document.getElementById("stuff8").innerHTML = "8: " + player[7] + ": " + score[7];
				document.getElementById("stuff9").innerHTML = "9: " + player[8] + ": " + score[8];
				document.getElementById("stuff10").innerHTML = "10: " + player[9] + ": " + score[9];
			//}
    		//}
	}

	


