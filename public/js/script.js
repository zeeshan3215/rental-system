const http=require('http');
const fs=require('fs');
var requests=require('requests')


const homeFile=fs.readFileSync("card.hbs",'utf-8')
const replaceVal=(tempVal,orgVal)=>{
let temprature=tempVal.replace("{%tempval%}",orgVal.products.price)
 temprature=temprature.replace("{%tempmin%}",orgVal.main.temp_min) 
 temprature=temprature.replace("{%tempmax%}",orgVal.main.temp_max) 
 temprature=temprature.replace("{%location%}",orgVal.name)
temprature=temprature.replace("{%country%}",orgVal.sys.country)
temprature=temprature.replace("{%temstatus%}",orgVal.products[0].productImage)
return temprature;

}
const app=http.createServer((req,res)=>{


requests("/products").on("data",(chunk)=>{
    const objdata=JSON.parse(chunk);
    const arr=[objdata];
    //  console.log(arr[0].main.temp);
    // res.end(arr);
    const realTime=arr.map((val) => replaceVal(homeFile,val)).join("");
res.write(realTime)
console.log(realTime)
})
.on("end",(err)=>{
    if(err)
    return console.log("Connection Closed due to error");
    console.log("end")
})

}
);

app.listen(5000,'127.0.0.1',()=>{
    console.log("Port No 5000 is Listening")
})