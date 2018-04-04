module.exports = {
    presets: [
        ['@babel/preset-env', {
            debug: true,
            targets: {
                browsers: ['> 0.1%'] // browserl.ist
            },
            useBuiltIns: 'usage'
        }],
        ["@babel/preset-react", {
            pragma: "React.createElement", // default pragma is React.createElement
            pragmaFrag: "React.Fragment", // default is React.Fragment
            throwIfNamespace: true // defaults to true
        }]
    ]
}