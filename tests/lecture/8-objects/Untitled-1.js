

function createVideo(){
    console.log('Путін помер... сенсація!!');
}

function rejected(){
    console.log('Путін не помер, відео нема');
}

let response;

// const videoPromise = new Promise((createVideo, rejected) =>
// {
//     respone = fetch.get('/is-putin-alive');

//     if(response === false){
//         createVideo()
//     } else {
//         rejected()
//     }
// }); 

new Promise(()=>{
    return true
}, () => { return false }).then((result)=> {console.log(result)}).catch((e) => {}).finally(); 


try{} catch(e){} finally{}



