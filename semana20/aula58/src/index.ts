import { app } from "./controller/app"
import { SignUpController } from "./controller/SignUpController"

app.get("/", (req, res)=> {
    res.send("Hello from Express")
})

//const postController = new PostController()

//app.get("/posts/:id", postController.getPostById)

app.post('/user/signup', new SignUpController().signUp)