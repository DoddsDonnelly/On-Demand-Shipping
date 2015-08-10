// JavaScript source code

    //The Model
    var onDemandShipmentData = [
    new onDemandShipment({ companyName: "Joe", product: { number: "6390", name: "WOW Cube" }, fabric: { color: "Black", weight: "1200d" }, art: "Page", quantity: "21" }),
    new onDemandShipment({ companyName: "Todd", product: { number: "6390", name: "WOW Cube" }, fabric: { color: "Black", weight: "1200d" }, art: "Chapman", quantity: "43" }),
    new onDemandShipment({ companyName: "Lenard", product: { number: "6390", name: "WOW Cube" }, fabric: { color: "Black", weight: "1200d" }, art: "Haggard", quantity: "37" }),
    new onDemandShipment({ companyName: "John", product: { number: "6390", name: "WOW Cube" }, fabric: { color: "Black", weight: "1200d" }, art: "Armstrong", quantity: "28" }),
    new onDemandShipment({ companyName: "Mark", product: { number: "6390", name: "WOW Cube" }, fabric: { color: "Black", weight: "1200d" }, art: "Ramirez", quantity: "27" }),
    new onDemandShipment({ companyName: "Cameron", product: { number: "6390", name: "WOW Cube" }, fabric: { color: "Black", weight: "1200d" }, art: "Philip", quantity: "34" }),
    new onDemandShipment({ companyName: "Andre", product: { number: "6390", name: "WOW Cube" }, fabric: { color: "Black", weight: "1200d" }, art: "Spencer", quantity: "41" }),
    new onDemandShipment({ companyName: "Heath", product: { number: "6390", name: "WOW Cube" }, fabric: { color: "Black", weight: "1200d" }, art: "Person", quantity: "33" }),
    new onDemandShipment({ companyName: "Mark", product: { number: "6390", name: "WOW Cube" }, fabric: { color: "Black", weight: "1200d" }, art: "Greenwood", quantity: "24" }),
    new onDemandShipment({ companyName: "Allen", product: { number: "6390", name: "WOW Cube" }, fabric: { color: "Black", weight: "1200d" }, art: "Spencer", quantity: "33" })];

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