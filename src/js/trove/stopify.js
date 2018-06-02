({
  requires: [
  ],
  nativeRequires: [
    'stopify'
  ],
  provides: {},
  theModule: function (RUNTIME, NAMESPACE, uri, Stopify) {

    function stopify(code) {

      const defaultOpts = {
            getters: false,
            compileFunction: true,
            debug: false,
            captureMethod: 'lazy',
            newMethod: 'wrapper',
            es: 'sane',
            hofs: 'builtin',
            jsArgs: 'simple',
            requireRuntime: false,
            noWebpack: true,
            knownFlats: [ "R.gF" ]
      };

      return Stopify.compileFunction(code, defaultOpts);
    }


    return RUNTIME.makeObject({
      'provide-plus-types': RUNTIME.makeObject({
        types: RUNTIME.makeObject({}),
        values: RUNTIME.makeObject({
          stopify: RUNTIME.makeFunction(stopify, "stopify")
        })
      })
    })
  }
})