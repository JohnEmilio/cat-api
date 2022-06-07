const { json } = require('express');
const express = require('express');
const app = express();
const PORT = 8000

let cats = {
    'maine coon':{
        'breed': 'Maine Coon',
        'coat type': 'heavy and shaggy',
        'hair length': 'long',
        'origin location': 'North America',
        'size': 'large'
    },
    'bengal':{
        'breed': 'Bengal',
        'coat type':  'dense, soft, silky',
        'hair length': 'short to medium',
        'origin location': 'United States',
        'size': 'medium to large'
    },
    'burmese':{
        'breed': 'Burmese',
        'coat type': 'fine, glossy',
        'hair length': 'short',
        'origin location': 'Burma',
        'size': 'medium'
    },
    'havana':{
        'breed': 'Havana Brown',
        'coat type': 'smooth and lustrous',
        'hair length': 'short to medium',
        'origin location': 'Siam',
        'size': 'medium'
    }
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.get('/api/:name', (req,res)=>{
    let catName = req.params.name.toLowerCase()
    if(cats[catName]){
        res.json(cats[catName])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})