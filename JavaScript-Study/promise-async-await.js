const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const data = 'This is data';
        resolve(data)
    },2000)
})

// fetching data using async and await
const fetchData = async()=>{
    try{
        const data = await promise
        console.log(data);
    }catch(err){
        console.error(err)
    }
}

fetchData()


// fetchind data using normal promis way
promise.then(data=>{
    console.log(data);
}).catch(err=>{
    console.error(err)
})
