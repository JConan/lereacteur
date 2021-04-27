import { Request, Response, Router } from "express"

const router = Router()


interface ColorRequest extends Request{
    query : {
        color: string
    }
}


router.get("/", (request: ColorRequest, response: Response) => {
    if( request.query.color === "yellow" ){
       response.send({
            "color": "yellow",
            "hexa": "#ffff00"
        })
    }else{
        response.send({"message": "color not found"})
    }
})

export default router