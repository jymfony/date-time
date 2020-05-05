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
                        o[11],
                        o[12],
                        o[13],
                        o[14],
                        o[15],
                        o[16],
                    ],
                },
            },
            'Jymfony.Component.DateTime.Internal.Rule': {
                ['_fromYear']: {
                    ['1']: 1917,
                    ['2']: 1917,
                    ['3']: 1918,
                    ['4']: 1918,
                    ['5']: 1919,
                    ['6']: 1919,
                    ['7']: 1919,
                    ['8']: 1921,
                    ['9']: 1921,
                    ['10']: 1921,
                    ['11']: 1921,
                    ['12']: 1981,
                    ['13']: 1981,
                    ['14']: 1984,
                    ['15']: 1985,
                    ['16']: 1996,
                },
                ['_toYear']: {
                    ['1']: 1917,
                    ['2']: 1917,
                    ['3']: 1918,
                    ['4']: 1918,
                    ['5']: 1919,
                    ['6']: 1919,
                    ['7']: 1919,
                    ['8']: 1921,
                    ['9']: 1921,
                    ['10']: 1921,
                    ['11']: 1921,
                    ['12']: 1984,
                    ['13']: 1983,
                    ['14']: 1995,
                    ['15']: 2010,
                    ['16']: 2010,
                },
                ['_inMonth']: {
                    ['1']: 7,
                    ['2']: 12,
                    ['3']: 5,
                    ['4']: 9,
                    ['5']: 5,
                    ['6']: 7,
                    ['7']: 8,
                    ['8']: 2,
                    ['9']: 3,
                    ['10']: 9,
                    ['11']: 10,
                    ['12']: 4,
                    ['13']: 10,
                    ['14']: 9,
                    ['15']: 3,
                    ['16']: 10,
                },
                ['_on']: {
                    ['1']: '1',
                    ['2']: '28',
                    ['3']: '31',
                    ['4']: '16',
                    ['5']: '31',
                    ['6']: '1',
                    ['7']: '16',
                    ['8']: '14',
                    ['9']: '20',
                    ['10']: '1',
                    ['11']: '1',
                    ['12']: '1',
                    ['13']: '1',
                    ['14']: 'last sun %s',
                    ['15']: 'last sun %s',
                    ['16']: 'last sun %s',
                },
                ['_at']: {
                    ['1']: '23:00',
                    ['2']: '0:00',
                    ['3']: '22:00',
                    ['4']: '1:00',
                    ['5']: '23:00',
                    ['6']: '0:00u',
                    ['7']: '0:00',
                    ['8']: '23:00',
                    ['9']: '23:00',
                    ['10']: '0:00',
                    ['11']: '0:00',
                    ['12']: '0:00',
                    ['13']: '0:00',
                    ['14']: '2:00s',
                    ['15']: '2:00s',
                    ['16']: '2:00s',
                },
                ['_save']: {
                    ['1']: 3600,
                    ['2']: 0,
                    ['3']: 7200,
                    ['4']: 3600,
                    ['5']: 7200,
                    ['6']: 3600,
                    ['7']: 0,
                    ['8']: 3600,
                    ['9']: 7200,
                    ['10']: 3600,
                    ['11']: 0,
                    ['12']: 3600,
                    ['13']: 0,
                    ['14']: 0,
                    ['15']: 3600,
                    ['16']: 0,
                },
                ['_letters']: {
                    ['1']: 'MST',
                    ['2']: 'MMT',
                    ['3']: 'MDST',
                    ['4']: 'MST',
                    ['5']: 'MDST',
                    ['6']: 'MSD',
                    ['7']: 'MSK',
                    ['8']: 'MSD',
                    ['9']: '+05',
                    ['10']: 'MSD',
                    ['11']: '-',
                    ['12']: 'S',
                    ['13']: '-',
                    ['14']: '-',
                    ['15']: 'S',
                    ['16']: '-',
                },
            },
        },
        [
            {
                ['offset']: 31138,
                ['dst']: false,
                ['abbrev']: 'LMT',
                ['until']: -1579423138,
                ['format']: 'LMT',
            },
            {
                ['offset']: 28800,
                ['dst']: false,
                ['abbrev']: '+08',
                ['until']: -1247558400,
                ['format']: '+08',
            },
            {
                ['until']: 670352400,
                ['ruleSet']: o[0],
                ['offset']: 32400,
                ['abbrev']: '+09/+10',
            },
            {
                ['until']: 695757600,
                ['ruleSet']: o[0],
                ['offset']: 28800,
                ['abbrev']: '+08/+09',
            },
            {
                ['until']: 1301158800,
                ['ruleSet']: o[0],
                ['offset']: 32400,
                ['abbrev']: '+09/+10',
            },
            {
                ['offset']: 36000,
                ['dst']: false,
                ['abbrev']: '+10',
                ['until']: 1414252800,
                ['format']: '+10',
            },
            {
                ['offset']: 32400,
                ['dst']: false,
                ['abbrev']: '+09',
                ['until']: Infinity,
                ['format']: '+09',
            },
        ],
        []
    );
})();
;
