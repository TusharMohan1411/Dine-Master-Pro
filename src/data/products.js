// src/data/foodItems.js
import Burger from '../../public/images/food images/Burger.jpg';
import Pizza from '../../public/images/food images/Pizza.jpg';
import SpringRoll from '../../public/images/food images/Spring Roll.jpg';
// import Momos from '../../public/images/food images/Momos.jpg';
import FrenchFries from '../../public/images/food images/French Fries.jpg';
// import Chaap from '../../public/images/food images/Chaap.jpg';
// import Manchurian from '../../public/images/food images/Manchurian.jpg';
// import Cutlet from '../../public/images/food images/Cutlet.jpg';
// import GolGappe from '../../public/images/food images/Gol Gappe.jpg';
// import PaneerTikka from '../../public/images/food images/Paneer Tikka.png';
// import PavBhaji from '../../public/images/food images/Pav Bhaji.jpg';
// import CheeseChilli from '../../public/images/food images/Cheese Chilli.jpg';
// import Chowmene from '../../public/images/food images/Chowmene.jpg';


const PRODUCTS = {
    pizza: {
        image: Pizza, // Image for the pizza category
        paneerPizza: {
            name: 'Paneer Pizza',
            price: 200,
            image: Pizza,
            ingredients: ['Paneer', 'Cheese', 'Flour', 'Tomato Sauce'],
            recipe: [
                'Prepare the dough.',
                'Spread tomato sauce.',
                'Add cheese and paneer.',
                'Bake in oven.'
            ]
        },
        chickenPizza: {
            name: 'Chicken Pizza',
            price: 250,
            image: Pizza,
            ingredients: ['Chicken', 'Cheese', 'Flour', 'Tomato Sauce'],
            recipe: [
                'Prepare the dough.',
                'Spread tomato sauce.',
                'Add cheese and chicken.',
                'Bake in oven.'
            ]
        }
    },
    burger: {
        image: Burger, // Image for the burger category
        vegBurger: {
            name: 'Veg Burger',
            price: 100,
            image: Burger,
            ingredients: ['Bun', 'Veg Patty', 'Lettuce', 'Tomato'],
            recipe: [
                'Grill the veg patty.',
                'Toast the buns.',
                'Assemble with lettuce and tomato.'
            ]
        },
        chickenBurger: {
            name: 'Chicken Burger',
            price: 150,
            image: 'chickenBurger.png',
            ingredients: ['Bun', 'Chicken Patty', 'Lettuce', 'Tomato'],
            recipe: [
                'Grill the chicken patty.',
                'Toast the buns.',
                'Assemble with lettuce and tomato.'
            ]
        }
    },
    miscellaneous: {
        image: SpringRoll, // Image for the miscellaneous category
        springRoll: {
            name: 'Spring Roll',
            price: 60,
            image: SpringRoll,
            ingredients: ['Flour', 'Vegetables', 'Oil', 'Flour', 'Vegetables', 'Oil', 'Flour', 'Vegetables', 'Oil', 'Flour', 'Vegetables', 'Oil', 'Flour', 'Vegetables', 'Oil',],
            recipe: [
                'Prepare the dough.',
                'Add vegetable filling.',
                'Deep fry until golden.',
                'Prepare the dough.',
                'Add vegetable filling.',
                'Deep fry until golden. Deep fry until goldenDeep fry until goldenDeep fry until goldenDeep fry until goldenDeep fry until goldenDeep fry until goldenDeep fry until goldenDeep fry until goldenDeep fry until golden',
                'Prepare the dough.',
                'Add vegetable filling.',
                'Deep fry until golden.',
                'Prepare the dough.',
                'Add vegetable filling.',
                'Deep fry until golden.',
                'Prepare the dough.',
                'Add vegetable filling.',
                'Deep fry until golden.',
                'Prepare the dough.',
                'Add vegetable filling.',
                'Deep fry until golden.',
            ]
        },
        frenchFries: {
            name: 'French Fries',
            price: 50,
            image: FrenchFries,
            ingredients: ['Potatoes', 'Salt', 'Oil'],
            recipe: [
                'Cut potatoes into strips.',
                'Deep fry until golden.',
                'Sprinkle with salt.'
            ]
        }
    }
};



export default PRODUCTS;









