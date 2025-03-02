import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { CommentTagRangeBigInt } from "../../../structures/CommentTagRangeBigInt";

export const test_reflect_metadata_CommentTagRangeBigInt =
  _test_reflect_metadata("CommentTagRangeBigInt")(
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
          objects: ["CommentTagRangeBigInt"],
          aliases: [],
          natives: [],
          sets: [],
          maps: [],
        },
      ],
      components: {
        objects: [
          {
            name: "CommentTagRangeBigInt",
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
                  atomics: [],
                  constants: [],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [
                    {
                      name: "Array<CommentTagRangeBigInt.Type>",
                      tags: [],
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
          {
            name: "CommentTagRangeBigInt.Type",
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
                      values: ["greater"],
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
                            name: "ExclusiveMinimum<3n>",
                            kind: "exclusiveMinimum",
                            value: {
                              type: "bigint",
                              value: "3",
                            },
                            validate: "3 < $input",
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
                    name: "exclusiveMinimum",
                    text: [
                      {
                        text: "3",
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
                      values: ["greater_equal"],
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
                            name: "Minimum<3n>",
                            kind: "minimum",
                            value: {
                              type: "bigint",
                              value: "3",
                            },
                            validate: "3 <= $input",
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
                        text: "3",
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
                      values: ["less"],
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
                            name: "ExclusiveMaximum<7n>",
                            kind: "exclusiveMaximum",
                            value: {
                              type: "bigint",
                              value: "7",
                            },
                            validate: "$input < 7",
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
                    name: "exclusiveMaximum",
                    text: [
                      {
                        text: "7",
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
                      values: ["less_equal"],
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
                            name: "Maximum<7n>",
                            kind: "maximum",
                            value: {
                              type: "bigint",
                              value: "7",
                            },
                            validate: "$input <= 7",
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
                        text: "7",
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
                      values: ["greater_less"],
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
                            name: "ExclusiveMinimum<3n>",
                            kind: "exclusiveMinimum",
                            value: {
                              type: "bigint",
                              value: "3",
                            },
                            validate: "3 < $input",
                            exclusive: ["minimum", "exclusiveMinimum"],
                          },
                          {
                            target: "bigint",
                            name: "ExclusiveMaximum<7n>",
                            kind: "exclusiveMaximum",
                            value: {
                              type: "bigint",
                              value: "7",
                            },
                            validate: "$input < 7",
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
                    name: "exclusiveMinimum",
                    text: [
                      {
                        text: "3",
                        kind: "text",
                      },
                    ],
                  },
                  {
                    name: "exclusiveMaximum",
                    text: [
                      {
                        text: "7",
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
                      values: ["greater_equal_less"],
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
                            name: "Minimum<3n>",
                            kind: "minimum",
                            value: {
                              type: "bigint",
                              value: "3",
                            },
                            validate: "3 <= $input",
                            exclusive: ["minimum", "exclusiveMinimum"],
                          },
                          {
                            target: "bigint",
                            name: "ExclusiveMaximum<7n>",
                            kind: "exclusiveMaximum",
                            value: {
                              type: "bigint",
                              value: "7",
                            },
                            validate: "$input < 7",
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
                        text: "3",
                        kind: "text",
                      },
                    ],
                  },
                  {
                    name: "exclusiveMaximum",
                    text: [
                      {
                        text: "7",
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
                      values: ["greater_less_equal"],
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
                            name: "ExclusiveMinimum<3n>",
                            kind: "exclusiveMinimum",
                            value: {
                              type: "bigint",
                              value: "3",
                            },
                            validate: "3 < $input",
                            exclusive: ["minimum", "exclusiveMinimum"],
                          },
                          {
                            target: "bigint",
                            name: "Maximum<7n>",
                            kind: "maximum",
                            value: {
                              type: "bigint",
                              value: "7",
                            },
                            validate: "$input <= 7",
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
                    name: "exclusiveMinimum",
                    text: [
                      {
                        text: "3",
                        kind: "text",
                      },
                    ],
                  },
                  {
                    name: "maximum",
                    text: [
                      {
                        text: "7",
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
                      values: ["greater_equal_less_equal"],
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
                            name: "Minimum<3n>",
                            kind: "minimum",
                            value: {
                              type: "bigint",
                              value: "3",
                            },
                            validate: "3 <= $input",
                            exclusive: ["minimum", "exclusiveMinimum"],
                          },
                          {
                            target: "bigint",
                            name: "Maximum<7n>",
                            kind: "maximum",
                            value: {
                              type: "bigint",
                              value: "7",
                            },
                            validate: "$input <= 7",
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
                        text: "3",
                        kind: "text",
                      },
                    ],
                  },
                  {
                    name: "maximum",
                    text: [
                      {
                        text: "7",
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
                      values: ["equal"],
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
                            name: "Minimum<10n>",
                            kind: "minimum",
                            value: {
                              type: "bigint",
                              value: "10",
                            },
                            validate: "10 <= $input",
                            exclusive: ["minimum", "exclusiveMinimum"],
                          },
                          {
                            target: "bigint",
                            name: "Maximum<10n>",
                            kind: "maximum",
                            value: {
                              type: "bigint",
                              value: "10",
                            },
                            validate: "$input <= 10",
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
                        text: "10",
                        kind: "text",
                      },
                    ],
                  },
                  {
                    name: "maximum",
                    text: [
                      {
                        text: "10",
                        kind: "text",
                      },
                    ],
                  },
                ],
              },
            ],
            jsDocTags: [],
            index: 1,
            validated: false,
            recursive: false,
            nullables: [false],
          },
        ],
        aliases: [],
        arrays: [
          {
            name: "Array<CommentTagRangeBigInt.Type>",
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
              arrays: [],
              tuples: [],
              objects: ["CommentTagRangeBigInt.Type"],
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
