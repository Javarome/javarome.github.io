import {describe, test, beforeEach} from "node:test"
import {HistoryMessages_fr} from "./HistoryMessages_fr.mjs"
import * as assert from "node:assert"

describe('HistoryMessages_fr', () => {
  /**
   * @type {HistoryMessages}
   */
  let messages

  beforeEach(() => {
    messages = new HistoryMessages_fr()
  })

  test("1 month",() => {
    assert.equal(messages.duration(0, 1), "1 mois")
  })

  test("2 month",() => {
    assert.equal(messages.duration(0, 2), "2 mois")
  })

  test("3 months",() => {
    assert.equal(messages.duration(0, 3), "3 mois")
  })

  test("4 months",() => {
    assert.equal(messages.duration(0, 4), "4 mois")
  })

  test("5 months",() => {
    assert.equal(messages.duration(0, 5), "5 mois")
  })

  test("6 months",() => {
    assert.equal(messages.duration(0, 6), "6 mois")
  })

  test("7 months",() => {
    assert.equal(messages.duration(0, 7), "7 mois")
  })

  test("11 months",() => {
    assert.equal(messages.duration(0, 11), "~1 an")
  })

  test("12 months",() => {
    assert.equal(messages.duration(1), "1 an")
  })

  test("13 months",() => {
    assert.equal(messages.duration(1, 1), "1 an+")
  })

  test("18 months",() => {
    assert.equal(messages.duration(1, 6), "1 an ½")
  })
})