// const PRODUCTS = [
//     {
//         name: 'Momos',
//         category: 'Snacks',
//         price: 120,
//         image: Momos,
//         ingredients: ['Flour', 'Cabbage', 'Carrot', 'Onion', 'Garlic', 'Ginger', 'Soy Sauce'],
//         recipe: [
//             '1. Mix flour and water to make the dough.',
//             '2. Prepare the filling with finely chopped vegetables and seasonings.',
//             '3. Roll out the dough, stuff it with filling, and shape the momos.',
//             '4. Steam for 15-20 minutes and serve hot with dipping sauce.'
//         ]
//     },
//     {
//         name: 'Pizza',
//         category: 'Fast Food',
//         price: 200,
//         image: Pizza,
//         ingredients: ['Pizza Base', 'Tomato Sauce', 'Cheese', 'Vegetables'],
//         recipe: [
//             '1. Spread tomato sauce on the pizza base.',
//             '2. Add cheese and vegetables on top.',
//             '3. Bake in a preheated oven until the cheese is melted and the crust is golden brown.',
//             '4. Serve hot.'
//         ]
//     },
//     {
//         name: 'Burger',
//         category: 'Fast Food',
//         price: 80,
//         image: Burger,
//         ingredients: ['Burger Buns', 'Patty', 'Lettuce', 'Tomato', 'Cheese', 'Sauce'],
//         recipe: [
//             '1. Cook the patty until done.',
//             '2. Toast the burger buns lightly.',
//             '3. Assemble the burger with lettuce, tomato, cheese, and sauce.',
//             '4. Serve hot.'
//         ]
//     },
//     {
//         name: 'Chaap',
//         category: 'Chinese',
//         price: 180,
//         image: Chaap,
//         ingredients: ['Soya Chaap', 'Yogurt', 'Spices', 'Oil'],
//         recipe: [
//             '1. Marinate soya chaap in yogurt and spices.',
//             '2. Skewer the chaap and grill until cooked.',
//             '3. Serve hot with mint chutney.'
//         ]
//     },
//     {
//         name: 'French Fries',
//         category: 'Snacks',
//         price: 60,
//         image: FrenchFries,
//         ingredients: ['Potatoes', 'Salt', 'Oil'],
//         recipe: [
//             '1. Cut potatoes into thin strips.',
//             '2. Soak in cold water for 30 minutes.',
//             '3. Heat oil in a pan and fry the potatoes until golden and crispy.',
//             '4. Drain excess oil and sprinkle with salt.'
//         ]
//     },
//     {
//         name: 'Spring Roll',
//         category: 'Chinese',
//         price: 100,
//         image: SpringRoll,
//         ingredients: ['Spring Roll Wrappers', 'Cabbage', 'Carrot', 'Bell Pepper', 'Soy Sauce', 'Oil'],
//         recipe: [
//             '1. Prepare the filling by stir-frying vegetables with soy sauce.',
//             '2. Place the filling on the spring roll wrapper and roll tightly.',
//             '3. Heat oil in a pan and fry the rolls until golden brown.',
//             '4. Serve hot with dipping sauce.'
//         ]
//     },

// ];








// {
//     name: 'Cutlet',
//     category: 'Snacks',
//     price: 70,
//     image: Cutlet,
//     ingredients: ['Potatoes', 'Bread Crumbs', 'Spices', 'Oil'],
//     recipe: [
//         '1. Boil and mash the potatoes.',
//         '2. Mix with spices and shape into cutlets.',
//         '3. Coat with bread crumbs.',
//         '4. Heat oil in a pan and fry until golden brown.',
//         '5. Serve hot with ketchup or chutney.'
//     ]
// },
// {
//     name: 'Gol Gappe',
//     category: 'Snacks',
//     price: 50,
//     image: GolGappe,
//     ingredients: ['Semolina', 'Flour', 'Potatoes', 'Chickpeas', 'Spices', 'Tamarind Water'],
//     recipe: [
//         '1. Prepare the dough with semolina and flour and roll into small puris.',
//         '2. Deep fry the puris until crispy.',
//         '3. Prepare the filling with boiled potatoes and chickpeas.',
//         '4. Stuff the puris with the filling and serve with tamarind water.'
//     ]
// },
// {
//     name: 'Paneer Tikka',
//     category: 'Indian',
//     price: 200,
//     image: PaneerTikka,
//     ingredients: ['Paneer', 'Yogurt', 'Spices', 'Oil'],
//     recipe: [
//         '1. Marinate paneer cubes in yogurt and spices.',
//         '2. Skewer the paneer and grill until cooked.',
//         '3. Serve hot with mint chutney.'
//     ]
// },
// {
//     name: 'Pav Bhaji',
//     category: 'Indian',
//     price: 140,
//     image: PavBhaji,
//     ingredients: ['Mixed Vegetables', 'Tomatoes', 'Spices', 'Butter', 'Pav Buns'],
//     recipe: [
//         '1. Boil and mash the mixed vegetables.',
//         '2. Cook tomatoes and spices to make the bhaji.',
//         '3. Add the mashed vegetables and cook until well mixed.',
//         '4. Serve hot with buttered pav buns.'
//     ]
// },
// {
//     name: 'Cheese Chilli',
//     category: 'Chinese',
//     price: 160,
//     image: CheeseChilli,
//     ingredients: ['Cheese', 'Bell Peppers', 'Onion', 'Soy Sauce', 'Spices'],
//     recipe: [
//         '1. Cut cheese into cubes and bell peppers into strips.',
//         '2. Stir-fry the bell peppers and onion with soy sauce and spices.',
//         '3. Add the cheese cubes and cook until cheese is slightly melted.',
//         '4. Serve hot.'
//     ]
// },
// {
//     name: 'Chowmene',
//     category: 'Chinese',
//     price: 130,
//     image: Chowmene,
//     ingredients: ['Noodles', 'Mixed Vegetables', 'Soy Sauce', 'Oil'],
//     recipe: [
//         '1. Boil the noodles until cooked.',
//         '2. Stir-fry the vegetables with soy sauce.',
//         '3. Add the noodles and mix well.',
//         '4. Serve hot.'
//     ]
// },
// {
//     name: 'Manchurian',
//     category: 'Chinese',
//     price: 150,
//     image: Manchurian,
//     ingredients: ['Mixed Vegetables', 'Soy Sauce', 'Garlic', 'Ginger', 'Flour', 'Cornflour'],
//     recipe: [
//         '1. Prepare the vegetable balls by mixing grated vegetables with flour and cornflour.',
//         '2. Deep fry the balls until golden brown.',
//         '3. Prepare the sauce with soy sauce, garlic, and ginger.',
//         '4. Add the fried balls to the sauce and cook for a few minutes.',
//         '5. Serve hot.'
//     ]
// },