// const DATOS = [
//     {
//         id: '1',
//         fecha: 'aha'
//     },
//     {
//         id: '2',
//         fecha: 'aha'
//     },
//     {
//         id: '3',
//         fecha: 'aha'
//     },
// ]

// const GetDATOS = () => {
//     setTimeout(() => {
//         return DATOS
//     }, 5);

// }
// console.log(GetDATOS())


fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then (response => response.json())
.then (data => {
    console.log(data.game_indices[0])
    
})