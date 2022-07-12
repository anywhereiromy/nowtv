import { getHumanReadableDateTime } from './getHumanReadableDateTime';

describe('getHumanReadableDateTime', () => {
  it('parses a timestamp correctly', () => {
    const timestamps = [
      '2016-11-09T05:04:58Z',
      '2016-05-24T13:27:48Z',
      '2017-10-01T09:52:23Z',
      '2018-06-02T22:30:23Z',
      '2019-02-28T00:00:23Z',
    ];
    // dayJs uses default timezone, so will add an hour for daylight saving's time BST
    const expectedOutput = [
      '9th Nov 2016 05:04',
      '24th May 2016 14:27',
      '1st Oct 2017 10:52',
      '2nd Jun 2018 23:30',
      '28th Feb 2019 00:00',
    ];
    timestamps.forEach((timestamp, index) => {
      const result = getHumanReadableDateTime(timestamp);
      expect(result).toEqual(expectedOutput[index]);
    });
  });
  it('returns a default string if timestamp is not valid', () => {
    const timestamps = ['hello', undefined, null, ''];
    const expectedOutput = 'Invalid Date';
    timestamps.forEach((timestamp) => {
      const result = getHumanReadableDateTime(timestamp);
      expect(result).toEqual(expectedOutput);
    });
  });
});
