import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { ObjectHttpCommentTag } from "../../../structures/ObjectHttpCommentTag";

export const test_reflect_metadata_ObjectHttpCommentTag =
  _test_reflect_metadata("ObjectHttpCommentTag")(
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
          objects: ["ObjectHttpCommentTag"],
          aliases: [],
          natives: [],
          sets: [],
          maps: [],
        },
      ],
      components: {
        objects: [
          {
            name: "ObjectHttpCommentTag",
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
                      values: ["int"],
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
                  atomics: [
                    {
                      type: "number",
                      tags: [
                        [
                          {
                            target: "number",
                            name: 'Type<"int32">',
                            kind: "type",
                            value: "int32",
                            validate:
                              "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                            exclusive: true,
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
                description: null,
                jsDocTags: [
                  {
                    name: "type",
                    text: [
                      {
                        text: "int",
                        kind: "text",
                      },
                    ],
                  },
                ],
              },
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
                      values: ["uint64"],
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
                  atomics: [
                    {
                      type: "bigint",
                      tags: [
                        [
                          {
                            target: "bigint",
                            name: 'Type<"uint64">',
                            kind: "type",
                            value: "uint64",
                            validate: "BigInt(0) <= $input",
                            exclusive: true,
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
                description: null,
                jsDocTags: [
                  {
                    name: "type",
                    text: [
                      {
                        text: "uint64",
                        kind: "text",
                      },
                    ],
                  },
                ],
              },
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
                      values: ["uuid"],
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
                            exclusive: true,
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
                description: null,
                jsDocTags: [
                  {
                    name: "format",
                    text: [
                      {
                        text: "uuid",
                        kind: "text",
                      },
                    ],
                  },
                ],
              },
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
                      values: ["items"],
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
                      name: "Array<number>",
                      tags: [
                        [
                          {
                            name: "MinItems<10>",
                            target: "array",
                            kind: "minItems",
                            value: 10,
                            validate: "10 <= $input.length",
                            exclusive: true,
                          },
                          {
                            name: "MaxItems<100>",
                            target: "array",
                            kind: "maxItems",
                            value: 100,
                            validate: "$input.length <= 100",
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
                jsDocTags: [
                  {
                    name: "minItems",
                    text: [
                      {
                        text: "10",
                        kind: "text",
                      },
                    ],
                  },
                  {
                    name: "maxItems",
                    text: [
                      {
                        text: "100",
                        kind: "text",
                      },
                    ],
                  },
                ],
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
            name: "Array<number>",
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [
                {
                  type: "number",
                  tags: [],
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
