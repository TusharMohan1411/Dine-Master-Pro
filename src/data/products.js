// // pizza category
// import pizzaImage from './assets/pizza.png';
// import paneerPizzaImage from './assets/paneerPizza.png';
// import chickenPizzaImage from './assets/chickenPizza.png';
// import margheritaPizzaImage from './assets/margheritaPizza.png';
// import veggiePizzaImage from './assets/veggiePizza.png';
// import pepperoniPizzaImage from './assets/pepperoniPizza.png';

// // burger category
// import burgerImage from './assets/burger.png';
// import vegBurgerImage from './assets/vegBurger.png';
// import chickenBurgerImage from './assets/chickenBurger.png';
// import cheeseBurgerImage from './assets/cheeseBurger.png';
// import doublePattyBurgerImage from './assets/doublePattyBurger.png';
// import fishBurgerImage from './assets/fishBurger.png';

// // chowmein category
// import chowmeinImage from './assets/chowmein.png';
// import vegChowmeinImage from './assets/vegChowmein.png';
// import chickenChowmeinImage from './assets/chickenChowmein.png';
// import eggChowmeinImage from './assets/eggChowmein.png';
// import paneerChowmeinImage from './assets/paneerChowmein.png';
// import shrimpChowmeinImage from './assets/shrimpChowmein.png';

// // momos category
// import momosImage from './assets/momos.png';
// import vegMomosImage from './assets/vegMomos.png';
// import chickenMomosImage from './assets/chickenMomos.png';
// import paneerMomosImage from './assets/paneerMomos.png';
// import friedMomosImage from './assets/friedMomos.png';
// import chocolateMomosImage from './assets/chocolateMomos.png';

// // manchurian category
// import manchurianImage from './assets/manchurian.png';
// import vegManchurianImage from './assets/vegManchurian.png';
// import chickenManchurianImage from './assets/chickenManchurian.png';
// import paneerManchurianImage from './assets/paneerManchurian.png';
// import gobiManchurianImage from './assets/gobiManchurian.png';
// import fishManchurianImage from './assets/fishManchurian.png';

// // cutlets category
// import cutletsImage from './assets/cutlets.png';
// import vegCutletImage from './assets/vegCutlet.png';
// import chickenCutletImage from './assets/chickenCutlet.png';
// import paneerCutletImage from './assets/paneerCutlet.png';
// import fishCutletImage from './assets/fishCutlet.png';
// import beetrootCutletImage from './assets/beetrootCutlet.png';

// // patties category
// import pattiesImage from './assets/patties.png';
// import vegPattiesImage from './assets/vegPatties.png';
// import chickenPattiesImage from './assets/chickenPatties.png';
// import paneerPattiesImage from './assets/paneerPatties.png';
// import cheesePattiesImage from './assets/cheesePatties.png';
// import eggPattiesImage from './assets/eggPatties.png';

// // samosa category
// import samosaImage from './assets/samosa.png';
// import alooSamosaImage from './assets/alooSamosa.png';
// import paneerSamosaImage from './assets/paneerSamosa.png';
// import keemaSamosaImage from './assets/keemaSamosa.png';
// import vegSamosaImage from './assets/vegSamosa.png';
// import cheeseSamosaImage from './assets/cheeseSamosa.png';

// // roll category
// import rollImage from './assets/roll.png';
// import eggRollImage from './assets/eggRoll.png';
// import vegRollImage from './assets/vegRoll.png';

// // miscellaneous category
// import miscellaneousImage from './assets/miscellaneous.png';
// import frenchFriesImage from './assets/frenchFries.png';
// import vegSaladImage from './assets/vegSalad.png';
// import chickenSaladImage from './assets/chickenSalad.png';
// import nachosImage from './assets/nachos.png';
// import springRollsImage from './assets/springRolls.png';



