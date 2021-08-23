import { getQueryUrlFromObject } from "../../helpers";

test("renders number arrays", () => {
  const queryString = getQueryUrlFromObject({ test: [1, 2] });

  expect(queryString).toEqual("?test=1%2C2");
});

test("renders string arrays", () => {
  const queryString = getQueryUrlFromObject({ test: ["a", "b"] });

  expect(queryString).toEqual("?test=a%2Cb");
});

test("renders empty arrays", () => {
  const queryString = getQueryUrlFromObject({ test: [] });

  expect(queryString).toEqual("?test=");
});

test("renders strings", () => {
  const queryString = getQueryUrlFromObject({ test: "abc" });

  expect(queryString).toEqual("?test=abc");
});

test("renders numbers", () => {
  const queryString = getQueryUrlFromObject({ test: 123 });

  expect(queryString).toEqual("?test=123");
});

test("renders zero", () => {
  const queryString = getQueryUrlFromObject({ test: 0 });

  expect(queryString).toEqual("?test=0");
});

test("renders boolean true", () => {
  const queryString = getQueryUrlFromObject({ test: true });

  expect(queryString).toEqual("?test=true");
});

test("renders boolean false", () => {
  const queryString = getQueryUrlFromObject({ test: false });

  expect(queryString).toEqual("?test=false");
});

test("ignores undefined", () => {
  const queryString = getQueryUrlFromObject({ test: undefined });

  expect(queryString).toEqual("");
});
