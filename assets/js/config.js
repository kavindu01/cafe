/* ============================================================
   SITE CONFIG — edit this file to rebrand the whole site.
   Every page reads from here, so a change here updates all pages.
   Search for "REPLACE" to find every placeholder.
   ============================================================ */

/* ------------------------------------------------------------
   PHOTOS — free to use under the Unsplash License
   (commercial use allowed, no credit required; credit is shown
   anyway in the footer). Each entry: id = Unsplash image ID,
   by = photographer, page = the photo's Unsplash page.
   To use YOUR OWN photo instead, set id to a file path,
   e.g.  hero: { id: "assets/img/hero.jpg" }
   ------------------------------------------------------------ */
window.PHOTOS = {
  hero:           { id: "photo-1511920170033-f8396924c348", by: "Nathan Dumlao",          page: "flat-lay-photography-of-coffee-latte-ground-coffee-and-coffee-beans-Y3AqmbmtLQI" },
  interior:       { id: "photo-1567880905822-56f8e06fe630", by: "Keghan Crossland",       page: "modern-coffee-shop-interior-with-curved-counter-ZZxmc66SjfM" },
  interiorBulbs:  { id: "photo-1511081692775-05d0f180a065", by: "Clifford",               page: "cafe-interior-with-hanging-bulbs-and-table-VobvKmG-StA" },
  heartLatte:     { id: "photo-1512568400610-62da28bc8a13", by: "Nathan Dumlao",          page: "top-view-photography-of-heart-latte-coffee-XOhI_kW_TaM" },
  cappuccino:     { id: "photo-1762402519375-a29d7971a761", by: "Panchanok Juntanarach",  page: "a-close-up-of-latte-art-on-a-cappuccino-GT5klubwZhI" },
  espresso:       { id: "photo-1579992357154-faf4bde95b3d", by: "Nathan Dumlao",          page: "white-ceramic-cup-with-brown-liquid-dAYJfrtVjh0" },
  filter:         { id: "photo-1514432324607-a09d9b4aefdd", by: "Nathan Dumlao",          page: "white-ceramic-mug-filled-with-coffee-nBJHO6wmRWw" },
  icedLatte:      { id: "photo-1461023058943-07fcbe16d735", by: "Demi DeHerrera",         page: "glass-cup-filled-with-ice-latte-on-tabletop-L-sm1B4L1Ns" },
  coldBrew:       { id: "photo-1559496417-e7f25cb247f3",    by: "Jarek Ceborski",         page: "clear-drinking-glass-with-coffee-on-top-of-white-table-IhqDpFz7I8Q" },
  cupSaucer:      { id: "photo-1593443320739-77f74939d0da", by: "tabitha turner",         page: "white-ceramic-cup-with-saucer-on-brown-wooden-table-3n3mPoGko8g" },
  latteCroissant: { id: "photo-1542372147193-a7aca54189cd", by: "Rizky Subagja",          page: "latte-croissant-and-book-on-cafe-table-1k7TnX5GAww" },
  beans:          { id: "photo-1783926014847-748a8074eb38", by: "Mona Jain",              page: "a-full-frame-of-dark-roasted-coffee-beans-GDmiFs9lfrQ" },
  pancakes:       { id: "photo-1541288097308-7b8e3f58c4c6", by: "Luke Pennystan",         page: "pancakes-on-palte-09FcOqmi8R0" },
  pancakesBerry:  { id: "photo-1528207776546-365bb710ee93", by: "nikldn",                 page: "baked-pancake-with-blueberry-and-slice-of-banan-qp7WA8AV2x0" },
  eggToast:       { id: "photo-1613769049987-b31b641f25b1", by: "David B Townsend",       page: "bread-with-egg-and-vegetable-on-white-ceramic-plate-IQSDSFO9UuI" },
  avoToast:       { id: "photo-1761027101409-fa96d88349c7", by: "Salman Sidheek",         page: "avocado-toast-with-poached-egg-and-halloumi-cheese-ui-pynyV3Nc" },
  breakfastCoffee:{ id: "photo-1541329351076-600b0f9fdf28", by: "Deepansh Khurana",       page: "black-coffee-near-sunny-side-up-egg-with-sliced-tomatoes-mushroom-and-bread-on-plate--_--ffeeUBE" },
  bigBreakfast:   { id: "photo-1525473233136-080cdd8b7cb2", by: "Jonathan Farber",        page: "fried-ham-egg-bread-with-beans-and-red-tomato-slice-W3cKs5KeT2c" },
  chia:           { id: "photo-1757450981154-af0f85502925", by: "Jovan Vasiljević",       page: "three-glasses-of-chia-pudding-with-fruit-z51otZfV2mM" },
  greenBowl:      { id: "photo-1512621776951-a57141f2eefd", by: "Anna Pelzer",            page: "bowl-of-vegetable-salads-IGfIGP5ONV0" },
  chickenBurger:  { id: "photo-1637710847214-f91d99669e18", by: "Sultan Abdulrazzaq",     page: "a-fried-chicken-sandwich-on-a-wooden-table-UDYjeBwFZf8" },
  toastie:        { id: "photo-1701887138421-0245712e17e5", by: "Vlado Chabal",           page: "a-white-plate-topped-with-a-sandwich-and-a-fork-xQ6srGPGmhw" },
  salad:          { id: "photo-1547496502-affa22d38842",    by: "Yoav Aziz",              page: "vegetable-salad-in-gray-bowl-AiHJiRCwB3w" },
  lunchBowl:      { id: "photo-1546069901-ba9599a7e63c",    by: "Anh Nguyen",             page: "vegetable-and-meat-on-bowl-kcA-c3f_3FE" },
  fries:          { id: "photo-1630384060421-cb20d0e0649d", by: "Mitchell Luo",           page: "a-basket-of-french-fries-sitting-on-top-of-a-wooden-table-ChXHveqrb28" },
  teapot:         { id: "photo-1629440400842-9108c0ccf336", by: "jay huang",              page: "brown-ceramic-teapot-on-brown-wooden-table-7c4lkKgnOko" },
  chai:           { id: "photo-1481455473976-c280ae7c10f9", by: "Toa Heftiba",            page: "latte-field-cup-beside-red-apple-1CAFw4Yz_4w" },
  matcha:         { id: "photo-1515823064-d6e0c04616a7",    by: "Jason Leung",            page: "white-ceramic-teacup-filled-of-matcha-tea-Z-hvocTfR_s" },
  juice:          { id: "photo-1600271886742-f049cd451bba", by: "ABHISHEK HAJARE",        page: "orange-juice-in-clear-drinking-glass-kkrXVKK-jhg" },
  shake:          { id: "photo-1553787499-6f9133860278",    by: "Jonathan Borba",         page: "full-filled-cream-glass-on-table-7TeR1A1MUpM" },
  croissant:      { id: "photo-1681218079567-35aef7c8e7e4", by: "Vicky Nguyen",           page: "a-croissant-sitting-on-top-of-a-cork-coaster-a4xoMVKzbak" },
  croissants:     { id: "photo-1763207291761-e27bb059d851", by: "Richard Bell",           page: "a-pile-of-freshly-baked-croissants-dusted-with-sugar-yOnOXMYpMoQ" },
  bananaBread:    { id: "photo-1767065887793-f68f736ea9d6", by: "Diego Arenas de Rodrigo",page: "slices-of-banana-bread-on-a-wooden-cutting-board-bWj_oZPjXS8" },
  cake:           { id: "photo-1571115177098-24ec42ed204d", by: "Anthony Espinosa",       page: "layered-cake-6iqpLKqeaE0" },
  slice:          { id: "photo-1569762404472-026308ba6b64", by: "Jeff Siepman",           page: "sliced-cakes-MssPSnkV1yM" },
  grazing:        { id: "photo-1642643151267-86ee35313758", by: "Laura Beames",           page: "a-wooden-table-topped-with-lots-of-food-YaSy7XPHuTM" },
  board:          { id: "photo-1780480643131-f86e5c1facf5", by: "Fran Taylor",            page: "festive-wooden-board-with-assorted-cheese-ham-crackers-and-grapes-OUV0LdW55ec" }
};

