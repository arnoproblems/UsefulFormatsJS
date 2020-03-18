// JS String Formats

// ------------------------------------------------------------------------------------------------------- //
//Money Formatting

// Input ==> '28629702'
function addCents(num) {
    return num.substring(0,num.length-2)+"."+num.substring(num.length-2);
};
// Output <== '286297.02'

// Input ==> '28629702'
function addComas(num) {
    return ('' + num).replace(
        /(\d)(?=(?:\d{3})+(?:\.|$))|(\.\d\d?)\d*$/g, 
        function(m, s1, s2){
        return s2 || (s1 + ',');
        }
    );
}
// Output <== '28,629,702'

// Input ==> '28629702'
function formatMoney(num) {
    let numWithDec = addCents(num);
    return addComas(numWithDec);
};
// Output <== 286,297.02

// ------------------------------------------------------------------------------------------------------- //
// Date Formatting

// Input ==> '20200318'
var formatYYYYMMDD = (date) => {
    var y = date.substring(0,4);
    var m = date.substring(4,6)
    var d = date.substring(6,8)
    var fullDate = []
    fullDate.push(m,d,y);

    return fullDate.join("-");
}
// Output <== 03-18-2020?

