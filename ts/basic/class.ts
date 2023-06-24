//defining a class
class MobilePhone{

    //fields or properties.
    screenSize : string;
    RAM : string;
    processor : string;
    camera:number;
    battery:number;
    operatingSystem: string;

    //a contructor which is used to initialize a class  fields.
    constructor (screenSize: string, 
        RAM : string, 
        processor : string, 
        camera: number, 
        battery: number,
        operatingSystem: string){
    this.screenSize = screenSize;
    this.RAM = RAM;
    this.processor = processor;
    this.camera = camera;
    this.battery = battery;
    this.operatingSystem = operatingSystem;
    }

    //a method which is accessible to outside world.
    getOperatingSystem = ()=>{
        return this.operatingSystem;
    }
}

let onePluse5t = new MobilePhone("6 inch","6 GB","Snapdragon",20,3300,"Android");

let os = onePluse5t.getOperatingSystem();
alert(os);