import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import
{
  addExpense,
  uptTotal,
  addCurrencies,
  editExpense,
} from '../redux/actions';
import fetchCurrencies from './helpers/fetchCurrencies';

const repeatWord = 'Alimentação';

class WalletForm extends Component {
  state = {
    value: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: repeatWord,
    description: '',
    exchangeRates: '',
    id: 0,
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    const data = await fetchCurrencies();
    const array = Object.keys(data);
    const currArray = array.filter((item) => item !== 'USDT');
    dispatch(addCurrencies(currArray));
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { dispatch, total, isEditMode } = this.props;
    const { currency, value } = this.state;

    const exchangeRates = await fetchCurrencies();
    this.setState({ exchangeRates });

    const newTotal = Number(exchangeRates[currency].ask * value) + Number(total);
    dispatch((uptTotal(newTotal)));

    const expenses = {
      ...this.state,
      exchangeRates,
    };
    if (isEditMode) {
      dispatch(editExpense(expenses));
      this.setState({
        value: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: repeatWord,
        description: '',
        exchangeRates: '',
      });
    } else {
      dispatch(addExpense(expenses));
      this.setState((prevState) => ({
        id: prevState.id + 1,
        value: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: repeatWord,
        description: '',
        exchangeRates: '',
      }));
    }
  };

  render() {
    const { value, description, currency, tag, method } = this.state;
    const { currencies, isEditMode } = this.props;
    return (
      <form>
        <h1>WalletForm</h1>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            name="value"
            data-testid="value-input"
            onChange={ this.handleChange }
            value={ value }
          />
        </label>

        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            data-testid="description-input"
            onChange={ this.handleChange }
            value={ description }
          />
        </label>

        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            id="currency"
            onChange={ this.handleChange }
            value={ currency }
            data-testid="currency-input"
          >
            {currencies.map((curr) => (
              <option key={ curr } value={ curr }>{curr}</option>
            ))}
          </select>

        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            name="method"
            id="method"
            data-testid="method-input"
            onChange={ this.handleChange }
            value={ method }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag
          <select
            name="tag"
            id="tag"
            data-testid="tag-input"
            onChange={ this.handleChange }
            value={ tag }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.handleSubmit }
        >
          {isEditMode ? 'Editar despesa' : 'Adicionar despesa'}
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  total: state.wallet.total,
  isEditMode: state.wallet.isEditMode,
  idToEdit: state.wallet.idToEdit,

});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  total: PropTypes.number.isRequired,
  isEditMode: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
