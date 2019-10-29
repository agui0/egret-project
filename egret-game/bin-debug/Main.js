var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Main = (function (_super) {
    __extends(Main, _super);
    // 1.开始游戏界面
    function Main() {
        var _this = 
        // 构造函数会被index.html自动实例化
        _super.call(this) || this;
        console.log('start');
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    Main.prototype.addStage = function () {
        // 事件销毁
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
        this.init();
    };
    Main.prototype.init = function () {
        // 1.开始游戏的界面
        console.log('init');
        // 目标： new游戏开始的类，可以给我们返回一个显示对象
        this.startGamePanel = new StartGamePanel();
        this.addChild(this.startGamePanel);
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
