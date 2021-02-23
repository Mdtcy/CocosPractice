// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

        // 基础js类型，直接赋予默认值
        id: 1,
        str: "string",
        ifTrue: true,
        targetObject: null,

        // 具备类型，填写构造函数
        pos: cc.Vec2,
        targetNode:cc.Node,

        // 继承自cc.ValueType
        pos2:new cc.Vec2(1,1),
        colco:new cc.color(222,222,222,111),
        
        // 数组
        any: [],      // 不定义具体类型的数组
        bools: [cc.Boolean],
        strings: [cc.String],
        floats: [cc.Float],
        ints: [cc.Integer],

        values: [cc.Vec2],
        nodes: [cc.Node],
        frames: [cc.SpriteFrame],

        // 属性声明参数 http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
        foo: {
    
            // ATTRIBUTES:
            default: null,        // The default value will be used only when the component attaching
                                  // to a node for the first time
            displayName : "custom displayname",
            tooltip: "tooltip",
            visible:true,
            type: cc.SpriteFrame, // optional, default is typeof default
            serializable: true,   // optional, default is true
        },
        // get、set
        bar: {
            get () {
                return this._bar;
            },
            set (value) {
                this._bar = value;
            }
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
