const movieQuotes = [
    // Inspirational/Motivational Quotes
    {
        quote: "Oh yes, the past can hurt. But you can either run from it, or learn from it.",
        movie: "The Lion King",
        emotions: ["wise", "hopeful", "reflective", "determined", "healing"]
    },
    {
        quote: "Do, or do not. There is no try.",
        movie: "Star Wars: The Empire Strikes Back",
        emotions: ["determined", "focused", "strong", "motivated", "decisive"]
    },
    {
        quote: "It's not who I am underneath, but what I do that defines me.",
        movie: "Batman Begins",
        emotions: ["determined", "strong", "confident", "brave", "resolute"]
    },
    {
        quote: "Just keep swimming.",
        movie: "Finding Nemo",
        emotions: ["persistent", "determined", "hopeful", "tired", "resilient"]
    },
    {
        quote: "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
        movie: "Ferris Bueller's Day Off",
        emotions: ["thoughtful", "carefree", "wise", "reflective", "philosophical"]
    },
    {
        quote: "Great men are not born great, they grow great.",
        movie: "The Godfather",
        emotions: ["ambitious", "determined", "inspired", "motivated", "strong"]
    },
    {
        quote: "Get busy living, or get busy dying.",
        movie: "The Shawshank Redemption",
        emotions: ["determined", "resolute", "brave", "desperate", "hopeful"]
    },
    {
        quote: "I'm going to make him an offer he can't refuse.",
        movie: "The Godfather",
        emotions: ["confident", "powerful", "determined", "ambitious", "commanding"]
    },
    {
        quote: "Nobody is gonna hit as hard as life, but it ain't how hard you can hit. It's how hard you can get hit and keep moving forward.",
        movie: "Rocky Balboa",
        emotions: ["resilient", "strong", "determined", "brave", "persistent"]
    },
    {
        quote: "It is not our abilities that show what we truly are… it is our choices.",
        movie: "Harry Potter and the Chamber of Secrets",
        emotions: ["wise", "thoughtful", "reflective", "determined", "hopeful"]
    },

    // Love & Friendship Quotes
    {
        quote: "Some people are worth melting for.",
        movie: "Frozen",
        emotions: ["loving", "caring", "affectionate", "devoted", "romantic"]
    },
    {
        quote: "To me, you are perfect.",
        movie: "Love Actually",
        emotions: ["loving", "romantic", "affectionate", "happy", "content"]
    },
    {
        quote: "You complete me.",
        movie: "Jerry Maguire",
        emotions: ["loving", "romantic", "fulfilled", "happy", "content"]
    },
    {
        quote: "You had me at hello.",
        movie: "Jerry Maguire",
        emotions: ["loving", "romantic", "happy", "excited", "joyful"]
    },
    {
        quote: "I'm also just a girl, standing in front of a boy, asking him to love her.",
        movie: "Notting Hill",
        emotions: ["vulnerable", "hopeful", "romantic", "loving", "nervous"]
    },

    // Adventure & Excitement Quotes
    {
        quote: "To infinity and beyond!",
        movie: "Toy Story",
        emotions: ["excited", "adventurous", "brave", "confident", "enthusiastic"]
    },
    {
        quote: "Life is a banquet, and most poor suckers are starving to death!",
        movie: "Auntie Mame",
        emotions: ["excited", "enthusiastic", "joyful", "passionate", "energetic"]
    },
    {
        quote: "Adventure is out there!",
        movie: "Up",
        emotions: ["excited", "adventurous", "hopeful", "enthusiastic", "eager"]
    },
    {
        quote: "I'm king of the world!",
        movie: "Titanic",
        emotions: ["excited", "joyful", "triumphant", "free", "happy"]
    },
    {
        quote: "Life finds a way.",
        movie: "Jurassic Park",
        emotions: ["hopeful", "determined", "resilient", "philosophical", "wise"]
    },

    // Wisdom & Life Lessons
    {
        quote: "Life is like a box of chocolates, you never know what you're gonna get.",
        movie: "Forrest Gump",
        emotions: ["philosophical", "wise", "reflective", "uncertain", "accepting"]
    },
    {
        quote: "All we have to decide is what to do with the time that is given us.",
        movie: "The Lord of the Rings: The Fellowship of the Ring",
        emotions: ["wise", "philosophical", "determined", "thoughtful", "hopeful"]
    },
    {
        quote: "With great power comes great responsibility.",
        movie: "Spider-Man",
        emotions: ["wise", "serious", "responsible", "thoughtful", "determined"]
    },
    {
        quote: "The things you own end up owning you.",
        movie: "Fight Club",
        emotions: ["philosophical", "reflective", "wise", "cynical", "thoughtful"]
    },
    {
        quote: "It's only after we've lost everything that we're free to do anything.",
        movie: "Fight Club",
        emotions: ["philosophical", "liberated", "reflective", "wise", "free"]
    },

    // Courage & Strength Quotes
    {
        quote: "I could do this all day.",
        movie: "Captain America: The First Avenger",
        emotions: ["determined", "brave", "resilient", "strong", "persistent"]
    },
    {
        quote: "Today is a good day to die.",
        movie: "Star Trek",
        emotions: ["brave", "determined", "resolute", "fearless", "accepting"]
    },
    {
        quote: "Now for wrath, now for ruin, and the red dawn!",
        movie: "The Lord of the Rings: The Two Towers",
        emotions: ["brave", "determined", "fierce", "strong", "resolute"]
    },
    {
        quote: "Fear is the path to the dark side.",
        movie: "Star Wars: The Phantom Menace",
        emotions: ["wise", "cautionary", "philosophical", "serious", "thoughtful"]
    },
    {
        quote: "I am Iron Man.",
        movie: "Iron Man",
        emotions: ["confident", "proud", "determined", "strong", "resolute"]
    },
    {
        quote: "Even the darkest night will end and the sun will rise.",
        movie: "Les Misérables",
        emotions: ["hopeful", "optimistic", "encouraging", "inspiring", "uplifting"]
    },
    {
        quote: "Tomorrow is another day.",
        movie: "Gone with the Wind",
        emotions: ["hopeful", "determined", "resilient", "optimistic", "forward-looking"]
    },
    {
        quote: "The flower that blooms in adversity is the most rare and beautiful of all.",
        movie: "Mulan",
        emotions: ["hopeful", "inspiring", "wise", "encouraging", "uplifting"]
    },
    {
        quote: "Keep your friends close, but your enemies closer.",
        movie: "The Godfather Part II",
        emotions: ["wise", "cautious", "strategic", "cunning", "serious"]
    },
    {
        quote: "Hakuna Matata - it means no worries.",
        movie: "The Lion King",
        emotions: ["carefree", "happy", "relaxed", "peaceful", "optimistic"]
    },

    // Determination & Perseverance
    {
        quote: "It's not about how hard you can hit. It's about how hard you can get hit and keep moving forward.",
        movie: "Rocky Balboa",
        emotions: ["determined", "resilient", "strong", "inspiring", "brave"]
    },
    {
        quote: "I'll be back.",
        movie: "The Terminator",
        emotions: ["determined", "confident", "strong", "resolute", "threatening"]
    },
    {
        quote: "Hasta la vista, baby.",
        movie: "Terminator 2: Judgment Day",
        emotions: ["confident", "determined", "powerful", "triumphant", "bold"]
    },
    {
        quote: "You shall not pass!",
        movie: "The Lord of the Rings: The Fellowship of the Ring",
        emotions: ["determined", "brave", "powerful", "defiant", "protective"]
    },
    {
        quote: "I can do this all day.",
        movie: "Captain America: The First Avenger",
        emotions: ["determined", "resilient", "brave", "persistent", "strong"]
    },

    // Self-Discovery & Growth
    {
        quote: "Remember who you are.",
        movie: "The Lion King",
        emotions: ["proud", "confident", "nostalgic", "determined", "inspired"]
    },
    {
        quote: "No one can make you feel inferior without your consent.",
        movie: "Princess Diaries",
        emotions: ["confident", "empowered", "strong", "wise", "determined"]
    },
    {
        quote: "There's no place like home.",
        movie: "The Wizard of Oz",
        emotions: ["nostalgic", "comforted", "peaceful", "longing", "content"]
    },
    {
        quote: "I'm going to make my own kind of music.",
        movie: "Bohemian Rhapsody",
        emotions: ["determined", "confident", "creative", "rebellious", "independent"]
    },
    {
        quote: "I see now that one's birth is irrelevant. It's what you do that determines who you are.",
        movie: "Mewtwo Strikes Back",
        emotions: ["wise", "philosophical", "reflective", "determined", "enlightened"]
    },

    // Friendship & Loyalty
    {
        quote: "You've got a friend in me.",
        movie: "Toy Story",
        emotions: ["friendly", "loving", "loyal", "supportive", "caring"]
    },
    {
        quote: "Ohana means family, and family means nobody gets left behind or forgotten.",
        movie: "Lilo & Stitch",
        emotions: ["loving", "loyal", "protective", "caring", "determined"]
    },
    {
        quote: "I would rather walk with a friend in the dark than alone in the light.",
        movie: "Thor: Ragnarok",
        emotions: ["loyal", "friendly", "supportive", "brave", "devoted"]
    },
    {
        quote: "You're still our brother and we're with you until the end of the line.",
        movie: "Captain America: The Winter Soldier",
        emotions: ["loyal", "determined", "supportive", "loving", "devoted"]
    },
    {
        quote: "My friends, you bow to no one.",
        movie: "The Lord of the Rings: The Return of the King",
        emotions: ["proud", "respectful", "admiring", "grateful", "honored"]
    },

    // Humor & Joy
    {
        quote: "Why so serious?",
        movie: "The Dark Knight",
        emotions: ["playful", "mischievous", "dark", "amused", "sarcastic"]
    },
    {
        quote: "I am serious. And don't call me Shirley.",
        movie: "Airplane!",
        emotions: ["humorous", "playful", "silly", "amused", "witty"]
    },
    {
        quote: "I feel the need... the need for speed!",
        movie: "Top Gun",
        emotions: ["excited", "enthusiastic", "energetic", "playful", "confident"]
    },
    {
        quote: "You're killing me, Smalls!",
        movie: "The Sandlot",
        emotions: ["frustrated", "amused", "exasperated", "playful", "friendly"]
    },
    {
        quote: "Roads? Where we're going, we don't need roads.",
        movie: "Back to the Future",
        emotions: ["excited", "adventurous", "confident", "optimistic", "bold"]
    },
    {
        quote: "Frankly, my dear, I don't give a damn.",
        movie: "Gone with the Wind",
        emotions: ["defiant", "indifferent", "strong", "resolute", "done"]
    },
    {
        quote: "Here's looking at you, kid.",
        movie: "Casablanca",
        emotions: ["nostalgic", "loving", "bittersweet", "romantic", "resigned"]
    },
    {
        quote: "I'm going to make him an offer he can't refuse.",
        movie: "The Godfather",
        emotions: ["powerful", "threatening", "confident", "determined", "commanding"]
    },
    {
        quote: "We'll always have Paris.",
        movie: "Casablanca",
        emotions: ["nostalgic", "romantic", "bittersweet", "loving", "resigned"]
    },
    {
        quote: "I am big! It's the pictures that got small.",
        movie: "Sunset Boulevard",
        emotions: ["proud", "defiant", "bitter", "confident", "dramatic"]
    },

    // Action & Adventure
    {
        quote: "Yippee-ki-yay, motherf****r!",
        movie: "Die Hard",
        emotions: ["defiant", "confident", "bold", "rebellious", "fierce"]
    },
    {
        quote: "I feel the need... the need for speed!",
        movie: "Top Gun",
        emotions: ["excited", "enthusiastic", "confident", "energetic", "playful"]
    },
    {
        quote: "I live my life a quarter mile at a time.",
        movie: "The Fast and the Furious",
        emotions: ["passionate", "focused", "intense", "determined", "alive"]
    },
    {
        quote: "This is Sparta!",
        movie: "300",
        emotions: ["fierce", "proud", "defiant", "powerful", "determined"]
    },
    {
        quote: "I am the law!",
        movie: "Judge Dredd",
        emotions: ["powerful", "authoritative", "confident", "commanding", "stern"]
    },

    // Science Fiction
    {
        quote: "May the Force be with you.",
        movie: "Star Wars",
        emotions: ["hopeful", "encouraging", "supportive", "spiritual", "wise"]
    },
    {
        quote: "I'll be back.",
        movie: "The Terminator",
        emotions: ["determined", "threatening", "confident", "resolute", "ominous"]
    },
    {
        quote: "The needs of the many outweigh the needs of the few.",
        movie: "Star Trek II: The Wrath of Khan",
        emotions: ["wise", "philosophical", "sacrificial", "noble", "resigned"]
    },
    {
        quote: "I know kung fu.",
        movie: "The Matrix",
        emotions: ["amazed", "confident", "excited", "empowered", "surprised"]
    },
    {
        quote: "Do you want to know more?",
        movie: "Starship Troopers",
        emotions: ["curious", "eager", "interested", "engaged", "motivated"]
    },

    // Romance & Love
    {
        quote: "Love means never having to say you're sorry.",
        movie: "Love Story",
        emotions: ["loving", "understanding", "forgiving", "romantic", "tender"]
    },
    {
        quote: "As you wish.",
        movie: "The Princess Bride",
        emotions: ["loving", "devoted", "romantic", "tender", "faithful"]
    },
    {
        quote: "You make me want to be a better man.",
        movie: "As Good as It Gets",
        emotions: ["inspired", "loving", "grateful", "changed", "motivated"]
    },
    {
        quote: "You had me at hello.",
        movie: "Jerry Maguire",
        emotions: ["loving", "moved", "emotional", "touched", "joyful"]
    },
    {
        quote: "I'm just a girl, standing in front of a boy, asking him to love her.",
        movie: "Notting Hill",
        emotions: ["vulnerable", "honest", "hopeful", "loving", "brave"]
    },

    // Comedy
    {
        quote: "Nobody's perfect.",
        movie: "Some Like It Hot",
        emotions: ["accepting", "humorous", "understanding", "wise", "lighthearted"]
    },
    {
        quote: "I'm walking here!",
        movie: "Midnight Cowboy",
        emotions: ["annoyed", "assertive", "bold", "frustrated", "defiant"]
    },
    {
        quote: "You can't handle the truth!",
        movie: "A Few Good Men",
        emotions: ["angry", "intense", "passionate", "defiant", "powerful"]
    },
    {
        quote: "Show me the money!",
        movie: "Jerry Maguire",
        emotions: ["excited", "demanding", "enthusiastic", "energetic", "passionate"]
    },
    {
        quote: "You're gonna need a bigger boat.",
        movie: "Jaws",
        emotions: ["worried", "concerned", "anxious", "fearful", "urgent"]
    },

    // Animated Films
    {
        quote: "The past can hurt. But you can either run from it, or learn from it.",
        movie: "The Lion King",
        emotions: ["wise", "philosophical", "encouraging", "hopeful", "reflective"]
    },
    {
        quote: "Fish are friends, not food.",
        movie: "Finding Nemo",
        emotions: ["determined", "principled", "friendly", "resolute", "reformed"]
    },
    {
        quote: "Adventure is out there!",
        movie: "Up",
        emotions: ["excited", "adventurous", "hopeful", "enthusiastic", "eager"]
    },
    {
        quote: "Remember me, though I have to say goodbye.",
        movie: "Coco",
        emotions: ["bittersweet", "loving", "nostalgic", "sad", "hopeful"]
    },
    {
        quote: "The only way to get what you want in this world is through hard work.",
        movie: "The Princess and the Frog",
        emotions: ["determined", "motivated", "wise", "hardworking", "focused"]
    },

    // Superhero Movies
    {
        quote: "With great power comes great responsibility.",
        movie: "Spider-Man",
        emotions: ["wise", "serious", "responsible", "thoughtful", "determined"]
    },
    {
        quote: "I can do this all day.",
        movie: "Captain America",
        emotions: ["determined", "resilient", "brave", "strong", "persistent"]
    },
    {
        quote: "We are Groot.",
        movie: "Guardians of the Galaxy",
        emotions: ["loving", "sacrificial", "protective", "devoted", "brave"]
    },
    {
        quote: "Wakanda forever!",
        movie: "Black Panther",
        emotions: ["proud", "patriotic", "determined", "strong", "united"]
    },
    {
        quote: "That's my secret, Captain. I'm always angry.",
        movie: "The Avengers",
        emotions: ["controlled", "powerful", "intense", "confident", "resolute"]
    }
];

