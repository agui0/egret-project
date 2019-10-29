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
var StartGamePanel = (function (_super) {
    __extends(StartGamePanel, _super);
    // 继承矢量图对象
    function StartGamePanel() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    StartGamePanel.prototype.init = function () {
        // 创建一个背景
        this._background = new egret.Shape();
        this._background.graphics.beginFill(0);
        this._background.graphics.drawRect(0, 0, 640, 1136);
        this._background.graphics.endFill();
        this.addChild(this._background);
        this._startBtn = new egret.TextField();
        this._startBtn.text = "开始游戏";
        this._startBtn.size = 50;
        this._startBtn.x = 180;
        this._startBtn.y = 200;
        this.addChild(this._startBtn);
    };
    return StartGamePanel;
}(egret.Sprite));
__reflect(StartGamePanel.prototype, "StartGamePanel");
