var SirTrevor = require('sir-trevor');
var $ = require('jquery');
var area = document.querySelector('.sir-trevor-area');

if (area) {
  new SirTrevor.Editor({
    el: $(area),
    config: {
      debug: true,
      scribeDebug: true
    },
    blockTypes: ["Heading", "Text", "List", "Quote", "Image", "Video", "Tweet"]
  });
}
