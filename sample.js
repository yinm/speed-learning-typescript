// Car型の変数を宣言 (型注釈としてinterfaceを使う)
var c = {
    type: 'トラック',
    run: function () {
        console.log(this.type + "\u304C\u8D70\u308A\u307E\u3059\u3002");
    }
};
c.run();
