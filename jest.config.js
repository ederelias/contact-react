module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom', // (or 'node' if you're not testing React components)
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
};
