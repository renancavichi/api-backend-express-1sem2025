export const loggerBody = (req, res, next) => {
    if(req?.body){
        console.log(req.body)
    } else {
        console.log("Não há body")
    }
    next()
}


