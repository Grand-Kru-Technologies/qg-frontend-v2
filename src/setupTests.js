// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { afterEach, beforeEach, vi } from "vitest";

beforeEach(() => {
	vi.stubGlobal(
		"fetch",
		vi.fn(() =>
			Promise.resolve({
				ok: true,
				json: () =>
					Promise.resolve({ profileThumbnail: "", messages: 0 }),
			}),
		),
	);
});

afterEach(() => {
	vi.unstubAllGlobals();
});
