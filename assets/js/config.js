/* ============================================================
   SITE CONFIG — edit this file to rebrand the whole site.
   Every page reads from here, so a change here updates all pages.
   Search for "REPLACE" to find every placeholder.
   ============================================================ */
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

  /* Loading screen: full pour on the first page of a visit,
     a quick pour on every page after that. Times in milliseconds. */
  loader: { firstVisitMs: 2400, repeatVisitMs: 900 },

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
    { title: "Miso Caramel Pancakes", desc: "Fluffy stack, burnt-butter miso caramel, seasonal fruit.", price: "$22", tag: "Brunch", ph: "ph-3" },
    { title: "Green Goddess Bowl", desc: "Charred greens, soft egg, herb dressing, toasted seeds.", price: "$21", tag: "Vegetarian", ph: "ph-2" },
    { title: "Brown Sugar Iced Latte", desc: "Double shot over house brown-sugar syrup and cold milk.", price: "$7.50", tag: "Drinks", ph: "ph-4" }
  ],

  /* Menu. diet codes: V = vegetarian, VG = vegan, GF = gluten free */
  menu: [
    { category: "Breakfast", note: "Served until 11:30am weekdays, all day weekends.", items: [
      { name: "Eggs Your Way", desc: "Poached, fried or scrambled on sourdough.", price: "$14", diet: ["V"] },
      { name: "Smashed Peas & Feta", desc: "Minted peas, whipped feta, chilli oil, poached eggs.", price: "$22", diet: ["V"] },
      { name: "Miso Caramel Pancakes", desc: "Burnt-butter miso caramel, seasonal fruit, cream.", price: "$22", diet: ["V"] },
      { name: "Big Lantern Breakfast", desc: "Eggs, bacon, house beans, mushrooms, hash brown, toast.", price: "$27", diet: [] },
      { name: "Coconut Chia Bowl", desc: "Mango, toasted coconut, granola, passionfruit.", price: "$17", diet: ["VG", "GF"] }
    ]},
    { category: "Lunch", note: "From 11:30am.", items: [
      { name: "Green Goddess Bowl", desc: "Charred greens, soft egg, herb dressing, seeds.", price: "$21", diet: ["V", "GF"] },
      { name: "Crispy Chicken Burger", desc: "Buttermilk chicken, slaw, pickles, chipotle mayo.", price: "$23", diet: [] },
      { name: "Braised Beef Toastie", desc: "Slow-cooked beef, cheddar, caramelised onion.", price: "$20", diet: [] },
      { name: "Roast Pumpkin Salad", desc: "Pumpkin, quinoa, rocket, pepitas, maple dressing.", price: "$19", diet: ["VG", "GF"] },
      { name: "Shoestring Fries", desc: "Sea salt, aioli.", price: "$9", diet: ["V", "GF"] }
    ]},
    { category: "Coffee", note: "House blend or ask about today's single origin. Oat, almond, soy +$0.80.", items: [
      { name: "Espresso / Long Black", desc: "", price: "$4.50", diet: ["VG", "GF"] },
      { name: "Flat White / Latte / Cappuccino", desc: "Regular / large.", price: "$5 / $6", diet: ["V", "GF"] },
      { name: "Batch Brew Filter", desc: "Rotating single origin.", price: "$5.50", diet: ["VG", "GF"] },
      { name: "Brown Sugar Iced Latte", desc: "Double shot, house syrup, cold milk.", price: "$7.50", diet: ["V", "GF"] },
      { name: "Cold Brew", desc: "Steeped 18 hours, served over ice.", price: "$6.50", diet: ["VG", "GF"] }
    ]},
    { category: "Tea & Cold Drinks", note: "", items: [
      { name: "Leaf Tea Pot", desc: "English breakfast, green, chamomile, peppermint.", price: "$5.50", diet: ["VG", "GF"] },
      { name: "Chai Latte", desc: "Spiced, sweetened with honey.", price: "$6", diet: ["V", "GF"] },
      { name: "Matcha Latte", desc: "Ceremonial-grade matcha, iced or hot.", price: "$7", diet: ["V", "GF"] },
      { name: "Fresh Juice", desc: "Orange, or apple-ginger-celery.", price: "$8", diet: ["VG", "GF"] },
      { name: "Thick Shake", desc: "Chocolate, vanilla, strawberry or salted caramel.", price: "$9", diet: ["V"] }
    ]},
    { category: "Sweets", note: "Baked in-house daily, while they last.", items: [
      { name: "Butter Croissant", desc: "", price: "$6", diet: ["V"] },
      { name: "Banana Bread", desc: "Toasted, with whipped butter.", price: "$7", diet: ["V"] },
      { name: "Flourless Orange Cake", desc: "", price: "$7.50", diet: ["V", "GF"] },
      { name: "Raw Caramel Slice", desc: "", price: "$7", diet: ["VG", "GF"] }
    ]}
  ],

  catering: [
    { name: "Morning Tea", price: "From $14 pp", serves: "Min. 10 people",
      items: ["Assorted pastries & mini muffins", "Seasonal fruit platter", "Batch brew coffee & tea"] },
    { name: "Working Lunch", price: "From $24 pp", serves: "Min. 10 people", featured: true,
      items: ["Gourmet sandwiches & wraps", "Two seasonal salads", "Sweet slice platter", "Juice or sparkling water"] },
    { name: "Celebration Spread", price: "From $32 pp", serves: "Min. 20 people",
      items: ["Grazing table", "Sliders & hot bites", "Celebration cake", "Coffee cart (optional add-on)"] }
  ],

  social: [
    { cap: "Latte art Friday", ph: "ph-1" }, { cap: "New pastry drop", ph: "ph-3" },
    { cap: "Behind the pass", ph: "ph-5" }, { cap: "Weekend brunch rush", ph: "ph-2" },
    { cap: "Bean of the month", ph: "ph-6" }, { cap: "Team favourites", ph: "ph-4" }
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
