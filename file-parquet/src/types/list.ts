import {Field, List} from 'apache-arrow'
import assert from 'assert'
import {Type} from './type'

interface ListOptions {
    nullable?: boolean
}

export let ListType = <T, Options extends ListOptions>(
    itemType: Type<T>,
    options?: Options
): Type<(Options['nullable'] extends true ? T | null | undefined : T)[]> => ({
    arrowDataType: new List(Field.new('element', itemType.arrowDataType, options?.nullable)),
    prepare(value) {
        return this.validate(value).map((i) => (i == null ? null : itemType.prepare(i)))
    },
    validate(value) {
        assert(Array.isArray(value))
        if (!options?.nullable) {
            for (let i of value) {
                assert(i != null)
            }
        }
        return value
    },
})

// export let MapType = <T>(itemType: Type<T>): Type<Map<string, T>> => ({
//     arrowDataType: new Map_(
//         Field.new(
//             'key_value',
//             new Struct([Field.new('key', new Utf8()), Field.new('value', itemType.arrowDataType) as any])
//         )
//     ),
//     prepare(value) {
//         return [...this.validate(value).entries()].map(([key, value]) => ({
//             key,
//             value,
//         }))
//     },
//     validate(value) {
//         assert(value instanceof Map)
//         return value
//     },
// })
