// JavaScript source code

   /* //The Model
    var onDemandShipmentData = [
    new onDemandShipment({ companyName: "ABC Company", product: { number: "6390", name: "WOW Cube" }, fabric: { color: "Black", weight: "1200d" }, art: "Page", quantity: "21" }),
    new onDemandShipment({ companyName: "ABC Company", product: { number: "6500", name: "Small Square Table Drape" }, fabric: { color: "Black", weight: "Bronco" }, art: "785Table", quantity: "43" }),
    new onDemandShipment({ companyName: "Global Trading", product: { number: "1240", name: "Two Bottle" }, fabric: { color: "Black", weight: "1000d" }, art: "Cape15", quantity: "37" }),
    new onDemandShipment({ companyName: "Brand Classics", product: { number: "6500", name: "Small Square Table Drape" }, fabric: { color: "Orange", weight: "Bronco" }, art: "ArmTable", quantity: "28" }),
    new onDemandShipment({ companyName: "Some Company", product: { number: "6390", name: "WOW Cube" }, fabric: { color: "Black", weight: "1200d" }, art: "Ramirez", quantity: "27" }),
    new onDemandShipment({ companyName: "Test Name", product: { number: "1240V", name: "Vintage Two Bottle" }, fabric: { color: "Red", weight: "600d" }, art: "Brands09", quantity: "34" }),
    new onDemandShipment({ companyName: "Brands Inc", product: { number: "1260", name: "Six Bottle Salesperson" }, fabric: { color: "Black", weight: "100d" }, art: "Spencer", quantity: "41" }),
    new onDemandShipment({ companyName: "785 Trading", product: { number: "6390", name: "WOW Cube" }, fabric: { color: "Black", weight: "1000d" }, art: "Person", quantity: "33" }),
    new onDemandShipment({ companyName: "Retail", product: { number: "1224", name: "Four Bottle Salesperson" }, fabric: { color: "Black", weight: "600d" }, art: "Greenwood", quantity: "24" }),
    new onDemandShipment({ companyName: "785 Trading", product: { number: "6390", name: "WOW Cube" }, fabric: { color: "Black", weight: "1000d" }, art: "Spencer", quantity: "33" })];

    function onDemandShipment(data) {
        this.companyName = data.companyName;
        this.productName = data.product.name;
        this.productNumber = data.product.number;
        this.fabricColor = data.fabric.color;
        this.fabricWeight = data.fabric.weight;
        this.art = data.art;
        this.quantity = data.quantity;
    } */


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

	    function onDemandShipment(data) {
        this.companyName = data.companyName;
        this.productName = data.product.name;
        this.productNumber = data.product.number;
        this.fabricColor = data.fabric.color;
        this.fabricWeight = data.fabric.weight;
        this.art = data.art;
        this.quantity = data.quantity;
    }

    //The ViewModel
    function viewModel() {
        // Data
        var self = this;
        self.allOnDemandShipments = ko.observableArray(onDemandShipmentData);
        self.companyNameToAdd = ko.observable("");
        self.productNameToAdd = ko.observable("");
        self.productNumberToAdd = ko.observable("");
        self.fabricColorToAdd = ko.observable("");
        self.fabricWeightToAdd = ko.observable("");
        self.artToAdd = ko.observable("");
        self.quantityToAdd = ko.observable("");

        // Operations
        this.removeLine = function () { self.allOnDemandShipments.remove(this) };
        this.addItem = function () {
            if ((this.companyNameToAdd() != "") && (this.allOnDemandShipments.indexOf(this.companyNameToAdd()) < 0)) // Prevent blanks and duplicates
            {
                this.allOnDemandShipments.push(new onDemandShipment({ companyName: this.companyNameToAdd(), product: { number: this.productNumberToAdd(), name: this.companyNameToAdd() }, fabric: { color: this.fabricColorToAdd(), weight: this.fabricWeightToAdd() }, art: this.artToAdd(), quantity: this.quantityToAdd() }));
                this.companyNameToAdd("");
            }
            this.companyNameToAdd("");
            this.productNameToAdd("");
            this.productNumberToAdd("");
            this.fabricColorToAdd("");
            this.fabricWeightToAdd("");
            this.artToAdd("");
            this.quantityToAdd("");
        };
    }

    ko.bindingHandlers.jqButton = {
        init: function (element) {
            $(element).button();
        },
        update: function (element, valueAccessor) {
            var currentValue = valueAccessor();
            $(element).button("option", "disabled", currentValue.enable === false);
        }
    };

    ko.applyBindings(new viewModel());