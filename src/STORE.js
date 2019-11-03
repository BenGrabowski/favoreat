const STORE = [
    {
        id: 1,
        name: 'Linger',
        type: 'Restaurant',
        hh: {
            has: true,
            start: '4:00 PM',
            end: '7:00 PM'
        },
        notes: 'Praesent sagittis a mi sit amet dictum. Donec orci nibh, dignissim in leo et, congue semper mauris.',
        items: [
            'Street Tacos',
            'Cheese curds & Shishito Peppers',
            'Bao Bun'
        ]
    },
    {
        id: 2,
        name: 'Barcelona Wine Bar',
        type: 'Restaurant',
        hh: {
            has: true,
            start: '3:00 PM',
            end: '6:00 PM'
        },
        notes: undefined,
        items: undefined
    },
    {
        id: 3,
        name: 'Bigsbys Folley',
        type: 'Winery',
        hh: {
            has: true,
            start: '5:00 PM',
            end: '7:30 PM'
        },
        notes: undefined,
        items: undefined
    },
    {
        id: 4,
        name: 'Odell Taproom',
        type: 'Brewery',
        hh: false,
        notes: undefined,
        items: undefined
    }
];

export default STORE;