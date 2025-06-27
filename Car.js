function Car(brand, price) {
  return {
    brand: brand,
    price: price,
    isTurbo: true,
    convertPrice() {
      return this.price * 42
    },
  }
}

const ford = Car('Ford', 22000)
ford

const audi = Car('Audi', 33000)
audi

const fiat = Car('Fiat', 44000)
fiat

ford.price = 11111

console.log(ford.convertPrice())
console.log(audi.convertPrice())
console.log(fiat.convertPrice())

console.log(ford === audi)
console.log(audi === fiat)
console.log(fiat === ford)
