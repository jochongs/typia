import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_reflect_metadata_ConstantAtomicWrapper =
  _test_reflect_metadata("ConstantAtomicWrapper")(
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
              name: "ConstantAtomicWrapper",
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
        objects: [
          {
            name: "ConstantAtomicWrapper.IPointer<boolean>",
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
                      type: "boolean",
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
            ],
            jsDocTags: [],
            index: 0,
            validated: false,
            recursive: false,
            nullables: [false],
          },
          {
            name: "ConstantAtomicWrapper.IPointer<number>",
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
                description: null,
                jsDocTags: [],
              },
            ],
            jsDocTags: [],
            index: 1,
            validated: false,
            recursive: false,
            nullables: [false],
          },
          {
            name: "ConstantAtomicWrapper.IPointer<string>",
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
                      type: "string",
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
            ],
            jsDocTags: [],
            index: 2,
            validated: false,
            recursive: false,
            nullables: [false],
          },
        ],
        aliases: [],
        arrays: [],
        tuples: [
          {
            name: "ConstantAtomicWrapper",
            index: null,
            elements: [
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
                objects: ["ConstantAtomicWrapper.IPointer<boolean>"],
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
                constants: [],
                templates: [],
                escaped: null,
                rest: null,
                arrays: [],
                tuples: [],
                objects: ["ConstantAtomicWrapper.IPointer<number>"],
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
                constants: [],
                templates: [],
                escaped: null,
                rest: null,
                arrays: [],
                tuples: [],
                objects: ["ConstantAtomicWrapper.IPointer<string>"],
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
