import { AssertionError } from './errors';

type AssertIsDefined = <T>(condition: T, conditionName: string) => asserts condition is NonNullable<T>;

// Copied from YoAmigo repo
export const assertIsDefined: AssertIsDefined = <T>(
  condition: T,
  conditionName: string
): asserts condition is NonNullable<T> => {
  if (condition === undefined || condition === null) {
    throw AssertionError(`Expected ${conditionName} to be defined`);
  }
};
