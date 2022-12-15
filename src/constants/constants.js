const MESSAGE = Object.freeze({
  MATCH_MENU: `
#############################################
과정: 백엔드 | 프론트엔드
미션:
  - 레벨1: 자동차경주 | 로또 | 숫자야구게임
  - 레벨2: 장바구니 | 결제 | 지하철노선도
  - 레벨3:
  - 레벨4: 성능개선 | 배포
  - 레벨5:
############################################
`,
  USER_SELECT: `
기능을 선택하세요.
1. 페어 매칭
2. 페어 조회
3. 페어 초기화
Q. 종료
  `,
});

const USER_LINK = Object.freeze({
  FRONT: '../resources/frontend-crew.md',
  BACK: '../resources/backend-crew.md',
});

const ERROR = Object.freeze({
  WRONG_SELECT: '[ERROR] 잘못된 기능 선택입니다.',
});

const INPUT = Object.freeze({
  //
});

module.exports = { MESSAGE, ERROR, INPUT, USER_LINK };
