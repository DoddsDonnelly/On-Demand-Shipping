// JavaScript source code

var dsForm;


// On Demand Shipment ViewModel (working)
function onDemandShipmentViewModel(data) {
    var onDemandShipmentMapping = {
        'destination': {
            'contactName': {
                'create': function (options) {
                    return ko.observable(options.data);
                }
            },
            'companyName': {
                'create': function (options) {
                    return ko.observable(options.data);
                }
            },
            'street': {
                'create': function (options) {
                    return ko.observable(options.data);
                }
            },
            'city': {
                'create': function (options) {
                    return ko.observable(options.data);
                }
            },
            'state': {
                'create': function (options) {
                    return ko.observable(options.data);
                }
            },
            'zipCode': {
                'create': function (options) {
                    return ko.observable(options.data);
                }
            },
            'phoneNumber': {
                'create': function (options) {
                    return ko.observable(options.data);
                }
            }
        },
        'shipment': {
            'quantity': {
                'create': function (options) {
                    return ko.observable(options.data);
                }
            },
            'fedexNumber': {
                'create': function (options) {
                    return ko.observable(options.data);
                }
            },
            'trackingNumber': {
                'create': function (options) {
                    return ko.observable(options.data);
                }
            },
            'cost': {
                'create': function (options) {
                    return ko.observable(options.data);
                }
            },
            'shipDate': {
                'create': function (options) {
                    return ko.observable(options.data);
                }
            }
        }
    };

    ko.mapping.fromJS(data, onDemandShipmentMapping, this);
}

//Form ViewModel (working)
function dsFormViewModel(data) {
    var companyMapping = {
        'copy': ['product', 'fabric', 'art', 'quantity'],
        'onDemandShipment': {
            key: function (data) {
                return ko.utils.unwrapObservable(data.onDemandShipmentId);
            },
            create: function (options) {
                return new onDemandShipmentViewModel(options.data);
            }
        }
    };

    ko.mapping.fromJS(data, companyMapping, this);
}

$.ajax({
    url: '/echo/json/',
    type: 'POST',
    data: {
        json: JSON.stringify({
            companyName: 'ABC Company',
            inventory: [
            {
                product: {
                    number: '6390',
                    name: 'WOW Cube'
                },
                fabric: {
                    color: 'Black',
                    weight: '1200d'
                },
                art: 'Page',
                quantity: '150',
                onDemandShipment: [
                {
                    onDemandShipmentId: 1,
                    destination: {
                        contactName: "Jane Doe",
                        companyName: "ABC Company",
                        street: "1235 Pear Ave",
                        city: "Los Angeles",
                        state: "CA",
                        zipCode: "45862",
                        phoneNumber: "8007894594"
                    },
                    shipment: {
                        quantity: "44",
                        fedexNumber: "456258",
                        trackingNumber: "9999 9454 2222",
                        cost: "$789.40",
                        shipDate: "3/13/15"
                    }
                },
                {
                    onDemandShipmentId: 2,
                    destination: {
                        contactName: "Ted Bob",
                        companyName: "Some Company",
                        street: "7898 Company Ave",
                        city: "Norwood",
                        state: "MA",
                        zipCode: "02062",
                        phoneNumber: "8001237894"
                    },
                    shipment: {
                        quantity: "4",
                        fedexNumber: "125325",
                        trackingNumber: "5993 7894 4562",
                        cost: "$58.40",
                        shipDate: "4/13/14"
                    }
                },
                {
                    onDemandShipmentId: 3,
                    destination: {
                        contactName: "Tim More",
                        companyName: "ABC llc",
                        street: "789 E Street",
                        city: "Hollywood",
                        state: "CA",
                        zipCode: "17822",
                        phoneNumber: "9871235566"
                    },
                    shipment: {
                        quantity: "17",
                        fedexNumber: "",
                        trackingNumber: "9882 4568 1258",
                        cost: "$108.35",
                        shipDate: "1/20/15"
                    }
                },
                {
                    onDemandShipmentId: 4,
                    destination: {
                        contactName: "Mike Joe",
                        companyName: "Test Company",
                        street: "1235 Pear Ave",
                        city: "Toko",
                        state: "AM",
                        zipCode: "45862",
                        phoneNumber: "8007894594"
                    },
                    shipment: {
                        quantity: "2",
                        fedexNumber: "125325",
                        trackingNumber: "5993 7894 4562",
                        cost: "$789.40",
                        shipDate: "3/13/15"
                    }
                },
                {
                    onDemandShipmentId: 5,
                    destination: {
                        contactName: "Lisa Jefferson",
                        companyName: "Long Company Name",
                        street: "78945 Street Place, Ste 456",
                        city: "Honolulu",
                        state: "HI",
                        zipCode: "96819",
                        phoneNumber: "8084567851"
                    },
                    shipment: {
                        quantity: "1",
                        fedexNumber: "",
                        trackingNumber: "",
                        cost: "",
                        shipDate: ""
                    }
                }
                ]
            }]
        })
    },
    success: function (response) {
        dsForm = new dsFormViewModel(response);
        ko.applyBindings(dsForm, $('#dsForm').get(0));
    },
    error: function (response) {
        alert('something went wrong: ' + response);
    }
});