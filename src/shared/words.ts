export interface WordEntry {
  word: string;
  hint: string;
}

const PERSON = 'A Person';
const PLACE = 'A Place';
const THING = 'A Thing';
const FOOD = 'Food or Drink';
const ANIMAL = 'An Animal';
const MEDIA = 'Something to Watch or Play';

const people: string[] = [
  // Actors
  'Tom Cruise', 'Tom Hanks', 'Brad Pitt', 'Leonardo DiCaprio', 'Will Smith',
  'Robert Downey Jr.', 'Dwayne Johnson', 'Denzel Washington', 'Morgan Freeman',
  'Samuel L. Jackson', 'Keanu Reeves', 'Hugh Jackman', 'Ryan Reynolds',
  'Chris Hemsworth', 'Chris Evans', 'Chris Pratt', 'Robert De Niro', 'Al Pacino',
  'Jack Nicholson', 'Johnny Depp', 'Matt Damon', 'Ben Affleck', 'Jim Carrey',
  'Adam Sandler', 'Kevin Hart', 'Eddie Murphy', 'Jackie Chan', 'Bruce Lee',
  // Actresses
  'Meryl Streep', 'Jennifer Lawrence', 'Scarlett Johansson', 'Zendaya',
  'Margot Robbie', 'Emma Stone', 'Emma Watson', 'Natalie Portman', 'Angelina Jolie',
  'Sandra Bullock', 'Julia Roberts', 'Nicole Kidman', 'Cate Blanchett',
  'Anne Hathaway', 'Jennifer Aniston', 'Reese Witherspoon', 'Kristen Stewart',
  'Gal Gadot', 'Anya Taylor-Joy', 'Florence Pugh',
  // Musicians
  'Taylor Swift', 'Beyoncé', 'Drake', 'Ed Sheeran', 'Bruno Mars', 'Lady Gaga',
  'Rihanna', 'Justin Bieber', 'Ariana Grande', 'Billie Eilish', 'Olivia Rodrigo',
  'Harry Styles', 'Dua Lipa', 'The Weeknd', 'Sabrina Carpenter', 'Bad Bunny',
  'Michael Jackson', 'Elvis Presley', 'Freddie Mercury', 'Bob Dylan', 'Bob Marley',
  'David Bowie', 'Prince', 'Madonna', 'Whitney Houston', 'Mariah Carey',
  'Adele', 'Shakira', 'Kanye West', 'Eminem', 'Snoop Dogg', 'Jay-Z',
  'Kendrick Lamar', 'Post Malone', 'Travis Scott', 'Paul McCartney', 'John Lennon',
  'Stevie Wonder', 'Frank Sinatra', 'Johnny Cash', 'Dolly Parton',
  // Athletes
  'LeBron James', 'Michael Jordan', 'Kobe Bryant', 'Stephen Curry', 'Shaquille O\'Neal',
  'Tiger Woods', 'Serena Williams', 'Venus Williams', 'Roger Federer', 'Rafael Nadal',
  'Novak Djokovic', 'Cristiano Ronaldo', 'Lionel Messi', 'Pelé', 'Diego Maradona',
  'Tom Brady', 'Peyton Manning', 'Patrick Mahomes', 'Usain Bolt', 'Michael Phelps',
  'Simone Biles', 'Muhammad Ali', 'Mike Tyson', 'Floyd Mayweather', 'Wayne Gretzky',
  'Babe Ruth', 'Derek Jeter',
  // Historical figures
  'Abraham Lincoln', 'George Washington', 'Thomas Jefferson', 'Benjamin Franklin',
  'Albert Einstein', 'Isaac Newton', 'Galileo', 'Nikola Tesla', 'Thomas Edison',
  'Charles Darwin', 'Marie Curie', 'Leonardo da Vinci', 'Michelangelo',
  'William Shakespeare', 'Mark Twain', 'Ernest Hemingway', 'Napoleon',
  'Winston Churchill', 'Queen Elizabeth II', 'Martin Luther King Jr.',
  'Mahatma Gandhi', 'Nelson Mandela', 'Mother Teresa', 'Joan of Arc', 'Cleopatra',
  'Julius Caesar', 'Christopher Columbus', 'Amelia Earhart', 'Rosa Parks',
  'Anne Frank', 'Helen Keller', 'Florence Nightingale', 'Marco Polo',
  // Tech / business
  'Elon Musk', 'Steve Jobs', 'Bill Gates', 'Mark Zuckerberg', 'Jeff Bezos',
  'Warren Buffett', 'Oprah Winfrey', 'Walt Disney', 'Henry Ford',
  // Fictional people
  'Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Dumbledore', 'Voldemort',
  'Sherlock Holmes', 'James Bond', 'Indiana Jones', 'Forrest Gump', 'Rocky Balboa',
  'Katniss Everdeen', 'Gandalf', 'Frodo Baggins', 'Bilbo Baggins', 'Aragorn',
  'Legolas', 'Luke Skywalker', 'Darth Vader', 'Princess Leia', 'Han Solo', 'Yoda',
  'Obi-Wan Kenobi', 'Spider-Man', 'Batman', 'Superman', 'Wonder Woman',
  'Captain America', 'Iron Man', 'Thor', 'Hulk', 'Black Widow', 'Deadpool',
  'Wolverine', 'Joker', 'Catwoman', 'Mario', 'Luigi', 'Princess Peach',
  'Sonic the Hedgehog', 'Pikachu', 'Link', 'Kratos', 'Lara Croft', 'Master Chief',
  'Homer Simpson', 'Bart Simpson', 'SpongeBob', 'Mickey Mouse', 'Donald Duck',
  'Bugs Bunny', 'Scooby-Doo', 'Shrek', 'Woody', 'Buzz Lightyear', 'Elsa', 'Moana',
  'Simba', 'Aladdin', 'Cinderella', 'Snow White', 'Peter Pan', 'Winnie the Pooh',
];

