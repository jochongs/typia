import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_createAssertGuard_ObjectSimple = _test_assertGuard(
  "ObjectSimple",
)<ObjectSimple>(ObjectSimple)(typia.createAssertGuard<ObjectSimple>());
