import { app } from "./controller/app"
import { SignUpController } from "./controller/SignUpController"


app.get("/", (req, res)=> {
    res.send("Hello from Express")
})

app.post('/signup', new SignUpController().signUp)

app.post("/login", new SignUpController().login)

app.get("/all", new SignUpController().get)

