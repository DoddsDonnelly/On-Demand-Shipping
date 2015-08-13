// JavaScript source code

//The Model
var onDemandShipmentData = [
new onDemandShipment({
    "companyName": "ABC Company",
    "inventoryItems": {
        "item": {
            "product": {
                "number": "6390",
                "name": "WOW Cube",
            },
            "fabric": {
                "color": "Black",
                "weight": "1200d"
            },
            "art": "Page",
            "quantity": "21",
            "destinations": {
                "destination": {
                    "contactName": "Lisa Jefferson",
                    "companyName": "Long Company Name",
                    "street": "78945 Street Place, Ste 456",
                    "city": "Honolulu",
                    "state": "HI",
                    "zipCode": "96819",
                    "phoneNumber": "8084567851",
                    "shipments": {
                        "shipment": {
                            "quantity": "11",
                            "fedexNumber": "Shipper",
                            "trackingNumber": "",
                            "cost": "",
                            "shipDate": ""
                        }
                    }
                },
                "destination": {
                    "contactName": "",
                    "companyName": "Company Only",
                    "street": "1235 Pear Ave",
                    "city": "Los Angeles",
                    "state": "CA",
                    "zipCode": "45862",
                    "phoneNumber": "8007894594",
                    "shipments": {
                        "shipment": {
                            "quantity": "44",
                            "fedexNumber": "456258",
                            "trackingNumber": "9999 9454 2222",
                            "cost": "$789.40",
                            "shipDate": "3/13/15"
                        }
                    }
                },
                "destination": {
                    "contactName": "Jane More",
                    "companyName": "ABC llc",
                    "street": "789 E Street",
                    "city": "Hollywood",
                    "state": "CA",
                    "zipCode": "17822",
                    "phoneNumber": "9871235566",
                    "shipments": {
                        "shipment": {
                            "quantity": "17",
                            "fedexNumber": "Shipper",
                            "trackingNumber": "9882 4568 1258",
                            "cost": "$108.35",
                            "shipDate": "1/20/15"
                        }
                    }
                },
                "destination": {
                    "contactName": "Ted Bob",
                    "companyName": "Some Company",
                    "street": "7898 Company Ave",
                    "city": "Norwood",
                    "state": "MA",
                    "zipCode": "02062",
                    "phoneNumber": "8001237894",
                    "shipments": {
                        "shipment": {
                            "quantity": "4",
                            "fedexNumber": "125325",
                            "trackingNumber": "5993 7894 4562",
                            "cost": "$58.40",
                            "shipDate": "4/13/14"
                        }
                    }
                },
                "destination": {
                    "contactName": "John Doe",
                    "companyName": "",
                    "street": "528 East 85nd Street",
                    "city": "New York",
                    "state": "NY",
                    "zipCode": "10022",
                    "phoneNumber": "9162585566",
                    "shipments": {
                        "shipment": {
                            "quantity": "1",
                            "fedexNumber": "78945",
                            "trackingNumber": "5682 2531 1258",
                            "cost": "$18.35",
                            "shipDate": "3/20/14"
                        }
                    }
                }
            }
        }
    }
})
];

