const db = require("./connection");
const { User, Resource, Profit, Transaction } = require("../models");

db.once("open", async () => {
  await Resource.deleteMany();

  const resources = await Resource.insertMany([
    {
      name: "Bake a Blueberry Tart",
      shortDescription: "Make a delicious blueberry tart in under an hour.",
      username: "ffurter",
      resourceBody:
        'Ingredients \n\
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
      cost: 0,
      images: [
        {
          fileURL: "/images/blueberry.jpg",
          imageCaption: "blueberry tart"
        }
      ]
    },

    {
      name: "Make your Own All-Purpose Cleaner",
      shortDescription:
        "Clean your home with all green, make-at-home, products.",
      username: "ffurter",
      resourceBody:
        "Ingredients\n\
    One part white vinegar\n\
    One part water\n\
    Lemon rind\n\
    Rosemary sprigs\n\
    Combine the above ingredients together, pour into a spray bottle, shake, and then let infuse for a week before using.\nOnce done, you can use the natural solution to remove hard water stains, clean trash cans, wipe away wall smudges, and much more. Besides a fresh scent, the lemon rind may help boost cleaning power. Caution: Do not use acidic cleaners on granite, as they will etch the stone.",
      cost: 2,
      images: [
        {
          fileURL: "/images/clean.jpg",
          imageCaption: "cleaning supplies"
        }
      ],
      videos: []
    },
    {
      name: "Become a Star Gazer",
      shortDescription:
        "Learn the basics of stargazing with an introduction to Polaris, the North Star.",
      username: "ffurter",
      resourceBody:
        "Throughout the course of the year, the Big Dipper appears to orbit Polaris, also known as the North Star, and the brightest star in the Ursa Minor, the Little Dipper.\n\
      Start by finding the two stars at the front end of the Dipper's bowl, Merak at the closed side and Dubhe at the open side.\n\
      These are often called the pointer stars. Now draw an imaginary line from Merak to Dubhe and extend it past the open top of the Dipper’s bowl.\n\
      The first easy-to-spot star you encounter is Polaris, a triple-star system lying about 430 light-years away. It might surprise you how dim 2nd-magnitude Polaris looks — in fact, it’s the 50th-brightest star in the sky.",
      cost: 0,
      images: [
        {
          fileURL: "/images/polaris.jpg",
          imageCaption: "check out the stars"
        },
        {
          fileURL: "/images/stars.jpg",
          imageCaption: "more on checking out the stars"
        }
      ],
      videos: [
        {
          fileURL: "https://player.vimeo.com/external/318309149.sd.mp4?s=dd9b8029ebc8f063a7467587bf13755879029ffa&profile_id=164&oauth2_token_id=57447761",
          videoCaption: "introduction to stargazing"
        }
      ]
    },
    {
      name: "Knit a Hat",
      shortDescription: "Make your own hat for the upcoming winter season.",
      username: "ffurter",
      resourceBody:
        "There's nothing better than getting to show off one of a knitted accessory that you've made yourself!\nBut for many beginner knitters, this just means scarves.\n\
          Most other types of knitted items, like hats and socks, involve knitting in the round, which scares off many beginners.\n\
          But never fear! Hats are not nearly as hard as they look.\n\
          We've put together this handy guide for knitting your very first hat.\n\
          It's a simple pattern -- just stockinette and some ribbing.\n\
          But it will give you a cute, cozy hat that you can work up in no time.\n Below, you'll find everything you'll need to complete this hat, from video tutorials for the various techniques, tips and tricks for getting your first circular knitting project just right, and step-by-step photos, so you know you're on the right track!",
      cost: 3,
      images: [
        {
          fileURL: "/images/knit.jpeg",
          imageCaption: "1. Knit a hat"
        },
        {
          fileURL: "/images/knit_explain.jpeg",
          imageCaption: "2. Knit a hat"
        }
      ],
      videos: [
        {
          fileURL: "https://player.vimeo.com/external/397929307.sd.mp4?s=9fde50e7b68ff56f680037d34d8a5a5f460cefcd&profile_id=139&oauth2_token_id=57447761",
          videoCaption: "initial knitting techniques"
        }
      ]
    },
    {
      name: "Make Homemade Soda",
      shortDescription:
        "Make your own homemade, caffeine-free, soda to impress your friends.",
      username: "ffurter",
      resourceBody:
        "Believe it or not, it’s actually super easy to make homemade soda.\n\ You only need a few basic ingredients, including your favorite fresh fruit.\n\ I love that, when you’re making homemade soda, you can control the sweetness. Now, you can enjoy a tall glass of refreshing fizzy bubbles without the artificial sugars, colors, and preservatives. Woot!\nThe key ingredients of these homemade soda recipes are (1) fresh fruit “syrup” and (2) seltzer water.\n\ We will be using fresh fruit and a simple syrup made from raw honey and water to sweeten the soda.  To make your honey simple syrup, just combine some raw honey with water and cook in a pan over medium-high heat until the honey is dissolved, and then set aside to cool.  Easy peasy.",
      cost: 0,
      images: [
        {
          fileURL: "/images/soda_pour.jpg",
          imageCaption: "1. Make fresh soda"
        },
        {
          fileURL: "/images/lemons.jpeg",
          imageCaption: "2. Make fresh soda"
        }
      ],
      videos: [
        {
          fileURL: "https://player.vimeo.com/external/338097672.sd.mp4?s=516d04c46f9ffb029e8b30cdb4cd66a1dd0f3af3&profile_id=139&oauth2_token_id=57447761",
          videoCaption: "making your own fresh soda"
        }
      ]
    },
    {
      name: "Build a Children's Bookshelf",
      shortDescription:
        "Clean up the clutter in the kid's room with this cute bookshelf.",
      username: "hsolo",
      resourceBody:
        "Shelves are an essential decorating tool. Whether you’re looking for beautiful wall decor for your nursery or additional storage for all your teen’s stuff, a pretty and practical wall shelf is the perfect solution.\n\ That said, attractive shelving can be expensive and hard to find. If you want something with some personality (and a reasonable price tag), you’ll need to get creative.\n\
Need a little inspiration? These DIY shelves are nothing short of genius.\n\ Best of all, many of them can be made from things you already have lying around the house! Turn a 5-gallon bucket into a contemporary storage cubby. Have some scrap wood and an old leather belt?\nBoom! You’ve got a chic, hanging shelf. The possibilities are endless!",
      cost: 1,
      images: [
        {
          fileURL: "/images/child_book.jpeg",
          imageCaption: "1. Easy steps to build a childrens bookshelf"
        },
        {
          fileURL: "/images/shelf.jpeg",
          imageCaption: "2. Easy steps to build a childrens bookshelf"
        }
      ],
      videos: [
        {
          fileURL: "https://player.vimeo.com/external/189497364.sd.mp4?s=641faa939c98a87054444b864a36849b08305409&profile_id=164&oauth2_token_id=57447761",
          videoCaption: "learn to build a childrens bookshelf"
        }
      ]
    },
    {
      name: "Build a Spaceship",
      shortDescription:
        "Craft your own spaceship using store-bought and at-home materials.",
      username: "hsolo",
      resourceBody:
        "Designing a spaceship, if we're honest, is the reason a lot of us got into 3D. I know I did, as unfortunately I didn't have the sticking power at physics to become a real rocket scientist.\n\
Making a spaceship is pretty easy, I could drop a cube into my 3D model, and tell you it was an alien battle cruiser from the planet 'spot', and that would be that.\n Making a good spaceship is the hard part. Inventing a spacecraft that people really believe exists and has an identifiable purpose, and above all looks 'cool', is where your talent and artistry comes into play.",
      cost: 0,
      images: [
        {
          fileURL: "/images/tools.jpg",
          imageCaption: "1. Diy a spaceship"
        },
        {
          fileURL: "/images/ship_drawn.jpg",
          imageCaption: "2. Diy a spaceship"
        }
      ],
      videos: [
        {
          fileURL: "https://v.ftcdn.net/02/83/85/17/240_F_283851700_SJB4arwUidZjgARnY5x1DXzxzvn0jNC1_ST.mp4",
          videoCaption: "craft your own spaceship"
        }
      ]
    },
    {
      name: "Make Homemade Babyfood",
      shortDescription: "Learn to make fresh baby food at home.",
      username: "hsolo",
      resourceBody:
        "As a mom to three kids, I know firsthand how the urge to make homemade baby food can be both exciting and a little daunting.\n And if you have a busy schedule or other kids in the house, finding the time to actually do it can seem impossible. But, there are so many healthy foods that you can transform into baby food purees with hardly any work or special equipment at all!",
      cost: 4,
      images: [
        {
          fileURL: "/images/baby_food.jpeg",
          imageCaption: "1. Make fresh baby food at home"
        },
        {
          fileURL: "/images/carrots.jpg",
          imageCaption: "2. Make fresh baby food at home"
        }
      ],
      videos: [
        {
          fileURL: "https://v.ftcdn.net/01/93/37/74/240_F_193377424_EHEYNmnC5t7EJvituj1iuFSykFSZt7Wx_ST.mp4",
          videoCaption: "learn to make fresh baby food at home"
        }
      ]
    },
    {
      name: "Introduction to Ukulele",
      shortDescription: "Learn the basics of playing a ukulele.",
      username: "hsolo",
      resourceBody:
        "So, you want to learn how to play a ukulele? Welcome! The first thing to notice is all the encouraging, happy people around you, cheering you on and helping you out.\n The ukulele is a social instrument, a song machine that magnetically draws people together to enjoy themselves. Be warned: The ukulele spirit is highly contagious.\n As soon as you master your first chords, strums, and songs you may find that you, too, are moved to share it with a friend.",
      cost: 0,
      images: [
        {
          fileURL: "/images/ukulele.jpeg",
          imageCaption: "1. Learn to play a ukulele"
        },
        {
          fileURL: "/images/chord_view.jpg",
          imageCaption: "2. Learn to play a ukulele"
        },
      ],
      videos: [
        {
          fileURL: "https://v.ftcdn.net/02/57/29/51/240_F_257295109_qDwsJDj2YElm7FBxCCxBFcHFdc4fMcf2_ST.mp4",
          videoCaption: "introduction to uklele song"
        }
      ]
    },
    {
      name: "A Beginner Lesson to Drawing",
      shortDescription:
        "Start your exciting journey into the world of drawing.",
      username: "hsolo",
      resourceBody:
        "We all used to draw as kids. It was easy back then, no matter if you used color pencils, a stick, or your finger on a steamy window. But even then you might have noticed that some children drew better than you.\n\ Not that you knew what better meant—all you knew was the sweetness of praise. Whenever you heard someone else being praised, and your own work ignored, you felt worse and worse. Eventually, you gave up on drawing. Why would you continue if nobody cared?\nNow, whatever the reason, you want to come back, but it seems so scary. Those children who never gave up are working as professionals now, and their art looks almost magical. How could you possibly bridge that gap? Will you ever catch up on them?",
      cost: 5,
      images: [
        {
          fileURL: "/images/notepad.jpeg",
          imageCaption: "1. Learn to draw"
        },
        {
          fileURL: "/images/drawing.jpeg",
          imageCaption: "2. Learn to draw"
        }
      ],
      videos: [
        {
          fileURL: "https://v.ftcdn.net/03/51/68/76/240_F_351687663_7JljPIOJAbJRedBHhbU2tTe9927joMHm_ST.mp4",
          videoCaption: "drawing techniques for beginners"
        }
      ]
    },
  ]);

  console.log("resources seeded");

  await User.deleteMany();

  await User.collection.dropIndex("displayName_1");

  await User.create({
    firstName: "Frank",
    lastName: "Furter",
    username: "ffurter",
    email: "ffurter@testmail.com",
    wallet: 0,
    password: "password12345",
    resources: [resources[0]._id, resources[1]._id, resources[2]._id, resources[3]._id, resources[4]._id]
  });

  await User.create({
    firstName: "Hans",
    lastName: "Solo",
    username: "hsolo",
    email: "hsolo@testmail.com",
    password: "theforce123",
    resources: [resources[5]._id, resources[6]._id, resources[7]._id, resources[8]._id, resources[9]._id]
  });

  console.log("users seeded");

  await Profit.deleteMany();

  await Profit.create({
    isCurrent: true,
    currentProfit: 0,
    feeRate: 10
  });

  console.log("profit seeded");

  await Transaction.deleteMany();
  console.log("Transactions deleted");

  process.exit();
});
