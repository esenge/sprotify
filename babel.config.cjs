module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }], // Automatic runtime removes the need for React import
        '@babel/preset-typescript',
    ],
};
