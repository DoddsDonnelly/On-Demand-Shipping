// JavaScript source code
//The Model
var onDemandShipmentData = [
new onDemandShipment({
    "destination": {
        "contactName": "Jane Doe",
        "companyName": "ABC Company",
        "street": "1235 Pear Ave",
        "city": "Los Angeles",
        "state": "CA",
        "zipCode": "45862",
        "phoneNumber": "8007894594"
    },
    "shipment": {
        "quantity": "44",
        "fedexNumber": "456258",
        "trackingNumber": "9999 9454 2222",
        "cost": "$789.40",
        "shipDate": "3/13/15"
    }
}),
new onDemandShipment({
    "destination": {
        "contactName": "Ted Bob",
        "companyName": "Some Company",
        "street": "7898 Company Ave",
        "city": "Norwood",
        "state": "MA",
        "zipCode": "02062",
        "phoneNumber": "8001237894"
    },
    "shipment": {
        "quantity": "4",
        "fedexNumber": "125325",
        "trackingNumber": "5993 7894 4562",
        "cost": "$58.40",
        "shipDate": "4/13/14"
    }
}),
new onDemandShipment({
    "destination": {
        "contactName": "Tim More",
        "companyName": "ABC llc",
        "street": "789 E Street",
        "city": "Hollywood",
        "state": "CA",
        "zipCode": "17822",
        "phoneNumber": "9871235566"
    },
    "shipment": {
        "quantity": "17",
        "fedexNumber": "",
        "trackingNumber": "9882 4568 1258",
        "cost": "$108.35",
        "shipDate": "1/20/15"
    }
}),
new onDemandShipment({
    "destination": {
        "contactName": "Mike Joe",
        "companyName": "Test Company",
        "street": "1235 Pear Ave",
        "city": "Toko",
        "state": "AM",
        "zipCode": "45862",
        "phoneNumber": "8007894594"
    },
    "shipment": {
        "quantity": "2",
        "fedexNumber": "125325",
        "trackingNumber": "5993 7894 4562",
        "cost": "$789.40",
        "shipDate": "3/13/15"
    }
}),
new onDemandShipment({
    "destination": {
        "contactName": "Lisa Jefferson",
        "companyName": "Long Company Name",
        "street": "78945 Street Place, Ste 456",
        "city": "Honolulu",
        "state": "HI",
        "zipCode": "96819",
        "phoneNumber": "8084567851"
    },
    "shipment": {
        "quantity": "1",
        "fedexNumber": "",
        "trackingNumber": "",
        "cost": "",
        "shipDate": ""
    }
})
];

function onDemandShipment(data) {
    this.destinationContact = data.destination.contactName;
    this.destinationCompany = data.destination.companyName;
    this.destinationStreet = data.destination.street;
    this.destinationCity = data.destination.city;
    this.destinationState = data.destination.state;
    this.destinationZip = data.destination.zipCode;
    this.destinationPhone = data.destination.phoneNumber;
    this.shipmentQuantity = data.shipment.quantity;
    this.shipmentFexEx = data.shipment.fedexNumber;
    this.shipmentTracking = data.shipment.trackingNumber;
    this.shipmentCost = data.shipment.cost;
    this.shipmentShipDate = data.shipment.shipDate;
}

//The ViewModel
var form = function () {
    // Data
    var self = this;
    self.allOnDemandShipments = ko.observableArray(onDemandShipmentData);
    self.productNumber = ko.observable('6390');
    self.productName = ko.observable('WOW Cube');
    self.fabricColor = ko.observable('Black');
    self.fabricWeight = ko.observable('1200d');
    self.art = ko.observable('Page');
    self.quantityOrdered = ko.observable('150');
    //self.tabs = ['History', 'Add New', 'Edit Existing', 'Tracking'];
    //self.chosenTabId = ko.observable();
    self.destinationContactToAdd = ko.observable("");
    self.destinationCompanyToAdd = ko.observable("");
    self.destinationStreetToAdd = ko.observable("");
    self.destinationCityToAdd = ko.observable("");
    self.destinationStateToAdd = ko.observable("");
    self.destinationZipToAdd = ko.observable("");
    self.destinationPhoneToAdd = ko.observable("");
    self.shipmentQuantityToAdd = ko.observable("");
    self.shipmentFedExToAdd = ko.observable("");
    self.shipmentTrackingToAdd = ko.observable("");
    self.shipmentCostToAdd = ko.observable("");
    self.shipmentShipDateToAdd = ko.observable("");

    /*self.totalShipped = ko.pureComputed(function () {
        var total = 0;
        $.each(self.lines(), function () { total += this.subtotal() })
        return total;
    });*/

    self.inventoryItem = ko.pureComputed(function () {
        return this.productNumber() + " " + this.productName() + ", " + this.fabricWeight() + " " + this.fabricColor() + ", " + this.art();
    }, this);

    // Behaviours    
    //self.goToTab = function (tab) { self.chosenTabId(tab); };

    // Operations
    this.removeLine = function () { self.allOnDemandShipments.remove(this) };
    this.addItem = function () {
        if ((this.destinationContactToAdd() != "") && (this.allOnDemandShipments.indexOf(this.destinationContactToAdd()) < 0)) // Prevent blanks and duplicates
        {
            this.allOnDemandShipments.push(new onDemandShipment({
                destination: {
                    contactName: this.destinationContactToAdd(),
                    companyName: this.destinationCompanyToAdd(),
                    street: this.destinationStreetToAdd(),
                    city: this.destinationCityToAdd(),
                    state: this.destinationStateToAdd(),
                    zipCode: this.destinationZipToAdd(),
                    phoneNumber: this.destinationPhoneToAdd()
                },
                shipment: {
                    quantity: this.shipmentQuantityToAdd(),
                    fedexNumber: this.shipmentFedExToAdd(),
                    trackingNumber: this.shipmentTrackingToAdd(),
                    cost: this.shipmentCostToAdd(),
                    shipDate: this.shipmentShipDateToAdd()
                }
            }));
            this.destinationContactToAdd("");
        }
        this.destinationContactToAdd("");
        this.destinationCompanyToAdd("");
        this.destinationStreetToAdd("");
        this.destinationCityToAdd("");
        this.destinationStateToAdd("");
        this.destinationZipToAdd("");
        this.destinationPhoneToAdd("");
        this.shipmentQuantityToAdd("");
        this.shipmentFedExToAdd("");
        this.shipmentTrackingToAdd("");
        this.shipmentCostToAdd("");
        this.shipmentShipDateToAdd("");
    };
}

/*function viewModelb() {
    var self = this;
    self.allInventoryItems = ko.observableArray(inventoryData);
}*/

ko.bindingHandlers.jqButton = {
    init: function (element) {
        $(element).button();
    },
    update: function (element, valueAccessor) {
        var currentValue = valueAccessor();
        $(element).button("option", "disabled", currentValue.enable === false);
    }
};

ko.applyBindings(new form(), document.getElementById("dsForm"));