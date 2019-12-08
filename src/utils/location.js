const request = require('request')

const geocode = (add,cb) =>{
    let url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+add+".json?limit=2&access_token=pk.eyJ1IjoidGVzdGVyMXczMSIsImEiOiJjazN3MGN2aWYwcnF4M21vMTRqOXlmczVxIn0.czNWc2Swb6MlT85pW62eEA";
    
    request({url,json:true},(error,response)=>{
        if(error){
            return cb(error,undefined)
        }else if(response.body.features.length==0){
            return cb("Please enter valid location",undefined)
        }
        lat=response.body.features[0].center[1]
        long=response.body.features[0].center[0]
        cb(undefined,[lat,long])
    })
}

// geocode("HAmirpur",(err,res)=>{
//     if(err) console.log(err)
//     else console.log(res)
// })

module.exports =geocode