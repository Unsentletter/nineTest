module.exports = (app) => {
  app.get('/', (req, res) => {

   var dataReceived = req.payload;

    let emptyArray = {};
    let thisObject = [];
    let payload = dataReceived.payload;

    function isJSON(payload) {
      try {
        return (JSON.parse(payload) && !!str);
      } catch (err) {
        return false;
      }
    }

    if(isJSON(dataReceived) === true) {
      createNewJSON(payload)
    } else {
      res.status(400).send("Could not decode request: JSON parsing failed");
    }

    function createNewJSON(payload) {
      for(let i=0; i < payload.length; i++) {

        if(payload[i].drm === true && payload[i].episodeCount > 0) {
          Object.assign(emptyArray, {
            image: payload[i].image.showImage,
            slug: payload[i].slug,
            title: payload[i].title
          });

          thisObject.push(emptyArray);
        }
      }
    }



    res.send(thisObject);

  });
};