
        // variables
let quote = document.querySelector('.main-quote')
let author = document.querySelector('.author')
let btn = document.querySelector('.button')

const quotes = [{
    quote: `"I do th way very best i know how - the way best i can; and i mean to keep on doing so until the end."`,
    author: `Abraham Lincon` 
},
{
    quote: `"Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for."`,
    author: `Epicurus` 
},
{
    quote: `"A gem cannot be polished without friction, nor a man perfected without trials."`,
    author: `Seneca` 
},
{
    quote: `"When someone is properly grounded in life, they shouldn’t have to look outside themselves for approval."`,
    author: `Epictetus` 
},
{
    quote: `"The Fates guide the person who accepts them and hinder the person who resists them."`,
    author: `Cleanthes` 
},
{
    quote: `"We have two ears and one mouth, so we should listen more than we say."`,
    author: `Zeno of Citium` 
},
{
    quote: `"Humanity must seek what is NOT simple and obvious using the simple and obvious."`,
    author: `Musonius Rufus` 
},
{
    quote: `"It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own."`,
    author: `Marcus Aurelius` 
},
{
    quote: `"The tranquility that comes when you stop caring what they say. Or think, or do. Only what you do."`,
    author: `Marcus Aurelius` 
},
{
    quote: `"I will reveal to you a love potion, without medicine, without herbs, without any witch’s magic; if you want to be loved, then love ."`,
    author: `Hecato of Rhodes` 
},
]

btn.addEventListener('click', function (){

let displayQuote = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[displayQuote].quote;
    author.innerText = quotes[displayQuote].author;

})

