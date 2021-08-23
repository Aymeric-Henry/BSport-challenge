import { getFirstDayOfMonth } from "../../helpers";

test("work for different random value test on one year", () => {
  const january = getFirstDayOfMonth(new Date("2021-01-11T09:00:07"));
  const february = getFirstDayOfMonth(new Date("2021-02-11T09:00:07"));
  const march = getFirstDayOfMonth(new Date("2021-03-11T09:00:07"));
  const april = getFirstDayOfMonth(new Date("2021-04-11T09:00:07"));
  const may = getFirstDayOfMonth(new Date("2021-05-11T09:00:07"));
  const june = getFirstDayOfMonth(new Date("2021-06-11T09:00:07"));
  const july = getFirstDayOfMonth(new Date("2021-07-11T09:00:07"));
  const august = getFirstDayOfMonth(new Date("2021-08-11T09:00:07"));
  const september = getFirstDayOfMonth(new Date("2021-09-11T09:00:07"));
  const october = getFirstDayOfMonth(new Date("2021-10-11T09:00:07"));
  const november = getFirstDayOfMonth(new Date("2021-11-11T09:00:07"));
  const december = getFirstDayOfMonth(new Date("2021-12-11T09:00:07"));

  expect(january).toEqual(new Date("2021-01-01T00:00:00"));
  expect(february).toEqual(new Date("2021-02-01T00:00:00"));
  expect(march).toEqual(new Date("2021-03-01T00:00:00"));
  expect(april).toEqual(new Date("2021-04-01T00:00:00"));
  expect(may).toEqual(new Date("2021-05-01T00:00:00"));
  expect(june).toEqual(new Date("2021-06-01T00:00:00"));
  expect(july).toEqual(new Date("2021-07-01T00:00:00"));
  expect(august).toEqual(new Date("2021-08-01T00:00:00"));
  expect(september).toEqual(new Date("2021-09-01T00:00:00"));
  expect(october).toEqual(new Date("2021-10-01T00:00:00"));
  expect(november).toEqual(new Date("2021-11-01T00:00:00"));
  expect(december).toEqual(new Date("2021-12-01T00:00:00"));
});

export default getFirstDayOfMonth