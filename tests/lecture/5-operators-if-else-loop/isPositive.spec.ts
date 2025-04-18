import test, { expect } from "@playwright/test";

function isPositive(number: number) {
  if (number > 0) {
    return true;
  } else if (number === 0) {
    throw Error("number is zero");
  } else {
    return false;
  }
}

isPositive(12451);

test("should be positive", () => {
  let input = 10;
  let result;

  if (input > 0) {
    result = true;
  } else if (input === 0) {
    throw Error("number is zero");
  } else {
    result = false;
  }

  expect(result).toBeTruthy();
});

test("should be negative", () => {
  const result = isPositive(-1);

  expect(result).toBeFalsy();
});

test("zero should trow exception", () => {
  let exception = "";

  try {
    isPositive(0);
  } catch (error) {
    exception = error.message;
  }

  expect(exception).toMatch("number is zero");
});
