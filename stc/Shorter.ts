import * as t from "#/Shorter";

const act: t.Act<string> = msg => { }
const get: t.Get<number> = _ => 0;
const proc: t.Process = _ => 0;

const func: t.Func<number, number> = i => i + 1;
const Merge: t.Merge<number, number, number> = (a, b) => a + b;

const dic_str: t.Dic = { key: "value" };
const dic_sug: t.Map<number> = { key: 0 };

