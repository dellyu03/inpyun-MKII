import {dbPassword} from './config/config.js';
import express from 'express'
import path from 'path';

const app = express()
const port = 3000

const __dirname = path.resolve();

//데이터베이스 연결 코드
import mysql from 'mysql2'

// 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',    // MySQL 서버의 호스트 이름
  user: 'root',         // MySQL 사용자 이름
  password: dbPassword, // MySQL 사용자 비밀번호
  database: 'soldierinfo'   // 사용할 데이터베이스 이름
});

// 데이터베이스 연결
connection.connect((err) => {
    if (err) {
      console.error('데이터베이스 연결 실패:', err.stack);
      return;
    }
    console.log('데이터베이스 연결 성공. 연결 ID:', connection.threadId);
  });
  
  // API 엔드포인트 - 테이블 목록 가져오기
app.get('/tables', (req, res) => {
  connection.query('SHOW TABLES', (error, results) => {
    if (error) {
      res.status(500).send('데이터베이스 쿼리 실패');
      return;
    }
  
  const tables = results.map(row => row[Object.keys(row)[0]]);
  res.json(tables);
  });
});



//static 파일안에 든 정적 파일을 가져오는 코드
app.use('/', express.static('public'));

//page route api

//index 페이지
app.get('/', function(req, res){  
    const filePath = path.join(__dirname, '/HTML/index.html')
    res.sendFile(filePath);
});

//군인용 메인 페이지
app.get('/account_soldier', function(req, res){  
   const filePath = path.join(__dirname, '/HTML/account_soldier.html')
   res.sendFile(filePath);
});



//편지 쓰기 창
app.get('/writeletter', function(req, res){
  const filePath = path.join(__dirname, '/HTML/writeLetter.html')
  res.sendFile(filePath);
});


//서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다`);
});