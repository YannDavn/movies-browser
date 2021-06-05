import * as sinon from "sinon";
import { request } from "./request";

const sandbox = sinon.createSandbox();

describe("Request tests", () => {
  beforeEach(() => {
    sandbox.restore();
  });
  it("should return null if fetch fails", async () => {
    const fetchStub = sandbox
      .stub(window, "fetch")
      .callsFake(() => ({ status: 400 } as any));

    const result = await request("Whatever");

    expect(fetchStub.callCount).toEqual(1);
    expect(fetchStub.firstCall.args).toEqual(["Whatever"]);
    expect(result).toBe(null);
  });

  it("should return an empty object if the JSON parsing fails", async () => {
    const jsonStub = sandbox.stub().throws();
    const fetchStub = sandbox
      .stub(window, "fetch")
      .callsFake(() => ({ status: 200, json: jsonStub } as any));

    const result = await request("Whatever");

    expect(fetchStub.callCount).toEqual(1);
    expect(jsonStub.callCount).toEqual(1);
    expect(fetchStub.firstCall.args).toEqual(["Whatever"]);
    expect(result).toEqual({});
  });

  it("should return the parsed JSON", async () => {
    const jsonStub = sandbox.stub().returns({this: 'is a result'});
    const fetchStub = sandbox
      .stub(window, "fetch")
      .callsFake(() => ({ status: 200, json: jsonStub } as any));

    const result = await request("Whatever");

    expect(jsonStub.callCount).toEqual(1);
    expect(fetchStub.callCount).toEqual(1);
    expect(fetchStub.firstCall.args).toEqual(["Whatever"]);
    expect(result).toEqual({ this: "is a result" });
  });
});
