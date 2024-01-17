
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
    ];

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
});
