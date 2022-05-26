/* exported pokedex */
// function renderPokemon(pokemon) {

//   var newDiv = document.createElement('div');
//   var newText = document.createTextNode('pokemon');
//   newDiv.appendChild(newText);
//   var currentDiv = document.createElementbyId('row');
//   document.body.insertBefore(newDiv, currentDiv);

// }

var pokedex = [
  {
    number: '001',
    name: 'Bulbasaur',
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png'
  },
  {
    number: '004',
    name: 'Charmander',
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png'
  },
  {
    number: '007',
    name: 'Squirtle',
    description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png'
  },
  {
    number: '002',
    name: 'Ivysaur',
    description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png'
  },
  {
    number: '005',
    name: 'Charmeleon',
    description: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png'
  },
  {
    number: '008',
    name: 'Wartortle',
    description: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png'
  },
  {
    number: '003',
    name: 'Venusaur',
    description: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png'
  },
  {
    number: '006',
    name: 'Charizard',
    description: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png'
  },
  {
    number: '009',
    name: 'Blastoise',
    description: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png'
  }
];

//   <div class="column-third">
//     <div class="pokemon-card">
//       <img src="images/bulbasaur.png">
//       <div class="pokemon-card-text">
//         <h2>Bulbasaur</h2>
//         <h3>#001</h3>
//         <p>
//           There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.
//         </p>
//       </div>
//     </div>
//   </div>

//   <div class="column-third">
//     <div class="pokemon-card">
//       <img src="images/charmander.png">
//       <div class="pokemon-card-text">
//         <h2>Charmander</h2>
//         <h3>#004</h3>
//         <p>
//           It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.
//         </p>
//       </div>
//     </div>
//   </div>

//   <div class="column-third">
//     <div class="pokemon-card">
//       <img src="images/squirtle.png">
//       <div class="pokemon-card-text">
//         <h2>Squirtle</h2>
//         <h3>#007</h3>
//         <p>
//           When it retracts its long neck into its shell, it squirts out water with vigorous force.
//         </p>
//       </div>
//    </div>
//   </div>

//   <div class="column-third">
//     <div class="pokemon-card">
//       <img src="images/ivysaur.png">
//       <div class="pokemon-card-text">
//         <h2>Ivysaur</h2>
//         <h3>#002</h3>
//         <p>
//           When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.
//         </p>
//       </div>
//     </div>
//   </div>

//  <div class="column-third">
//     <div class="pokemon-card">
//       <img src="images/charmeleon.png">
//       <div class="pokemon-card-text">
//         <h2>Charmeleon</h2>
//         <h3>#005</h3>
//         <p>
//           It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.
//         </p>
//       </div>
//     </div>
//   </div>

//    <div class="column-third">
//     <div class="pokemon-card">
//       <img src="images/wartortle.png">
//       <div class="pokemon-card-text">
//         <h2>Wartortle</h2>
//         <h3>#008</h3>
//         <p>
//           It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.
//         </p>
//       </div>
//     </div>
//   </div>

//   <div class="column-third">
//     <div class="pokemon-card">
//       <img src="images/veunsaur.png">
//       <div class="pokemon-card-text">
//         <h2>Venusaur</h2>
//         <h3>#003</h3>
//         <p>
//           Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.
//         </p>
//       </div>
//     </div>
//   </div>

//   <div class="column-third">
//     <div class="pokemon-card">
//       <img src="images/charizard.png">
//       <div class="pokemon-card-text">
//         <h2>Charizard</h2>
//         <h3>#006</h3>
//         <p>
//           It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.
//         </p>
//       </div>
//     </div>
//   </div>

//   <div class="column-third">
//     <div class="pokemon-card">
//       <img src="images/blastoise.png">
//       <div class="pokemon-card-text">
//         <h2>Blastoise</h2>
//         <h3>#009</h3>
//         <p>
//           It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.
//         </p>
//       </div>
//     </div>
//   </div>
