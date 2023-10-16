import { expect, test } from "@jest/globals";
import checkLetterMatch from "./algorithm";

test("Test if letters are correct", () => {
  const result = checkLetterMatch("CYKLA", "HALLÅ");
  expect(result).toEqual([
    { letter: "H", result: "incorrect" },
    { letter: "A", result: "misplaced" },
    { letter: "L", result: "incorrect" },
    { letter: "L", result: "correct" },
    { letter: "Å", result: "incorrect" },
  ]);
});

test("Test if both words are empty", () => {
  const result = checkLetterMatch("", "");
  expect(result).toEqual([]);
});

test("Test if both words are the same", () => {
  const result = checkLetterMatch("EXAMPLE", "EXAMPLE");
  expect(result).toEqual([
    { letter: "E", result: "correct" },
    { letter: "X", result: "correct" },
    { letter: "A", result: "correct" },
    { letter: "M", result: "correct" },
    { letter: "P", result: "correct" },
    { letter: "L", result: "correct" },
    { letter: "E", result: "correct" },
  ]);
});

test("Test when both words are of different lengths", () => {
  const result = checkLetterMatch("CAT", "CATER");
  expect(result).toEqual([
    { letter: "C", result: "correct" },
    { letter: "A", result: "correct" },
    { letter: "T", result: "correct" },
  ]);
});

test("Test when the guessed word is longer than the correct word", () => {
  const result = checkLetterMatch("TIGER", "TIG");
  expect(result).toEqual([
    { letter: "T", result: "correct" },
    { letter: "I", result: "correct" },
    { letter: "G", result: "correct" },
  ]);
});

test("Test when both words contain special characters", () => {
  const result = checkLetterMatch("W@rd", "W*rd");
  expect(result).toEqual([
    { letter: "W", result: "correct" },
    { letter: "@", result: "misplaced" },
    { letter: "*", result: "misplaced" },
    { letter: "r", result: "correct" },
    { letter: "d", result: "correct" },
  ]);
});

test("Test when both words contain spaces", () => {
  const result = checkLetterMatch("two words", "wwo rds");
  expect(result).toEqual([
    { letter: "t", result: "correct" },
    { letter: "w", result: "misplaced" },
    { letter: "o", result: "correct" },
    { letter: " ", result: "correct" },
    { letter: "w", result: "correct" },
    { letter: "o", result: "correct" },
    { letter: "r", result: "correct" },
    { letter: "d", result: "correct" },
    { letter: "s", result: "correct" },
  ]);
});

test("Test when both words are completely different", () => {
  const result = checkLetterMatch("APPLE", "BANANA");
  expect(result).toEqual([
    { letter: "A", result: "incorrect" },
    { letter: "P", result: "incorrect" },
    { letter: "P", result: "incorrect" },
    { letter: "L", result: "incorrect" },
    { letter: "E", result: "incorrect" },
  ]);
});
