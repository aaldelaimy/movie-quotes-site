# Movie Mood Quotes

A mood-based movie quote finder. Enter how you're feeling and get a matching quote from a curated collection of 90+ iconic lines, or hit random and see what comes up.

Built with vanilla HTML, CSS, and JavaScript. No dependencies, no build step.

## Features

- **Mood matching**: quotes are tagged with emotion labels; input is matched against them directly
- **Synonym fallback**: if "happy" doesn't match, the app checks related words like "joyful", "cheerful", "content" via a synonym map
- **Random mode**: browse the full collection without entering a mood
- **Repeat prevention**: tracks the last 20 shown quotes so you don't get the same one back-to-back
- **Responsive UI**: works on mobile and desktop

## How It Works

```
User input → normalize → direct emotion match
                              ↓ (no match)
                         synonym lookup via emotionMap
                              ↓ (no match)
                         fall back to full collection
                              ↓
                         filter out recently shown quotes
                              ↓
                         random selection → display
```

Data and logic are split across two files:

- `data.js`: quote objects (`quote`, `movie`, `emotions[]`) and the `emotionMap` synonym dictionary
- `quotes.js`: matching logic, random selection, and the recent-quote cache

This separation means you can add quotes to the dataset without touching any application code.

## Tech Stack

| Layer | Choice |
|-------|--------|
| Markup | HTML5 |
| Styling | CSS3 (inline) |
| Logic | Vanilla JavaScript |
| Fonts | Google Fonts (Poppins, Righteous) |
| Icons | Font Awesome |

## Project Structure

```
Movie Mood Quotes/
|-- index.html   # UI, styles, and event listeners
|-- data.js      # Quote dataset and emotion synonym map
|-- quotes.js    # Matching and selection logic
`-- favicon.png
```

## Getting Started

```bash
git clone <repo-url>
cd movie-quotes-site
open "Movie Mood Quotes/index.html"
```

Or serve it locally:

```bash
python3 -m http.server 8000
# visit http://localhost:8000/Movie%20Mood%20Quotes/
```

## Usage

1. Type a feeling in the input, e.g. `hopeful`, `anxious`, `proud`, `down`
2. Click **Find Quote** or press Enter
3. Click **Random Quote** to skip mood matching entirely

Try inputs that aren't exact emotion tags. The synonym map handles variations like `sad` → `unhappy`, `depressed`, `blue`, etc.

## Roadmap

- [ ] Quote categories (genre, decade, franchise)
- [ ] Save favorites with `localStorage`
- [ ] Extract CSS into a separate stylesheet
- [ ] Unit tests for matching and synonym fallback
