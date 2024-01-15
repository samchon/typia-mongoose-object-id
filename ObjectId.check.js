export const is = (input) => {
    const $ip0 = input => {
        const array = input;
        const tuplePredicators = [
            [
                top => top.length === 2 && ("object" === typeof top[0] && null !== top[0] && $io3(top[0])) && "string" === typeof top[1],
                entire => entire.length === 2 && ("object" === typeof entire[0] && null !== entire[0] && $io3(entire[0])) && "string" === typeof entire[1]
            ],
            [
                top => top.length === 2 && ("object" === typeof top[0] && null !== top[0] && $io4(top[0])) && "string" === typeof top[1],
                entire => entire.length === 2 && ("object" === typeof entire[0] && null !== entire[0] && $io4(entire[0])) && "string" === typeof entire[1]
            ]
        ];
        for (const pred of tuplePredicators)
            if (pred[0](array))
                return pred[1](array);
        const top = input[0];
        if (0 === input.length)
            return true;
        const arrayPredicators = [
            [
                top => "object" === typeof top && null !== top && $io5(top),
                entire => entire.every(elem => "object" === typeof elem && null !== elem && $io5(elem))
            ]
        ];
        const passed = arrayPredicators.filter(pred => pred[0](top));
        if (1 === passed.length)
            return passed[0][1](array);
        else if (1 < passed.length)
            for (const pred of passed)
                if (array.every(value => true === pred[0](value)))
                    return pred[1](array);
        return false;
    };
    const $ip1 = input => {
        const array = input;
        const tuplePredicators = [
            [
                top => top.length === 2 && ("object" === typeof top[0] && null !== top[0] && $io3(top[0])) && "string" === typeof top[1],
                entire => entire.length === 2 && ("object" === typeof entire[0] && null !== entire[0] && $io3(entire[0])) && "string" === typeof entire[1]
            ],
            [
                top => top.length === 2 && ("object" === typeof top[0] && null !== top[0] && $io4(top[0])) && "string" === typeof top[1],
                entire => entire.length === 2 && ("object" === typeof entire[0] && null !== entire[0] && $io4(entire[0])) && "string" === typeof entire[1]
            ]
        ];
        for (const pred of tuplePredicators)
            if (pred[0](array))
                return pred[1](array);
        const top = input[0];
        if (0 === input.length)
            return true;
        const arrayPredicators = [
            [
                top => null !== top && undefined !== top && (Array.isArray(top) && ($ip0(top) || false) || "object" === typeof top && null !== top && $iu0(top)),
                entire => entire.every(elem => null !== elem && undefined !== elem && (Array.isArray(elem) && ($ip0(elem) || false) || "object" === typeof elem && null !== elem && $iu0(elem)))
            ],
            [
                top => null !== top && undefined !== top && (Array.isArray(top) && ($ip0(top) || false) || "object" === typeof top && null !== top && $iu0(top)),
                entire => entire.every(elem => null !== elem && undefined !== elem && (Array.isArray(elem) && ($ip0(elem) || false) || "object" === typeof elem && null !== elem && $iu0(elem)))
            ],
            [
                top => "object" === typeof top && null !== top && $io5(top),
                entire => entire.every(elem => "object" === typeof elem && null !== elem && $io5(elem))
            ]
        ];
        const passed = arrayPredicators.filter(pred => pred[0](top));
        if (1 === passed.length)
            return passed[0][1](array);
        else if (1 < passed.length)
            for (const pred of passed)
                if (array.every(value => true === pred[0](value)))
                    return pred[1](array);
        return false;
    };
    const $ip2 = input => {
        const array = input;
        const tuplePredicators = [
            [
                top => top.length === 2 && (null === top[0] || true) && true,
                entire => entire.length === 2 && (null === entire[0] || true) && true
            ],
            [
                top => top.length === 2 && true && "string" === typeof top[1],
                entire => entire.length === 2 && true && "string" === typeof entire[1]
            ]
        ];
        for (const pred of tuplePredicators)
            if (pred[0](array))
                return pred[1](array);
        return false;
    };
    const $ip3 = input => {
        const array = input;
        const tuplePredicators = [
            [
                top => top.length === 2 && true && "string" === typeof top[1],
                entire => entire.length === 2 && true && "string" === typeof entire[1]
            ],
            [
                top => top.length === 2 && "boolean" === typeof top[0] && "string" === typeof top[1],
                entire => entire.length === 2 && "boolean" === typeof entire[0] && "string" === typeof entire[1]
            ]
        ];
        for (const pred of tuplePredicators)
            if (pred[0](array))
                return pred[1](array);
        return false;
    };
    const $ip4 = input => {
        const array = input;
        const top = input[0];
        if (0 === input.length)
            return true;
        const arrayPredicators = [
            [
                top => null === top || "string" === typeof top || "number" === typeof top,
                entire => entire.every(elem => null === elem || "string" === typeof elem || "number" === typeof elem)
            ],
            [
                top => null === top || "string" === typeof top || "number" === typeof top,
                entire => entire.every(elem => null === elem || "string" === typeof elem || "number" === typeof elem)
            ]
        ];
        const passed = arrayPredicators.filter(pred => pred[0](top));
        if (1 === passed.length)
            return passed[0][1](array);
        else if (1 < passed.length)
            for (const pred of passed)
                if (array.every(value => true === pred[0](value)))
                    return pred[1](array);
        return false;
    };
    const $ip5 = input => {
        const array = input;
        const tuplePredicators = [
            [
                top => top.length === 2 && ("object" === typeof top[0] && null !== top[0] && $io45(top[0])) && "string" === typeof top[1],
                entire => entire.length === 2 && ("object" === typeof entire[0] && null !== entire[0] && $io45(entire[0])) && "string" === typeof entire[1]
            ],
            [
                top => top.length === 2 && "number" === typeof top[0] && "string" === typeof top[1],
                entire => entire.length === 2 && "number" === typeof entire[0] && "string" === typeof entire[1]
            ],
            [
                top => top.length === 2 && ("object" === typeof top[0] && null !== top[0] && $io45(top[0])) && "string" === typeof top[1],
                entire => entire.length === 2 && ("object" === typeof entire[0] && null !== entire[0] && $io45(entire[0])) && "string" === typeof entire[1]
            ],
            [
                top => top.length === 2 && "number" === typeof top[0] && "string" === typeof top[1],
                entire => entire.length === 2 && "number" === typeof entire[0] && "string" === typeof entire[1]
            ]
        ];
        for (const pred of tuplePredicators)
            if (pred[0](array))
                return pred[1](array);
        return false;
    };
    const $ip6 = input => {
        const array = input;
        const top = input[0];
        if (0 === input.length)
            return true;
        const arrayPredicators = [
            [
                top => "object" === typeof top && null !== top && $io48(top),
                entire => entire.every(elem => "object" === typeof elem && null !== elem && $io48(elem))
            ],
            [
                top => "object" === typeof top && null !== top && $io3(top),
                entire => entire.every(elem => "object" === typeof elem && null !== elem && $io3(elem))
            ],
            [
                top => "object" === typeof top && null !== top && false === Array.isArray(top) && $io113(top),
                entire => entire.every(elem => "object" === typeof elem && null !== elem && false === Array.isArray(elem) && $io113(elem))
            ],
            [
                top => "object" === typeof top && null !== top && false === Array.isArray(top) && $iu4(top),
                entire => entire.every(elem => "object" === typeof elem && null !== elem && false === Array.isArray(elem) && $iu4(elem))
            ]
        ];
        const passed = arrayPredicators.filter(pred => pred[0](top));
        if (1 === passed.length)
            return passed[0][1](array);
        else if (1 < passed.length)
            for (const pred of passed)
                if (array.every(value => true === pred[0](value)))
                    return pred[1](array);
        return false;
    };
    const $ip7 = input => {
        const array = input;
        const tuplePredicators = [
            [
                top => top.length === 2 && ("object" === typeof top[0] && null !== top[0] && $io4(top[0])) && "string" === typeof top[1],
                entire => entire.length === 2 && ("object" === typeof entire[0] && null !== entire[0] && $io4(entire[0])) && "string" === typeof entire[1]
            ],
            [
                top => top.length === 2 && ("object" === typeof top[0] && null !== top[0] && $io4(top[0])) && "string" === typeof top[1],
                entire => entire.length === 2 && ("object" === typeof entire[0] && null !== entire[0] && $io4(entire[0])) && "string" === typeof entire[1]
            ]
        ];
        for (const pred of tuplePredicators)
            if (pred[0](array))
                return pred[1](array);
        return false;
    };
    const $ip8 = input => {
        const array = input;
        const tuplePredicators = [
            [
                top => top.length === 2 && "number" === typeof top[0] && "string" === typeof top[1],
                entire => entire.length === 2 && "number" === typeof entire[0] && "string" === typeof entire[1]
            ],
            [
                top => top.length === 2 && "number" === typeof top[0] && "string" === typeof top[1],
                entire => entire.length === 2 && "number" === typeof entire[0] && "string" === typeof entire[1]
            ]
        ];
        for (const pred of tuplePredicators)
            if (pred[0](array))
                return pred[1](array);
        return false;
    };
    const $ip9 = input => {
        const array = input;
        const top = input[0];
        if (0 === input.length)
            return true;
        const arrayPredicators = [
            [
                top => "object" === typeof top && null !== top && $io48(top),
                entire => entire.every(elem => "object" === typeof elem && null !== elem && $io48(elem))
            ],
            [
                top => "object" === typeof top && null !== top && $io3(top),
                entire => entire.every(elem => "object" === typeof elem && null !== elem && $io3(elem))
            ],
            [
                top => "object" === typeof top && null !== top && false === Array.isArray(top) && $io116(top),
                entire => entire.every(elem => "object" === typeof elem && null !== elem && false === Array.isArray(elem) && $io116(elem))
            ],
            [
                top => "object" === typeof top && null !== top && false === Array.isArray(top) && $io23(top),
                entire => entire.every(elem => "object" === typeof elem && null !== elem && false === Array.isArray(elem) && $io23(elem))
            ]
        ];
        const passed = arrayPredicators.filter(pred => pred[0](top));
        if (1 === passed.length)
            return passed[0][1](array);
        else if (1 < passed.length)
            for (const pred of passed)
                if (array.every(value => true === pred[0](value)))
                    return pred[1](array);
        return false;
    };
    const $ip10 = input => {
        const array = input;
        const tuplePredicators = [
            [
                top => top.length === 2 && ("object" === typeof top[0] && null !== top[0] && $io3(top[0])) && "string" === typeof top[1],
                entire => entire.length === 2 && ("object" === typeof entire[0] && null !== entire[0] && $io3(entire[0])) && "string" === typeof entire[1]
            ],
            [
                top => top.length === 2 && ("object" === typeof top[0] && null !== top[0] && $io4(top[0])) && "string" === typeof top[1],
                entire => entire.length === 2 && ("object" === typeof entire[0] && null !== entire[0] && $io4(entire[0])) && "string" === typeof entire[1]
            ]
        ];
        for (const pred of tuplePredicators)
            if (pred[0](array))
                return pred[1](array);
        const top = input[0];
        if (0 === input.length)
            return true;
        const arrayPredicators = [
            [
                top => "object" === typeof top && null !== top && $io55(top),
                entire => entire.every(elem => "object" === typeof elem && null !== elem && $io55(elem))
            ]
        ];
        const passed = arrayPredicators.filter(pred => pred[0](top));
        if (1 === passed.length)
            return passed[0][1](array);
        else if (1 < passed.length)
            for (const pred of passed)
                if (array.every(value => true === pred[0](value)))
                    return pred[1](array);
        return false;
    };
    const $ip11 = input => {
        const array = input;
        const tuplePredicators = [
            [
                top => top.length === 2 && ("object" === typeof top[0] && null !== top[0] && $io3(top[0])) && "string" === typeof top[1],
                entire => entire.length === 2 && ("object" === typeof entire[0] && null !== entire[0] && $io3(entire[0])) && "string" === typeof entire[1]
            ],
            [
                top => top.length === 2 && ("object" === typeof top[0] && null !== top[0] && $io4(top[0])) && "string" === typeof top[1],
                entire => entire.length === 2 && ("object" === typeof entire[0] && null !== entire[0] && $io4(entire[0])) && "string" === typeof entire[1]
            ]
        ];
        for (const pred of tuplePredicators)
            if (pred[0](array))
                return pred[1](array);
        const top = input[0];
        if (0 === input.length)
            return true;
        const arrayPredicators = [
            [
                top => null !== top && undefined !== top && (Array.isArray(top) && ($ip10(top) || false) || "object" === typeof top && null !== top && $iu1(top)),
                entire => entire.every(elem => null !== elem && undefined !== elem && (Array.isArray(elem) && ($ip10(elem) || false) || "object" === typeof elem && null !== elem && $iu1(elem)))
            ],
            [
                top => null !== top && undefined !== top && (Array.isArray(top) && ($ip10(top) || false) || "object" === typeof top && null !== top && $iu1(top)),
                entire => entire.every(elem => null !== elem && undefined !== elem && (Array.isArray(elem) && ($ip10(elem) || false) || "object" === typeof elem && null !== elem && $iu1(elem)))
            ],
            [
                top => "object" === typeof top && null !== top && $io55(top),
                entire => entire.every(elem => "object" === typeof elem && null !== elem && $io55(elem))
            ]
        ];
        const passed = arrayPredicators.filter(pred => pred[0](top));
        if (1 === passed.length)
            return passed[0][1](array);
        else if (1 < passed.length)
            for (const pred of passed)
                if (array.every(value => true === pred[0](value)))
                    return pred[1](array);
        return false;
    };
    const $ip12 = input => {
        const array = input;
        const tuplePredicators = [
            [
                top => top.length === 2 && (null === top[0] || true) && true,
                entire => entire.length === 2 && (null === entire[0] || true) && true
            ],
            [
                top => top.length === 2 && true && "string" === typeof top[1],
                entire => entire.length === 2 && true && "string" === typeof entire[1]
            ]
        ];
        for (const pred of tuplePredicators)
            if (pred[0](array))
                return pred[1](array);
        return false;
    };
    const $ip13 = input => {
        const array = input;
        const top = input[0];
        if (0 === input.length)
            return true;
        const arrayPredicators = [
            [
                top => "string" === typeof top,
                entire => entire.every(elem => "string" === typeof elem)
            ],
            [
                top => top instanceof Uint8Array,
                entire => entire.every(elem => elem instanceof Uint8Array)
            ]
        ];
        const passed = arrayPredicators.filter(pred => pred[0](top));
        if (1 === passed.length)
            return passed[0][1](array);
        else if (1 < passed.length)
            for (const pred of passed)
                if (array.every(value => true === pred[0](value)))
                    return pred[1](array);
        return false;
    };
    const $io0 = input => "object" === typeof input.defaultOptions && null !== input.defaultOptions && false === Array.isArray(input.defaultOptions) && $io1(input.defaultOptions) && ("object" === typeof input.OptionsConstructor && null !== input.OptionsConstructor && false === Array.isArray(input.OptionsConstructor) && $io2(input.OptionsConstructor)) && "string" === typeof input.instance && (undefined === input.isRequired || "boolean" === typeof input.isRequired) && ("object" === typeof input.options && null !== input.options && false === Array.isArray(input.options) && $io26(input.options)) && "string" === typeof input.path && ("object" === typeof input.schema && null !== input.schema && $io19(input.schema)) && (Array.isArray(input.validators) && input.validators.every(elem => "object" === typeof elem && null !== elem && false === Array.isArray(elem) && $io27(elem)));
    const $io1 = input => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return true;
        return true;
    });
    const $io2 = input => true && (null !== input.alias && (undefined === input.alias || "string" === typeof input.alias || Array.isArray(input.alias) && input.alias.every(elem => "string" === typeof elem))) && (null !== input.validate && (undefined === input.validate || (Array.isArray(input.validate) && ($ip1(input.validate) || false) || "object" === typeof input.validate && null !== input.validate && $iu0(input.validate)))) && (null !== input.cast && (undefined === input.cast || "function" === typeof input.cast || "string" === typeof input.cast || "boolean" === typeof input.cast || Array.isArray(input.cast) && ($ip2(input.cast) || false))) && (null !== input.required && (undefined === input.required || "function" === typeof input.required || "boolean" === typeof input.required || Array.isArray(input.required) && ($ip3(input.required) || false))) && true && (null !== input.ref && (undefined === input.ref || "function" === typeof input.ref || "string" === typeof input.ref || "object" === typeof input.ref && null !== input.ref && $io10(input.ref))) && (null !== input.refPath && (undefined === input.refPath || "function" === typeof input.refPath || "string" === typeof input.refPath)) && (undefined === input.select || "number" === typeof input.select || "boolean" === typeof input.select) && (null !== input.index && (undefined === input.index || 1 === input.index || -1 === input.index || "2d" === input.index || "2dsphere" === input.index || "geoHaystack" === input.index || "hashed" === input.index || "text" === input.index || "ascending" === input.index || "asc" === input.index || "descending" === input.index || "desc" === input.index || "boolean" === typeof input.index || "object" === typeof input.index && null !== input.index && false === Array.isArray(input.index) && $io59(input.index))) && (undefined === input.unique || "number" === typeof input.unique || "boolean" === typeof input.unique) && (null !== input.immutable && (undefined === input.immutable || "function" === typeof input.immutable || "boolean" === typeof input.immutable)) && (undefined === input.sparse || "number" === typeof input.sparse || "boolean" === typeof input.sparse) && true && (undefined === input.transform || true) && (undefined === input.get || true) && (undefined === input.set || true) && (null !== input["enum"] && (undefined === input["enum"] || (Array.isArray(input["enum"]) && ($ip4(input["enum"]) || false) || "object" === typeof input["enum"] && null !== input["enum"] && false === Array.isArray(input["enum"]) && $iu5(input["enum"])))) && (undefined === input.subtype || "number" === typeof input.subtype) && (null !== input.min && (undefined === input.min || "number" === typeof input.min || (Array.isArray(input.min) && ($ip5(input.min) || false) || "object" === typeof input.min && null !== input.min && $io45(input.min)))) && (null !== input.max && (undefined === input.max || "number" === typeof input.max || (Array.isArray(input.max) && ($ip5(input.max) || false) || "object" === typeof input.max && null !== input.max && $io45(input.max)))) && (undefined === input.expires || "string" === typeof input.expires || "number" === typeof input.expires) && (undefined === input.excludeIndexes || "boolean" === typeof input.excludeIndexes) && (undefined === input._id || "boolean" === typeof input._id) && (null !== input.of && (undefined === input.of || "string" === typeof input.of || (Array.isArray(input.of) && ($ip6(input.of) || false) || "object" === typeof input.of && null !== input.of && false === Array.isArray(input.of) && $iu6(input.of)))) && (undefined === input.auto || "boolean" === typeof input.auto) && (null !== input.match && (undefined === input.match || (Array.isArray(input.match) && ($ip7(input.match) || false) || "object" === typeof input.match && null !== input.match && $io4(input.match)))) && (undefined === input.lowercase || "boolean" === typeof input.lowercase) && (undefined === input.trim || "boolean" === typeof input.trim) && (undefined === input.uppercase || "boolean" === typeof input.uppercase) && (null !== input.minlength && (undefined === input.minlength || "number" === typeof input.minlength || Array.isArray(input.minlength) && ($ip8(input.minlength) || false))) && (null !== input.maxlength && (undefined === input.maxlength || "number" === typeof input.maxlength || Array.isArray(input.maxlength) && ($ip8(input.maxlength) || false))) && Object.keys(input).every(key => {
        if (["type", "alias", "validate", "cast", "required", "default", "ref", "refPath", "select", "index", "unique", "immutable", "sparse", "text", "transform", "get", "set", "enum", "subtype", "min", "max", "expires", "excludeIndexes", "_id", "of", "auto", "match", "lowercase", "trim", "uppercase", "minlength", "maxlength"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return true;
        return true;
    });
    const $io3 = input => true && "number" === typeof input.length && true && ("object" === typeof input.caller && null !== input.caller && $io3(input.caller)) && "string" === typeof input.name;
    const $io4 = input => "string" === typeof input.source && "boolean" === typeof input.global && "boolean" === typeof input.ignoreCase && "boolean" === typeof input.multiline && "number" === typeof input.lastIndex && "string" === typeof input.flags && "boolean" === typeof input.sticky && "boolean" === typeof input.unicode && "boolean" === typeof input.dotAll;
    const $io5 = input => (undefined === input.msg || "string" === typeof input.msg) && (null !== input.message && (undefined === input.message || "string" === typeof input.message || "object" === typeof input.message && null !== input.message && $io6(input.message))) && (undefined === input.type || "string" === typeof input.type) && ("object" === typeof input.validator && null !== input.validator && $iu7(input.validator)) && (undefined === input.propsParameter || "boolean" === typeof input.propsParameter);
    const $io6 = input => true && "number" === typeof input.length && true && ("object" === typeof input.caller && null !== input.caller && $io3(input.caller)) && "string" === typeof input.name;
    const $io7 = input => true && "number" === typeof input.length && true && ("object" === typeof input.caller && null !== input.caller && $io3(input.caller)) && "string" === typeof input.name;
    const $io8 = input => true && "number" === typeof input.length && true && ("object" === typeof input.caller && null !== input.caller && $io3(input.caller)) && "string" === typeof input.name;
    const $io9 = input => true && "number" === typeof input.length && true && ("object" === typeof input.caller && null !== input.caller && $io3(input.caller)) && "string" === typeof input.name;
    const $io10 = input => "object" === typeof input.base && null !== input.base && true && (undefined === input.baseModelName || "string" === typeof input.baseModelName) && ("object" === typeof input.collection && null !== input.collection && $io12(input.collection)) && ("object" === typeof input.db && null !== input.db && $io13(input.db)) && ("object" === typeof input.events && null !== input.events && true) && "string" === typeof input.modelName && (undefined === input.discriminators || "object" === typeof input.discriminators && null !== input.discriminators && false === Array.isArray(input.discriminators) && $io18(input.discriminators)) && ("object" === typeof input.schema && null !== input.schema && $io19(input.schema)) && true && "number" === typeof input.length && true && ("object" === typeof input.caller && null !== input.caller && $io3(input.caller)) && "string" === typeof input.name;
    const $io12 = input => "string" === typeof input.collectionName && ("object" === typeof input.conn && null !== input.conn && $io13(input.conn)) && "string" === typeof input.name && true && "number" === typeof input.length && true && ("object" === typeof input.caller && null !== input.caller && $io3(input.caller));
    const $io13 = input => "object" === typeof input.collections && null !== input.collections && false === Array.isArray(input.collections) && $io14(input.collections) && true && ("object" === typeof input.db && null !== input.db && true) && "string" === typeof input.host && "number" === typeof input.id && ("object" === typeof input.models && null !== input.models && false === Array.isArray(input.models) && $io16(input.models)) && "string" === typeof input.name && "string" === typeof input.pass && "number" === typeof input.port && Array.isArray(input.plugins) && (0 === input.readyState || 1 === input.readyState || 2 === input.readyState || 3 === input.readyState || 99 === input.readyState) && "string" === typeof input.user;
    const $io14 = input => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return "object" === typeof value && null !== value && $io12(value);
        return true;
    });
    const $io16 = input => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return "object" === typeof value && null !== value && $io10(value);
        return true;
    });
    const $io18 = input => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return "object" === typeof value && null !== value && $io10(value);
        return true;
    });
    const $io19 = input => Array.isArray(input.childSchemas) && input.childSchemas.every(elem => "object" === typeof elem && null !== elem && $io20(elem)) && (undefined === input.discriminators || "object" === typeof input.discriminators && null !== input.discriminators && false === Array.isArray(input.discriminators) && $io21(input.discriminators)) && ("object" === typeof input.methods && null !== input.methods && false === Array.isArray(input.methods) && $io22(input.methods)) && ("object" === typeof input.obj && null !== input.obj && false === Array.isArray(input.obj) && $iu4(input.obj)) && ("object" === typeof input.paths && null !== input.paths && false === Array.isArray(input.paths) && $io117(input.paths)) && ("object" === typeof input.query && null !== input.query && true) && ("object" === typeof input.statics && null !== input.statics && false === Array.isArray(input.statics) && $io118(input.statics)) && ("object" === typeof input.virtuals && null !== input.virtuals && true);
    const $io20 = input => "object" === typeof input.schema && null !== input.schema && $io19(input.schema) && true;
    const $io21 = input => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return "object" === typeof value && null !== value && $io19(value);
        return true;
    });
    const $io22 = input => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return true;
        return true;
    });
    const $io23 = input => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return null !== value && undefined !== value && ("string" === typeof value || (Array.isArray(value) && ($ip9(value) || false) || "object" === typeof value && null !== value && false === Array.isArray(value) && $iu8(value)));
        return true;
    });
    const $io24 = input => "object" === typeof input.prototype && null !== input.prototype && $io25(input.prototype) && "number" === typeof input.length && true && ("object" === typeof input.caller && null !== input.caller && $io3(input.caller)) && "string" === typeof input.name;
    const $io25 = input => "object" === typeof input.OptionsConstructor && null !== input.OptionsConstructor && false === Array.isArray(input.OptionsConstructor) && $io2(input.OptionsConstructor) && "string" === typeof input.instance && (undefined === input.isRequired || "boolean" === typeof input.isRequired) && ("object" === typeof input.options && null !== input.options && false === Array.isArray(input.options) && $io26(input.options)) && "string" === typeof input.path && ("object" === typeof input.schema && null !== input.schema && $io19(input.schema)) && (Array.isArray(input.validators) && input.validators.every(elem => "object" === typeof elem && null !== elem && false === Array.isArray(elem) && $io27(elem))) && (undefined === input.defaultOptions || "object" === typeof input.defaultOptions && null !== input.defaultOptions && false === Array.isArray(input.defaultOptions) && $io1(input.defaultOptions));
    const $io26 = input => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return true;
        return true;
    });
    const $io27 = input => (undefined === input.message || "string" === typeof input.message) && (undefined === input.type || "string" === typeof input.type) && (undefined === input.validator || "object" === typeof input.validator && null !== input.validator && $io3(input.validator));
    const $io28 = input => "object" === typeof input.prototype && null !== input.prototype && $io29(input.prototype) && "Mixed" === input.schemaName && "number" === typeof input.length && true && ("object" === typeof input.caller && null !== input.caller && $io3(input.caller)) && "string" === typeof input.name;
    const $io29 = input => "object" === typeof input.defaultOptions && null !== input.defaultOptions && false === Array.isArray(input.defaultOptions) && $io1(input.defaultOptions) && ("object" === typeof input.OptionsConstructor && null !== input.OptionsConstructor && false === Array.isArray(input.OptionsConstructor) && $io2(input.OptionsConstructor)) && "string" === typeof input.instance && (undefined === input.isRequired || "boolean" === typeof input.isRequired) && ("object" === typeof input.options && null !== input.options && false === Array.isArray(input.options) && $io26(input.options)) && "string" === typeof input.path && ("object" === typeof input.schema && null !== input.schema && $io19(input.schema)) && (Array.isArray(input.validators) && input.validators.every(elem => "object" === typeof elem && null !== elem && false === Array.isArray(elem) && $io27(elem)));
    const $io30 = input => Array.isArray(input.childSchemas) && input.childSchemas.every(elem => "object" === typeof elem && null !== elem && $io31(elem)) && (undefined === input.discriminators || "object" === typeof input.discriminators && null !== input.discriminators && false === Array.isArray(input.discriminators) && $io32(input.discriminators)) && ("object" === typeof input.methods && null !== input.methods && false === Array.isArray(input.methods) && $io33(input.methods)) && ("object" === typeof input.obj && null !== input.obj && false === Array.isArray(input.obj) && $iu4(input.obj)) && ("object" === typeof input.paths && null !== input.paths && false === Array.isArray(input.paths) && $io114(input.paths)) && ("object" === typeof input.query && null !== input.query && true) && ("object" === typeof input.statics && null !== input.statics && false === Array.isArray(input.statics) && $io115(input.statics)) && ("object" === typeof input.virtuals && null !== input.virtuals && true);
    const $io31 = input => "object" === typeof input.schema && null !== input.schema && $io19(input.schema) && true;
    const $io32 = input => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return "object" === typeof value && null !== value && $io19(value);
        return true;
    });
    const $io33 = input => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return true;
        return true;
    });
    const $io34 = input => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return null !== value && (undefined === value || "string" === typeof value || (Array.isArray(value) && ($ip6(value) || false) || "object" === typeof value && null !== value && false === Array.isArray(value) && $iu6(value)));
        return true;
    });
    const $io35 = input => ("string" === typeof input.prototype || input.prototype instanceof String) && "number" === typeof input.length && true && ("object" === typeof input.caller && null !== input.caller && $io3(input.caller)) && "string" === typeof input.name;
    const $io36 = input => "object" === typeof input.prototype && null !== input.prototype && $io37(input.prototype) && "String" === input.schemaName && "number" === typeof input.length && true && ("object" === typeof input.caller && null !== input.caller && $io3(input.caller)) && "string" === typeof input.name;
    const $io37 = input => "object" === typeof input.defaultOptions && null !== input.defaultOptions && false === Array.isArray(input.defaultOptions) && $io1(input.defaultOptions) && ("object" === typeof input.OptionsConstructor && null !== input.OptionsConstructor && false === Array.isArray(input.OptionsConstructor) && $io2(input.OptionsConstructor)) && "string" === typeof input.instance && (undefined === input.isRequired || "boolean" === typeof input.isRequired) && ("object" === typeof input.options && null !== input.options && false === Array.isArray(input.options) && $io26(input.options)) && "string" === typeof input.path && ("object" === typeof input.schema && null !== input.schema && $io19(input.schema)) && (Array.isArray(input.validators) && input.validators.every(elem => "object" === typeof elem && null !== elem && false === Array.isArray(elem) && $io27(elem)));
    const $io38 = input => ("number" === typeof input.prototype || input.prototype instanceof Number) && "number" === typeof input.MAX_VALUE && "number" === typeof input.MIN_VALUE && "number" === typeof input.NaN && "number" === typeof input.NEGATIVE_INFINITY && "number" === typeof input.POSITIVE_INFINITY && "number" === typeof input.EPSILON && "number" === typeof input.MAX_SAFE_INTEGER && "number" === typeof input.MIN_SAFE_INTEGER && "number" === typeof input.length && true && ("object" === typeof input.caller && null !== input.caller && $io3(input.caller)) && "string" === typeof input.name;
    const $io39 = input => "object" === typeof input.prototype && null !== input.prototype && $io40(input.prototype) && "Number" === input.schemaName && "number" === typeof input.length && true && ("object" === typeof input.caller && null !== input.caller && $io3(input.caller)) && "string" === typeof input.name;
    const $io40 = input => "object" === typeof input.defaultOptions && null !== input.defaultOptions && false === Array.isArray(input.defaultOptions) && $io1(input.defaultOptions) && ("object" === typeof input.OptionsConstructor && null !== input.OptionsConstructor && false === Array.isArray(input.OptionsConstructor) && $io2(input.OptionsConstructor)) && "string" === typeof input.instance && (undefined === input.isRequired || "boolean" === typeof input.isRequired) && ("object" === typeof input.options && null !== input.options && false === Array.isArray(input.options) && $io26(input.options)) && "string" === typeof input.path && ("object" === typeof input.schema && null !== input.schema && $io19(input.schema)) && (Array.isArray(input.validators) && input.validators.every(elem => "object" === typeof elem && null !== elem && false === Array.isArray(elem) && $io27(elem)));
    const $io41 = input => ("boolean" === typeof input.prototype || input.prototype instanceof Boolean) && "number" === typeof input.length && true && ("object" === typeof input.caller && null !== input.caller && $io3(input.caller)) && "string" === typeof input.name;
    const $io42 = input => "object" === typeof input.prototype && null !== input.prototype && $io43(input.prototype) && "Boolean" === input.schemaName && input.convertToTrue instanceof Set && input.convertToFalse instanceof Set && "number" === typeof input.length && true && ("object" === typeof input.caller && null !== input.caller && $io3(input.caller)) && "string" === typeof input.name;
    const $io43 = input => "object" === typeof input.defaultOptions && null !== input.defaultOptions && false === Array.isArray(input.defaultOptions) && $io1(input.defaultOptions) && ("object" === typeof input.OptionsConstructor && null !== input.OptionsConstructor && false === Array.isArray(input.OptionsConstructor) && $io2(input.OptionsConstructor)) && "string" === typeof input.instance && (undefined === input.isRequired || "boolean" === typeof input.isRequired) && ("object" === typeof input.options && null !== input.options && false === Array.isArray(input.options) && $io26(input.options)) && "string" === typeof input.path && ("object" === typeof input.schema && null !== input.schema && $io19(input.schema)) && (Array.isArray(input.validators) && input.validators.every(elem => "object" === typeof elem && null !== elem && false === Array.isArray(elem) && $io27(elem)));
    const $io44 = input => "object" === typeof input.prototype && null !== input.prototype && $io45(input.prototype) && "number" === typeof input.length && true && ("object" === typeof input.caller && null !== input.caller && $io3(input.caller)) && "string" === typeof input.name;
    const $io45 = input => true;
    const $io46 = input => "object" === typeof input.prototype && null !== input.prototype && $io47(input.prototype) && "Date" === input.schemaName && "number" === typeof input.length && true && ("object" === typeof input.caller && null !== input.caller && $io3(input.caller)) && "string" === typeof input.name;
    const $io47 = input => "object" === typeof input.defaultOptions && null !== input.defaultOptions && false === Array.isArray(input.defaultOptions) && $io1(input.defaultOptions) && ("object" === typeof input.OptionsConstructor && null !== input.OptionsConstructor && false === Array.isArray(input.OptionsConstructor) && $io2(input.OptionsConstructor)) && "string" === typeof input.instance && (undefined === input.isRequired || "boolean" === typeof input.isRequired) && ("object" === typeof input.options && null !== input.options && false === Array.isArray(input.options) && $io26(input.options)) && "string" === typeof input.path && ("object" === typeof input.schema && null !== input.schema && $io19(input.schema)) && (Array.isArray(input.validators) && input.validators.every(elem => "object" === typeof elem && null !== elem && false === Array.isArray(elem) && $io27(elem)));
    const $io48 = input => Array.isArray(input.childSchemas) && input.childSchemas.every(elem => "object" === typeof elem && null !== elem && $io49(elem)) && (undefined === input.discriminators || "object" === typeof input.discriminators && null !== input.discriminators && false === Array.isArray(input.discriminators) && $io50(input.discriminators)) && ("object" === typeof input.methods && null !== input.methods && false === Array.isArray(input.methods) && $io33(input.methods)) && ("object" === typeof input.obj && null !== input.obj && false === Array.isArray(input.obj) && $iu4(input.obj)) && ("object" === typeof input.paths && null !== input.paths && false === Array.isArray(input.paths) && $io51(input.paths)) && ("object" === typeof input.query && null !== input.query && true) && ("object" === typeof input.statics && null !== input.statics && false === Array.isArray(input.statics) && $io53(input.statics)) && ("object" === typeof input.virtuals && null !== input.virtuals && true);
    const $io49 = input => "object" === typeof input.schema && null !== input.schema && $io19(input.schema) && true;
    const $io50 = input => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return "object" === typeof value && null !== value && $io19(value);
        return true;
    });
    const $io51 = input => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return "object" === typeof value && null !== value && $io25(value);
        return true;
    });
    const $io53 = input => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return true;
        return true;
    });
    const $io54 = input => "object" === typeof input.type && null !== input.type && $io28(input.type) && (null !== input.alias && (undefined === input.alias || "string" === typeof input.alias || Array.isArray(input.alias) && input.alias.every(elem => "string" === typeof elem))) && (null !== input.validate && (undefined === input.validate || (Array.isArray(input.validate) && ($ip11(input.validate) || false) || "object" === typeof input.validate && null !== input.validate && $iu1(input.validate)))) && (null !== input.cast && (undefined === input.cast || "function" === typeof input.cast || "string" === typeof input.cast || "boolean" === typeof input.cast || Array.isArray(input.cast) && ($ip12(input.cast) || false))) && (null !== input.required && (undefined === input.required || "function" === typeof input.required || "boolean" === typeof input.required || Array.isArray(input.required) && ($ip3(input.required) || false))) && true && (null !== input.ref && (undefined === input.ref || "function" === typeof input.ref || "string" === typeof input.ref || "object" === typeof input.ref && null !== input.ref && $io10(input.ref))) && (null !== input.refPath && (undefined === input.refPath || "function" === typeof input.refPath || "string" === typeof input.refPath)) && (undefined === input.select || "number" === typeof input.select || "boolean" === typeof input.select) && (null !== input.index && (undefined === input.index || 1 === input.index || -1 === input.index || "2d" === input.index || "2dsphere" === input.index || "geoHaystack" === input.index || "hashed" === input.index || "text" === input.index || "ascending" === input.index || "asc" === input.index || "descending" === input.index || "desc" === input.index || "boolean" === typeof input.index || "object" === typeof input.index && null !== input.index && false === Array.isArray(input.index) && $io59(input.index))) && (undefined === input.unique || "number" === typeof input.unique || "boolean" === typeof input.unique) && (null !== input.immutable && (undefined === input.immutable || "function" === typeof input.immutable || "boolean" === typeof input.immutable)) && (undefined === input.sparse || "number" === typeof input.sparse || "boolean" === typeof input.sparse) && true && (undefined === input.transform || true) && (undefined === input.get || true) && (undefined === input.set || true) && (null !== input["enum"] && (undefined === input["enum"] || (Array.isArray(input["enum"]) && ($ip4(input["enum"]) || false) || "object" === typeof input["enum"] && null !== input["enum"] && false === Array.isArray(input["enum"]) && $iu5(input["enum"])))) && (undefined === input.subtype || "number" === typeof input.subtype) && (null !== input.min && (undefined === input.min || "number" === typeof input.min || (Array.isArray(input.min) && ($ip5(input.min) || false) || "object" === typeof input.min && null !== input.min && $io45(input.min)))) && (null !== input.max && (undefined === input.max || "number" === typeof input.max || (Array.isArray(input.max) && ($ip5(input.max) || false) || "object" === typeof input.max && null !== input.max && $io45(input.max)))) && (undefined === input.expires || "string" === typeof input.expires || "number" === typeof input.expires) && (undefined === input.excludeIndexes || "boolean" === typeof input.excludeIndexes) && (undefined === input._id || "boolean" === typeof input._id) && (null !== input.of && (undefined === input.of || "string" === typeof input.of || (Array.isArray(input.of) && ($ip6(input.of) || false) || "object" === typeof input.of && null !== input.of && false === Array.isArray(input.of) && $iu6(input.of)))) && (undefined === input.auto || "boolean" === typeof input.auto) && (null !== input.match && (undefined === input.match || (Array.isArray(input.match) && ($ip7(input.match) || false) || "object" === typeof input.match && null !== input.match && $io4(input.match)))) && (undefined === input.lowercase || "boolean" === typeof input.lowercase) && (undefined === input.trim || "boolean" === typeof input.trim) && (undefined === input.uppercase || "boolean" === typeof input.uppercase) && (null !== input.minlength && (undefined === input.minlength || "number" === typeof input.minlength || Array.isArray(input.minlength) && ($ip8(input.minlength) || false))) && (null !== input.maxlength && (undefined === input.maxlength || "number" === typeof input.maxlength || Array.isArray(input.maxlength) && ($ip8(input.maxlength) || false))) && Object.keys(input).every(key => {
        if (["type", "alias", "validate", "cast", "required", "default", "ref", "refPath", "select", "index", "unique", "immutable", "sparse", "text", "transform", "get", "set", "enum", "subtype", "min", "max", "expires", "excludeIndexes", "_id", "of", "auto", "match", "lowercase", "trim", "uppercase", "minlength", "maxlength"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return true;
        return true;
    });
    const $io55 = input => (undefined === input.msg || "string" === typeof input.msg) && (null !== input.message && (undefined === input.message || "string" === typeof input.message || "object" === typeof input.message && null !== input.message && $io6(input.message))) && (undefined === input.type || "string" === typeof input.type) && ("object" === typeof input.validator && null !== input.validator && $iu9(input.validator)) && (undefined === input.propsParameter || "boolean" === typeof input.propsParameter);
    const $io56 = input => true && "number" === typeof input.length && true && ("object" === typeof input.caller && null !== input.caller && $io3(input.caller)) && "string" === typeof input.name;
    const $io57 = input => true && "number" === typeof input.length && true && ("object" === typeof input.caller && null !== input.caller && $io3(input.caller)) && "string" === typeof input.name;
    const $io58 = input => true && "number" === typeof input.length && true && ("object" === typeof input.caller && null !== input.caller && $io3(input.caller)) && "string" === typeof input.name;
    const $io59 = input => (undefined === input.expires || "string" === typeof input.expires || "number" === typeof input.expires) && (undefined === input.weights || "object" === typeof input.weights && null !== input.weights && false === Array.isArray(input.weights) && $io60(input.weights)) && (undefined === input.background || "boolean" === typeof input.background) && (undefined === input.unique || "boolean" === typeof input.unique) && (undefined === input.name || "string" === typeof input.name) && (undefined === input.partialFilterExpression || "object" === typeof input.partialFilterExpression && null !== input.partialFilterExpression && false === Array.isArray(input.partialFilterExpression) && $io61(input.partialFilterExpression)) && (undefined === input.sparse || "boolean" === typeof input.sparse) && (undefined === input.expireAfterSeconds || "number" === typeof input.expireAfterSeconds) && (undefined === input.storageEngine || "object" === typeof input.storageEngine && null !== input.storageEngine && false === Array.isArray(input.storageEngine) && $io61(input.storageEngine)) && (undefined === input.commitQuorum || "string" === typeof input.commitQuorum || "number" === typeof input.commitQuorum) && (undefined === input.version || "number" === typeof input.version) && (undefined === input.default_language || "string" === typeof input.default_language) && (undefined === input.language_override || "string" === typeof input.language_override) && (undefined === input.textIndexVersion || "number" === typeof input.textIndexVersion) && (undefined === input["2dsphereIndexVersion"] || "number" === typeof input["2dsphereIndexVersion"]) && (undefined === input.bits || "number" === typeof input.bits) && (undefined === input.min || "number" === typeof input.min) && (undefined === input.max || "number" === typeof input.max) && (undefined === input.bucketSize || "number" === typeof input.bucketSize) && (undefined === input.wildcardProjection || "object" === typeof input.wildcardProjection && null !== input.wildcardProjection && false === Array.isArray(input.wildcardProjection) && $io61(input.wildcardProjection)) && (undefined === input.hidden || "boolean" === typeof input.hidden) && (undefined === input.checkKeys || "boolean" === typeof input.checkKeys) && (undefined === input.serializeFunctions || "boolean" === typeof input.serializeFunctions) && (undefined === input.ignoreUndefined || "boolean" === typeof input.ignoreUndefined) && (undefined === input.useBigInt64 || "boolean" === typeof input.useBigInt64) && (undefined === input.promoteLongs || "boolean" === typeof input.promoteLongs) && (undefined === input.promoteBuffers || "boolean" === typeof input.promoteBuffers) && (undefined === input.promoteValues || "boolean" === typeof input.promoteValues) && (undefined === input.fieldsAsRaw || "object" === typeof input.fieldsAsRaw && null !== input.fieldsAsRaw && false === Array.isArray(input.fieldsAsRaw) && $io61(input.fieldsAsRaw)) && (undefined === input.bsonRegExp || "boolean" === typeof input.bsonRegExp) && (undefined === input.raw || "boolean" === typeof input.raw) && (null !== input.readConcern && (undefined === input.readConcern || "local" === input.readConcern || "majority" === input.readConcern || "linearizable" === input.readConcern || "available" === input.readConcern || "snapshot" === input.readConcern || "object" === typeof input.readConcern && null !== input.readConcern && $iu10(input.readConcern))) && (undefined === input.collation || "object" === typeof input.collation && null !== input.collation && $io64(input.collation)) && (undefined === input.maxTimeMS || "number" === typeof input.maxTimeMS) && true && (undefined === input.retryWrites || "boolean" === typeof input.retryWrites) && (undefined === input.dbName || "string" === typeof input.dbName) && (undefined === input.authdb || "string" === typeof input.authdb) && (undefined === input.noResponse || "boolean" === typeof input.noResponse) && (undefined === input.session || "object" === typeof input.session && null !== input.session && $io65(input.session)) && (undefined === input.willRetryWrite || "boolean" === typeof input.willRetryWrite) && (null !== input.readPreference && (undefined === input.readPreference || "primary" === input.readPreference || "primaryPreferred" === input.readPreference || "secondary" === input.readPreference || "secondaryPreferred" === input.readPreference || "nearest" === input.readPreference || "object" === typeof input.readPreference && null !== input.readPreference && $io70(input.readPreference))) && (undefined === input.omitReadPreference || "boolean" === typeof input.omitReadPreference) && (undefined === input.enableUtf8Validation || "boolean" === typeof input.enableUtf8Validation) && (undefined === input.explain || "string" === typeof input.explain || "boolean" === typeof input.explain);
    const $io60 = input => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return "number" === typeof value;
        return true;
    });
    const $io61 = input => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return true;
        return true;
    });
    const $io62 = input => "string" === typeof input.level;
    const $io63 = input => "local" === input.level || "majority" === input.level || "linearizable" === input.level || "available" === input.level || "snapshot" === input.level;
    const $io64 = input => "string" === typeof input.locale && (undefined === input.caseLevel || "boolean" === typeof input.caseLevel) && (undefined === input.caseFirst || "string" === typeof input.caseFirst) && (undefined === input.strength || "number" === typeof input.strength) && (undefined === input.numericOrdering || "boolean" === typeof input.numericOrdering) && (undefined === input.alternate || "string" === typeof input.alternate) && (undefined === input.maxVariable || "string" === typeof input.maxVariable) && (undefined === input.backwards || "boolean" === typeof input.backwards) && (undefined === input.normalization || "boolean" === typeof input.normalization);
    const $io65 = input => "boolean" === typeof input.hasEnded && (undefined === input.clientOptions || "object" === typeof input.clientOptions && null !== input.clientOptions && $io66(input.clientOptions)) && ("object" === typeof input.supports && null !== input.supports && "boolean" === typeof input.supports.causalConsistency) && (undefined === input.clusterTime || "object" === typeof input.clusterTime && null !== input.clusterTime && $io104(input.clusterTime)) && (undefined === input.operationTime || "object" === typeof input.operationTime && null !== input.operationTime && $io105(input.operationTime)) && "boolean" === typeof input.explicit && ("object" === typeof input.defaultTransactionOptions && null !== input.defaultTransactionOptions && false === Array.isArray(input.defaultTransactionOptions) && $io109(input.defaultTransactionOptions)) && ("object" === typeof input.transaction && null !== input.transaction && $io110(input.transaction));
    const $io66 = input => (undefined === input.appName || "string" === typeof input.appName) && (Array.isArray(input.hosts) && input.hosts.every(elem => "object" === typeof elem && null !== elem && $io67(elem))) && (undefined === input.srvHost || "string" === typeof input.srvHost) && (undefined === input.credentials || "object" === typeof input.credentials && null !== input.credentials && $io68(input.credentials)) && ("object" === typeof input.readPreference && null !== input.readPreference && $io70(input.readPreference)) && ("object" === typeof input.readConcern && null !== input.readConcern && "string" === typeof input.readConcern.level) && "boolean" === typeof input.loadBalanced && ("object" === typeof input.serverApi && null !== input.serverApi && $io73(input.serverApi)) && (Array.isArray(input.compressors) && input.compressors.every(elem => "none" === elem || "snappy" === elem || "zlib" === elem || "zstd" === elem)) && ("object" === typeof input.writeConcern && null !== input.writeConcern && false === Array.isArray(input.writeConcern) && $io74(input.writeConcern)) && "string" === typeof input.dbName && ("object" === typeof input.metadata && null !== input.metadata && $io75(input.metadata)) && (undefined === input.proxyHost || "string" === typeof input.proxyHost) && (undefined === input.proxyPort || "number" === typeof input.proxyPort) && (undefined === input.proxyUsername || "string" === typeof input.proxyUsername) && (undefined === input.proxyPassword || "string" === typeof input.proxyPassword) && "boolean" === typeof input.tls && (undefined === input.tlsCAFile || "string" === typeof input.tlsCAFile) && (undefined === input.tlsCRLFile || "string" === typeof input.tlsCRLFile) && (undefined === input.tlsCertificateKeyFile || "string" === typeof input.tlsCertificateKeyFile) && "boolean" === typeof input.raw && "boolean" === typeof input.retryWrites && ("object" === typeof input.autoEncryption && null !== input.autoEncryption && false === Array.isArray(input.autoEncryption) && $io81(input.autoEncryption)) && "number" === typeof input.connectTimeoutMS && "boolean" === typeof input.directConnection && ("object" === typeof input.driverInfo && null !== input.driverInfo && false === Array.isArray(input.driverInfo) && $io98(input.driverInfo)) && "boolean" === typeof input.forceServerObjectId && "number" === typeof input.minHeartbeatFrequencyMS && "number" === typeof input.heartbeatFrequencyMS && "number" === typeof input.localThresholdMS && "number" === typeof input.maxConnecting && "number" === typeof input.maxIdleTimeMS && "number" === typeof input.maxPoolSize && "number" === typeof input.minPoolSize && "boolean" === typeof input.monitorCommands && "boolean" === typeof input.noDelay && ("object" === typeof input.pkFactory && null !== input.pkFactory && true) && "string" === typeof input.replicaSet && "boolean" === typeof input.retryReads && "number" === typeof input.serverSelectionTimeoutMS && "number" === typeof input.socketTimeoutMS && "number" === typeof input.srvMaxHosts && "string" === typeof input.srvServiceName && "boolean" === typeof input.tlsAllowInvalidCertificates && "boolean" === typeof input.tlsAllowInvalidHostnames && "boolean" === typeof input.tlsInsecure && "number" === typeof input.waitQueueTimeoutMS && (0 === input.zlibCompressionLevel || 1 === input.zlibCompressionLevel || 2 === input.zlibCompressionLevel || 5 === input.zlibCompressionLevel || 3 === input.zlibCompressionLevel || 4 === input.zlibCompressionLevel || 6 === input.zlibCompressionLevel || 7 === input.zlibCompressionLevel || 8 === input.zlibCompressionLevel || 9 === input.zlibCompressionLevel) && (undefined === input.session || "object" === typeof input.session && null !== input.session && $io87(input.session)) && (undefined === input.checkServerIdentity || true) && (undefined === input.servername || "string" === typeof input.servername) && (undefined === input.minDHSize || "number" === typeof input.minDHSize) && (null !== input.ca && (undefined === input.ca || "string" === typeof input.ca || (Array.isArray(input.ca) && input.ca.every(elem => null !== elem && undefined !== elem && ("string" === typeof elem || "object" === typeof elem && null !== elem && $io87(elem))) || "object" === typeof input.ca && null !== input.ca && $io87(input.ca)))) && (null !== input.cert && (undefined === input.cert || "string" === typeof input.cert || (Array.isArray(input.cert) && input.cert.every(elem => null !== elem && undefined !== elem && ("string" === typeof elem || "object" === typeof elem && null !== elem && $io87(elem))) || "object" === typeof input.cert && null !== input.cert && $io87(input.cert)))) && (undefined === input.ciphers || "string" === typeof input.ciphers) && (null !== input.crl && (undefined === input.crl || "string" === typeof input.crl || (Array.isArray(input.crl) && input.crl.every(elem => null !== elem && undefined !== elem && ("string" === typeof elem || "object" === typeof elem && null !== elem && $io87(elem))) || "object" === typeof input.crl && null !== input.crl && $io87(input.crl)))) && (undefined === input.ecdhCurve || "string" === typeof input.ecdhCurve) && (null !== input.key && (undefined === input.key || "string" === typeof input.key || (Array.isArray(input.key) && input.key.every(elem => null !== elem && undefined !== elem && ("string" === typeof elem || "object" === typeof elem && null !== elem && $iu2(elem))) || "object" === typeof input.key && null !== input.key && $io87(input.key)))) && (undefined === input.passphrase || "string" === typeof input.passphrase) && (null !== input.pfx && (undefined === input.pfx || "string" === typeof input.pfx || (Array.isArray(input.pfx) && input.pfx.every(elem => null !== elem && undefined !== elem && ("string" === typeof elem || "object" === typeof elem && null !== elem && $iu3(elem))) || "object" === typeof input.pfx && null !== input.pfx && $io87(input.pfx)))) && (undefined === input.secureProtocol || "string" === typeof input.secureProtocol) && (undefined === input.secureContext || "object" === typeof input.secureContext && null !== input.secureContext && $io102(input.secureContext)) && (null !== input.ALPNProtocols && (undefined === input.ALPNProtocols || input.ALPNProtocols instanceof Uint8Array || Array.isArray(input.ALPNProtocols) && ($ip13(input.ALPNProtocols) || false))) && (undefined === input.rejectUnauthorized || "boolean" === typeof input.rejectUnauthorized) && (undefined === input.lookup || true) && (undefined === input.family || "number" === typeof input.family) && (undefined === input.hints || "number" === typeof input.hints) && (undefined === input.localAddress || "string" === typeof input.localAddress) && (undefined === input.localPort || "number" === typeof input.localPort);
    const $io67 = input => (undefined === input.host || "string" === typeof input.host) && (undefined === input.port || "number" === typeof input.port) && (undefined === input.socketPath || "string" === typeof input.socketPath) && "boolean" === typeof input.isIPv6;
    const $io68 = input => "string" === typeof input.username && "string" === typeof input.password && "string" === typeof input.source && ("MONGODB-AWS" === input.mechanism || "MONGODB-CR" === input.mechanism || "DEFAULT" === input.mechanism || "GSSAPI" === input.mechanism || "PLAIN" === input.mechanism || "SCRAM-SHA-1" === input.mechanism || "SCRAM-SHA-256" === input.mechanism || "MONGODB-X509" === input.mechanism || "MONGODB-OIDC" === input.mechanism) && ("object" === typeof input.mechanismProperties && null !== input.mechanismProperties && false === Array.isArray(input.mechanismProperties) && $io69(input.mechanismProperties));
    const $io69 = input => (undefined === input.SERVICE_HOST || "string" === typeof input.SERVICE_HOST) && (undefined === input.SERVICE_NAME || "string" === typeof input.SERVICE_NAME) && (undefined === input.SERVICE_REALM || "string" === typeof input.SERVICE_REALM) && (undefined === input.CANONICALIZE_HOST_NAME || "none" === input.CANONICALIZE_HOST_NAME || "forward" === input.CANONICALIZE_HOST_NAME || "forwardAndReverse" === input.CANONICALIZE_HOST_NAME || "boolean" === typeof input.CANONICALIZE_HOST_NAME) && (undefined === input.AWS_SESSION_TOKEN || "string" === typeof input.AWS_SESSION_TOKEN) && (undefined === input.REQUEST_TOKEN_CALLBACK || true) && (undefined === input.REFRESH_TOKEN_CALLBACK || true) && (undefined === input.PROVIDER_NAME || "aws" === input.PROVIDER_NAME || "azure" === input.PROVIDER_NAME) && (undefined === input.ALLOWED_HOSTS || Array.isArray(input.ALLOWED_HOSTS) && input.ALLOWED_HOSTS.every(elem => "string" === typeof elem)) && (undefined === input.TOKEN_AUDIENCE || "string" === typeof input.TOKEN_AUDIENCE) && Object.keys(input).every(key => {
        if (["SERVICE_HOST", "SERVICE_NAME", "SERVICE_REALM", "CANONICALIZE_HOST_NAME", "AWS_SESSION_TOKEN", "REQUEST_TOKEN_CALLBACK", "REFRESH_TOKEN_CALLBACK", "PROVIDER_NAME", "ALLOWED_HOSTS", "TOKEN_AUDIENCE"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return true;
        return true;
    });
    const $io70 = input => ("primary" === input.mode || "primaryPreferred" === input.mode || "secondary" === input.mode || "secondaryPreferred" === input.mode || "nearest" === input.mode) && (undefined === input.tags || Array.isArray(input.tags) && input.tags.every(elem => "object" === typeof elem && null !== elem && false === Array.isArray(elem) && $io71(elem))) && (undefined === input.hedge || "object" === typeof input.hedge && null !== input.hedge && false === Array.isArray(input.hedge) && $io72(input.hedge)) && (undefined === input.maxStalenessSeconds || "number" === typeof input.maxStalenessSeconds) && (undefined === input.minWireVersion || "number" === typeof input.minWireVersion);
    const $io71 = input => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return "string" === typeof value;
        return true;
    });
    const $io72 = input => undefined === input.enabled || "boolean" === typeof input.enabled;
    const $io73 = input => "1" === input.version && (undefined === input.strict || "boolean" === typeof input.strict) && (undefined === input.deprecationErrors || "boolean" === typeof input.deprecationErrors);
    const $io74 = input => (undefined === input.w || "majority" === input.w || "number" === typeof input.w) && (undefined === input.journal || "boolean" === typeof input.journal) && (undefined === input.wtimeoutMS || "number" === typeof input.wtimeoutMS) && (undefined === input.wtimeout || "number" === typeof input.wtimeout) && (undefined === input.j || "boolean" === typeof input.j) && (undefined === input.fsync || 1 === input.fsync || "boolean" === typeof input.fsync);
    const $io75 = input => "object" === typeof input.driver && null !== input.driver && ("string" === typeof input.driver.name && "string" === typeof input.driver.version) && ("object" === typeof input.os && null !== input.os && $io77(input.os)) && "string" === typeof input.platform && (undefined === input.application || "object" === typeof input.application && null !== input.application && $io78(input.application)) && (undefined === input.env || "object" === typeof input.env && null !== input.env && $io79(input.env));
    const $io77 = input => "string" === typeof input.type && (undefined === input.name || "aix" === input.name || "android" === input.name || "darwin" === input.name || "freebsd" === input.name || "haiku" === input.name || "linux" === input.name || "openbsd" === input.name || "sunos" === input.name || "win32" === input.name || "cygwin" === input.name || "netbsd" === input.name) && (undefined === input.architecture || "string" === typeof input.architecture) && (undefined === input.version || "string" === typeof input.version);
    const $io78 = input => "string" === typeof input.name;
    const $io79 = input => ("aws.lambda" === input.name || "gcp.func" === input.name || "azure.func" === input.name || "vercel" === input.name) && (undefined === input.timeout_sec || "object" === typeof input.timeout_sec && null !== input.timeout_sec && $io80(input.timeout_sec)) && (undefined === input.memory_mb || "object" === typeof input.memory_mb && null !== input.memory_mb && $io80(input.memory_mb)) && (undefined === input.region || "string" === typeof input.region) && (undefined === input.url || "string" === typeof input.url);
    const $io80 = input => "number" === typeof input.value;
    const $io81 = input => (undefined === input.keyVaultClient || "object" === typeof input.keyVaultClient && null !== input.keyVaultClient && false === Array.isArray(input.keyVaultClient) && $io82(input.keyVaultClient)) && (undefined === input.keyVaultNamespace || "string" === typeof input.keyVaultNamespace) && (undefined === input.kmsProviders || "object" === typeof input.kmsProviders && null !== input.kmsProviders && false === Array.isArray(input.kmsProviders) && $io83(input.kmsProviders)) && (undefined === input.schemaMap || "object" === typeof input.schemaMap && null !== input.schemaMap && false === Array.isArray(input.schemaMap) && $io61(input.schemaMap)) && (undefined === input.encryptedFieldsMap || "object" === typeof input.encryptedFieldsMap && null !== input.encryptedFieldsMap && false === Array.isArray(input.encryptedFieldsMap) && $io61(input.encryptedFieldsMap)) && (undefined === input.bypassAutoEncryption || "boolean" === typeof input.bypassAutoEncryption) && (undefined === input.bypassQueryAnalysis || "boolean" === typeof input.bypassQueryAnalysis) && (undefined === input.options || "object" === typeof input.options && null !== input.options && false === Array.isArray(input.options) && $io93(input.options)) && (undefined === input.extraOptions || "object" === typeof input.extraOptions && null !== input.extraOptions && false === Array.isArray(input.extraOptions) && $io94(input.extraOptions)) && (undefined === input.proxyOptions || "object" === typeof input.proxyOptions && null !== input.proxyOptions && false === Array.isArray(input.proxyOptions) && $io95(input.proxyOptions)) && (undefined === input.tlsOptions || "object" === typeof input.tlsOptions && null !== input.tlsOptions && false === Array.isArray(input.tlsOptions) && $io96(input.tlsOptions));
    const $io82 = input => true;
    const $io83 = input => (undefined === input.aws || "object" === typeof input.aws && null !== input.aws && false === Array.isArray(input.aws) && $iu11(input.aws)) && (undefined === input.local || "object" === typeof input.local && null !== input.local && $io86(input.local)) && (undefined === input.azure || "object" === typeof input.azure && null !== input.azure && false === Array.isArray(input.azure) && $iu12(input.azure)) && (undefined === input.gcp || "object" === typeof input.gcp && null !== input.gcp && false === Array.isArray(input.gcp) && $iu13(input.gcp)) && (undefined === input.kmip || "object" === typeof input.kmip && null !== input.kmip && false === Array.isArray(input.kmip) && $io92(input.kmip));
    const $io84 = input => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return null !== value && undefined === value;
        return true;
    });
    const $io85 = input => "string" === typeof input.accessKeyId && "string" === typeof input.secretAccessKey && (undefined === input.sessionToken || "string" === typeof input.sessionToken);
    const $io86 = input => null !== input.key && undefined !== input.key && ("string" === typeof input.key || "object" === typeof input.key && null !== input.key && $io87(input.key));
    const $io87 = input => "number" === typeof input.BYTES_PER_ELEMENT && (input.buffer instanceof ArrayBuffer || input.buffer instanceof SharedArrayBuffer) && "number" === typeof input.byteLength && "number" === typeof input.byteOffset && "number" === typeof input.length && "Uint8Array" === input["__@toStringTag@48"] && Object.keys(input).every(key => {
        if (["BYTES_PER_ELEMENT", "buffer", "byteLength", "byteOffset", "length", "__@toStringTag@48"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        if ("number" === typeof Number(key))
            return "number" === typeof value;
        return true;
    });
    const $io88 = input => "string" === typeof input.tenantId && "string" === typeof input.clientId && "string" === typeof input.clientSecret && (undefined === input.identityPlatformEndpoint || "string" === typeof input.identityPlatformEndpoint);
    const $io89 = input => "string" === typeof input.accessToken;
    const $io90 = input => "string" === typeof input.email && (null !== input.privateKey && undefined !== input.privateKey && ("string" === typeof input.privateKey || "object" === typeof input.privateKey && null !== input.privateKey && $io87(input.privateKey))) && (undefined === input.endpoint || "string" === typeof input.endpoint);
    const $io91 = input => "string" === typeof input.accessToken;
    const $io92 = input => undefined === input.endpoint || "string" === typeof input.endpoint;
    const $io93 = input => undefined === input.logger || true;
    const $io94 = input => (undefined === input.mongocryptdURI || "string" === typeof input.mongocryptdURI) && (undefined === input.mongocryptdBypassSpawn || "boolean" === typeof input.mongocryptdBypassSpawn) && (undefined === input.mongocryptdSpawnPath || "string" === typeof input.mongocryptdSpawnPath) && (undefined === input.mongocryptdSpawnArgs || Array.isArray(input.mongocryptdSpawnArgs) && input.mongocryptdSpawnArgs.every(elem => "string" === typeof elem)) && (undefined === input.cryptSharedLibPath || "string" === typeof input.cryptSharedLibPath) && (undefined === input.cryptSharedLibRequired || "boolean" === typeof input.cryptSharedLibRequired);
    const $io95 = input => (undefined === input.proxyHost || "string" === typeof input.proxyHost) && (undefined === input.proxyPort || "number" === typeof input.proxyPort) && (undefined === input.proxyUsername || "string" === typeof input.proxyUsername) && (undefined === input.proxyPassword || "string" === typeof input.proxyPassword);
    const $io96 = input => (undefined === input.aws || "object" === typeof input.aws && null !== input.aws && false === Array.isArray(input.aws) && $io97(input.aws)) && (undefined === input.gcp || "object" === typeof input.gcp && null !== input.gcp && false === Array.isArray(input.gcp) && $io97(input.gcp)) && (undefined === input.kmip || "object" === typeof input.kmip && null !== input.kmip && false === Array.isArray(input.kmip) && $io97(input.kmip)) && (undefined === input.local || "object" === typeof input.local && null !== input.local && false === Array.isArray(input.local) && $io97(input.local)) && (undefined === input.azure || "object" === typeof input.azure && null !== input.azure && false === Array.isArray(input.azure) && $io97(input.azure));
    const $io97 = input => (undefined === input.tlsCAFile || "string" === typeof input.tlsCAFile) && (undefined === input.tlsCertificateKeyFile || "string" === typeof input.tlsCertificateKeyFile) && (undefined === input.tlsCertificateKeyFilePassword || "string" === typeof input.tlsCertificateKeyFilePassword);
    const $io98 = input => (undefined === input.name || "string" === typeof input.name) && (undefined === input.version || "string" === typeof input.version) && (undefined === input.platform || "string" === typeof input.platform);
    const $io100 = input => null !== input.pem && undefined !== input.pem && ("string" === typeof input.pem || "object" === typeof input.pem && null !== input.pem && $io87(input.pem)) && (undefined === input.passphrase || "string" === typeof input.passphrase);
    const $io101 = input => null !== input.buf && undefined !== input.buf && ("string" === typeof input.buf || "object" === typeof input.buf && null !== input.buf && $io87(input.buf)) && (undefined === input.passphrase || "string" === typeof input.passphrase);
    const $io102 = input => true;
    const $io104 = input => "object" === typeof input.clusterTime && null !== input.clusterTime && $io105(input.clusterTime) && ("object" === typeof input.signature && null !== input.signature && $io106(input.signature));
    const $io105 = input => true && "boolean" === typeof input.__isLong__ && "number" === typeof input.high && "number" === typeof input.low && "boolean" === typeof input.unsigned && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true && true;
    const $io106 = input => "object" === typeof input.hash && null !== input.hash && $io107(input.hash) && ("object" === typeof input.keyId && null !== input.keyId && ("number" === typeof input.keyId.high && "number" === typeof input.keyId.low && "boolean" === typeof input.keyId.unsigned));
    const $io107 = input => input.buffer instanceof Uint8Array && "number" === typeof input.sub_type && "number" === typeof input.position;
    const $io109 = input => null !== input.readConcern && (undefined === input.readConcern || "local" === input.readConcern || "majority" === input.readConcern || "linearizable" === input.readConcern || "available" === input.readConcern || "snapshot" === input.readConcern || "object" === typeof input.readConcern && null !== input.readConcern && $iu10(input.readConcern)) && (undefined === input.writeConcern || "object" === typeof input.writeConcern && null !== input.writeConcern && false === Array.isArray(input.writeConcern) && $io74(input.writeConcern)) && (null !== input.readPreference && (undefined === input.readPreference || "primary" === input.readPreference || "primaryPreferred" === input.readPreference || "secondary" === input.readPreference || "secondaryPreferred" === input.readPreference || "nearest" === input.readPreference || "object" === typeof input.readPreference && null !== input.readPreference && $io70(input.readPreference))) && (undefined === input.maxCommitTimeMS || "number" === typeof input.maxCommitTimeMS) && (undefined === input.collation || "object" === typeof input.collation && null !== input.collation && $io64(input.collation)) && (undefined === input.maxTimeMS || "number" === typeof input.maxTimeMS) && true && (undefined === input.retryWrites || "boolean" === typeof input.retryWrites) && (undefined === input.dbName || "string" === typeof input.dbName) && (undefined === input.authdb || "string" === typeof input.authdb) && (undefined === input.noResponse || "boolean" === typeof input.noResponse) && (undefined === input.session || "object" === typeof input.session && null !== input.session && $io65(input.session)) && (undefined === input.willRetryWrite || "boolean" === typeof input.willRetryWrite) && (undefined === input.omitReadPreference || "boolean" === typeof input.omitReadPreference) && (undefined === input.raw || "boolean" === typeof input.raw) && (undefined === input.enableUtf8Validation || "boolean" === typeof input.enableUtf8Validation) && (undefined === input.checkKeys || "boolean" === typeof input.checkKeys) && (undefined === input.serializeFunctions || "boolean" === typeof input.serializeFunctions) && (undefined === input.ignoreUndefined || "boolean" === typeof input.ignoreUndefined) && (undefined === input.useBigInt64 || "boolean" === typeof input.useBigInt64) && (undefined === input.promoteLongs || "boolean" === typeof input.promoteLongs) && (undefined === input.promoteBuffers || "boolean" === typeof input.promoteBuffers) && (undefined === input.promoteValues || "boolean" === typeof input.promoteValues) && (undefined === input.fieldsAsRaw || "object" === typeof input.fieldsAsRaw && null !== input.fieldsAsRaw && false === Array.isArray(input.fieldsAsRaw) && $io61(input.fieldsAsRaw)) && (undefined === input.bsonRegExp || "boolean" === typeof input.bsonRegExp) && (undefined === input.explain || "string" === typeof input.explain || "boolean" === typeof input.explain);
    const $io110 = input => "object" === typeof input.options && null !== input.options && false === Array.isArray(input.options) && $io109(input.options);
    const $io111 = input => Array.isArray(input.values) && ($ip4(input.values) || false) && (undefined === input.message || "string" === typeof input.message);
    const $io112 = input => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return null === value || "string" === typeof value || "number" === typeof value;
        return true;
    });
    const $io113 = input => true && (null !== input.alias && (undefined === input.alias || "string" === typeof input.alias || Array.isArray(input.alias) && input.alias.every(elem => "string" === typeof elem))) && (null !== input.validate && (undefined === input.validate || (Array.isArray(input.validate) && ($ip1(input.validate) || false) || "object" === typeof input.validate && null !== input.validate && $iu0(input.validate)))) && (null !== input.cast && (undefined === input.cast || "function" === typeof input.cast || "string" === typeof input.cast || "boolean" === typeof input.cast || Array.isArray(input.cast) && ($ip2(input.cast) || false))) && (null !== input.required && (undefined === input.required || "function" === typeof input.required || "boolean" === typeof input.required || Array.isArray(input.required) && ($ip3(input.required) || false))) && true && (null !== input.ref && (undefined === input.ref || "function" === typeof input.ref || "string" === typeof input.ref || "object" === typeof input.ref && null !== input.ref && $io10(input.ref))) && (null !== input.refPath && (undefined === input.refPath || "function" === typeof input.refPath || "string" === typeof input.refPath)) && (undefined === input.select || "number" === typeof input.select || "boolean" === typeof input.select) && (null !== input.index && (undefined === input.index || 1 === input.index || -1 === input.index || "2d" === input.index || "2dsphere" === input.index || "geoHaystack" === input.index || "hashed" === input.index || "text" === input.index || "ascending" === input.index || "asc" === input.index || "descending" === input.index || "desc" === input.index || "boolean" === typeof input.index || "object" === typeof input.index && null !== input.index && false === Array.isArray(input.index) && $io59(input.index))) && (undefined === input.unique || "number" === typeof input.unique || "boolean" === typeof input.unique) && (null !== input.immutable && (undefined === input.immutable || "function" === typeof input.immutable || "boolean" === typeof input.immutable)) && (undefined === input.sparse || "number" === typeof input.sparse || "boolean" === typeof input.sparse) && true && (undefined === input.transform || true) && (undefined === input.get || true) && (undefined === input.set || true) && (null !== input["enum"] && (undefined === input["enum"] || (Array.isArray(input["enum"]) && ($ip4(input["enum"]) || false) || "object" === typeof input["enum"] && null !== input["enum"] && false === Array.isArray(input["enum"]) && $iu5(input["enum"])))) && (undefined === input.subtype || "number" === typeof input.subtype) && (null !== input.min && (undefined === input.min || "number" === typeof input.min || (Array.isArray(input.min) && ($ip5(input.min) || false) || "object" === typeof input.min && null !== input.min && $io45(input.min)))) && (null !== input.max && (undefined === input.max || "number" === typeof input.max || (Array.isArray(input.max) && ($ip5(input.max) || false) || "object" === typeof input.max && null !== input.max && $io45(input.max)))) && (undefined === input.expires || "string" === typeof input.expires || "number" === typeof input.expires) && (undefined === input.excludeIndexes || "boolean" === typeof input.excludeIndexes) && (undefined === input._id || "boolean" === typeof input._id) && (null !== input.of && (undefined === input.of || "string" === typeof input.of || (Array.isArray(input.of) && ($ip6(input.of) || false) || "object" === typeof input.of && null !== input.of && false === Array.isArray(input.of) && $iu6(input.of)))) && (undefined === input.auto || "boolean" === typeof input.auto) && (null !== input.match && (undefined === input.match || (Array.isArray(input.match) && ($ip7(input.match) || false) || "object" === typeof input.match && null !== input.match && $io4(input.match)))) && (undefined === input.lowercase || "boolean" === typeof input.lowercase) && (undefined === input.trim || "boolean" === typeof input.trim) && (undefined === input.uppercase || "boolean" === typeof input.uppercase) && (null !== input.minlength && (undefined === input.minlength || "number" === typeof input.minlength || Array.isArray(input.minlength) && ($ip8(input.minlength) || false))) && (null !== input.maxlength && (undefined === input.maxlength || "number" === typeof input.maxlength || Array.isArray(input.maxlength) && ($ip8(input.maxlength) || false))) && Object.keys(input).every(key => {
        if (["type", "alias", "validate", "cast", "required", "default", "ref", "refPath", "select", "index", "unique", "immutable", "sparse", "text", "transform", "get", "set", "enum", "subtype", "min", "max", "expires", "excludeIndexes", "_id", "of", "auto", "match", "lowercase", "trim", "uppercase", "minlength", "maxlength"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return true;
        return true;
    });
    const $io114 = input => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return "object" === typeof value && null !== value && $io25(value);
        return true;
    });
    const $io115 = input => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return true;
        return true;
    });
    const $io116 = input => true && (null !== input.alias && (undefined === input.alias || "string" === typeof input.alias || Array.isArray(input.alias) && input.alias.every(elem => "string" === typeof elem))) && (null !== input.validate && (undefined === input.validate || (Array.isArray(input.validate) && ($ip1(input.validate) || false) || "object" === typeof input.validate && null !== input.validate && $iu0(input.validate)))) && (null !== input.cast && (undefined === input.cast || "function" === typeof input.cast || "string" === typeof input.cast || "boolean" === typeof input.cast || Array.isArray(input.cast) && ($ip2(input.cast) || false))) && (null !== input.required && (undefined === input.required || "function" === typeof input.required || "boolean" === typeof input.required || Array.isArray(input.required) && ($ip3(input.required) || false))) && true && (null !== input.ref && (undefined === input.ref || "function" === typeof input.ref || "string" === typeof input.ref || "object" === typeof input.ref && null !== input.ref && $io10(input.ref))) && (null !== input.refPath && (undefined === input.refPath || "function" === typeof input.refPath || "string" === typeof input.refPath)) && (undefined === input.select || "number" === typeof input.select || "boolean" === typeof input.select) && (null !== input.index && (undefined === input.index || 1 === input.index || -1 === input.index || "2d" === input.index || "2dsphere" === input.index || "geoHaystack" === input.index || "hashed" === input.index || "text" === input.index || "ascending" === input.index || "asc" === input.index || "descending" === input.index || "desc" === input.index || "boolean" === typeof input.index || "object" === typeof input.index && null !== input.index && false === Array.isArray(input.index) && $io59(input.index))) && (undefined === input.unique || "number" === typeof input.unique || "boolean" === typeof input.unique) && (null !== input.immutable && (undefined === input.immutable || "function" === typeof input.immutable || "boolean" === typeof input.immutable)) && (undefined === input.sparse || "number" === typeof input.sparse || "boolean" === typeof input.sparse) && true && (undefined === input.transform || true) && (undefined === input.get || true) && (undefined === input.set || true) && (null !== input["enum"] && (undefined === input["enum"] || (Array.isArray(input["enum"]) && ($ip4(input["enum"]) || false) || "object" === typeof input["enum"] && null !== input["enum"] && false === Array.isArray(input["enum"]) && $iu5(input["enum"])))) && (undefined === input.subtype || "number" === typeof input.subtype) && (null !== input.min && (undefined === input.min || "number" === typeof input.min || (Array.isArray(input.min) && ($ip5(input.min) || false) || "object" === typeof input.min && null !== input.min && $io45(input.min)))) && (null !== input.max && (undefined === input.max || "number" === typeof input.max || (Array.isArray(input.max) && ($ip5(input.max) || false) || "object" === typeof input.max && null !== input.max && $io45(input.max)))) && (undefined === input.expires || "string" === typeof input.expires || "number" === typeof input.expires) && (undefined === input.excludeIndexes || "boolean" === typeof input.excludeIndexes) && (undefined === input._id || "boolean" === typeof input._id) && (null !== input.of && (undefined === input.of || "string" === typeof input.of || (Array.isArray(input.of) && ($ip6(input.of) || false) || "object" === typeof input.of && null !== input.of && false === Array.isArray(input.of) && $iu6(input.of)))) && (undefined === input.auto || "boolean" === typeof input.auto) && (null !== input.match && (undefined === input.match || (Array.isArray(input.match) && ($ip7(input.match) || false) || "object" === typeof input.match && null !== input.match && $io4(input.match)))) && (undefined === input.lowercase || "boolean" === typeof input.lowercase) && (undefined === input.trim || "boolean" === typeof input.trim) && (undefined === input.uppercase || "boolean" === typeof input.uppercase) && (null !== input.minlength && (undefined === input.minlength || "number" === typeof input.minlength || Array.isArray(input.minlength) && ($ip8(input.minlength) || false))) && (null !== input.maxlength && (undefined === input.maxlength || "number" === typeof input.maxlength || Array.isArray(input.maxlength) && ($ip8(input.maxlength) || false))) && Object.keys(input).every(key => {
        if (["type", "alias", "validate", "cast", "required", "default", "ref", "refPath", "select", "index", "unique", "immutable", "sparse", "text", "transform", "get", "set", "enum", "subtype", "min", "max", "expires", "excludeIndexes", "_id", "of", "auto", "match", "lowercase", "trim", "uppercase", "minlength", "maxlength"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return true;
        return true;
    });
    const $io117 = input => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return "object" === typeof value && null !== value && $io25(value);
        return true;
    });
    const $io118 = input => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (true)
            return true;
        return true;
    });
    const $iu0 = input => (() => {
        if (undefined !== input.prototype)
            return $io3(input);
        else if (undefined !== input.source)
            return $io4(input);
        else if (undefined !== input.validator)
            return $io5(input);
        else
            return false;
    })();
    const $iu1 = input => (() => {
        if (undefined !== input.prototype)
            return $io3(input);
        else if (undefined !== input.source)
            return $io4(input);
        else if (undefined !== input.validator)
            return $io55(input);
        else
            return false;
    })();
    const $iu2 = input => (() => {
        if (undefined !== input["__@toStringTag@48"])
            return $io87(input);
        else if (undefined !== input.pem)
            return $io100(input);
        else
            return false;
    })();
    const $iu3 = input => (() => {
        if (undefined !== input["__@toStringTag@48"])
            return $io87(input);
        else if (undefined !== input.buf)
            return $io101(input);
        else
            return false;
    })();
    const $iu4 = input => (() => {
        if ($io34(input))
            return $io34(input);
        else if ($io23(input))
            return $io23(input);
        else
            return false;
    })();
    const $iu5 = input => (() => {
        if (undefined !== input.values)
            return $io111(input);
        else
            return $io112(input);
    })();
    const $iu6 = input => (() => {
        if ("String" === input.schemaName)
            return $io36(input);
        else if (undefined !== input.MAX_VALUE)
            return $io38(input);
        else if ("Number" === input.schemaName)
            return $io39(input);
        else if ("Boolean" === input.schemaName)
            return $io42(input);
        else if ("Mixed" === input.schemaName)
            return $io28(input);
        else if ("Date" === input.schemaName)
            return $io46(input);
        else if (undefined !== input.childSchemas)
            return $io30(input);
        else
            return (() => {
                if ($io35(input))
                    return $io35(input);
                else if ($io24(input))
                    return $io24(input);
                else if ($io3(input))
                    return $io3(input);
                else if ($io2(input))
                    return $io2(input);
                else if ($io44(input))
                    return $io44(input);
                else if ($io41(input))
                    return $io41(input);
                else if ($io23(input))
                    return $io23(input);
                else if ($io34(input))
                    return $io34(input);
                else if ($io54(input))
                    return $io54(input);
                else
                    return false;
            })();
    })();
    const $iu7 = input => (() => {
        if ($io9(input))
            return $io9(input);
        else if ($io8(input))
            return $io8(input);
        else if ($io7(input))
            return $io7(input);
        else
            return false;
    })();
    const $iu8 = input => (() => {
        if (undefined !== input.schemaName)
            return $io28(input);
        else if (undefined !== input.childSchemas)
            return $io30(input);
        else
            return (() => {
                if ($io24(input))
                    return $io24(input);
                else if ($io3(input))
                    return $io3(input);
                else if ($io2(input))
                    return $io2(input);
                else if ($io23(input))
                    return $io23(input);
                else if ($io54(input))
                    return $io54(input);
                else
                    return false;
            })();
    })();
    const $iu9 = input => (() => {
        if ($io58(input))
            return $io58(input);
        else if ($io57(input))
            return $io57(input);
        else if ($io56(input))
            return $io56(input);
        else
            return false;
    })();
    const $iu10 = input => (() => {
        if ($io63(input))
            return $io63(input);
        else if ($io62(input))
            return $io62(input);
        else
            return false;
    })();
    const $iu11 = input => (() => {
        if (undefined !== input.accessKeyId)
            return $io85(input);
        else
            return $io84(input);
    })();
    const $iu12 = input => (() => {
        if (undefined !== input.tenantId)
            return $io88(input);
        else if (undefined !== input.accessToken)
            return $io89(input);
        else
            return $io84(input);
    })();
    const $iu13 = input => (() => {
        if (undefined !== input.email)
            return $io90(input);
        else if (undefined !== input.accessToken)
            return $io91(input);
        else
            return $io84(input);
    })();
    return "object" === typeof input && null !== input && $io0(input);
};