// scoped-css.config.js
module.exports = {
  inputDir: 'src', // Write all your vanilla content here
  outputDir: 'dist', // This is where the converted files will be created
  dontFlatten: false, // Keep compound selectors rather than BEM-style flattening
  useIDs: true, // Use IDs (1, 2, 3, 4) instead of hash (3d0ccd)
  dontHashFirst: false, // The first scope of a certain type doesn't get an ID or hash
  mergeCss: false, // Merge all the CSS into one file
  writeRuntimeMap: false, // Write the map needed for runtime auto-BEM
  copyFiles: true, //Copy rest of files (not html, css, jsx or tsx files)
  contextSymbol: ':', // Stop the path shortener from affecting content with this symbol in class
  teamRepo: 'team-repo', // Scan team files for usage and only enable hash/ID if module name is already used
  stripClasses: true, //Strip classes that are never targetted with CSS.
  flattenCombis: [], //Flatten combinators, e.g. > becomes _a_
  overrideConfig: {},
};
