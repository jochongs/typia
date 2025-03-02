import typia from "typia";

import { _test_http_validateQuery } from "../../../internal/_test_http_validateQuery";
import { ObjectHttpCommentTag } from "../../../structures/ObjectHttpCommentTag";

export const test_http_createValidateQuery_ObjectHttpCommentTag =
  _test_http_validateQuery("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag,
  )(
    (
      input: string | URLSearchParams,
    ): typia.IValidation<typia.Resolved<ObjectHttpCommentTag>> => {
      const validate = (
        input: any,
      ): typia.IValidation<ObjectHttpCommentTag> => {
        const errors = [] as any[];
        const __is = (input: any): input is ObjectHttpCommentTag => {
          const $io0 = (input: any): boolean =>
            "number" === typeof input.int &&
            Math.floor(input.int) === input.int &&
            -2147483648 <= input.int &&
            input.int <= 2147483647 &&
            "bigint" === typeof input.uint64 &&
            BigInt(0) <= input.uint64 &&
            "string" === typeof input.uuid &&
            /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
              input.uuid,
            ) &&
            Array.isArray(input.items) &&
            10 <= input.items.length &&
            input.items.length <= 100 &&
            input.items.every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            );
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input)) {
          const $report = (typia.http.createValidateQuery as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectHttpCommentTag => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ("number" === typeof input.int &&
                  ((Math.floor(input.int) === input.int &&
                    -2147483648 <= input.int &&
                    input.int <= 2147483647) ||
                    $report(_exceptionable, {
                      path: _path + ".int",
                      expected: 'number & Type<"int32">',
                      value: input.int,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".int",
                    expected: '(number & Type<"int32">)',
                    value: input.int,
                  }),
                ("bigint" === typeof input.uint64 &&
                  (BigInt(0) <= input.uint64 ||
                    $report(_exceptionable, {
                      path: _path + ".uint64",
                      expected: 'bigint & Type<"uint64">',
                      value: input.uint64,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".uint64",
                    expected: '(bigint & Type<"uint64">)',
                    value: input.uint64,
                  }),
                ("string" === typeof input.uuid &&
                  (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                    input.uuid,
                  ) ||
                    $report(_exceptionable, {
                      path: _path + ".uuid",
                      expected: 'string & Format<"uuid">',
                      value: input.uuid,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".uuid",
                    expected: '(string & Format<"uuid">)',
                    value: input.uuid,
                  }),
                ((Array.isArray(input.items) ||
                  $report(_exceptionable, {
                    path: _path + ".items",
                    expected: "(Array<number> & MinItems<10> & MaxItems<100>)",
                    value: input.items,
                  })) &&
                  (10 <= input.items.length ||
                    $report(_exceptionable, {
                      path: _path + ".items",
                      expected: "Array<> & MinItems<10>",
                      value: input.items,
                    })) &&
                  (input.items.length <= 100 ||
                    $report(_exceptionable, {
                      path: _path + ".items",
                      expected: "Array<> & MaxItems<100>",
                      value: input.items,
                    })) &&
                  input.items
                    .map(
                      (elem: any, _index1: number) =>
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        $report(_exceptionable, {
                          path: _path + ".items[" + _index1 + "]",
                          expected: "number",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".items",
                    expected: "(Array<number> & MinItems<10> & MaxItems<100>)",
                    value: input.items,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectHttpCommentTag",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ObjectHttpCommentTag",
                value: input,
              })
            );
          })(input, "$input", true);
        }
        const success = 0 === errors.length;
        return {
          success,
          errors,
          data: success ? input : undefined,
        } as any;
      };
      const query = (
        input: string | URLSearchParams,
      ): typia.Resolved<ObjectHttpCommentTag> => {
        const $params = (typia.http.createValidateQuery as any).params;
        const $number = (typia.http.createValidateQuery as any).number;
        const $bigint = (typia.http.createValidateQuery as any).bigint;
        const $string = (typia.http.createValidateQuery as any).string;
        input = $params(input) as URLSearchParams;
        const output = {
          int: $number(input.get("int")),
          uint64: $bigint(input.get("uint64")),
          uuid: $string(input.get("uuid")),
          items: input.getAll("items").map((elem: any) => $number(elem)),
        };
        return output as any;
      };
      const output = query(input);
      return validate(output) as any;
    },
  );
