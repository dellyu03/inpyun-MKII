import express from 'express';
import path from 'path';
export const app = express();

const __dirname = path.resolve();

//정적 파일 경로 설정
app.use('/', express.static('public'));


//군인 메인페이지 이동 경로
app.get('/account_soldier', function(req, res){
    const filePath = path.join(__dirname, './src/views/HTML/account_soldier.html')
    res.sendFile(filePath);
});


