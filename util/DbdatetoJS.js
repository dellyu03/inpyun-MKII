import moment from 'moment-timezone';

export function DbdatetoJS (dbdate) {
    var utcDateString= dbdate;

    // UTC 시간을 moment 객체로 변환
    const utcMoment = moment.utc(utcDateString);

    // 한국 서울 시간대로 변환
    const seoulMoment = utcMoment.clone().tz('Asia/Seoul');

    return (seoulMoment.format('YYYY-MM-DD HH:mm:ss'));
}