const dateFilter = require("./_filters/date-filter.js");

module.exports = function(config) {
  config.addFilter("dateFilter", dateFilter);

  config.setTemplateFormats([
    "md",
    "css",
    "png"
  ])

  config.setLiquidOptions({
    dynamicPartials: true
  });
};
