import typia from "typia";

import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_createAssertGuardEquals_AtomicAlias = _test_assertGuardEquals(
  "AtomicAlias",
)<AtomicAlias>(AtomicAlias)((input: any): asserts input is AtomicAlias => {
  const __is = (
    input: any,
    _exceptionable: boolean = true,
  ): input is AtomicAlias => {
    return (
      Array.isArray(input) &&
      input.length === 3 &&
      "boolean" === typeof input[0] &&
      "number" === typeof input[1] &&
      Number.isFinite(input[1]) &&
      "string" === typeof input[2]
    );
  };
  if (false === __is(input))
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is AtomicAlias => {
      const $guard = (typia.createAssertGuardEquals as any).guard;
      return (
        ((Array.isArray(input) ||
          $guard(true, {
            path: _path + "",
            expected: "AtomicAlias",
            value: input,
          })) &&
          (input.length === 3 ||
            $guard(true, {
              path: _path + "",
              expected: "[boolean, number, string]",
              value: input,
            })) &&
          ("boolean" === typeof input[0] ||
            $guard(true, {
              path: _path + "[0]",
              expected: "boolean",
              value: input[0],
            })) &&
          (("number" === typeof input[1] && Number.isFinite(input[1])) ||
            $guard(true, {
              path: _path + "[1]",
              expected: "number",
              value: input[1],
            })) &&
          ("string" === typeof input[2] ||
            $guard(true, {
              path: _path + "[2]",
              expected: "string",
              value: input[2],
            }))) ||
        $guard(true, {
          path: _path + "",
          expected: "AtomicAlias",
          value: input,
        })
      );
    })(input, "$input", true);
});
