import { getLastDayOfMonth } from "../../helpers";

test("work for different random value test on one year", () => {
  const january = getLastDayOfMonth(new Date("2021-01-11T09:00:07")).toISOString();
  const february = getLastDayOfMonth(new Date("2021-02-11T09:00:07")).toISOString();
  const march = getLastDayOfMonth(new Date("2021-03-11T09:00:07")).toISOString();
  const april = getLastDayOfMonth(new Date("2021-04-11T09:00:07")).toISOString();
  const may = getLastDayOfMonth(new Date("2021-05-11T09:00:07")).toISOString();
  const june = getLastDayOfMonth(new Date("2021-06-11T09:00:07")).toISOString();
  const july = getLastDayOfMonth(new Date("2021-07-11T09:00:07")).toISOString();
  const august = getLastDayOfMonth(new Date("2021-08-11T09:00:07")).toISOString();
  const september = getLastDayOfMonth(new Date("2021-09-11T09:00:07")).toISOString();
  const october = getLastDayOfMonth(new Date("2021-10-11T09:00:07")).toISOString();
  const november = getLastDayOfMonth(new Date("2021-11-11T09:00:07")).toISOString();
  const december = getLastDayOfMonth(new Date("2021-12-11T09:00:07")).toISOString();

  expect(january).toEqual("2021-01-30T23:00:00.000Z");
  expect(february).toEqual("2021-02-27T23:00:00.000Z");
  expect(march).toEqual("2021-03-30T22:00:00.000Z");
  expect(april).toEqual("2021-04-29T22:00:00.000Z");
  expect(may).toEqual("2021-05-30T22:00:00.000Z");
  expect(june).toEqual("2021-06-29T22:00:00.000Z");
  expect(july).toEqual("2021-07-30T22:00:00.000Z");
  expect(august).toEqual("2021-08-30T22:00:00.000Z");
  expect(september).toEqual("2021-09-29T22:00:00.000Z");
  expect(october).toEqual("2021-10-30T22:00:00.000Z");
  expect(november).toEqual("2021-11-29T23:00:00.000Z");
  expect(december).toEqual("2021-12-30T23:00:00.000Z");
});

export default getLastDayOfMonth