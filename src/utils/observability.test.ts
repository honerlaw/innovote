import { observability } from "@/utils/observability"

describe("observability", () => {
  it("should import the new relic library and use it to notice an error on the server", async () => {
    window.newrelic = {
      noticeError: jest.fn(),
    }

    await observability.noticeError(new Error("test error"))

    expect(window.newrelic?.noticeError).toHaveBeenCalledWith(
      new Error("test error"),
    )
  })
})
