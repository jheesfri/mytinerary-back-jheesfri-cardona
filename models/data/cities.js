import 'dotenv/config.js'
import '../../config/database.js'
import City from '../City.js'

const cities = [
    {
        id: 1,
        name: 'New York',
        image: 'https://i.pinimg.com/enabled_hi/564x/b9/2f/e5/b92fe58d4128b273876724d8b80b44d9.jpg',
        country: 'USA',
        population: 8419600,
        area: 783.8,
        founded: 1624,
        isCapital: false,
        location: { latitude: 40.7128, longitude: -74.0060 },
        description: 'The largest city in the United States.',
        language: 'English',
        continent: 'North America',
        climate: 'Temperate'
    },
    {
        id: 2,
        name: 'Tokyo',
        image: 'https://i.pinimg.com/564x/5b/5a/eb/5b5aeb9b21fabb8ff58a8f7e514217c8.jpg',
        country: 'Japan',
        population: 13929286,
        area: 2191,
        founded: 1457,
        isCapital: true,
        location: { latitude: 35.6762, longitude: 139.6503 },
        description: 'Capital city of Japan and the largest metropolitan area in the world.',
        language: 'Japanese',
        continent: 'Asia',
        climate: 'Temperate'
    },
    {
        id: 3,
        name: 'Paris',
        image: 'https://i.pinimg.com/564x/6e/5c/e4/6e5ce40daf7c5f8579653105495c1178.jpg',
        country: 'France',
        population: 2140526,
        area: 105.4,
        founded: -300,
        isCapital: true,
        location: { latitude: 48.8566, longitude: 2.3522 },
        description: 'Known as the "City of Light", Paris is famous for its art, culture, and monuments.',
        language: 'French',
        continent: 'Europe',
        climate: 'Temperate'
    },
    {
        id: 4,
        name: 'Cairo',
        image: 'https://i.pinimg.com/564x/8d/66/e8/8d66e8b8a6fca9af1dc8549b5b7e3861.jpg',
        country: 'Egypt',
        population: 10230350,
        area: 3085,
        founded: 969,
        isCapital: true,
        location: { latitude: 30.0444, longitude: 31.2357 },
        description: 'Cairo is the largest city in the Arab world.',
        language: 'Arabic',
        continent: 'Africa',
        climate: 'Dry'
    },
    {
        id: 5,
        name: 'Sydney',
        image: 'https://i.pinimg.com/564x/18/40/ed/1840ed855d970fe2cf62105742ce7171.jpg',
        country: 'Australia',
        population: 5312163,
        area: 12368,
        founded: 1788,
        isCapital: false,
        location: { latitude: -33.8688, longitude: 151.2093 },
        description: 'Sydney is famous for its harbor and the Sydney Opera House.',
        language: 'English',
        continent: 'Australia',
        climate: 'Temperate'
    },
    {
        id: 6,
        name: 'Rio de Janeiro',
        image: 'https://i.pinimg.com/564x/6e/8b/ce/6e8bced2c5b4dc0195e29c3fdfe1d3d6.jpghttps://example.com/rio.jpg',
        country: 'Brazil',
        population: 6748000,
        area: 1182,
        founded: 1565,
        isCapital: false,
        location: { latitude: -22.9068, longitude: -43.1729 },
        description: 'Known for its Carnival festival and the Christ the Redeemer statue.',
        language: 'Portuguese',
        continent: 'South America',
        climate: 'Tropical'
    },
    {
        id: 7,
        name: 'Moscow',
        image: 'https://i.pinimg.com/564x/db/c8/0a/dbc80aed6455d9cacd3752f50219cb17.jpg',
        country: 'Russia',
        population: 12506468,
        area: 2561.5,
        founded: 1147,
        isCapital: true,
        location: { latitude: 55.7558, longitude: 37.6173 },
        description: 'The capital city of Russia.',
        language: 'Russian',
        continent: 'Europe',
        climate: 'Continental'
    },
    {
        id: 8,
        name: 'Mexico City',
        image: 'https://i.pinimg.com/564x/17/c0/c9/17c0c94a3974d0ce09be2dff4b5971c6.jpg',
        country: 'Mexico',
        population: 9209944,
        area: 1485,
        founded: 1325,
        isCapital: true,
        location: { latitude: 19.4326, longitude: -99.1332 },
        description: 'One of the most important financial centers in the Americas.',
        language: 'Spanish',
        continent: 'North America',
        climate: 'Temperate'
    },
    {
        id: 9,
        name: 'Berlin',
        image: 'https://i.pinimg.com/enabled_hi/564x/22/84/5a/22845a3a5037175473925826735c8155.jpg',
        country: 'Germany',
        population: 3669491,
        area: 891.8,
        founded: 1237,
        isCapital: true,
        location: { latitude: 52.5200, longitude: 13.4050 },
        description: 'Germany\'s capital and a major cultural hub.',
        language: 'German',
        continent: 'Europe',
        climate: 'Temperate'
    },
    {
        id: 10,
        name: 'Buenos Aires',
        image: 'https://i.pinimg.com/564x/55/9f/f9/559ff9eb715b1e46163cb6d2c7b5d9d5.jpg',
        country: 'Argentina',
        population: 2891082,
        area: 203,
        founded: 1536,
        isCapital: true,
        location: { latitude: -34.6037, longitude: -58.3816 },
        description: 'The capital and largest city of Argentina.',
        language: 'Spanish',
        continent: 'South America',
        climate: 'Temperate'
    },
    {
        id: 11,
        name: 'Madrid',
        image: 'https://i.pinimg.com/564x/3b/6b/db/3b6bdb6c4ef063eb814883e8b91b1622.jpg',
        country: 'Spain',
        population: 3265038,
        area: 604.3,
        founded: 9,
        isCapital: true,
        location: { latitude: 40.4168, longitude: -3.7038 },
        description: 'Spain\'s central capital, known for its royal palace and vibrant culture.',
        language: 'Spanish',
        continent: 'Europe',
        climate: 'Temperate'
    },
    {
        id: 12,
        name: 'Toronto',
        image: 'https://i.pinimg.com/enabled_hi/564x/2a/8b/73/2a8b73016e3e948aa2708d9e19bdf3d9.jpg',
        country: 'Canada',
        population: 2731571,
        area: 630.2,
        founded: 1793,
        isCapital: false,
        location: { latitude: 43.6511, longitude: -79.3837 },
        description: 'The largest city in Canada and a major multicultural hub.',
        language: 'English',
        continent: 'North America',
        climate: 'Continental'
    },
    {
        id: 13,
        name: 'Shanghai',
        image: 'https://i.pinimg.com/564x/b2/2e/51/b22e51ca46dc8058d39e886e37c9e36e.jpg',
        country: 'China',
        population: 26317104,
        area: 6340.5,
        founded: 1291,
        isCapital: false,
        location: { latitude: 31.2304, longitude: 121.4737 },
        description: 'The most populous city in China and a global financial center.',
        language: 'Mandarin',
        continent: 'Asia',
        climate: 'Temperate'
    },
    {
        id: 14,
        name: 'Dubai',
        image: 'https://i.pinimg.com/enabled_hi/564x/df/74/42/df7442bf2ecd6255f42f5442d8ec25be.jpg',
        country: 'UAE',
        population: 3331420,
        area: 4114,
        founded: 1833,
        isCapital: false,
        location: { latitude: 25.276987, longitude: 55.296249 },
        description: 'A major global city known for luxury shopping and ultramodern architecture.',
        language: 'Arabic',
        continent: 'Asia',
        climate: 'Dry'
    },
    {
        id: 15,
        name: 'Delhi',
        image: 'https://i.pinimg.com/564x/8a/b2/5a/8ab25a931b0a63de51f6b14b6788fc75.jpg',
        country: 'India',
        population: 31181376,
        area: 1484,
        founded: 6,
        isCapital: true,
        location: { latitude: 28.7041, longitude: 77.1025 },
        description: 'India\'s capital and a sprawling urban area.',
        language: 'Hindi',
        continent: 'Asia',
        climate: 'Tropical'
    },
    {
        id: 16,
        name: 'Singapore',
        image: 'https://i.pinimg.com/enabled_hi/564x/8e/08/42/8e0842284dd4fc3888591ebb3d1bdb5d.jpg',
        country: 'Singapore',
        population: 5638700,
        area: 728.6,
        founded: 1819,
        isCapital: true,
        location: { latitude: 1.3521, longitude: 103.8198 },
        description: 'A global financial hub and a city-state known for its cleanliness.',
        language: 'English',
        continent: 'Asia',
        climate: 'Tropical'
    },
    {
        id: 17,
        name: 'Los Angeles',
        image: 'https://i.pinimg.com/enabled_hi/564x/b1/35/be/b135bed2a840f20f64660c674b05da65.jpg',
        country: 'USA',
        population: 3980400,
        area: 1302,
        founded: 1781,
        isCapital: false,
        location: { latitude: 34.0522, longitude: -118.2437 },
        description: 'Known for its Mediterranean climate and the entertainment industry.',
        language: 'English',
        continent: 'North America',
        climate: 'Temperate'
    },
    {
        id: 18,
        name: 'Sao Paulo',
        image: 'https://i.pinimg.com/enabled_hi/564x/7a/4c/1f/7a4c1fe42dd22a1da0e0ef33e57ed3f8.jpg',
        country: 'Brazil',
        population: 12325232,
        area: 1521,
        founded: 1554,
        isCapital: false,
        location: { latitude: -23.5505, longitude: -46.6333 },
        description: 'The most populous city in Brazil and Latin America.',
        language: 'Portuguese',
        continent: 'South America',
        climate: 'Tropical'
    },
    {
        id: 19,
        name: 'Seoul',
        image: 'https://i.pinimg.com/enabled_hi/564x/b8/ff/96/b8ff96bb45ec53e69081fcbf71e2ed10.jpg',
        country: 'South Korea',
        population: 9776000,
        area: 605.2,
        founded: -18,
        isCapital: true,
        location: { latitude: 37.5665, longitude: 126.9780 },
        description: 'South Korea\'s capital, known for its high-tech economy.',
        language: 'Korean',
        continent: 'Asia',
        climate: 'Continental'
    },
    {
        id: 20,
        name: 'Johannesburg',
        image: 'https://i.pinimg.com/564x/af/d2/0a/afd20a0718ec74787d2e59add71d618e.jpg',
        country: 'South Africa',
        population: 957441,
        area: 1644.98,
        founded: 1886,
        isCapital: false,
        location: { latitude: -26.2041, longitude: 28.0473 },
        description: 'The largest city in South Africa and a major economic hub.',
        language: 'English',
        continent: 'Africa',
        climate: 'Temperate'
    },
    {
        id: 21,
        name: 'Medellín',
        image: 'https://i.pinimg.com/564x/e8/08/86/e8088604e2a69dbca41fa6836f2c1ee6.jpg',
        country: 'Colombia',
        population: 2556000,
        area: 382,
        founded: 1616,
        isCapital: false,
        location: { latitude: 6.2442, longitude: -75.5812 },
        description: 'Known as the "City of Eternal Spring" due to its pleasant climate.',
        language: 'Spanish',
        continent: 'South America',
        climate: 'Temperate'
    },
    {
        id: 22,
        name: 'Santiago de Chile',
        image: 'https://i.pinimg.com/enabled_hi/564x/7d/da/ac/7ddaac32d16098e073b3554c02dc4b64.jpg',
        country: 'Chile',
        population: 6158080,
        area: 641.4,
        founded: 1541,
        isCapital: true,
        location: { latitude: -33.4489, longitude: -70.6693 },
        description: 'The capital and largest city of Chile.',
        language: 'Spanish',
        continent: 'South America',
        climate: 'Temperate'
    },
    {
        id: 23,
        name: 'Caracas',
        image: 'https://i.pinimg.com/736x/8e/25/22/8e2522056bbd9ab491b2d659a366f2de.jpg',
        country: 'Venezuela',
        population: 2827061,
        area: 433,
        founded: 1567,
        isCapital: true,
        location: { latitude: 10.4806, longitude: -66.9036 },
        description: 'The capital of Venezuela, known for its cultural and historical significance.',
        language: 'Spanish',
        continent: 'South America',
        climate: 'Tropical'
    },
    {
        id: 24,
        name: 'Barcelona',
        image: 'https://i.pinimg.com/enabled_hi/564x/b0/8e/25/b08e25b1109fc9573a6f572a442e2378.jpg',
        country: 'Spain',
        population: 1636762,
        area: 101.9,
        founded: -200,
        isCapital: false,
        location: { latitude: 41.3851, longitude: 2.1734 },
        description: 'Famous for its art and architecture, including the Sagrada Familia.',
        language: 'Spanish',
        continent: 'Europe',
        climate: 'Mediterranean'
    },
    {
        id: 25,
        name: 'Bogotá',
        image: 'https://i.pinimg.com/enabled_hi/564x/bf/80/ca/bf80ca960afa89b5ecd8e2fea88d464f.jpg',
        country: 'Colombia',
        population: 7743955,
        area: 1587,
        founded: 1538,
        isCapital: true,
        location: { latitude: 4.7110, longitude: -74.0721 },
        description: 'The capital and largest city of Colombia.',
        language: 'Spanish',
        continent: 'South America',
        climate: 'Temperate'
    },
    {
        id: 26,
        name: 'Lima',
        image: 'https://i.pinimg.com/564x/23/7e/9b/237e9b6811da146388b8a90df4e569fd.jpg',
        country: 'Peru',
        population: 9674755,
        area: 2672,
        founded: 1535,
        isCapital: true,
        location: { latitude: -12.0464, longitude: -77.0428 },
        description: 'The capital of Peru, known for its rich history and cuisine.',
        language: 'Spanish',
        continent: 'South America',
        climate: 'Dry'
    },
    {
        id: 27,
        name: 'Montevideo',
        image: 'https://i.pinimg.com/564x/f9/64/1c/f9641c283c1747465e64f431dfe763ed.jpg',
        country: 'Uruguay',
        population: 1381000,
        area: 201,
        founded: 1726,
        isCapital: true,
        location: { latitude: -34.9011, longitude: -56.1645 },
        description: 'The capital of Uruguay, known for its beaches and cultural heritage.',
        language: 'Spanish',
        continent: 'South America',
        climate: 'Temperate'
    }

]

City.insertMany(cities)

