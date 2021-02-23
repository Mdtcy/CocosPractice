// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        cc.log("start");
        this.node.getComponent(cc.Label).string = "123";
        var childNode = this.node.getChildByName("ChildNode");
        
        var label = childNode.getComponent(cc.Label);
        label.string = "SetChildNode";

        //cc.find("Cannon 01/Barrel/SFX", this.node);
        //当 cc.find 只传入第一个参数时，将从场景根节点开始逐级查找：
        //this.backNode = cc.find("Canvas/Menu/Back");

        // 全局变量
        cc.log(Global.globalInt);

        // 模块访问
    },

    // update (dt) {},
});
