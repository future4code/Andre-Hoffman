import express, { Request, Response } from "express"
import cors from "cors"
import { countries } from "./data"
import { country } from "./types"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3004, () => {
  console.log("Servidor pronto!")
})

// ENDPOINT 1
app.get("/test", (req, res) => {
  const result = countries.map(country => ({
    id: country.id,
    name: country.name
  }))
  
  res
    .status(200)
    .send(result)
})

// ENDPOINT 2
app.get("/countries/:id", (req, res) => {
  
  const result: country | undefined = countries.find(
    country => country.id === Number(req.params.id))
 
  if (result) {
      res.status(200).send(result)
  } else {
      res.status(404).send("Not found")
  }
})

// ENDPOINT 3
app.get("/countries/:id", (req, res) => {
  
  const result = countries.find(
    country => country.id === Number(req.params.id))
  
  
  if (result) {
      res.status(200).send(result)
  } else {
      res.status(404).send("Not found")
  }

})

//ENDPOINT DELET

app.delete("/countries/:id", (req, res)=>{

  try {
    const token = req.headers.authorization

    if (!token) {
      res.statusCode = 401
      throw new Error("Não autorizado")
  }

  const index = countries.findIndex((country) => {
    return country.id === Number(req.params.id)
  })

  if(index === -1) {
    res.statusCode = 404
    throw new Error ()
  }

  countries.splice(index, 1)
  res.status(204).end()

  } catch (error: any) {

  if (res.statusCode === 200) {
    res.status(500).end()
  } else {
  res.end()   
  }}}) 