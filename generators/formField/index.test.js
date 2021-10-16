const index = require("./index")
// @ponicode
describe("index.actions", () => {
    test("0", () => {
        let callFunction = () => {
            index.actions({ hasStorybook: false, type: "string" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.actions({ hasStorybook: true, type: "object" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.actions({ hasStorybook: false, type: "object" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.actions({ hasStorybook: true, type: "Stateless Function" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.actions({ hasStorybook: true, type: "string" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.actions(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
