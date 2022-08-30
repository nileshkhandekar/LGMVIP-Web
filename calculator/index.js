let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let scValue =''
let ans =''

for(item of buttons)
{
	item.addEventListener('click', (e) => {
		buttonText = e.target.innerText;
		
		if(buttonText == 'X')
		{
			buttonText = '*';
			scValue += buttonText;
			screen.value = scValue;
		}
		else if(buttonText == 'C')
		{
			scValue =  "";
			screen.value = scValue;

		}
		else if(buttonText == '=')
		{
			try{
				ans = eval(scValue);	
				screen.value = ans;
				scValue = ans;	
			}	
			catch{
				screen.value = "Error!";
				scValue = ""
			}


		}
		else
		{
			scValue += buttonText;
			screen.value = scValue;
		}
	})
}