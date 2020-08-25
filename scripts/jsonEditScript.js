// Script to read JSON file and modifying its contents and converting the JSON to new XML file
 "use strict";
  const fs = require("fs");
  const data = JSON.parse(fs.readFileSync("./data/OriginalTestJson.json"));
  console.log(data);

  //changing one of the employee name
  data[1].name = "Robert";
  var name1 = data[1].name;
  
  //Updating the json File
  fs.writeFileSync("./OriginalTestJson.json",JSON.stringify(data, null, 4));

  //Converting JSON file to xml file
  var js2xmlparser = require("js2xmlparser");
  console.log(js2xmlparser.parse("Emp",data));

  //Creating ne xml after editing the JSON file
  var xml =js2xmlparser.parse("Emp",data)
  fs.writeFile("./data/EditedJsonToXML.xml", xml, function(err, data) {
    if (err) console.log(err);
      console.log("successfully written and updated contetnts to new xml file");
  });