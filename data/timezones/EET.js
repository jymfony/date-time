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
                    ],
                },
                ['_cache']: {
                    ['0']: {
                        ['1992']: [
                            o[3],
                            o[4],
                            o[5],
                        ],
                        ['1993']: [
                            o[3],
                            o[4],
                            o[5],
                        ],
                        ['1995']: [
                            o[3],
                            o[4],
                            o[5],
                        ],
                        ['1996']: [
                            o[4],
                            o[5],
                            o[6],
                        ],
                        ['1998']: [
                            o[4],
                            o[5],
                            o[6],
                        ],
                        ['1999']: [
                            o[4],
                            o[5],
                            o[6],
                        ],
                        ['2000']: [
                            o[4],
                            o[5],
                            o[6],
                        ],
                        ['2010']: [
                            o[4],
                            o[5],
                            o[6],
                        ],
                        ['2011']: [
                            o[4],
                            o[5],
                            o[6],
                        ],
                        ['2013']: [
                            o[4],
                            o[5],
                            o[6],
                        ],
                        ['2014']: [
                            o[4],
                            o[5],
                            o[6],
                        ],
                        ['2015']: [
                            o[4],
                            o[5],
                            o[6],
                        ],
                        ['2016']: [
                            o[4],
                            o[5],
                            o[6],
                        ],
                    },
                },
            },
            'Jymfony.Component.DateTime.Internal.Rule': {
                ['_fromYear']: {
                    ['1']: 1977,
                    ['2']: 1977,
                    ['3']: 1978,
                    ['4']: 1979,
                    ['5']: 1981,
                    ['6']: 1996,
                },
                ['_toYear']: {
                    ['1']: 1980,
                    ['2']: 1977,
                    ['3']: 1978,
                    ['4']: 1995,
                    ['5']: Infinity,
                    ['6']: Infinity,
                },
                ['_inMonth']: {
                    ['1']: 4,
                    ['2']: 9,
                    ['3']: 10,
                    ['4']: 9,
                    ['5']: 3,
                    ['6']: 10,
                },
                ['_on']: {
                    ['1']: '1 %s this sun',
                    ['2']: 'last sun %s',
                    ['3']: '1',
                    ['4']: 'last sun %s',
                    ['5']: 'last sun %s',
                    ['6']: 'last sun %s',
                },
                ['_at']: {
                    ['1']: '1:00u',
                    ['2']: '1:00u',
                    ['3']: '1:00u',
                    ['4']: '1:00u',
                    ['5']: '1:00u',
                    ['6']: '1:00u',
                },
                ['_save']: {
                    ['1']: 3600,
                    ['2']: 0,
                    ['3']: 0,
                    ['4']: 0,
                    ['5']: 3600,
                    ['6']: 0,
                },
                ['_letters']: {
                    ['1']: 'S',
                    ['2']: '-',
                    ['3']: '-',
                    ['4']: '-',
                    ['5']: 'S',
                    ['6']: '-',
                },
                ['_cache']: {
                    ['1']: {},
                    ['2']: {},
                    ['3']: {
                        ['1978']: [
                            '001978-10-01T01:00:00u',
                            '001978-10-01T01:00:00',
                        ],
                    },
                    ['4']: {
                        ['1992']: [
                            '001992-09-27T01:00:00u',
                            '001992-09-27T01:00:00',
                        ],
                        ['1993']: [
                            '001993-09-26T01:00:00u',
                            '001993-09-26T01:00:00',
                        ],
                        ['1995']: [
                            '001995-09-24T01:00:00u',
                            '001995-09-24T01:00:00',
                        ],
                    },
                    ['5']: {
                        ['1992']: [
                            '001992-03-29T01:00:00u',
                            '001992-03-29T02:00:00',
                        ],
                        ['1993']: [
                            '001993-03-28T01:00:00u',
                            '001993-03-28T02:00:00',
                        ],
                        ['1995']: [
                            '001995-03-26T01:00:00u',
                            '001995-03-26T02:00:00',
                        ],
                        ['1996']: [
                            '001996-03-31T01:00:00u',
                            '001996-03-31T02:00:00',
                        ],
                        ['1998']: [
                            '001998-03-29T01:00:00u',
                            '001998-03-29T02:00:00',
                        ],
                        ['1999']: [
                            '001999-03-28T01:00:00u',
                            '001999-03-28T02:00:00',
                        ],
                        ['2000']: [
                            '002000-03-26T01:00:00u',
                            '002000-03-26T02:00:00',
                        ],
                        ['2010']: [
                            '002010-03-28T01:00:00u',
                            '002010-03-28T02:00:00',
                        ],
                        ['2011']: [
                            '002011-03-27T01:00:00u',
                            '002011-03-27T02:00:00',
                        ],
                        ['2013']: [
                            '002013-03-31T01:00:00u',
                            '002013-03-31T02:00:00',
                        ],
                        ['2014']: [
                            '002014-03-30T01:00:00u',
                            '002014-03-30T02:00:00',
                        ],
                        ['2015']: [
                            '002015-03-29T01:00:00u',
                            '002015-03-29T02:00:00',
                        ],
                        ['2016']: [
                            '002016-03-27T01:00:00u',
                            '002016-03-27T02:00:00',
                        ],
                    },
                    ['6']: {
                        ['1996']: [
                            '001996-10-27T01:00:00u',
                            '001996-10-27T01:00:00',
                        ],
                        ['1998']: [
                            '001998-10-25T01:00:00u',
                            '001998-10-25T01:00:00',
                        ],
                        ['1999']: [
                            '001999-10-31T01:00:00u',
                            '001999-10-31T01:00:00',
                        ],
                        ['2000']: [
                            '002000-10-29T01:00:00u',
                            '002000-10-29T01:00:00',
                        ],
                        ['2010']: [
                            '002010-10-31T01:00:00u',
                            '002010-10-31T01:00:00',
                        ],
                        ['2011']: [
                            '002011-10-30T01:00:00u',
                            '002011-10-30T01:00:00',
                        ],
                        ['2013']: [
                            '002013-10-27T01:00:00u',
                            '002013-10-27T01:00:00',
                        ],
                        ['2014']: [
                            '002014-10-26T01:00:00u',
                            '002014-10-26T01:00:00',
                        ],
                        ['2015']: [
                            '002015-10-25T01:00:00u',
                            '002015-10-25T01:00:00',
                        ],
                        ['2016']: [
                            '002016-10-30T01:00:00u',
                            '002016-10-30T01:00:00',
                        ],
                    },
                },
            },
        },
        [
            {
                ['until']: Infinity,
                ['ruleSet']: o[0],
                ['offset']: 7200,
                ['abbrev']: 'EE%sT',
            },
        ],
        [
            0,
        ]
    );
})();
;