const PRODUCTS = {
    pizza: {
        image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Pizza',
        paneerPizza: {
            name: 'Paneer Pizza',
            price: 200,
            image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Paneer+Pizza',
            ingredients: ['Paneer', 'Cheese', 'Flour', 'Tomato Sauce'],
            recipe: [
                'Prepare the dough.',
                'Spread tomato sauce.',
                'Add cheese and paneer.',
                'Bake in oven.'
            ]
        },
        margheritaPizza: {
            name: 'Margherita Pizza',
            price: 180,
            image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Margherita+Pizza',
            ingredients: ['Cheese', 'Tomato', 'Flour'],
            recipe: [
                'Prepare the dough.',
                'Spread tomato slices.',
                'Add cheese.',
                'Bake in oven.'
            ]
        },
        veggiePizza: {
            name: 'Veggie Pizza',
            price: 220,
            image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Veggie+Pizza',
            ingredients: ['Cheese', 'Veggies', 'Flour', 'Tomato Sauce'],
            recipe: [
                'Prepare the dough.',
                'Add veggies and sauce.',
                'Sprinkle cheese.',
                'Bake in oven.'
            ]
        },
        pepperoniPizza: {
            name: 'Pepperoni Pizza',
            price: 260,
            image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Pepperoni+Pizza',
            ingredients: ['Pepperoni', 'Cheese', 'Flour', 'Tomato Sauce'],
            recipe: [
                'Prepare the dough.',
                'Add pepperoni and cheese.',
                'Bake in oven.'
            ]
        }
    },
    burger: {
        image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Burger',
        vegBurger: {
            name: 'Veg Burger',
            price: 100,
            image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Veg+Burger',
            ingredients: ['Bun', 'Veg Patty', 'Lettuce', 'Tomato'],
            recipe: [
                'Grill the veg patty.',
                'Toast the buns.',
                'Assemble with lettuce and tomato.'
            ]
        },
        cheeseBurger: {
            name: 'Cheese Burger',
            price: 120,
            image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Cheese+Burger',
            ingredients: ['Bun', 'Cheese', 'Patty', 'Lettuce'],
            recipe: [
                'Grill the patty.',
                'Toast the buns.',
                'Assemble with cheese and lettuce.'
            ]
        },
        doublePattyBurger: {
            name: 'Double Patty Burger',
            price: 180,
            image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Double+Patty+Burger',
            ingredients: ['Bun', 'Double Patty', 'Cheese', 'Lettuce'],
            recipe: [
                'Grill the patties.',
                'Toast the buns.',
                'Assemble with cheese and lettuce.'
            ]
        }
    },
    chowmein: {
        image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Chowmein',
        vegChowmein: {
            name: 'Veg Chowmein',
            price: 80,
            image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Veg+Chowmein',
            ingredients: ['Noodles', 'Veggies', 'Soy Sauce'],
            recipe: [
                'Boil the noodles.',
                'Stir-fry the veggies.',
                'Mix with noodles and sauce.'
            ]
        },
        paneerChowmein: {
            name: 'Paneer Chowmein',
            price: 110,
            image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Paneer+Chowmein',
            ingredients: ['Noodles', 'Paneer', 'Veggies', 'Soy Sauce'],
            recipe: [
                'Boil the noodles.',
                'Cook the paneer and veggies.',
                'Mix with noodles and sauce.'
            ]
        },
    },
    momos: {
        image: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Momos',
        vegMomos: {
            name: 'Veg Momos',
            price: 60,
            image: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Veg+Momos',
            ingredients: ['Flour', 'Vegetables', 'Oil'],
            recipe: [
                'Prepare the dough.',
                'Add vegetable filling.',
                'Steam until cooked.'
            ]
        },
        paneerMomos: {
            name: 'Paneer Momos',
            price: 70,
            image: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Paneer+Momos',
            ingredients: ['Flour', 'Paneer', 'Oil'],
            recipe: [
                'Prepare the dough.',
                'Add paneer filling.',
                'Steam until cooked.'
            ]
        },
        friedMomos: {
            name: 'Fried Momos',
            price: 90,
            image: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Fried+Momos',
            ingredients: ['Flour', 'Vegetables', 'Oil'],
            recipe: [
                'Prepare the dough.',
                'Add vegetable filling.',
                'Fry until golden brown.'
            ]
        },
    },
    manchurian: {
        image: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Manchurian',
        vegManchurian: {
            name: 'Veg Manchurian',
            price: 90,
            image: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Veg+Manchurian',
            ingredients: ['Vegetables', 'Soy Sauce', 'Cornflour'],
            recipe: [
                'Mix vegetables and form balls.',
                'Fry the balls.',
                'Cook in soy sauce.'
            ]
        },
        paneerManchurian: {
            name: 'Paneer Manchurian',
            price: 110,
            image: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Paneer+Manchurian',
            ingredients: ['Paneer', 'Soy Sauce', 'Cornflour'],
            recipe: [
                'Mix paneer and form balls.',
                'Fry the balls.',
                'Cook in soy sauce.'
            ]
        },
    },
    cutlets: {
        image: 'https://via.placeholder.com/150/00FFFF/FFFFFF?text=Cutlets',
        vegCutlet: {
            name: 'Veg Cutlet',
            price: 70,
            image: 'https://via.placeholder.com/150/00FFFF/FFFFFF?text=Veg+Cutlet',
            ingredients: ['Potatoes', 'Vegetables', 'Breadcrumbs'],
            recipe: [
                'Mix vegetables and form patties.',
                'Coat in breadcrumbs.',
                'Fry until golden brown.'
            ]
        },
        paneerCutlet: {
            name: 'Paneer Cutlet',
            price: 90,
            image: 'https://via.placeholder.com/150/00FFFF/FFFFFF?text=Paneer+Cutlet',
            ingredients: ['Paneer', 'Breadcrumbs', 'Spices'],
            recipe: [
                'Mix paneer and form patties.',
                'Coat in breadcrumbs.',
                'Fry until golden brown.'
            ]
        },
    },
    patties: {
        image: 'https://via.placeholder.com/150/FFA500/FFFFFF?text=Patties',
        vegPatties: {
            name: 'Veg Patties',
            price: 50,
            image: 'https://via.placeholder.com/150/FFA500/FFFFFF?text=Veg+Patties',
            ingredients: ['Flour', 'Vegetables', 'Spices'],
            recipe: [
                'Prepare the dough.',
                'Add vegetable filling.',
                'Bake until golden.'
            ]
        },
        paneerPatties: {
            name: 'Paneer Patties',
            price: 70,
            image: 'https://via.placeholder.com/150/FFA500/FFFFFF?text=Paneer+Patties',
            ingredients: ['Flour', 'Paneer', 'Spices'],
            recipe: [
                'Prepare the dough.',
                'Add paneer filling.',
                'Bake until golden.'
            ]
        },
        cheesePatties: {
            name: 'Cheese Patties',
            price: 90,
            image: 'https://via.placeholder.com/150/FFA500/FFFFFF?text=Cheese+Patties',
            ingredients: ['Flour', 'Cheese', 'Spices'],
            recipe: [
                'Prepare the dough.',
                'Add cheese filling.',
                'Bake until golden.'
            ]
        },
    },
    samosa: {
        image: 'https://via.placeholder.com/150/800080/FFFFFF?text=Samosa',
        alooSamosa: {
            name: 'Aloo Samosa',
            price: 20,
            image: 'https://via.placeholder.com/150/800080/FFFFFF?text=Aloo+Samosa',
            ingredients: ['Flour', 'Potatoes', 'Spices'],
            recipe: [
                'Prepare the dough.',
                'Add potato filling.',
                'Fry until golden.'
            ]
        },
        paneerSamosa: {
            name: 'Paneer Samosa',
            price: 30,
            image: 'https://via.placeholder.com/150/800080/FFFFFF?text=Paneer+Samosa',
            ingredients: ['Flour', 'Paneer', 'Spices'],
            recipe: [
                'Prepare the dough.',
                'Add paneer filling.',
                'Fry until golden.'
            ]
        }
    },
    roll: {
        image: 'https://via.placeholder.com/150/FFC0CB/FFFFFF?text=Rolls',
        eggRoll: {
            name: 'Egg Roll',
            price: 50,
            image: 'https://via.placeholder.com/150/FFC0CB/FFFFFF?text=Egg+Roll',
            ingredients: ['Flour', 'Egg', 'Vegetables'],
            recipe: [
                'Prepare the dough.',
                'Cook egg and wrap with dough.',
                'Add vegetables and roll.'
            ]
        },
        vegRoll: {
            name: 'Veg Roll',
            price: 50,
            image: 'https://via.placeholder.com/150/FFC0CB/FFFFFF?text=veg+Roll',
            ingredients: ['Flour', 'Vegetables'],
            recipe: [
                'Prepare the dough.',
                'Cook egg and wrap with dough.',
                'Add vegetables and roll.'
            ]
        },
    },
    miscellaneous: {
        image: 'https://via.placeholder.com/150/000000/FFFFFF?text=Miscellaneous',
        frenchFries: {
            name: 'French Fries',
            price: 60,
            image: 'https://via.placeholder.com/150/000000/FFFFFF?text=French+Fries',
            ingredients: ['Potatoes', 'Salt', 'Oil'],
            recipe: [
                'Cut potatoes into strips.',
                'Fry in oil until golden.',
                'Sprinkle salt and serve.'
            ]
        },
        springRolls: {
            name: 'Spring Rolls',
            price: 90,
            image: 'https://via.placeholder.com/150/000000/FFFFFF?text=Spring+Rolls',
            ingredients: ['Spring Roll Wrappers', 'Vegetables', 'Soy Sauce'],
            recipe: [
                'Fill wrappers with vegetables.',
                'Roll tightly.',
                'Fry until golden and serve with soy sauce.'
            ]
        }
    }

}




