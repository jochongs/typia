import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagRange } from "../../../../structures/TypeTagRange";

export const test_json_application_swagger_TypeTagRange =
  _test_json_application("swagger")("TypeTagRange")({
    schemas: [
      {
        $ref: "#/components/schemas/TypeTagRange",
      },
    ],
    components: {
      schemas: {
        TypeTagRange: {
          type: "object",
          properties: {
            value: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/TypeTagRange.Type",
              },
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "TypeTagRange.Type": {
          type: "object",
          properties: {
            greater: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "integer",
              minimum: 3,
              exclusiveMinimum: true,
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
                {
                  target: "number",
                  name: "ExclusiveMinimum<3>",
                  kind: "exclusiveMinimum",
                  value: 3,
                  validate: "3 < $input",
                  exclusive: ["exclusiveMinimum", "minimum"],
                },
              ],
            },
            greater_equal: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "integer",
              minimum: 3,
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
                {
                  target: "number",
                  name: "Minimum<3>",
                  kind: "minimum",
                  value: 3,
                  validate: "3 <= $input",
                  exclusive: ["minimum", "exclusiveMinimum"],
                },
              ],
            },
            less: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "integer",
              maximum: 7,
              exclusiveMaximum: true,
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
                {
                  target: "number",
                  name: "ExclusiveMaximum<7>",
                  kind: "exclusiveMaximum",
                  value: 7,
                  validate: "$input < 7",
                  exclusive: ["exclusiveMaximum", "maximum"],
                },
              ],
            },
            less_equal: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "integer",
              maximum: 7,
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
                {
                  target: "number",
                  name: "Maximum<7>",
                  kind: "maximum",
                  value: 7,
                  validate: "$input <= 7",
                  exclusive: ["maximum", "exclusiveMaximum"],
                },
              ],
            },
            greater_less: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "integer",
              maximum: 7,
              exclusiveMaximum: true,
              minimum: 3,
              exclusiveMinimum: true,
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
                {
                  target: "number",
                  name: "ExclusiveMinimum<3>",
                  kind: "exclusiveMinimum",
                  value: 3,
                  validate: "3 < $input",
                  exclusive: ["exclusiveMinimum", "minimum"],
                },
                {
                  target: "number",
                  name: "ExclusiveMaximum<7>",
                  kind: "exclusiveMaximum",
                  value: 7,
                  validate: "$input < 7",
                  exclusive: ["exclusiveMaximum", "maximum"],
                },
              ],
            },
            greater_equal_less: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "integer",
              maximum: 7,
              exclusiveMaximum: true,
              minimum: 3,
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
                {
                  target: "number",
                  name: "Minimum<3>",
                  kind: "minimum",
                  value: 3,
                  validate: "3 <= $input",
                  exclusive: ["minimum", "exclusiveMinimum"],
                },
                {
                  target: "number",
                  name: "ExclusiveMaximum<7>",
                  kind: "exclusiveMaximum",
                  value: 7,
                  validate: "$input < 7",
                  exclusive: ["exclusiveMaximum", "maximum"],
                },
              ],
            },
            greater_less_equal: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "integer",
              minimum: 3,
              exclusiveMinimum: true,
              maximum: 7,
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
                {
                  target: "number",
                  name: "ExclusiveMinimum<3>",
                  kind: "exclusiveMinimum",
                  value: 3,
                  validate: "3 < $input",
                  exclusive: ["exclusiveMinimum", "minimum"],
                },
                {
                  target: "number",
                  name: "Maximum<7>",
                  kind: "maximum",
                  value: 7,
                  validate: "$input <= 7",
                  exclusive: ["maximum", "exclusiveMaximum"],
                },
              ],
            },
            greater_equal_less_equal: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "integer",
              maximum: 7,
              minimum: 3,
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
                {
                  target: "number",
                  name: "Minimum<3>",
                  kind: "minimum",
                  value: 3,
                  validate: "3 <= $input",
                  exclusive: ["minimum", "exclusiveMinimum"],
                },
                {
                  target: "number",
                  name: "Maximum<7>",
                  kind: "maximum",
                  value: 7,
                  validate: "$input <= 7",
                  exclusive: ["maximum", "exclusiveMaximum"],
                },
              ],
            },
            equal: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "integer",
              maximum: 10,
              minimum: 10,
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
                {
                  target: "number",
                  name: "Minimum<10>",
                  kind: "minimum",
                  value: 10,
                  validate: "10 <= $input",
                  exclusive: ["minimum", "exclusiveMinimum"],
                },
                {
                  target: "number",
                  name: "Maximum<10>",
                  kind: "maximum",
                  value: 10,
                  validate: "$input <= 10",
                  exclusive: ["maximum", "exclusiveMaximum"],
                },
              ],
            },
          },
          nullable: false,
          required: [
            "greater",
            "greater_equal",
            "less",
            "less_equal",
            "greater_less",
            "greater_equal_less",
            "greater_less_equal",
            "greater_equal_less_equal",
            "equal",
          ],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
  });
