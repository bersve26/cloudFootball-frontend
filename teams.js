$(document).ready(function() {
    $.ajax({
        url: "http://52.32.171.17:8080/teams/"
    }).then(function(data) {
        var parsed = JSON.parse(data);
        var arr = [];
        for(var x in parsed){
            arr.push(parsed[x]);
        }
        jQuery.each( parsed.results, function (i, val){
            $('#opt').append("\<option value=" + JSON.stringify(val.id) + '\>' + JSON.stringify(val.name) + '\</option\>');
            $('#opt2').append("\<option value=" + JSON.stringify(val.id) + '\>' + JSON.stringify(val.name) + '\</option\>');
            console.log(JSON.stringify(val.id) + ", " + JSON.stringify(val.name));
        });
    });
});