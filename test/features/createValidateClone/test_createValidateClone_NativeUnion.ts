import TSON from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_NativeUnion = _test_validateClone(
    "NativeUnion",
    NativeUnion.generate,
    TSON.createValidateClone<NativeUnion>(),
    NativeUnion.SPOILERS,
);
