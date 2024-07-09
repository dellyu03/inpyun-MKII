import express from 'express'
import {connection} from './config/db.js'
import {app} from './app.js';

const port = 3000;

connection.connect((err) => {
  if (err) {
      console.error('데이터베이스 연결 실패:', err.stack);
      return;
  }
  console.log('데이터베이스 연결 성공. 연결 ID:', connection.threadId);
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