const emotionMap = {
    "happy": ["joy", "joyful", "cheerful", "delighted", "content", "pleased", "satisfied", "blissful", "merry", "jubilant", "ecstatic", "gleeful", "radiant"],
    "sad": ["unhappy", "sorrowful", "depressed", "down", "blue", "gloomy", "melancholy", "heartbroken", "grieving", "miserable", "dejected", "despondent"],
    "angry": ["mad", "furious", "enraged", "irritated", "annoyed", "frustrated", "outraged", "irate", "hostile", "bitter", "resentful", "indignant"],
    "scared": ["afraid", "fearful", "terrified", "anxious", "nervous", "worried", "frightened", "panicked", "petrified", "apprehensive", "uneasy"],
    "excited": ["thrilled", "enthusiastic", "eager", "energetic", "pumped", "animated", "elated", "exhilarated", "passionate", "zealous"],
    "determined": ["resolved", "committed", "dedicated", "focused", "driven", "motivated", "steadfast", "purposeful", "tenacious", "persistent"],
    "peaceful": ["calm", "serene", "tranquil", "relaxed", "composed", "centered", "harmonious", "placid", "quiet", "still"],
    "proud": ["accomplished", "confident", "satisfied", "triumphant", "dignified", "self-assured", "pleased", "honored", "noble"],
    "brave": ["courageous", "fearless", "valiant", "heroic", "bold", "daring", "intrepid", "gallant", "dauntless"],
    "wise": ["sage", "knowledgeable", "enlightened", "understanding", "insightful", "prudent", "discerning", "judicious"],
    "hopeful": ["optimistic", "positive", "encouraged", "confident", "assured", "promising", "anticipating", "expectant"],
    "loving": ["affectionate", "caring", "tender", "devoted", "adoring", "fond", "warm", "compassionate", "gentle"],
    "grateful": ["thankful", "appreciative", "blessed", "moved", "touched", "indebted", "obliged", "recognized"],
    "confident": ["self-assured", "certain", "positive", "empowered", "strong", "secure", "assertive", "bold"],
    "playful": ["fun-loving", "mischievous", "jolly", "spirited", "lighthearted", "whimsical", "carefree", "silly"],
    "inspired": ["motivated", "encouraged", "stimulated", "energized", "creative", "uplifted", "moved", "influenced"],
    "nostalgic": ["reminiscent", "wistful", "sentimental", "yearning", "longing", "remembering", "retrospective"],
    "free": ["liberated", "unrestrained", "unrestricted", "independent", "unfettered", "emancipated", "autonomous"],
    "powerful": ["strong", "mighty", "formidable", "influential", "commanding", "dominant", "potent", "forceful"],
    "creative": ["imaginative", "innovative", "artistic", "inventive", "original", "resourceful", "ingenious"],
    "rebellious": ["defiant", "resistant", "revolutionary", "insurgent", "nonconformist", "unruly", "insubordinate"],
    "passionate": ["ardent", "fervent", "intense", "enthusiastic", "zealous", "devoted", "eager"],
    "fierce": ["intense", "powerful", "strong", "determined", "ferocious", "bold"],
    "spiritual": ["enlightened", "peaceful", "centered", "mindful", "contemplative"],
    "reformed": ["changed", "improved", "transformed", "renewed", "converted"],
    "patriotic": ["loyal", "devoted", "proud", "faithful", "dedicated"],
    "united": ["together", "connected", "joined", "allied", "combined"],
    "controlled": ["composed", "restrained", "disciplined", "measured", "contained"],
    "bittersweet": ["melancholy", "wistful", "poignant", "touching", "meaningful"],
    "principled": ["ethical", "moral", "righteous", "honorable", "upright"]
};