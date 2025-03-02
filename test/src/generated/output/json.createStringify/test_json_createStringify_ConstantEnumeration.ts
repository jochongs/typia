import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_json_createStringify_ConstantEnumeration =
  _test_json_stringify("ConstantEnumeration")<ConstantEnumeration>(
    ConstantEnumeration,
  )((input: ConstantEnumeration): string => {
    const $string = (typia.json.createStringify as any).string;
    const $number = (typia.json.createStringify as any).number;
    const $throws = (typia.json.createStringify as any).throws;
    return `[${input
      .map((elem: any) =>
        (() => {
          if ("string" === typeof elem) return $string(elem);
          if ("number" === typeof elem) return $number(elem);
          if ("string" === typeof elem) return '"' + elem + '"';
          $throws({
            expected: '("Four" | "Three" | 0 | 1 | 2)',
            value: elem,
          });
        })(),
      )
      .join(",")}]`;
  });
