import typia from "typia";

import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { CommentTagBigInt } from "../../../structures/CommentTagBigInt";

export const test_misc_createAssertPrune_CommentTagBigInt =
  _test_misc_assertPrune("CommentTagBigInt")<CommentTagBigInt>(
    CommentTagBigInt,
  )((input: any): CommentTagBigInt => {
    const assert = (input: any): CommentTagBigInt => {
      const __is = (input: any): input is CommentTagBigInt => {
        return (
          "object" === typeof input &&
          null !== input &&
          "bigint" === typeof (input as any).value &&
          "bigint" === typeof (input as any).ranged &&
          0 <= (input as any).ranged &&
          (input as any).ranged <= 100 &&
          "bigint" === typeof (input as any).minimum &&
          0 <= (input as any).minimum &&
          "bigint" === typeof (input as any).maximum &&
          (input as any).maximum <= 100 &&
          "bigint" === typeof (input as any).multipleOf &&
          (input as any).multipleOf % 3n === 0n
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is CommentTagBigInt => {
          const $guard = (typia.misc.createAssertPrune as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("bigint" === typeof input.value ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "bigint",
                value: input.value,
              })) &&
            (("bigint" === typeof input.ranged &&
              (0 <= input.ranged ||
                $guard(_exceptionable, {
                  path: _path + ".ranged",
                  expected: "bigint & Minimum<0n>",
                  value: input.ranged,
                })) &&
              (input.ranged <= 100 ||
                $guard(_exceptionable, {
                  path: _path + ".ranged",
                  expected: "bigint & Maximum<100n>",
                  value: input.ranged,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".ranged",
                expected: "(bigint & Minimum<0n> & Maximum<100n>)",
                value: input.ranged,
              })) &&
            (("bigint" === typeof input.minimum &&
              (0 <= input.minimum ||
                $guard(_exceptionable, {
                  path: _path + ".minimum",
                  expected: "bigint & Minimum<0n>",
                  value: input.minimum,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".minimum",
                expected: "(bigint & Minimum<0n>)",
                value: input.minimum,
              })) &&
            (("bigint" === typeof input.maximum &&
              (input.maximum <= 100 ||
                $guard(_exceptionable, {
                  path: _path + ".maximum",
                  expected: "bigint & Maximum<100n>",
                  value: input.maximum,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".maximum",
                expected: "(bigint & Maximum<100n>)",
                value: input.maximum,
              })) &&
            (("bigint" === typeof input.multipleOf &&
              (input.multipleOf % 3n === 0n ||
                $guard(_exceptionable, {
                  path: _path + ".multipleOf",
                  expected: "bigint & MultipleOf<3n>",
                  value: input.multipleOf,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".multipleOf",
                expected: "(bigint & MultipleOf<3n>)",
                value: input.multipleOf,
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "CommentTagBigInt",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "CommentTagBigInt",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const prune = (input: CommentTagBigInt): void => {
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if (
            "value" === key ||
            "ranged" === key ||
            "minimum" === key ||
            "maximum" === key ||
            "multipleOf" === key
          )
            continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    assert(input);
    prune(input);
    return input;
  });
