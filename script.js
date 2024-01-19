
document.addEventListener('DOMContentLoaded', function() {
    const cards = [
        {
            name: 'Inferno Blast',
            type: 'Fire',
            format: 'Ranged',
            activation: 'Swipe the Card Through the Air',
            description: 'Unleashes a powerful stream of fire towards a distant target, causing immediate damage and additional burn effect over time.'
        },
        {
            name: 'Mystic Guardian',
            type: 'Nature',
            format: 'Summoner',
            activation: 'Clap the Card Between Hands',
            description: 'Summons a formidable creature of the forest, which defends the player and counters the next two attacks directed at them.'
        },
        {
            name: 'Echoes of Time',
            type: 'Time',
            format: 'Manipulator',
            activation: 'Flip the Card in the Air',
            description: 'Delays the opponent\'s next action, giving the player a tactical advantage to prepare or counter upcoming moves.'
        },
        {
            name: 'Celestial Shield',
            type: 'Cosmic',
            format: 'Defender',
            activation: 'Hold the Card to the Sky',
            description: 'Generates a protective barrier that absorbs a significant amount of incoming damage, and reflects a small portion back to the attacker.'
        },
        {
            name: 'Venomous Whispers',
            type: 'Toxic',
            format: 'Trap',
            activation: 'Whisper to the Card',
            description: 'Secretly lays a trap that, when triggered, releases a cloud of poison, weakening the opponent\'s attack power and reducing their defense.'
        },
        {
            name: 'Tempest Fury',
            type: 'Air',
            format: 'Ranged',
            activation: 'Spin Around with the Card',
            description: 'Creates a swirling vortex of wind that targets multiple enemies, dealing damage and disorienting them for a brief period.'
        },
        {
            name: 'Crystalize',
            type: 'Ice',
            format: 'Bane',
            activation: 'Throw Card on Ground',
            description: 'Instantly freezes a targeted element or card effect, nullifying its abilities and making it vulnerable to shattering.'
        },
        {
            name: 'Starfall',
            type: 'Cosmic',
            format: 'Ranged',
            activation: 'Lift Card in Air + Blow on It',
            description: 'Calls down a shower of celestial meteors onto the battlefield, striking random targets with high damage potential.'
        },
        {
            name: 'Ancient Wisdom',
            type: 'Mystic',
            format: 'Enhancer',
            activation: 'Trace a Symbol on the Card',
            description: 'Temporarily boosts the player\'s strategic insight, revealing the top three cards of the opponent\'s deck.'
        },
        {
            name: 'Shadow Veil',
            type: 'Darkness',
            format: 'Manipulator',
            activation: 'Look Intensely at the Card',
            description: 'Enshrouds the player in shadows, rendering them invisible for a short duration and immune to direct attacks.'
        },
        {
            name: 'Lunar Lament',
            type: 'Light',
            format: 'Enhancer',
            activation: 'Kiss the Card',
            description: 'Empowers the player with a serene lunar energy, enhancing their next three spell casts with increased potency and reduced activation time.'
        },
        {
            name: 'Boulder Barrage',
            type: 'Earth',
            format: 'Ranged',
            activation: 'Throw Card in Front',
            description: 'Launches a series of massive boulders towards the target area, dealing heavy damage and potentially stunning opponents caught in the impact.'
        },
        {
            name: 'Siren\'s Call',
            type: 'Water',
            format: 'Summoner',
            activation: 'Sing to the Card',
            description: 'Summons a mystical water siren whose enchanting melody disrupts enemy focus, causing confusion and slowing their movements.'
        },
        {
            name: 'Chaos Vortex',
            type: 'Chaos',
            format: 'Trap',
            activation: 'Shake the Card Vigorously',
            description: 'Creates a chaotic energy field that randomly teleports, swaps, or alters the properties of cards in play, for both players.'
        },
        {
            name: 'Psychic Mirage',
            type: 'Psychic',
            format: 'Deceptive',
            activation: 'Stare Intensely at an Opponent',
            description: 'Projects a mental illusion, making the opponent perceive false movements or attacks, potentially causing them to waste their cards.'
        },
        {
            name: 'Thunderclap',
            type: 'Lightning',
            format: 'Ranged',
            activation: 'Snap Fingers with the Card in Hand',
            description: 'Unleashes a sudden burst of lightning that targets multiple enemies, dealing damage and potentially causing paralysis.'
        },
        {
            name: 'Nature\'s Embrace',
            type: 'Nature',
            format: 'Defender',
            activation: 'Hold the Card to the Sky',
            description: 'Summons a protective embrace of nature, healing the player and creating a barrier that absorbs a portion of incoming damage.'
        },
        {
            name: 'Spectral Chains',
            type: 'Darkness',
            format: 'Trap',
            activation: 'Gesture with the Card Toward an Opponent',
            description: 'Binds the target with invisible chains, severely limiting their movement and preventing the use of certain card formats for a short duration.'
        },
        {
            name: 'Arcane Explosion',
            type: 'Mystic',
            format: 'Area Effect',
            activation: 'Press the Card Against the Heart',
            description: 'Detonates a powerful burst of arcane energy, affecting all players on the battlefield with random, but potent, spell effects.'
        },
        {
            name: 'Solar Flare',
            type: 'Light',
            format: 'Ranged',
            activation: 'Lift Card in Air',
            description: 'Harnesses the power of the sun to unleash a blinding flare, dealing significant damage to opponents and potentially blinding them temporarily.'
        },
        {
            name: 'Frostbite Gale',
            type: 'Ice',
            format: 'Ranged',
            activation: 'Spin Around with the Card',
            description: 'Unleashes a chilling wind that sweeps across the battlefield, slowing down opponents and causing gradual frost damage over time.'
        },
        {
            name: 'Elemental Harmony',
            type: 'Ether',
            format: 'Enhancer',
            activation: 'Trace a Symbol on the Card',
            description: 'Temporarily aligns the player\'s energy with the battlefield, reducing the cost and activation time of all elemental cards for a short period.'
        },
        {
            name: 'Iron Fortress',
            type: 'Metal',
            format: 'Defender',
            activation: 'Press the Card Against the Heart',
            description: 'Creates an impenetrable barrier of metal around the player, nullifying the next direct attack and reflecting a portion of its damage back to the attacker.'
        },
        {
            name: 'Vortex of Oblivion',
            type: 'Chaos',
            format: 'Area Effect',
            activation: 'Throw Card Upwards',
            description: 'Engulfs a targeted area in a chaotic vortex, randomly redistributing any active effects or traps within its radius.'
        },
        {
            name: 'Mind Weaver',
            type: 'Psychic',
            format: 'Manipulator',
            activation: 'Whisper to the Card',
            description: 'Allows the player to subtly influence the opponent\'s next card choice, guiding them towards a less advantageous play.'
        },
        {
            name: 'Lightning Lash',
            type: 'Lightning',
            format: 'Ranged',
            activation: 'Snap Fingers with the Card in Hand',
            description: 'Strikes a single target with a whip-like bolt of lightning, dealing high damage and potentially chaining to nearby enemies.'
        },
        {
            name: 'Roots of Rejuvenation',
            type: 'Nature',
            format: 'Summoner',
            activation: 'Throw Card on Ground',
            description: 'Grows a mystical tree on the battlefield that periodically heals the player and allies over time.'
        },
        {
            name: 'Void Pocket',
            type: 'Darkness',
            format: 'Trap',
            activation: 'Look Intensely at the Card',
            description: 'Creates a hidden trap that, once triggered, temporarily banishes the opponent\'s card, rendering it unusable for a short duration.'
        },
        {
            name: 'Arcane Rift',
            type: 'Mystic',
            format: 'Area Effect',
            activation: 'Gesture with the Card Toward an Ally',
            description: 'Opens a rift in the magical fabric, causing random spell effects to occur in a designated area, affecting all players present.'
        },
        {
            name: 'Solar Nova',
            type: 'Light',
            format: 'Ranged',
            activation: 'Lift Card in Air + Blow on It',
            description: 'Generates a powerful burst of solar energy, dealing extensive damage to a single target and causing a temporary blindness effect to nearby opponents.'
        },
        {
            name: 'Hell\'s Zoo',
            type: 'Fire',
            format: 'Summoner',
            activation: 'Throw Card on Ground',
            description: 'Conjures three fearsome demonic animals from the depths of the netherworld. Each animal possesses unique abilities and can attack independently, offering a formidable offensive presence on the battlefield.'
        },
        {
            name: 'Misty Dance',
            type: 'Ether',
            format: 'Manipulator',
            activation: 'Spin Around with the Card',
            description: 'Magically summons 10 cards from the player\'s deck, which hover face down in a mystic circle around the player. The player can grab and activate any of these cards at will. However, if an opponent manages to touch one of these cards, it activates automatically, introducing an element of risk and unpredictability.'
        },
        {
            name: 'Prayer',
            type: 'Light',
            format: 'Trap',
            activation: 'Throw Card on Ground',
            description: 'Traps the opponent within a sacred rune on the ground. During its effect, the player\'s spoken words can manifest into reality, but there\'s a catch: the player must address their opponent with the utmost respect and honor. Any lapse in this respect will break the spell, making this card a test of both strategy and discipline.'
        },
        {
            name: 'Mystic Sword',
            type: 'Ether',
            format: 'Enhancer',
            activation: 'Swipe the Card Through the Air',
            description: 'Conjures a shimmering sword of pure energy that the player can wield, increasing their attack power and granting the ability to perform swift melee strikes.'
        },
        {
            name: 'Teleportation',
            type: 'Time',
            format: 'Manipulator',
            activation: 'Snap Fingers with the Card in Hand',
            description: 'Allows the user to instantly teleport to any location they\'ve previously seen or have a mental image of, providing strategic positioning and escape options.'
        },
        {
            name: 'Fireball',
            type: 'Fire',
            format: 'Ranged',
            activation: 'Throw Card in Front',
            description: 'Hurls a blazing fireball towards a target, causing fiery explosion and immediate damage to the area of impact.'
        },
        {
            name: 'Chaos Ball',
            type: 'Chaos',
            format: 'Ranged',
            activation: 'Spin Around with the Card',
            description: 'Launches a flaming ball that, upon impact, creates chaotic distortions in reality, causing unpredictable and surreal effects in the surrounding area.'
        },
        {
            name: 'Goop Troop',
            type: 'Water',
            format: 'Summoner',
            activation: 'Clap the Card Between Hands',
            description: 'Summons a horde of goopy and sad monsters that aggressively attack opponents, immobilizing them with sticky goo and dealing damage.'
        },
        {
            name: 'Turntable',
            type: 'Time',
            format: 'Manipulator',
            activation: 'Flip the Card in the Air',
            description: 'Creates a zone where the game is forcibly turned into a turn-based format for a limited duration, adding strategic depth to the battle.'
        },
        {
            name: 'Dragonic Mage',
            type: 'Mystic',
            format: 'Summoner',
            activation: 'Cast the Card Toward an Opponent',
            description: 'Conjures a wise and powerful dragonic mage that can either defend the player by creating protective barriers or enhance the player\'s attacks with arcane power.'
        },
        {
            name: 'Astral Chains',
            type: 'Ether',
            format: 'Trap',
            activation: 'Whisper to the Card',
            description: 'Lays down invisible astral chains that, when triggered, immobilize and silence opponents, rendering them helpless for a brief duration.'
        },
        {
            name: 'Frost Nova',
            type: 'Ice',
            format: 'Area Effect',
            activation: 'Lift Card in Air + Blow on It',
            description: 'Creates a localized frost storm, freezing all nearby opponents and objects, preventing them from taking any action for a short period.'
        },
        {
            name: 'Ethereal Doppelganger',
            type: 'Ether',
            format: 'Manipulator',
            activation: 'Press the Card Against the Heart',
            description: 'Allows the player to temporarily create a shadowy, illusionary duplicate of themselves to confuse and distract opponents, potentially causing them to attack the wrong target.'
        },
        {
            name: 'Flaming Black Sphere',
            type: 'Darkness/Fire',
            format: 'Area Effect',
            activation: 'Cast the Card Toward the Sky',
            description: 'When activated, the card launches itself into the sky, gradually transforming into a flaming black hole that sucks in everything in its vicinity, causing massive damage and growing larger until it eventually collapses upon itself, creating a cataclysmic explosion.'
        },
        {
            name: 'All for Nothing',
            type: 'Chaos',
            format: 'Manipulator',
            activation: 'Throw Card Upwards',
            description: 'Once drawn, this card activates immediately, compelling the user to draw and activate all cards left in their deck except the very last one, creating a chaotic and unpredictable sequence of events.'
        },
        {
            name: 'Labyrinth of Illusions',
            type: 'Mystic',
            format: 'Trap',
            activation: 'Trace a Symbol on the Card',
            description: 'Creates an intricate labyrinth of illusions that disorients opponents, causing them to lose their sense of direction and making it difficult for them to find their way out.'
        },
        {
            name: 'Aegis of Echoes',
            type: 'Time',
            format: 'Defender',
            activation: 'Hold the Card to the Sky',
            description: 'Summons a protective shield that can rewind time for a brief moment, allowing the player to undo the last attack directed at them.'
        },
        {
            name: 'Thunderstorm Citadel',
            type: 'Air/Lightning',
            format: 'Summoner',
            activation: 'Clap the Card Between Hands',
            description: 'Conjures a floating citadel surrounded by a fierce thunderstorm. The citadel provides shelter and a strategic vantage point for the player, while the storm damages and disorients opponents.'
        },
        {
            name: 'Eternal Reflection',
            type: 'Ether',
            format: 'Enhancer',
            activation: 'Whisper to the Card',
            description: 'Creates a magical mirror that reflects all incoming attacks back at the opponent with increased intensity, making it a formidable defensive tool.'
        },
        {
            name: 'Venomous Mirage',
            type: 'Toxic',
            format: 'Deceptive',
            activation: 'Stare Intensely at an Opponent',
            description: 'Creates an illusory duplicate of the player that appears to be heavily poisoned, tempting opponents to attack it while the real player remains unharmed.'
        },
        {
            name: 'Sinkhole Abyss',
            type: 'Earth',
            format: 'Trap',
            activation: 'Throw Card on Ground',
            description: 'When activated, this card creates a series of hidden magical sinkholes across the battlefield. Opponents who step into these sinkholes are drawn beneath the earth\'s surface, immobilized and vulnerable to further attacks.'
        },
        {
            name: 'Spectral Mirage',
            type: 'Mystic',
            format: 'Deceptive',
            activation: 'Look Intensely at the Card',
            description: 'Generates an illusion of the player that appears to be attacking opponents, causing confusion and making it challenging for opponents to discern the real player\'s actions.'
        },
        {
            name: 'Frostbite Aura',
            type: 'Ice',
            format: 'Enhancer',
            activation: 'Clap the Card Between Hands',
            description: 'Surrounds the player with an icy aura that not only provides protection against fire-based attacks but also freezes nearby opponents upon contact.'
        },
        {
            name: 'Temporal Reversal',
            type: 'Time',
            format: 'Manipulator',
            activation: 'Flip the Card in the Air',
            description: 'Allows the player to reverse the outcome of a recent event, effectively undoing the last action taken by themselves or an opponent.'
        },
        {
            name: 'Berserker\'s Fury',
            type: 'Fire',
            format: 'Enhancer',
            activation: 'Swipe the Card Through the Air',
            description: 'Envelops the player in an intense blaze, greatly increasing their attack power and speed but also making them susceptible to fire-based attacks.'
        },
        {
            name: 'Crystal Labyrinth',
            type: 'Earth',
            format: 'Trap',
            activation: 'Trace a Symbol on the Card',
            description: 'Creates a labyrinth of crystal walls that confuse and impede opponents\' movements, making it challenging for them to navigate the battlefield.'
        },
        {
            name: 'Whirlwind Cyclone',
            type: 'Air',
            format: 'Ranged',
            activation: 'Spin Around with the Card',
            description: 'Summons a powerful cyclone that sweeps through the battlefield, lifting opponents into the air and causing damage through rapid spinning.'
        },
        {
            name: 'Nebula Surge',
            type: 'Cosmic',
            format: 'Ranged',
            activation: 'Hold the Card to the Sky',
            description: 'Calls upon the energy of distant nebulae to unleash a cosmic surge that can penetrate defenses and deal massive damage to opponents.'
        },
        {
            name: 'Venomous Nova',
            type: 'Toxic',
            format: 'Area Effect',
            activation: 'Press the Card Against the Heart',
            description: 'Triggers a toxic explosion, releasing a cloud of corrosive gas that lingers in the area, gradually weakening and poisoning opponents.'
        },
        {
            name: 'Astral Projection',
            type: 'Ether',
            format: 'Manipulator',
            activation: 'Kiss the Card',
            description: 'Allows the player to project their consciousness to a different location on the battlefield, enabling strategic reconnaissance or surprise attacks from a distance.'
        },
        {
            name: 'Spectral Blade Dance',
            type: 'Mystic',
            format: 'Enhancer',
            activation: 'Swipe the Card Through the Air',
            description: 'Conjures a set of spectral blades that orbit the player, enhancing their melee attacks and striking nearby opponents with each swing.'
        },
        {
            name: 'Ethereal Phalanx',
            type: 'Ether',
            format: 'Defender',
            activation: 'Press the Card Against the Heart',
            description: 'Forms an ethereal shield wall in front of the player, reducing incoming ranged attacks and providing temporary invulnerability to frontal assaults.'
        },
        {
            name: 'Shadowstep Assassin',
            type: 'Darkness',
            format: 'Manipulator',
            activation: 'Cast the Card Toward an Opponent',
            description: 'Allows the player to instantly teleport behind an opponent and deliver a devastating sneak attack, bypassing defenses.'
        },
        {
            name: 'Tempest Serpent',
            type: 'Air',
            format: 'Summoner',
            activation: 'Clap the Card Between Hands',
            description: 'Summons a serpentine creature of the skies that creates a powerful tornado, lifting opponents into the air and causing damage over time.'
        },
        {
            name: 'Frostbite Cleave',
            type: 'Ice',
            format: 'Ranged',
            activation: 'Throw Card in Front',
            description: 'Launches a freezing wave of energy that cleaves through opponents in its path, freezing them and causing damage.'
        },
        {
            name: 'Chaos Mirror',
            type: 'Chaos',
            format: 'Deceptive',
            activation: 'Whisper to the Card',
            description: 'Creates a mystical mirror that reflects any incoming attacks back at the opponent, with a twist—some attacks may be mirrored with unpredictable alterations.'
        },
        {
            name: 'Nature\'s Revival',
            type: 'Nature',
            format: 'Enhancer',
            activation: 'Kiss the Card',
            description: 'Embraces the player with the essence of nature, gradually restoring health and replenishing mana over time.'
        },
        {
            name: 'Gravity Well',
            type: 'Time',
            format: 'Trap',
            activation: 'Flip the Card in the Air',
            description: 'Activates a localized gravitational anomaly, pulling opponents toward a central point and temporarily reducing their movement speed.'
        },
        {
            name: 'Thunderstruck',
            type: 'Lightning',
            format: 'Ranged',
            activation: 'Snap Fingers with the Card in Hand',
            description: 'Calls down a series of electrifying bolts of lightning that strike multiple targets, chaining between opponents and causing paralysis.'
        },
        {
            name: 'Aqua Barrage',
            type: 'Water',
            format: 'Ranged',
            activation: 'Throw Card in Front',
            description: 'Unleashes a rapid series of high-pressure water projectiles towards the target, dealing damage and potentially knocking opponents back.'
        },
        {
            name: 'Tidal Wave',
            type: 'Water',
            format: 'Area Effect',
            activation: 'Clap the Card Between Hands',
            description: 'Summons a colossal tidal wave that crashes onto the battlefield, sweeping away opponents and causing damage over a wide area.'
        },
        {
            name: 'Hydro Shield',
            type: 'Water',
            format: 'Defender',
            activation: 'Hold the Card to the Sky',
            description: 'Creates a watery shield that absorbs incoming attacks and forms a protective barrier around the player, reducing damage taken.'
        },
        {
            name: 'Abyssal Grasp',
            type: 'Water',
            format: 'Trap',
            activation: 'Cast the Card Toward an Opponent',
            description: 'Sets a hidden trap that, when triggered, ensnares opponents in a watery vortex, rendering them immobile and vulnerable.'
        },
        {
            name: 'Aqua Serpent',
            type: 'Water',
            format: 'Summoner',
            activation: 'Whisper to the Card',
            description: 'Summons a serpentine water spirit that coils around opponents, squeezing and immobilizing them while dealing continuous damage.'
        },
        {
            name: 'Mist Veil',
            type: 'Water',
            format: 'Deceptive',
            activation: 'Stare Intensely at an Opponent',
            description: 'Shrouds the player in a dense mist, making them difficult to target and allowing for stealthy maneuvers.'
        },
        {
            name: 'Aqua Vortex',
            type: 'Water',
            format: 'Enhancer',
            activation: 'Kiss the Card',
            description: 'Surrounds the player with a swirling vortex of water, increasing their movement speed and attack power for a limited duration.'
        },
        {
            name: 'Whirlpool',
            type: 'Water',
            format: 'Area Effect',
            activation: 'Flip the Card in the Air',
            description: 'Creates a powerful whirlpool in a targeted area, pulling opponents towards the center and causing damage over time.'
        },
        {
            name: 'Coral Guardian',
            type: 'Water',
            format: 'Summoner',
            activation: 'Throw Card on Ground',
            description: 'Summons a guardian made of coral and seaweed, which can provide protection, heal the player, and create underwater terrain for strategic advantage.'
        },
        {
            name: 'Tsunami Surge',
            type: 'Water',
            format: 'Ranged',
            activation: 'Snap Fingers with the Card in Hand',
            description: 'Sends forth a massive wave that travels in a straight line, damaging all opponents in its path and potentially pushing them away.'
        },
        {
            name: 'Thunderstrike',
            type: 'Lightning',
            format: 'Ranged',
            activation: 'Throw Card in Front',
            description: 'Hurls a powerful bolt of lightning towards a target, causing a high-voltage explosion on impact and dealing heavy damage.'
        },
        {
            name: 'Electrostatic Field',
            type: 'Lightning',
            format: 'Area Effect',
            activation: 'Clap the Card Between Hands',
            description: 'Creates an electrified field that damages and paralyzes opponents within its radius, preventing them from taking actions.'
        },
        {
            name: 'Lightning Rod',
            type: 'Lightning',
            format: 'Defender',
            activation: 'Hold the Card to the Sky',
            description: 'Forms a lightning-infused shield that absorbs incoming attacks, converting them into energy that can be released as a powerful counterattack.'
        },
        {
            name: 'Voltage Snare',
            type: 'Lightning',
            format: 'Trap',
            activation: 'Cast the Card Toward an Opponent',
            description: 'Sets a hidden trap that, when triggered, ensnares opponents in crackling electrical snares, immobilizing them and dealing continuous damage.'
        },
        {
            name: 'Stormcaller',
            type: 'Lightning',
            format: 'Summoner',
            activation: 'Whisper to the Card',
            description: 'Summons a mighty storm elemental that commands the power of lightning, unleashing devastating electrical attacks on opponents.'
        },
        {
            name: 'Chain Lightning',
            type: 'Lightning',
            format: 'Ranged',
            activation: 'Snap Fingers with the Card in Hand',
            description: 'Releases a bolt of lightning that arcs between multiple targets, chaining its destructive energy from one opponent to the next.'
        },
        {
            name: 'Electromagnetic Distortion',
            type: 'Lightning',
            format: 'Manipulator',
            activation: 'Flip the Card in the Air',
            description: 'Creates a localized electromagnetic field that disrupts the magical abilities and electronics of opponents, temporarily rendering them powerless.'
        },
        {
            name: 'Volt Surge',
            type: 'Lightning',
            format: 'Enhancer',
            activation: 'Kiss the Card',
            description: 'Charges the player\'s body with electrical energy, granting increased speed, agility, and the ability to electrify melee attacks for a limited duration.'
        },
        {
            name: 'Plasma Nova',
            type: 'Lightning',
            format: 'Area Effect',
            activation: 'Swipe the Card Through the Air',
            description: 'Unleashes a powerful burst of plasma energy that engulfs a targeted area, dealing widespread damage and leaving a lingering burn effect.'
        },
        {
            name: 'Tesla Coil Guardian',
            type: 'Lightning',
            format: 'Summoner',
            activation: 'Throw Card on Ground',
            description: 'Summons a guardian in the form of a giant Tesla coil that zaps nearby opponents with electrical discharges, creating a hazardous zone on the battlefield.'
        },        
    ];

    // Function to filter and display cards
    function filterCards(filterValue) {
        // Filter the allCards array based on the filterValue
        const filteredCards = allCards.filter(card => {
            return filterValue === "" || card.type === filterValue || card.format === filterValue;
        });

    // Display the filtered cards
    displayCards(filteredCards);
    }

    // Assume this function fetches and stores all card data
    function fetchAndDisplayCards() {
    fetch('cards.json')
        .then(response => response.json())
        .then(cards => {
            allCards = cards; // Store all card data
            displayCards(cards); // Display all cards initially
        });
    }
        fetchAndDisplayCards();

        document.getElementById('infoButton').addEventListener('click', function() {
            // Hide the randomCardModal
            document.getElementById('randomCardModal').style.display = 'none';
            
            // Show the infoModal
            document.getElementById('infoModal').style.display = 'block';
        });


            document.getElementById('randomCardButton').addEventListener('click', function() {
                // Hide the infoModal
                document.getElementById('infoModal').style.display = 'none';
                
                // Show the randomCardModal
                document.getElementById('randomCardModal').style.display = 'block';
                
                // Call the function to populate and handle the random card modal
                showRandomCard();
            });
            
            // Close button for infoModal
        document.getElementById('infoModal').querySelector('.close').addEventListener('click', function() {
            document.getElementById('infoModal').style.display = 'none';
        });

        // Close button for randomCardModal
        document.getElementById('randomCardModal').querySelector('.close').addEventListener('click', function() {
            document.getElementById('randomCardModal').style.display = 'none';
        });
    

        function showRandomCard() {
            // Logic to select a random card from the allCards array
            // Make sure allCards is populated with your card data
            const randomIndex = Math.floor(Math.random() * allCards.length);
            const randomCard = allCards[randomIndex];
        
            // Assuming you have an element with the ID 'randomCardContent' to display the card details
            const contentDiv = document.getElementById('randomCardContent');
            contentDiv.innerHTML = `
                <h3>${randomCard.name}</h3>
                <p><strong>Type/Element:</strong> ${randomCard.type}</p>
                <p><strong>Format:</strong> ${randomCard.format}</p>
                <p>${randomCard.description}</p>
            `;
        
            // Show the modal
            document.getElementById('randomCardModal').style.display = 'block';
        }
        
        document.getElementsByClassName('close')[0].onclick = function() {
            document.getElementById('infoModal').style.display = 'none';
        };
        
        document.getElementById('filterDropdown').addEventListener('change', function() {
            filterCards(this.value);
        });

        document.getElementById('sortDropdown').addEventListener('change', function() {
            sortCards(this.value);
        });

        window.onclick = function(event) {
            if (event.target == document.getElementById('infoModal')) {
                document.getElementById('infoModal').style.display = 'none';
            }
        };
        
        const cardContainer = document.getElementById('card-container');
    

        cards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.innerHTML = `
                <h3>${card.name}</h3>
                <p><strong>Type/Element:</strong> ${card.type}</p>
                <p><strong>Format:</strong> ${card.format}</p>
                <p><strong>Activation Method:</strong> ${card.activation}</p>
                <p>${card.description}</p>
            `;
            cardContainer.appendChild(cardElement);
        });
        
        function filterCards(filterValue) {
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                const matchesElement = card.dataset.type === filterValue;
                const matchesFormat = card.dataset.format === filterValue;
        
                if (filterValue === "" || matchesElement || matchesFormat) {
                    card.style.display = ''; // Show card if it matches
                } else {
                    card.style.display = 'none'; // Hide card if it doesn't match
                }
            });
        }
        
        
        function fetchAndDisplayCards() {
            fetch('cards.json')
                .then(response => response.json())
                .then(cards => {
                    allCards = cards; // Store all card data
                    displayCards(cards); // Display all cards initially
                });
        }
        
        
        
        function showRandomCard() {
        if (allCards.length > 0) {
            const randomCard = allCards[Math.floor(Math.random() * allCards.length)];
            const contentDiv = document.getElementById('randomCardContent');
            contentDiv.innerHTML = `
                <h3>${randomCard.name}</h3>
                <p><strong>Type/Element:</strong> ${randomCard.type}</p>
                <p><strong>Format:</strong> ${randomCard.format}</p>
                <p>${randomCard.description}</p>
            `;
        }
    }

        
        // Close modal functionality if needed
        document.querySelector('.close').addEventListener('click', function() {
            document.getElementById('randomCardModal').style.display = 'none';
        });
        
        
        fetch('cards.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(cards => {
            allCards = cards;
            displayCards(cards);
        })
        .catch(error => {
            console.error('Fetching cards failed:', error);
        });

    function displayCards(cards) {
        const container = document.getElementById('card-container');
        container.innerHTML = ''; // Clear existing content
        cards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.dataset.type = card.type;
            cardElement.dataset.format = card.format;
            cardElement.innerHTML = `
                <h3>${card.name}</h3>
                <p><strong>Type/Element:</strong> ${card.type}</p>
                <p><strong>Format:</strong> ${card.format}</p>
                <p>${card.description}</p>
            `;
            container.appendChild(cardElement);
        });
     }

        
        function sortCards(sortValue) {
            const elementOrder = ['Fire', 'Water', 'Earth', 'Air', 'Light', 'Darkness', 'Metal', 'Nature', 'Ether', 'Chaos', 'Ice', 'Lightning', 'Psychic', 'Time', 'Cosmic', 'Toxic', 'Mystic'];
            const formatOrder = ['Ranged', 'Summoner', 'Trap', 'Enhancer', 'Defender', 'Manipulator', 'Bane', 'Area Effect'];
            const cardContainer = document.getElementById('card-container');
            let cards = Array.from(cardContainer.querySelectorAll('.card'));
        
            cards.sort((a, b) => {
                let aValue, bValue;
        
                switch (sortValue) {
                    case 'element':
                        aValue = elementOrder.indexOf(a.dataset.type);
                        bValue = elementOrder.indexOf(b.dataset.type);
                        break;
                    case 'format':
                        aValue = formatOrder.indexOf(a.dataset.format);
                        bValue = formatOrder.indexOf(b.dataset.format);
                        break;
                    case 'name':
                        aValue = a.querySelector('h3').textContent;
                        bValue = b.querySelector('h3').textContent;
                        break;
                    default:
                        return 0; // No sorting
                }
        
                // Compare for sorting
                if (aValue < bValue) return -1;
                if (aValue > bValue) return 1;
                return 0;
            });
        
            // Append sorted cards back to the container
            cardContainer.innerHTML = '';
            cards.forEach(card => cardContainer.appendChild(card));
        }
    
        document.addEventListener('DOMContentLoaded', function() {
            // Open the menu
            document.getElementById('menuToggle').addEventListener('click', function() {
                document.getElementById('menu').style.width = "250px"; // width of the menu
                console.log("Test Menu");
            });
        
            // Close the menu when the close button is clicked
            document.querySelector('.closebtn').addEventListener('click', function() {
                document.getElementById('menu').style.width = "0";
            });
        
            // Optional: Close the menu if the user clicks outside of it
            window.addEventListener('click', function(event) {
                var menu = document.getElementById('menu');
                if (event.target != document.getElementById('menuToggle') && event.target != menu && event.target.closest('.menu') == null) {
                    menu.style.width = "0";
                }
            });

            document.getElementById('deckCreatorButton').addEventListener('click', function() {
                createRandomDeck();
            });
        });
        
        function createRandomDeck() {
            const randomDeck = [];
            const cardContainer = document.getElementById('card-container');
        
            // Assuming 'allCards' is an array with all your card data
            for (let i = 0; i < 24; i++) {
                // Push a random card onto the randomDeck array
                randomDeck.push(allCards[Math.floor(Math.random() * allCards.length)]);
            }
        
            // Now display the randomDeck
            cardContainer.innerHTML = ''; // Clear existing cards
            randomDeck.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.className = 'card';
                // Populate cardElement with card data
                cardElement.innerHTML = `
                    <h3>${card.name}</h3>
                    <p><strong>Type/Element:</strong> ${card.type}</p>
                    <p><strong>Format:</strong> ${card.format}</p>
                    <p>${card.description}</p>
                `;
                cardContainer.appendChild(cardElement);
            });
        }
    
});