const places: string[] = [
  // Countries
  'France', 'Japan', 'Italy', 'Brazil', 'Egypt', 'Australia', 'Canada', 'Mexico',
  'Germany', 'Spain', 'Greece', 'India', 'China', 'Russia', 'South Korea',
  'Thailand', 'Vietnam', 'Indonesia', 'Turkey', 'Morocco', 'Kenya', 'Nigeria',
  'Argentina', 'Chile', 'Peru', 'Colombia', 'Cuba', 'Jamaica', 'Iceland', 'Ireland',
  'Scotland', 'Portugal', 'Netherlands', 'Switzerland', 'Norway', 'Sweden',
  'Finland', 'Denmark', 'Poland', 'United States', 'United Kingdom',
  // Cities
  'Paris', 'Tokyo', 'New York', 'London', 'Rome', 'Sydney', 'Dubai', 'Hong Kong',
  'Barcelona', 'Amsterdam', 'Venice', 'Istanbul', 'Bangkok', 'Singapore',
  'Los Angeles', 'Las Vegas', 'Miami', 'Chicago', 'Berlin', 'Moscow', 'Mumbai',
  'Seoul', 'Cairo', 'Athens', 'Dublin', 'Prague', 'Vienna', 'Budapest', 'Lisbon',
  'Madrid', 'Munich', 'Rio de Janeiro', 'Buenos Aires', 'Toronto', 'Vancouver',
  'San Francisco', 'Boston', 'Seattle', 'Austin', 'Nashville', 'New Orleans',
  'Honolulu', 'Kyoto',
  // Landmarks
  'Eiffel Tower', 'Statue of Liberty', 'Great Wall of China', 'Pyramids of Giza',
  'Taj Mahal', 'Colosseum', 'Stonehenge', 'Mount Everest', 'Niagara Falls',
  'Grand Canyon', 'Big Ben', 'Sydney Opera House', 'Mount Rushmore', 'Machu Picchu',
  'Leaning Tower of Pisa', 'Hollywood Sign', 'Golden Gate Bridge', 'Brooklyn Bridge',
  'Empire State Building', 'Burj Khalifa', 'Christ the Redeemer', 'Sagrada Familia',
  'Louvre', 'Buckingham Palace', 'White House',
  // Natural / geographic
  'Amazon Rainforest', 'Sahara Desert', 'Mount Fuji', 'Mount Kilimanjaro',
  'Victoria Falls', 'Great Barrier Reef', 'Galapagos Islands', 'Serengeti',
  'Atlantis', 'Antarctica', 'Bermuda Triangle', 'Area 51', 'Times Square',
  'Central Park',
];

