import  express from "express"
import { kelilinglingkaran, luaslingkaran, } from "../controler/BangunDatar"
const app = express()

// allow  read a body

app.use(express.json())

// fungsi use () digunakan untuk menerapkan sebuah fungsi pada object express. fungsi tsb akan otomatis dijalankan.
app.post(`/lingkaran/luas`, luaslingkaran)
app.post(`/lingkaran/keliling`, kelilinglingkaran)

export  default app