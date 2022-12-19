// вызов один раз через определённый интервал времени
const timeOut = setTimeout(()=>{
    console.log('My TimeOut');
},2000)

// регулярный вызов повторяется через определённый интервал времени
const interval = setInterval(()=>{
    console.log('My Interval');
},2000)

// закоментировать, чтобы включить timeOut и interval
clearTimeout(timeOut);
clearInterval(interval);

// delay
const delay =(callback,wait=1000)=>{
    setTimeout(callback,wait);
}

delay(()=>{
    console.log('My code delay')
},2000)

// promise
const delay1 = (time = 1000)=>{
    let MyPromis =  new Promise((resolve,reject)=>{
       setTimeout(()=>{
           //resolve()
           reject('нет интернета')
                  
       },time)
     })  
     return MyPromis
   }

// then/catch/finally
delay1(2500)
   .then(()=>{
       console.log('promis then')
   })
   .catch((err)=>{
       console.error('Error: ',err)
   })
   .finally(()=>{
       console.log('Финал')
   })

// resolve
const getData = ()=>new Promise(resolve=>resolve([1,2,3,4,5,6]));
getData().then((data)=>{
       console.log(data)
   })

// async
async function asyncExemple()
   {
       try
       {
         await  delay1(3000);
           const data = await getData();
           console.log(data);
       }
       catch(e)
       {

       }

   }
asyncExemple()