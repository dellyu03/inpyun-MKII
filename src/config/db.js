//데이터베이스 연결 코드
import {dbPassword} from '../../config/config.js';
import mysql from 'mysql2'

// 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',    // MySQL 서버의 호스트 이름
  user: 'root',         // MySQL 사용자 이름
  password: dbPassword, // MySQL 사용자 비밀번호
  database: 'soldierInfo'   // 사용할 데이터베이스 이름
});

