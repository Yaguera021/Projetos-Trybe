import
{
  ADD_CURRENCIES,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  UPT_TOTAL,
  SET_EDIT_MODE,
  EDIT_EXPENSE,
}
  from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  isEditMode: false,
  idToEdit: 0,
  total: 0,
};

const wallet = (state = initialState, { type, payload }) => {
  switch (type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, payload],
    };
  case UPT_TOTAL:
    return {
      ...state,
      total: payload,
    };
  case ADD_CURRENCIES:
    return {
      ...state,
      currencies: payload,
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== Number(payload)),
    };
  case SET_EDIT_MODE:
    return {
      ...state,
      isEditMode: payload.isEdit,
      idToEdit: payload.id,
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.map((expense) => {
        if (expense.id === payload.id) {
          return payload;
        }
        return expense;
      }),
    };
  default:
    return state;
  }
};
export default wallet;
