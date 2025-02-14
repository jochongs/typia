import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_assertGuard_CommentTagAtomicUnion = _test_assertGuard(
  "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(CommentTagAtomicUnion)((input) =>
  typia.assertGuard<CommentTagAtomicUnion>(input),
);
