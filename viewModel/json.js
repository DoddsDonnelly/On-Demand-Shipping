// JavaScript source code
    // Json calls
    var xmlhttp = new XMLHttpRequest();
    var url = "http://doddsdonnelly.github.io/On-Demand-Shipping-Widget/data/onDemandShip.txt";

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            myFunction(myArr);
        }
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function myFunction(arr) {
        var out = "";
        var i;
        for (i = 0; i < arr.length; i++) {
            out += '<details><summary class="dsArrow"><section class="pad2 "><a href="" class="fa fa-pencil dsIcon"></a><a href="" class="fa fa-truck dsIcon"></a><p class="thick dsCompanyName">' + arr[i].companyName
                + '</p><span class="thick dsProductNumber accentText">' + arr[i].product.number
                + '</span><div class="clr"></div></section></summary><div class="l2-color"><div class="chevron"><img class="element" src="images/chevron.png" /><p class="m-font thick overlayContent">' + arr[i].quantity
                + '</p></div><section class="dsText"><p class="thicker dsProductTitle">' + arr[i].product.name
            + '</p><p><span class="thick">Fabric: </span>' + arr[i].fabric.name
            + ' ' + arr[i].fabric.color
            + '</p><p><span class="thick">Art: </span>' + arr[i].art
            + '</p></section><div class="clr"></div></div></details>';
        }
        document.getElementById("onDShipping").innerHTML = out;

        var count = Object.keys(arr).length
        $('.dsCount').prepend(count);


        // Add conditional class name based on support
        $('#onDShipping').addClass($.fn.details.support ? 'details' : 'no-details');

        // Emulate <details> where necessary and enable open/close event handlers
        $('details').details();

        // Bind some example event handlers
        $('details').on({
            'open.details': function () {
                console.log('opened');
            },
            'close.details': function () {
                console.log('closed');
            }
        });

    }