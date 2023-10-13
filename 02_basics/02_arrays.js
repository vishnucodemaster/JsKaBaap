const marvel_hero = ["thor","Iron","spider"]
const dc = ["superman","flash","batman"]

// marvel_hero.push(dc)
// all = marvel_hero.concat(dc)
// console.log(marvel_hero)
// console.log(all)
// console.log(marvel_hero[3][1])
const all_new_hero = [...marvel_hero,...dc] //spread method
console.log(all_new_hero)
const another_array = [1,2,3,[4,5,6],7,[8,9]]
const real_another_array = another_array.flat(1)
console.log(real_another_array)

console.log(Array.from({name:"vishnu"}))