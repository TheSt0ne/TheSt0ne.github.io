
const  quoteContainer = document.getElementById('quote-container');
const  quoteText = document.getElementById('quote');
const  quoteAuthor = document.getElementById('Author');
const  twitterBtn = document.getElementById('twitter-button');
const  newQuote = document.getElementById('new-quote');

let apiQuotes=[];

function newQuotes(){
				const quote=apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
				quoteAuthor.textContent=quote.author;
				quoteText.textContent=quote.text;
}
async function quoteFetcher() {
				const apiUrl = 'https://type.fit/api/quotes';
				try{
								const response =await fetch(apiUrl);
								apiQuotes = await response.json();
								newQuotes();
				} catch(error) {
								alert(error)
				}
}

quoteFetcher();
