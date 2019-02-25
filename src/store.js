import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import uuidv1 from 'uuid/v1';
import { getNormalDateTime } from './helpers';

export default new Vuex.Store({
  state: {
    accountNumber: "",
    paymentAmount: "",

    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cardHolder: "",
    cardCode: "",

    invalid: {
      AccountNumber: false,
      PaymentAmount: false,
      CardNumber: false,
      CardHolder: false,
      CardCode: false,
    },

    token: "",
    date: "",

    history: [
      {
        date: "25-02-2019 13:50:22",
        number: "2321321",
        sum: "21312",
      },
      {
        date: "25-02-2019 13:50:22",
        number: "2321321",
        sum: "21312",
      },
      {
        date: "25-02-2019 13:50:22",
        number: "2321321",
        sum: "21312",
      },
      {
        date: "25-02-2019 13:50:22",
        number: "2321321",
        sum: "21312",
      },
      {
        date: "25-02-2019 13:50:22",
        number: "2321321",
        sum: "21312",
      },
      {
        date: "25-02-2019 13:50:22",
        number: "2321321",
        sum: "21312",
      },
      {
        date: "25-02-2019 13:50:22",
        number: "2321321",
        sum: "21312",
      },
      {
        date: "25-02-2019 13:50:22",
        number: "2321321",
        sum: "21312",
      }
    ]
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
    CHANGE_CARD_MONTH(state, value) {
      state.cardMonth = value;
    },
    CHANGE_CARD_YEAR(state, value) {
      state.cardYear = value;
    },
    CHANGE_CARD_HOLDER(state, value) {
      state.cardHolder = value;
    },
    CHANGE_CARD_CODE(state, value) {
      state.cardCode = value;
    },

    SET_INVALID_CARD_NUMBER(state) {
      state.invalid.CardNumber = true;
    },
    SET_VALID_CARD_NUMBER(state) {
      state.invalid.CardNumber = false;
    },
    SET_INVALID_CARD_HOLDER(state) {
      state.invalid.CardHolder = true;
    },
    SET_VALID_CARD_HOLDER(state) {
      state.invalid.CardHolder = false;
    },
    SET_INVALID_CARD_CODE(state) {
      state.invalid.CardCode = true;
    },
    SET_VALID_CARD_CODE(state) {
      state.invalid.CardCode = false;
    },
    SET_INVALID_ACCOUNT_NUMBER(state) {
      state.invalid.AccountNumber = true;
    },
    SET_VALID_ACCOUNT_NUMBER(state) {
      state.invalid.AccountNumber = false;
    },
    SET_INVALID_PAYMENT_AMOUNT(state) {
      state.invalid.PaymentAmount = true;
    },
    SET_VALID_PAYMENT_AMOUNT(state) {
      state.invalid.PaymentAmount = false;
    },
    UPDATE_DATE(state) {
      state.date = getNormalDateTime();
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
      state.cardMonth = "";
      state.cardYear = "";

      Object.keys(state.invalid).map(key => state.invalid[key] = false);

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
    async validateAll({ dispatch, state, commit }) {
      await dispatch("validateAccountNumber");
      await dispatch("validatePaymentAmount");
      await dispatch("validateCardNumber");
      await dispatch("validateCardHolder");
      await dispatch("validateCardCode");

      if (Object.values(state.invalid).some((val) => val)) return false;

      // return false;

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
