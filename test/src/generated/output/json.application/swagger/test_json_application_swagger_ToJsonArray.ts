import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonArray } from "../../../../structures/ToJsonArray";

export const test_json_application_swagger_ToJsonArray = _test_json_application(
  "swagger",
)("ToJsonArray")({
  schemas: [
    {
      $ref: "#/components/schemas/ToJsonArray",
    },
  ],
  components: {
    schemas: {
      ToJsonArray: {
        type: "array",
        items: {
          oneOf: [
            {
              type: "array",
              items: {
                type: "boolean",
              },
            },
            {
              type: "array",
              items: {
                type: "number",
              },
            },
            {
              type: "array",
              items: {
                type: "string",
              },
            },
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ToJsonArray.IObject",
              },
            },
          ],
        },
        minItems: 4,
        maxItems: 4,
        "x-typia-tuple": {
          type: "array",
          items: [
            {
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "boolean",
              },
            },
            {
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "number",
              },
            },
            {
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "string",
              },
            },
            {
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/ToJsonArray.IObject",
              },
            },
          ],
          minItems: 4,
          maxItems: 4,
        },
      },
      "ToJsonArray.IObject": {
        type: "object",
        properties: {
          id: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
          },
        },
        nullable: false,
        required: ["id"],
        "x-typia-jsDocTags": [],
      },
    },
  },
  purpose: "swagger",
});
