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
        ],
        null,
        {
            'Jymfony.Component.DateTime.Internal.RuleSet': {
                ['_name']: {
                    ['0']: undefined,
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
                    ],
                },
            },
            'Jymfony.Component.DateTime.Internal.Rule': {
                ['_fromYear']: {
                    ['1']: 1918,
                    ['2']: 1918,
                    ['3']: 1942,
                    ['4']: 1945,
                    ['5']: 1945,
                    ['6']: 1974,
                    ['7']: 1974,
                    ['8']: 1987,
                    ['9']: 2007,
                    ['10']: 2007,
                },
                ['_toYear']: {
                    ['1']: 1918,
                    ['2']: 1918,
                    ['3']: 1942,
                    ['4']: 1945,
                    ['5']: 1945,
                    ['6']: 1986,
                    ['7']: 2006,
                    ['8']: 2006,
                    ['9']: Infinity,
                    ['10']: Infinity,
                },
                ['_inMonth']: {
                    ['1']: 4,
                    ['2']: 10,
                    ['3']: 2,
                    ['4']: 8,
                    ['5']: 9,
                    ['6']: 4,
                    ['7']: 10,
                    ['8']: 4,
                    ['9']: 3,
                    ['10']: 11,
                },
                ['_on']: {
                    ['1']: '14',
                    ['2']: '27',
                    ['3']: '9',
                    ['4']: '14',
                    ['5']: '30',
                    ['6']: 'last sun %s',
                    ['7']: 'last sun %s',
                    ['8']: '1 %s this sun',
                    ['9']: '8 %s this sun',
                    ['10']: '1 %s this sun',
                },
                ['_at']: {
                    ['1']: '2:00',
                    ['2']: '2:00',
                    ['3']: '2:00',
                    ['4']: '23:00u',
                    ['5']: '2:00',
                    ['6']: '2:00',
                    ['7']: '2:00',
                    ['8']: '2:00',
                    ['9']: '2:00',
                    ['10']: '2:00',
                },
                ['_save']: {
                    ['1']: 3600,
                    ['2']: 0,
                    ['3']: 3600,
                    ['4']: 3600,
                    ['5']: 0,
                    ['6']: 3600,
                    ['7']: 0,
                    ['8']: 3600,
                    ['9']: 3600,
                    ['10']: 0,
                },
                ['_letters']: {
                    ['1']: 'D',
                    ['2']: 'S',
                    ['3']: 'W',
                    ['4']: 'P',
                    ['5']: 'S',
                    ['6']: 'D',
                    ['7']: 'S',
                    ['8']: 'D',
                    ['9']: 'D',
                    ['10']: 'S',
                },
            },
        },
        [
            {
                ['offset']: -13480,
                ['dst']: false,
                ['abbrev']: 'LMT',
                ['until']: -1850328920,
                ['format']: 'LMT',
            },
            {
                ['offset']: -14400,
                ['dst']: false,
                ['abbrev']: 'AST',
                ['until']: 326001600,
                ['format']: 'AST',
            },
            {
                ['offset']: -10800,
                ['dst']: false,
                ['abbrev']: '-03',
                ['until']: 536468400,
                ['format']: '-03',
            },
            {
                ['until']: Infinity,
                ['ruleSet']: o[0],
                ['offset']: -10800,
                ['abbrev']: '-03/-02',
            },
        ],
        []
    );
})();
;
