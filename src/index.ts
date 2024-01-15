// ini adalah file utama dimana ada proses menjalankan server backend

// memanggil library express
import express, { Request, Response } from "express";
import { request } from "http";
import { validatecube } from "./middleware/validatecube";
import routeBangunDatar from "./route/bangundatar"

// buat wadah untuk inisiasi express nya
const app = express();

// mendefinisikan PORT berjalannya server
const PORT = 8000;

// allow to read json as request
app.use(express.json())

// proses pertama untuk handle request
app.get(`/serena`, (request: Request, response: Response) => {
  // memberi response
  return response.status(200).json({
    message: `Hello Serena anaknya Bu Siana`,
  });
});
// ini adalah proses handle request dengan url/address: http://localhost:8000/serena method: GET

// read a query request
app.get(`/moklet`, (request: Request, response: Response) => {
  // asumsikan data yang dikirim adalah nama dan umur
  let nama: any = request.query.nama?.toString()
  let umur: any = request.query.umur?.toString()

  let message : string = `My name is ${nama} and i'm ${umur} years old`
  return response.status(200).json(message)
})

/** read data request from  parameter */
app.get(`/telkom/:nama/:gender`, (request: Request, response:Response)=> {
  let nama: string = request.params.nama
  let gender: string = request.params.gender
  let message: string = `my name is ${nama} and i'm ${gender}`
  return response.status(200).json(message)
})

/** read request from body */
app.post(`/moklet`,(request:Request, response:Response)=>{
  /**asumsikan data yang dikirim adalah
   * panjang dan lebar 
  */
 let panjang : number = request.body.panjang
 let lebar : number =request.body.lebar
 
 let luaspersegipanjang: number = panjang * lebar
 let message = `luas persegipanjang adalah ${luaspersegipanjang}`
 return response.status(200).json(message)
})


//  buatlah sebuah request untuk mengonversi suhu.celcius ke fahrenheit, kelvin, danreamur menggunakan request parameter exp: http://localhost:8000/celcius80 (80 adalah nilai celciusnya) response data -> {reamur: 7, fahrenheit: 7, kelvin: 7}
app.get(`/celcius/:celcius`,(request:Request, response:Response)=>{
  let celcius:  number = Number  (request.params.celcius)

  let reamur = celcius * 0.8;
  let fahrenheit = (celcius * 9/5) + 32;
  let kelvin = celcius + 273.15;
})


// create request for  count volume of long cube
app.post(`/balok`,validatecube, (request:Request, response:Response)=>{
//read panjang, lebar, panjjang
let panjang: number = Number(request.body.panjang)
let lebar: number = Number(request.body.lebar)
let tinggi: number = Number(request.body.tinggi)

let volume: number = panjang * lebar * tinggi
return response.status(200).json({
  panjang, lebar, tinggi, volume
})
})

// register route of bangun datar
app.use(routeBangunDatar)



// run server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
