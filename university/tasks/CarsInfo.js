var cars = [
    {brand:'Honda', model:'Civic', price:800000},
    {brand:'Ford', model:'Focus', price:1500000},
    {brand:'Toyota', model:'Peugeot', price:640000},
    {brand:'Kia', model:'Ria', price:1400000},
    {brand:'Dodge', model:'Caravan I', price:300000},
]

const cash = {
    sales()
    {
        var count = 0;
        var sum = 0;
        for (let i = 0; i < 5; i++) {
            console.log(this[i].brand + ' ' + this[i].model + ' ' + this[i].price);
            count++;
            sum = sum + this[i].price;
        }
        console.log('Всего: ' + count + ' машин за ' + sum);
    }
}

const Cash = cash.sales.bind(cars);
Cash();