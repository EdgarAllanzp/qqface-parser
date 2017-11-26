module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var qqfaceRegex = /(\/::\))|(\/::~)|(\/::B)|(\/::\|)|(\/:8-\))|(\/::&lt;)|(\/::\$)|(\/::X)|(\/::Z)|(\/::'\()|(\/::-\|)|(\/::@)|(\/::P)|(\/::D)|(\/::O)|(\/::\()|(\[囧\])|(\/::Q)|(\/::T)|(\/:,@P)|(\/:,@-D)|(\/::d)|(\/:,@o)|(\/::g)|(\/:\|-\))|(\/::!)|(\/::L)|(\/::&gt;)|(\/::,@)|(\/:,@f)|(\/::-S)|(\/:\?)|(\/:,@x)|(\/:,@@)|(\/:,@!)|(\/:!!!)|(\/:xx)|(\/:bye)|(\/:wipe)|(\/:dig)|(\/:handclap)|(\/:&amp;-\()|(\/:B-\))|(\/:&lt;@)|(\/:@&gt;)|(\/::-O)|(\/:&gt;-\|)|(\/:P-\()|(\/::'\|)|(\/:X-\))|(\/::\*)|(\/:8\*)|(\/:pd)|(\/:&lt;W&gt;)|(\/:beer)|(\/:coffee)|(\/:pig)|(\/:rose)|(\/:fade)|(\/:showlove)|(\/:heart)|(\/:break)|(\/:cake)|(\/:bome)|(\/:shit)|(\/:moon)|(\/:sun)|(\/:hug)|(\/:strong)|(\/:weak)|(\/:share)|(\/:v)|(\/:@\))|(\/:jj)|(\/:@@)|(\/:ok)|(\/:basketb)|(\/:oo)|(\/:eat)|(\/:@x)|(\/:li)|(\/:kn)|(\/:footb)|(\/:ladybug)|(\/:gift)|(\/:bad)|(\/:lvu)|(\/:no)|(\/:love)|(\/:&lt;L&gt;)|(\/:jump)|(\/:shake)|(\/:&lt;O&gt;)|(\/:circle)|(\/:kotow)|(\/:turn)|(\/:skip)|(\/:oY)|(\[Hey\])|(\[Facepalm\])|(\[Smirk\])|(\[Smart\])|(\[Concerned\])|(\[Yeah!\])|(\[Chick\])|(\[Packet\])|(\[微笑\])|(\[撇嘴\])|(\[色\])|(\[发呆\])|(\[得意\])|(\[流泪\])|(\[害羞\])|(\[闭嘴\])|(\[睡\])|(\[大哭\])|(\[尴尬\])|(\[发怒\])|(\[调皮\])|(\[呲牙\])|(\[惊讶\])|(\[难过\])|(\[冷汗\])|(\[抓狂\])|(\[吐\])|(\[偷笑\])|(\[愉快\])|(\[白眼\])|(\[傲慢\])|(\[困\])|(\[惊恐\])|(\[流汗\])|(\[憨笑\])|(\[悠闲\])|(\[奋斗\])|(\[咒骂\])|(\[疑问\])|(\[嘘\])|(\[晕\])|(\[衰\])|(\[骷髅\])|(\[敲打\])|(\[再见\])|(\[擦汗\])|(\[抠鼻\])|(\[鼓掌\])|(\[坏笑\])|(\[左哼哼\])|(\[右哼哼\])|(\[哈欠\])|(\[鄙视\])|(\[委屈\])|(\[快哭了\])|(\[阴险\])|(\[亲亲\])|(\[可怜\])|(\[菜刀\])|(\[西瓜\])|(\[啤酒\])|(\[咖啡\])|(\[猪头\])|(\[玫瑰\])|(\[凋谢\])|(\[嘴唇\])|(\[爱心\])|(\[心碎\])|(\[蛋糕\])|(\[炸弹\])|(\[便便\])|(\[月亮\])|(\[太阳\])|(\[拥抱\])|(\[强\])|(\[弱\])|(\[握手\])|(\[胜利\])|(\[抱拳\])|(\[勾引\])|(\[拳头\])|(\[OK\])|(\[跳跳\])|(\[发抖\])|(\[怄火\])|(\[转圈\])|(\[笑脸\])|(\[生病\])|(\[破涕为笑\])|(\[吐舌\])|(\[脸红\])|(\[恐惧\])|(\[失望\])|(\[无语\])|(\[嘿哈\])|(\[捂脸\])|(\[奸笑\])|(\[机智\])|(\[皱眉\])|(\[耶\])|(\[鬼魂\])|(\[合十\])|(\[强壮\])|(\[庆祝\])|(\[礼物\])|(\[红包\])|(\[鸡\])/g;

