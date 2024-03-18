
const fetchData = async(url)=>{
    try{
        const data = await fetch(url)
        if(data){
            const resData = await data.json()
            return resData
        }else{
            throw Error('failed to fetch data')
        }
    }catch(err){
        console.error(data)
    }
}




const url = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json'


fetchData(url)
.then(data=>{
    console.log(data.data)
})
.catch(err=>{
    console.error(err)
})