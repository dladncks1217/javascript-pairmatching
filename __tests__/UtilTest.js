const getUserList = require('../src/utils/getUserList');
const verify = require('../src/utils/verify');

describe('유틸함수 목록 테스트', () => {
  test('유저 목록 가져오기 유틸함수 테스트', () => {
    expect(getUserList('./resources/backend-crew.md')).toEqual([
      '백호',
      '태웅',
      '치수',
      '태섭',
      '대만',
      '준호',
      '대협',
      '덕규',
      '태산',
      '경태',
      '수겸',
      '현준',
      '준섭',
      '한나',
      '소연',
      '호열',
      '대남',
      '용팔',
      '구식',
      '달재',
    ]);
  });

  test('메뉴 선택 입력값 1, 2, 3, q 외 다른 경우가 나올 경우 오류 발생.', () => {
    expect(() => {
      verify.inputTypeNumberOrQ('e');
    }).toThrow();
  });

  test('받은 페어매칭 입력값 유효성 확인', () => {
    expect(() => {
      verify.pairData('안드로이드, 레벨1, 자동차경주');
    }).toThrow();

    expect(() => {
      verify.pairData('프론트엔드 레벨1, 자동차경주');
    }).toThrow();
  });
});
