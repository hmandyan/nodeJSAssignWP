//Script to Edit xml file by modifiying its contect and writing it to new xml file
var fs = require("fs"),
parseString = require("xml2js").parseString,
xml2js = require("xml2js");

fs.readFile("../data/OriginalTestXML.xml", "utf-8", function(err, data) {
  if (err) console.log(err);
  console.log(data);
  // we then pass the data to our method here
  parseString(data, function(err, result) {

    console.log("test1");
    if (err) console.log(err);
    // here we log the results of our xml string conversion
    console.log(result);
    
    // save our json to a variable
    var json = result;
    // edit the first node’s company and set it to "Ltd""
    json.root.graph[0].node[0].company = "Ltd";
    console.log(json);
    
    // create a new builder object and then convert
    // our json back to xml.
    var builder = new xml2js.Builder();
    
    // var xml = builder.buildObject(json);
    var xml = builder.buildObject(json)
    console.log(xml);

    fs.writeFile("../data/EditedTestXML.xml", xml, function(err, data) {
      if (err) console.log(err);

      console.log("successfully written and update xml to file");
  });
});
});
