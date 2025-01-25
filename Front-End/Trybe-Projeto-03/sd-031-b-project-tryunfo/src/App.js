import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './style/App.css';
import Filter from './components/Filters';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardImage: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: [],
    filterName: '',
    filterRare: '',
    filterTrunfo: false,
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.validadeButton());
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const cards = { ...this.state };
    delete cards.savedCards;
    this.setState((prev) => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [...prev.savedCards, cards],
    }));
  };

  hasTrunfo = () => {
    const { savedCards } = this.state;
    return savedCards.some((trunfo) => trunfo.cardTrunfo);
  };

  validadeButton() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const min = 0;
    const max = 90;
    const total = 210;

    const att1 = Number(cardAttr1);
    const att2 = Number(cardAttr2);
    const att3 = Number(cardAttr3);

    const notAllow = cardName === ''
      || cardDescription === ''
      || att1 > max
      || att1 < min
      || att2 > max
      || att2 < min
      || att3 > max
      || att3 < min
      || (att1 + att2 + att3) > total
      || cardImage === '';

    this.setState({
      isSaveButtonDisabled: notAllow,
    });
  }

  deleteCard(cardName) {
    const { savedCards } = this.state;
    this.setState({ savedCards: savedCards
      .filter((card) => card.cardName !== cardName) });
  }

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
      savedCards,
      filterName,
      filterRare,
      filterTrunfo,
    } = this.state;

    const filtered = savedCards.filter(
      (card) => card.cardName.toLowerCase().includes(filterName.toLocaleLowerCase()),
    );
    const filtroDoFiltro = filtered.filter((cardrare) => cardRare === cardrare.cardRare);
    console.log(filtroDoFiltro);

    return (
      <div className="grid">
        <div className="left">
          <div className="wrapper">
            <h1>Super Tryunfo</h1>
            <div>
              <Filter
                filterName={ filterName }
                filterRare={ filterRare }
                filterTrunfo={ filterTrunfo }
                handleChange={ this.handleChange }
                savedCards={ savedCards }
              />
            </div>
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardImage={ cardImage }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
              hasTrunfo={ this.hasTrunfo() }
            />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardImage={ cardImage }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              onSaveButtonClick={ onSaveButtonClick }
            />
            <div className="pack">
              <ul>
                {
                  filtered.map((card) => (
                    <li key={ card.cardName }>
                      <Card { ...card } />
                      <button
                        onClick={ () => this.deleteCard(card.cardName) }
                        data-testid="delete-button"
                      >
                        Excluir
                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
