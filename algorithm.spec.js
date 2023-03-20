import { /* describe, */ expect, /* it */ test } from "@jest/globals";
import checkLetterMatch from "./algorithm";
import { word1, word2 } from "./algorithm";

/* describe("checkLetterMattch(word1,word2)", () => {
  it("makes all letters upperCase()");
  const result = checkLetterMatch("House");
  expect(result).toBe("HOUSE");
}); */

test("test if word1 contains five letters", () => {
    const word1Length = "House";
    expect(word1Length.length).toBe(5);
});

test("word1 has five letters", () => {
    expect(word1).toHaveLength(5);
});

/* test("word2 is uppercase", () => {
    checkLetterMatch(word1, word2);
    expect(word2).toBe("GAMES");
}); */