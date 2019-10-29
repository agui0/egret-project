class Main extends egret.DisplayObjectContainer{
    // 1.开始游戏界面
    public constructor() {
        // 构造函数会被index.html自动实例化
        super(); // 在DisplayObjectContainer 构造函数里面必须调用super
        console.log('start');
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
    }

    private startGamePanel:StartGamePanel;

    private addStage() {
        // 事件销毁
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
        this.init();
    }
    private init() {
        // 1.开始游戏的界面
        console.log('init');
        // 目标： new游戏开始的类，可以给我们返回一个显示对象
        this.startGamePanel = new StartGamePanel();
        this.addChild(this.startGamePanel);
    }

}