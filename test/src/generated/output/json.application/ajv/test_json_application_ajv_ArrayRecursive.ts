import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRecursive } from "../../../../structures/ArrayRecursive";

export const test_json_application_ajv_ArrayRecursive = _test_json_application(
  "ajv",
)("ArrayRecursive")({
  schemas: [
    {
      $ref: "#/components/schemas/ArrayRecursive.ICategory",
    },
  ],
  components: {
    schemas: {
      "ArrayRecursive.ICategory": {
        $id: "#/components/schemas/ArrayRecursive.ICategory",
        type: "object",
        properties: {
          children: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "array",
            items: {
              $ref: "#/components/schemas/ArrayRecursive.ICategory",
            },
          },
          id: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "number",
          },
          code: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
          },
          sequence: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "number",
          },
          created_at: {
            $ref: "#/components/schemas/ArrayRecursive.ITimestamp",
          },
        },
        required: ["children", "id", "code", "sequence", "created_at"],
        "x-typia-jsDocTags": [],
      },
      "ArrayRecursive.ITimestamp": {
        $id: "#/components/schemas/ArrayRecursive.ITimestamp",
        type: "object",
        properties: {
          time: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "number",
          },
          zone: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "number",
          },
        },
        required: ["time", "zone"],
        "x-typia-jsDocTags": [],
      },
    },
  },
  purpose: "ajv",
});
