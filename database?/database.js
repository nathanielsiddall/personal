var fileName = "filename" + ".json";
var db = [];

function loadData(fileName) {
    fetch(fileName)
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            data.forEach(function (data) {

                var name = data.name;
                var address = data.address;
                var id = data.id;
                var person =

                    {
                        name: name,
                        address: address,
                        id: id
                    };
                db.push(person);
                console.log(db);

//this is the part where you do something with the data

            })

        })
}
