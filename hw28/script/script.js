(async function () {

    async function sendRequest(link, preference) {
        let promise = new Promise((resolve, reject) => {
            fetch(link, {
                method: preference?.method || 'GET',
                body: preference?.body,
                headers: preference?.headers
            })
                .then((response) => {
                    response.text().then((outcome) => {
                        if (response.ok) {
                            resolve(outcome);
                        } else {
                            reject(outcome);
                        }
                    });
                }, (a) => {
                    reject(a);
                });
        });
        return promise;
    }


    async function getRandom(max, feasibility) {
        return sendRequest(`https://async-demo.herokuapp.com/stable?maxRandom=${max}&prob=${feasibility}`)
    }

    async function createPerson(person, feasibility) {
        const json = await sendRequest(`https://async-demo.herokuapp.com/objects?prob=${feasibility}`, {
            method: 'POST',
            body: JSON.stringify(person)
        });
        return JSON.parse(json);
    }

    async function extendPerson(id, person, feasibility) {
        const json = await sendRequest(`https://async-demo.herokuapp.com/objects/${id}?prob=${feasibility}`, {
            method: 'PATCH',
            body: JSON.stringify(person)
        });
        return JSON.parse(json);
    }

    async function deletePerson(id, feasibility) {
        const json = await sendRequest(`https://async-demo.herokuapp.com/objects/${id}?prob=${feasibility}`, {
            method: 'DELETE'
        });
        return JSON.parse(json);
    }

    await (async function () {
        console.info('It’s a trap!');
        try {
            const random = await getRandom(20, 50);
            for (let i = 0; i < Number(random); i++) {
                console.log('Do. Or do not. There is no try.');
            }
        } catch (e) {
            console.error(e);
        }
    })();

    await (async function () {
        console.info('task 2')
        let person = { firstName: 'Luke', lastName: 'Skywalker' };

        try {
            let outcome = await createPerson(person, 20);
            Object.assign(person, outcome);
        } catch (e) {
            console.error(`Error on creating person: ${e}`);
            return;
        }

        try {
            let outcome = await extendPerson(person.id, { age: 33 }, 20);
            Object.assign(person, outcome);
        } catch (e) {
            console.error(`Error on extending person: ${e}`);
            return;
        }

        try {
            await deletePerson(person, 20);
        } catch (e) {
            console.error(`Error on deleting person: ${e}`);
        }
    })();


    
    await (async function () {
        console.info('task 3')
        const feasibility = 5;
        let persons = [
            { firstName: 'Luke', lastName: 'Skywalker' },
            { firstName: 'Obi-Wan', lastName: 'Kenobi' },
            { firstName: 'Han', lastName: 'Solo' },
        ];

        for (const person of persons) {
            try {
                let outcome = await createPerson(person, feasibility);
                Object.assign(person, outcome);
            } catch (e) {
                console.error(`Error on creating person ${JSON.stringify(person)}: ${e}`);
                return;
            }
        }

        for (const person of persons) {
            let random;
            try {
                random = await getRandom(3, feasibility);
                random = Number(random);
            } catch (e) {
                console.error(`Error on getting random: ${e}`);
                return;
            }

            try {
                let outcome = await extendPerson(person.id, { age: random }, feasibility);
                Object.assign(person, outcome);
            } catch (e) {
                console.error(`Error on extending person ${JSON.stringify(person)}: ${e}`);
                return;
            }
        }

        let random;
        try {
            random = await getRandom(3, feasibility);
            random = Number(random);
        } catch (e) {
            console.error(`Error on getting random: ${e}`);
            return;
        }

        for (let i = 0; i < persons.length; i++) {
            if (i !== random) {
                try {
                    await deletePerson(persons[i].id, feasibility);
                } catch (e) {
                    console.error(`Error on deleting person ${JSON.stringify(persons[i])}: ${e}`);
                    return;
                }
            }
        }
    })();

})();