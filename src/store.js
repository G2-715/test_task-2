import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const uuidv1 = require('uuid/v1');

export default new Vuex.Store({
  state: {
    accountNumber: "",
    paymentAmount: "",

    cardNumber: "",
    cardHolder: "",
    cardCode: "",

    invalidAccountNumber: false,
    invalidPaymentAmount: false,
    invalidCardNumber: false,
    invalidCardHolder: false,
    invalidCardCode: false,

    token: "",
    date: "",

    history: []
  },
  mutations: {
    CHANGE_ACCOUNT_NUMBER(state, value) {
      state.accountNumber = value;
    },
    CHANGE_PAYMENT_AMOUNT(state, value) {
      state.paymentAmount = value;
    },
    CHANGE_CARD_NUMBER(state, value) {
      state.cardNumber = value;
    },
    CHANGE_CARD_HOLDER(state, value) {
      state.cardHolder = value;
    },
    ADD_CARD_CODE_CHAR(state, char) {
      state.cardCode += char;
    },
    REMOVE_CARD_CODE_CHAR(state) {
      state.cardCode = state.cardCode.slice(0, state.cardCode.length - 1);
    },

    SET_INVALID_CARD_NUMBER(state) {
      state.invalidCardNumber = true;
    },
    SET_VALID_CARD_NUMBER(state) {
      state.invalidCardNumber = false;
    },
    SET_INVALID_CARD_HOLDER(state) {
      state.invalidCardHolder = true;
    },
    SET_VALID_CARD_HOLDER(state) {
      state.invalidCardHolder = false;
    },
    SET_INVALID_CARD_CODE(state) {
      state.invalidCardCode = true;
    },
    SET_VALID_CARD_CODE(state) {
      state.invalidCardCode = false;
    },
    SET_INVALID_ACCOUNT_NUMBER(state) {
      state.invalidAccountNumber = true;
    },
    SET_VALID_ACCOUNT_NUMBER(state) {
      state.invalidAccountNumber = false;
    },
    SET_INVALID_PAYMENT_AMOUNT(state) {
      state.invalidPaymentAmount = true;
    },
    SET_VALID_PAYMENT_AMOUNT(state) {
      state.invalidPaymentAmount = false;
    },

    UPDATE_DATE(state) {
      const now = new Date();
      const td = (val) => ('0' + val).slice(-2);

      state.date =
        `${td(now.getDate())}-${td(now.getMonth() + 1)}-${now.getFullYear()} ` +
        `${td(now.getHours())}:${td(now.getMinutes())}:${td(now.getSeconds())}`;
    },
    SET_TOKEN(state) {
      state.token = uuidv1();
    },
    RESET_ALL(state) {
      state.accountNumber = "";
      state.paymentAmount = "";

      state.cardNumber = "";
      state.cardHolder = "";
      state.cardCode = "";

      state.invalidAccountNumber = false;
      state.invalidPaymentAmount = false;
      state.invalidCardNumber = false;
      state.invalidCardHolder = false;
      state.invalidCardCode = false;

      state.token = "";
      state.date = "";
    },
    ADD_TO_HISTORY(state) {
      state.history.push({
        sum: state.paymentAmount,
        number: state.accountNumber,
        date: state.date
      })
    }
  },
  actions: {
    async validateAll({ dispatch, commit }) {
      await dispatch("validateAccountNumber");
      await dispatch("validatePaymentAmount");
      await dispatch("validateCardNumber");
      await dispatch("validateCardHolder");
      await dispatch("validateCardCode");

      const {
        invalidAccountNumber,
        invalidPaymentAmount,
        invalidCardNumber,
        invalidCardHolder,
        invalidCardCode
      } = this.state

      if (
        invalidAccountNumber ||
        invalidPaymentAmount ||
        invalidCardNumber ||
        invalidCardHolder ||
        invalidCardCode
      ) return false;

      await commit("UPDATE_DATE");
      await commit("SET_TOKEN");
      await commit("ADD_TO_HISTORY");

      return true;
    },

    validateAccountNumber({ commit }) {
      if (!this.state.accountNumber)
        commit("SET_INVALID_ACCOUNT_NUMBER")
      else
        commit("SET_VALID_ACCOUNT_NUMBER")
    },

    validatePaymentAmount({ commit }) {
      if (!this.state.paymentAmount)
        commit("SET_INVALID_PAYMENT_AMOUNT")
      else
        commit("SET_VALID_PAYMENT_AMOUNT")
    },

    validateCardNumber({ commit }) {
      if (this.state.cardNumber.length !== 16)
        commit("SET_INVALID_CARD_NUMBER");
      else {
        commit("SET_VALID_CARD_NUMBER");
      }
    },

    validateCardHolder({ commit }) {
      if (this.state.cardHolder.length < 4)
        commit("SET_INVALID_CARD_HOLDER");
      else {
        commit("SET_VALID_CARD_HOLDER");
      }
    },

    validateCardCode({ commit }) {
      if (this.state.cardCode.length < 3)
        commit("SET_INVALID_CARD_CODE");
      else {
        commit("SET_VALID_CARD_CODE");
      }
    }
  }
})
