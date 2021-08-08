const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain"
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde"
  },
  {
    quote:
      "I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.",
    author: "Dr. Seuss"
  },
  {
    quote:
      "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    author: "Lao Tzu"
  },
  {
    quote:
      "I'm not upset that you lied to me, I'm upset that from now on I can't believe you.",
    author: "Friedrich Nietzsche"
  },
  {
    quote: "Everything you can imagine is real.",
    author: "Pablo Picasso"
  },
  {
    quote:
      "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomNum = Math.floor(Math.random() * quotes.length);

const dailyQuote = quotes[randomNum];

quote.innerText = dailyQuote.quote;
author.innerText = dailyQuote.author;
