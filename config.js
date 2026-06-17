// ══════════════════════════════════════════════════════════════════════
//  config.js  —  학교별 설정 파일
//
//  ★ 이 파일만 수정하면 어느 학교에서나 바로 사용할 수 있습니다. ★
//  index.html / dashboard.html 은 수정하지 않아도 됩니다.
// ══════════════════════════════════════════════════════════════════════

const CONFIG = {

  /* ━━━ 1. 학교 기본 정보 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  schoolName:       '광주동초등학교',
  year:             '2026학년도 1학기',
  periodStart:      '2026년 6월 22일(월)',
  periodEnd:        '2026년 6월 26일(금)',
  satisfactionDate: '6.29.',        // 학부모 만족도 설문 배부 예정일 (공개주간 종료 후 첫 수업일)
  evalDeadline:     '7월 18일(금)', // 평가통지서(붙임6) 제출 기한
  contact:          '250-2737',     // 늘봄실무사 연락처


  /* ━━━ 2. Firebase Realtime Database URL ━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  //  Firebase 콘솔 → Realtime Database 화면 상단의 URL을 붙여넣으세요.
  //  예) https://my-school-default-rtdb.asia-southeast1.firebasedatabase.app
  firebaseUrl: 'https://neulbom-checklist-default-rtdb.asia-southeast1.firebasedatabase.app',


  /* ━━━ 3. 분교 여부 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  hasBranch:  true,
  branchName: '충효분교장',   // 분교 명칭 (hasBranch: false 이면 무시됨)


  /* ━━━ 4. 날짜 탭 (공개의 날 운영 날짜) ━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  //  value: 'MM/DD' 형식으로 강사 dates 항목과 반드시 일치해야 합니다.
  dates: [
    { value: '06/22', label: '6/22(월)' },
    { value: '06/23', label: '6/23(화)' },
    { value: '06/25', label: '6/25(목)' },
    { value: '06/26', label: '6/26(금)' },
  ],


  /* ━━━ 5. 강사 목록 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  //  school: 'main' = 본교 / 'branch' = 분교
  //  dates:  위 4번 dates[].value 와 같은 형식으로 입력 (복수 가능)
  instructors: [
    { name: '김지현', program: '영어문화부',          school: 'main',   dates: ['06/22'] },
    { name: '유연경', program: '바이올린부',          school: 'main',   dates: ['06/22'] },
    { name: '안지유', program: '바이올린부',          school: 'main',   dates: ['06/22'] },
    { name: '이준철', program: 'AI융합부',            school: 'main',   dates: ['06/22'] },
    { name: '최성은', program: '초등돌봄교실',        school: 'main',   dates: ['06/22'] },
    { name: '한영미', program: '피아노부',            school: 'main',   dates: ['06/23'] },
    { name: '박소현', program: '피아노부',            school: 'main',   dates: ['06/23'] },
    { name: '송윤기', program: '뉴스포츠부',          school: 'main',   dates: ['06/23'] },
    { name: '박선하', program: '미술부',              school: 'main',   dates: ['06/23'] },
    { name: '이수민', program: '미션클리어',          school: 'main',   dates: ['06/26'] },
    { name: '박미연', program: '영어문화부',          school: 'branch', dates: ['06/22'] },
    { name: '신서현', program: '독서논술부',          school: 'branch', dates: ['06/22'] },
    { name: '정은경', program: '초등돌봄교실',        school: 'branch', dates: ['06/22'] },
    { name: '박지은', program: '풍물부',              school: 'branch', dates: ['06/23', '06/25'] },
    { name: '김선자', program: '미술부',              school: 'branch', dates: ['06/23'] },
    { name: '박정하', program: '두근두근 디지털',     school: 'branch', dates: ['06/25'] },
    { name: '나경관', program: 'AI융합부',            school: 'branch', dates: ['06/26'] },
  ],


  /* ━━━ 6. 공개 일정표 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  //  빈 문자열('')은 위 행과 동일한 값을 뜻합니다 (병합 셀처럼 표시).
  //  program 이름에 줄바꿈이 필요하면 \n 을 사용하세요.
  scheduleMain: [
    { program: '영어문화부',   date: '6.22.(월)', target: '1~2학년', time: '15:25~16:05', place: '3층 영어실',              instructor: '김지현' },
    { program: '',             date: '',           target: '3~4학년', time: '13:55~14:35', place: '',                        instructor: '' },
    { program: '',             date: '',           target: '5~6학년', time: '14:40~15:20', place: '',                        instructor: '' },
    { program: '바이올린부',   date: '6.22.(월)', target: '1학년',   time: '13:55~14:35', place: '3층 음악실',              instructor: '유연경, 안지유' },
    { program: '',             date: '',           target: '2~3학년', time: '14:40~15:20', place: '',                        instructor: '' },
    { program: '',             date: '',           target: '4~6학년', time: '15:25~16:05', place: '',                        instructor: '' },
    { program: 'AI융합부',     date: '6.22.(월)', target: '3학년',   time: '15:25~16:05', place: '3층 AI실',                instructor: '이준철' },
    { program: '',             date: '',           target: '4학년',   time: '14:40~15:20', place: '',                        instructor: '' },
    { program: '미션클리어',   date: '6.26.(금)', target: '3학년',   time: '15:25~16:05', place: '3층 AI실',                instructor: '이수민' },
    { program: '',             date: '',           target: '4학년',   time: '14:40~15:20', place: '',                        instructor: '' },
    { program: '피아노부',     date: '6.23.(화)', target: '1학년',   time: '13:55~14:35', place: '3층 음악실, 1층 유치원실', instructor: '한영미, 박소현' },
    { program: '',             date: '',           target: '2~3학년', time: '14:40~15:20', place: '',                        instructor: '' },
    { program: '',             date: '',           target: '4~6학년', time: '15:25~16:05', place: '',                        instructor: '' },
    { program: '뉴스포츠부',   date: '6.23.(화)', target: '1학년',   time: '13:10~13:50', place: '2층 강당',                instructor: '송윤기' },
    { program: '',             date: '',           target: '2~3학년', time: '13:55~14:35', place: '',                        instructor: '' },
    { program: '',             date: '',           target: '4~6학년', time: '14:40~15:20', place: '',                        instructor: '' },
    { program: '미술부',       date: '6.23.(화)', target: '1학년',   time: '14:40~15:20', place: '3층 미술실',              instructor: '박선하' },
    { program: '',             date: '',           target: '2~3학년', time: '15:25~16:05', place: '',                        instructor: '' },
    { program: '초등돌봄교실', date: '6.22.(월)', target: '1학년',   time: '14:30~15:10', place: '2층 돌봄실',              instructor: '최성은' },
    { program: '',             date: '',           target: '2학년',   time: '13:55~14:35', place: '',                        instructor: '' },
  ],

  scheduleBranch: [
    { program: '영어문화부',                      date: '6.22.(월)', target: '1~2학년', time: '13:40~14:20', place: '과학실',   instructor: '박미연' },
    { program: '',                                date: '',           target: '3~4학년', time: '15:15~15:55', place: '',         instructor: '' },
    { program: '',                                date: '',           target: '5~6학년', time: '14:30~15:10', place: '',         instructor: '' },
    { program: '독서논술부',                      date: '6.22.(월)', target: '3~4학년', time: '14:30~15:10', place: 'AI꿈마루', instructor: '신서현' },
    { program: '',                                date: '',           target: '5~6학년', time: '15:15~15:55', place: '',         instructor: '' },
    { program: '풍물부',                          date: '6.23.(화)', target: '1~2학년', time: '13:40~14:20', place: '강당',     instructor: '박지은' },
    { program: '',                                date: '6.25.(목)', target: '3~4학년', time: '14:30~15:10', place: '',         instructor: '' },
    { program: '',                                date: '6.23.(화)', target: '5~6학년', time: '14:30~15:10', place: '',         instructor: '' },
    { program: 'AI융합부',                        date: '6.26.(금)', target: '3~4학년', time: '13:40~14:20', place: 'AI꿈마루', instructor: '나경관' },
    { program: '',                                date: '',           target: '5~6학년', time: '15:15~15:55', place: '',         instructor: '' },
    { program: '미술부',                          date: '6.23.(화)', target: '1~2학년', time: '14:30~15:10', place: '과학실',   instructor: '김선자' },
    { program: '',                                date: '',           target: '3~4학년', time: '13:40~14:20', place: '',         instructor: '' },
    { program: '두근두근 디지털\n친구들과 첫만남', date: '6.25.(목)', target: '1~2학년', time: '14:30~15:10', place: 'AI꿈마루', instructor: '박정하' },
    { program: '초등돌봄교실',                    date: '6.22.(월)', target: '1~2학년', time: '14:30~15:10', place: '돌봄실',   instructor: '정은경' },
    { program: '',                                date: '',           target: '3~4학년', time: '13:40~14:20', place: '',         instructor: '' },
  ],

};