/* Which photo goes where on the fixed parts of each page */
window.PAGE_PHOTOS = {
  homeHero: "hero",
  tileMenu: "pancakesBerry", tileCatering: "grazing", tileRewards: "heartLatte",
  menuHero: "breakfastCoffee", cateringHero: "board", rewardsHero: "cappuccino", contactHero: "interior"
};

window.SITE = {
  name: "Lantern House",
  tagline: "Specialty coffee & all-day plates",
  suburb: "Your Suburb",                                   // REPLACE
  address: "123 Example Street, Your Suburb VIC 3000",     // REPLACE
  phone: "0400 000 000",                                   // REPLACE
  email: "hello@example.com.au",                           // REPLACE
  instagram: "https://instagram.com/",                     // REPLACE
  instagramHandle: "@lanternhouse",                        // REPLACE
  loyaltyLink: "#",                                        // REPLACE with your loyalty sign-up URL

  /* Forms: paste a form-handling endpoint (e.g. a Formspree form URL) to
     receive submissions by email. Leave empty and forms open the visitor's
     email app with the details filled in instead. */
  formEndpoint: "",

  /* Loading screens (times in milliseconds, minimum on-screen time).
     Home page: coffee pour — full pour on the first visit of a session,
                quick pour when you come back to Home.
     Other pages: coffee bean bouncing around a ring. */
  loader: { homeFirstMs: 2400, homeRepeatMs: 900, pageMs: 1100 },

  announcement: [
    "Open 7 days a week",
    "Walk-ins welcome, no bookings needed",
    "New seasonal menu out now",
    "Catering for offices & celebrations"
  ],

  /* 0 = Sunday ... 6 = Saturday. 24h "HH:MM". Use null for closed days. */
  hours: {
    1: ["07:30", "15:00"], 2: ["07:30", "15:00"], 3: ["07:30", "15:00"],
    4: ["07:30", "15:00"], 5: ["07:30", "15:00"],
    6: ["08:00", "15:00"], 0: ["08:00", "15:00"]
  },

  specials: [
    { title: "Miso Caramel Pancakes", desc: "Fluffy stack, burnt-butter miso caramel, seasonal fruit.", price: "$22", tag: "Brunch", ph: "ph-3", img: "pancakes" },
    { title: "Green Goddess Bowl", desc: "Charred greens, soft egg, herb dressing, toasted seeds.", price: "$21", tag: "Vegetarian", ph: "ph-2", img: "greenBowl" },
    { title: "Brown Sugar Iced Latte", desc: "Double shot over house brown-sugar syrup and cold milk.", price: "$7.50", tag: "Drinks", ph: "ph-4", img: "icedLatte" }
  ],

  /* Menu. diet codes: V = vegetarian, VG = vegan, GF = gluten free */
  menu: [
    { category: "Breakfast", note: "Served until 11:30am weekdays, all day weekends.", items: [
      { name: "Eggs Your Way", desc: "Poached, fried or scrambled on sourdough.", price: "$14", diet: ["V"], img: "eggToast" },
      { name: "Smashed Peas & Feta", desc: "Minted peas, whipped feta, chilli oil, poached eggs.", price: "$22", diet: ["V"], img: "avoToast" },
      { name: "Miso Caramel Pancakes", desc: "Burnt-butter miso caramel, seasonal fruit, cream.", price: "$22", diet: ["V"], img: "pancakes" },
      { name: "Big Lantern Breakfast", desc: "Eggs, bacon, house beans, mushrooms, hash brown, toast.", price: "$27", diet: [], img: "bigBreakfast" },
      { name: "Coconut Chia Bowl", desc: "Mango, toasted coconut, granola, passionfruit.", price: "$17", diet: ["VG", "GF"], img: "chia" }
    ]},
    { category: "Lunch", note: "From 11:30am.", items: [
      { name: "Green Goddess Bowl", desc: "Charred greens, soft egg, herb dressing, seeds.", price: "$21", diet: ["V", "GF"], img: "greenBowl" },
      { name: "Crispy Chicken Burger", desc: "Buttermilk chicken, slaw, pickles, chipotle mayo.", price: "$23", diet: [], img: "chickenBurger" },
      { name: "Braised Beef Toastie", desc: "Slow-cooked beef, cheddar, caramelised onion.", price: "$20", diet: [], img: "toastie" },
      { name: "Roast Pumpkin Salad", desc: "Pumpkin, quinoa, rocket, pepitas, maple dressing.", price: "$19", diet: ["VG", "GF"], img: "salad" },
      { name: "Shoestring Fries", desc: "Sea salt, aioli.", price: "$9", diet: ["V", "GF"], img: "fries" }
    ]},
    { category: "Coffee", note: "House blend or ask about today's single origin. Oat, almond, soy +$0.80.", items: [
      { name: "Espresso / Long Black", desc: "", price: "$4.50", diet: ["VG", "GF"], img: "espresso" },
      { name: "Flat White / Latte / Cappuccino", desc: "Regular / large.", price: "$5 / $6", diet: ["V", "GF"], img: "cappuccino" },
      { name: "Batch Brew Filter", desc: "Rotating single origin.", price: "$5.50", diet: ["VG", "GF"], img: "filter" },
      { name: "Brown Sugar Iced Latte", desc: "Double shot, house syrup, cold milk.", price: "$7.50", diet: ["V", "GF"], img: "icedLatte" },
      { name: "Cold Brew", desc: "Steeped 18 hours, served over ice.", price: "$6.50", diet: ["VG", "GF"], img: "coldBrew" }
    ]},
    { category: "Tea & Cold Drinks", note: "", items: [
      { name: "Leaf Tea Pot", desc: "English breakfast, green, chamomile, peppermint.", price: "$5.50", diet: ["VG", "GF"], img: "teapot" },
      { name: "Chai Latte", desc: "Spiced, sweetened with honey.", price: "$6", diet: ["V", "GF"], img: "chai" },
      { name: "Matcha Latte", desc: "Ceremonial-grade matcha, iced or hot.", price: "$7", diet: ["V", "GF"], img: "matcha" },
      { name: "Fresh Juice", desc: "Orange, or apple-ginger-celery.", price: "$8", diet: ["VG", "GF"], img: "juice" },
      { name: "Thick Shake", desc: "Chocolate, vanilla, strawberry or salted caramel.", price: "$9", diet: ["V"], img: "shake" }
    ]},
    { category: "Sweets", note: "Baked in-house daily, while they last.", items: [
      { name: "Butter Croissant", desc: "", price: "$6", diet: ["V"], img: "croissant" },
      { name: "Banana Bread", desc: "Toasted, with whipped butter.", price: "$7", diet: ["V"], img: "bananaBread" },
      { name: "Flourless Orange Cake", desc: "", price: "$7.50", diet: ["V", "GF"], img: "cake" },
      { name: "Raw Caramel Slice", desc: "", price: "$7", diet: ["VG", "GF"], img: "slice" }
    ]}
  ],

  catering: [
    { name: "Morning Tea", price: "From $14 pp", serves: "Min. 10 people", img: "croissants",
      items: ["Assorted pastries & mini muffins", "Seasonal fruit platter", "Batch brew coffee & tea"] },
    { name: "Working Lunch", price: "From $24 pp", serves: "Min. 10 people", featured: true, img: "lunchBowl",
      items: ["Gourmet sandwiches & wraps", "Two seasonal salads", "Sweet slice platter", "Juice or sparkling water"] },
    { name: "Celebration Spread", price: "From $32 pp", serves: "Min. 20 people", img: "grazing",
      items: ["Grazing table", "Sliders & hot bites", "Celebration cake", "Coffee cart (optional add-on)"] }
  ],

  social: [
    { cap: "Latte art Friday", ph: "ph-1", img: "heartLatte" }, { cap: "New pastry drop", ph: "ph-3", img: "croissants" },
    { cap: "Slow mornings", ph: "ph-5", img: "latteCroissant" }, { cap: "Weekend brunch rush", ph: "ph-2", img: "breakfastCoffee" },
    { cap: "Bean of the month", ph: "ph-6", img: "beans" }, { cap: "Find your corner", ph: "ph-4", img: "interiorBulbs" }
  ],

  /* SAMPLE ONLY — replace with genuine reviews you have permission to use */
  reviews: [
    { text: "Sample review: describe the coffee, the food and the welcome in a sentence or two.", who: "Reviewer name · Google" },
    { text: "Sample review: a second guest's experience goes here once you have permission to use it.", who: "Reviewer name · Google" },
    { text: "Sample review: keep these short; two lines read best on mobile.", who: "Reviewer name · Google" }
  ],

  faq: [
    { q: "How do I join?", a: "Tap Join the club, add the card to your phone's wallet and show it at the counter. It takes under a minute." },
    { q: "Does every drink count?", a: "Every coffee, tea and chai earns one stamp, whatever the size." },
    { q: "Do stamps expire?", a: "Stamps stay on your card for 12 months from your last visit." },
    { q: "Can I buy a gift card?", a: "Yes, gift cards are available in store in any amount from $20." }
  ]
};
