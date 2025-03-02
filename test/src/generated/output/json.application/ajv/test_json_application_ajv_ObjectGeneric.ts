import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectGeneric } from "../../../../structures/ObjectGeneric";

export const test_json_application_ajv_ObjectGeneric = _test_json_application(
  "ajv",
)("ObjectGeneric")({
  schemas: [
    {
      $ref: "#/components/schemas/ObjectGeneric",
    },
  ],
  components: {
    schemas: {
      ObjectGeneric: {
        $id: "#/components/schemas/ObjectGeneric",
        type: "array",
        items: [
          {
            $ref: "#/components/schemas/ObjectGeneric.ISomethingboolean",
          },
          {
            $ref: "#/components/schemas/ObjectGeneric.ISomethingnumber",
          },
          {
            $ref: "#/components/schemas/ObjectGeneric.ISomethingstring",
          },
        ],
        minItems: 3,
        maxItems: 3,
      },
      "ObjectGeneric.ISomethingboolean": {
        $id: "#/components/schemas/ObjectGeneric.ISomethingboolean",
        type: "object",
        properties: {
          value: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "boolean",
          },
          child: {
            $ref: "#/components/schemas/ObjectGeneric.IChildbooleanboolean",
          },
          elements: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "array",
            items: {
              $ref: "#/components/schemas/ObjectGeneric.IChildbooleanboolean",
            },
          },
        },
        required: ["value", "child", "elements"],
        "x-typia-jsDocTags": [],
      },
      "ObjectGeneric.IChildbooleanboolean": {
        $id: "#/components/schemas/ObjectGeneric.IChildbooleanboolean",
        type: "object",
        properties: {
          child_value: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "boolean",
          },
          child_next: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "boolean",
          },
        },
        required: ["child_value", "child_next"],
        "x-typia-jsDocTags": [],
      },
      "ObjectGeneric.ISomethingnumber": {
        $id: "#/components/schemas/ObjectGeneric.ISomethingnumber",
        type: "object",
        properties: {
          value: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "number",
          },
          child: {
            $ref: "#/components/schemas/ObjectGeneric.IChildnumbernumber",
          },
          elements: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "array",
            items: {
              $ref: "#/components/schemas/ObjectGeneric.IChildnumbernumber",
            },
          },
        },
        required: ["value", "child", "elements"],
        "x-typia-jsDocTags": [],
      },
      "ObjectGeneric.IChildnumbernumber": {
        $id: "#/components/schemas/ObjectGeneric.IChildnumbernumber",
        type: "object",
        properties: {
          child_value: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "number",
          },
          child_next: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "number",
          },
        },
        required: ["child_value", "child_next"],
        "x-typia-jsDocTags": [],
      },
      "ObjectGeneric.ISomethingstring": {
        $id: "#/components/schemas/ObjectGeneric.ISomethingstring",
        type: "object",
        properties: {
          value: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
          },
          child: {
            $ref: "#/components/schemas/ObjectGeneric.IChildstringstring",
          },
          elements: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "array",
            items: {
              $ref: "#/components/schemas/ObjectGeneric.IChildstringstring",
            },
          },
        },
        required: ["value", "child", "elements"],
        "x-typia-jsDocTags": [],
      },
      "ObjectGeneric.IChildstringstring": {
        $id: "#/components/schemas/ObjectGeneric.IChildstringstring",
        type: "object",
        properties: {
          child_value: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
          },
          child_next: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
          },
        },
        required: ["child_value", "child_next"],
        "x-typia-jsDocTags": [],
      },
    },
  },
  purpose: "ajv",
});
