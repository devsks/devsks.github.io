var languages = ["C","C++","JS","JAVA","Python","Android","HTML5","PHP"];
d3.selectAll(".service-box").data(languages).append("H3").text(function(d){
    return d;
});
