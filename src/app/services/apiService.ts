const apiService = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get: async function(url:string): Promise<any>{
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'GET',
                headers:{
                    'ACCEPT':'application/json',
                    'Content-Type':'application/json'
                }
            }).then((response)=> response.json())
            .then((json)=>{
                console.log('Response:',json)
                resolve(json)
        }).then((error)=>{
            reject(error)
        })
        })
    }
}

export default apiService;