# BitmapData for EaselJS

BitmapData for EaselJS adds AS3 like BitmapData to EaselJS.


## Example1
	// create BitmapData by HTMLImageElement
	_bmd01 = new createjs.BitmapData(HTMLImageElement);
	_bitmap01 = new createjs.Bitmap(_bmd01.canvas);
	_stage.addChild(_bitmap01);
	var width = 200;
	var height = 200;
	var fillColor = 0x80FF0000;
	// create BitmapData by fill
	_bmd02 = new createjs.BitmapData(null, width, height, fillColor);
	_bitmap02 = new createjs.Bitmap(_bmd02.canvas);
	_stage.addChild(_bitmap02);


## Example2
	_shape = new createjs.Shape();
	var g = _shape.graphics;
	g.f("rgba(0, 0, 255, 1)").dp(0, 0, 100, 5, 0.6, -90).ef();
	_shape.cache(-100, -100, 200, 200);
	// get BitmapData from cached DisplayObject
	_bmd01 = createjs.BitmapData.getBitmapData(_shape);
	var colorTransform = new createjs.ColorTransform(1, 1, 0, 1, 255);
	var rect = new createjs.Rectangle(0, 0, _bmd01.width >> 1, _bmd01.height);
	_bmd01.colorTransform(rect, colorTransform);
	_stage.addChild(_shape);


## Properties
* canvas
* context
* name
* width [read only]
* height [read only]
* rect [read only]

## Methods
* applyFilter
* clearRect
* clone
* colorTransform
* compare
* copyChannel
* copyPixels
* dispose
* draw
* drawImage
* expand
* fillRect
* floodFill
* getBitmapData [static]
* getColorBoundsRect
* getPixel
* getPixel32
* getPixels
* histogram
* hitTest
* merge
* noise
* paletteMap
* perlinNoise
* pixelDissolve
* scroll
* setPixel
* setPixel32
* setPixels
* threshold
* toString
* updateContext
* updateImageData


## Resources
* More information and samples at the [kudox.jp](http://kudox.jp/java-script/createjs-easeljs-bitmapdata-tutorial)
* Read the documentation at the [BitmapData for EaselJS API Documentation](http://kudox.jp/reference/bitmapdata_for_easeljs/)


## Contact and bug reports
* [kudox.jp](http://kudox.jp/contact)
* [Twitter](http://twitter.com/u_kudox)


## License
MIT License
