import { renderHook } from "@testing-library/react";
import { useBeforeUpdate } from "../src";

describe("useBeforeUpdate", () => {
  it("SHOULD called before component updated", () => {
    const fn = jest.fn();
    let value = 0;
    const { rerender } = renderHook(() => useBeforeUpdate(fn, [value]));
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
    renderHook(() => useBeforeUpdate(fn, [value]));
    expect(fn).toHaveBeenCalledTimes(0);
  });
  it("SHOULD NOT called when component unmount", () => {
    const fn = jest.fn();
    let value = 0;
    const { unmount } = renderHook(() => useBeforeUpdate(fn, [value]));
    unmount();
    expect(fn).toHaveBeenCalledTimes(0);
  });
});
