// Typescript Arrow Function //
var Order = function (amount, description) {
    if (amount === void 0) { amount = 100; }
    if (description === void 0) { description = "Standing order amount $ "; }
    var message = description + amount;
    alert(message);
};
