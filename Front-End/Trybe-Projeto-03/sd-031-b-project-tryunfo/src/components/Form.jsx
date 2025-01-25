import React from 'react';
import '../style/Form.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick,
      onInputChange,
      hasTrunfo,
    } = this.props;

    const superTrunfoCard = hasTrunfo ? (
      <p>Você já tem um Super Trunfo em seu baralho</p>
    ) : (
      <label htmlFor="trunfo-input">
        Super Trunfo:
        <input
          type="checkbox"
          id="cardTrunfo"
          name="cardTrunfo"
          data-testid="trunfo-input"
          onClick={ onInputChange }
          checked={ cardTrunfo }
        />
      </label>
    );

    return (
      <div>
        <h2>ADICIONE NOVA CARTA</h2>
        <fieldset>
          <label htmlFor="name-input">
            Nome:
            <input
              type="text"
              id="cardName"
              name="cardName"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="description-input">
            Descrição:
            <textarea
              id="cardDescription"
              name="cardDescription"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr1-input">
            Atributo 1:
            <input
              type="number"
              id="cardAttr1"
              name="cardAttr1"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr2-input">
            Atributo 2:
            <input
              type="number"
              id="attr2"
              name="cardAttr2"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr3-input">
            Atributo 3:
            <input
              type="number"
              id="attr3"
              name="cardAttr3"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="image-input">
            Imagem:
            <input
              type="text"
              id="image"
              name="cardImage"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="rare-input">
            Raridade:
            <select
              id="cardRare"
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito-Raro</option>
            </select>
          </label>

          { superTrunfoCard }

          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </fieldset>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default Form;
