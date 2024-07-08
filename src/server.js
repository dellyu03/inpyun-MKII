import express from 'express'
import path from 'path';

const app = express()
const port = 3000
const __dirname = path.resolve();

//서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다`);
});

connection.connect((err) => {
  if (err) {
      console.error('데이터베이스 연결 실패:', err.stack);
      return;
  }
  console.log('데이터베이스 연결 성공. 연결 ID:', connection.threadId);
});

