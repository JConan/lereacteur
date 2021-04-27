describe("first demo test", () => {
    const message: string = "Hello world"

    it("should gracefully failed", () => {
        expect(message).toEqual("Hello world")
    })
})