import { Server } from "./app"

const init = () => {
    const app = new Server(process.env.PORT)
    app.listen()
}

init()