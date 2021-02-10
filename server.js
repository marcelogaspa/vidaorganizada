const express = require("express")


const app = express()

app.get('/', (request, response) => {
    return response.json({msg: "APIRest VidaOrganizada"})
})

app.listen(8484)