import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  handleAdd = () => {
    const { total } = this.props;
    return total.reduce((prev, curr, index) => {
      const changeRate = total[index].exchangeRates[curr.currency].ask;
      return prev + (curr.value * changeRate);
    }, 0);
  };

  render() {
    const { email } = this.props;
    return (
      <div>
        <p data-testid="total-field">
          { this.handleAdd().toFixed(2) }
        </p>
        <p data-testid="header-currency-field">BRL</p>
        <p data-testid="email-field">{email}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps)(Header);
