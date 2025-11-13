module.exports = {
    // jest.config.js
    // Other Jest configurations...
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    // You might also want to configure which files to collect coverage from:
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}",
        "!src/index.js",
    ],
    sum: (a, b) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Arguments must be numbers')
        }
        return a + b
    }
}
