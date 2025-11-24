module.exports = {
    // jest.config.js
    // Other Jest configurations...
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    // You might also want to configure which files to collect coverage from:
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}",
        "!src/index.js",
    ],
    sum: (a, b) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Inputs must be numbers');
        }
        return a + b
    }
}
