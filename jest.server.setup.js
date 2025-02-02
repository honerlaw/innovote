jest.mock("newrelic", () => {
  return {
    noticeError: jest.fn(),
  }
})
