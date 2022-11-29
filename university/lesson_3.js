const person = {
    // ключ - значение
    name:'Alexey',
    age:33,
    isProgrammer:true,
    language:['Ru', 'En', 'Kz'],
    
    // метод
    greet() {
        console.log('greet from person')
    },

    'key':'value',
    ['key_'+(1+3)]:'My key',
    info() {
        console.log('this: '+ this);
    }

}

console.log(person);
console.log('!!!!++++++');
console.log(person.name);
console.log('!!!!++++++');
console.log(person['age']);
console.log('!!!!++++++');
person.greet();
console.log('!!!!++++++');
console.log(person['key']);
person.age++;
console.log('!!!!++++++');
console.log(person);
console.log('!!!!++++++');
console.log(person['key_4']);
console.log('!!!!++++++');
person.language.push('Cz');
console.log('!!!!++++++');
person['key_4'] = undefined;
delete(person['key_4']);
console.log(person);

// деструктуризация

//const name = person.name;
// const age = person.age;
// const language = person.language;
console.log('--NNNNNNNNNNN');
const {name, age, language} =person;
console.log(name);
console.log(age);
console.log(language);
console.log('--NNNNNNNNNNN');

// получение ключей
for(let key in person) 
{
    if (person.hasOwnProperty(key))
    {
        console.log('key: '+key);
        console.log('value: '+person[key])
    }
}

console.log('NONONNONNNON');
var keys = Object.keys(person);
console.log(keys);

// ключ значения (показывает только созданные нами ключи)
console.log('NONONNONNNON');
keys.forEach((key)=>{
    console.log('key: '+key);
    console.log('value: '+person[key])
});

console.log('LOLOLOLO');

Object.keys(person).forEach((key)=>{
    console.log('key: '+key);
    console.log('value: '+person[key])
});

// КОНТЕКСТ
console.log('CONTEXT')
person.info();


const loger = 
{
    keys(obj)
    {
        var keys = Object.keys(obj);
        console.log(keys);
    }
}
loger.keys(person);

console.log('++++++++++++++++++++++++++++++++++++++++_____________________________________');

const loger1 = 
{
    keys()
    {
        var keys = Object.keys(this);
        console.log(keys);
    },
    keyAndValues() 
    {
        Object.keys(this).forEach((key)=>{
            console.log('key: '+key);
            console.log('value: '+this[key])
        });
    },
    keyAndValues1() 
    {
        // const self = this
        Object.keys(this).forEach(function(key){
            console.log('key: '+key);
            console.log('value: '+this[key])
        }.bind(this));
    },
    wichParam(top=false, between = false, bottom = false)
    {
        if (top)
        {
            console.log('START');
        }
        Object.keys(this).forEach((key, index, array)=>{
            console.log('key: '+key);
            console.log('value: '+this[key])
            if (between && index!=array.length-1) 
            {
                console.log('------------------------------')
            }
        });
        if (bottom)
        {
            console.log('END');
        }
    }
}
const MyBind = loger1.keys.bind(person);
// console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
console.log(MyBind); // это функция MyBind()
// console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
MyBind();
// console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
loger1.keys.bind(person);

console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
loger1.keyAndValues.call(person);
console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
loger1.keyAndValues1.call(person);
console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');

// первый способ
// loger1.wichParam.call(person, true, true, true);
// второй способ
loger1.wichParam.apply(person,[true, true, true]);