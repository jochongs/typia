import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_reflect_metadata_ConstantIntersection =
  _test_reflect_metadata("ConstantIntersection")(
    (typia.reflect.metadata as any).from({
      metadatas: [
        {
          any: false,
          required: true,
          optional: false,
          nullable: false,
          functional: false,
          atomics: [],
          constants: [],
          templates: [],
          escaped: null,
          rest: null,
          arrays: [],
          tuples: [
            {
              name: "ConstantIntersection",
              tags: [],
            },
          ],
          objects: [],
          aliases: [],
          natives: [],
          sets: [],
          maps: [],
        },
      ],
      components: {
        objects: [],
        aliases: [],
        arrays: [],
        tuples: [
          {
            name: "ConstantIntersection",
            index: null,
            elements: [
              {
                any: false,
                required: true,
                optional: false,
                nullable: false,
                functional: false,
                atomics: [],
                constants: [
                  {
                    type: "boolean",
                    values: [false],
                  },
                ],
                templates: [],
                escaped: null,
                rest: null,
                arrays: [],
                tuples: [],
                objects: [],
                aliases: [],
                natives: [],
                sets: [],
                maps: [],
              },
              {
                any: false,
                required: true,
                optional: false,
                nullable: false,
                functional: false,
                atomics: [],
                constants: [
                  {
                    type: "number",
                    values: [1],
                  },
                ],
                templates: [],
                escaped: null,
                rest: null,
                arrays: [],
                tuples: [],
                objects: [],
                aliases: [],
                natives: [],
                sets: [],
                maps: [],
              },
              {
                any: false,
                required: true,
                optional: false,
                nullable: false,
                functional: false,
                atomics: [],
                constants: [
                  {
                    type: "string",
                    values: ["two"],
                  },
                ],
                templates: [],
                escaped: null,
                rest: null,
                arrays: [],
                tuples: [],
                objects: [],
                aliases: [],
                natives: [],
                sets: [],
                maps: [],
              },
            ],
            recursive: false,
            nullables: [false],
          },
        ],
      },
    }),
  );
