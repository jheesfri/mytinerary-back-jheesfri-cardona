import 'dotenv/config.js'
import '../../config/database.js'
import Itinerary from '../Itinerary.js';



const itineraries = [
    {
        "name": "Alice Smith", 
        "nameItinerary": "Traditional Tea Ceremony in Kyoto",
        "price": 3,
        "duration": 2,
        "likes": 0,
        "hashtags": ["#Kyoto", "#Japan", "#Tea", "#Culture"],
        "activities": "672aa1851c158ef5ba227b42",
        "photo": ""
    },
    {
        "name": "John Doe",  // Nombre aleatorio
        "nameItinerary": "Boat Ride on Venice's Grand Canal",
        "price": 4,
        "duration": 1.5,
        "likes": 0,
        "hashtags": ["#Venice", "#Italy", "#Canal", "#Romantic"],
        "activities": "672aa1851c158ef5ba227b43",
        "photo": ""
    },
    {
        "name": "Joseph Perwyth",
        "nameItinerary": "Cooking Class in Bangkok",
        "price": 5,
        "duration": 3,
        "likes": 0,
        "hashtags": ["#Bangkok", "#ThaiCuisine", "#FoodLover", "#Cooking"],
        "activities": "672aa1851c158ef5ba227b44"
    },
    {
        "name": "Jane Smith",
        "nameItinerary": "Safari Adventure in Nairobi",
        "price": 5,
        "duration": 6,
        "likes": 0,
        "hashtags": ["#Safari", "#Adventure", "#Kenya", "#Wildlife"],
        "activities": "672aa1851c158ef5ba227b57"
    },
    {
        "name": "Alice Johnson",
        "nameItinerary": "Wine Tasting in Tuscany",
        "price": 4,
        "duration": 4,
        "likes": 0,
        "hashtags": ["#Tuscany", "#Italy", "#Wine", "#Travel"],
        "activities": "672aa1851c158ef5ba227b45"
    },
    {
        "name": "Robert Brown",
        "nameItinerary": "Street Art Tour in Berlin",
        "price": 3,
        "duration": 2.5,
        "likes": 0,
        "hashtags": ["#Berlin", "#StreetArt", "#UrbanCulture", "#Art"],
        "activities": "672aa1851c158ef5ba227b46"
    },
    {
        "name": "Emily Davis",
        "nameItinerary": "Desert Safari in Dubai",
        "price": 4,
        "duration": 5,
        "likes": 0,
        "hashtags": ["#Dubai", "#Desert", "#Adventure", "#Safari"],
        "activities": "672aa1851c158ef5ba227b47"
    },
    {
        "name": "Michael Wilson",
        "nameItinerary": "Skiing Adventure in the Swiss Alps",
        "price": 5,
        "duration": 6,
        "likes": 0,
        "hashtags": ["#SwissAlps", "#Skiing", "#Snow", "#Adventure"],
        "activities": "672aa1851c158ef5ba227b48"
    },
    {
        "name": "Sarah Miller",
        "nameItinerary": "Ancient Ruins Tour in Athens",
        "price": 4,
        "duration": 3,
        "likes": 0,
        "hashtags": ["#Athens", "#History", "#Greece", "#Culture"],
        "activities": "672aa1851c158ef5ba227b49"
    },
    {
        "name": "David Garcia",
        "nameItinerary": "Northern Lights Viewing in Iceland",
        "price": 5,
        "duration": 4,
        "likes": 0,
        "hashtags": ["#Iceland", "#NorthernLights", "#Nature", "#Travel"],
        "activities": "672aa1851c158ef5ba227b4a"
    },
    {
        "name": "Olivia Martinez",
        "nameItinerary": "Historical Walk through Istanbul",
        "price": 3,
        "duration": 3,
        "likes": 0,
        "hashtags": ["#Istanbul", "#History", "#Culture", "#Travel"],
        "activities": "672aa1851c158ef5ba227b4b"
    },
    {
        "name": "James Anderson",
        "nameItinerary": "Hot Air Balloon Ride in Cappadocia",
        "price": 5,
        "duration": 2,
        "likes": 0,
        "hashtags": ["#Cappadocia", "#HotAirBalloon", "#Adventure", "#Travel"],
        "activities": "672aa1851c158ef5ba227b4c"
    },
    {
        "name": "Sophia Thomas",
        "nameItinerary": "Whale Watching in Vancouver",
        "price": 4,
        "duration": 3.5,
        "likes": 0,
        "hashtags": ["#Vancouver", "#WhaleWatching", "#Nature", "#Ocean"],
        "activities": "672aa1851c158ef5ba227b4d"
    },
    {
        "name": "Benjamin Lee",
        "nameItinerary": "Ziplining in Costa Rica's Rainforest",
        "price": 4,
        "duration": 2,
        "likes": 0,
        "hashtags": ["#CostaRica", "#Zipline", "#Adventure", "#Rainforest"],
        "activities": "672aa1851c158ef5ba227b4e"
    },
    {
        "name": "Charlotte Harris",
        "nameItinerary": "Snorkeling in the Great Barrier Reef",
        "price": 5,
        "duration": 3,
        "likes": 0,
        "hashtags": ["#GreatBarrierReef", "#Snorkeling", "#Australia", "#Ocean"],
        "activities": "672aa1851c158ef5ba227b4f"
    },
    {
        "name": "Lucas Clark",
        "nameItinerary": "Yoga Retreat in Bali",
        "price": 4,
        "duration": 3,
        "likes": 0,
        "hashtags": ["#Bali", "#Yoga", "#Wellness", "#Retreat"],
        "activities": "672aa1851c158ef5ba227b50"
    },
    {
        "name": "Amelia Lewis",
        "nameItinerary": "Cultural Dance Show in Rio de Janeiro",
        "price": 3,
        "duration": 2,
        "likes": 0,
        "hashtags": ["#Rio", "#Dance", "#Brazil", "#Culture"],
        "activities": "672aa1851c158ef5ba227b51"
    },
    {
        "name": "William Walker",
        "nameItinerary": "Museum Tour in New York",
        "price": 4,
        "duration": 3,
        "likes": 0,
        "hashtags": ["#NewYork", "#Museum", "#Art", "#Culture"],
        "activities": "672aa1851c158ef5ba227b52"
    },
    {
        "name": "Evelyn Young",
        "nameItinerary": "Guided Hike in Patagonia",
        "price": 5,
        "duration": 5,
        "likes": 0,
        "hashtags": ["#Patagonia", "#Hiking", "#Nature", "#Adventure"],
        "activities": "672aa1851c158ef5ba227b53"
    },
    {
        "name": "Henry King",
        "nameItinerary": "Safari Cruise on the Amazon River",
        "price": 5,
        "duration": 4,
        "likes": 0,
        "hashtags": ["#Amazon", "#Safari", "#Adventure", "#Nature"],
        "activities": "672aa1851c158ef5ba227b54"
    }
];




Itinerary.insertMany(itineraries)