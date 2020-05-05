export default (() => {
    let o;
    return Jymfony.Component.VarExporter.Internal.Hydrator.hydrate(
        o = [
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.RuleSet')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.RuleSet')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
            (new ReflectionClass('Jymfony.Component.DateTime.Internal.Rule')).newInstanceWithoutConstructor(),
        ],
        null,
        {
            'Jymfony.Component.DateTime.Internal.RuleSet': {
                ['_name']: {
                    ['0']: undefined,
                    ['15']: undefined,
                },
                ['_rules']: {
                    ['0']: [
                        o[1],
                        o[2],
                        o[3],
                        o[4],
                        o[5],
                        o[6],
                        o[7],
                        o[8],
                        o[9],
                        o[10],
                        o[11],
                        o[12],
                        o[13],
                        o[14],
                    ],
                    ['15']: [
                        o[16],
                        o[17],
                        o[18],
                    ],
                },
                ['_cache']: {
                    ['0']: {
                        ['1948']: [
                            o[12],
                            o[13],
                            o[14],
                        ],
                        ['1949']: [
                            o[12],
                            o[13],
                            o[14],
                        ],
                    },
                    ['15']: {},
                },
            },
            'Jymfony.Component.DateTime.Internal.Rule': {
                ['_fromYear']: {
                    ['1']: 1919,
                    ['2']: 1919,
                    ['3']: 1940,
                    ['4']: 1940,
                    ['5']: 1941,
                    ['6']: 1941,
                    ['7']: 1942,
                    ['8']: 1945,
                    ['9']: 1946,
                    ['10']: 1946,
                    ['11']: 1947,
                    ['12']: 1947,
                    ['13']: 1948,
                    ['14']: 1948,
                    ['16']: 1986,
                    ['17']: 1986,
                    ['18']: 1987,
                },
                ['_toYear']: {
                    ['1']: 1919,
                    ['2']: 1919,
                    ['3']: 1940,
                    ['4']: 1940,
                    ['5']: 1941,
                    ['6']: 1941,
                    ['7']: 1942,
                    ['8']: 1945,
                    ['9']: 1946,
                    ['10']: 1946,
                    ['11']: 1947,
                    ['12']: 1947,
                    ['13']: 1949,
                    ['14']: 1949,
                    ['16']: 1986,
                    ['17']: 1991,
                    ['18']: 1991,
                },
                ['_inMonth']: {
                    ['1']: 4,
                    ['2']: 9,
                    ['3']: 6,
                    ['4']: 10,
                    ['5']: 3,
                    ['6']: 11,
                    ['7']: 1,
                    ['8']: 9,
                    ['9']: 5,
                    ['10']: 9,
                    ['11']: 4,
                    ['12']: 10,
                    ['13']: 5,
                    ['14']: 9,
                    ['16']: 5,
                    ['17']: 9,
                    ['18']: 4,
                },
                ['_on']: {
                    ['1']: '12',
                    ['2']: '30',
                    ['3']: '1',
                    ['4']: '12',
                    ['5']: '15',
                    ['6']: '1',
                    ['7']: '31',
                    ['8']: '1',
                    ['9']: '15',
                    ['10']: '30',
                    ['11']: '15',
                    ['12']: '31',
                    ['13']: '1',
                    ['14']: '30',
                    ['16']: '4',
                    ['17']: '11 %s this sun',
                    ['18']: '11 %s this sun',
                },
                ['_at']: {
                    ['1']: '24:00',
                    ['2']: '24:00',
                    ['3']: '0:00',
                    ['4']: '24:00',
                    ['5']: '0:00',
                    ['6']: '24:00',
                    ['7']: '0:00',
                    ['8']: '24:00',
                    ['9']: '0:00',
                    ['10']: '24:00',
                    ['11']: '0:00',
                    ['12']: '24:00',
                    ['13']: '0:00',
                    ['14']: '24:00',
                    ['16']: '2:00',
                    ['17']: '2:00',
                    ['18']: '2:00',
                },
                ['_save']: {
                    ['1']: 3600,
                    ['2']: 0,
                    ['3']: 3600,
                    ['4']: 0,
                    ['5']: 3600,
                    ['6']: 0,
                    ['7']: 3600,
                    ['8']: 0,
                    ['9']: 3600,
                    ['10']: 0,
                    ['11']: 3600,
                    ['12']: 0,
                    ['13']: 3600,
                    ['14']: 0,
                    ['16']: 3600,
                    ['17']: 0,
                    ['18']: 3600,
                },
                ['_letters']: {
                    ['1']: 'D',
                    ['2']: 'S',
                    ['3']: 'D',
                    ['4']: 'S',
                    ['5']: 'D',
                    ['6']: 'S',
                    ['7']: 'D',
                    ['8']: 'S',
                    ['9']: 'D',
                    ['10']: 'S',
                    ['11']: 'D',
                    ['12']: 'S',
                    ['13']: 'D',
                    ['14']: 'S',
                    ['16']: 'D',
                    ['17']: 'S',
                    ['18']: 'D',
                },
                ['_cache']: {
                    ['1']: {},
                    ['2']: {},
                    ['3']: {},
                    ['4']: {},
                    ['5']: {},
                    ['6']: {},
                    ['7']: {},
                    ['8']: {},
                    ['9']: {},
                    ['10']: {},
                    ['11']: {},
                    ['12']: {
                        ['1947']: [
                            '001947-11-01T00:00:00',
                            '001947-11-01T00:00:00',
                        ],
                    },
                    ['13']: {
                        ['1948']: [
                            '001948-05-01T00:00:00',
                            '001948-05-01T01:00:00',
                        ],
                        ['1949']: [
                            '001949-05-01T00:00:00',
                            '001949-05-01T01:00:00',
                        ],
                    },
                    ['14']: {
                        ['1948']: [
                            '001948-10-01T00:00:00',
                            '001948-10-01T00:00:00',
                        ],
                        ['1949']: [
                            '001949-10-01T00:00:00',
                            '001949-10-01T00:00:00',
                        ],
                    },
                    ['16']: {},
                    ['17']: {},
                    ['18']: {},
                },
            },
        },
        [
            {
                ['offset']: 29143,
                ['dst']: false,
                ['abbrev']: 'LMT',
                ['until']: -2177481943,
                ['format']: 'LMT',
            },
            {
                ['until']: -650019600,
                ['ruleSet']: o[0],
                ['offset']: 28800,
                ['abbrev']: 'C%sT',
            },
            {
                ['until']: Infinity,
                ['ruleSet']: o[15],
                ['offset']: 28800,
                ['abbrev']: 'C%sT',
            },
        ],
        [
            0,
            15,
        ]
    );
})();
;
