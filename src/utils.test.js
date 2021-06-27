import { formatCurrency, getJobStatusColor, getJobStatusText } from "./utils"

describe("formatCurrency()", () => {
  test("returns number formatted as currency", () => {
    expect(formatCurrency(100)).toBe("£100")
  })
})

describe("getJobStatusText()", () => {
  test("returns display friendly text for status", () => {
    expect(getJobStatusText("position_filled")).toBe("Position filled")
  })

  test("returns value given is status is not known", () => {
    expect(getJobStatusText("fake_status")).toBe("fake_status")
  })
})

describe("getJobStatusColor()", () => {
  test("returns green when status is position_filled", () => {
    expect(getJobStatusColor("position_filled")).toBe("green")
  })

  test("returns yellow when status is expired", () => {
    expect(getJobStatusColor("expired")).toBe("yellow")
  })

  test("returns pink when status is closed", () => {
    expect(getJobStatusColor("closed")).toBe("pink")
  })

  test("returns gray is status is unknown", () => {
    expect(getJobStatusColor("fake_status")).toBe("gray")
  })
})
