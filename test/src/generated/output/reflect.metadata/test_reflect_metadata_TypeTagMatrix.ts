import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_reflect_metadata_TypeTagMatrix = _test_reflect_metadata(
  "TypeTagMatrix",
)(
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
        tuples: [],
        objects: ["TypeTagMatrix"],
        aliases: [],
        natives: [],
        sets: [],
        maps: [],
      },
    ],
    components: {
      objects: [
        {
          name: "TypeTagMatrix",
          properties: [
            {
              key: {
                any: false,
                required: true,
                optional: false,
                nullable: false,
                functional: false,
                atomics: [],
                constants: [
                  {
                    type: "string",
                    values: ["matrix"],
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
              value: {
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
                arrays: [
                  {
                    name: 'Array<(string & Format<"uuid">)[] & MinItems<4> & MaxItems<4>>',
                    tags: [
                      [
                        {
                          target: "array",
                          name: "MinItems<3>",
                          kind: "minItems",
                          value: 3,
                          validate: "3 <= $input.length",
                          exclusive: true,
                        },
                        {
                          target: "array",
                          name: "MaxItems<3>",
                          kind: "maxItems",
                          value: 3,
                          validate: "$input.length <= 3",
                          exclusive: true,
                        },
                      ],
                    ],
                  },
                ],
                tuples: [],
                objects: [],
                aliases: [],
                natives: [],
                sets: [],
                maps: [],
              },
              description: null,
              jsDocTags: [],
            },
          ],
          jsDocTags: [],
          index: 0,
          validated: false,
          recursive: false,
          nullables: [false],
        },
      ],
      aliases: [],
      arrays: [
        {
          name: 'Array<(string & Format<"uuid">)[] & MinItems<4> & MaxItems<4>>',
          value: {
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
            arrays: [
              {
                name: 'Array<string & Format<"uuid">>',
                tags: [
                  [
                    {
                      target: "array",
                      name: "MinItems<4>",
                      kind: "minItems",
                      value: 4,
                      validate: "4 <= $input.length",
                      exclusive: true,
                    },
                    {
                      target: "array",
                      name: "MaxItems<4>",
                      kind: "maxItems",
                      value: 4,
                      validate: "$input.length <= 4",
                      exclusive: true,
                    },
                  ],
                ],
              },
            ],
            tuples: [],
            objects: [],
            aliases: [],
            natives: [],
            sets: [],
            maps: [],
          },
          nullables: [false],
          recursive: false,
          index: null,
        },
        {
          name: 'Array<string & Format<"uuid">>',
          value: {
            any: false,
            required: true,
            optional: false,
            nullable: false,
            functional: false,
            atomics: [
              {
                type: "string",
                tags: [
                  [
                    {
                      target: "string",
                      name: 'Format<"uuid">',
                      kind: "format",
                      value: "uuid",
                      validate:
                        "/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test($input)",
                      exclusive: ["format", "pattern"],
                    },
                  ],
                ],
              },
            ],
            constants: [],
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
          nullables: [false],
          recursive: false,
          index: null,
        },
      ],
      tuples: [],
    },
  }),
);