function onDemandShipment(data) {
    this.companyName = data.companyName;
    this.productName = data.inventoryItems.item.product.name;
    this.productNumber = data.inventoryItems.item.product.number;
    this.fabricColor = data.inventoryItems.item.fabric.color;
    this.fabricWeight = data.inventoryItems.item.fabric.weight;
    this.art = data.inventoryItems.item.art;
    this.quantity = data.inventoryItems.item.quantity;
    this.destinationContactName = data.inventoryItems.item.destinations.destination.contactName;
    this.destinationCompanyName = data.inventoryItems.item.destinations.destination.companyName;
    this.destinationStreet = data.inventoryItems.item.destinations.destination.street;
    this.destinationCity = data.inventoryItems.item.destinations.destination.city;
    this.destinationState = data.inventoryItems.item.destinations.destination.state;
    this.destinationZipCode = data.inventoryItems.item.destinations.destination.zipCode;
    this.destinationPhoneNumber = data.inventoryItems.item.destinations.destination.phoneNumber;
    this.shipmentQuantity = data.inventoryItems.item.destinations.destination.shipments.shipment.quantity;
    this.shipmentFedExNumber = data.inventoryItems.item.destinations.destination.shipments.shipment.fedexNumber;
    this.shipmentTrackingNumber = data.inventoryItems.item.destinations.destination.shipments.shipment.trackingNumber;
    this.shipmentCost = data.inventoryItems.item.destinations.destination.shipments.shipment.cost;
    this.shipmentShipDate = data.inventoryItems.item.destinations.destination.shipments.shipment.shipDate;
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
    self.destinationContactNameToAdd = ko.observable("");
    self.destinationCompanyNameToAdd = ko.observable("");
    self.destinationStreetToAdd = ko.observable("");
    self.destinationCityToAdd = ko.observable("");
    self.destinationStateToAdd = ko.observable("");
    self.destinationZipCodeToAdd = ko.observable("");
    self.destinationPhoneNumberToAdd = ko.observable("");
    self.shipmentQuantityToAdd = ko.observable("");
    self.shipmentFedExNumberToAdd = ko.observable("");
    self.shipmentTrackingNumberToAdd = ko.observable("");
    self.shipmentCostToAdd = ko.observable("");
    self.shipmentShipDateToAdd = ko.observable("");

    // Operations
    this.removeLine = function () { self.allOnDemandShipments.remove(this) };
    this.addItem = function () {
        if ((this.companyNameToAdd() != "") && (this.allOnDemandShipments.indexOf(this.companyNameToAdd()) < 0)) // Prevent blanks and duplicates
        {
            this.allOnDemandShipments.push(new onDemandShipment({
                companyName: this.companyNameToAdd(),
                inventoryItems: {
                    items: {
                        product: {
                            number: this.productNumberToAdd(),
                            name: this.companyNameToAdd()
                        },
                        fabric: {
                            color: this.fabricColorToAdd(),
                            weight: this.fabricWeightToAdd()
                        },
                        art: this.artToAdd(),
                        quantity: this.quantityToAdd(),
                        destinations: {
                            destination: {
                                contactName: this.destinationContactNameToAdd(),
                                companyName: this.destinationCompanyNameToAdd(),
                                street: this.destinationStateToAdd(),
                                city: this.destinationCityToAdd(),
                                state: this.destinationStateToAdd(),
                                zipCode: this.destinationZipCodeToAdd(),
                                phoneNumber: this.destinationPhoneNumberToAdd(),
                                shipments: {
                                    shipment: {
                                        quantity: this.shipmentQuantityToAdd(),
                                        fedexNumber: this.shipmentFedExNumberToAdd(),
                                        trackingNumber: this.shipmentTrackingNumberToAdd(),
                                        cost: this.shipmentCostToAdd(),
                                        shipdate: this.shipmentShipDateToAdd()
                                    }
                                }
                            }
                        }
                    }
                }
            }));
            this.companyNameToAdd("");
        }
        this.companyNameToAdd("");
        this.productNameToAdd("");
        this.productNumberToAdd("");
        this.fabricColorToAdd("");
        this.fabricWeightToAdd("");
        this.artToAdd("");
        this.quantityToAdd("");
        this.destinationContactNameToAdd("");
        this.destinationCompanyNameToAdd("");
        this.destinationStreetToAdd("");
        this.destinationCityToAdd("");
        this.destinationStateToAdd("");
        this.destinationZipCodeToAdd("");
        this.destinationPhoneNumberToAdd("");
        this.shipmentQuantityToAdd("");
        this.shipmentFedExNumberToAdd("");
        this.shipmentTrackingNumberToAdd("");
        this.shipmentCostToAdd("");
        this.shipmentShipDateToAdd("");
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