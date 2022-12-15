const MESSAGE = Object.freeze({
  USER_SELECT: `
기능을 선택하세요.
1. 페어 매칭
2. 페어 조회
3. 페어 초기화
Q. 종료
  `,
  NO_DATA: '매칭 기록이 없습니다!',
});

const USER_LINK = Object.freeze({
  FRONT: '../resources/frontend-crew.md',
  BACK: '../resources/backend-crew.md',
});

const ERROR = Object.freeze({
  WRONG_SELECT: '[ERROR] 잘못된 기능 선택입니다.',
  WRONG_PAIR_DATA: '[ERROR] 잘못된 데이터입니다. 과정, 레벨 미션 순서 차례로 다시 입력 해 주세요.',
  REMATCH_INPUT: '[ERROR] 네|아니오 의 값 중 하나만 입력 해 주세요.',
});

const WORDS = Object.freeze({
  FRONTEND: '프론트엔드',
  BACKEND: '백엔드',
  LV1_1: '자동차경주',
  LV1_2: '로또',
  LV1_3: '숫자야구',
  LV2_1: '장바구니',
  LV2_2: '결제',
  LV2_3: '지하철노선도',
  LV4_1: '성능개선',
  LV4_2: '배포',
  YES: '네',
  NO: '아니오',
});

const INPUT = Object.freeze({
  PAIR_INPUT: `
  #############################################
  과정: 백엔드 | 프론트엔드
  미션:
    - 레벨1: 자동차경주 | 로또 | 숫자야구게임
    - 레벨2: 장바구니 | 결제 | 지하철노선도
    - 레벨3:
    - 레벨4: 성능개선 | 배포
    - 레벨5:
  ############################################
  과정, 레벨, 미션을 선택하세요.
  ex) 백엔드, 레벨1, 자동차경주
`,
  REMATCH: `
매칭 정보가 있습니다. 다시 매칭하시겠습니까?
네 | 아니오
`,
});

module.exports = { MESSAGE, ERROR, INPUT, USER_LINK, WORDS };
