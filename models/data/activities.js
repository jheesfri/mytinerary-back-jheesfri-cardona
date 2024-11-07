import 'dotenv/config.js'
import '../../config/database.js'
import Activity from '../Activity.js'


const activities = [
    {
        title: "Exploring Shibuya Crossing",
        description: "Witness the bustling energy of Tokyo's iconic Shibuya Crossing, where hundreds of people cross at once. A must-see for first-time visitors!",
        duration: 2, // duración en horas
        cost: 50, // costo en la moneda local
        image: "https://images.unsplash.com/photo-1561706532005-527a8f45e6f3"
    },
    {
        title: "Eiffel Tower Night Tour",
        description: "A magical night tour of the Eiffel Tower, with beautiful views of Paris from above. Includes a glass of champagne at the top!",
        duration: 3,
        cost: 100,
        image: "https://images.unsplash.com/photo-1545803368-1c605d2f88c7"
    },
    {
        title: "Guided Colosseum Tour",
        description: "Dive into ancient history with a guided tour of Rome's famous Colosseum. Learn about the gladiator battles and Roman Empire!",
        duration: 4,
        cost: 70,
        image: "https://images.unsplash.com/photo-1596471978178-ec79f733d514"
    },
    {
        title: "Sydney Opera House Backstage",
        description: "Get an exclusive backstage pass to Sydney's Opera House and see what happens behind the scenes of world-class performances.",
        duration: 2,
        cost: 80,
        image: "https://images.unsplash.com/photo-1512502650428-1fbd97c6d4c5"
    },
    {
        title: "Shanghai Night Skyline Cruise",
        description: "Experience Shanghai's dazzling skyline on a night cruise along the Huangpu River. Enjoy the vibrant city lights and skyline views.",
        duration: 1.5,
        cost: 60,
        image: "https://images.unsplash.com/photo-1587645334921-f0c94c6e3c5d"
    },
    {
        title: "Tango Show in Buenos Aires",
        description: "Watch a mesmerizing tango show in Buenos Aires, showcasing Argentina's passionate dance culture in an authentic setting.",
        duration: 2,
        cost: 40,
        image: "https://images.unsplash.com/photo-1558810122-cb89f9e7c6f0"
    },
    {
        title: "Cape Town Table Mountain Hike",
        description: "Embark on a guided hike up Cape Town's iconic Table Mountain. Amazing views await at the summit for those who make the climb!",
        duration: 5,
        cost: 30,
        image: "https://images.unsplash.com/photo-1504210083388-7ec73a49d2c3"
    },
    {
        title: "Traditional Tea Ceremony in Kyoto",
        description: "Participate in an authentic Japanese tea ceremony in Kyoto, experiencing the art of tea and meditation.",
        duration: 2,
        cost: 45,
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6d3b"
    },
    {
        title: "Boat Ride on Venice's Grand Canal",
        description: "Sail through Venice's Grand Canal, enjoying the charming views of historic buildings and Venetian architecture.",
        duration: 1.5,
        cost: 70,
        image: "https://images.unsplash.com/photo-1553788109-b23a3c9aefb2"
    },
    {
        title: "Cooking Class in Bangkok",
        description: "Learn to cook traditional Thai dishes in a fun, hands-on cooking class in Bangkok.",
        duration: 3,
        cost: 50,
        image: "https://images.unsplash.com/photo-1528017487700-6e0e9a6fc95f"
    },
    {
        title: "Safari Adventure in Nairobi",
        description: "A thrilling safari experience in Nairobi, where you can spot lions, elephants, and other wildlife.",
        duration: 6,
        cost: 120,
        image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a"
    },
    {
        title: "Wine Tasting in Tuscany",
        description: "Taste some of the finest Italian wines in the beautiful vineyards of Tuscany.",
        duration: 4,
        cost: 80,
        image: "https://images.unsplash.com/photo-1579528555707-b1838f6eeac6"
    },
    {
        title: "Street Art Tour in Berlin",
        description: "Explore Berlin's vibrant street art scene with a guided tour through the city's artistic districts.",
        duration: 2.5,
        cost: 35,
        image: "https://images.unsplash.com/photo-1567589621700-fd00a7e5c63b"
    },
    {
        title: "Desert Safari in Dubai",
        description: "Enjoy an exhilarating desert safari with dune bashing, camel rides, and a traditional Bedouin dinner.",
        duration: 5,
        cost: 95,
        image: "https://images.unsplash.com/photo-1517935706615-2717063c2225"
    },
    {
        title: "Skiing Adventure in the Swiss Alps",
        description: "Hit the slopes in the Swiss Alps for an unforgettable skiing experience.",
        duration: 6,
        cost: 200,
        image: "https://images.unsplash.com/photo-1505904267569-15b5d12bf0e8"
    },
    {
        title: "Ancient Ruins Tour in Athens",
        description: "Discover ancient Greek history with a tour of Athens' most iconic ruins, including the Acropolis.",
        duration: 3,
        cost: 60,
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2"
    },
    {
        title: "Northern Lights Viewing in Iceland",
        description: "Witness the magical Northern Lights in Iceland, a bucket-list experience for nature lovers.",
        duration: 4,
        cost: 150,
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
    },
    {
        title: "Historical Walk through Istanbul",
        description: "Walk through the historic streets of Istanbul, visiting landmarks such as the Blue Mosque and Hagia Sophia.",
        duration: 3,
        cost: 50,
        image: "https://images.unsplash.com/photo-1598966738347-5bfb1974e94d"
    },
    {
        title: "Hot Air Balloon Ride in Cappadocia",
        description: "Experience breathtaking views of Cappadocia's unique landscapes from a hot air balloon.",
        duration: 2,
        cost: 200,
        image: "https://images.unsplash.com/photo-1533158326335-d1691b7041ef"
    },
    {
        title: "Whale Watching in Vancouver",
        description: "Go on an exciting whale-watching tour in Vancouver and see these majestic creatures in their natural habitat.",
        duration: 3.5,
        cost: 120,
        image: "https://images.unsplash.com/photo-1602354808693-1cb98685da68"
    },
    {
        title: "Ziplining in Costa Rica's Rainforest",
        description: "Fly through Costa Rica's lush rainforest canopy on an exhilarating zipline adventure.",
        duration: 2,
        cost: 65,
        image: "https://images.unsplash.com/photo-1551776235-dde6d4829809"
    },
    {
        title: "Snorkeling in the Great Barrier Reef",
        description: "Discover vibrant marine life and coral reefs while snorkeling in Australia's Great Barrier Reef.",
        duration: 3,
        cost: 100,
        image: "https://images.unsplash.com/photo-1543791189-2a84a7c362f4"
    }
];


Activity.insertMany(activities)

