
module.exports = function(collection) {
    let tagSet = new Set();
    console.log(collection);
    collection.getAll().forEach(function(item) {
      if( "tags" in item.data ) {
        let tags = item.data.tags;

  
        tags = tags.filter(function(item) {

          switch(item) {
            // this list should match the `filter` list in tags.njk
            case "all":
            case "nav":
            case "post":
            case "posts":
              return false;
          }
  
          return true;
        });
  
        for (const tag of tags) {
          console.log(tag)
          tagSet.add(tag);
        }
      }
    });
  
    // returning an array in addCollection works in Eleventy 0.5.3
    return [...tagSet];
  };