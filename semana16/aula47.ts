/*

###Exercício 1
a. A resposta não vem tratada, tendo que tratar os objetos.
b.
```
const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `)

	return result[0][0]
}
```
c.
```
const getActorsQuantity = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) FROM Actor WHERE gender = '${gender}'
  `)

	return result[0][0]
}
```
###Exercício 2
a.
```
const updateActor = async (id:string, salary:number): Promise<any> => {
    await connection("Actor")
    .update({salary:salary})
    .where({id})
}
```
b.
```
const deleteActorById = async (id:string): Promise<any> => {
    await connection("Actor")
    .delete()
    .where({id})
    
}
```
c.
```
const avgSalary = async (gender:string): Promise<any> => {
    await connection("Actor")
    .avg(salary)
    .where({gender})

    
}
```
###Exercício 3
a.
```
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await getActorsQuantity(req.query.gender)
    res.status(200).
    send(count)
    
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

###Exercício 4
```
app.put("/actor", async (req: Request, res: Response) => {
  try {
   await updateActor(req.body.id, req.body.salary)
    res.status(200).
    send({message:"actor updated"})
    
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
   await deleteActor(req.params.id)
    res.status(200).
    send({message:"actor deleted"})
    
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

```

*/