const things: string[] = [
  // Tech
  'iPhone', 'Laptop', 'Headphones', 'Camera', 'Smartwatch', 'Tablet', 'Television',
  'Drone', 'VR Headset', 'Printer', 'Keyboard', 'Computer Mouse', 'Charger',
  'USB Drive', 'Robot', 'Speaker', 'Microphone', 'Remote Control', 'Router',
  'Game Console', 'Selfie Stick',
  // Appliances / household
  'Sofa', 'Bed', 'Lamp', 'Mirror', 'Clock', 'Table', 'Chair', 'Refrigerator',
  'Microwave', 'Oven', 'Dishwasher', 'Toaster', 'Blender', 'Vacuum Cleaner',
  'Washing Machine', 'Kettle', 'Fan', 'Curtains', 'Rug', 'Pillow', 'Blanket',
  'Towel', 'Broom', 'Bookshelf', 'Candle', 'Bathtub', 'Shower', 'Toilet', 'Sink',
  'Faucet', 'Door', 'Window', 'Stairs', 'Fireplace', 'Chimney',
  // Tools
  'Hammer', 'Screwdriver', 'Wrench', 'Saw', 'Drill', 'Pliers', 'Ladder',
  'Measuring Tape', 'Paintbrush', 'Level', 'Axe', 'Shovel', 'Rake', 'Chainsaw',
  'Flashlight', 'Duct Tape', 'Nails', 'Rope',
  // Vehicles
  'Car', 'Bicycle', 'Motorcycle', 'Airplane', 'Helicopter', 'Boat', 'Submarine',
  'Train', 'Bus', 'Scooter', 'Truck', 'Taxi', 'Ambulance', 'Fire Truck',
  'Police Car', 'Spaceship', 'Hot Air Balloon', 'Sailboat', 'Canoe', 'Skateboard',
  'Rollerblades', 'Unicycle',
  // Personal items
  'Wallet', 'Keys', 'Sunglasses', 'Wristwatch', 'Backpack', 'Umbrella', 'Necklace',
  'Ring', 'Hat', 'Scarf', 'Glasses', 'Belt', 'Shoes', 'Jacket', 'Gloves',
  'Handbag', 'Suitcase', 'Bracelet', 'Earrings', 'Tie',
  // Office / school
  'Pen', 'Pencil', 'Notebook', 'Stapler', 'Scissors', 'Tape', 'Calculator',
  'Whiteboard', 'Marker', 'Eraser', 'Paper', 'Envelope', 'Folder', 'Ruler',
  'Clipboard', 'Textbook',
  // Toys / games / sports gear
  'Lego', 'Rubik\'s Cube', 'Yo-Yo', 'Kite', 'Board Game', 'Jigsaw Puzzle',
  'Deck of Cards', 'Dice', 'Chess Set', 'Frisbee', 'Jump Rope', 'Trampoline',
  'Water Gun', 'Teddy Bear', 'Action Figure', 'Basketball', 'Soccer Ball',
  'Baseball Bat', 'Tennis Racket', 'Golf Club', 'Bowling Ball', 'Fishing Rod',
  'Surfboard', 'Snowboard', 'Skis', 'Ice Skates',
  // Music / misc
  'Piano', 'Guitar', 'Violin', 'Drums', 'Flute', 'Trumpet', 'Saxophone', 'Harp',
  'Accordion', 'Harmonica',
  // Nature-adjacent objects
  'Rainbow', 'Snowflake', 'Sandcastle',
];

