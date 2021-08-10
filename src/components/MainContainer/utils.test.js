import sortingRule from './utils';

test('correctly sorting', () => {
  expect([{ votes: 30 }, { votes: 40 }].sort(sortingRule('votes'))).toStrictEqual([{ votes: 40 }, { votes: 30 }]);
});
