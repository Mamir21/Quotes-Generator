const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "In the end, it's not the years in your life that count. It's the life in your years. – Abraham Lincoln",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
    "The only impossible journey is the one you never begin. – Tony Robbins"
  ]
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById("quoteDisplay").textContent = randomQuote;
  }