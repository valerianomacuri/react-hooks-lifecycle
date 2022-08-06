import { act, cleanup, renderHook } from "@testing-library/react";
import { useState } from "react";
import { useUpdated } from "../src";

describe("useUpdated", () => {
  it("SHOULD called when component updated", () => {
    const fn = jest.fn();
    let value = 0;
    const { rerender } = renderHook(() => useUpdated(fn, [value]));
    value++;
    rerender();
    value++;
    rerender();
    //* dos llamadas porque se actualiza dos veces el componente
    expect(fn).toHaveBeenCalledTimes(2);
  });
  it("SHOULD NOT called when component mounted", () => {
    const fn = jest.fn();
    let value = 0;
    renderHook(() => useUpdated(fn, [value]));
    expect(fn).toHaveBeenCalledTimes(0);
  });
  it("SHOULD NOT called when component unmount", () => {
    const fn = jest.fn();
    let value = 0;
    const { unmount } = renderHook(() => useUpdated(fn, [value]));
    unmount();
    expect(fn).toHaveBeenCalledTimes(0);
  });
});
