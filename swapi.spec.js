const request = require('supertest')

test('Deve visualizar informações de cadastro, quando buscar por uma pessoa existente', async ()=> {
    // https://swapi.dev/api
    // /people/1

    const resposta = await request('https://swapi.dev/api').get('/people/1');

    //verifica se o status da requisição está retornando verdadeira com status 200
    expect(resposta.status).toBe(200);
    // Verificando a garantia de essas informações exixtem, não sendo indefinida
    expect(resposta.body.films).toBeDefined();
    //Verificando se recupera no corpo de conteúdo, um ou mais veículos (aeronaves)
    expect(resposta.body.vehicles.length).toBeGreaterThan(0);
    //Verificando se recupera um conteúdo específico, por exemplo o nome da primeira pessoa
    expect(resposta.body.name).toBe('Luke Skywalker');

});

test('Deve receber uma mensagem de erro, quando buscar por uma pessoa inexistente', async ()=> {
    const resposta = await request('https://swapi.dev/api').get('/people/9999');
    //verifica se o status da requisição está retornando 
    expect(resposta.status).toBe(404);
    //Verifica o valor do corpo vazio não encontrado
    expect(resposta.body.detail).toBe('Not found');
    //Podemos verificar também o corpo vazio como objeto
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });
});

test('Deve visualizar informações de um planeta existente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/planets/1');
    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Tatooine');
    expect(resposta.body.climate).toBeDefined();
    expect(resposta.body.terrain).toBeDefined();
});

test('Deve receber uma mensagem de erro, quando buscar por um planeta inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/planets/9999');
    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
});

test('Deve visualizar informações de uma nave existente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/starships/9');
    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Death Star');
    expect(resposta.body.model).toBeDefined();
    expect(resposta.body.manufacturer).toBeDefined();
});

test('Deve receber uma mensagem de erro, quando buscar por uma nave inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/starships/9999');
    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
});

test('Deve visualizar informações de um filme existente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/films/1');
    expect(resposta.status).toBe(200);
    expect(resposta.body.title).toBe('A New Hope');
    expect(resposta.body.director).toBeDefined();
    expect(resposta.body.producer).toBeDefined();
});

test('Deve receber uma mensagem de erro, quando buscar por um filme inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/films/9999');
    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
});

test('Deve visualizar informações de uma espécie existente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/species/1');
    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Human');
    expect(resposta.body.classification).toBeDefined();
    expect(resposta.body.language).toBeDefined();
});

test('Deve receber uma mensagem de erro, quando buscar por uma espécie inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/species/9999');
    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
});

