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

// 데이터베이스 연결
export function connectDB () {
  connection.connect((err) => {
      if (err) {
        console.error('데이터베이스 연결 실패:', err.stack);
        return;
      }
      console.log('데이터베이스 연결 성공. 연결 ID:', connection.threadId);
  });
}

export function getMemberInfo () {
  connection.query(
    'SELECT * FROM soldierinfo WHERE member_id = 1',
    [1],  // 쿼리의 매개변수를 배열로 전달합니다. 여기서는 id가 1인 사용자의 이름을 가져옵니다.
    (err, results) => {
      if (err) {
        console.error(err);
      } else {
        console.log(results);
      }
      
      // 작업이 끝나면 연결을 종료합니다.
      connection.end();
    }
  );
}
