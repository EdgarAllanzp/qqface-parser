# qqface-parser
This library the qqface symbols to html image string.

## Usage
### CMD
```
$ npm install qqface-parser
```

Copy qqface images from **/node_modules/qqfaces-parser/src/qqfaces** to your project assets directory.


```
qqfaceFilter (faceStr) {
    let path = '../../static/img/qqfaces/';
    return qqfaceParser(faceStr, path);
}

let htmlImgStr = qqfaceFilter(faceStr);
```