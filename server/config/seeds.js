// const db = require('./connection');
// const { User, Resources } = require('../models');

// db.once('open', async () => {
//   await Resources.deleteMany();

//   const resources = await Resources.insertMany([
//     { 
//         _id: '',
//     name: 'Bake a Blueberry Tart',
//     shortDescription: 'Make a delicious blueberry tart in under an hour.',
//     resourceBody: 'Ingredients\n\
//     1 cup all-purpose flour\n\
//     2 tablespoons sugar\n\
//     1/8 teaspoon salt\n\
//     1/2 cup cold butter\n\
//     1 tablespoon vinegar\n\
//     Filling\n\
//     4 cups fresh blueberries divided\n\
//     2/3 cup sugar\n\
//     2 tablespoons all-purpose flour\n\
//     1/2 teaspoon ground cinnamon\n\
//     1/8 teaspoon ground nutmeg\n\
//     Directions\n\
//     In a small bowl, combine flour, sugar and salt; cut in butter until crumbly. Add vinegar, tossing with a fork to moisten. Press onto bottom and up the sides of a lightly greased 9-in. tart pan with removable bottom.\n\
//     For filling, lightly smash 2 cups blueberries in a bowl. Combine the sugar, flour, cinnamon and nutmeg; stir into smashed blueberries. Spread mixture evenly into crust; sprinkle with 1 cup of the remaining whole blueberries. Place tart pan on a baking sheet.\n\
//     Bake at 400° for 40-45 minutes or until crust is browned and filling is bubbly. Remove from the oven; arrange remaining berries over top. Cool on a wire rack. Store in the refrigerator.',
//     images: [{
//         fileName:'blueberry.jpg',
//         fileURL:'../images/blueberry.jpg',
//         imageCaption:'blueberry tart'}],
//     videos: [{
//         fileName:'' ,
//         fileURL: '',
//         videoCaption: 'bake a tart',
//     }],
//   },

// {
//   name: 'Make your Own Scented All-Purpose Cleaner',
//     shortDescription: 'Clean your home with all green, make-at-home, products.',
//     resourceBody: 'Ingredients\n\
//     One part white vinegar\n\
//     One part water\n\
//     Lemon rind\n\
//     Rosemary sprigs\n\
//     Combine the above ingredients together, pour into a spray bottle, shake, and then let infuse for a week before using.\n\Once done, you can use the natural solution to remove hard water stains, clean trash cans, wipe away wall smudges, and much more. Besides a fresh scent, the lemon rind may help boost cleaning power. Caution: Do not use acidic cleaners on granite, as they will etch the stone.',
//     images: [{
//         fileName:'clean.jpg',
//         fileURL:'../images/clean.jpg',
//         imageCaption:'cleaning supplies'
//     }],
//     videos: [{
//         fileName:'' ,
//         fileURL: '',
//         videoCaption: 'learn to make your own green clean product',
//     }],
//   },
//   {
//     name: 'Become a Star Gazer',
//       shortDescription: 'Learn the basics of stargazing with an introduction to Polaris, the North Star.',
//       resourceBody: "Throughout the course of the year, the Big Dipper appears to orbit Polaris, also known as the North Star, and the brightest star in the Ursa Minor, the Little Dipper.\n\
//       Start by finding the two stars at the front end of the Dipper's bowl, Merak at the closed side and Dubhe at the open side.\n\
//       These are often called the pointer stars. Now draw an imaginary line from Merak to Dubhe and extend it past the open top of the Dipper’s bowl.\n\
//         The first easy-to-spot star you encounter is Polaris, a triple-star system lying about 430 light-years away. It might surprise you how dim 2nd-magnitude Polaris looks — in fact, it’s the 50th-brightest star in the sky.',
//       images: [{
//         fileName:'polaris.jpg',
//         fileUrl: '../images/polaris.jpg',
//         imageCaption: 'check out the stars'
//     }],
//       videos: [{
//           fileName:'a href="https://www.youtube.com/watch?v=XUbG8jboh4M"',
//             fileUrl:'a href="https://www.youtube.com/watch?v=XUbG8jboh4M"',
//             videoCaption: 'introduction to stargazing',
//     }]
// },
//     // {
//     //     name: 'Knit a Hat'
//     //       shortDescription: 'Make your own hat for the upcoming winter season.',
//     //       resourceBody: 'There's nothing better than getting to show off one of a knitted accessory that you've made yourself! But for many beginner knitters, this just means scarves. Most other types of knitted items, like hats and socks, involve knitting in the round, which scares off many beginners.

//     //       But never fear! Hats are not nearly as hard as they look.
          
//     //       We've put together this handy guide for knitting your very first hat. It's a simple pattern -- just stockinette and some ribbing. But it will give you a cute, cozy hat that you can work up in no time. Below, you'll find everything you'll need to complete this hat, from video tutorials for the various techniques, tips and tricks for getting your first circular knitting project just right, and step-by-step photos, so you know you're on the right track!',
//     //       images: [{'knit.jpeg', 'knit_explain.jpeg',}]
//     //       videos: [{a href="https://www.youtube.com/watch?v=szX6slq2Q8Y"}],
//     //     }
// ]);

//   console.log('resources seeded');

//   await User.create({
//     firstName: 'Frank',
//     lastName: 'Furter',
//     email: 'frankf@testmail.com',
//     password: 'password12345',
//     orders: [
//       {
//         resources: [resources[0]._id, resources[0]._id, resources[1]._id]
//       }
//     ]
//   });

//   await User.create({
//     firstName: 'Hans',
//     lastName: 'Solo',
//     email: 'hansyboy@testmail.com',
//     password: 'theforce123'
//   });

//   console.log('users seeded');

//   process.exit();
// });
