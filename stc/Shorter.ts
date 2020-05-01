import Dec, { Type as t, Act, Get, Func } from "#/Shorter";

type NN = (n:number)=>number;

{

    const act: t.Act<string> = msg => { }
    const get: t.Get<number> = _ => 0;
    const proc: t.Process = _ => 0;

    const func: t.Func<number, number> = i => i + 1;
    const Merge: t.Merge<number, number, number> = (a, b) => a + b;
    const f2:(n:number)=>number = func;
    const f3:NN = func;
    const f4:NN = f2;

    const dic_str: t.Dic = { key: "value" };
    const dic_sug: t.Map<number> = { key: 0 };
}

{
    const act: Dec.Act<string> = msg => { }
    const get: Dec.Get<number> = _ => 0;
    const func: Dec.Func<number, number> = i => i + 1;
    const f2:(n:number)=>number = func;
    const f3:NN = func;
    const f4:NN = f2;

}

{
    const act: Act<string> = msg => { }
    const get: Get<number> = _ => 0;
    const func: Func<number, number> = i => i + 1;
    const f2:(n:number)=>number = func;
    const f3:NN = func;
    const f4:NN = f2;
}