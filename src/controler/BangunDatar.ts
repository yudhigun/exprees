import { Request, Response } from "express";

//  conts atau let itu digunakan untuk mendeklarasi sebuah variable/object/array/function
const luaslingkaran = (request: Request, response: Response) => {
    try {
       const phi = Math.PI 
       const r: number = Number(request.body.r)
       const luas = phi * r* r
       return response.status(200)
       .json({
        status:  true,
        r,
        luas
       })
    } catch (error) {
        return response.status(500)
        .json({
            status : false,
            Messag : error
        })
        }
    }

    const kelilinglingkaran = (request: Request, response: Response) => {
        try {
           const phi = Math.PI 
           const r: number = Number(request.body.r)
           const keliling = phi * r* r
           return response.status(200)
           .json({
            status:  true,
            r,
            keliling
           })
        } catch (error) {
            return response.status(500)
            .json({
                status : false,
                Message : error
            })
            }
        }

        const luaspersegi = (request: Request, response: Response) => {
            try {
                
               const panjang: number = Number(request.body.panjang)
               const lebar: number = Number(request.body.lebar)
               const luas = panjang + panjang
               return response.status(200)
               .json({
                status:  true,
                panjang,
                
               })
            } catch (error) {
                return response.status(500)
                .json({
                    status : false,
                    Messag : error
                })
                }
            }

            const kelilingpersegi = (request: Request, response: Response) => {
                try {
                   
                   const sisi: number = Number(request.body.r)
                   const luas = 
                   return response.status(200)
                   .json({
                    status:  true,
                    sisi,
                    luas
                   })
                } catch (error) {
                    return response.status(500)
                    .json({
                        status : false,
                        Messag : error
                    })
                    }
                }

    export {luaslingkaran, kelilinglingkaran}