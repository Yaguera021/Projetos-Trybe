import csv
from models.dish import Dish
from models.ingredient import Ingredient


class MenuData:
    def __init__(self, source_path: str) -> None:
        self.dishes = set()
        self.read(source_path)

    def read(self, source_path: str) -> None:
        try:
            with open(source_path, encoding='utf-8') as csvfile:
                reader = csv.DictReader(csvfile)

                for row in reader:
                    name = row['dish']
                    price = float(row['price'])
                    ingredient_name = row['ingredient']
                    quantity = int(row['recipe_amount'])

                    dish = next(
                        (d for d in self.dishes if d.name == name), None
                        )
                    if dish is None:
                        dish = Dish(name, price)
                        self.dishes.add(dish)

                    ingredient = Ingredient(ingredient_name)
                    dish.add_ingredient_dependency(ingredient, quantity)

        except Exception as e:
            print(f"Erro ao ler o arquivo CSV: {e}")
