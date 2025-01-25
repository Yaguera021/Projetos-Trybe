export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const UPT_TOTAL = 'UPT_TOTAL';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const SET_EDIT_MODE = 'SET_EDIT_MODE';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  payload: email,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  payload: id,
});

export const editExpense = (expense) => ({
  type: EDIT_EXPENSE,
  payload: expense,
});

export const uptTotal = (newTotal) => ({
  type: UPT_TOTAL,
  payload: newTotal,
});

export const addCurrencies = (currencies) => ({
  type: ADD_CURRENCIES,
  payload: currencies,
});

export const setEditMode = (isEdit, id) => ({
  type: SET_EDIT_MODE,
  payload: { isEdit, id },
});
