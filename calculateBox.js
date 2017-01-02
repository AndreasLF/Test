function convertToFloat(x) {
    if(x == "length"){
        var convertedFloat = parseFloat(document.boxForm.length.value);
        return convertedFloat;
    } else if(x == "width") {
        var convertedFloat = parseFloat(document.boxForm.width.value);
        return convertedFloat;
    } else if(x == "height") {
        var convertedFloat = parseFloat(document.boxForm.height.value);
        return convertedFloat;
    }
}

function calculateSurfaceArea() {
    var l = convertToFloat("length");
    var w = convertToFloat("width");
    var h = convertToFloat("height");

    var result = 2*l*h+2*l*w+2*h*w;
    return result;
}

function calculateVolume() {
    var l = convertToFloat("length");
    var w = convertToFloat("width");
    var h = convertToFloat("height");

    var result = l*h*w;
    return result; 
}

function printSurfaceArea() {
    var result = calculateSurfaceArea();
    document.boxForm.surfaceArea.value = result;
}

function printVolume() {
    var result = calculateVolume();
    document.boxForm.volume.value = result;
}