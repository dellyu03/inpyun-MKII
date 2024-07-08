import express from 'express'
import path from 'path';

const app = express()
const port = 3000
const __dirname = path.resolve();

//서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다`);
});