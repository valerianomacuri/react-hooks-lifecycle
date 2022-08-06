import { renderHook } from "@testing-library/react";
import { useBeforeUnmount } from "../src";

describe("useBeforeUnmount", () => {
  it("SHOULD NOT called when component mounted", () => {
    const fn = jest.fn();
    renderHook(() => useBeforeUnmount(fn));
    expect(fn).toHaveBeenCalledTimes(0);
  });

  it("SHOULD NOT called when component updated", () => {
    const fn = jest.fn();
    const { rerender } = renderHook(() => useBeforeUnmount(fn));
    rerender();
    rerender();
    expect(fn).toHaveBeenCalledTimes(0);
  });

  it("SHOULD called before component unmount", () => {
    const fn = jest.fn();
    const { unmount } = renderHook(() => useBeforeUnmount(fn));
    unmount();
    //* el único llamado es cuando se desmonta
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
