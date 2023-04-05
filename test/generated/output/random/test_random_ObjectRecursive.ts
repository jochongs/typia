import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_random_ObjectRecursive = _test_random(
    "ObjectRecursive",
    () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Primitive<ObjectRecursive> => {
            const $pick = (typia.random as any).pick;
            const $generator = (typia.random as any).generator;
            const $ro0 = (
                _recursive: boolean = true,
                _depth: number = 0,
            ): any => ({
                parent: $pick([
                    () => null,
                    () => $ro0(true, _recursive ? 1 + _depth : _depth),
                ])(),
                id:
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
                code:
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
                name:
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
                sequence:
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
                created_at: $ro1(true, _recursive ? 1 + _depth : _depth),
            });
            const $ro1 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                time:
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
                zone:
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            });
            return $ro0();
        })(),
    (input: any): ObjectRecursive => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ObjectRecursive => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (null === input.parent ||
                    ((("object" === typeof input.parent &&
                        null !== input.parent) ||
                        $guard(_exceptionable, {
                            path: _path + ".parent",
                            expected:
                                "(Resolve<ObjectRecursive.IDepartment> | null)",
                            value: input.parent,
                        })) &&
                        $ao0(
                            input.parent,
                            _path + ".parent",
                            true && _exceptionable,
                        ))) &&
                (("number" === typeof input.id && Number.isFinite(input.id)) ||
                    $guard(_exceptionable, {
                        path: _path + ".id",
                        expected: "number",
                        value: input.id,
                    })) &&
                ("string" === typeof input.code ||
                    $guard(_exceptionable, {
                        path: _path + ".code",
                        expected: "string",
                        value: input.code,
                    })) &&
                ("string" === typeof input.name ||
                    $guard(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                    })) &&
                (("number" === typeof input.sequence &&
                    Number.isFinite(input.sequence)) ||
                    $guard(_exceptionable, {
                        path: _path + ".sequence",
                        expected: "number",
                        value: input.sequence,
                    })) &&
                (("object" === typeof input.created_at &&
                    null !== input.created_at) ||
                    $guard(_exceptionable, {
                        path: _path + ".created_at",
                        expected: "Resolve<ObjectRecursive.ITimestamp>",
                        value: input.created_at,
                    })) &&
                $ao1(
                    input.created_at,
                    _path + ".created_at",
                    true && _exceptionable,
                );
            const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("number" === typeof input.time &&
                    Number.isFinite(input.time)) ||
                    $guard(_exceptionable, {
                        path: _path + ".time",
                        expected: "number",
                        value: input.time,
                    })) &&
                (("number" === typeof input.zone &&
                    Number.isFinite(input.zone)) ||
                    $guard(_exceptionable, {
                        path: _path + ".zone",
                        expected: "number",
                        value: input.zone,
                    }));
            return (
                (("object" === typeof input && null !== input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Resolve<ObjectRecursive.IDepartment>",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
        return input;
    },
);
