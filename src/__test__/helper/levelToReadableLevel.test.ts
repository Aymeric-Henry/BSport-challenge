import { levelToReadableLevel } from "../../helpers";

test("work on empty arg", () => {
  const level = levelToReadableLevel();

  expect(level).toEqual("");
});

test("send Easy for value 1", () => {
  const level = levelToReadableLevel(1);

  expect(level).toEqual("Easy");
});

test("send Medium for value 2", () => {
  const level = levelToReadableLevel(2);

  expect(level).toEqual("Medium");
});

test("send Hard for value 3", () => {
  const level = levelToReadableLevel(3);

  expect(level).toEqual("Hard");
});

test("send Very Hard for value 4", () => {
  const level = levelToReadableLevel(4);

  expect(level).toEqual("Very Hard");
});

test("send Hardcore for value 5", () => {
  const level = levelToReadableLevel(5);

  expect(level).toEqual("Hardcore");
});

test("send empty value for non existing value", () => {
  const level = levelToReadableLevel(6);

  expect(level).toEqual("");
});

export default levelToReadableLevel;