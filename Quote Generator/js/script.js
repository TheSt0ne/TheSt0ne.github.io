const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('Author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes=[];

function load(){
loader.hidden=false;
quoteContainer.hidden=true;
}
function complete(){
loader.hidden=true;
quoteContainer.hidden=false;
}


function newQuotes(){
				load();
				const quote=apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
				if (!quote.author)
				{
					authorText.textContent='Unknown';
				}
				else
				{
				authorText.textContent=quote.author;
			    }
			    if (quote.text.length>120) 
			    {
			  	quoteText.classList.add('long-quote');
			    } else 
			    {
			  	quoteText.classList.remove('long-quote');
			    }
				quoteText.textContent=quote.text;
				complete();
			    }
async function quoteFetcher() {
				load();
				const apiUrl = 'https://type.fit/api/quotes';
				try{
								const response =await fetch(apiUrl);
								apiQuotes = await response.json();
								newQuotes();
				} catch(error) {
								alert(error);
				}
}
function tweetThis(){
	const tweetUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
	window.open(tweetUrl,'_blank');
}
//try
newQuoteBtn.addEventListener('click',newQuotes);
twitterBtn.addEventListener('click', tweetThis);



quoteFetcher();
