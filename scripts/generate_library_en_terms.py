import json

CULINARY_TERMS_EN = [
    {
        "id": "chimichurri",
        "name": "Chimichurri",
        "originalTerm": "Chimichurri (Argentina)",
        "category": "sauces_dressings",
        "categoryName": "Sauces & Salsas",
        "origin": "Argentina / Uruguay",
        "shortDescription": "Fresh South American uncooked herb salsa based on fresh herbs, garlic, vinegar, and extra virgin olive oil.",
        "ingredients": [
            "Flat-leaf parsley",
            "Fresh oregano",
            "Garlic",
            "Chilli flakes (ají molido)",
            "Red wine vinegar",
            "High quality extra virgin olive oil",
            "Sea salt and freshly ground black pepper"
        ],
        "flavorProfile": "Vibrant, herbaceous, lightly spicy with a pleasant acidity that cuts cleanly through rich roasted and grilled meats.",
        "culinaryUsage": "Used as a cold table sauce, marinade, or dipping sauce. Ingredients are finely hand-chopped rather than pureed to preserve texture and vivid color.",
        "fuzeMenuAppearances": [
            "Grilled pork belly with caramelized yuzu sauce and chimichurri",
            "Chimichurri sauce (standalone cold sauce)"
        ],
        "staffTips": "Recommend to guests with richer meats (pork belly, steaks). The wine vinegar acidity and herbal brightness cut through fat and elevate the dish.",
        "tags": ["sauce", "herbs", "cold kitchen", "Argentina", "grill"]
    },
    {
        "id": "duroc",
        "name": "Duroc Pork",
        "originalTerm": "Duroc Pork (USA)",
        "category": "meat_cuts",
        "categoryName": "Meat & Steak Cuts",
        "origin": "North America (New York & New Jersey, mid-19th century)",
        "shortDescription": "Prestigious heritage pig breed renowned for high intramuscular marbling, fine muscle fibers, and extraordinary tenderness.",
        "ingredients": [
            "100% purebred or crossbred Duroc pork (red-brown heritage breed)",
            "Abundant intramuscular marbling fat",
            "High oleic acid profile"
        ],
        "flavorProfile": "Distinctive deep savory pork flavor, incomparably juicier and more tender than commercial pork, with a subtle nutty sweetness from rendered fat.",
        "culinaryUsage": "Ideal for thick-cut schnitzels, chops, and slow roasting. The marbling ensures the meat stays exceptionally succulent and never dries out during frying or grilling.",
        "fuzeMenuAppearances": [
            "Thick-cut Duroc pork schnitzel with fines herbes sauce, potato mash, and potato crisps"
        ],
        "staffTips": "Explain to guests that Duroc is the pork equivalent of Black Angus in beef. Our schnitzel is served thick-cut and remains remarkably juicy inside.",
        "tags": ["pork", "meat", "Duroc", "schnitzel", "marbling"]
    },
    {
        "id": "cornichons",
        "name": "Cornichons",
        "originalTerm": "Cornichons (France)",
        "category": "gourmet_ingredients",
        "categoryName": "Gourmet Ingredients",
        "origin": "France",
        "shortDescription": "Miniature French pickled gherkins with delicate bumps harvested at an early stage and cured in an aromatic vinegar brine.",
        "ingredients": [
            "Young miniature gherkins (3–5 cm in length)",
            "White wine or spirit vinegar",
            "Fresh tarragon",
            "Coriander and mustard seeds",
            "Pearl onions and sea salt"
        ],
        "flavorProfile": "Snappy, crisp, distinctly tart and tangy with herbal tarragon notes and gentle mustard pungency.",
        "culinaryUsage": "Essential element of hand-cut beef tartare, charcuterie boards, terrines, and raclette. Finely diced, they provide bite and bright acidity.",
        "fuzeMenuAppearances": [
            "Hand-cut beef tartare from rump cap, cornichons, marinated shallots, potato straw"
        ],
        "staffTips": "In our tartare, diced cornichons provide an essential crunch and an acidic counterweight to the rich beef rump cap.",
        "tags": ["pickles", "gherkins", "France", "tartare"]
    },
    {
        "id": "salsa-verde",
        "name": "Salsa Verde",
        "originalTerm": "Salsa verde (Italy / Mediterranean)",
        "category": "sauces_dressings",
        "categoryName": "Sauces & Salsas",
        "origin": "Italy (Piedmont / Lombardy)",
        "shortDescription": "Traditional Mediterranean uncooked green herb salsa loaded with natural umami from salted anchovies and pickled capers.",
        "ingredients": [
            "Fresh flat-leaf parsley",
            "Salted anchovy fillets",
            "Brined capers",
            "Garlic",
            "Dijon mustard or white bread crumb soaked in vinegar",
            "Extra virgin olive oil and a dash of wine vinegar"
        ],
        "flavorProfile": "Herbaceous, savory, tangy with deep umami. More punchy and savory than chimichurri thanks to anchovies and capers.",
        "culinaryUsage": "Classic accompaniment to boiled and roasted meats (bollito misto), wood-oven fish, and grilled vegetables.",
        "fuzeMenuAppearances": [
            "Our salsa verde (standalone cold sauce for grilled meats)"
        ],
        "staffTips": "Explain the difference: Chimichurri is oregano- and chilli-based, whereas Italian Salsa Verde derives its umami depth from capers and anchovies.",
        "tags": ["sauce", "herbs", "anchovies", "capers", "Italy"]
    },
    {
        "id": "choron",
        "name": "Choron Sauce",
        "originalTerm": "Sauce Choron (France)",
        "category": "sauces_dressings",
        "categoryName": "Sauces & Salsas",
        "origin": "France (Paris, 19th century, Chef Alexandre Étienne Choron)",
        "shortDescription": "Luxurious warm emulsified sauce based on classic Béarnaise enriched with a rich reduction of sweet roasted tomatoes.",
        "ingredients": [
            "Fresh egg yolks",
            "Clarified butter",
            "White wine and shallot tarragon vinegar reduction",
            "Fresh tarragon and chervil",
            "Concentrated tomato reduction / roasted tomato purée",
            "Pinch of cayenne pepper and salt"
        ],
        "flavorProfile": "Velvety, buttery sauce with an aniseed nuance from tarragon and a sweet-tart depth from roasted tomatoes, glowing with coral-pink color.",
        "culinaryUsage": "Served warm over beef steaks, rump cap, grilled fish, and roasted vegetables.",
        "fuzeMenuAppearances": [
            "Choron – warm sauce for grilled meats and wood-fired specialities"
        ],
        "staffTips": "A splendid choice for guests who love Béarnaise or Hollandaise, but appreciate a warmer, fruitier tomato accent with their beef steak.",
        "tags": ["warm sauce", "butter", "egg yolks", "tomatoes", "France"]
    },
    {
        "id": "fines-herbes",
        "name": "Fines Herbes",
        "originalTerm": "Fines herbes (France)",
        "category": "sauces_dressings",
        "categoryName": "Sauces & Salsas",
        "origin": "France (classic haute cuisine)",
        "shortDescription": "Iconic French herbal quartet consisting of flat-leaf parsley, chives, chervil, and tarragon.",
        "ingredients": [
            "Chervil (delicate aniseed nuance)",
            "French tarragon (distinct aromatic note)",
            "Chives (subtle onion accent)",
            "Flat-leaf parsley (clean earthy freshness)",
            "Cream, butter base and gentle veal stock"
        ],
        "flavorProfile": "Delicate, fresh, herbaceous with subtle liquorice and aniseed hints, supported by a gentle buttery cream body.",
        "culinaryUsage": "Herbs are stirred in at the very end of cooking to preserve their volatile essential oils and bright emerald hue.",
        "fuzeMenuAppearances": [
            "Our fines herbes – warm herb sauce served with the thick-cut Duroc pork schnitzel"
        ],
        "staffTips": "Highlight the finesse of this sauce: it is a refined French herb classic that enhances rather than overwhelms the tenderness of Duroc pork.",
        "tags": ["herbs", "sauce", "French cuisine", "tarragon", "chervil"]
    },
    {
        "id": "padron-peppers",
        "name": "Padrón Peppers",
        "originalTerm": "Pimientos de Padrón (Spain)",
        "category": "gourmet_ingredients",
        "categoryName": "Gourmet Ingredients",
        "origin": "Spain (Municipality of Padrón, Galicia)",
        "shortDescription": "Small green Spanish peppers flash-blistered over high heat and seasoned with flaky sea salt. Renowned because most are mild, but every tenth packs heat.",
        "ingredients": [
            "Fresh green Capsicum annuum var. Annuum peppers",
            "High smoke-point oil for flash frying",
            "Coarse flaky sea salt (Maldon)"
        ],
        "flavorProfile": "Grassy, sweet, lightly smoky from blistering heat. The famous Galician adage says: 'Os pementos de Padrón, uns pican e outros non' (Padrón peppers, some are hot, some are not).",
        "culinaryUsage": "Flash-fried in a smoking hot pan or grill until blistered and charred, then immediately sprinkled with sea salt flakes.",
        "fuzeMenuAppearances": [
            "Blistered Padrón peppers served with US Prime rump cap and US Prime rib eye"
        ],
        "staffTips": "Fun talking point for guests: 90% are mild and sweet, but an occasional spicy one turns the meal into a delightful culinary roulette!",
        "tags": ["peppers", "Spain", "grill", "tapas", "side"]
    },
    {
        "id": "us-prime",
        "name": "US Prime Beef",
        "originalTerm": "USDA Prime Beef (USA)",
        "category": "meat_cuts",
        "categoryName": "Meat & Steak Cuts",
        "origin": "United States (USDA Certification Grade)",
        "shortDescription": "The pinnacle of American beef – the highest quality grade awarded to less than 3% of all graded cattle in the USA.",
        "ingredients": [
            "Young grain-fed beef (predominantly Black Angus breed)",
            "Extended grain finishing (corn, barley)",
            "Dense, uniform intramuscular marbling"
        ],
        "flavorProfile": "Incredibly buttery, deep, savory beef flavor. Due to high intramuscular marbling, the steak self-bastes on the grill and melts on the palate.",
        "culinaryUsage": "Prime rib eye, rump cap, striploin, and the basis for our luxury burgers and wood-fired pastrami.",
        "fuzeMenuAppearances": [
            "US Prime beef rump cap from the wood-fired grill",
            "US Prime rib eye from the grill",
            "US Prime beef burger with bacon and cheddar",
            "Our pastrami from US Prime beef ribs"
        ],
        "staffTips": "Key selling point: US Prime is the guaranteed highest grade of American beef available (superior to Choice and Select), offering peak marbling and succulence.",
        "tags": ["beef", "meat", "steaks", "USA", "marbling", "grill"]
    },
    {
        "id": "picanha-kvetova-spicka",
        "name": "Beef Rump Cap (Picanha)",
        "originalTerm": "Picanha / Rump Cap / Tafelspitz",
        "category": "meat_cuts",
        "categoryName": "Meat & Steak Cuts",
        "origin": "Brazil / South America & Austria",
        "shortDescription": "Triangular muscle from the top of the rump (biceps femoris) crowned with a signature layer of crisp white fat cap.",
        "ingredients": [
            "Beef top sirloin cap (rump cap)",
            "Fat cap (renders during roasting to baste and protect the meat)"
        ],
        "flavorProfile": "Intense beefiness, firm yet tender texture. The melting fat cap bastes the cut continuously during grilling, providing profound savory depth.",
        "culinaryUsage": "Queen of Brazilian churrasco, central to Austrian Tafelspitz, and in modern gastropubs an outstanding steak and hand-cut tartare cut.",
        "fuzeMenuAppearances": [
            "Hand-cut beef tartare from rump cap",
            "US Prime beef rump cap from the wood-fired grill with Padrón peppers"
        ],
        "staffTips": "Share with guests that our tartare isn't ground from bland tenderloin, but hand-sliced from rump cap, which offers vastly superior natural beef flavor.",
        "tags": ["beef", "picanha", "steak", "tartare", "meat"]
    },
    {
        "id": "rib-eye-rostenec",
        "name": "Rib Eye (Entrecôte)",
        "originalTerm": "Rib Eye Steak / Entrecôte",
        "category": "meat_cuts",
        "categoryName": "Meat & Steak Cuts",
        "origin": "Classic beef cut (France / USA)",
        "shortDescription": "The juiciest and most popular steak cut from the rib section, featuring an unmistakable central eye of marbling fat.",
        "ingredients": [
            "Beef rib section between the 6th and 12th ribs",
            "Central fat eye and extensive intramuscular marbling"
        ],
        "flavorProfile": "Robust, succulent, deeply savory. The central fat kernel melts under intense heat, basting the meat from within.",
        "culinaryUsage": "Best cooked over high heat (charcoal, Josper, cast iron). Recommended Medium-Rare to Medium so the rich marbling fully renders.",
        "fuzeMenuAppearances": [
            "US Prime rib eye from the grill with blistered Padrón peppers"
        ],
        "staffTips": "Recommend Medium Rare to Medium. With a marbled rib eye, rendering that interior fat creates an incomparably flavorful steak.",
        "tags": ["beef", "steak", "grill", "rib eye", "roštěnec"]
    },
    {
        "id": "pastrami",
        "name": "Pastrami",
        "originalTerm": "Pastrami (Romania / New York Deli)",
        "category": "meat_cuts",
        "categoryName": "Meat & Steak Cuts",
        "origin": "Eastern European Jewish heritage (Romania), immortalized by classic New York delicatessens",
        "shortDescription": "Beef cut (brisket, short rib) brined with spices, crusted in cracked black pepper and toasted coriander, gently smoked, and steamed fork-tender.",
        "ingredients": [
            "Beef ribs or brisket",
            "Spiced brine with brown sugar, bay leaf, allspice",
            "Bark crust: cracked black pepper, toasted coriander, garlic, mustard seeds",
            "Wood smoke and clay oven roasting"
        ],
        "flavorProfile": "Smoky, peppery, aromatic with coriander notes. The meat breaks into silky, melt-in-your-mouth shreds.",
        "culinaryUsage": "Sliced warm and piled onto toasted sourdough bread with melted cheese, mustard, and pickles.",
        "fuzeMenuAppearances": [
            "Our pastrami from US Prime beef ribs roasted in a clay oven, raclette cheese, and cabbage slaw on toasted sourdough"
        ],
        "staffTips": "We don't buy commercial deli meat: our beef ribs are brined, spice-crusted, and roasted right in our in-house wood-fired clay oven!",
        "tags": ["pastrami", "smoked", "beef", "sandwich", "bakery"]
    },
    {
        "id": "raclette",
        "name": "Raclette Cheese",
        "originalTerm": "Fromage à Raclette (Switzerland / Savoy)",
        "category": "gourmet_ingredients",
        "categoryName": "Gourmet Ingredients",
        "origin": "Switzerland (Canton of Valais)",
        "shortDescription": "Traditional semi-hard cow's milk alpine cheese renowned worldwide for its superior melting qualities.",
        "ingredients": [
            "Alpine cow's milk",
            "Natural rennet and salt",
            "Aged 3 to 6 months with washed rind"
        ],
        "flavorProfile": "Aromatic, creamy, nutty, and savory when melted, releasing an irresistible alpine aroma.",
        "culinaryUsage": "Heated and scraped (from the French 'racler') directly onto roasted potatoes, meats, and toasted sandwiches.",
        "fuzeMenuAppearances": [
            "Our pastrami with melted raclette cheese and cabbage slaw on toasted sourdough"
        ],
        "staffTips": "It melts smoothly without separating, binding the crunchy sourdough bread and spicy pastrami into an indulgent, decadent bite.",
        "tags": ["cheese", "Switzerland", "melted cheese", "pastrami"]
    },
    {
        "id": "red-leicester",
        "name": "Red Leicester Cheese",
        "originalTerm": "Red Leicester (England)",
        "category": "gourmet_ingredients",
        "categoryName": "Gourmet Ingredients",
        "origin": "United Kingdom (Leicestershire, since the 18th century)",
        "shortDescription": "Traditional English semi-hard cow's milk cheese famous for its striking russet-orange color derived from natural annatto seed extract.",
        "ingredients": [
            "Pasteurized whole cow's milk",
            "Natural Annatto seed extract (achiote)",
            "Dairy starter cultures and rennet"
        ],
        "flavorProfile": "Rich, slightly sweet with nutty and caramel undertones, with a creamy yet crumbly texture.",
        "culinaryUsage": "Bakes and melts beautifully over fries, warm dishes, and rich cheese sauces.",
        "fuzeMenuAppearances": [
            "Fries with truffle mayonnaise and grated Red Leicester cheese"
        ],
        "staffTips": "Guests frequently ask about the color: it is not synthetic coloring, but an all-natural South American plant seed extract used in English cheesemaking for centuries.",
        "tags": ["cheese", "England", "fries", "truffle"]
    },
    {
        "id": "foie-gras",
        "name": "Foie Gras",
        "originalTerm": "Foie gras (France)",
        "category": "gourmet_ingredients",
        "categoryName": "Gourmet Ingredients",
        "origin": "France",
        "shortDescription": "Iconic French culinary delicacy – naturally fattened duck or goose liver celebrated for its silky, buttery richness.",
        "ingredients": [
            "Duck liver (Foie gras de canard)",
            "Cognac or Armagnac and port wine marinade",
            "White pepper, nutmeg, fine sea salt",
            "Kasteel Rouge cherry beer jelly"
        ],
        "flavorProfile": "Extraordinarily rich, velvety, buttery mouthfeel that literally melts at body temperature.",
        "culinaryUsage": "Prepared into fine terrines and pâtés, or flash-seared in a pan. Always demands an acidic or fruit-sweet counterpart.",
        "fuzeMenuAppearances": [
            "Duck foie gras pâté in Kasteel Rouge cherry beer jelly, cherry sauce, toasted butter brioche"
        ],
        "staffTips": "Recommend pairing with our draft Belgian Kasteel Rouge cherry beer or a glass of Pálava wine – the fruit sweetness and acidity create heavenly harmony.",
        "tags": ["foie gras", "duck liver", "pâté", "France", "delicacy"]
    },
    {
        "id": "consomme",
        "name": "Beef Consommé",
        "originalTerm": "Consommé de bœuf (France)",
        "category": "gourmet_ingredients",
        "categoryName": "Gourmet Ingredients",
        "origin": "France",
        "shortDescription": "Crystal-clear, deeply concentrated double beef broth clarified through the classical egg white and lean beef raft technique.",
        "ingredients": [
            "Beef bones and shank slowly simmered for hours",
            "Root vegetables (carrots, celery, parsley root, leek)",
            "Clarification raft: egg whites, lean ground beef, aromatics",
            "Delicate beef liver dumpling"
        ],
        "flavorProfile": "Pure, deep essence of roasted beef with high natural gelatin content that coats the palate with a velvet sheen.",
        "culinaryUsage": "Served piping hot as an elegant soup course with fine vegetable garnishes and delicate dumplings.",
        "fuzeMenuAppearances": [
            "Beef consommé with delicate liver dumpling and root vegetables"
        ],
        "staffTips": "Guests appreciate understanding the craftsmanship: consommé is not ordinary broth, but a double-reduced stock clarified with egg whites over hours of gentle simmering.",
        "tags": ["soup", "broth", "consommé", "French technique"]
    },
    {
        "id": "valrhona-dulcey",
        "name": "Valrhona Dulcey Chocolate",
        "category": "pastry_sweets",
        "categoryName": "Pastry & Sweets",
        "origin": "France (Valrhona Chocolate Academy, Tain l'Hermitage)",
        "shortDescription": "The world's first 'blond' chocolate, created through slow caramelization of white chocolate by master pastry chef Frédéric Bau.",
        "ingredients": [
            "Cocoa butter (min. 35%)",
            "Whole milk powder slowly caramelized via Maillard reaction",
            "Sugar and natural vanilla extract",
            "Pinch of sea salt balancing sweetness"
        ],
        "flavorProfile": "Intense notes of buttery caramel, sablé biscuit, toasted milk, and a delicate touch of sea salt.",
        "culinaryUsage": "Used for high-end ganaches, mousses, entremets, and sculptural pastry creations.",
        "fuzeMenuAppearances": [
            "Hop-cone ganache cakes crafted from Valrhona Dulcey blond chocolate, chocolate soil, and sour cherry sauce"
        ],
        "staffTips": "One of our most creative desserts: visually sculpted like a green hop cone, but hiding a heart of luxurious caramel-blond chocolate inside!",
        "tags": ["chocolate", "Valrhona", "dessert", "caramel", "hops"]
    },
    {
        "id": "ganache",
        "name": "Ganache",
        "originalTerm": "Ganache (France)",
        "category": "pastry_sweets",
        "categoryName": "Pastry & Sweets",
        "origin": "France / Switzerland (Parisian confectioner Siraudin, circa 1860)",
        "shortDescription": "Pillar of French pastry – a glossy emulsion of hot heavy cream and couverture chocolate.",
        "ingredients": [
            "Premium couverture chocolate (dark, milk, or blond)",
            "Fresh high-fat heavy whipping cream (min. 35% fat)",
            "Butter or glucose for velvety sheen and elasticity"
        ],
        "flavorProfile": "Silky-smooth, luscious cream that melts evenly across the tongue, delivering pure chocolate essence.",
        "culinaryUsage": "Filling for cakes, macarons, tarts, truffles, and modern sculpted desserts.",
        "fuzeMenuAppearances": [
            "Hop-cone shaped ganache cakes"
        ],
        "staffTips": "Proper emulsification produces a lump-free, velvety texture that forms the creamy heart of our signature dessert.",
        "tags": ["pastry", "ganache", "chocolate", "cream", "dessert"]
    },
    {
        "id": "espuma",
        "name": "Espuma",
        "originalTerm": "Espuma (Spain)",
        "category": "culinary_techniques",
        "categoryName": "Cooking Techniques",
        "origin": "Spain (Catalonia, Chef Ferran Adrià at elBulli)",
        "shortDescription": "Modern culinary technique producing ethereal foam in a pressurized siphon canister using nitrous oxide (N2O).",
        "ingredients": [
            "Flavored liquid base or purée (semolina cream, milk, vanilla)",
            "Natural binding agent (fat, gelatin, agar, or albumin)",
            "Food-grade N2O nitrous oxide gas"
        ],
        "flavorProfile": "Weightless as a cloud, releasing flavor compounds and aromas instantly on the tongue without heavy density.",
        "culinaryUsage": "Transforms traditional hearty dishes into modern, airy textures.",
        "fuzeMenuAppearances": [
            "Semolina porridge made from espuma with cocoa and melted butter"
        ],
        "staffTips": "Our semolina porridge isn't heavy pot porridge – thanks to the culinary siphon, it is an astonishingly light, cloud-like cream beloved by both kids and adults.",
        "tags": ["espuma", "molecular gastronomy", "siphon", "semolina"]
    },
    {
        "id": "brioche",
        "name": "Brioche",
        "originalTerm": "Brioche (France, Normandy)",
        "category": "pastry_sweets",
        "categoryName": "Pastry & Bakery",
        "origin": "France (Normandy, 15th century)",
        "shortDescription": "Enriched French yeast bread packed with butter and eggs, creating a golden crust and tender, feather-light crumb.",
        "ingredients": [
            "Wheat flour",
            "Exceptionally high butter proportion (up to 50% flour weight)",
            "Fresh eggs and egg yolks",
            "Milk, yeast, pinch of sugar and sea salt"
        ],
        "flavorProfile": "Rich, buttery, mildly sweet with a delicate golden crust and pillow-soft interior crumb.",
        "culinaryUsage": "Sliced and toasted to accompany pâtés and foie gras, or baked into premium burger and rib buns.",
        "fuzeMenuAppearances": [
            "Toasted butter brioche with duck foie gras pâté",
            "Toasted garlic brioche with beer-glazed pork ribs",
            "Toasted garlic brioche (standalone side)"
        ],
        "staffTips": "The butter richness in brioche absorbs the savory juices from ribs and pairs flawlessly with foie gras.",
        "tags": ["brioche", "bakery", "butter", "France", "side"]
    },
    {
        "id": "smrze",
        "name": "Morels (Morchella)",
        "originalTerm": "Morchella / Morels",
        "category": "gourmet_ingredients",
        "categoryName": "Gourmet Ingredients",
        "origin": "Temperate woodland zones of Europe and North America",
        "shortDescription": "Among the most sought-after and precious wild spring mushrooms, recognizable by their hollow honeycomb-like cap.",
        "ingredients": [
            "Authentic wild morel mushrooms (dried or fresh spring harvest)",
            "Hollow fruiting bodies packed with aromatic savory compounds"
        ],
        "flavorProfile": "Deeply earthy, nutty, woody, and meaty with intense umami that enriches sauces and farce.",
        "culinaryUsage": "Sautéed in butter, folded into artisanal sausages, terrines, and cream reductions for veal and poultry.",
        "fuzeMenuAppearances": [
            "Our veal sausage with morels, chestnuts, and prunes, truffle sauce"
        ],
        "staffTips": "In gastronomy, morels rank right behind truffles as royalty among mushrooms. They lend our veal sausage an unmistakable noble depth.",
        "tags": ["mushrooms", "morels", "delicacy", "veal", "forest"]
    },
    {
        "id": "yuzu",
        "name": "Yuzu",
        "originalTerm": "Yuzu / Citrus junos (East Asia)",
        "category": "world_flavors",
        "categoryName": "World & Asian Flavors",
        "origin": "Japan and East Asia",
        "shortDescription": "Prized Asian citrus fruit with an extraordinarily complex, intensely aromatic essential oil profile.",
        "ingredients": [
            "Pure juice and zest of Yuzu citrus fruit (Citrus junos)"
        ],
        "flavorProfile": "A captivating fusion echoing mandarin orange, bitter grapefruit, lime, and delicate floral jasmine blossoms.",
        "culinaryUsage": "Glazes, dressings, dipping sauces for rich meats, refined pastries, and craft cocktails.",
        "fuzeMenuAppearances": [
            "Grilled pork belly with caramelized yuzu sauce and chimichurri"
        ],
        "staffTips": "The yuzu in our pork belly glaze brings the signature Asian 'fuze' dimension, transforming a classic pork roast into a modern gastronomic experience.",
        "tags": ["yuzu", "citrus", "Japan", "pork belly", "glaze"]
    },
    {
        "id": "confit-cesnek",
        "name": "Confit Garlic",
        "originalTerm": "Ail confit (France)",
        "category": "culinary_techniques",
        "categoryName": "Cooking Techniques",
        "origin": "France (Southwest)",
        "shortDescription": "Classical technique of slowly poaching whole garlic cloves fully submerged in fat at a gentle temperature (~85°C).",
        "ingredients": [
            "Whole peeled garlic cloves",
            "Quality oil, beef tallow, or duck fat",
            "Thyme, rosemary, and black peppercorns"
        ],
        "flavorProfile": "Cooking removes all harsh sulfurous pungency, leaving cloves butter-soft, sweet, and nutty with caramel notes.",
        "culinaryUsage": "Spread over warm sourdough toast, folded into mashed potatoes, or used as a sweet aromatic base in pan sauces.",
        "fuzeMenuAppearances": [
            "Sliced beef tartare with toast fried in beef tallow and confit garlic"
        ],
        "staffTips": "Guests sensitive to raw garlic can enjoy confit garlic without worry – it is gentle, sweet, and highly digestible.",
        "tags": ["garlic", "confit", "tartare", "toast", "French technique"]
    },
    {
        "id": "bramborova-slama",
        "name": "Potato Straw (Pommes Pailles)",
        "originalTerm": "Pommes pailles (France)",
        "category": "culinary_techniques",
        "categoryName": "Cooking Techniques",
        "origin": "France",
        "shortDescription": "Potatoes sliced into matchstick-thin threads (~1 mm), rinsed of starch, and flash-fried into an airy, golden crispy nest.",
        "ingredients": [
            "High-starch baking potatoes",
            "High smoke-point frying oil",
            "Fine sea salt"
        ],
        "flavorProfile": "Crisp, airy, light crunch with a clean roasted potato taste without greasiness.",
        "culinaryUsage": "Used as a decorative, textured garnish providing vertical height and delicate crisp contrast.",
        "fuzeMenuAppearances": [
            "Hand-cut beef tartare from rump cap (crowned with potato straw)",
            "Potato mash with butter and potato straw"
        ],
        "staffTips": "On both tartare and mashed potatoes, the straw provides an enjoyable crunchy contrast to the smooth textures underneath.",
        "tags": ["potatoes", "crisps", "crunch", "tartare", "garnish"]
    },
    {
        "id": "kasteel-rouge",
        "name": "Kasteel Rouge Beer",
        "originalTerm": "Kasteel Rouge (Belgium)",
        "category": "gourmet_ingredients",
        "categoryName": "Beers & Culinary Ingredients",
        "origin": "Belgium (Ingelmunster, Van Honsebrouck Family Brewery)",
        "shortDescription": "Celebrated Belgian strong top-fermented ale (8.0% ABV) aged 6 months on authentic ripe sour cherries.",
        "ingredients": [
            "Dark Belgian specialty beer base (Kasteel Donker)",
            "Real sour cherries and pure cherry juice",
            "Barley malt, hops, water, and Belgian ale yeast"
        ],
        "flavorProfile": "Deep ruby color, luscious sweet-tart cherry flavor, notes of dark chocolate, almonds, and port wine with a warming alcoholic finish.",
        "culinaryUsage": "Poured on draft at our bar, and reduced in the Fuze kitchen into a glossy beer jelly atop duck foie gras.",
        "fuzeMenuAppearances": [
            "Duck foie gras pâté in Kasteel Rouge cherry beer jelly, cherry reduction",
            "Kasteel Rouge 18 – on tap 0.25l"
        ],
        "staffTips": "A great example of bar and kitchen collaboration: the Belgian cherry ale we pour on draft is reduced by our chefs to glaze our foie gras pâté!",
        "tags": ["Belgian beer", "cherries", "foie gras", "jelly", "draft beer"]
    },
    {
        "id": "waldorf",
        "name": "Waldorf Salad",
        "originalTerm": "Waldorf Salad (USA, New York)",
        "category": "sauces_dressings",
        "categoryName": "Salads & Dressings",
        "origin": "USA (New York, Waldorf-Astoria Hotel, 1893)",
        "shortDescription": "World-famous crisp salad created over a century ago by hotel maître d'hôtel Oscar Tschirky.",
        "ingredients": [
            "Crisp, tart-sweet apples cut into bite-sized pieces",
            "Fresh crunchy celery stalks",
            "Seedless table grapes",
            "Pickled walnuts",
            "Creamy mayonnaise dressing with lemon zest"
        ],
        "flavorProfile": "Refreshing harmony of crisp fruit sweetness, earthy walnuts, and clean aromatic celery bound in a velvety dressing.",
        "culinaryUsage": "Served as a refreshing appetizer, standalone salad, or side dish for roasted meats and poultry.",
        "fuzeMenuAppearances": [
            "Waldorf salad (apples, celery stalks, grapes, pickled walnuts, mayonnaise dressing)"
        ],
        "staffTips": "Allergen reminder: contains tree nuts (walnuts), celery, and eggs. Outstanding recommendation for guests seeking crisp freshness.",
        "tags": ["salad", "celery", "walnuts", "apples", "New York"]
    },
    {
        "id": "demi-glace",
        "name": "Demi-Glace",
        "originalTerm": "Demi-glace (France)",
        "category": "culinary_techniques",
        "categoryName": "Cooking Techniques & Foundations",
        "origin": "France (Auguste Escoffier)",
        "shortDescription": "The crown jewel of brown sauces – rich roasted veal stock reduced slowly to a glossy, gelatinous essence.",
        "ingredients": [
            "Roasted veal and beef marrow bones rich in collagen",
            "Mirepoix root vegetables (carrots, celery, onions)",
            "Red wine, tomato paste, bouquet garni (thyme, bay leaf)",
            "Simmered and reduced for over 24 hours"
        ],
        "flavorProfile": "Massive concentration of pure umami, savory roast notes, and mouth-coating gelatinous body.",
        "culinaryUsage": "Foundation for our warm cognac sauce, truffle reduction, and steak gravies.",
        "fuzeMenuAppearances": [
            "Warm cognac sauce",
            "Warm truffle sauce",
            "Base of pan jus for roasted meats and ribs"
        ],
        "staffTips": "A true hallmark of scratch cooking: no flour or artificial thickeners, our sauces achieve body purely through slow reduction and natural collagen.",
        "tags": ["stock", "reduction", "umami", "veal", "sauces"]
    },
    {
        "id": "kaiserschmarrn",
        "name": "Caramelized Kaiserschmarrn",
        "originalTerm": "Kaiserschmarrn (Austro-Hungarian Empire)",
        "category": "pastry_sweets",
        "categoryName": "Pastry & Sweets",
        "origin": "Austria (favorite dessert of Emperor Franz Joseph I)",
        "shortDescription": "Imperial fluffy shredded pancake soufflé cooked in butter, torn with two forks, and caramelized with sugar in the pan.",
        "ingredients": [
            "Egg yolks and whipped egg white meringue",
            "Flour, whole milk, and butter",
            "Clarified butter for pan searing",
            "Pan-caramelized sugar glaze",
            "Roasted spiced plums and egg liqueur ice cream"
        ],
        "flavorProfile": "Fluffy, cloud-soft interior with a crackling caramelized sugar crust, paired with warm tart plums and cooling rich ice cream.",
        "culinaryUsage": "Prepared to order and served steaming hot straight from the skillet alongside cool ice cream.",
        "fuzeMenuAppearances": [
            "Caramelized Kaiserschmarrn with roasted plums and egg liqueur ice cream"
        ],
        "staffTips": "A great sharing dessert for the table after dinner with an espresso or digestive drink.",
        "tags": ["dessert", "shredded pancake", "Kaiserschmarrn", "plums", "caramel"]
    },
    {
        "id": "humri-bisque",
        "name": "Creamy Lobster Soup (Bisque)",
        "originalTerm": "Bisque de homard (France)",
        "category": "gourmet_ingredients",
        "categoryName": "Gourmet Ingredients",
        "origin": "France (Bay of Biscay)",
        "shortDescription": "One of the most luxurious seafood soups in the world, prepared by roasting crustacean shells, flambéing with cognac, and simmering with wine and cream.",
        "ingredients": [
            "Lobster and shrimp shells and claws",
            "Cognac for flambéing and white wine",
            "Shallots, celery, fennel, and tomato paste",
            "Heavy cream",
            "Sausage and vegetable garnish, baked under puff pastry"
        ],
        "flavorProfile": "Deeply savory, sweet-mineral crustacean richness with smoky cognac nuance and a velvety cream finish.",
        "culinaryUsage": "Served piping hot in a bowl sealed with a domed puff pastry crust that locks in aromatic steam.",
        "fuzeMenuAppearances": [
            "Creamy lobster soup with sausage and vegetables, baked under puff pastry"
        ],
        "staffTips": "Allergen reminder: contains crustaceans (no. 2) and fish. The puff pastry dome presentation is an eye-catching table favorite.",
        "tags": ["lobster", "soup", "bisque", "crustaceans", "puff pastry"]
    },
    {
        "id": "pak-choi",
        "name": "Pak Choi",
        "originalTerm": "Bok Choy / Pak Choi (China)",
        "category": "world_flavors",
        "categoryName": "World & Asian Flavors",
        "origin": "China / East Asia",
        "shortDescription": "Crisp Chinese cabbage featuring juicy white stems and tender dark green leaves.",
        "ingredients": ["100% fresh Brassica rapa subsp. Chinensis"],
        "flavorProfile": "Mild, fresh, pleasantly sweet and crisp with a gentle peppery undertone.",
        "culinaryUsage": "Flash-stir-fried on a wok or grill to keep the stems snappy while wilting the leaves.",
        "fuzeMenuAppearances": ["Sides and Asian-inspired daily specials at Fuze"],
        "staffTips": "A wonderful light alternative to traditional cabbage that pairs beautifully with pork belly.",
        "tags": ["vegetables", "Asia", "wok", "side"]
    },
    {
        "id": "ponzu",
        "name": "Ponzu Sauce",
        "originalTerm": "Ponzu (Japan)",
        "category": "world_flavors",
        "categoryName": "World & Asian Flavors",
        "origin": "Japan",
        "shortDescription": "Iconic Japanese citrus sauce combining soy sauce, yuzu or sudachi citrus juice, mirin, and dashi stock.",
        "ingredients": [
            "Japanese brewed soy sauce",
            "Citrus juice (Yuzu / Sudachi)",
            "Mirin (sweet rice wine)",
            "Dashi broth brewed from kombu seaweed and bonito flakes"
        ],
        "flavorProfile": "Savory, bright citrus tang, tart and refreshing with deep umami undercurrents.",
        "culinaryUsage": "Dipping sauce for tataki, sashimi, dumplings, grilled meats, and modern vinaigrettes.",
        "fuzeMenuAppearances": ["Marinades and dressings for salads and grilled meats"],
        "staffTips": "Instantly refreshes the palate after rich bites of roasted meats.",
        "tags": ["sauce", "Japan", "yuzu", "soy sauce", "umami"]
    },
    {
        "id": "panko",
        "name": "Panko Breadcrumbs",
        "originalTerm": "Panko (Japan)",
        "category": "world_flavors",
        "categoryName": "World & Asian Flavors",
        "origin": "Japan",
        "shortDescription": "Flaky Japanese breadcrumbs made from crustless white bread baked by electrical resistance.",
        "ingredients": ["Wheat bread baked with electrical current without dark crust"],
        "flavorProfile": "Neutral vehicle for savory seasoning that yields incomparable long-lasting crispness.",
        "culinaryUsage": "Larger jagged flakes absorb far less oil than ordinary breadcrumbs, keeping fried foods light and crisp.",
        "fuzeMenuAppearances": ["Crispy croquettes and fried specialties"],
        "staffTips": "Panko breadcrumbs stay crisp much longer and feel significantly lighter than ordinary dense breadcrumbs.",
        "tags": ["breadcrumbs", "crisp", "frying", "Japan"]
    },
    {
        "id": "kimchi",
        "name": "Kimchi",
        "originalTerm": "Kimchi (Korean Peninsula)",
        "category": "world_flavors",
        "categoryName": "World & Asian Flavors",
        "origin": "Korea (inscribed on UNESCO Intangible Cultural Heritage list)",
        "shortDescription": "Traditional Korean spicy fermented napa cabbage pickle teeming with beneficial probiotics.",
        "ingredients": [
            "Napa cabbage",
            "Korean gochugaru chilli pepper flakes",
            "Garlic and fresh ginger",
            "Scallions and daikon radish",
            "Fermented fish sauce and salted shrimp"
        ],
        "flavorProfile": "Punchy, spicy, tangy, fizzy with fermented depth and aromatic garlic pungency.",
        "culinaryUsage": "Served as a side to rich roasted meats, layered into burgers, or tossed into stir-fries.",
        "fuzeMenuAppearances": ["Garnishes and sides for pork belly and grilled meats"],
        "staffTips": "The sparkling acidity and heat of kimchi brilliantly cut through rich pork belly fat.",
        "tags": ["fermentation", "Korea", "chilli", "cabbage", "probiotics"]
    },
    {
        "id": "edamame",
        "name": "Edamame",
        "originalTerm": "Edamame (Japan / East Asia)",
        "category": "world_flavors",
        "categoryName": "World & Asian Flavors",
        "origin": "Japan and East Asia",
        "shortDescription": "Young green soybeans harvested before ripening while still inside their pods.",
        "ingredients": ["100% immature soybeans (Glycine max)", "Flaky sea salt"],
        "flavorProfile": "Sweet, nutty, fresh green pea flavor with a firm, satisfying pop.",
        "culinaryUsage": "Boiled briefly in salted water and served whole in pods, or shelled into fresh salads and bowls.",
        "fuzeMenuAppearances": ["Salad additions and Asian fusion sides"],
        "staffTips": "Allergen reminder: contains soy (no. 6). The fibrous pods are not swallowed; beans are popped into the mouth using the teeth.",
        "tags": ["soy", "edamame", "Japan", "beans", "vegetable"]
    },
    {
        "id": "kombucha-pojem",
        "name": "Kombucha",
        "originalTerm": "Kombucha (East Asia)",
        "category": "gourmet_ingredients",
        "categoryName": "Gourmet Ingredients & Drinks",
        "origin": "Ancient China / Manchuria (over 2,000 years of history)",
        "shortDescription": "Naturally effervescent fermented tea beverage crafted with a symbiotic culture of bacteria and yeast (SCOBY).",
        "ingredients": [
            "Premium green or black tea",
            "Cane sugar (nutrient for fermenting cultures)",
            "Live SCOBY culture",
            "Natural fruit juices or herbs for secondary fermentation"
        ],
        "flavorProfile": "Gently sparkling, refreshing, sweet-tart with crisp cider-like fermented undertones.",
        "culinaryUsage": "Served chilled as a healthy premium non-alcoholic aperitif or post-meal digestive.",
        "fuzeMenuAppearances": [
            "Kombucha – Magu kombucha and artisanal fermented beverages on our drink menu"
        ],
        "staffTips": "A superb non-alcoholic alternative to beer and cider that promotes digestion after a satisfying meal.",
        "tags": ["fermentation", "tea", "non-alcoholic", "kombucha", "wellness"]
    },
    {
        "id": "cider-pojem",
        "name": "Cider",
        "originalTerm": "Cidre / Cider (France / England)",
        "category": "gourmet_ingredients",
        "categoryName": "Gourmet Ingredients & Drinks",
        "origin": "Normandy & Brittany (France) / Southwestern England",
        "shortDescription": "Natural sparkling alcoholic beverage made through controlled fermentation of freshly pressed apple juice.",
        "ingredients": [
            "Freshly pressed juice from dedicated cider apple varieties",
            "Wild or cultured cider yeast",
            "Natural carbonation from fermentation"
        ],
        "flavorProfile": "Crisp apple flavor with pleasant acidity, gentle tannins, and refreshing effervescence.",
        "culinaryUsage": "Classic pairing with roast pork, artisanal sausages, and cheeses.",
        "fuzeMenuAppearances": [
            "Opre` Cider and Opre` Sour Cherry (artisanal craft ciders from a family farm)"
        ],
        "staffTips": "Opre' Cider is not an overly sweet industrial soda, but a genuine artisanal fermented apple cider from a family-owned orchard.",
        "tags": ["cider", "apples", "fermentation", "Opre", "beverage"]
    }
]

print(f"Loaded {len(CULINARY_TERMS_EN)} English culinary terms")
