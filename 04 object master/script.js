
const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

console.log('Lista de pokémon que tengan nombres que comiencen con la letra "B"');
const bListPkmn = pokemon.filter( p => p.name[0] === "B" );
console.log(bListPkmn);

console.log('Lista de identificadores');
const pkmnIds = pokemon.map( p => p.id );
console.log(pkmnIds);

console.log('Serie de objetos Pokémon donde la identificación es divisible por 3');
const pkmDiv3 = pokemon.filter( pkmn => pkmn.id % 3 === 0 );
console.log(pkmDiv3);

console.log('Serie de objetos Pokémon que son del tipo "fuego"')
const pkmFire = pokemon.filter( pkmn => pkmn.types.includes("fire") );
console.log(pkmFire);

console.log('Variedad de objetos Pokémon que tienen más de un tipo')
const pkmTypes = pokemon.filter( pkmn => pkmn.types.length > 1 );
console.log(pkmTypes);

console.log('Matriz con solo los nombres de los Pokémon')
const pkmNames = pokemon.map( pkmn => pkmn.name );
console.log(pkmNames);

console.log('Matriz con solo los nombres de Pokémon con una identificación mayor que 99')
const pkmNames99 = pokemon.filter( pkmn => pkmn.id > 99 );
console.log(pkmNames99);

console.log('Matriz con solo los nombres del pokémon cuyo único tipo es veneno')
const pkmPoison = pokemon.filter( pkmn => pkmn.types.length === 1 && pkmn.types.includes("poison") );
console.log(pkmPoison);

console.log('Matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es "volador"')
const pkmFirstType = pokemon.filter( pkmn => {
    if(pkmn.types.length >1){
        if (pkmn.types[1] === "flying") {
            return true;
        }
    }
    return false;
} );
const pkmFirstTypeResult = pkmFirstType.map( pkmn => pkmn.types[0] );
console.log(pkmFirstTypeResult);

console.log('Recuento de la cantidad de pokémon que son de tipo "normal"')
const pkmNormal = pokemon.filter(pkmn => pkmn.types.includes('normal')).length;
console.log(pkmNormal);

//hola mi nomvbre es Jose