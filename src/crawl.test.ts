import { describe, it, expect } from "vitest";
import { normalizeURL } from "./crawl";
const testCases = [
    { input: "https://example.com", expected: "example.com" },
    { input: "https://example.com/", expected: "example.com" },
    { input: "http://example.com/path", expected: "example.com/path" },
];

describe("normalizeURL", () => {
    testCases.forEach(({ input, expected }) => {
        it(`should normalize "${input}" to "${expected}"`, () => {
            expect(normalizeURL(input)).toBe(expected);
        });
    });
});