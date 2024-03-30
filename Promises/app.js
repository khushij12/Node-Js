//Promises

const axios = require('axios');

// without promises
const response = axios.get('http://www.boredapi.com/api/activity/')
// console.log(response.data.activity)

//with promises
axios.get('http://www.boredapi.com/api/activity/').then(response => {
    console.log(response.data.activity);
}).catch(error => {
    console.log(error);
})

//with asyn await
async function getActivity(){
    try{
        let response = await axios.get('https://httpstat.us/500');
        console.log(response.data.activity);
    }catch(error){
        // console.log(error)
        console.log("In catch") //too big error object so using this statement to verify catch block
    }
    
}
getActivity()


