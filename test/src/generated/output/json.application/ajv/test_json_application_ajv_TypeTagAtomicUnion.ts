import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagAtomicUnion } from "../../../../structures/TypeTagAtomicUnion";

export const test_json_application_ajv_TypeTagAtomicUnion =
  _test_json_application("ajv")("TypeTagAtomicUnion")({
    schemas: [
      {
        $ref: "#/components/schemas/TypeTagAtomicUnion",
      },
    ],
    components: {
      schemas: {
        TypeTagAtomicUnion: {
          $id: "#/components/schemas/TypeTagAtomicUnion",
          type: "object",
          properties: {
            value: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/TypeTagAtomicUnion.Type",
              },
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "TypeTagAtomicUnion.Type": {
          $id: "#/components/schemas/TypeTagAtomicUnion.Type",
          type: "object",
          properties: {
            value: {
              oneOf: [
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "string",
                  maxLength: 7,
                  minLength: 3,
                  "x-typia-typeTags": [
                    {
                      target: "string",
                      name: "MinLength<3>",
                      kind: "minLength",
                      value: 3,
                      validate: "3 <= $input.length",
                      exclusive: true,
                    },
                    {
                      target: "string",
                      name: "MaxLength<7>",
                      kind: "maxLength",
                      value: 7,
                      validate: "$input.length <= 7",
                      exclusive: true,
                    },
                  ],
                },
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "number",
                  minimum: 3,
                  "x-typia-typeTags": [
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
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
  });
