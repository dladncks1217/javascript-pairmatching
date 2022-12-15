const FrontEnd = require('../src/domain/Frontend');
const getUserList = require('../src/utils/getUserList');
const shuffleData = require('../src/utils/shuffleData');

describe('FrontEnd Class 테스트 -> 백엔드도 동일.', () => {
  test('특정 미션에 대한 페어매칭 기록이 있는지 확인할 수 있는 메서드', () => {
    getUsers = jest.fn();
    getUsers.mockReturnValueOnce(['우찬', '임우찬', '임우찬2']);
    const frontend = new FrontEnd(getUsers, '예시 경로');
    expect(frontend.hasData('자동차경주')).toBe(false);
  });

  test('페어매칭 시 매칭결과 반환 메서드', () => {
    let shuffle = shuffleData;
    shuffle = jest.fn();
    let getuser = getUserList;
    getuser = jest.fn();
    getuser.mockReturnValueOnce(['우찬', '임우찬', '임우찬2']);
    shuffle.mockReturnValueOnce(['우찬1', '우찬2', '우찬3', '우찬4', '우찬5', '우찬6', '우찬7']);

    const frontend = new FrontEnd(getuser, '예시 경로');
    expect(frontend.pairMatching('자동차경주', shuffle)).toEqual([
      ['우찬1', '우찬2', '우찬3'],
      ['우찬4', '우찬5'],
      ['우찬6', '우찬7'],
    ]);
  });

  test('페어매칭 조회용 printResult 메서드, 데이터가 없으면 0 반환', () => {
    getUsers = jest.fn();
    getUsers.mockReturnValueOnce(['우찬', '임우찬', '임우찬2']);
    const frontend = new FrontEnd(getUsers, '예시 경로');
    expect(frontend.printResult('자동차경주')).toBe(0);
  });
});
