import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_createAssertGuardEquals_CommentTagObjectUnion =
  _test_assertGuardEquals("CommentTagObjectUnion")<CommentTagObjectUnion>(
    CommentTagObjectUnion,
  )(typia.createAssertGuardEquals<CommentTagObjectUnion>());
