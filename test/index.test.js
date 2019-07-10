import Cookies from 'universal-cookie'
import merge from "lodash.merge"
import chai from 'chai'
import sinon from 'sinon'
import * as CookieUtils from '../src/index'

var should = chai.should()

describe("Cookie Utility", () => {
  let listeners = []

  afterEach(() => {
    listeners.map((listener) => {
      CookieUtils.removeChangeListener(listener)
    })
    if (listeners.length > 0) {
      listeners.splice(0, listeners.length)
    }
  })

  context("setLocalItem", () => {
    it("should be able to save cookie", () => {
      const cookieName = "woahTestSet"
      const cookieValue = "test-set-cookie"

      const listener = function ({
        name,
        value,
        options
      }) {
        name.should.equal(cookieName)
        value.should.equal(cookieValue)
      }

      CookieUtils.addChangeListener(listener)
      listeners.push(listener)
      CookieUtils.setLocalItem(cookieName, cookieValue)
    })
  })

  context("getLocalItem", () => {
    it("should be able to get cookie", () => {
      const cookieName = "woahTestGet"
      const cookieValue = "test-get-cookie"

      CookieUtils.setLocalItem(cookieName, cookieValue)
      const getCookie = CookieUtils.getLocalItem(cookieName)
      getCookie.should.equal("test-get-cookie")
    })
  })

  context("removeLocalItem", () => {
    it("should be able to remove cookie", () => {
      const cookieName = "woahTestRemove"
      const cookieValue = "test-remove-cookie"

      CookieUtils.setLocalItem(cookieName, cookieValue)
      CookieUtils.removeLocalItem(cookieName)
      const removeCookie = CookieUtils.getLocalItem(cookieName)
      removeCookie.should.be.false
    })
  })

  context("getAllLocalItem", () => {
    it("should be able to get all cookies", () => {
      const cookieName = "woahTestAllCookie"
      const cookieValue = "test-all-cookies"
      const amount = 4;
      CookieUtils.removeAllLocalItem("woah")
      for (let i = 1; i <= amount; i += 1) {
        CookieUtils.setLocalItem(`${cookieName}${i}`, cookieValue)
      }

      const allCookies = CookieUtils.getAllLocalItem()
      for (let i = 1; i <= amount; i += 1) {
        allCookies.hasOwnProperty(`${cookieName}${i}`).should.be.true
      }
    })
  })

  context("removeAllLocalItem", () => {
    it("should be able to remove all cookies that have \"woah\" at the start of their name", () => {
      const cookieName = ["noWoahTestGet", "woahTestGet"]
      const cookieValue = ["test-get-cookie", "get-cookie-test"]
      for (let i = 0; i < 2; i += 1) {
        CookieUtils.setLocalItem(cookieName[i], cookieValue[i])
      }

      CookieUtils.removeAllLocalItem("woah")
      const allCookies = CookieUtils.getAllLocalItem()

      Object.entries(allCookies).length.should.equal(1)
      allCookies.hasOwnProperty(cookieName[0]).should.be.true
    })
  })
})
