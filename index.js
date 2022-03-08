module.exports = api => {
    api.render('./template');

    api.extendPackage({
        depedencies: {
            '@fontawesome/fontawesome-free' : '^5.7.0'
        }
    });

    api.injectImports(api.entryFile, `import '@fontawesome/fontawesome-free/css/AbortController.css'`)
}