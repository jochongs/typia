import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { CommentTagBigInt } from "../../../structures/CommentTagBigInt";

export const test_reflect_metadata_CommentTagBigInt = _test_reflect_metadata(
  "CommentTagBigInt",
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
        objects: ["CommentTagBigInt"],
        aliases: [],
        natives: [],
        sets: [],
        maps: [],
      },
    ],
    components: {
      objects: [
        {
          name: "CommentTagBigInt",
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
                    values: ["value"],
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
              description: null,
              jsDocTags: [],
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
                    values: ["ranged"],
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
                          name: "Minimum<0n>",
                          kind: "minimum",
                          value: {
                            type: "bigint",
                            value: "0",
                          },
                          validate: "0 <= $input",
                          exclusive: ["minimum", "exclusiveMinimum"],
                        },
                        {
                          target: "bigint",
                          name: "Maximum<100n>",
                          kind: "maximum",
                          value: {
                            type: "bigint",
                            value: "100",
                          },
                          validate: "$input <= 100",
                          exclusive: ["maximum", "exclusiveMaximum"],
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
                  name: "minimum",
                  text: [
                    {
                      text: "0",
                      kind: "text",
                    },
                  ],
                },
                {
                  name: "maximum",
                  text: [
                    {
                      text: "100",
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
                    values: ["minimum"],
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
                          name: "Minimum<0n>",
                          kind: "minimum",
                          value: {
                            type: "bigint",
                            value: "0",
                          },
                          validate: "0 <= $input",
                          exclusive: ["minimum", "exclusiveMinimum"],
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
                  name: "minimum",
                  text: [
                    {
                      text: "0",
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
                    values: ["maximum"],
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
                          name: "Maximum<100n>",
                          kind: "maximum",
                          value: {
                            type: "bigint",
                            value: "100",
                          },
                          validate: "$input <= 100",
                          exclusive: ["maximum", "exclusiveMaximum"],
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
                  name: "maximum",
                  text: [
                    {
                      text: "100",
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
                    values: ["multipleOf"],
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
                          name: "MultipleOf<3n>",
                          kind: "multipleOf",
                          value: {
                            type: "bigint",
                            value: "3",
                          },
                          validate: "$input % 3n === 0n",
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
                  name: "multipleOf",
                  text: [
                    {
                      text: "3",
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
      arrays: [],
      tuples: [],
    },
  }),
);
