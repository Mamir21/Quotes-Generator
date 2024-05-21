const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "In the end, it's not the years in your life that count. It's the life in your years. – Abraham Lincoln",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
  "The only impossible journey is the one you never begin. – Tony Robbins",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "In the midst of chaos, there is also opportunity. – Sun Tzu",
  "The best way to predict the future is to invent it. – Alan Kay", 
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",                 
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt", 
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
  "Happiness is not something readymade. It comes from your own actions. – Dalai Lama",
  "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson",
  "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh (Alice in Wonderland)"
  ]
  
  function generateQuote() {
    const quoteDisplay = document.getElementById("quoteDisplay")
    if (!quoteDisplay) {
      console.error("Quote display element not found!")
      return
    }
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const randomQuote = quotes[randomIndex]
    quoteDisplay.textContent = randomQuote
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.querySelector("button")
    generateButton.addEventListener("click", generateQuote)
  })
