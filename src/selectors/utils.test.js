import { recruiterRatingIsSelected, salaryRangeIsSelected } from "./utils"

describe("salaryRangeIsSelected()", () => {
  it.each([
    ["under_30", 25000],
    ["between_30_45", 35000],
    ["over_45", 50000],
    ["unknown", null],
  ])("returns true when %s is enabled and value is %s", (key, salary) => {
    const filter = {
      [key]: true,
    }

    expect(salaryRangeIsSelected(filter, { salary })).toBe(true)
  })

  it.each([
    ["under_30", 35000],
    ["between_30_45", 25000],
    ["over_45", 10000],
    ["unknown", 10000],
  ])("returns false when %s is enabled and value is %s", (key, salary) => {
    const filter = {
      [key]: true,
    }

    expect(salaryRangeIsSelected(filter, { salary })).toBe(false)
  })
})

describe("recruiterRatingIsSelected()", () => {
  it.each([
    ["five_star", 5],
    ["four_star", 4],
    ["three_star", 3],
  ])("returns true when %s is enabled and value is %s", (key, rating) => {
    const filter = {
      [key]: true,
    }

    expect(recruiterRatingIsSelected(filter, { rating })).toBe(true)
  })

  it.each([
    ["five_star", 3],
    ["four_star", 5],
    ["three_star", 4],
  ])("returns false when %s is enabled and value is %s", (key, rating) => {
    const filter = {
      [key]: true,
    }

    expect(recruiterRatingIsSelected(filter, { rating })).toBe(false)
  })
})
