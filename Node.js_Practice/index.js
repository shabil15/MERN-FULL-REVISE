

// const express = require('express')

// const app = express()

// app.get('/',(req, res)=>{
//     res.send(req.query.name )
// })

// app.get('/:id',(req, res)=>{
//     res.send(req.params.id)
// })

// app.listen(3000,()=>{
//     console.log('server is running');
// })

const express = require('express')

const app = new express()

app.get('/',(req,res)=>{
    res.send(req.query.name)
})
app.get('/:id',(req, res)=>{
     res.send(req.params.id)
    })

app.listen(3000,()=>{
    console.log('server is running');
})









