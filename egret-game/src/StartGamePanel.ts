class StartGamePanel extends egret.Sprite {
    // 继承矢量图对象
    public constructor() {
        super();
        this.init();
    }
    private _background:egret.Shape;
    private _startBtn:egret.TextField;

    private init() {
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
    }    
}