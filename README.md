# 늘봄학교 공개의 날 강사 체크리스트 & 실무사 대시보드

강사 자가진단 체크리스트 + 실무사 실시간 완료현황 대시보드입니다.  
**`config.js` 파일 하나만 수정하면 어느 학교에서나 바로 사용할 수 있습니다.**

---

## 화면 구성

| 파일 | 대상 | 내용 |
|------|------|------|
| `index.html` | 강사 | 1·2단계 체크리스트 + 완료 보고 버튼 |
| `dashboard.html` | 늘봄실무사 | 강사별 완료현황 실시간 대시보드 |
| `config.js` | 관리자 | **학교별 설정 (여기만 수정)** |

---

## 우리 학교에 맞게 설정하는 방법

### 1단계 — 이 저장소 복사

GitHub 저장소 상단 **"Use this template"** 버튼 클릭  
→ 본인 GitHub 계정에 새 저장소 생성

### 2단계 — `config.js` 수정

아래 항목을 우리 학교 실정에 맞게 수정합니다.

```js
const CONFIG = {

  // ① 학교 기본 정보
  schoolName:       '○○초등학교',      // 학교명
  year:             '2026학년도 1학기',
  periodStart:      '2026년 6월 22일(월)',
  periodEnd:        '2026년 6월 26일(금)',
  satisfactionDate: '6.29.',            // 만족도 설문 배부일
  evalDeadline:     '7월 18일(금)',     // 평가통지서 제출 기한
  contact:          '000-0000',         // 늘봄실무사 연락처

  // ② Firebase URL (3단계에서 생성 후 입력)
  firebaseUrl: 'https://내-프로젝트-default-rtdb.firebasedatabase.app',

  // ③ 분교 여부
  hasBranch:  false,   // 분교 없으면 false
  branchName: '',

  // ④ 날짜 탭
  dates: [
    { value: '06/22', label: '6/22(월)' },
    { value: '06/23', label: '6/23(화)' },
  ],

  // ⑤ 강사 목록
  //   school: 'main' = 본교 / 'branch' = 분교
  //   dates: 공개 수업 날짜 ('MM/DD' 형식, ④와 일치)
  instructors: [
    { name: '홍길동', program: '영어부', school: 'main', dates: ['06/22'] },
    { name: '김영희', program: '미술부', school: 'main', dates: ['06/23'] },
  ],

  // ⑥ 일정표 (빈 문자열 ''은 위 행과 동일)
  scheduleMain: [
    { program: '영어부', date: '6.22.(월)', target: '1~2학년', time: '14:00~14:40', place: '3층 영어실', instructor: '홍길동' },
    { program: '미술부', date: '6.23.(화)', target: '1~2학년', time: '14:00~14:40', place: '3층 미술실', instructor: '김영희' },
  ],
  scheduleBranch: [],  // 분교 없으면 빈 배열
};
```

### 3단계 — Firebase 설정 (무료)

1. [console.firebase.google.com](https://console.firebase.google.com) 접속
2. **프로젝트 추가** → 이름 입력 → 만들기
3. 왼쪽 메뉴 **빌드 → Realtime Database → 데이터베이스 만들기**
4. 위치: **싱가포르(asia-southeast1)** → **테스트 모드로 시작** → 사용 설정
5. 상단에 표시된 URL을 복사해 `config.js`의 `firebaseUrl`에 붙여넣기
6. **규칙** 탭 클릭 → 아래 내용으로 교체 후 **게시**

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

> ⚠️ 공개의 날 종료 후에는 `.read`와 `.write`를 `false`로 바꿔 닫아두세요.

### 4단계 — GitHub Pages 배포

1. 저장소 **Settings → Pages**
2. Branch: `main` / 폴더: `/(root)` → **Save**
3. 1~2분 후 아래 URL로 접속 확인

```
강사용:     https://[내GitHub아이디].github.io/[저장소이름]/
실무사용:   https://[내GitHub아이디].github.io/[저장소이름]/dashboard.html
```

---

## 사용 흐름

```
강사
  └─ 체크리스트 접속 (index.html)
  └─ 항목 점검 후 [완료 보고하기] 버튼
  └─ 이름 선택 + 메모 입력 → 제출

늘봄실무사
  └─ 대시보드 접속 (dashboard.html)
  └─ 날짜 탭으로 오늘 수업 강사만 필터
  └─ 전체 진행률 바 + 강사별 카드로 한눈에 파악
  └─ 실시간 자동 업데이트 (새로고침 불필요)
```

---

## 문의 및 원본 출처

광주동초등학교 늘봄연구사 제작  
원본 저장소: [kingchunjae/neulbom-checklist](https://github.com/kingchunjae/neulbom-checklist)
