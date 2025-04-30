export const errorsHandler = (error, req, res, next) => {
    console.log("----------Error Handler----------")    
    console.log(error)
    return res.status(500).json({
        message: "Ocorreu um erro inesperado!"
    })
}