const db = require('./connection');
const { User, Resource } = require('../models');

db.once('open', async () => {
  await Resource.deleteMany();

  const resources = await Resource.insertMany([
    { 
    name: 'Bake a Blueberry Tart',
    shortDescription: 'Make a delicious blueberry tart in under an hour.',
    resourceBody: 'Ingredients\n\
    1 cup all-purpose flour\n\
    2 tablespoons sugar\n\
    1/8 teaspoon salt\n\
    1/2 cup cold butter\n\
    1 tablespoon vinegar\n\
    Filling\n\
    4 cups fresh blueberries divided\n\
    2/3 cup sugar\n\
    2 tablespoons all-purpose flour\n\
    1/2 teaspoon ground cinnamon\n\
    1/8 teaspoon ground nutmeg\n\
    Directions\n\
    In a small bowl, combine flour, sugar and salt; cut in butter until crumbly. Add vinegar, tossing with a fork to moisten. Press onto bottom and up the sides of a lightly greased 9-in. tart pan with removable bottom.\n\
    For filling, lightly smash 2 cups blueberries in a bowl. Combine the sugar, flour, cinnamon and nutmeg; stir into smashed blueberries. Spread mixture evenly into crust; sprinkle with 1 cup of the remaining whole blueberries. Place tart pan on a baking sheet.\n\
    Bake at 400° for 40-45 minutes or until crust is browned and filling is bubbly. Remove from the oven; arrange remaining berries over top. Cool on a wire rack. Store in the refrigerator.',
    images: [{
        fileName:'blueberry.jpg',
        fileURL:'../images/blueberry.jpg',
        imageCaption:'blueberry tart'}],
    videos: [{
        fileName:'' ,
        fileURL: '',
        videoCaption: 'bake a tart',
    }],
  },

{
  name: 'Make your Own Scented All-Purpose Cleaner',
    shortDescription: 'Clean your home with all green, make-at-home, products.',
    resourceBody: 'Ingredients\n\
    One part white vinegar\n\
    One part water\n\
    Lemon rind\n\
    Rosemary sprigs\n\
    Combine the above ingredients together, pour into a spray bottle, shake, and then let infuse for a week before using.\n\Once done, you can use the natural solution to remove hard water stains, clean trash cans, wipe away wall smudges, and much more. Besides a fresh scent, the lemon rind may help boost cleaning power. Caution: Do not use acidic cleaners on granite, as they will etch the stone.',
    images: [{
        fileName:'clean.jpg',
        fileURL:'../images/clean.jpg',
        imageCaption:'cleaning supplies'
    }],
    videos: [{
        fileName:'' ,
        fileURL: '',
        videoCaption: 'learn to make your own green clean product',
    }],
  },
  {
    name: 'Become a Star Gazer',
      shortDescription: 'Learn the basics of stargazing with an introduction to Polaris, the North Star.',
      resourceBody: "Throughout the course of the year, the Big Dipper appears to orbit Polaris, also known as the North Star, and the brightest star in the Ursa Minor, the Little Dipper.\n\
      Start by finding the two stars at the front end of the Dipper's bowl, Merak at the closed side and Dubhe at the open side.\n\
      These are often called the pointer stars. Now draw an imaginary line from Merak to Dubhe and extend it past the open top of the Dipper’s bowl.\n\
      The first easy-to-spot star you encounter is Polaris, a triple-star system lying about 430 light-years away. It might surprise you how dim 2nd-magnitude Polaris looks — in fact, it’s the 50th-brightest star in the sky.",
      images: [{
        fileName:('polaris.jpg', 'star.jpg'),
        fileUrl: ('../images/polaris.jpg', '../images/star.jpg'),
        imageCaption: 'check out the stars'
    }],
      videos: [{
          fileName:'a href="https://www.youtube.com/watch?v=XUbG8jboh4M"',
            fileUrl:'a href="https://www.youtube.com/watch?v=XUbG8jboh4M"',
            videoCaption: 'introduction to stargazing',
    }]
},
    {
        name: 'Knit a Hat',
          shortDescription: 'Make your own hat for the upcoming winter season.',
          resourceBody: "There's nothing better than getting to show off one of a knitted accessory that you've made yourself!\n\But for many beginner knitters, this just means scarves.\n\
          Most other types of knitted items, like hats and socks, involve knitting in the round, which scares off many beginners.\n\
          But never fear! Hats are not nearly as hard as they look.\n\
          We've put together this handy guide for knitting your very first hat.\n\
          It's a simple pattern -- just stockinette and some ribbing.\n\
          But it will give you a cute, cozy hat that you can work up in no time.\n\ Below, you'll find everything you'll need to complete this hat, from video tutorials for the various techniques, tips and tricks for getting your first circular knitting project just right, and step-by-step photos, so you know you're on the right track!",
          images: [{
            fileName:('knit.jpeg', 'knit_explain.jpeg'),
            fileUrl: ('../images/knit.jpeg', '../images/knit_explain.jpeg'),
            imageCaption: 'knit a hat'
          }],
          videos: [{
            fileName:'a href="https://www.youtube.com/watch?v=szX6slq2Q8Y"',
            fileUrl: 'a href="https://www.youtube.com/watch?v=szX6slq2Q8Y"',
            videoCaption: 'initial knitting techniques'
          }]
        },
        {
          name: 'Make Homemade Soda',
            shortDescription: 'Make your own homemade, caffeine-free, soda to impress your friends.',
            resourceBody: "Believe it or not, it’s actually super easy to make homemade soda.\n\You only need a few basic ingredients, including your favorite fresh fruit.\n\I love that, when you’re making homemade soda, you can control the sweetness. Now, you can enjoy a tall glass of refreshing fizzy bubbles without the artificial sugars, colors, and preservatives. Woot!\n\The key ingredients of these homemade soda recipes are (1) fresh fruit “syrup” and (2) seltzer water.\n\ We will be using fresh fruit and a simple syrup made from raw honey and water to sweeten the soda.  To make your honey simple syrup, just combine some raw honey with water and cook in a pan over medium-high heat until the honey is dissolved, and then set aside to cool.  Easy peasy.",
            images: [{
              fileName:('soda_pour.jpg', 'lemons.jpeg'),
              fileUrl: ('../images/soda_pour.jpg', '../images/lemons.jpeg'),
              imageCaption: 'make fresh soda'
            }],
            videos: [{
              fileName:'a href="https://www.youtube.com/watch?v=N1d9SH-2usw"',
              fileUrl: 'a href="https://www.youtube.com/watch?v=N1d9SH-2usw"',
              videoCaption: 'making your own fresh soda'
            }]
          },
          {
            name: "Build a Children's Bookshelf",
              shortDescription: "Clean up the clutter in the kid's room with this cute bookshelf.",
              resourceBody: "Shelves are an essential decorating tool. Whether you’re looking for beautiful wall decor for your nursery or additional storage for all your teen’s stuff, a pretty and practical wall shelf is the perfect solution.\n\That said, attractive shelving can be expensive and hard to find. If you want something with some personality (and a reasonable price tag), you’ll need to get creative.\n\
Need a little inspiration? These DIY shelves are nothing short of genius.\n\ Best of all, many of them can be made from things you already have lying around the house! Turn a 5-gallon bucket into a contemporary storage cubby. Have some scrap wood and an old leather belt?\n\Boom! You’ve got a chic, hanging shelf. The possibilities are endless!",
              images: [{
                fileName:('child_book.jpeg', 'shelf.jpeg'),
                fileUrl: ('../images/child_book.jpeg', '../images/shelf.jpeg'),
                imageCaption: 'easy steps to build a childrens bookshelf'
              }],
              videos: [{
                fileName:'a href="https://www.youtube.com/watch?v=BfPOl4Rzdbw"',
                fileUrl: 'a href="https://www.youtube.com/watch?v=BfPOl4Rzdbw"',
                videoCaption: 'learn to build a childrens bookshelf'
              }]
            },
            {
              name: 'Build a Spaceship',
                shortDescription: 'Craft your own spaceship using store-bought and at-home materials.',
                resourceBody: "Designing a spaceship, if we're honest, is the reason a lot of us got into 3D. I know I did, as unfortunately I didn't have the sticking power at physics to become a real rocket scientist.\n\
Making a spaceship is pretty easy, I could drop a cube into my 3D model, and tell you it was an alien battle cruiser from the planet 'spot', and that would be that.\n\ Making a good spaceship is the hard part. Inventing a spacecraft that people really believe exists and has an identifiable purpose, and above all looks 'cool', is where your talent and artistry comes into play.",
                images: [{
                  fileName:('tools.jpg', 'ship_drawn.jpg'),
                  fileUrl: ('../images/tools.jpg', '../images/ship_drawn.jpg'),
                  imageCaption: 'diy a spaceship'
                }],
                videos: [{
                  fileName:'a href="https://www.youtube.com/watch?v=IM7aeVa7Dpc"',
                  fileUrl: 'a href="https://www.youtube.com/watch?v=IM7aeVa7Dpc"',
                  videoCaption: 'craft your own spaceship'
                }]
              },
              {
                name: 'Make Homemade Babyfood',
                  shortDescription: 'Learn to make fresh baby food at home.',
                  resourceBody: "As a mom to three kids, I know firsthand how the urge to make homemade baby food can be both exciting and a little daunting.\n\ And if you have a busy schedule or other kids in the house, finding the time to actually do it can seem impossible. But, there are so many healthy foods that you can transform into baby food purees with hardly any work or special equipment at all!",
                  images: [{
                    fileName:('baby_food.jpeg', 'carrots.jpeg'),
                    fileUrl: ('../images/baby_food.jpeg', '../images/carrots.jpeg'),
                    imageCaption: 'make fresh baby food at home'
                  }],
                  videos: [{
                    fileName:'a href="https://www.youtube.com/watch?v=0nFqrBIc8eg"',
                    fileUrl: 'a href="https://www.youtube.com/watch?v=0nFqrBIc8eg"',
                    videoCaption: 'learn to make fresh baby food at home'
                  }]
                },
                {
                  name: 'Introduction to Ukulele',
                    shortDescription: 'Learn the basics of playing a ukulele.',
                    resourceBody: "So, you want to learn how to play a ukulele? Welcome! The first thing to notice is all the encouraging, happy people around you, cheering you on and helping you out.\n\ The ukulele is a social instrument, a song machine that magnetically draws people together to enjoy themselves. Be warned: The ukulele spirit is highly contagious.\n\ As soon as you master your first chords, strums, and songs you may find that you, too, are moved to share it with a friend.",
                    images: [{
                      fileName:('ukulele.jpeg', 'chord_view.jpeg'),
                      fileUrl: ('../images/ukulele.jpeg', '../images/chord_view.jpeg'),
                      imageCaption: 'learn to play a ukulele'
                    }],
                    videos: [{
                      fileName:'a href="https://www.youtube.com/watch?v=MyRWQpXk8po"',
                      fileUrl: 'a href="https://www.youtube.com/watch?v=MyRWQpXk8po"',
                      videoCaption: 'introduction to uklele song'
                    }]
                  },
                  {
                    name: 'A Beginner Lesson to Drawing',
                      shortDescription: 'Start your exciting journey into the world of drawing.',
                      resourceBody: "We all used to draw as kids. It was easy back then, no matter if you used color pencils, a stick, or your finger on a steamy window. But even then you might have noticed that some children drew better than you.\n\ Not that you knew what better meant—all you knew was the sweetness of praise. Whenever you heard someone else being praised, and your own work ignored, you felt worse and worse. Eventually, you gave up on drawing. Why would you continue if nobody cared?\n\Now, whatever the reason, you want to come back, but it seems so scary. Those children who never gave up are working as professionals now, and their art looks almost magical. How could you possibly bridge that gap? Will you ever catch up on them?",
                      images: [{
                        fileName:('notepad.jpeg', 'drawing.jpeg'),
                        fileUrl: ('../images/notepad.jpeg', '../images/drawing.jpeg'),
                        imageCaption: 'learn to draw'
                      }],
                      videos: [{
                        fileName:'a href="https://www.youtube.com/watch?v=mio-_RyxOyQ"',
                        fileUrl: 'a href="https://www.youtube.com/watch?v=mio-_RyxOyQ"',
                        videoCaption: 'drawing techniques for beginners'
                      }]
                    }
]);

  console.log('resources seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Frank',
    lastName: 'Furter',
    email: 'frankf@testmail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'Hans',
    lastName: 'Solo',
    email: 'hansyboy@testmail.com',
    password: 'theforce123'
  });

  console.log('users seeded');

  process.exit();
});