var facemap = {
    '/::)': 'weixiao',
    '/::~': 'piezui',
    '/::B': 'se',
    '/::|': 'fadai',
    '/:8-)': 'deyi',
    '/::&lt;': 'liulei',
    '/::$': 'haixiu',
    '/::X': 'bizui',
    '/::Z': 'shui',
    "/::'(": 'daku',
    '/::-|': 'ganga',
    '/::@': 'fanu',
    '/::P': 'tiaopi',
    '/::D': 'ciya',
    '/::O': 'jingya',
    '/::(': 'nanguo',
    '[囧]': 'lenghan',
    '/::Q': 'zhuakuang',
    '/::T': 'tu',
    '/:,@P': 'touxiao',
    '/:,@-D': 'keai',
    '/::d': 'baiyan',
    '/:,@o': 'aoman',
    '/::g': 'jie',
    '/:|-)': 'kun',
    '/::!': 'jingkong',
    '/::L': 'liuhan',
    '/::&gt;': 'hanxiao',
    '/::,@': 'dabing',
    '/:,@f': 'fendou',
    '/::-S': 'zhouma',
    '/:?': 'yiwen',
    '/:,@x': 'xu',
    '/:,@@': 'yun',
    '/:,@!': 'shuai',
    '/:!!!': 'kulou',
    '/:xx': 'qiaoda',
    '/:bye': 'zaijian',
    '/:wipe': 'cahan',
    '/:dig': 'koubi',
    '/:handclap': 'guzhang',
    '/:&amp;-(': 'qiudale',
    '/:B-)': 'huaixiao',
    '/:&lt;@': 'zuohengheng',
    '/:@&gt;': 'youhengheng',
    '/::-O': 'haqian',
    '/:&gt;-|': 'bishi',
    '/:P-(': 'weiqu',
    "/::'|": 'kuaikule',
    '/:X-)': 'yinxian',
    '/::*': 'qinqin',
    '/:8*': 'kelian',
    '/:pd': 'caidao',
    '/:&lt;W&gt;': 'xigua',
    '/:beer': 'pijiu',
    '/:coffee': 'kafei',
    '/:pig': 'zhutou',
    '/:rose': 'meigui',
    '/:fade': 'diaoxie',
    '/:showlove': 'shiai',
    '/:heart': 'aixin',
    '/:break': 'xinsui',
    '/:cake': 'dangao',
    '/:bome': 'zhadan',
    '/:shit': 'bianbian',
    '/:moon': 'yueliang',
    '/:sun': 'taiyang',
    '/:hug': 'yongbao',
    '/:strong': 'qiang',
    '/:weak': 'ruo',
    '/:share': 'woshou',
    '/:v': 'shengli',
    '/:@)': 'baoquan',
    '/:jj': 'gouyin',
    '/:@@': 'quantou',
    '/:ok': 'ok',
    '/:basketb': 'lanqiu',
    '/:oo': 'pingpang',
    '/:eat': 'fan',
    '/:@x': 'xia',
    '/:li': 'shandian',
    '/:kn': 'dao',
    '/:footb': 'zuqiu',
    '/:ladybug': 'piaochong',
    '/:gift': 'liwu',
    '/:bad': 'chajin',
    '/:lvu': 'aini',
    '/:no': 'no',
    '/:love': 'aiqing',
    '/:&lt;L&gt;': 'feiwen',
    '/:jump': 'tiaotiao',
    '/:shake': 'fadou',
    '/:&lt;O&gt;': 'ouhuo',
    '/:circle': 'zhuanquan',
    '/:kotow': 'ketou',
    '/:turn': 'huitou',
    '/:skip': 'tiaoshen',
    '/:oY': 'touxiang',
    '[Hey]': 'hey',
    '[Facepalm]': 'facepalm',
    '[Smirk]': 'smirk',
    '[Smart]': 'smart',
    '[Concerned]': 'concerned',
    '[Yeah!]': 'yeah',
    '[Chick]': 'chick',
    '[Packet]': 'packet',
    '[微笑]': 'weixiao',
    '[撇嘴]': 'piezui',
    '[色]': 'se',
    '[发呆]': 'fadai',
    '[得意]': 'deyi',
    '[流泪]': 'liulei',
    '[害羞]': 'haixiu',
    '[闭嘴]': 'bizui',
    '[睡]': 'shui',
    '[大哭]': 'daku',
    '[尴尬]': 'ganga',
    '[发怒]': 'fanu',
    '[调皮]': 'tiaopi',
    '[呲牙]': 'ciya',
    '[惊讶]': 'jingya',
    '[难过]': 'nanguo',
    '[冷汗]': 'lenghan',
    '[抓狂]': 'zhuakuang',
    '[吐]': 'tu',
    '[偷笑]': 'touxiao',
    '[愉快]': 'keai',
    '[白眼]': 'baiyan',
    '[傲慢]': 'aoman',
    '[困]': 'kun',
    '[惊恐]': 'jingkong',
    '[流汗]': 'liuhan',
    '[憨笑]': 'hanxiao',
    '[悠闲]': 'dabing',
    '[奋斗]': 'fendou',
    '[咒骂]': 'zhouma',
    '[疑问]': 'yiwen',
    '[嘘]': 'xu',
    '[晕]': 'yun',
    '[衰]': 'shuai',
    '[骷髅]': 'kulou',
    '[敲打]': 'qiaoda',
    '[再见]': 'zaijain',
    '[擦汗]': 'cahan',
    '[抠鼻]': 'koubi',
    '[鼓掌]': 'guzhang',
    '[坏笑]': 'huaixiao',
    '[左哼哼]': 'zuohengheng',
    '[右哼哼]': 'youhengheng',
    '[哈欠]': 'haqian',
    '[鄙视]': 'bishi',
    '[委屈]': 'weiqu',
    '[快哭了]': 'kuaikule',
    '[阴险]': 'yinxian',
    '[亲亲]': 'qinqin',
    '[可怜]': 'kelian',
    '[菜刀]': 'caidao',
    '[西瓜]': 'xigua',
    '[啤酒]': 'pijiu',
    '[咖啡]': 'kafei',
    '[猪头]': 'zhutou',
    '[玫瑰]': 'meigui',
    '[凋谢]': 'diaoxie',
    '[嘴唇]': 'shiai',
    '[爱心]': 'aixin',
    '[心碎]': 'xinsui',
    '[蛋糕]': 'dangao',
    '[炸弹]': 'zhadan',
    '[便便]': 'bianbian',
    '[月亮]': 'yueliang',
    '[太阳]': 'taiyang',
    '[拥抱]': 'yongbao',
    '[强]': 'qiang',
    '[弱]': 'ruo',
    '[握手]': 'woshou',
    '[胜利]': 'shengli',
    '[抱拳]': 'baoquan',
    '[勾引]': 'gouyin',
    '[拳头]': 'quantou',
    '[OK]': 'ok',
    '[跳跳]': 'tiaotiao',
    '[发抖]': 'fadou',
    '[怄火]': 'ouhuo',
    '[转圈]': 'zhuanquan',
    '[笑脸]': 'xiaolian',
    '[生病]': 'shengbing',
    '[破涕为笑]': 'potiweixiao',
    '[吐舌]': 'tushe',
    '[脸红]': 'lianhong',
    '[恐惧]': 'kongju',
    '[失望]': 'shiwang',
    '[无语]': 'wuyu',
    '[嘿哈]': 'hey',
    '[捂脸]': 'facepalm',
    '[奸笑]': 'smirk',
    '[机智]': 'smart',
    '[皱眉]': 'concerned',
    '[耶]': 'yeah',
    '[鬼魂]': 'guihun',
    '[合十]': 'heshi',
    '[强壮]': 'qiangzhuang',
    '[庆祝]': 'qingzhu',
    '[礼物]': 'gift',
    '[红包]': 'packet',
    '[鸡]': 'chick'
};

function createQqfaceReplace(path) {
    return function (match) {
        var faceName = facemap[match];
        return '<img class="qqface" src="' + (path + faceName) + '.gif" alt="' + faceName + '">';
    };
}

module.exports = function (faceStr, path) {
    var qqfaceReplace = createQqfaceReplace(path);

    return faceStr.replace(qqfaceRegex, qqfaceReplace);
};

/***/ })
/******/ ]);