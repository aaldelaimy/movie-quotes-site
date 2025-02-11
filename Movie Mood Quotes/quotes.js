// Keep track of recently used quotes
let recentlyUsedQuotes = [];
const MAX_RECENT_QUOTES = 20; // Adjust this number based on total quotes

function getQuote() {
    const feeling = document.getElementById('feelingInput').value.toLowerCase().trim();
    const display = document.getElementById('quoteDisplay');
    
    // Find matching quotes based on emotion
    let matchingQuotes = movieQuotes.filter(quote => 
        quote.emotions.some(emotion => emotion.includes(feeling) || feeling.includes(emotion))
    );
    
    // If no direct matches, check emotion synonyms
    if (matchingQuotes.length === 0) {
        for (const [mainEmotion, synonyms] of Object.entries(emotionMap)) {
            if (synonyms.some(synonym => synonym.includes(feeling) || feeling.includes(synonym))) {
                matchingQuotes = movieQuotes.filter(quote => 
                    quote.emotions.includes(mainEmotion)
                );
                break;
            }
        }
    }
    
    // If still no matches, use all quotes
    if (matchingQuotes.length === 0) {
        matchingQuotes = movieQuotes;
    }
    
    // Filter out recently used quotes if possible
    const freshQuotes = matchingQuotes.filter(quote => 
        !recentlyUsedQuotes.includes(quote.quote)
    );
    
    // Use fresh quotes if available, otherwise use all matching quotes
    const quotesToUse = freshQuotes.length > 0 ? freshQuotes : matchingQuotes;
    
    // Get random quote from available quotes
    const randomQuote = quotesToUse[Math.floor(Math.random() * quotesToUse.length)];
    
    // Add to recently used quotes
    recentlyUsedQuotes.push(randomQuote.quote);
    
    // Keep only the most recent quotes
    if (recentlyUsedQuotes.length > MAX_RECENT_QUOTES) {
        recentlyUsedQuotes.shift(); // Remove oldest quote
    }
    
    // Display the quote
    display.innerHTML = `<p>"${randomQuote.quote}" - ${randomQuote.movie}</p>`;
}

function getRandomQuote() {
    // Filter out recently used quotes if possible
    const freshQuotes = movieQuotes.filter(quote => 
        !recentlyUsedQuotes.includes(quote.quote)
    );
    
    // Use fresh quotes if available, otherwise use all quotes
    const quotesToUse = freshQuotes.length > 0 ? freshQuotes : movieQuotes;
    
    // Get random quote
    const randomQuote = quotesToUse[Math.floor(Math.random() * quotesToUse.length)];
    
    // Add to recently used quotes
    recentlyUsedQuotes.push(randomQuote.quote);
    
    // Keep only the most recent quotes
    if (recentlyUsedQuotes.length > MAX_RECENT_QUOTES) {
        recentlyUsedQuotes.shift(); // Remove oldest quote
    }
    
    // Display the quote
    document.getElementById('quoteDisplay').innerHTML = `<p>"${randomQuote.quote}" - ${randomQuote.movie}</p>`;
}
