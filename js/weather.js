function gettingJSON(){
    //Display the forecast
    // Your code here.
    document.querySelector("#forecast").style.display = "block"
    //Set default location if one isn't provided
    //need to know if a location is provided
    let location;
    //location= document.querySelector("#location").value;
    //below means if location does not equal anything (i.e., empty), use Ann Arbor, else location provided

    if (!document.querySelector("#location").value) {
        location="Ann Arbor";
    }
    else {
        location= document.querySelector("#location").value;
    }

    // Your code here. --- you're combining ... have to close out of string and use +x+ 
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format;
    if (!document.querySelector("input[name=temp]:checked")) {
        format="imperial";
    }
    else {
        format= document.querySelector("input[name=temp]:checked").value;
    }

    // Your code here.
    console.log("Format is " + format);

    //set the query
    let query;
    // Your code here.
    //fyi - detroit is hard-coded in there, so I need to update to a wildcard(ish) after ?q=
    //string manipulation
    query="https://api.openweathermap.org/data/2.5/weather?q="+location+"&units="+format+"&appid=755f8bac507581015b67aed10a3d9a33";

    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    // Your code here.

    let loc = document.querySelector("#loc");
    //console.log("Loc is " + loc);



    let temp = document.querySelector("#temp");
   // console.log("Temp is " + temp);



    let tempImg = document.querySelector("#tempImg");
   // console.log("TempImg is " + tempImg)

    $.getJSON(query,function(json){
        //Use returned json to update the values of the three
        //elements in HTML.
        //I would print the JSON to the console
        // Your code here.

        console.log(JSON.stringify(json));
        //set whatever we want to change... for innerhtml
        loc.innerHTML = json["name"];
        //console.log(loc.innerHTML)
        //main is an element for json
        temp.innerHTML = json["main"]["temp"] +" with "+ json["weather"][0]["description"]; //concatenate == + sign
        console.log(json);
        //think about the above as 3 separate blocks
       tempImg.src = json["icon"]
       //
       //link that I will need 0ld.png
    });
}
