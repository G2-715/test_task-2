import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
    invalidCardCode: false
  },
  mutations: {
    ADD_ACCOUNT_NUMBER_CHAR(state, char) {
      state.accountNumber += char;
    },
    REMOVE_ACCOUNT_NUMBER_CHAR(state) {
      state.accountNumber = state.accountNumber.slice(0, state.accountNumber.length - 1);
    },
    ADD_PAYMENT_AMOUNT_CHAR(state, char) {
      state.paymentAmount += char;
    },
    REMOVE_PAYMENT_AMOUNT_CHAR(state) {
      state.paymentAmount = state.paymentAmount.slice(0, state.paymentAmount.length - 1);
    },
    ADD_CARD_NUMBER_CHAR(state, char) {
      state.cardNumber += char;
    },
    REMOVE_CARD_NUMBER_CHAR(state) {
      state.cardNumber = state.cardNumber.slice(0, state.cardNumber.length - 1);
    },
    ADD_CARD_HOLDER_CHAR(state, char) {
      state.cardHolder += char;
    },
    REMOVE_CARD_HOLDER_CHAR(state) {
      state.cardHolder = state.cardHolder.slice(0, state.cardHolder.length - 1);
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
    }
  },
  actions: {
    async validateAll({ dispatch }) {
      await (() => {
        dispatch("validateAccountNumber");
        dispatch("validatePaymentAmount");
        dispatch("validateCardNumber");
        dispatch("validateCardHolder");
        dispatch("validateCardCode");
      })();
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
