let btn = document.getElementById("btn");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
    {
        quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
        person: `― Albert Einstein`
    },

    {
        quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
        person: `― Bernard M. Baruch`
    },

    {
        quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
        person: `― Dr. Seuss`
    },

    {
        quote: `“Be the change that you wish to see in the world.”`,
        person: `― Mahatma Gandhi`
    },

    {
        quote: `“A friend is someone who knows all about you and still loves you.”`,
        person: `― Elbert Hubbard`
    },

    {
        quote: `“To live is the rarest thing in the world. Most people exist, that is all.”`,
        person: `― Oscar Wilde`
    },

    {
        quote: `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
        person: `― Mahatma Gandhi`
    },

    {
        quote: `“I am so clever that sometimes I don't understand a single word of what I am saying.”`,
        person: `― Oscar Wilde`
    },

    {
        quote: `“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”`,
        person: `― Ralph Waldo Emerson`
    },

    {
        quote: `“In three words I can sum up everything I've learned about life: it goes on.”`,
        person: `― Robert Frost`
    }

];


btn.addEventListener("click", function () {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})