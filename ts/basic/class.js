//defining a class
var MobilePhone = /** @class */ (function () {
    //a contructor which is used to initialize a class  fields.
    function MobilePhone(screenSize, RAM, processor, camera, battery, operatingSystem) {
        var _this = this;
        //a method which is accessible to outside world.
        this.getOperatingSystem = function () {
            return _this.operatingSystem;
        };
        this.screenSize = screenSize;
        this.RAM = RAM;
        this.processor = processor;
        this.camera = camera;
        this.battery = battery;
        this.operatingSystem = operatingSystem;
    }
    return MobilePhone;
}());
var onePluse5t = new MobilePhone("6 inch", "6 GB", "Snapdragon", 20, 3300, "Android");
var os = onePluse5t.getOperatingSystem();
alert(os);
