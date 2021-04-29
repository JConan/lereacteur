import {Router, Request, Response} from "express"

const router = Router()

let _numberToGuess = 0;



interface GuessNumberRequest extends Request{
    query : {
        num: string
    }
}


router.get("/", (request: {query:{num: string}}, response: Response) => {
    const userInput: number = Number(request.query.num)
    
    if(userInput > _numberToGuess ){
        response.send({result: "C'est moins !"})
    }if (userInput === _numberToGuess) {

        response.send({result: "C'est gagné !"})
    }else{
        response.send({result: "C'est plus !"})
    }

})

export default (numberToGuess: number) => {
    _numberToGuess = numberToGuess
    return router
}