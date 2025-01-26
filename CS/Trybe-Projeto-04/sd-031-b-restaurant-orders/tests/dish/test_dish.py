import pytest
from src.models.dish import Dish  # noqa: F401, E261, E501
from src.models.ingredient import Ingredient


def test_dish():
    ingredient = Ingredient("ovo")

    dish = Dish("Omelete", 8.0)

    dish.add_ingredient_dependency(ingredient, 1)

    assert dish.name == "Omelete"
    assert pytest.approx(dish.price, 0.01) == 8.0
    assert dish.recipe == {ingredient: 1}
    assert repr(dish) == "Dish('Omelete', R$8.00)"
    assert dish == Dish("Omelete", 8.0)
    assert dish != Dish("Omelete", 21.15)
    assert dish == dish
    assert hash(dish) == hash(repr(dish))

    with pytest.raises(TypeError):
        Dish("Omelete", "8.0")

    with pytest.raises(ValueError):
        Dish("Omelete", -8.0)

    assert dish.get_restrictions() == ingredient.restrictions
    assert dish.get_ingredients() == {ingredient}
