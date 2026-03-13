let water = 1500
let coffee = 80
const people = 10


function coffeemaker(water, coffee, people) {
    let distribute = 0
    let money = 0
    while (60 <= water && 8 <= coffee && people >= distribute) {
        console.log('préparation du café')
        water = water - 60
        coffee = coffee - 8
        distribute = distribute + 1
        money = money + 1.45
        printCoffee(water, coffee, distribute, money);

    }
    left(water, coffee, money, distribute);

}

coffeemaker(water, coffee, people)

function left(water, coffee, money, distribute) {
    console.log('Nombre de café distribué', distribute)
    console.log('client non servis', people - distribute)
    console.log('eau restant', water)
    console.log('café moulu restant', coffee)
    console.log('argent gagné', money)
}


function printCoffee(water, coffee, distribute, money) {
    console.log('café distribué', distribute)
    console.log('eau restante', water)
    console.log('café restant', coffee)
    console.log('argent gagné', money)

}

