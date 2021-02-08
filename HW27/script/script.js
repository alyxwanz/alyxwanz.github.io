(function () {

    // task 1
    (function () {
        let request = new XMLHttpRequest();
        request.open('get', 'http://async-demo.herokuapp.com/unstable?maxRandom=20&prob=50');
        request.onload = function () {
            if (request.status >= 200 && request.status < 300) {
                for (let i = 0; i < Number(request.response); i++) {
                    console.log('Hello world');
                }
            } else {
                console.error(request.response);
            }
        };
        request.send();
    })();

    // task 2
    (function () {

        function sendJsonRequest(url, httpMethod, payload, onSuccess, onError) {
            let request = new XMLHttpRequest();
            request.open(httpMethod, url);

            request.onload = function () {
                if (request.status >= 200 && request.status < 300) {
                    if (onSuccess) {
                        let data
                        try {
                            data = request.response === '' ? null : JSON.parse(request.response);
                        } catch (e) {
                            useCallback(onError, `Incorrect data returned form server ${request.response}`);
                        }
                        useCallback(onSuccess, data);
                    }
                } else {
                    useCallback(onError, request.response);
                }
            };

            request.onError = function () {
                useCallback(onError, request.response);
            };

            if (payload) {
                let json = JSON.stringify(payload);
                request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                request.send(json);
            } else {
                request.send();
            }


            function useCallback(callback, data) {
                if (callback) {
                    callback(data);
                }
            }

        }

        function newPerson(person, onSuccess, onError) {
            sendJsonRequest('https://async-demo.herokuapp.com/objects?prob=20', 'POST', person, onSuccess, onError);
        }


        function spreadPerson(id, person, onSuccess, onError) {
            sendJsonRequest(`https://async-demo.herokuapp.com/objects/${id}?prob=20`, 'PATCH', person, onSuccess, onError);
        }

        function deletePerson(id, onSuccess, onError) {
            sendJsonRequest(`https://async-demo.herokuapp.com/objects/${id}?prob=20`, 'DELETE', null, onSuccess, onError);
        }


        let person = { firstName: 'Anakin', lastName: 'skywalker' };

        newPerson(person, (response1) => {
            Object.assign(person, response1);
            console.log(`Person created: ${JSON.stringify(person)}`);

            spreadPerson(person.id, { age: 255 }, (response2) => {
                Object.assign(person, response2);
                console.log(`Person spreaded: ${JSON.stringify(person)}`);

                deletePerson(person.id, (response3) => {
                    console.log(`Person deleted: ${JSON.stringify(person)}`);
                }, (error) => {
                    console.error(`Error on deleting person: ${error}`);
                })

            }, (error) => {
                console.error(`Error on spreading person: ${error}`);
            })


        }, (error) => {
            console.error(`Error on creating person: ${error}`);
        });


    })();

})();