const food: string[] = [
  // Fruits
  'Apple', 'Banana', 'Strawberry', 'Watermelon', 'Mango', 'Pineapple', 'Grapes',
  'Orange', 'Avocado', 'Peach', 'Blueberry', 'Raspberry', 'Kiwi', 'Pear', 'Cherry',
  'Lemon', 'Lime', 'Coconut', 'Pomegranate', 'Papaya',
  // Vegetables
  'Carrot', 'Broccoli', 'Onion', 'Potato', 'Tomato', 'Cucumber', 'Spinach', 'Corn',
  'Lettuce', 'Mushroom', 'Garlic', 'Pumpkin', 'Eggplant', 'Asparagus', 'Cabbage',
  'Celery',
  // Proteins
  'Chicken', 'Beef', 'Bacon', 'Turkey', 'Salmon', 'Tuna', 'Shrimp', 'Eggs',
  'Meatballs', 'Sausage',
  // Meals / dishes
  'Pizza', 'Cheeseburger', 'Hot Dog', 'Taco', 'Sushi', 'Spaghetti', 'Lasagna',
  'Ramen', 'Pad Thai', 'Burrito', 'Sandwich', 'Salad', 'Steak', 'Soup', 'Curry',
  'Dumplings', 'Fried Rice', 'Mac and Cheese', 'Pancakes', 'Waffles', 'Omelette',
  'French Fries', 'Pretzel', 'Bagel', 'Croissant', 'Nachos', 'Quesadilla',
  'Fish and Chips', 'Peking Duck', 'Paella', 'Risotto', 'Gyro',
  // Desserts
  'Ice Cream', 'Chocolate', 'Birthday Cake', 'Cookies', 'Donut', 'Cupcake',
  'Brownie', 'Cheesecake', 'Apple Pie', 'Pudding', 'Marshmallow', 'Cotton Candy',
  'Tiramisu', 'Gingerbread', 'Lollipop', 'Macaron',
  // Drinks
  'Coffee', 'Tea', 'Smoothie', 'Soda', 'Lemonade', 'Milkshake', 'Orange Juice',
  'Hot Chocolate', 'Beer', 'Wine', 'Champagne', 'Cocktail', 'Boba Tea', 'Milk',
  'Water',
  // Snacks / pantry
  'Popcorn', 'Potato Chips', 'Cereal', 'Bread', 'Cheese', 'Butter', 'Honey',
  'Peanut Butter', 'Jam', 'Syrup', 'Salt', 'Sugar', 'Ketchup', 'Mustard',
];

const animals: string[] = [
  // Mammals
  'Lion', 'Tiger', 'Elephant', 'Giraffe', 'Zebra', 'Bear', 'Polar Bear', 'Wolf',
  'Fox', 'Dog', 'Cat', 'Horse', 'Cow', 'Pig', 'Sheep', 'Goat', 'Rabbit',
  'Squirrel', 'Deer', 'Moose', 'Kangaroo', 'Koala', 'Panda', 'Monkey', 'Gorilla',
  'Chimpanzee', 'Dolphin', 'Whale', 'Otter', 'Beaver', 'Raccoon', 'Skunk',
  'Hedgehog', 'Bat', 'Camel', 'Hippo', 'Rhinoceros', 'Cheetah', 'Leopard',
  'Jaguar', 'Llama', 'Hamster', 'Mouse',
  // Birds
  'Eagle', 'Owl', 'Penguin', 'Parrot', 'Chicken', 'Duck', 'Swan', 'Flamingo',
  'Peacock', 'Ostrich', 'Pigeon', 'Seagull', 'Hummingbird', 'Woodpecker',
  // Reptiles / amphibians
  'Snake', 'Crocodile', 'Turtle', 'Lizard', 'Frog', 'Chameleon', 'T-Rex',
  'Velociraptor',
  // Sea / water
  'Shark', 'Octopus', 'Jellyfish', 'Crab', 'Lobster', 'Seahorse', 'Starfish',
  'Clownfish', 'Stingray', 'Walrus', 'Seal',
  // Insects / others
  'Butterfly', 'Bee', 'Spider', 'Ant', 'Ladybug', 'Dragonfly', 'Caterpillar',
  'Scorpion', 'Snail', 'Worm', 'Grasshopper', 'Mosquito',
];

