
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
        }        
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
