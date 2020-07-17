
function drawIndiaMap(selector){
    
    var width = 300, height = 332, scale = 580, center = [82.8, 23.4];
    var source = "js/india_state_2019.json";
    var svg = d3.select(selector)
        .append("svg")
        .attr("class", "india-map")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("preserveAspectRatio", "xMinYMin")

    var g = svg.append("g")

    // var tooltip = svg.append("foreignObject")
    //     .attr("x", 10)
    //     .attr("y", 10)
    //     .attr("width", "100px")
    //     .attr("height", "1px")
    //     .attr("class", "svg-tooltip")

    //     tooltip.append('xhtml:div')
    //     .attr( 'class', 'tooltip')
    //     .text("Andhaman & Nicobar Island")

    var city = svg.append("g")
        .append("circle")
        .attr("class","city mumbai")
        .attr("cx", "50")
        .attr("cy", "215")
        .attr("r", "3")
        .attr("fill", "#333333")
    
    svg.append("text")
        .attr("class","maptext mumbaitxt")
        .attr("transform", "translate(55,220)")
        .attr("font-family", "Rubik")
        .attr("font-size", ".8em")
        .attr("fill", "none")
        .text("Mumbai")

    var formatComma = d3.format(",")

    var projection = d3.geoMercator()
    .scale(scale)
    .center(center)
    .translate([width / 2, height / 2])

    var geoPath = d3.geoPath()
    .projection(projection)

    d3.json(source, function(error, mapboundary){
        
        var statewise = topojson.feature(mapboundary, mapboundary.objects.collection).features;
        
        // var stateCentroid = centroids(statewise);
        g.selectAll(".state")
            .data(statewise).enter().append("path")
                .attr("d", geoPath)
                .attr("class", function(d,i){
                    var statename = d.properties.ST_NM;
                    return "state "+ statename.replace(/ /g, "").toLowerCase() 
                })
                .attr("stroke", "#FFFFFF")
                .attr("stroke-width", 0.2)
                .attr('fill', "#666666")

        var text = g.selectAll("text")
            .data(statewise)
            .enter()
            .append("foreignObject")
            .attr("x", function(d) { 
                var centroid = geoPath.centroid(d);
                return centroid[0]+25;
            })
            .attr("y", function(d) { 
                var centroid = geoPath.centroid(d);
                return centroid[1];
            })
            .attr("width", "100px")
            .attr("height", "1px")
            .attr("class", "svg-tooltip")
            .append('xhtml:div')
            .attr("class", function(d,i){
                var statename = d.properties.ST_NM;
                return "maptext "+ statename.replace(/ /g, "").toLowerCase()+ "txt"
            })
            .text(function(d) {
                return d.properties.ST_NM;
            });
        // var text = g.selectAll("text")
        //     .data(statewise)
        //     .enter()
        //     .append("text")
        //     .attr("fill", "none")
        //     .attr("font-family", "Rubik")
        //     .attr("font-size", ".8em")
        //     .attr("class", function(d,i){
        //         var statename = d.properties.ST_NM;
        //         return "maptext "+ statename.replace(/ /g, "").toLowerCase()+ "txt"
        //     })
        //     .attr("transform", function(d) { 
        //         var centroid = geoPath.centroid(d);
        //         return "translate(" + (centroid[0]+25) + "," + centroid[1] + ")"
        //     })
        //     .attr("text-anchor", "middle")
        //     .attr("dy", ".35em")
        //     .text(function(d) {
        //         return d.properties.ST_NM;
        //     });
                
    
    });//d3.json

} // end of drawIndiaMap()