// const PRODUCTS = {
//     pizza: {
//         image: Pizza, 
//         paneerPizza: {
//             name: 'Paneer Pizza',
//             price: 200,
//             image: Pizza,
//             ingredients: ['Paneer', 'Cheese', 'Flour', 'Tomato Sauce'],
//             recipe: [
//                 'Prepare the dough.',
//                 'Spread tomato sauce.',
//                 'Add cheese and paneer.',
//                 'Bake in oven.'
//             ]
//         },
//         chickenPizza: {
//             name: 'Chicken Pizza',
//             price: 250,
//             image: Pizza,
//             ingredients: ['Chicken', 'Cheese', 'Flour', 'Tomato Sauce'],
//             recipe: [
//                 'Prepare the dough.',
//                 'Spread tomato sauce.',
//                 'Add cheese and chicken.',
//                 'Bake in oven.'
//             ]
//         }
//     },
//     burger: {
//         image: Burger, 
//         vegBurger: {
//             name: 'Veg Burger',
//             price: 100,
//             image: Burger,
//             ingredients: ['Bun', 'Veg Patty', 'Lettuce', 'Tomato'],
//             recipe: [
//                 'Grill the veg patty.',
//                 'Toast the buns.',
//                 'Assemble with lettuce and tomato.'
//             ]
//         },
//         chickenBurger: {
//             name: 'Chicken Burger',
//             price: 150,
//             image: 'chickenBurger.png',
//             ingredients: ['Bun', 'Chicken Patty', 'Lettuce', 'Tomato'],
//             recipe: [
//                 'Grill the chicken patty.',
//                 'Toast the buns.',
//                 'Assemble with lettuce and tomato.'
//             ]
//         }
//     },
//     miscellaneous: {
//         image: SpringRoll, 
//         springRoll: {
//             name: 'Spring Roll',
//             price: 60,
//             image: SpringRoll,
//             ingredients: ['Flour', 'Vegetables', 'Oil', 'Flour', 'Vegetables', 'Oil', 'Flour', 'Vegetables', 'Oil', 'Flour', 'Vegetables', 'Oil', 'Flour', 'Vegetables', 'Oil',],
//             recipe: [
//                 'Prepare the dough.',
//                 'Add vegetable filling.',
//                 'Deep fry until golden.',
//                 'Prepare the dough.',
//                 'Add vegetable filling.',
//                 'Deep fry until golden. Deep fry until goldenDeep fry until goldenDeep fry until goldenDeep fry until goldenDeep fry until goldenDeep fry until goldenDeep fry until goldenDeep fry until goldenDeep fry until golden',
//                 'Prepare the dough.',
//                 'Add vegetable filling.',
//                 'Deep fry until golden.',
//                 'Prepare the dough.',
//                 'Add vegetable filling.',
//                 'Deep fry until golden.',
//                 'Prepare the dough.',
//                 'Add vegetable filling.',
//                 'Deep fry until golden.',
//                 'Prepare the dough.',
//                 'Add vegetable filling.',
//                 'Deep fry until golden.',
//             ]
//         },
//         frenchFries: {
//             name: 'French Fries',
//             price: 50,
//             image: FrenchFries,
//             ingredients: ['Potatoes', 'Salt', 'Oil'],
//             recipe: [
//                 'Cut potatoes into strips.',
//                 'Deep fry until golden.',
//                 'Sprinkle with salt.'
//             ]
//         }
//     }
// };


export default PRODUCTS;







