var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.description=exports.title=exports["default"]=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _=require("../../");function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2["default"])(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2["default"])(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var Item=_.Popover.Item;var PopoverExample=function(_React$Component){(0,_inherits2["default"])(PopoverExample,_React$Component);var _super=_createSuper(PopoverExample);function PopoverExample(props){var _this;(0,_classCallCheck2["default"])(this,PopoverExample);_this=_super.call(this,props);_this.onSelect=function(value){_this.setState({selected:value});};_this.state={selected:''};return _this;}(0,_createClass2["default"])(PopoverExample,[{key:"render",value:function render(){var _this2=this;var overlay=[1,2,3].map(function(i,index){return _react["default"].createElement(Item,{key:index,value:"option ".concat(i)},_react["default"].createElement(_reactNative.Text,null,"option ",i));});overlay=overlay.concat([_react["default"].createElement(Item,{key:"4",value:"disabled",disabled:true},_react["default"].createElement(_reactNative.Text,{style:{color:'#ddd'}},"disabled opt")),_react["default"].createElement(Item,{key:"6",value:"button ct",style:{backgroundColor:'#efeff4'}},_react["default"].createElement(_reactNative.Text,null,"\u5173\u95ED"))]);return _react["default"].createElement(_react["default"].Fragment,null,_react["default"].createElement(_.List,null,[1,2,3,4,5,6,7,8].map(function(item){return _this2.renderList(overlay,item);})),_react["default"].createElement(_.Popover,{overlay:_react["default"].createElement(_.Popover.Item,{value:'test'},_react["default"].createElement(_reactNative.Text,null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6 x")),renderOverlayComponent:function renderOverlayComponent(nodes){return _react["default"].createElement(_reactNative.View,null,_react["default"].createElement(_reactNative.Text,{style:{paddingHorizontal:9,paddingTop:16,color:'#2b2b2b',fontWeight:'bold'}},"\u6211\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6title"),nodes);}},_react["default"].createElement(_reactNative.Text,{style:{margin:16}},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6")),_react["default"].createElement(_.Popover,{overlay:overlay,useNativeDriver:true,duration:200,easing:function easing(show){return show?_reactNative.Easing["in"](_reactNative.Easing.ease):_reactNative.Easing.step0;}},_react["default"].createElement(_reactNative.Text,{style:{margin:16}},"\u81EA\u5B9A\u4E49\u52A8\u753B")),_react["default"].createElement(_reactNative.View,{style:{alignItems:'center'}},_react["default"].createElement(_reactNative.Text,{style:{margin:16,color:'red'}},"\u5982\u679C\u4F60\u8BBE\u7F6E\u4E86 placement \u5C5E\u6027\u8BF7\u786E\u4FDD\u4F60\u7684\u5185\u5BB9\u591F\u4F4D\u7F6E\u663E\u793A\uFF0C\u9ED8\u8BA4\u662F auto \u81EA\u52A8\u8BA1\u7B97\u4F4D\u7F6E"),['left','right','top','bottom'].map(function(p){return _react["default"].createElement(_.Popover,{key:p,overlay:_react["default"].createElement(_.Popover.Item,{value:p},_react["default"].createElement(_reactNative.Text,null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6 ",p)),placement:p},_react["default"].createElement(_reactNative.Text,{style:{margin:16}},p));})));}},{key:"renderList",value:function renderList(overlay,key){var _this3=this;return _react["default"].createElement(_.List.Item,{key:key,extra:_react["default"].createElement(_.Popover,{overlay:overlay,triggerStyle:styles.triggerStyle,onSelect:function onSelect(v){return _this3.setState((0,_defineProperty2["default"])({},"selected".concat(key),v));}},_react["default"].createElement(_reactNative.Text,null,"\u83DC\u5355"))},_react["default"].createElement(_reactNative.View,null,_react["default"].createElement(_reactNative.Text,null,"\u9009\u62E9\u4E86\uFF1A",this.state["selected".concat(key)])));}}]);return PopoverExample;}(_react["default"].Component);exports["default"]=PopoverExample;var styles=_reactNative.StyleSheet.create({triggerStyle:{paddingHorizontal:6}});var title='Popover';exports.title=title;var description='Popover example';exports.description=description;