ServerEvents.recipes(event => {
    var outputRemovals = [
        'eccentrictome:tome'

    ];

    var inputRemovals = [];

    var idRemovals = [];

    var regexIdRemovals = [];

    outputRemovals.forEach((removal) => {
        event.remove({ output: removal });
    });

    inputRemovals.forEach((removal) => {
        event.remove({ input: removal });
    });

    idRemovals.forEach((removal) => {
        event.remove({ id: removal });
    });

    regexIdRemovals.forEach((removal) => {
        event.remove({ id: removal });
    });
});
