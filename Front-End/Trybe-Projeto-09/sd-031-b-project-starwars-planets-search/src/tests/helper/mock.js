const mockApi = () => {

  return Promise.resolve({

    json: () =>

    Promise.resolve({

      results: [
        {
          name: 'Dagobah',
          rotation_period: '23',
          orbital_period: '341',
          diameter: '8900',
          climate: 'murky',
          gravity: 'N/A',
          terrain: 'swamp, jungles',
          surface_water: '8',
          population: 'unknown',
          films: [
            'https://swapi.dev/api/films/2/',
            'https://swapi.dev/api/films/3/',
            'https://swapi.dev/api/films/6/',
          ],
        },
        {
          name: 'Naboo',
          rotation_period: '26',
          orbital_period: '312',
          diameter: '12120',
          climate: 'temperate',
          gravity: 'gravity_Naboo',
          terrain: 'grassy hills, swamps, forests, mountains',
          surface_water: 'surface_water_Naboo',
          population: '4500000000',
          films: [
            'https://swapi.dev/api/films/3/',
            'https://swapi.dev/api/films/4/',
            'https://swapi.dev/api/films/5/',
            'https://swapi.dev/api/films/6/',
          ],
        },
            {
              name: 'Bespin',
              rotation_period: '12',
              orbital_period: '5110',
              diameter: '118000',
              climate: 'temperate',
              gravity: '1.5 (surface), 1 standard (Cloud City)',
              terrain: 'gas giant',
              surface_water: '0',
              population: '6000000',
              films: ['https://swapi.dev/api/films/12/'],
            },
          ],
        }),
    });
  };

  export default mockApi;
