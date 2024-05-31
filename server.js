const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


//static 파일안에 든 정적 파일을 가져오는 코드
app.use('/', express.static('public'));

app.get('/', function(req, res){
    const filePath = path.join(__dirname, '/HTML/index.html')
    res.sendFile(filePath);
});
