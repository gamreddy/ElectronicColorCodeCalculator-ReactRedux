import delay from './delay';

const colorCodes = [
    {
        id: 'PK',
        name: 'Pink',
        code: 'PK',
        significantFigures: null,
        multiplier: 0.001,
        tolerance: null
    },
    {
        id: 'SR',
        name: 'Silver',
        code: 'SR',
        significantFigures: null,
        multiplier: 0.01,
        tolerance: 0.1
    },
    {
        id: 'GD',
        name: 'Gold',
        code: 'GD',
        significantFigures: null,
        multiplier: 0.1,
        tolerance: 0.05
    },
    {
        id: 'BK',
        name: 'Black',
        code: 'BK',
        significantFigures: 0,
        multiplier: 1,
        tolerance: null
    },
    {
        id: 'BN',
        name: 'Brown',
        code: 'BN',
        significantFigures: 1,
        multiplier: 10,
        tolerance: 0.01
    },
    {
        id: 'RD',
        name: 'Red',
        code: 'RD',
        significantFigures: 2,
        multiplier: 100,
        tolerance: 0.02
    },
    {
        id: 'OG',
        name: 'Orange',
        code: 'OG',
        significantFigures: 3,
        multiplier: 1000,
        tolerance: null
    },
    {
        id: 'YE',
        name: 'Yellow',
        code: 'YE',
        significantFigures: 4,
        multiplier: 10000,
        tolerance: 0.05
    },
    {
        id: 'GN',
        name: 'Green',
        code: 'GN',
        significantFigures: 5,
        multiplier: 100000,
        tolerance: 0.005
    },
    {
        id: 'BU',
        name: 'Blue',
        code: 'BU',
        significantFigures: 6,
        multiplier: 1000000,
        tolerance: 0.0025
    },
    {
        id: 'VT',
        name: 'Violet',
        code: 'VT',
        significantFigures: 7,
        multiplier: 10000000,
        tolerance: 0.001
    },
    {
        id: 'GY',
        name: 'Gray',
        code: 'GY',
        significantFigures: 8,
        multiplier: 100000000,
        tolerance: 0.005
    },
    {
        id: 'WH',
        name: 'White',
        code: 'WH',
        significantFigures: 9,
        multiplier: 1000000000,
        tolerance: null
    }
];

class ColorCodesApi {

    static getAllColorCodes() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {            
                resolve(Object.assign([], colorCodes));
            }, delay);
        });
    }

}

export default ColorCodesApi;