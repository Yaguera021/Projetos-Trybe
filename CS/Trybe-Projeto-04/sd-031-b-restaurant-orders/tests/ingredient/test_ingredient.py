from src.models.ingredient import Ingredient, Restriction


def test_ingredient():
    ingredient = Ingredient("salmão")

    assert ingredient.name == "salmão"
    assert ingredient.restrictions == {
            Restriction.ANIMAL_MEAT,
            Restriction.SEAFOOD,
            Restriction.ANIMAL_DERIVED,
        }

    assert hash(ingredient) == hash("salmão")
    assert ingredient == ingredient
    assert ingredient != Ingredient("bacon")

    expected_repr = "Ingredient('salmão')"
    assert repr(ingredient) == expected_repr
