import { renderHook } from "@testing-library/react";
import { useMounted } from "../src";

describe("useMounted", () => {
  it("SHOULD called when component mounted", () => {
    const fn = jest.fn();
    renderHook(() => useMounted(fn));
    //* el único llamado es cuando se monta
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("SHOULD NOT called when component updated", () => {
    const fn = jest.fn();
    const { rerender } = renderHook(() => useMounted(fn));
    rerender();
    rerender();
    //* el único llamado es cuando se monta
    expect(fn).toHaveBeenCalledTimes(1);
  });
  it("SHOULD NOT called when component unmount", () => {
    const fn = jest.fn();
    const { unmount } = renderHook(() => useMounted(fn));
    unmount();
    //* el único llamado es cuando se monta
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
