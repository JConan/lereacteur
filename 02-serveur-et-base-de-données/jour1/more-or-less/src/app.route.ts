import {Router, Request, Response} from "express"

const router = Router()

router.get("/", (request: Request, response: Response) => {
    response.send({result: "C'est moins !"})
})

export default router