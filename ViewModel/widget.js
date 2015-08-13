// JavaScript source code

//The Model
var onDemandShipmentData = [
new onDemandShipment({
    "companyId": "1",
    "companyName": "ABC Company",
    "inventory": {
        "id": "4",
        "product": {
            "number": "6390",
            "name": "WOW Cube"
        },
        "fabric": {
            "color": "Black",
            "weight": "1200d"
        },
        "art": "Page",
        "quantity": "21"
    }
}),
new onDemandShipment({
    "companyId": "2",
    "companyName": "ABC Company",
    "inventory": {
        "id": "2",
        "product": {
            "number": "6500",
            "name": "Small Square Table Drape"
        },
        "fabric": {
            "color": "Black",
            "weight": "Bronco"
        },
        "art": "785Table",
        "quantity": "43"
    }
}),
new onDemandShipment({
    "companyId": "3",
    "companyName": "Global Trading",
    "inventory": {
        "id": "1",
        "product": {
            "number": "1240",
            "name": "Two Bottle"
        }, "fabric": {
            "color": "Black",
            "weight": "1000d"
        },
        "art": "Cape15",
        "quantity": "37"
    }
}),
new onDemandShipment({
    "companyId": "4",
    "companyName": "Brand Classics",
    "inventory": {
        "id": "34",
        "product": {
            "number": "6500",
            "name": "Small Square Table Drape"
        },
        "fabric": {
            "color": "Orange",
            "weight": "Bronco"
        },
        "art": "ArmTable",
        "quantity": "28"
    }
}),
new onDemandShipment({
    "companyId": "5",
    "companyName": "Some Company",
    "inventory": {
        "id": "65",
        "product": {
            "number": "6390",
            "name": "WOW Cube"
        },
        "fabric": {
            "color": "Black",
            "weight": "1200d"
        },
        "art": "Ramirez",
        "quantity": "27"
    }
}),
new onDemandShipment({
    "companyId": "6",
    "companyName": "Test Name",
    "inventory": {
        "id": "123",
        "product": {
            "number": "1240V",
            "name": "Vintage Two Bottle"
        }, "fabric": {
            "color": "Red",
            "weight": "600d"
        },
        "art": "Brands09",
        "quantity": "34"
    }
}),
new onDemandShipment({
    "companyId": "7",
    "companyName": "Brands Inc",
    "inventory": {
        "id": "123",
        "product": {
            "number": "1260",
            "name": "Six Bottle Salesperson"
        },
        "fabric": {
            "color": "Black",
            "weight": "100d"
        },
        "art": "Spencer",
        "quantity": "41"
    }
}),
new onDemandShipment({
    "companyId": "8",
    "companyName": "785 Trading",
    "inventory": {
        "id": "2",
        "product": {
            "number": "6390",
            "name": "WOW Cube"
        },
        "fabric": {
            "color": "Black",
            "weight": "1000d"
        },
        "art": "Person",
        "quantity": "33"
    }
}),
new onDemandShipment({
    "companyId": "9",
    "companyName": "Retail",
    "inventory": {
        "id": "34",
        "product": {
            "number":
                "1224",
            "name": "Four Bottle Salesperson"
        },
        "fabric": {
            "color": "Black",
            "weight": "600d"
        },
        "art": "Greenwood",
        "quantity": "24"
    }
}),
new onDemandShipment({
    "companyId": "10",
    "companyName": "785 Trading",
    "inventory": {
        "id": "58",
        "product": {
            "number": "6390",
            "name": "WOW Cube"
        },
        "fabric": {
            "color": "Black",
            "weight": "1000d"
        },
        "art": "Spencer",
        "quantity": "33"
    }
})];

function onDemandShipment(data) {
    this.companyName = data.companyName;
    this.productName = data.inventory.product.name;
    this.productNumber = data.inventory.product.number;
    this.fabricColor = data.inventory.fabric.color;
    this.fabricWeight = data.inventory.fabric.weight;
    this.art = data.inventory.art;
    this.quantity = data.inventory.quantity;
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