const media: string[] = [
  // Movies — classic / iconic
  'Titanic', 'Avatar', 'Jurassic Park', 'The Lion King', 'Forrest Gump',
  'The Godfather', 'Pulp Fiction', 'Jaws', 'Star Wars', 'The Matrix',
  'The Shawshank Redemption', 'Goodfellas', 'Schindler\'s List', 'Casablanca',
  'Gone with the Wind', 'The Wizard of Oz', 'Psycho', 'Rocky', 'Back to the Future',
  'E.T.', 'Ghostbusters', 'Die Hard', 'The Terminator', 'Alien', 'Gladiator',
  'Braveheart', 'Saving Private Ryan', 'Fight Club', 'The Silence of the Lambs',
  'Blade Runner', 'Pretty Woman', 'The Notebook', 'Dirty Dancing', 'Grease',
  // Movies — franchises / recent
  'The Avengers', 'The Dark Knight', 'Black Panther', 'Guardians of the Galaxy',
  'Deadpool', 'Spider-Verse', 'The Hunger Games', 'Twilight', 'The Hobbit',
  'The Lord of the Rings', 'Pirates of the Caribbean', 'Mission Impossible',
  'Fast and Furious', 'John Wick', 'Barbie', 'Oppenheimer', 'Dune', 'Everything Everywhere All at Once',
  'Top Gun', 'Inception', 'Interstellar',
  // Animated movies
  'Shrek', 'Toy Story', 'Finding Nemo', 'Frozen', 'Moana', 'Encanto', 'Inside Out',
  'Up', 'Wall-E', 'Ratatouille', 'Coco', 'Zootopia', 'Tangled', 'Beauty and the Beast',
  'Aladdin', 'The Little Mermaid', 'Mulan', 'Kung Fu Panda', 'How to Train Your Dragon',
  'Despicable Me', 'Ice Age', 'Madagascar', 'The Incredibles', 'Monsters Inc.',
  'Bambi', 'Dumbo', 'Pinocchio', 'Cinderella', 'Sleeping Beauty',
  // TV shows
  'Friends', 'The Office', 'Breaking Bad', 'Stranger Things', 'Game of Thrones',
  'The Simpsons', 'SpongeBob SquarePants', 'Seinfeld', 'Family Guy',
  'Peaky Blinders', 'Squid Game', 'Wednesday', 'The Mandalorian', 'The Crown',
  'Ted Lasso', 'The Bear', 'Succession', 'Euphoria', 'House of the Dragon',
  'Bridgerton', 'The Walking Dead', 'Lost', 'Friends', 'How I Met Your Mother',
  'Big Bang Theory', 'Grey\'s Anatomy', 'CSI', 'Law and Order', 'Star Trek',
  'Doctor Who', 'Sherlock', 'Black Mirror', 'House of Cards', 'Narcos',
  'Better Call Saul', 'Sex and the City', 'Modern Family', 'Parks and Recreation',
  'Arrested Development', 'Scrubs', 'South Park', 'Rick and Morty', 'Avatar the Last Airbender',
  // Video games
  'Minecraft', 'Fortnite', 'Super Mario', 'The Legend of Zelda', 'Pokemon',
  'Call of Duty', 'Grand Theft Auto', 'Tetris', 'Pac-Man', 'Sonic the Hedgehog',
  'Halo', 'Overwatch', 'League of Legends', 'Counter-Strike', 'FIFA', 'Roblox',
  'Among Us', 'Elden Ring', 'The Sims', 'Animal Crossing', 'Candy Crush',
  'Angry Birds', 'Street Fighter', 'Mortal Kombat', 'Resident Evil', 'Silent Hill',
  'Final Fantasy', 'Red Dead Redemption', 'Assassin\'s Creed', 'Skyrim',
  'World of Warcraft', 'Doom', 'Metroid', 'Mega Man', 'Donkey Kong',
  // Books / book franchises
  'Harry Potter', 'Narnia', 'Percy Jackson', 'Diary of a Wimpy Kid',
  'Charlotte\'s Web', 'Where the Wild Things Are', 'Goosebumps', 'Captain Underpants',
  'The Cat in the Hat', 'Green Eggs and Ham', 'Romeo and Juliet', 'Hamlet',
  'Moby Dick', 'Pride and Prejudice', 'The Great Gatsby', '1984', 'Dracula',
  'Frankenstein',
];

function toEntries(words: string[], hint: string): WordEntry[] {
  return words.map((word) => ({ word, hint }));
}

export const WORD_LIST: WordEntry[] = [
  ...toEntries(people, PERSON),
  ...toEntries(places, PLACE),
  ...toEntries(things, THING),
  ...toEntries(food, FOOD),
  ...toEntries(animals, ANIMAL),
  ...toEntries(media, MEDIA),
];
