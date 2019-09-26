(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FIREBASE_FACTOR_CONFIG = {
    apiKey: "AIzaSyBmTM9jCXMUtUyZ738v5Slicrem8fdlmB8",
    authDomain: "dom-snapshot-9575f.firebaseapp.com",
    databaseURL: "https://dom-snapshot-9575f.firebaseio.com",
    projectId: "dom-snapshot-9575f",
    storageBucket: "",
    messagingSenderId: "241715576396",
    appId: "1:241715576396:web:cf50e3b6e8bc4b6ddbbee9",
    scriptPath: "https://www.gstatic.com/firebasejs/6.6.1/firebase-app.js"
};
exports.default = FIREBASE_FACTOR_CONFIG;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DOM_NAMESPACES = {
    svg: 'http://www.w3.org/2000/svg',
    xhtml: 'http://www.w3.org/1999/xhtml',
    xml: 'http://www.w3.org/XML/1998/namespace',
    xlink: 'http://www.w3.org/1999/xlink',
    xmlns: 'http://www.w3.org/2000/xmlns'
};
exports.default = DOM_NAMESPACES;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PSEUDOSELECTORS = [
    ':after', ':before', ':first-line', ':first-letter', ':selection'
];
exports.default = PSEUDOSELECTORS;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ESCAPED_ATTRIBUTES = [
    //body
    'onafterprint',
    'onbeforeprint',
    'onbeforeunload',
    'onerror',
    'onhashchange',
    'onload',
    'onmessage',
    'onoffline',
    'ononline',
    'onpagehide',
    'onpageshow',
    'onpopstate',
    'onresize',
    'onstorage',
    'onunload',
    //forms
    'onblur',
    'onchange',
    'oncontextmenu',
    'onfocus',
    'oninput',
    'oninvalid',
    'onreset',
    'onsearch',
    'onselect',
    'onsubmit',
    //keyboard
    'onkeydown',
    'onkeypress',
    'onkeyup',
    //mouse
    'onclick',
    'ondblclick',
    'onmousedown',
    'onmousemove',
    'onmouseout',
    'onmouseover',
    'onmouseup',
    'onmousewheel',
    'onwheel',
    //Drag Events
    'ondrag',
    'ondragend',
    'ondragenter',
    'ondragleave',
    'ondragover',
    'ondragstart',
    'ondrop',
    'onscroll',
    //Clipboard Events
    'oncopy',
    'oncut',
    'onpaste',
    // Media Events
    'onabort',
    'oncanplay',
    'oncanplaythrough',
    'oncuechange',
    'ondurationchange',
    'onemptied',
    'onended',
    'onerror',
    'onloadeddata',
    'onloadedmetadata',
    'onloadstart',
    'onpause',
    'onplay',
    'onplaying',
    'onprogress',
    'onratechange',
    'onseeked',
    'onseeking',
    'onstalled',
    'onsuspend',
    'ontimeupdate',
    'onvolumechange',
    'onwaiting',
    // Misc Events
    'ontoggle'
];
exports.default = ESCAPED_ATTRIBUTES;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const INHERIT_STYLE_ATTRIBUTES = [
    'azimuth', 'border-collapse', 'border-spacing', 'caption-side',
    'color', 'cursor', 'direction', 'elevation', 'empty-cells',
    'font-family', 'font-size', 'font-style', 'font-variant', 'font-weight',
    'font', 'letter-spacing', 'line-height', 'list-style-image', 'list-style-position',
    'list-style-type', 'list-style', 'orphans', 'pitch-range', 'pitch', 'quotes', 'richness',
    'speak-header', 'speak-numeral', 'speak-punctuation', 'speak',
    'speech-rate', 'stress', 'text-align', 'text-indent', 'text-transform',
    'visibility', 'voice-family', 'volume', 'white-space', 'widows', 'word-spacing'
];
exports.default = INHERIT_STYLE_ATTRIBUTES;

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NODE_NAMES_TO_IGNORE = [
    'NOSCRIPT', 'SCRIPT', 'STYLE', '#comment', '#document'
];
exports.default = NODE_NAMES_TO_IGNORE;

},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NODE_NAMES_TO_REPLACE = {
    'IFRAME': 'DIV'
};
exports.default = NODE_NAMES_TO_REPLACE;

},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SKIPPED_STYLE_ATTRIBUTES = {
    'align-items': 'normal',
    'align-self': 'normal',
    'clip-path': 'none',
    'flex-basis': 'auto',
    'flex-grow': '0',
    'flex-shrink': '1',
    'justify-content': 'normal',
    'user-select': 'text',
    'border-bottom-left-radius': '0px',
    'border-bottom-right-radius': '0px',
    'border-top-right-radius': '0px',
    'border-top-left-radius': '0px',
    'cursor': 'auto',
    'background-position': '0% 0%',
    'background-size': 'auto',
    'direction': 'ltr',
    // "margin-bottom": "0px",
    // "margin-left": "0px",
    // "margin-right": "0px",
    // "margin-top": "0px",
    'max-height': 'none',
    'max-width': 'none',
    'opacity': '1',
    // "padding-bottom": "0px",
    // "padding-left": "0px",
    // "padding-right": "0px",
    // "padding-top": "0px",
    'right': 'auto',
    'speak': 'normal',
    'top': 'auto',
    'transition-delay': '0s',
    'transition-duration': '0s',
    'transition-property': 'all',
    'transition-timing-function': 'ease',
    'vertical-align': 'baseline',
    'visibility': 'visible',
    'white-space': 'normal',
    'widows': '2',
    'word-break': 'normal',
    'z-index': 'auto',
};
exports.default = SKIPPED_STYLE_ATTRIBUTES;

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    return {
        userAgent: navigator.userAgent,
        hostname: window.location.hostname,
        protocol: window.location.protocol,
        url: window.location.href,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        screenAvailWidth: window.screen.availWidth,
        screenAvailHeight: window.screen.availHeight,
        timestamp: Date.now()
    };
}
exports.default = default_1;

},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const escaped_attributes_1 = require("./constants/escaped-attributes");
const firebase_factor_config_1 = require("./config/firebase-factor-config");
const inherit_style_attributes_1 = require("./constants/inherit-style-attributes");
const skipped_style_attributes_1 = require("./constants/skipped-style-attributes");
const dom_namespaces_1 = require("./constants/dom-namespaces");
const node_names_to_ignore_1 = require("./constants/node-names-to-ignore");
const node_names_to_replace_1 = require("./constants/node-names-to-replace");
const dom_pseudoselectors_1 = require("./constants/dom-pseudoselectors");
const collect_meta_1 = require("./utils/collect-meta");
class DomSnapshot {
    /*
     */
    constructor(config = {
        inlineStyles: false,
        vacuum: false,
        stylesCleanup: true,
        capturePseudoselectors: true,
        safeAttributes: true,
        state: {
            BODY_STYLE: [],
            CACHE_KEYS: [],
            CACHE_VALUES: [],
            HTML_STYLE: [],
            items: [],
            meta: {
                // used to patch image links on snapshot restore (may be replaced to base64 inline)
                protocol: "",
                hostname: ""
            }
        }
    }, fbConfig = false) {
        this.uidPrefix = null;
        // this nodes not going to snapshot
        this.NODE_NAMES_TO_IGNORE = node_names_to_ignore_1.default;
        // iframes nodes will be replaced to div's
        this.NODE_NAMES_TO_REPLACE = node_names_to_replace_1.default;
        // pseudoselectors to capture
        this.PSEUDOSELECTORS = dom_pseudoselectors_1.default;
        // inherit styles (based on css 2.1);
        this.INHERIT = inherit_style_attributes_1.default;
        // styles to skip from capturing
        this.SKIP_STYLES = skipped_style_attributes_1.default;
        //https://www.w3schools.com/TAGs/ref_eventattributes.asp
        this.ESCAPED_ATTRIBUTES = escaped_attributes_1.default;
        if (!config.state) {
            config.state = {
                BODY_STYLE: [],
                CACHE_KEYS: [],
                CACHE_VALUES: [],
                HTML_STYLE: [],
                items: [],
                meta: {
                    protocol: "",
                    hostname: ""
                }
            };
        }
        // init state
        this.BODY_STYLE = config.state.BODY_STYLE || [];
        this.CACHE_KEYS = config.state.CACHE_KEYS || [];
        this.CACHE_VALUES = config.state.CACHE_VALUES || [];
        this.BODY_ATTRIBUTES = config.state.CACHE_VALUES || [];
        this.HTML_STYLE = config.state.HTML_STYLE || [];
        this.items = config.state.items || [];
        this.meta = config.state.meta || {};
        this._USE_VACUUM = config.vacuum || false;
        // append styles to dom node instead of style node
        this._USE_INLINE_STYLES = config.inlineStyles || false;
        this._USE_STYLES_CLEANUP = config.stylesCleanup || true;
        this._USE_PSEUDOSELECTORS = config.capturePseudoselectors || true;
        this._USE_SAFE_ATTRIBUTES = config.safeAttributes || true;
        this._NAMESPACES = dom_namespaces_1.default;
        // node cache (for node creation)
        this.nodeCache = {};
        // roots init
        this._html = false;
        this._head = false;
        this._body = false;
        this.isLoaded = false;
        // skip this node types
        this.restrictedNodeTypes = [3, 8];
        // skip hidden nodes
        this.skipDisplayNone = true;
        // firebase config with defaults
        this.fbConfig = fbConfig || firebase_factor_config_1.default;
        this.intFirebase(this.fbConfig);
    }
    _normalizeAttributeName(attrName) {
        return String(attrName)
            .trim()
            .toLowerCase();
    }
    _isSafeAttribute(attrName) {
        if (this._USE_SAFE_ATTRIBUTES &&
            this.ESCAPED_ATTRIBUTES.includes(this._normalizeAttributeName(attrName))) {
            return false;
        }
        return (!attrName.includes("ng-") &&
            !attrName.includes('"') &&
            !attrName.includes("data-uid_") &&
            !attrName.includes("style"));
    }
    _extractNodeAttributes(node) {
        return Array.prototype.map
            .call(node.attributes, el => {
            return [el.nodeName, this._patchAttribute(el.nodeName, el.nodeValue)];
        })
            .filter(([attrName]) => {
            return this._isSafeAttribute(attrName);
        });
    }
    resetTarget() {
        this.setBodyNode(false);
        this.setHtmlNode(false);
        this.setHeadNode(false);
    }
    /// set rootNode for restoring
    restoreTo(node) {
        this.setBodyNode(node);
    }
    _collectMeta() {
        return collect_meta_1.default();
    }
    _patchAttribute(name, value) {
        if (["src", "href"].includes(name)) {
            const firstChar = String(value).charAt(0);
            const secondChar = String(value).charAt(1);
            const hasHash = secondChar === "#" || firstChar === "#";
            const hasTwoSlashes = firstChar === secondChar && firstChar === "/";
            const hasPath = secondChar === "/";
            if (!hasTwoSlashes && (hasPath || hasHash)) {
                if (this.meta.hostname && this.meta.protocol) {
                    return `${this.meta.protocol}//${this.meta.hostname}${value}`;
                }
            }
        }
        return value;
    }
    _isSVG(element) {
        return element.namespaceURI === this._NAMESPACES.svg;
    }
    _getBodyAttributes() {
        return this._extractNodeAttributes(this._getBodyNode());
    }
    _getBodyStyle() {
        return this._createStyleObject(this._getStyleForNode(this._getBodyNode()));
    }
    _getHTMLStyle() {
        return this._getBodyParentStyle();
    }
    _getBodyParentStyle() {
        const body = this._getBodyNode();
        let styleNode = [];
        if (body.parentNode) {
            styleNode = this._getStyleForNode(body.parentNode);
        }
        return this._createStyleObject(styleNode);
        // get optimal style, save as special node
    }
    addMeta(keyOrObject, value, target = this) {
        if (typeof keyOrObject === "object") {
            target.meta = Object.assign(target.meta, keyOrObject);
        }
        else {
            target.meta[keyOrObject] = value;
        }
        return this;
    }
    getMeta() {
        return Object.assign({}, this.meta);
    }
    clearMeta() {
        this.meta = {};
    }
    _addFbScript(resolve, reject, config) {
        const head = this._getDocument().getElementsByTagName("head")[0];
        const script = this._getDocument().createElement("script");
        script.type = "text/javascript";
        script.onload = () => {
            window.firebase.initializeApp(config);
            this.firebase = window.firebase;
            this.isLoaded = true;
            resolve(this);
        };
        script.onerror = e => {
            reject(e);
        };
        // script.src = "https://www.gstatic.com/firebasejs/4.2.0/firebase.js";
        script.src = config.scriptPath;
        head.appendChild(script);
    }
    intFirebase(fbConfig) {
        this._loaded = new Promise((resolve, reject) => {
            if (typeof window.firebase !== "undefined") {
                this.firebase = window.firebase;
                this.isLoaded = true;
                return resolve(this);
            }
            this._addFbScript(resolve, reject, fbConfig);
        });
        return this._loaded;
    }
    loaded() {
        return this._loaded;
    }
    _getHead() {
        return (this._head ||
            this._getBodyNode().parentNode.querySelector("head") ||
            this._getDocument().head ||
            this._getDocument().getElementsByTagName("head")[0]);
    }
    _cleanHeadNodeFromStyles() {
        const head = this._getHead();
        let stylesToRemove = head.getElementsByTagName("style");
        if (stylesToRemove.length) {
            for (let i = 0; i < stylesToRemove.length; i++) {
                head.removeChild(stylesToRemove[i]);
            }
        }
        let styleLinksToRemove = head.querySelectorAll('link[rel="stylesheet"]');
        if (styleLinksToRemove.length) {
            for (let i = 0; i < styleLinksToRemove.length; i++) {
                head.removeChild(styleLinksToRemove[i]);
            }
        }
    }
    _addStyleNode(css) {
        const style = this._getDocument().createElement("style");
        const head = this._getHead();
        style.type = "text/css";
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        }
        else {
            style.appendChild(this._getDocument().createTextNode(css));
        }
        head.appendChild(style);
    }
    _getDomNodeFromArgument(selector) {
        let target = typeof selector === "object"
            ? selector
            : document.querySelector(selector);
        return target;
    }
    _cleanDomNode(target) {
        while (target.firstChild) {
            target.removeChild(target.firstChild);
        }
    }
    takeSnapshot(selector) {
        return this.createSnapshot(this._getDomNodeFromArgument(selector));
    }
    renderSnapshot(selector, snapshot, rewriteDomContent = true) {
        let target = this._getDomNodeFromArgument(selector);
        if (target === null) {
            throw new Error(`unable to find target by selector ${selector}`);
        }
        if (rewriteDomContent) {
            this._cleanDomNode(target);
        }
        this.restoreWorldFrom(snapshot, target);
    }
    showSnapshot(id, selector = false) {
        return this.getSnapshotById(id).then(snapshot => {
            this.destroyWorld();
            let targetNode = document.querySelector(String(selector).valueOf()) ||
                this._getBodyNode();
            let source = this.setState(this, snapshot);
            this.restoreWorldFrom(source, targetNode);
        });
    }
    restoreSnapshot(id) {
        return this._showSnapshot(id);
    }
    _fbAddToSnapshotList(id, data) {
        this.firebase
            .database()
            .ref(`snapshots-list/${id}`)
            .set(data);
    }
    _fbSetSnapshot(id, snapshot) {
        this.firebase
            .database()
            .ref(`snapshots/${id}`)
            .set(snapshot);
    }
    _fbGetSnapshot(id) {
        return new Promise(resolve => {
            this.firebase
                .database()
                .ref("snapshots/" + id)
                .once("value")
                .then(snapshot => {
                return resolve(snapshot.val());
            });
        });
    }
    getSnapshotById(id) {
        return this._fbGetSnapshot(id);
    }
    _showSnapshot(id = "1502312089479", rootElement = window.document) {
        return this.getSnapshotById(id).then(snapshot => {
            this.destroyWorld();
            this.setState(this, snapshot);
            this.restoreWorld(rootElement, this);
        });
    }
    _clearState(target) {
        target.items = [];
        target.CACHE_KEYS = [];
        target.BODY_STYLE = [];
        target.HTML_STYLE = [];
        target.CACHE_VALUES = [];
        target.BODY_ATTRIBUTES = [];
    }
    _getArrayCopy(element) {
        if (typeof element !== "object" || element === null) {
            return [];
        }
        return element.slice(0);
    }
    _cloneObject(obj) {
        if (typeof obj === "undefined" || obj === null) {
            return {};
        }
        return JSON.parse(JSON.stringify(obj));
    }
    _copyWorld(rootNode = false, source) {
        return this._copyWorldTo(rootNode, source);
    }
    _copyWorldTo(rootNode, source) {
        const pseudoSelectorsStylesArray = [];
        const reindexMap = {};
        let items = source.items;
        source.meta = this._collectMeta();
        let target = rootNode || this._getBodyNode();
        let isBodyNodeRoot = target === this._getBodyNode();
        if (isBodyNodeRoot) {
            source.BODY_ATTRIBUTES = this._getBodyAttributes();
            source.HTML_STYLE = this._styleObjectToOptimalStyleArray(this._getHTMLStyle(), undefined, source);
            source.BODY_STYLE = this._styleObjectToOptimalStyleArray(this._getBodyStyle(), undefined, source);
        }
        let capturedNodes = this._getAllDomNodes(target);
        if (!isBodyNodeRoot) {
            capturedNodes.unshift(rootNode);
        }
        const nodesMap = new WeakMap();
        for (let i = 0; i < capturedNodes.length; i++) {
            let item = capturedNodes[i];
            nodesMap.set(item, i);
            let nodeStyle = this._getStyleForNode(item);
            if (this._shouldTakeElement(item, nodeStyle)) {
                if (item.dataset && this._USE_PSEUDOSELECTORS) {
                    let pseudoselecorStyles = this._getStylesForPseudoSelectors(item, source);
                    if (pseudoselecorStyles) {
                        pseudoselecorStyles.index = i;
                        pseudoSelectorsStylesArray.push(pseudoselecorStyles);
                    }
                }
                items.push(this._serializeNode(nodeStyle, item, i, source, nodesMap));
                reindexMap[i] = items.length - 1;
            }
        }
        if (this._USE_PSEUDOSELECTORS) {
            this._forEach(pseudoSelectorsStylesArray, el => {
                let item = items[reindexMap[el.index]];
                item.pseudoselectors = el;
            });
        }
        if (this._USE_VACUUM) {
            source.items = this._vacuum(items);
        }
        if (this._USE_STYLES_CLEANUP) {
            this._cleanupStyles(source);
        }
    }
    _getHtmlNode() {
        return this._html || this._getBodyNode().parentNode || this._getBodyNode();
    }
    restoreWorld(target = false, source) {
        if (!target) {
            //this._setHTMLStyle(source);
            this._setBodyAttributes(source);
            //this._setBodyStyle(source);
        }
        return this.restoreWorldFrom(source, target);
    }
    _forEach(array, action) {
        const length = array.length;
        for (let i = 0; i < length; i++) {
            action(array[i], i);
        }
    }
    restoreWorldFrom(source, target = false) {
        const stylesToUppend = [];
        const fragment = this._getDocument().createDocumentFragment();
        this.uidPrefix =
            "d" +
                Math.random()
                    .toString(36)
                    .slice(-2);
        const nodesIndex = {};
        this._forEach(source.items, el => {
            let node = this._createNode(el, stylesToUppend, source);
            nodesIndex[el.index] = node;
            this._insertNode(node, el, fragment, nodesIndex);
        });
        stylesToUppend.push(`html { ${this._getNodeStyleText(source.HTML_STYLE, source)} }`);
        stylesToUppend.push(`body { ${this._getNodeStyleText(source.BODY_STYLE, source)} }`);
        this._addStyleNode(stylesToUppend.reverse().join("\n"));
        let rootNode = target || this._getBodyNode();
        rootNode.appendChild(fragment);
        this.uidPrefix = null;
        return this;
    }
    _destroyBodyAttributes() {
        const attributes = this._getBodyAttributes();
        const body = this._getBodyNode();
        this._forEach(attributes, ([name]) => {
            body.removeAttribute(name);
        });
        return this;
    }
    destroyWorld() {
        this._destroyBodyAttributes();
        this._getBodyNode().innerHTML = "";
        this._cleanHeadNodeFromStyles();
        return this;
    }
    _createStyleObject(styleNode) {
        const styleObject = {};
        if (!styleNode.length) {
            return styleObject;
        }
        for (let i = 0; i < styleNode.length; i++) {
            const propertyName = styleNode[i];
            styleObject[propertyName] = styleNode.getPropertyValue(propertyName);
        }
        return styleObject;
    }
    _isDefaultStyle(name, value) {
        return false;
        // return this.BODY_STYLE[name] === value || false;
    }
    _vacuum(items) {
        const itemsToRemove = [];
        const lastItemIndex = items.length - 1;
        this._forEach(items, (item, index) => {
            if (lastItemIndex !== index && item.nodeName === "#text") {
                let nextNode = items[index + 1];
                let hasSameParent = nextNode.parent === item.parent;
                let hasSameNodeName = nextNode.nodeName === item.nodeName;
                if (hasSameParent && hasSameNodeName) {
                    nextNode.textContent = `${item.textContent}${nextNode.textContent}`;
                    itemsToRemove.push(index);
                }
            }
        });
        return items.filter((el, index) => !itemsToRemove.includes(index));
    }
    _cleanupStyles(source) {
        const stylesToRemove = [];
        const styledItems = source.items.filter(e => e.styles.length);
        // collect browser default styles
        this._forEach(source.HTML_STYLE, style => {
            if (styledItems.every(el => el.styles.includes(style))) {
                if (source.BODY_STYLE.includes(style)) {
                    stylesToRemove.push(style);
                }
            }
        });
        // exclude collected stules
        source.HTML_STYLE = source.HTML_STYLE.filter(el => !stylesToRemove.includes(el));
        source.BODY_STYLE = source.BODY_STYLE.filter(el => !stylesToRemove.includes(el));
        this._forEach(source.items, item => {
            if (this._isNotEmptyArray(item.styles)) {
                item.styles = item.styles.filter(el => !stylesToRemove.includes(el));
            }
        });
        source.BODY_STYLE = source.BODY_STYLE.filter(el => !stylesToRemove.includes(el));
    }
    _getNameForNode(nodeName) {
        return this.NODE_NAMES_TO_REPLACE[nodeName] || nodeName;
    }
    _getParentForNode(node, nodesMap) {
        let parentId = nodesMap.has(node.parentNode)
            ? nodesMap.get(node.parentNode)
            : 0;
        let parent = parentId ? parentId : 0;
        if (!this.isNotUndefined(parent)) {
            return 0;
        }
        return parent;
    }
    _getNodeTextContent(node) {
        return node.children ? "" : node.data;
    }
    _arrayToObject(arr = []) {
        return arr.reduce((result, [key, value]) => {
            result[key] = value;
            return result;
        }, {});
    }
    getSnapshotsDiff(s1, s2) {
        let firstState = this.setState({}, s1);
        let secondState = this.setState({}, s2);
        let firstStyles = firstState.items
            .filter(e => e.styles)
            .map(el => {
            let item = this._setNodeStyleFromStyleArray(el.styles, {
                style: {}
            }, firstState);
            return Object.assign({}, el, item);
        });
        let secondStyles = secondState.items
            .filter(e => e.styles)
            .map(el => {
            let item = this._setNodeStyleFromStyleArray(el.styles, {
                style: {}
            }, secondState);
            return Object.assign({}, el, item);
        });
        let diffArray = new Array(firstState.items.length).fill(null);
        return diffArray.map((_, index) => {
            return {
                firstNode: firstStyles[index],
                secondNode: secondStyles[index],
                stylesDiff: this._getAllKeysDiff(firstStyles[index].style, secondStyles[index].style),
                attributesDiff: this._getAllKeysDiff(this._arrayToObject(firstStyles[index].attributes), this._arrayToObject(secondStyles[index].attributes))
            };
        });
    }
    _serializeNode(styleNode, node, index, source, nodesMap) {
        let payload = this._formatStyle(styleNode, node, index, source, nodesMap);
        return payload;
    }
    _formatStyle(styleNode, node, index, source, nodesMap) {
        const result = {
            styles: [],
            nodeName: this._getNameForNode(node.nodeName),
            index,
            attributes: [],
            nodeType: node.nodeType,
            parent: this._getParentForNode(node, nodesMap),
            isSVG: this._isSVG(node),
            textContent: this._getNodeTextContent(node)
        };
        const style = this._createStyleObject(styleNode);
        // if (result.isSVG && result.nodeName !== 'svg') {
        // result.styles = [];
        // } else {
        result.styles = this._styleObjectToOptimalStyleArray(style, result.parent, source);
        // }
        if (!this.restrictedNodeTypes.includes(node.nodeType)) {
            result.attributes = this._extractNodeAttributes(node);
        }
        return result;
    }
    _getAllDomNodes(node) {
        let listOfNodes = [];
        let walk = this._getDocument().createTreeWalker(node, NodeFilter.SHOW_ALL, {
            acceptNode: node => {
                return !this.NODE_NAMES_TO_IGNORE.includes(node.nodeName)
                    ? NodeFilter.FILTER_ACCEPT
                    : NodeFilter.FILTER_REJECT;
            }
        });
        let n = null;
        while ((n = walk.nextNode())) {
            listOfNodes.push(n);
        }
        return listOfNodes;
    }
    _fbSaveSnapshot(id, state) {
        this._fbSetSnapshot(id, state);
        this._fbAddToSnapshotList(id, { visible: true, meta: state.meta });
    }
    createSnapshot(rootNode = false) {
        let source = {};
        this._clearState(source);
        this._copyWorld(rootNode, source);
        this.addMeta("Date", Date.now(), source);
        this.addMeta("URL", window.location.href, source);
        this.addMeta("Browser", window.navigator.userAgent, source);
        let state = this._getState(source);
        return state;
    }
    saveSnapshot(customId = false, state) {
        const id = customId || Date.now();
        if (!state) {
            state = this.createSnapshot();
        }
        this._fbSaveSnapshot(id, state);
        console.log(`snapshot ID is: ${id}`);
        return id;
    }
    _setBodyAttributes(source) {
        const attributes = source.BODY_ATTRIBUTES;
        const body = this._getBodyNode();
        this._forEach(attributes, ([name, value]) => {
            body.setAttribute(name, value);
        });
        return this;
    }
    setBodyNode(node) {
        this._body = node;
    }
    _setBodyStyle(source) {
        this._setNodeStyleFromStyleArray(source.BODY_STYLE, this._getBodyNode(), source);
        return this;
    }
    setHeadNode(node) {
        this._head = node;
    }
    _setHTMLStyle(source) {
        const node = this._getHtmlNode();
        if (node) {
            this._setNodeStyleFromStyleArray(source.HTML_STYLE, node, source);
        }
        return this;
    }
    setHtmlNode(node) {
        this._html = node;
    }
    _setNodeStyleFromStyleArray(styles, node, source) {
        this._forEach(styles, key => {
            const [name, value] = this._getFromOptimalValue(key, source);
            node.style[name] = value;
        });
        return node;
    }
    setMeta(meta) {
        if (typeof meta !== "object") {
            console.log("meta should be an object");
            return;
        }
        this.meta = Object.assign({}, meta);
        return this;
    }
    setState(target = this, state) {
        target.meta = this._cloneObject(state.meta) || this.meta || {};
        target.items = this._getArrayCopy(state.items) || [];
        target.CACHE_KEYS = this._getArrayCopy(state.CACHE_KEYS) || [];
        target.CACHE_VALUES = this._getArrayCopy(state.CACHE_VALUES) || [];
        target.BODY_STYLE = this._getArrayCopy(state.BODY_STYLE) || [];
        target.HTML_STYLE = this._getArrayCopy(state.HTML_STYLE) || [];
        target.BODY_ATTRIBUTES = this._getArrayCopy(state.BODY_ATTRIBUTES) || [];
        return target;
    }
    setStyleFromObject(node, styleObject) {
        this._forEach(Object.keys(styleObject), key => {
            node.style[key] = styleObject[key];
        });
        return this;
    }
    /// set rootNode for capturing
    setTarget(node) {
        this.setBodyNode(node);
        this.setHtmlNode(node.parentNode);
        this.setHeadNode(node.parentNode);
    }
    _styleObjectToOptimalStyleArray(styleObject = {}, parentIndex, source) {
        let parentStyle = [];
        if (this.isNotUndefined(parentIndex)) {
            parentStyle = this.getParentStyleByIndex(parentIndex, source);
        }
        const styles = [];
        this._forEach(Object.keys(styleObject), el => {
            let styleKey = this.getOptimalValue(el, styleObject[el], source);
            if (styleKey &&
                !(this.INHERIT.includes(el) && parentStyle.includes(styleKey))) {
                styles.push(styleKey);
            }
        });
        return styles;
    }
    skipStyle(name, value) {
        return this._isDefaultStyle(name, value);
    }
    _shouldTakeElement(node, nodeStyle) {
        if (this._isSVG(node)) {
            return true;
        }
        if (this.NODE_NAMES_TO_IGNORE.includes(node.nodeName)) {
            return false;
        }
        if (node.parentNode &&
            this.NODE_NAMES_TO_IGNORE.includes(node.parentNode.nodeName)) {
            return false;
        }
        if (node.parentNode && node.parentNode.dataset.ignored) {
            if (node.dataset) {
                // node.dataset.ignored = true;
            }
            return false;
        }
        if (!this.restrictedNodeTypes.includes(node.nodeType)) {
            if (this.skipDisplayNone && node.style && nodeStyle.length) {
                if (nodeStyle.display === "none") {
                    //   node.dataset.ignored = true;
                    return false;
                }
            }
        }
        return true;
    }
    isNotUndefined(el) {
        return el !== void 0;
    }
    _isNotEmptyArray(arr) {
        return arr && arr.length;
    }
    _hasTextContent(node = { textContent: "" }) {
        return typeof node.textContent === "string" && node.textContent.length;
    }
    _hasNodeInCache(nodeName) {
        return nodeName in this.nodeCache;
    }
    _addNodeToCache(nodeName) {
        this.nodeCache[nodeName] = this._getDocument().createElement(nodeName);
    }
    _getTextNode(textContent) {
        return this._getDocument().createTextNode(textContent);
    }
    _getSVGNode(nodeName) {
        return this._getDocument().createElementNS(this._NAMESPACES.svg, nodeName);
    }
    _addTextContent(node, params) {
        if (this._hasTextContent(params)) {
            node.textContent = params.textContent;
        }
    }
    _createNode(params = {
        nodeType: "3",
        index: 3,
        textContent: "noop",
        attributes: [],
        styles: [],
        parent: null,
        isSVG: false,
        pseudoselectors: undefined,
        nodeName: "DIV"
    }, styles, source) {
        let node = null;
        const { nodeName, textContent, nodeType, isSVG } = params;
        if (this.restrictedNodeTypes.includes(parseInt(nodeType))) {
            node = isSVG ? this._getSVGNode("text") : this._getTextNode(textContent);
        }
        else if (isSVG) {
            node = this._getSVGNode(nodeName);
        }
        else {
            node = this._getNodeByName(nodeName);
            this._addTextContent(node, params);
        }
        if (typeof node.setAttribute === "function") {
            node.setAttribute(this._nodeSelectorName(), params.index);
        }
        if (this._isNotEmptyArray(params.attributes)) {
            try {
                this._forEach(params.attributes, ([name, value]) => {
                    if (name) {
                        // https://github.com/asnowwolf/angular/commit/3adb1abff81d60c8440a73c9ab75c193eaf2cf51
                        if (isSVG) {
                            if (name.includes("data-")) {
                                node.setAttribute(name, value);
                            }
                            else {
                                try {
                                    node.setAttributeNS(null, name, value);
                                }
                                catch (e) {
                                    try {
                                        node.setAttributeNS(this._NAMESPACES.svg, name, value);
                                    }
                                    catch (ee) {
                                        node.setAttribute(name, value);
                                    }
                                }
                            }
                        }
                        else {
                            if (this._isSafeAttribute(name)) {
                                if (name === "id") {
                                    // don't handle ids
                                    return;
                                }
                                node.setAttribute(name, value);
                            }
                        }
                    }
                });
            }
            catch (e) {
                console.log(e, node, name);
            }
        }
        // _addStyleNode
        if (this._isNotEmptyArray(params.styles)) {
            if (this._USE_INLINE_STYLES) {
                this._setNodeStyleFromStyleArray(params.styles, node, source);
            }
            else {
                styles.push(this._styleTextForNode(params.index, params.styles, "", source));
                if (params.pseudoselectors) {
                    styles.push(this._styleTextForNode(params.index, params.pseudoselectors.before, ":before", source));
                    styles.push(this._styleTextForNode(params.index, params.pseudoselectors.after, ":after", source));
                }
            }
        }
        // if (node.dataset) {
        //   node.dataset.parent = params.parent;
        // }
        return node;
    }
    _styleTextForNode(index, styles, postfix = "", source) {
        return `[${this._nodeSelectorName()}="${this._nodeSelectorValue(index)}"]${postfix} { ${this._getNodeStyleText(styles, source)} }`;
    }
    _nodeSelectorName() {
        return `data-uid_${this._nodeSelectorDatasetName()}`;
    }
    _nodeSelectorDatasetName() {
        if (this.uidPrefix !== null) {
            return `${this.uidPrefix}`;
        }
        else {
            return "index";
        }
    }
    _nodeSelectorValue(index) {
        return index;
    }
    _insertNode(node, obj, fragment, nodesIndex) {
        let parentId = obj.parent;
        // const selector = `[${this._nodeSelectorName()}="${this._nodeSelectorValue(
        //   parentId
        // )}"]`;
        if (parentId === 0 && fragment.childNodes.length === 0) {
            fragment.appendChild(node);
            return;
        }
        // || nodesIndex[parentId]
        const parent = nodesIndex[parentId] || fragment;
        if (node === parent) {
            return;
        }
        if (typeof parent.appendChild === 'function') {
            try {
                parent.appendChild(node);
            }
            catch (e) {
                fragment.appendChild(node);
            }
        }
        else {
            fragment.appendChild(node);
        }
    }
    _getValueOrEmptyString(obj, key) {
        if (key in obj) {
            return obj[key];
        }
        else {
            return "";
        }
    }
    _getAllKeysDiff(first = {}, second = {}) {
        let fKeys = Object.keys(first);
        let sKeys = Object.keys(second);
        let allKeys = Array.from(new Set([].concat(fKeys, sKeys)));
        let diffs = {};
        allKeys.forEach(key => {
            let fValue = this._getValueOrEmptyString(first, key);
            let sValue = this._getValueOrEmptyString(second, key);
            if (fValue !== sValue) {
                diffs[key] = [fValue, sValue];
            }
        });
        return Object.keys(diffs).length ? diffs : false;
    }
    _getEqualKeysDiff(first, second) {
        let diffs = {};
        Object.keys(first).map(key => {
            if (first[key] !== second[key]) {
                diffs[key] = [first[key], second[key]];
            }
        });
        return Object.keys(diffs).length ? diffs : false;
    }
    _getStylesForPseudoSelectors(node, source) {
        const before = this._createStyleObject(this._getStyleForNode(node, ":before"));
        const after = this._createStyleObject(this._getStyleForNode(node, ":after"));
        const styleDiff = this._getEqualKeysDiff(before, after);
        if (styleDiff) {
            return {
                before: this._styleObjectToOptimalStyleArray(before, undefined, source),
                after: this._styleObjectToOptimalStyleArray(after, undefined, source),
                diff: styleDiff,
                index: null
            };
        }
        else {
            return false;
        }
    }
    _getStyleForNode(element, pseudoselecor = null) {
        if (this.restrictedNodeTypes.includes(element.nodeType)) {
            return [];
        }
        let style = [];
        try {
            style = window.getComputedStyle(element, pseudoselecor);
        }
        catch (e) {
            console.log(e, element, element.nodeType);
        }
        return style;
    }
    _getBodyNode() {
        //legacy hook
        if ("getBodyNode" in this && typeof this.getBodyNode === "function") {
            return this.getBodyNode();
        }
        return this._body || window.document.body;
    }
    _getDocument() {
        return document;
    }
    _getNodeStyleText(styles, source) {
        const style = [];
        this._forEach(styles, key => {
            const [name, value] = this._getFromOptimalValue(key, source);
            style.push(`${name}:${value}`);
        });
        return style.join(";");
    }
    _getNodeByName(nodeName) {
        if (!this._hasNodeInCache(nodeName)) {
            this._addNodeToCache(nodeName);
        }
        return this._getNodeFromCache(nodeName);
    }
    _getNodeFromCache(tag) {
        return this.nodeCache[tag].cloneNode(false);
    }
    _getFromOptimalValue(value, source = this) {
        const [keyIndex, valueIndex] = value.split("/");
        return [source.CACHE_KEYS[keyIndex], source.CACHE_VALUES[valueIndex]];
    }
    getOptimalValue(key, value, source) {
        if (this.SKIP_STYLES[key] === value) {
            return false;
        }
        let keyIndex = source.CACHE_KEYS.indexOf(key);
        let keyValue = source.CACHE_VALUES.indexOf(value);
        if (keyIndex === -1) {
            source.CACHE_KEYS.push(key);
            keyIndex = source.CACHE_KEYS.length - 1;
        }
        if (keyValue === -1) {
            source.CACHE_VALUES.push(value);
            keyValue = source.CACHE_VALUES.length - 1;
        }
        return `${keyIndex}/${keyValue}`;
    }
    _getState(target) {
        return {
            meta: this._cloneObject(target.meta),
            items: this._getArrayCopy(target.items),
            HTML_STYLE: this._getArrayCopy(target.HTML_STYLE),
            BODY_STYLE: this._getArrayCopy(target.BODY_STYLE),
            CACHE_KEYS: this._getArrayCopy(target.CACHE_KEYS),
            CACHE_VALUES: this._getArrayCopy(target.CACHE_VALUES),
            BODY_ATTRIBUTES: this._getArrayCopy(target.BODY_ATTRIBUTES)
        };
    }
    getParentStyleByIndex(index, source) {
        if (typeof index !== "number") {
            return source.BODY_STYLE || [];
        }
        else {
            for (let i = 0; i < index; i++) {
                if (source.items[i] && source.items[i].index === index) {
                    return source.items[i].style || [];
                }
            }
            return [];
        }
    }
}
if (typeof window.AUTOSTART === "boolean" && window.AUTOSTART === true) {
    new DomSnapshot();
}
else {
    window.snapshoter = new DomSnapshot();
}

},{"./config/firebase-factor-config":1,"./constants/dom-namespaces":2,"./constants/dom-pseudoselectors":3,"./constants/escaped-attributes":4,"./constants/inherit-style-attributes":5,"./constants/node-names-to-ignore":6,"./constants/node-names-to-replace":7,"./constants/skipped-style-attributes":8,"./utils/collect-meta":9}]},{},[10])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL1VzZXJzL2Rldi9naXRodWIvZG9tLXNuYXBzaG90L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL3F2LzdtN3Zwc205MHJqOGtmY3p2cHd4OWprNDAwMDBncC9UL2Jyb2Njb2xpLTU2MTM5ODFicllqWldROHRPL2NhY2hlLTMtd2F0Y2hpZnkvY29uZmlnL2ZpcmViYXNlLWZhY3Rvci1jb25maWcuanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL3F2LzdtN3Zwc205MHJqOGtmY3p2cHd4OWprNDAwMDBncC9UL2Jyb2Njb2xpLTU2MTM5ODFicllqWldROHRPL2NhY2hlLTMtd2F0Y2hpZnkvY29uc3RhbnRzL2RvbS1uYW1lc3BhY2VzLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9xdi83bTd2cHNtOTByajhrZmN6dnB3eDlqazQwMDAwZ3AvVC9icm9jY29saS01NjEzOTgxYnJZalpXUTh0Ty9jYWNoZS0zLXdhdGNoaWZ5L2NvbnN0YW50cy9kb20tcHNldWRvc2VsZWN0b3JzLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9xdi83bTd2cHNtOTByajhrZmN6dnB3eDlqazQwMDAwZ3AvVC9icm9jY29saS01NjEzOTgxYnJZalpXUTh0Ty9jYWNoZS0zLXdhdGNoaWZ5L2NvbnN0YW50cy9lc2NhcGVkLWF0dHJpYnV0ZXMuanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL3F2LzdtN3Zwc205MHJqOGtmY3p2cHd4OWprNDAwMDBncC9UL2Jyb2Njb2xpLTU2MTM5ODFicllqWldROHRPL2NhY2hlLTMtd2F0Y2hpZnkvY29uc3RhbnRzL2luaGVyaXQtc3R5bGUtYXR0cmlidXRlcy5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvcXYvN203dnBzbTkwcmo4a2ZjenZwd3g5ams0MDAwMGdwL1QvYnJvY2NvbGktNTYxMzk4MWJyWWpaV1E4dE8vY2FjaGUtMy13YXRjaGlmeS9jb25zdGFudHMvbm9kZS1uYW1lcy10by1pZ25vcmUuanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL3F2LzdtN3Zwc205MHJqOGtmY3p2cHd4OWprNDAwMDBncC9UL2Jyb2Njb2xpLTU2MTM5ODFicllqWldROHRPL2NhY2hlLTMtd2F0Y2hpZnkvY29uc3RhbnRzL25vZGUtbmFtZXMtdG8tcmVwbGFjZS5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvcXYvN203dnBzbTkwcmo4a2ZjenZwd3g5ams0MDAwMGdwL1QvYnJvY2NvbGktNTYxMzk4MWJyWWpaV1E4dE8vY2FjaGUtMy13YXRjaGlmeS9jb25zdGFudHMvc2tpcHBlZC1zdHlsZS1hdHRyaWJ1dGVzLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9xdi83bTd2cHNtOTByajhrZmN6dnB3eDlqazQwMDAwZ3AvVC9icm9jY29saS01NjEzOTgxYnJZalpXUTh0Ty9jYWNoZS0zLXdhdGNoaWZ5L3V0aWxzL2NvbGxlY3QtbWV0YS5qcyIsImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgRklSRUJBU0VfRkFDVE9SX0NPTkZJRyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5Qm1UTTlqQ1hNVXRVeVo3Mzh2NVNsaWNyZW04ZmRsbUI4XCIsXG4gICAgYXV0aERvbWFpbjogXCJkb20tc25hcHNob3QtOTU3NWYuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9kb20tc25hcHNob3QtOTU3NWYuZmlyZWJhc2Vpby5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwiZG9tLXNuYXBzaG90LTk1NzVmXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJcIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIyNDE3MTU1NzYzOTZcIixcbiAgICBhcHBJZDogXCIxOjI0MTcxNTU3NjM5Njp3ZWI6Y2Y1MGUzYjZlOGJjNGI2ZGRiYmVlOVwiLFxuICAgIHNjcmlwdFBhdGg6IFwiaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vZmlyZWJhc2Vqcy82LjYuMS9maXJlYmFzZS1hcHAuanNcIlxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEZJUkVCQVNFX0ZBQ1RPUl9DT05GSUc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1maXJlYmFzZS1mYWN0b3ItY29uZmlnLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgRE9NX05BTUVTUEFDRVMgPSB7XG4gICAgc3ZnOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuICAgIHhodG1sOiAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcsXG4gICAgeG1sOiAnaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlJyxcbiAgICB4bGluazogJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLFxuICAgIHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucydcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBET01fTkFNRVNQQUNFUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRvbS1uYW1lc3BhY2VzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUFNFVURPU0VMRUNUT1JTID0gW1xuICAgICc6YWZ0ZXInLCAnOmJlZm9yZScsICc6Zmlyc3QtbGluZScsICc6Zmlyc3QtbGV0dGVyJywgJzpzZWxlY3Rpb24nXG5dO1xuZXhwb3J0cy5kZWZhdWx0ID0gUFNFVURPU0VMRUNUT1JTO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZG9tLXBzZXVkb3NlbGVjdG9ycy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEVTQ0FQRURfQVRUUklCVVRFUyA9IFtcbiAgICAvL2JvZHlcbiAgICAnb25hZnRlcnByaW50JyxcbiAgICAnb25iZWZvcmVwcmludCcsXG4gICAgJ29uYmVmb3JldW5sb2FkJyxcbiAgICAnb25lcnJvcicsXG4gICAgJ29uaGFzaGNoYW5nZScsXG4gICAgJ29ubG9hZCcsXG4gICAgJ29ubWVzc2FnZScsXG4gICAgJ29ub2ZmbGluZScsXG4gICAgJ29ub25saW5lJyxcbiAgICAnb25wYWdlaGlkZScsXG4gICAgJ29ucGFnZXNob3cnLFxuICAgICdvbnBvcHN0YXRlJyxcbiAgICAnb25yZXNpemUnLFxuICAgICdvbnN0b3JhZ2UnLFxuICAgICdvbnVubG9hZCcsXG4gICAgLy9mb3Jtc1xuICAgICdvbmJsdXInLFxuICAgICdvbmNoYW5nZScsXG4gICAgJ29uY29udGV4dG1lbnUnLFxuICAgICdvbmZvY3VzJyxcbiAgICAnb25pbnB1dCcsXG4gICAgJ29uaW52YWxpZCcsXG4gICAgJ29ucmVzZXQnLFxuICAgICdvbnNlYXJjaCcsXG4gICAgJ29uc2VsZWN0JyxcbiAgICAnb25zdWJtaXQnLFxuICAgIC8va2V5Ym9hcmRcbiAgICAnb25rZXlkb3duJyxcbiAgICAnb25rZXlwcmVzcycsXG4gICAgJ29ua2V5dXAnLFxuICAgIC8vbW91c2VcbiAgICAnb25jbGljaycsXG4gICAgJ29uZGJsY2xpY2snLFxuICAgICdvbm1vdXNlZG93bicsXG4gICAgJ29ubW91c2Vtb3ZlJyxcbiAgICAnb25tb3VzZW91dCcsXG4gICAgJ29ubW91c2VvdmVyJyxcbiAgICAnb25tb3VzZXVwJyxcbiAgICAnb25tb3VzZXdoZWVsJyxcbiAgICAnb253aGVlbCcsXG4gICAgLy9EcmFnIEV2ZW50c1xuICAgICdvbmRyYWcnLFxuICAgICdvbmRyYWdlbmQnLFxuICAgICdvbmRyYWdlbnRlcicsXG4gICAgJ29uZHJhZ2xlYXZlJyxcbiAgICAnb25kcmFnb3ZlcicsXG4gICAgJ29uZHJhZ3N0YXJ0JyxcbiAgICAnb25kcm9wJyxcbiAgICAnb25zY3JvbGwnLFxuICAgIC8vQ2xpcGJvYXJkIEV2ZW50c1xuICAgICdvbmNvcHknLFxuICAgICdvbmN1dCcsXG4gICAgJ29ucGFzdGUnLFxuICAgIC8vIE1lZGlhIEV2ZW50c1xuICAgICdvbmFib3J0JyxcbiAgICAnb25jYW5wbGF5JyxcbiAgICAnb25jYW5wbGF5dGhyb3VnaCcsXG4gICAgJ29uY3VlY2hhbmdlJyxcbiAgICAnb25kdXJhdGlvbmNoYW5nZScsXG4gICAgJ29uZW1wdGllZCcsXG4gICAgJ29uZW5kZWQnLFxuICAgICdvbmVycm9yJyxcbiAgICAnb25sb2FkZWRkYXRhJyxcbiAgICAnb25sb2FkZWRtZXRhZGF0YScsXG4gICAgJ29ubG9hZHN0YXJ0JyxcbiAgICAnb25wYXVzZScsXG4gICAgJ29ucGxheScsXG4gICAgJ29ucGxheWluZycsXG4gICAgJ29ucHJvZ3Jlc3MnLFxuICAgICdvbnJhdGVjaGFuZ2UnLFxuICAgICdvbnNlZWtlZCcsXG4gICAgJ29uc2Vla2luZycsXG4gICAgJ29uc3RhbGxlZCcsXG4gICAgJ29uc3VzcGVuZCcsXG4gICAgJ29udGltZXVwZGF0ZScsXG4gICAgJ29udm9sdW1lY2hhbmdlJyxcbiAgICAnb253YWl0aW5nJyxcbiAgICAvLyBNaXNjIEV2ZW50c1xuICAgICdvbnRvZ2dsZSdcbl07XG5leHBvcnRzLmRlZmF1bHQgPSBFU0NBUEVEX0FUVFJJQlVURVM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lc2NhcGVkLWF0dHJpYnV0ZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJTkhFUklUX1NUWUxFX0FUVFJJQlVURVMgPSBbXG4gICAgJ2F6aW11dGgnLCAnYm9yZGVyLWNvbGxhcHNlJywgJ2JvcmRlci1zcGFjaW5nJywgJ2NhcHRpb24tc2lkZScsXG4gICAgJ2NvbG9yJywgJ2N1cnNvcicsICdkaXJlY3Rpb24nLCAnZWxldmF0aW9uJywgJ2VtcHR5LWNlbGxzJyxcbiAgICAnZm9udC1mYW1pbHknLCAnZm9udC1zaXplJywgJ2ZvbnQtc3R5bGUnLCAnZm9udC12YXJpYW50JywgJ2ZvbnQtd2VpZ2h0JyxcbiAgICAnZm9udCcsICdsZXR0ZXItc3BhY2luZycsICdsaW5lLWhlaWdodCcsICdsaXN0LXN0eWxlLWltYWdlJywgJ2xpc3Qtc3R5bGUtcG9zaXRpb24nLFxuICAgICdsaXN0LXN0eWxlLXR5cGUnLCAnbGlzdC1zdHlsZScsICdvcnBoYW5zJywgJ3BpdGNoLXJhbmdlJywgJ3BpdGNoJywgJ3F1b3RlcycsICdyaWNobmVzcycsXG4gICAgJ3NwZWFrLWhlYWRlcicsICdzcGVhay1udW1lcmFsJywgJ3NwZWFrLXB1bmN0dWF0aW9uJywgJ3NwZWFrJyxcbiAgICAnc3BlZWNoLXJhdGUnLCAnc3RyZXNzJywgJ3RleHQtYWxpZ24nLCAndGV4dC1pbmRlbnQnLCAndGV4dC10cmFuc2Zvcm0nLFxuICAgICd2aXNpYmlsaXR5JywgJ3ZvaWNlLWZhbWlseScsICd2b2x1bWUnLCAnd2hpdGUtc3BhY2UnLCAnd2lkb3dzJywgJ3dvcmQtc3BhY2luZydcbl07XG5leHBvcnRzLmRlZmF1bHQgPSBJTkhFUklUX1NUWUxFX0FUVFJJQlVURVM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmhlcml0LXN0eWxlLWF0dHJpYnV0ZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBOT0RFX05BTUVTX1RPX0lHTk9SRSA9IFtcbiAgICAnTk9TQ1JJUFQnLCAnU0NSSVBUJywgJ1NUWUxFJywgJyNjb21tZW50JywgJyNkb2N1bWVudCdcbl07XG5leHBvcnRzLmRlZmF1bHQgPSBOT0RFX05BTUVTX1RPX0lHTk9SRTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vZGUtbmFtZXMtdG8taWdub3JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgTk9ERV9OQU1FU19UT19SRVBMQUNFID0ge1xuICAgICdJRlJBTUUnOiAnRElWJ1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IE5PREVfTkFNRVNfVE9fUkVQTEFDRTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vZGUtbmFtZXMtdG8tcmVwbGFjZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFNLSVBQRURfU1RZTEVfQVRUUklCVVRFUyA9IHtcbiAgICAnYWxpZ24taXRlbXMnOiAnbm9ybWFsJyxcbiAgICAnYWxpZ24tc2VsZic6ICdub3JtYWwnLFxuICAgICdjbGlwLXBhdGgnOiAnbm9uZScsXG4gICAgJ2ZsZXgtYmFzaXMnOiAnYXV0bycsXG4gICAgJ2ZsZXgtZ3Jvdyc6ICcwJyxcbiAgICAnZmxleC1zaHJpbmsnOiAnMScsXG4gICAgJ2p1c3RpZnktY29udGVudCc6ICdub3JtYWwnLFxuICAgICd1c2VyLXNlbGVjdCc6ICd0ZXh0JyxcbiAgICAnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyc6ICcwcHgnLFxuICAgICdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cyc6ICcwcHgnLFxuICAgICdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyc6ICcwcHgnLFxuICAgICdib3JkZXItdG9wLWxlZnQtcmFkaXVzJzogJzBweCcsXG4gICAgJ2N1cnNvcic6ICdhdXRvJyxcbiAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICcwJSAwJScsXG4gICAgJ2JhY2tncm91bmQtc2l6ZSc6ICdhdXRvJyxcbiAgICAnZGlyZWN0aW9uJzogJ2x0cicsXG4gICAgLy8gXCJtYXJnaW4tYm90dG9tXCI6IFwiMHB4XCIsXG4gICAgLy8gXCJtYXJnaW4tbGVmdFwiOiBcIjBweFwiLFxuICAgIC8vIFwibWFyZ2luLXJpZ2h0XCI6IFwiMHB4XCIsXG4gICAgLy8gXCJtYXJnaW4tdG9wXCI6IFwiMHB4XCIsXG4gICAgJ21heC1oZWlnaHQnOiAnbm9uZScsXG4gICAgJ21heC13aWR0aCc6ICdub25lJyxcbiAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAvLyBcInBhZGRpbmctYm90dG9tXCI6IFwiMHB4XCIsXG4gICAgLy8gXCJwYWRkaW5nLWxlZnRcIjogXCIwcHhcIixcbiAgICAvLyBcInBhZGRpbmctcmlnaHRcIjogXCIwcHhcIixcbiAgICAvLyBcInBhZGRpbmctdG9wXCI6IFwiMHB4XCIsXG4gICAgJ3JpZ2h0JzogJ2F1dG8nLFxuICAgICdzcGVhayc6ICdub3JtYWwnLFxuICAgICd0b3AnOiAnYXV0bycsXG4gICAgJ3RyYW5zaXRpb24tZGVsYXknOiAnMHMnLFxuICAgICd0cmFuc2l0aW9uLWR1cmF0aW9uJzogJzBzJyxcbiAgICAndHJhbnNpdGlvbi1wcm9wZXJ0eSc6ICdhbGwnLFxuICAgICd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbic6ICdlYXNlJyxcbiAgICAndmVydGljYWwtYWxpZ24nOiAnYmFzZWxpbmUnLFxuICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICd3aGl0ZS1zcGFjZSc6ICdub3JtYWwnLFxuICAgICd3aWRvd3MnOiAnMicsXG4gICAgJ3dvcmQtYnJlYWsnOiAnbm9ybWFsJyxcbiAgICAnei1pbmRleCc6ICdhdXRvJyxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBTS0lQUEVEX1NUWUxFX0FUVFJJQlVURVM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1za2lwcGVkLXN0eWxlLWF0dHJpYnV0ZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBkZWZhdWx0XzEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgICBob3N0bmFtZTogd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLFxuICAgICAgICBwcm90b2NvbDogd2luZG93LmxvY2F0aW9uLnByb3RvY29sLFxuICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICBzY3JlZW5XaWR0aDogd2luZG93LnNjcmVlbi53aWR0aCxcbiAgICAgICAgc2NyZWVuSGVpZ2h0OiB3aW5kb3cuc2NyZWVuLmhlaWdodCxcbiAgICAgICAgc2NyZWVuQXZhaWxXaWR0aDogd2luZG93LnNjcmVlbi5hdmFpbFdpZHRoLFxuICAgICAgICBzY3JlZW5BdmFpbEhlaWdodDogd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodCxcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRfMTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbGxlY3QtbWV0YS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGVzY2FwZWRfYXR0cmlidXRlc18xID0gcmVxdWlyZShcIi4vY29uc3RhbnRzL2VzY2FwZWQtYXR0cmlidXRlc1wiKTtcbmNvbnN0IGZpcmViYXNlX2ZhY3Rvcl9jb25maWdfMSA9IHJlcXVpcmUoXCIuL2NvbmZpZy9maXJlYmFzZS1mYWN0b3ItY29uZmlnXCIpO1xuY29uc3QgaW5oZXJpdF9zdHlsZV9hdHRyaWJ1dGVzXzEgPSByZXF1aXJlKFwiLi9jb25zdGFudHMvaW5oZXJpdC1zdHlsZS1hdHRyaWJ1dGVzXCIpO1xuY29uc3Qgc2tpcHBlZF9zdHlsZV9hdHRyaWJ1dGVzXzEgPSByZXF1aXJlKFwiLi9jb25zdGFudHMvc2tpcHBlZC1zdHlsZS1hdHRyaWJ1dGVzXCIpO1xuY29uc3QgZG9tX25hbWVzcGFjZXNfMSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50cy9kb20tbmFtZXNwYWNlc1wiKTtcbmNvbnN0IG5vZGVfbmFtZXNfdG9faWdub3JlXzEgPSByZXF1aXJlKFwiLi9jb25zdGFudHMvbm9kZS1uYW1lcy10by1pZ25vcmVcIik7XG5jb25zdCBub2RlX25hbWVzX3RvX3JlcGxhY2VfMSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50cy9ub2RlLW5hbWVzLXRvLXJlcGxhY2VcIik7XG5jb25zdCBkb21fcHNldWRvc2VsZWN0b3JzXzEgPSByZXF1aXJlKFwiLi9jb25zdGFudHMvZG9tLXBzZXVkb3NlbGVjdG9yc1wiKTtcbmNvbnN0IGNvbGxlY3RfbWV0YV8xID0gcmVxdWlyZShcIi4vdXRpbHMvY29sbGVjdC1tZXRhXCIpO1xuY2xhc3MgRG9tU25hcHNob3Qge1xuICAgIC8qXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge1xuICAgICAgICBpbmxpbmVTdHlsZXM6IGZhbHNlLFxuICAgICAgICB2YWN1dW06IGZhbHNlLFxuICAgICAgICBzdHlsZXNDbGVhbnVwOiB0cnVlLFxuICAgICAgICBjYXB0dXJlUHNldWRvc2VsZWN0b3JzOiB0cnVlLFxuICAgICAgICBzYWZlQXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgIEJPRFlfU1RZTEU6IFtdLFxuICAgICAgICAgICAgQ0FDSEVfS0VZUzogW10sXG4gICAgICAgICAgICBDQUNIRV9WQUxVRVM6IFtdLFxuICAgICAgICAgICAgSFRNTF9TVFlMRTogW10sXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgLy8gdXNlZCB0byBwYXRjaCBpbWFnZSBsaW5rcyBvbiBzbmFwc2hvdCByZXN0b3JlIChtYXkgYmUgcmVwbGFjZWQgdG8gYmFzZTY0IGlubGluZSlcbiAgICAgICAgICAgICAgICBwcm90b2NvbDogXCJcIixcbiAgICAgICAgICAgICAgICBob3N0bmFtZTogXCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgZmJDb25maWcgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnVpZFByZWZpeCA9IG51bGw7XG4gICAgICAgIC8vIHRoaXMgbm9kZXMgbm90IGdvaW5nIHRvIHNuYXBzaG90XG4gICAgICAgIHRoaXMuTk9ERV9OQU1FU19UT19JR05PUkUgPSBub2RlX25hbWVzX3RvX2lnbm9yZV8xLmRlZmF1bHQ7XG4gICAgICAgIC8vIGlmcmFtZXMgbm9kZXMgd2lsbCBiZSByZXBsYWNlZCB0byBkaXYnc1xuICAgICAgICB0aGlzLk5PREVfTkFNRVNfVE9fUkVQTEFDRSA9IG5vZGVfbmFtZXNfdG9fcmVwbGFjZV8xLmRlZmF1bHQ7XG4gICAgICAgIC8vIHBzZXVkb3NlbGVjdG9ycyB0byBjYXB0dXJlXG4gICAgICAgIHRoaXMuUFNFVURPU0VMRUNUT1JTID0gZG9tX3BzZXVkb3NlbGVjdG9yc18xLmRlZmF1bHQ7XG4gICAgICAgIC8vIGluaGVyaXQgc3R5bGVzIChiYXNlZCBvbiBjc3MgMi4xKTtcbiAgICAgICAgdGhpcy5JTkhFUklUID0gaW5oZXJpdF9zdHlsZV9hdHRyaWJ1dGVzXzEuZGVmYXVsdDtcbiAgICAgICAgLy8gc3R5bGVzIHRvIHNraXAgZnJvbSBjYXB0dXJpbmdcbiAgICAgICAgdGhpcy5TS0lQX1NUWUxFUyA9IHNraXBwZWRfc3R5bGVfYXR0cmlidXRlc18xLmRlZmF1bHQ7XG4gICAgICAgIC8vaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9UQUdzL3JlZl9ldmVudGF0dHJpYnV0ZXMuYXNwXG4gICAgICAgIHRoaXMuRVNDQVBFRF9BVFRSSUJVVEVTID0gZXNjYXBlZF9hdHRyaWJ1dGVzXzEuZGVmYXVsdDtcbiAgICAgICAgaWYgKCFjb25maWcuc3RhdGUpIHtcbiAgICAgICAgICAgIGNvbmZpZy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBCT0RZX1NUWUxFOiBbXSxcbiAgICAgICAgICAgICAgICBDQUNIRV9LRVlTOiBbXSxcbiAgICAgICAgICAgICAgICBDQUNIRV9WQUxVRVM6IFtdLFxuICAgICAgICAgICAgICAgIEhUTUxfU1RZTEU6IFtdLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb3RvY29sOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBob3N0bmFtZTogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW5pdCBzdGF0ZVxuICAgICAgICB0aGlzLkJPRFlfU1RZTEUgPSBjb25maWcuc3RhdGUuQk9EWV9TVFlMRSB8fCBbXTtcbiAgICAgICAgdGhpcy5DQUNIRV9LRVlTID0gY29uZmlnLnN0YXRlLkNBQ0hFX0tFWVMgfHwgW107XG4gICAgICAgIHRoaXMuQ0FDSEVfVkFMVUVTID0gY29uZmlnLnN0YXRlLkNBQ0hFX1ZBTFVFUyB8fCBbXTtcbiAgICAgICAgdGhpcy5CT0RZX0FUVFJJQlVURVMgPSBjb25maWcuc3RhdGUuQ0FDSEVfVkFMVUVTIHx8IFtdO1xuICAgICAgICB0aGlzLkhUTUxfU1RZTEUgPSBjb25maWcuc3RhdGUuSFRNTF9TVFlMRSB8fCBbXTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IGNvbmZpZy5zdGF0ZS5pdGVtcyB8fCBbXTtcbiAgICAgICAgdGhpcy5tZXRhID0gY29uZmlnLnN0YXRlLm1ldGEgfHwge307XG4gICAgICAgIHRoaXMuX1VTRV9WQUNVVU0gPSBjb25maWcudmFjdXVtIHx8IGZhbHNlO1xuICAgICAgICAvLyBhcHBlbmQgc3R5bGVzIHRvIGRvbSBub2RlIGluc3RlYWQgb2Ygc3R5bGUgbm9kZVxuICAgICAgICB0aGlzLl9VU0VfSU5MSU5FX1NUWUxFUyA9IGNvbmZpZy5pbmxpbmVTdHlsZXMgfHwgZmFsc2U7XG4gICAgICAgIHRoaXMuX1VTRV9TVFlMRVNfQ0xFQU5VUCA9IGNvbmZpZy5zdHlsZXNDbGVhbnVwIHx8IHRydWU7XG4gICAgICAgIHRoaXMuX1VTRV9QU0VVRE9TRUxFQ1RPUlMgPSBjb25maWcuY2FwdHVyZVBzZXVkb3NlbGVjdG9ycyB8fCB0cnVlO1xuICAgICAgICB0aGlzLl9VU0VfU0FGRV9BVFRSSUJVVEVTID0gY29uZmlnLnNhZmVBdHRyaWJ1dGVzIHx8IHRydWU7XG4gICAgICAgIHRoaXMuX05BTUVTUEFDRVMgPSBkb21fbmFtZXNwYWNlc18xLmRlZmF1bHQ7XG4gICAgICAgIC8vIG5vZGUgY2FjaGUgKGZvciBub2RlIGNyZWF0aW9uKVxuICAgICAgICB0aGlzLm5vZGVDYWNoZSA9IHt9O1xuICAgICAgICAvLyByb290cyBpbml0XG4gICAgICAgIHRoaXMuX2h0bWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faGVhZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9ib2R5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNMb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gc2tpcCB0aGlzIG5vZGUgdHlwZXNcbiAgICAgICAgdGhpcy5yZXN0cmljdGVkTm9kZVR5cGVzID0gWzMsIDhdO1xuICAgICAgICAvLyBza2lwIGhpZGRlbiBub2Rlc1xuICAgICAgICB0aGlzLnNraXBEaXNwbGF5Tm9uZSA9IHRydWU7XG4gICAgICAgIC8vIGZpcmViYXNlIGNvbmZpZyB3aXRoIGRlZmF1bHRzXG4gICAgICAgIHRoaXMuZmJDb25maWcgPSBmYkNvbmZpZyB8fCBmaXJlYmFzZV9mYWN0b3JfY29uZmlnXzEuZGVmYXVsdDtcbiAgICAgICAgdGhpcy5pbnRGaXJlYmFzZSh0aGlzLmZiQ29uZmlnKTtcbiAgICB9XG4gICAgX25vcm1hbGl6ZUF0dHJpYnV0ZU5hbWUoYXR0ck5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyhhdHRyTmFtZSlcbiAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBfaXNTYWZlQXR0cmlidXRlKGF0dHJOYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLl9VU0VfU0FGRV9BVFRSSUJVVEVTICYmXG4gICAgICAgICAgICB0aGlzLkVTQ0FQRURfQVRUUklCVVRFUy5pbmNsdWRlcyh0aGlzLl9ub3JtYWxpemVBdHRyaWJ1dGVOYW1lKGF0dHJOYW1lKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCFhdHRyTmFtZS5pbmNsdWRlcyhcIm5nLVwiKSAmJlxuICAgICAgICAgICAgIWF0dHJOYW1lLmluY2x1ZGVzKCdcIicpICYmXG4gICAgICAgICAgICAhYXR0ck5hbWUuaW5jbHVkZXMoXCJkYXRhLXVpZF9cIikgJiZcbiAgICAgICAgICAgICFhdHRyTmFtZS5pbmNsdWRlcyhcInN0eWxlXCIpKTtcbiAgICB9XG4gICAgX2V4dHJhY3ROb2RlQXR0cmlidXRlcyhub2RlKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwXG4gICAgICAgICAgICAuY2FsbChub2RlLmF0dHJpYnV0ZXMsIGVsID0+IHtcbiAgICAgICAgICAgIHJldHVybiBbZWwubm9kZU5hbWUsIHRoaXMuX3BhdGNoQXR0cmlidXRlKGVsLm5vZGVOYW1lLCBlbC5ub2RlVmFsdWUpXTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoKFthdHRyTmFtZV0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1NhZmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVzZXRUYXJnZXQoKSB7XG4gICAgICAgIHRoaXMuc2V0Qm9keU5vZGUoZmFsc2UpO1xuICAgICAgICB0aGlzLnNldEh0bWxOb2RlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXRIZWFkTm9kZShmYWxzZSk7XG4gICAgfVxuICAgIC8vLyBzZXQgcm9vdE5vZGUgZm9yIHJlc3RvcmluZ1xuICAgIHJlc3RvcmVUbyhub2RlKSB7XG4gICAgICAgIHRoaXMuc2V0Qm9keU5vZGUobm9kZSk7XG4gICAgfVxuICAgIF9jb2xsZWN0TWV0YSgpIHtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3RfbWV0YV8xLmRlZmF1bHQoKTtcbiAgICB9XG4gICAgX3BhdGNoQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGlmIChbXCJzcmNcIiwgXCJocmVmXCJdLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdENoYXIgPSBTdHJpbmcodmFsdWUpLmNoYXJBdCgwKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZENoYXIgPSBTdHJpbmcodmFsdWUpLmNoYXJBdCgxKTtcbiAgICAgICAgICAgIGNvbnN0IGhhc0hhc2ggPSBzZWNvbmRDaGFyID09PSBcIiNcIiB8fCBmaXJzdENoYXIgPT09IFwiI1wiO1xuICAgICAgICAgICAgY29uc3QgaGFzVHdvU2xhc2hlcyA9IGZpcnN0Q2hhciA9PT0gc2Vjb25kQ2hhciAmJiBmaXJzdENoYXIgPT09IFwiL1wiO1xuICAgICAgICAgICAgY29uc3QgaGFzUGF0aCA9IHNlY29uZENoYXIgPT09IFwiL1wiO1xuICAgICAgICAgICAgaWYgKCFoYXNUd29TbGFzaGVzICYmIChoYXNQYXRoIHx8IGhhc0hhc2gpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWV0YS5ob3N0bmFtZSAmJiB0aGlzLm1ldGEucHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMubWV0YS5wcm90b2NvbH0vLyR7dGhpcy5tZXRhLmhvc3RuYW1lfSR7dmFsdWV9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBfaXNTVkcoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IHRoaXMuX05BTUVTUEFDRVMuc3ZnO1xuICAgIH1cbiAgICBfZ2V0Qm9keUF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9leHRyYWN0Tm9kZUF0dHJpYnV0ZXModGhpcy5fZ2V0Qm9keU5vZGUoKSk7XG4gICAgfVxuICAgIF9nZXRCb2R5U3R5bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZU9iamVjdCh0aGlzLl9nZXRTdHlsZUZvck5vZGUodGhpcy5fZ2V0Qm9keU5vZGUoKSkpO1xuICAgIH1cbiAgICBfZ2V0SFRNTFN0eWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0Qm9keVBhcmVudFN0eWxlKCk7XG4gICAgfVxuICAgIF9nZXRCb2R5UGFyZW50U3R5bGUoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSB0aGlzLl9nZXRCb2R5Tm9kZSgpO1xuICAgICAgICBsZXQgc3R5bGVOb2RlID0gW107XG4gICAgICAgIGlmIChib2R5LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHN0eWxlTm9kZSA9IHRoaXMuX2dldFN0eWxlRm9yTm9kZShib2R5LnBhcmVudE5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZU9iamVjdChzdHlsZU5vZGUpO1xuICAgICAgICAvLyBnZXQgb3B0aW1hbCBzdHlsZSwgc2F2ZSBhcyBzcGVjaWFsIG5vZGVcbiAgICB9XG4gICAgYWRkTWV0YShrZXlPck9iamVjdCwgdmFsdWUsIHRhcmdldCA9IHRoaXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXlPck9iamVjdCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgdGFyZ2V0Lm1ldGEgPSBPYmplY3QuYXNzaWduKHRhcmdldC5tZXRhLCBrZXlPck9iamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQubWV0YVtrZXlPck9iamVjdF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0TWV0YSgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMubWV0YSk7XG4gICAgfVxuICAgIGNsZWFyTWV0YSgpIHtcbiAgICAgICAgdGhpcy5tZXRhID0ge307XG4gICAgfVxuICAgIF9hZGRGYlNjcmlwdChyZXNvbHZlLCByZWplY3QsIGNvbmZpZykge1xuICAgICAgICBjb25zdCBoZWFkID0gdGhpcy5fZ2V0RG9jdW1lbnQoKS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IHRoaXMuX2dldERvY3VtZW50KCkuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcbiAgICAgICAgICAgIHRoaXMuZmlyZWJhc2UgPSB3aW5kb3cuZmlyZWJhc2U7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gZSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL2ZpcmViYXNlanMvNC4yLjAvZmlyZWJhc2UuanNcIjtcbiAgICAgICAgc2NyaXB0LnNyYyA9IGNvbmZpZy5zY3JpcHRQYXRoO1xuICAgICAgICBoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfVxuICAgIGludEZpcmViYXNlKGZiQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2xvYWRlZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93LmZpcmViYXNlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJlYmFzZSA9IHdpbmRvdy5maXJlYmFzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2FkZEZiU2NyaXB0KHJlc29sdmUsIHJlamVjdCwgZmJDb25maWcpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlZDtcbiAgICB9XG4gICAgbG9hZGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVkO1xuICAgIH1cbiAgICBfZ2V0SGVhZCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9oZWFkIHx8XG4gICAgICAgICAgICB0aGlzLl9nZXRCb2R5Tm9kZSgpLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcImhlYWRcIikgfHxcbiAgICAgICAgICAgIHRoaXMuX2dldERvY3VtZW50KCkuaGVhZCB8fFxuICAgICAgICAgICAgdGhpcy5fZ2V0RG9jdW1lbnQoKS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0pO1xuICAgIH1cbiAgICBfY2xlYW5IZWFkTm9kZUZyb21TdHlsZXMoKSB7XG4gICAgICAgIGNvbnN0IGhlYWQgPSB0aGlzLl9nZXRIZWFkKCk7XG4gICAgICAgIGxldCBzdHlsZXNUb1JlbW92ZSA9IGhlYWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdHlsZVwiKTtcbiAgICAgICAgaWYgKHN0eWxlc1RvUmVtb3ZlLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHlsZXNUb1JlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGhlYWQucmVtb3ZlQ2hpbGQoc3R5bGVzVG9SZW1vdmVbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBzdHlsZUxpbmtzVG9SZW1vdmUgPSBoZWFkLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO1xuICAgICAgICBpZiAoc3R5bGVMaW5rc1RvUmVtb3ZlLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHlsZUxpbmtzVG9SZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBoZWFkLnJlbW92ZUNoaWxkKHN0eWxlTGlua3NUb1JlbW92ZVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2FkZFN0eWxlTm9kZShjc3MpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLl9nZXREb2N1bWVudCgpLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgICAgY29uc3QgaGVhZCA9IHRoaXMuX2dldEhlYWQoKTtcbiAgICAgICAgc3R5bGUudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgICAgICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlLmFwcGVuZENoaWxkKHRoaXMuX2dldERvY3VtZW50KCkuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICAgIF9nZXREb21Ob2RlRnJvbUFyZ3VtZW50KHNlbGVjdG9yKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwib2JqZWN0XCJcbiAgICAgICAgICAgID8gc2VsZWN0b3JcbiAgICAgICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICAgIF9jbGVhbkRvbU5vZGUodGFyZ2V0KSB7XG4gICAgICAgIHdoaWxlICh0YXJnZXQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUNoaWxkKHRhcmdldC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0YWtlU25hcHNob3Qoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU25hcHNob3QodGhpcy5fZ2V0RG9tTm9kZUZyb21Bcmd1bWVudChzZWxlY3RvcikpO1xuICAgIH1cbiAgICByZW5kZXJTbmFwc2hvdChzZWxlY3Rvciwgc25hcHNob3QsIHJld3JpdGVEb21Db250ZW50ID0gdHJ1ZSkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5fZ2V0RG9tTm9kZUZyb21Bcmd1bWVudChzZWxlY3Rvcik7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgdW5hYmxlIHRvIGZpbmQgdGFyZ2V0IGJ5IHNlbGVjdG9yICR7c2VsZWN0b3J9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJld3JpdGVEb21Db250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9jbGVhbkRvbU5vZGUodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3RvcmVXb3JsZEZyb20oc25hcHNob3QsIHRhcmdldCk7XG4gICAgfVxuICAgIHNob3dTbmFwc2hvdChpZCwgc2VsZWN0b3IgPSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTbmFwc2hvdEJ5SWQoaWQpLnRoZW4oc25hcHNob3QgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95V29ybGQoKTtcbiAgICAgICAgICAgIGxldCB0YXJnZXROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihTdHJpbmcoc2VsZWN0b3IpLnZhbHVlT2YoKSkgfHxcbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRCb2R5Tm9kZSgpO1xuICAgICAgICAgICAgbGV0IHNvdXJjZSA9IHRoaXMuc2V0U3RhdGUodGhpcywgc25hcHNob3QpO1xuICAgICAgICAgICAgdGhpcy5yZXN0b3JlV29ybGRGcm9tKHNvdXJjZSwgdGFyZ2V0Tm9kZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXN0b3JlU25hcHNob3QoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nob3dTbmFwc2hvdChpZCk7XG4gICAgfVxuICAgIF9mYkFkZFRvU25hcHNob3RMaXN0KGlkLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VcbiAgICAgICAgICAgIC5kYXRhYmFzZSgpXG4gICAgICAgICAgICAucmVmKGBzbmFwc2hvdHMtbGlzdC8ke2lkfWApXG4gICAgICAgICAgICAuc2V0KGRhdGEpO1xuICAgIH1cbiAgICBfZmJTZXRTbmFwc2hvdChpZCwgc25hcHNob3QpIHtcbiAgICAgICAgdGhpcy5maXJlYmFzZVxuICAgICAgICAgICAgLmRhdGFiYXNlKClcbiAgICAgICAgICAgIC5yZWYoYHNuYXBzaG90cy8ke2lkfWApXG4gICAgICAgICAgICAuc2V0KHNuYXBzaG90KTtcbiAgICB9XG4gICAgX2ZiR2V0U25hcHNob3QoaWQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgdGhpcy5maXJlYmFzZVxuICAgICAgICAgICAgICAgIC5kYXRhYmFzZSgpXG4gICAgICAgICAgICAgICAgLnJlZihcInNuYXBzaG90cy9cIiArIGlkKVxuICAgICAgICAgICAgICAgIC5vbmNlKFwidmFsdWVcIilcbiAgICAgICAgICAgICAgICAudGhlbihzbmFwc2hvdCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoc25hcHNob3QudmFsKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRTbmFwc2hvdEJ5SWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZiR2V0U25hcHNob3QoaWQpO1xuICAgIH1cbiAgICBfc2hvd1NuYXBzaG90KGlkID0gXCIxNTAyMzEyMDg5NDc5XCIsIHJvb3RFbGVtZW50ID0gd2luZG93LmRvY3VtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFNuYXBzaG90QnlJZChpZCkudGhlbihzbmFwc2hvdCA9PiB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lXb3JsZCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLCBzbmFwc2hvdCk7XG4gICAgICAgICAgICB0aGlzLnJlc3RvcmVXb3JsZChyb290RWxlbWVudCwgdGhpcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfY2xlYXJTdGF0ZSh0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0Lml0ZW1zID0gW107XG4gICAgICAgIHRhcmdldC5DQUNIRV9LRVlTID0gW107XG4gICAgICAgIHRhcmdldC5CT0RZX1NUWUxFID0gW107XG4gICAgICAgIHRhcmdldC5IVE1MX1NUWUxFID0gW107XG4gICAgICAgIHRhcmdldC5DQUNIRV9WQUxVRVMgPSBbXTtcbiAgICAgICAgdGFyZ2V0LkJPRFlfQVRUUklCVVRFUyA9IFtdO1xuICAgIH1cbiAgICBfZ2V0QXJyYXlDb3B5KGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ICE9PSBcIm9iamVjdFwiIHx8IGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudC5zbGljZSgwKTtcbiAgICB9XG4gICAgX2Nsb25lT2JqZWN0KG9iaikge1xuICAgICAgICBpZiAodHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvYmogPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgICB9XG4gICAgX2NvcHlXb3JsZChyb290Tm9kZSA9IGZhbHNlLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvcHlXb3JsZFRvKHJvb3ROb2RlLCBzb3VyY2UpO1xuICAgIH1cbiAgICBfY29weVdvcmxkVG8ocm9vdE5vZGUsIHNvdXJjZSkge1xuICAgICAgICBjb25zdCBwc2V1ZG9TZWxlY3RvcnNTdHlsZXNBcnJheSA9IFtdO1xuICAgICAgICBjb25zdCByZWluZGV4TWFwID0ge307XG4gICAgICAgIGxldCBpdGVtcyA9IHNvdXJjZS5pdGVtcztcbiAgICAgICAgc291cmNlLm1ldGEgPSB0aGlzLl9jb2xsZWN0TWV0YSgpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gcm9vdE5vZGUgfHwgdGhpcy5fZ2V0Qm9keU5vZGUoKTtcbiAgICAgICAgbGV0IGlzQm9keU5vZGVSb290ID0gdGFyZ2V0ID09PSB0aGlzLl9nZXRCb2R5Tm9kZSgpO1xuICAgICAgICBpZiAoaXNCb2R5Tm9kZVJvb3QpIHtcbiAgICAgICAgICAgIHNvdXJjZS5CT0RZX0FUVFJJQlVURVMgPSB0aGlzLl9nZXRCb2R5QXR0cmlidXRlcygpO1xuICAgICAgICAgICAgc291cmNlLkhUTUxfU1RZTEUgPSB0aGlzLl9zdHlsZU9iamVjdFRvT3B0aW1hbFN0eWxlQXJyYXkodGhpcy5fZ2V0SFRNTFN0eWxlKCksIHVuZGVmaW5lZCwgc291cmNlKTtcbiAgICAgICAgICAgIHNvdXJjZS5CT0RZX1NUWUxFID0gdGhpcy5fc3R5bGVPYmplY3RUb09wdGltYWxTdHlsZUFycmF5KHRoaXMuX2dldEJvZHlTdHlsZSgpLCB1bmRlZmluZWQsIHNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNhcHR1cmVkTm9kZXMgPSB0aGlzLl9nZXRBbGxEb21Ob2Rlcyh0YXJnZXQpO1xuICAgICAgICBpZiAoIWlzQm9keU5vZGVSb290KSB7XG4gICAgICAgICAgICBjYXB0dXJlZE5vZGVzLnVuc2hpZnQocm9vdE5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5vZGVzTWFwID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXB0dXJlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNhcHR1cmVkTm9kZXNbaV07XG4gICAgICAgICAgICBub2Rlc01hcC5zZXQoaXRlbSwgaSk7XG4gICAgICAgICAgICBsZXQgbm9kZVN0eWxlID0gdGhpcy5fZ2V0U3R5bGVGb3JOb2RlKGl0ZW0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Nob3VsZFRha2VFbGVtZW50KGl0ZW0sIG5vZGVTdHlsZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5kYXRhc2V0ICYmIHRoaXMuX1VTRV9QU0VVRE9TRUxFQ1RPUlMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBzZXVkb3NlbGVjb3JTdHlsZXMgPSB0aGlzLl9nZXRTdHlsZXNGb3JQc2V1ZG9TZWxlY3RvcnMoaXRlbSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBzZXVkb3NlbGVjb3JTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzZXVkb3NlbGVjb3JTdHlsZXMuaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHNldWRvU2VsZWN0b3JzU3R5bGVzQXJyYXkucHVzaChwc2V1ZG9zZWxlY29yU3R5bGVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHRoaXMuX3NlcmlhbGl6ZU5vZGUobm9kZVN0eWxlLCBpdGVtLCBpLCBzb3VyY2UsIG5vZGVzTWFwKSk7XG4gICAgICAgICAgICAgICAgcmVpbmRleE1hcFtpXSA9IGl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX1VTRV9QU0VVRE9TRUxFQ1RPUlMpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZvckVhY2gocHNldWRvU2VsZWN0b3JzU3R5bGVzQXJyYXksIGVsID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGl0ZW1zW3JlaW5kZXhNYXBbZWwuaW5kZXhdXTtcbiAgICAgICAgICAgICAgICBpdGVtLnBzZXVkb3NlbGVjdG9ycyA9IGVsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX1VTRV9WQUNVVU0pIHtcbiAgICAgICAgICAgIHNvdXJjZS5pdGVtcyA9IHRoaXMuX3ZhY3V1bShpdGVtcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX1VTRV9TVFlMRVNfQ0xFQU5VUCkge1xuICAgICAgICAgICAgdGhpcy5fY2xlYW51cFN0eWxlcyhzb3VyY2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9nZXRIdG1sTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0bWwgfHwgdGhpcy5fZ2V0Qm9keU5vZGUoKS5wYXJlbnROb2RlIHx8IHRoaXMuX2dldEJvZHlOb2RlKCk7XG4gICAgfVxuICAgIHJlc3RvcmVXb3JsZCh0YXJnZXQgPSBmYWxzZSwgc291cmNlKSB7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAvL3RoaXMuX3NldEhUTUxTdHlsZShzb3VyY2UpO1xuICAgICAgICAgICAgdGhpcy5fc2V0Qm9keUF0dHJpYnV0ZXMoc291cmNlKTtcbiAgICAgICAgICAgIC8vdGhpcy5fc2V0Qm9keVN0eWxlKHNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdG9yZVdvcmxkRnJvbShzb3VyY2UsIHRhcmdldCk7XG4gICAgfVxuICAgIF9mb3JFYWNoKGFycmF5LCBhY3Rpb24pIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhY3Rpb24oYXJyYXlbaV0sIGkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc3RvcmVXb3JsZEZyb20oc291cmNlLCB0YXJnZXQgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBzdHlsZXNUb1VwcGVuZCA9IFtdO1xuICAgICAgICBjb25zdCBmcmFnbWVudCA9IHRoaXMuX2dldERvY3VtZW50KCkuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICB0aGlzLnVpZFByZWZpeCA9XG4gICAgICAgICAgICBcImRcIiArXG4gICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKVxuICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoMzYpXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZSgtMik7XG4gICAgICAgIGNvbnN0IG5vZGVzSW5kZXggPSB7fTtcbiAgICAgICAgdGhpcy5fZm9yRWFjaChzb3VyY2UuaXRlbXMsIGVsID0+IHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5fY3JlYXRlTm9kZShlbCwgc3R5bGVzVG9VcHBlbmQsIHNvdXJjZSk7XG4gICAgICAgICAgICBub2Rlc0luZGV4W2VsLmluZGV4XSA9IG5vZGU7XG4gICAgICAgICAgICB0aGlzLl9pbnNlcnROb2RlKG5vZGUsIGVsLCBmcmFnbWVudCwgbm9kZXNJbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzdHlsZXNUb1VwcGVuZC5wdXNoKGBodG1sIHsgJHt0aGlzLl9nZXROb2RlU3R5bGVUZXh0KHNvdXJjZS5IVE1MX1NUWUxFLCBzb3VyY2UpfSB9YCk7XG4gICAgICAgIHN0eWxlc1RvVXBwZW5kLnB1c2goYGJvZHkgeyAke3RoaXMuX2dldE5vZGVTdHlsZVRleHQoc291cmNlLkJPRFlfU1RZTEUsIHNvdXJjZSl9IH1gKTtcbiAgICAgICAgdGhpcy5fYWRkU3R5bGVOb2RlKHN0eWxlc1RvVXBwZW5kLnJldmVyc2UoKS5qb2luKFwiXFxuXCIpKTtcbiAgICAgICAgbGV0IHJvb3ROb2RlID0gdGFyZ2V0IHx8IHRoaXMuX2dldEJvZHlOb2RlKCk7XG4gICAgICAgIHJvb3ROb2RlLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICAgICAgdGhpcy51aWRQcmVmaXggPSBudWxsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgX2Rlc3Ryb3lCb2R5QXR0cmlidXRlcygpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IHRoaXMuX2dldEJvZHlBdHRyaWJ1dGVzKCk7XG4gICAgICAgIGNvbnN0IGJvZHkgPSB0aGlzLl9nZXRCb2R5Tm9kZSgpO1xuICAgICAgICB0aGlzLl9mb3JFYWNoKGF0dHJpYnV0ZXMsIChbbmFtZV0pID0+IHtcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRlc3Ryb3lXb3JsZCgpIHtcbiAgICAgICAgdGhpcy5fZGVzdHJveUJvZHlBdHRyaWJ1dGVzKCk7XG4gICAgICAgIHRoaXMuX2dldEJvZHlOb2RlKCkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgdGhpcy5fY2xlYW5IZWFkTm9kZUZyb21TdHlsZXMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIF9jcmVhdGVTdHlsZU9iamVjdChzdHlsZU5vZGUpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVPYmplY3QgPSB7fTtcbiAgICAgICAgaWYgKCFzdHlsZU5vZGUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3R5bGVPYmplY3Q7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHlsZU5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHN0eWxlTm9kZVtpXTtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W3Byb3BlcnR5TmFtZV0gPSBzdHlsZU5vZGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZU9iamVjdDtcbiAgICB9XG4gICAgX2lzRGVmYXVsdFN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuQk9EWV9TVFlMRVtuYW1lXSA9PT0gdmFsdWUgfHwgZmFsc2U7XG4gICAgfVxuICAgIF92YWN1dW0oaXRlbXMpIHtcbiAgICAgICAgY29uc3QgaXRlbXNUb1JlbW92ZSA9IFtdO1xuICAgICAgICBjb25zdCBsYXN0SXRlbUluZGV4ID0gaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgdGhpcy5fZm9yRWFjaChpdGVtcywgKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAobGFzdEl0ZW1JbmRleCAhPT0gaW5kZXggJiYgaXRlbS5ub2RlTmFtZSA9PT0gXCIjdGV4dFwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5leHROb2RlID0gaXRlbXNbaW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICBsZXQgaGFzU2FtZVBhcmVudCA9IG5leHROb2RlLnBhcmVudCA9PT0gaXRlbS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgbGV0IGhhc1NhbWVOb2RlTmFtZSA9IG5leHROb2RlLm5vZGVOYW1lID09PSBpdGVtLm5vZGVOYW1lO1xuICAgICAgICAgICAgICAgIGlmIChoYXNTYW1lUGFyZW50ICYmIGhhc1NhbWVOb2RlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0Tm9kZS50ZXh0Q29udGVudCA9IGAke2l0ZW0udGV4dENvbnRlbnR9JHtuZXh0Tm9kZS50ZXh0Q29udGVudH1gO1xuICAgICAgICAgICAgICAgICAgICBpdGVtc1RvUmVtb3ZlLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGVsLCBpbmRleCkgPT4gIWl0ZW1zVG9SZW1vdmUuaW5jbHVkZXMoaW5kZXgpKTtcbiAgICB9XG4gICAgX2NsZWFudXBTdHlsZXMoc291cmNlKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlc1RvUmVtb3ZlID0gW107XG4gICAgICAgIGNvbnN0IHN0eWxlZEl0ZW1zID0gc291cmNlLml0ZW1zLmZpbHRlcihlID0+IGUuc3R5bGVzLmxlbmd0aCk7XG4gICAgICAgIC8vIGNvbGxlY3QgYnJvd3NlciBkZWZhdWx0IHN0eWxlc1xuICAgICAgICB0aGlzLl9mb3JFYWNoKHNvdXJjZS5IVE1MX1NUWUxFLCBzdHlsZSA9PiB7XG4gICAgICAgICAgICBpZiAoc3R5bGVkSXRlbXMuZXZlcnkoZWwgPT4gZWwuc3R5bGVzLmluY2x1ZGVzKHN0eWxlKSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlLkJPRFlfU1RZTEUuaW5jbHVkZXMoc3R5bGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1RvUmVtb3ZlLnB1c2goc3R5bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGV4Y2x1ZGUgY29sbGVjdGVkIHN0dWxlc1xuICAgICAgICBzb3VyY2UuSFRNTF9TVFlMRSA9IHNvdXJjZS5IVE1MX1NUWUxFLmZpbHRlcihlbCA9PiAhc3R5bGVzVG9SZW1vdmUuaW5jbHVkZXMoZWwpKTtcbiAgICAgICAgc291cmNlLkJPRFlfU1RZTEUgPSBzb3VyY2UuQk9EWV9TVFlMRS5maWx0ZXIoZWwgPT4gIXN0eWxlc1RvUmVtb3ZlLmluY2x1ZGVzKGVsKSk7XG4gICAgICAgIHRoaXMuX2ZvckVhY2goc291cmNlLml0ZW1zLCBpdGVtID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc05vdEVtcHR5QXJyYXkoaXRlbS5zdHlsZXMpKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5zdHlsZXMgPSBpdGVtLnN0eWxlcy5maWx0ZXIoZWwgPT4gIXN0eWxlc1RvUmVtb3ZlLmluY2x1ZGVzKGVsKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzb3VyY2UuQk9EWV9TVFlMRSA9IHNvdXJjZS5CT0RZX1NUWUxFLmZpbHRlcihlbCA9PiAhc3R5bGVzVG9SZW1vdmUuaW5jbHVkZXMoZWwpKTtcbiAgICB9XG4gICAgX2dldE5hbWVGb3JOb2RlKG5vZGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLk5PREVfTkFNRVNfVE9fUkVQTEFDRVtub2RlTmFtZV0gfHwgbm9kZU5hbWU7XG4gICAgfVxuICAgIF9nZXRQYXJlbnRGb3JOb2RlKG5vZGUsIG5vZGVzTWFwKSB7XG4gICAgICAgIGxldCBwYXJlbnRJZCA9IG5vZGVzTWFwLmhhcyhub2RlLnBhcmVudE5vZGUpXG4gICAgICAgICAgICA/IG5vZGVzTWFwLmdldChub2RlLnBhcmVudE5vZGUpXG4gICAgICAgICAgICA6IDA7XG4gICAgICAgIGxldCBwYXJlbnQgPSBwYXJlbnRJZCA/IHBhcmVudElkIDogMDtcbiAgICAgICAgaWYgKCF0aGlzLmlzTm90VW5kZWZpbmVkKHBhcmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuICAgIF9nZXROb2RlVGV4dENvbnRlbnQobm9kZSkge1xuICAgICAgICByZXR1cm4gbm9kZS5jaGlsZHJlbiA/IFwiXCIgOiBub2RlLmRhdGE7XG4gICAgfVxuICAgIF9hcnJheVRvT2JqZWN0KGFyciA9IFtdKSB7XG4gICAgICAgIHJldHVybiBhcnIucmVkdWNlKChyZXN1bHQsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG4gICAgZ2V0U25hcHNob3RzRGlmZihzMSwgczIpIHtcbiAgICAgICAgbGV0IGZpcnN0U3RhdGUgPSB0aGlzLnNldFN0YXRlKHt9LCBzMSk7XG4gICAgICAgIGxldCBzZWNvbmRTdGF0ZSA9IHRoaXMuc2V0U3RhdGUoe30sIHMyKTtcbiAgICAgICAgbGV0IGZpcnN0U3R5bGVzID0gZmlyc3RTdGF0ZS5pdGVtc1xuICAgICAgICAgICAgLmZpbHRlcihlID0+IGUuc3R5bGVzKVxuICAgICAgICAgICAgLm1hcChlbCA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX3NldE5vZGVTdHlsZUZyb21TdHlsZUFycmF5KGVsLnN0eWxlcywge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7fVxuICAgICAgICAgICAgfSwgZmlyc3RTdGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZWwsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHNlY29uZFN0eWxlcyA9IHNlY29uZFN0YXRlLml0ZW1zXG4gICAgICAgICAgICAuZmlsdGVyKGUgPT4gZS5zdHlsZXMpXG4gICAgICAgICAgICAubWFwKGVsID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5fc2V0Tm9kZVN0eWxlRnJvbVN0eWxlQXJyYXkoZWwuc3R5bGVzLCB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHt9XG4gICAgICAgICAgICB9LCBzZWNvbmRTdGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZWwsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGRpZmZBcnJheSA9IG5ldyBBcnJheShmaXJzdFN0YXRlLml0ZW1zLmxlbmd0aCkuZmlsbChudWxsKTtcbiAgICAgICAgcmV0dXJuIGRpZmZBcnJheS5tYXAoKF8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGZpcnN0Tm9kZTogZmlyc3RTdHlsZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIHNlY29uZE5vZGU6IHNlY29uZFN0eWxlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgc3R5bGVzRGlmZjogdGhpcy5fZ2V0QWxsS2V5c0RpZmYoZmlyc3RTdHlsZXNbaW5kZXhdLnN0eWxlLCBzZWNvbmRTdHlsZXNbaW5kZXhdLnN0eWxlKSxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzRGlmZjogdGhpcy5fZ2V0QWxsS2V5c0RpZmYodGhpcy5fYXJyYXlUb09iamVjdChmaXJzdFN0eWxlc1tpbmRleF0uYXR0cmlidXRlcyksIHRoaXMuX2FycmF5VG9PYmplY3Qoc2Vjb25kU3R5bGVzW2luZGV4XS5hdHRyaWJ1dGVzKSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfc2VyaWFsaXplTm9kZShzdHlsZU5vZGUsIG5vZGUsIGluZGV4LCBzb3VyY2UsIG5vZGVzTWFwKSB7XG4gICAgICAgIGxldCBwYXlsb2FkID0gdGhpcy5fZm9ybWF0U3R5bGUoc3R5bGVOb2RlLCBub2RlLCBpbmRleCwgc291cmNlLCBub2Rlc01hcCk7XG4gICAgICAgIHJldHVybiBwYXlsb2FkO1xuICAgIH1cbiAgICBfZm9ybWF0U3R5bGUoc3R5bGVOb2RlLCBub2RlLCBpbmRleCwgc291cmNlLCBub2Rlc01hcCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgICBzdHlsZXM6IFtdLFxuICAgICAgICAgICAgbm9kZU5hbWU6IHRoaXMuX2dldE5hbWVGb3JOb2RlKG5vZGUubm9kZU5hbWUpLFxuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBbXSxcbiAgICAgICAgICAgIG5vZGVUeXBlOiBub2RlLm5vZGVUeXBlLFxuICAgICAgICAgICAgcGFyZW50OiB0aGlzLl9nZXRQYXJlbnRGb3JOb2RlKG5vZGUsIG5vZGVzTWFwKSxcbiAgICAgICAgICAgIGlzU1ZHOiB0aGlzLl9pc1NWRyhub2RlKSxcbiAgICAgICAgICAgIHRleHRDb250ZW50OiB0aGlzLl9nZXROb2RlVGV4dENvbnRlbnQobm9kZSlcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLl9jcmVhdGVTdHlsZU9iamVjdChzdHlsZU5vZGUpO1xuICAgICAgICAvLyBpZiAocmVzdWx0LmlzU1ZHICYmIHJlc3VsdC5ub2RlTmFtZSAhPT0gJ3N2ZycpIHtcbiAgICAgICAgLy8gcmVzdWx0LnN0eWxlcyA9IFtdO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICByZXN1bHQuc3R5bGVzID0gdGhpcy5fc3R5bGVPYmplY3RUb09wdGltYWxTdHlsZUFycmF5KHN0eWxlLCByZXN1bHQucGFyZW50LCBzb3VyY2UpO1xuICAgICAgICAvLyB9XG4gICAgICAgIGlmICghdGhpcy5yZXN0cmljdGVkTm9kZVR5cGVzLmluY2x1ZGVzKG5vZGUubm9kZVR5cGUpKSB7XG4gICAgICAgICAgICByZXN1bHQuYXR0cmlidXRlcyA9IHRoaXMuX2V4dHJhY3ROb2RlQXR0cmlidXRlcyhub2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0QWxsRG9tTm9kZXMobm9kZSkge1xuICAgICAgICBsZXQgbGlzdE9mTm9kZXMgPSBbXTtcbiAgICAgICAgbGV0IHdhbGsgPSB0aGlzLl9nZXREb2N1bWVudCgpLmNyZWF0ZVRyZWVXYWxrZXIobm9kZSwgTm9kZUZpbHRlci5TSE9XX0FMTCwge1xuICAgICAgICAgICAgYWNjZXB0Tm9kZTogbm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLk5PREVfTkFNRVNfVE9fSUdOT1JFLmluY2x1ZGVzKG5vZGUubm9kZU5hbWUpXG4gICAgICAgICAgICAgICAgICAgID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUXG4gICAgICAgICAgICAgICAgICAgIDogTm9kZUZpbHRlci5GSUxURVJfUkVKRUNUO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IG4gPSBudWxsO1xuICAgICAgICB3aGlsZSAoKG4gPSB3YWxrLm5leHROb2RlKCkpKSB7XG4gICAgICAgICAgICBsaXN0T2ZOb2Rlcy5wdXNoKG4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0T2ZOb2RlcztcbiAgICB9XG4gICAgX2ZiU2F2ZVNuYXBzaG90KGlkLCBzdGF0ZSkge1xuICAgICAgICB0aGlzLl9mYlNldFNuYXBzaG90KGlkLCBzdGF0ZSk7XG4gICAgICAgIHRoaXMuX2ZiQWRkVG9TbmFwc2hvdExpc3QoaWQsIHsgdmlzaWJsZTogdHJ1ZSwgbWV0YTogc3RhdGUubWV0YSB9KTtcbiAgICB9XG4gICAgY3JlYXRlU25hcHNob3Qocm9vdE5vZGUgPSBmYWxzZSkge1xuICAgICAgICBsZXQgc291cmNlID0ge307XG4gICAgICAgIHRoaXMuX2NsZWFyU3RhdGUoc291cmNlKTtcbiAgICAgICAgdGhpcy5fY29weVdvcmxkKHJvb3ROb2RlLCBzb3VyY2UpO1xuICAgICAgICB0aGlzLmFkZE1ldGEoXCJEYXRlXCIsIERhdGUubm93KCksIHNvdXJjZSk7XG4gICAgICAgIHRoaXMuYWRkTWV0YShcIlVSTFwiLCB3aW5kb3cubG9jYXRpb24uaHJlZiwgc291cmNlKTtcbiAgICAgICAgdGhpcy5hZGRNZXRhKFwiQnJvd3NlclwiLCB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCwgc291cmNlKTtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5fZ2V0U3RhdGUoc291cmNlKTtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgICBzYXZlU25hcHNob3QoY3VzdG9tSWQgPSBmYWxzZSwgc3RhdGUpIHtcbiAgICAgICAgY29uc3QgaWQgPSBjdXN0b21JZCB8fCBEYXRlLm5vdygpO1xuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IHRoaXMuY3JlYXRlU25hcHNob3QoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9mYlNhdmVTbmFwc2hvdChpZCwgc3RhdGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhgc25hcHNob3QgSUQgaXM6ICR7aWR9YCk7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG4gICAgX3NldEJvZHlBdHRyaWJ1dGVzKHNvdXJjZSkge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gc291cmNlLkJPRFlfQVRUUklCVVRFUztcbiAgICAgICAgY29uc3QgYm9keSA9IHRoaXMuX2dldEJvZHlOb2RlKCk7XG4gICAgICAgIHRoaXMuX2ZvckVhY2goYXR0cmlidXRlcywgKFtuYW1lLCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGJvZHkuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzZXRCb2R5Tm9kZShub2RlKSB7XG4gICAgICAgIHRoaXMuX2JvZHkgPSBub2RlO1xuICAgIH1cbiAgICBfc2V0Qm9keVN0eWxlKHNvdXJjZSkge1xuICAgICAgICB0aGlzLl9zZXROb2RlU3R5bGVGcm9tU3R5bGVBcnJheShzb3VyY2UuQk9EWV9TVFlMRSwgdGhpcy5fZ2V0Qm9keU5vZGUoKSwgc291cmNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNldEhlYWROb2RlKG5vZGUpIHtcbiAgICAgICAgdGhpcy5faGVhZCA9IG5vZGU7XG4gICAgfVxuICAgIF9zZXRIVE1MU3R5bGUoc291cmNlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9nZXRIdG1sTm9kZSgpO1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fc2V0Tm9kZVN0eWxlRnJvbVN0eWxlQXJyYXkoc291cmNlLkhUTUxfU1RZTEUsIG5vZGUsIHNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNldEh0bWxOb2RlKG5vZGUpIHtcbiAgICAgICAgdGhpcy5faHRtbCA9IG5vZGU7XG4gICAgfVxuICAgIF9zZXROb2RlU3R5bGVGcm9tU3R5bGVBcnJheShzdHlsZXMsIG5vZGUsIHNvdXJjZSkge1xuICAgICAgICB0aGlzLl9mb3JFYWNoKHN0eWxlcywga2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFtuYW1lLCB2YWx1ZV0gPSB0aGlzLl9nZXRGcm9tT3B0aW1hbFZhbHVlKGtleSwgc291cmNlKTtcbiAgICAgICAgICAgIG5vZGUuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICBzZXRNZXRhKG1ldGEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtZXRhICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1ldGEgc2hvdWxkIGJlIGFuIG9iamVjdFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1ldGEgPSBPYmplY3QuYXNzaWduKHt9LCBtZXRhKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNldFN0YXRlKHRhcmdldCA9IHRoaXMsIHN0YXRlKSB7XG4gICAgICAgIHRhcmdldC5tZXRhID0gdGhpcy5fY2xvbmVPYmplY3Qoc3RhdGUubWV0YSkgfHwgdGhpcy5tZXRhIHx8IHt9O1xuICAgICAgICB0YXJnZXQuaXRlbXMgPSB0aGlzLl9nZXRBcnJheUNvcHkoc3RhdGUuaXRlbXMpIHx8IFtdO1xuICAgICAgICB0YXJnZXQuQ0FDSEVfS0VZUyA9IHRoaXMuX2dldEFycmF5Q29weShzdGF0ZS5DQUNIRV9LRVlTKSB8fCBbXTtcbiAgICAgICAgdGFyZ2V0LkNBQ0hFX1ZBTFVFUyA9IHRoaXMuX2dldEFycmF5Q29weShzdGF0ZS5DQUNIRV9WQUxVRVMpIHx8IFtdO1xuICAgICAgICB0YXJnZXQuQk9EWV9TVFlMRSA9IHRoaXMuX2dldEFycmF5Q29weShzdGF0ZS5CT0RZX1NUWUxFKSB8fCBbXTtcbiAgICAgICAgdGFyZ2V0LkhUTUxfU1RZTEUgPSB0aGlzLl9nZXRBcnJheUNvcHkoc3RhdGUuSFRNTF9TVFlMRSkgfHwgW107XG4gICAgICAgIHRhcmdldC5CT0RZX0FUVFJJQlVURVMgPSB0aGlzLl9nZXRBcnJheUNvcHkoc3RhdGUuQk9EWV9BVFRSSUJVVEVTKSB8fCBbXTtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG4gICAgc2V0U3R5bGVGcm9tT2JqZWN0KG5vZGUsIHN0eWxlT2JqZWN0KSB7XG4gICAgICAgIHRoaXMuX2ZvckVhY2goT2JqZWN0LmtleXMoc3R5bGVPYmplY3QpLCBrZXkgPT4ge1xuICAgICAgICAgICAgbm9kZS5zdHlsZVtrZXldID0gc3R5bGVPYmplY3Rba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvLy8gc2V0IHJvb3ROb2RlIGZvciBjYXB0dXJpbmdcbiAgICBzZXRUYXJnZXQobm9kZSkge1xuICAgICAgICB0aGlzLnNldEJvZHlOb2RlKG5vZGUpO1xuICAgICAgICB0aGlzLnNldEh0bWxOb2RlKG5vZGUucGFyZW50Tm9kZSk7XG4gICAgICAgIHRoaXMuc2V0SGVhZE5vZGUobm9kZS5wYXJlbnROb2RlKTtcbiAgICB9XG4gICAgX3N0eWxlT2JqZWN0VG9PcHRpbWFsU3R5bGVBcnJheShzdHlsZU9iamVjdCA9IHt9LCBwYXJlbnRJbmRleCwgc291cmNlKSB7XG4gICAgICAgIGxldCBwYXJlbnRTdHlsZSA9IFtdO1xuICAgICAgICBpZiAodGhpcy5pc05vdFVuZGVmaW5lZChwYXJlbnRJbmRleCkpIHtcbiAgICAgICAgICAgIHBhcmVudFN0eWxlID0gdGhpcy5nZXRQYXJlbnRTdHlsZUJ5SW5kZXgocGFyZW50SW5kZXgsIHNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3R5bGVzID0gW107XG4gICAgICAgIHRoaXMuX2ZvckVhY2goT2JqZWN0LmtleXMoc3R5bGVPYmplY3QpLCBlbCA9PiB7XG4gICAgICAgICAgICBsZXQgc3R5bGVLZXkgPSB0aGlzLmdldE9wdGltYWxWYWx1ZShlbCwgc3R5bGVPYmplY3RbZWxdLCBzb3VyY2UpO1xuICAgICAgICAgICAgaWYgKHN0eWxlS2V5ICYmXG4gICAgICAgICAgICAgICAgISh0aGlzLklOSEVSSVQuaW5jbHVkZXMoZWwpICYmIHBhcmVudFN0eWxlLmluY2x1ZGVzKHN0eWxlS2V5KSkpIHtcbiAgICAgICAgICAgICAgICBzdHlsZXMucHVzaChzdHlsZUtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3R5bGVzO1xuICAgIH1cbiAgICBza2lwU3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGVmYXVsdFN0eWxlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gICAgX3Nob3VsZFRha2VFbGVtZW50KG5vZGUsIG5vZGVTdHlsZSkge1xuICAgICAgICBpZiAodGhpcy5faXNTVkcobm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLk5PREVfTkFNRVNfVE9fSUdOT1JFLmluY2x1ZGVzKG5vZGUubm9kZU5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUucGFyZW50Tm9kZSAmJlxuICAgICAgICAgICAgdGhpcy5OT0RFX05BTUVTX1RPX0lHTk9SRS5pbmNsdWRlcyhub2RlLnBhcmVudE5vZGUubm9kZU5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUucGFyZW50Tm9kZSAmJiBub2RlLnBhcmVudE5vZGUuZGF0YXNldC5pZ25vcmVkKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5kYXRhc2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gbm9kZS5kYXRhc2V0Lmlnbm9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5yZXN0cmljdGVkTm9kZVR5cGVzLmluY2x1ZGVzKG5vZGUubm9kZVR5cGUpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5za2lwRGlzcGxheU5vbmUgJiYgbm9kZS5zdHlsZSAmJiBub2RlU3R5bGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGVTdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIG5vZGUuZGF0YXNldC5pZ25vcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaXNOb3RVbmRlZmluZWQoZWwpIHtcbiAgICAgICAgcmV0dXJuIGVsICE9PSB2b2lkIDA7XG4gICAgfVxuICAgIF9pc05vdEVtcHR5QXJyYXkoYXJyKSB7XG4gICAgICAgIHJldHVybiBhcnIgJiYgYXJyLmxlbmd0aDtcbiAgICB9XG4gICAgX2hhc1RleHRDb250ZW50KG5vZGUgPSB7IHRleHRDb250ZW50OiBcIlwiIH0pIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBub2RlLnRleHRDb250ZW50ID09PSBcInN0cmluZ1wiICYmIG5vZGUudGV4dENvbnRlbnQubGVuZ3RoO1xuICAgIH1cbiAgICBfaGFzTm9kZUluQ2FjaGUobm9kZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGVOYW1lIGluIHRoaXMubm9kZUNhY2hlO1xuICAgIH1cbiAgICBfYWRkTm9kZVRvQ2FjaGUobm9kZU5hbWUpIHtcbiAgICAgICAgdGhpcy5ub2RlQ2FjaGVbbm9kZU5hbWVdID0gdGhpcy5fZ2V0RG9jdW1lbnQoKS5jcmVhdGVFbGVtZW50KG5vZGVOYW1lKTtcbiAgICB9XG4gICAgX2dldFRleHROb2RlKHRleHRDb250ZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXREb2N1bWVudCgpLmNyZWF0ZVRleHROb2RlKHRleHRDb250ZW50KTtcbiAgICB9XG4gICAgX2dldFNWR05vZGUobm9kZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldERvY3VtZW50KCkuY3JlYXRlRWxlbWVudE5TKHRoaXMuX05BTUVTUEFDRVMuc3ZnLCBub2RlTmFtZSk7XG4gICAgfVxuICAgIF9hZGRUZXh0Q29udGVudChub2RlLCBwYXJhbXMpIHtcbiAgICAgICAgaWYgKHRoaXMuX2hhc1RleHRDb250ZW50KHBhcmFtcykpIHtcbiAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBwYXJhbXMudGV4dENvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2NyZWF0ZU5vZGUocGFyYW1zID0ge1xuICAgICAgICBub2RlVHlwZTogXCIzXCIsXG4gICAgICAgIGluZGV4OiAzLFxuICAgICAgICB0ZXh0Q29udGVudDogXCJub29wXCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IFtdLFxuICAgICAgICBzdHlsZXM6IFtdLFxuICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgIGlzU1ZHOiBmYWxzZSxcbiAgICAgICAgcHNldWRvc2VsZWN0b3JzOiB1bmRlZmluZWQsXG4gICAgICAgIG5vZGVOYW1lOiBcIkRJVlwiXG4gICAgfSwgc3R5bGVzLCBzb3VyY2UpIHtcbiAgICAgICAgbGV0IG5vZGUgPSBudWxsO1xuICAgICAgICBjb25zdCB7IG5vZGVOYW1lLCB0ZXh0Q29udGVudCwgbm9kZVR5cGUsIGlzU1ZHIH0gPSBwYXJhbXM7XG4gICAgICAgIGlmICh0aGlzLnJlc3RyaWN0ZWROb2RlVHlwZXMuaW5jbHVkZXMocGFyc2VJbnQobm9kZVR5cGUpKSkge1xuICAgICAgICAgICAgbm9kZSA9IGlzU1ZHID8gdGhpcy5fZ2V0U1ZHTm9kZShcInRleHRcIikgOiB0aGlzLl9nZXRUZXh0Tm9kZSh0ZXh0Q29udGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNTVkcpIHtcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLl9nZXRTVkdOb2RlKG5vZGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLl9nZXROb2RlQnlOYW1lKG5vZGVOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuX2FkZFRleHRDb250ZW50KG5vZGUsIHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBub2RlLnNldEF0dHJpYnV0ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSh0aGlzLl9ub2RlU2VsZWN0b3JOYW1lKCksIHBhcmFtcy5pbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2lzTm90RW1wdHlBcnJheShwYXJhbXMuYXR0cmlidXRlcykpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZm9yRWFjaChwYXJhbXMuYXR0cmlidXRlcywgKFtuYW1lLCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hc25vd3dvbGYvYW5ndWxhci9jb21taXQvM2FkYjFhYmZmODFkNjBjODQ0MGE3M2M5YWI3NWMxOTNlYWYyY2Y1MVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzU1ZHKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUuaW5jbHVkZXMoXCJkYXRhLVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGVOUyh0aGlzLl9OQU1FU1BBQ0VTLnN2ZywgbmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lzU2FmZUF0dHJpYnV0ZShuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gXCJpZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkb24ndCBoYW5kbGUgaWRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLCBub2RlLCBuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBfYWRkU3R5bGVOb2RlXG4gICAgICAgIGlmICh0aGlzLl9pc05vdEVtcHR5QXJyYXkocGFyYW1zLnN0eWxlcykpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9VU0VfSU5MSU5FX1NUWUxFUykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NldE5vZGVTdHlsZUZyb21TdHlsZUFycmF5KHBhcmFtcy5zdHlsZXMsIG5vZGUsIHNvdXJjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZXMucHVzaCh0aGlzLl9zdHlsZVRleHRGb3JOb2RlKHBhcmFtcy5pbmRleCwgcGFyYW1zLnN0eWxlcywgXCJcIiwgc291cmNlKSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5wc2V1ZG9zZWxlY3RvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzLnB1c2godGhpcy5fc3R5bGVUZXh0Rm9yTm9kZShwYXJhbXMuaW5kZXgsIHBhcmFtcy5wc2V1ZG9zZWxlY3RvcnMuYmVmb3JlLCBcIjpiZWZvcmVcIiwgc291cmNlKSk7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcy5wdXNoKHRoaXMuX3N0eWxlVGV4dEZvck5vZGUocGFyYW1zLmluZGV4LCBwYXJhbXMucHNldWRvc2VsZWN0b3JzLmFmdGVyLCBcIjphZnRlclwiLCBzb3VyY2UpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgKG5vZGUuZGF0YXNldCkge1xuICAgICAgICAvLyAgIG5vZGUuZGF0YXNldC5wYXJlbnQgPSBwYXJhbXMucGFyZW50O1xuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICBfc3R5bGVUZXh0Rm9yTm9kZShpbmRleCwgc3R5bGVzLCBwb3N0Zml4ID0gXCJcIiwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBgWyR7dGhpcy5fbm9kZVNlbGVjdG9yTmFtZSgpfT1cIiR7dGhpcy5fbm9kZVNlbGVjdG9yVmFsdWUoaW5kZXgpfVwiXSR7cG9zdGZpeH0geyAke3RoaXMuX2dldE5vZGVTdHlsZVRleHQoc3R5bGVzLCBzb3VyY2UpfSB9YDtcbiAgICB9XG4gICAgX25vZGVTZWxlY3Rvck5hbWUoKSB7XG4gICAgICAgIHJldHVybiBgZGF0YS11aWRfJHt0aGlzLl9ub2RlU2VsZWN0b3JEYXRhc2V0TmFtZSgpfWA7XG4gICAgfVxuICAgIF9ub2RlU2VsZWN0b3JEYXRhc2V0TmFtZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudWlkUHJlZml4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy51aWRQcmVmaXh9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcImluZGV4XCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX25vZGVTZWxlY3RvclZhbHVlKGluZGV4KSB7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gICAgX2luc2VydE5vZGUobm9kZSwgb2JqLCBmcmFnbWVudCwgbm9kZXNJbmRleCkge1xuICAgICAgICBsZXQgcGFyZW50SWQgPSBvYmoucGFyZW50O1xuICAgICAgICAvLyBjb25zdCBzZWxlY3RvciA9IGBbJHt0aGlzLl9ub2RlU2VsZWN0b3JOYW1lKCl9PVwiJHt0aGlzLl9ub2RlU2VsZWN0b3JWYWx1ZShcbiAgICAgICAgLy8gICBwYXJlbnRJZFxuICAgICAgICAvLyApfVwiXWA7XG4gICAgICAgIGlmIChwYXJlbnRJZCA9PT0gMCAmJiBmcmFnbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gfHwgbm9kZXNJbmRleFtwYXJlbnRJZF1cbiAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZXNJbmRleFtwYXJlbnRJZF0gfHwgZnJhZ21lbnQ7XG4gICAgICAgIGlmIChub2RlID09PSBwYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHBhcmVudC5hcHBlbmRDaGlsZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2dldFZhbHVlT3JFbXB0eVN0cmluZyhvYmosIGtleSkge1xuICAgICAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIG9ialtrZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2dldEFsbEtleXNEaWZmKGZpcnN0ID0ge30sIHNlY29uZCA9IHt9KSB7XG4gICAgICAgIGxldCBmS2V5cyA9IE9iamVjdC5rZXlzKGZpcnN0KTtcbiAgICAgICAgbGV0IHNLZXlzID0gT2JqZWN0LmtleXMoc2Vjb25kKTtcbiAgICAgICAgbGV0IGFsbEtleXMgPSBBcnJheS5mcm9tKG5ldyBTZXQoW10uY29uY2F0KGZLZXlzLCBzS2V5cykpKTtcbiAgICAgICAgbGV0IGRpZmZzID0ge307XG4gICAgICAgIGFsbEtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgbGV0IGZWYWx1ZSA9IHRoaXMuX2dldFZhbHVlT3JFbXB0eVN0cmluZyhmaXJzdCwga2V5KTtcbiAgICAgICAgICAgIGxldCBzVmFsdWUgPSB0aGlzLl9nZXRWYWx1ZU9yRW1wdHlTdHJpbmcoc2Vjb25kLCBrZXkpO1xuICAgICAgICAgICAgaWYgKGZWYWx1ZSAhPT0gc1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZGlmZnNba2V5XSA9IFtmVmFsdWUsIHNWYWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZGlmZnMpLmxlbmd0aCA/IGRpZmZzIDogZmFsc2U7XG4gICAgfVxuICAgIF9nZXRFcXVhbEtleXNEaWZmKGZpcnN0LCBzZWNvbmQpIHtcbiAgICAgICAgbGV0IGRpZmZzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGZpcnN0KS5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChmaXJzdFtrZXldICE9PSBzZWNvbmRba2V5XSkge1xuICAgICAgICAgICAgICAgIGRpZmZzW2tleV0gPSBbZmlyc3Rba2V5XSwgc2Vjb25kW2tleV1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRpZmZzKS5sZW5ndGggPyBkaWZmcyA6IGZhbHNlO1xuICAgIH1cbiAgICBfZ2V0U3R5bGVzRm9yUHNldWRvU2VsZWN0b3JzKG5vZGUsIHNvdXJjZSkge1xuICAgICAgICBjb25zdCBiZWZvcmUgPSB0aGlzLl9jcmVhdGVTdHlsZU9iamVjdCh0aGlzLl9nZXRTdHlsZUZvck5vZGUobm9kZSwgXCI6YmVmb3JlXCIpKTtcbiAgICAgICAgY29uc3QgYWZ0ZXIgPSB0aGlzLl9jcmVhdGVTdHlsZU9iamVjdCh0aGlzLl9nZXRTdHlsZUZvck5vZGUobm9kZSwgXCI6YWZ0ZXJcIikpO1xuICAgICAgICBjb25zdCBzdHlsZURpZmYgPSB0aGlzLl9nZXRFcXVhbEtleXNEaWZmKGJlZm9yZSwgYWZ0ZXIpO1xuICAgICAgICBpZiAoc3R5bGVEaWZmKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGJlZm9yZTogdGhpcy5fc3R5bGVPYmplY3RUb09wdGltYWxTdHlsZUFycmF5KGJlZm9yZSwgdW5kZWZpbmVkLCBzb3VyY2UpLFxuICAgICAgICAgICAgICAgIGFmdGVyOiB0aGlzLl9zdHlsZU9iamVjdFRvT3B0aW1hbFN0eWxlQXJyYXkoYWZ0ZXIsIHVuZGVmaW5lZCwgc291cmNlKSxcbiAgICAgICAgICAgICAgICBkaWZmOiBzdHlsZURpZmYsXG4gICAgICAgICAgICAgICAgaW5kZXg6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2dldFN0eWxlRm9yTm9kZShlbGVtZW50LCBwc2V1ZG9zZWxlY29yID0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5yZXN0cmljdGVkTm9kZVR5cGVzLmluY2x1ZGVzKGVsZW1lbnQubm9kZVR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN0eWxlID0gW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIHBzZXVkb3NlbGVjb3IpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLCBlbGVtZW50LCBlbGVtZW50Lm5vZGVUeXBlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuICAgIF9nZXRCb2R5Tm9kZSgpIHtcbiAgICAgICAgLy9sZWdhY3kgaG9va1xuICAgICAgICBpZiAoXCJnZXRCb2R5Tm9kZVwiIGluIHRoaXMgJiYgdHlwZW9mIHRoaXMuZ2V0Qm9keU5vZGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Qm9keU5vZGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fYm9keSB8fCB3aW5kb3cuZG9jdW1lbnQuYm9keTtcbiAgICB9XG4gICAgX2dldERvY3VtZW50KCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgfVxuICAgIF9nZXROb2RlU3R5bGVUZXh0KHN0eWxlcywgc291cmNlKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gW107XG4gICAgICAgIHRoaXMuX2ZvckVhY2goc3R5bGVzLCBrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW25hbWUsIHZhbHVlXSA9IHRoaXMuX2dldEZyb21PcHRpbWFsVmFsdWUoa2V5LCBzb3VyY2UpO1xuICAgICAgICAgICAgc3R5bGUucHVzaChgJHtuYW1lfToke3ZhbHVlfWApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0eWxlLmpvaW4oXCI7XCIpO1xuICAgIH1cbiAgICBfZ2V0Tm9kZUJ5TmFtZShub2RlTmFtZSkge1xuICAgICAgICBpZiAoIXRoaXMuX2hhc05vZGVJbkNhY2hlKG5vZGVOYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5fYWRkTm9kZVRvQ2FjaGUobm9kZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXROb2RlRnJvbUNhY2hlKG5vZGVOYW1lKTtcbiAgICB9XG4gICAgX2dldE5vZGVGcm9tQ2FjaGUodGFnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVDYWNoZVt0YWddLmNsb25lTm9kZShmYWxzZSk7XG4gICAgfVxuICAgIF9nZXRGcm9tT3B0aW1hbFZhbHVlKHZhbHVlLCBzb3VyY2UgPSB0aGlzKSB7XG4gICAgICAgIGNvbnN0IFtrZXlJbmRleCwgdmFsdWVJbmRleF0gPSB2YWx1ZS5zcGxpdChcIi9cIik7XG4gICAgICAgIHJldHVybiBbc291cmNlLkNBQ0hFX0tFWVNba2V5SW5kZXhdLCBzb3VyY2UuQ0FDSEVfVkFMVUVTW3ZhbHVlSW5kZXhdXTtcbiAgICB9XG4gICAgZ2V0T3B0aW1hbFZhbHVlKGtleSwgdmFsdWUsIHNvdXJjZSkge1xuICAgICAgICBpZiAodGhpcy5TS0lQX1NUWUxFU1trZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBrZXlJbmRleCA9IHNvdXJjZS5DQUNIRV9LRVlTLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgbGV0IGtleVZhbHVlID0gc291cmNlLkNBQ0hFX1ZBTFVFUy5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgaWYgKGtleUluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgc291cmNlLkNBQ0hFX0tFWVMucHVzaChrZXkpO1xuICAgICAgICAgICAga2V5SW5kZXggPSBzb3VyY2UuQ0FDSEVfS0VZUy5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrZXlWYWx1ZSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHNvdXJjZS5DQUNIRV9WQUxVRVMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICBrZXlWYWx1ZSA9IHNvdXJjZS5DQUNIRV9WQUxVRVMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7a2V5SW5kZXh9LyR7a2V5VmFsdWV9YDtcbiAgICB9XG4gICAgX2dldFN0YXRlKHRhcmdldCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWV0YTogdGhpcy5fY2xvbmVPYmplY3QodGFyZ2V0Lm1ldGEpLFxuICAgICAgICAgICAgaXRlbXM6IHRoaXMuX2dldEFycmF5Q29weSh0YXJnZXQuaXRlbXMpLFxuICAgICAgICAgICAgSFRNTF9TVFlMRTogdGhpcy5fZ2V0QXJyYXlDb3B5KHRhcmdldC5IVE1MX1NUWUxFKSxcbiAgICAgICAgICAgIEJPRFlfU1RZTEU6IHRoaXMuX2dldEFycmF5Q29weSh0YXJnZXQuQk9EWV9TVFlMRSksXG4gICAgICAgICAgICBDQUNIRV9LRVlTOiB0aGlzLl9nZXRBcnJheUNvcHkodGFyZ2V0LkNBQ0hFX0tFWVMpLFxuICAgICAgICAgICAgQ0FDSEVfVkFMVUVTOiB0aGlzLl9nZXRBcnJheUNvcHkodGFyZ2V0LkNBQ0hFX1ZBTFVFUyksXG4gICAgICAgICAgICBCT0RZX0FUVFJJQlVURVM6IHRoaXMuX2dldEFycmF5Q29weSh0YXJnZXQuQk9EWV9BVFRSSUJVVEVTKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRQYXJlbnRTdHlsZUJ5SW5kZXgoaW5kZXgsIHNvdXJjZSkge1xuICAgICAgICBpZiAodHlwZW9mIGluZGV4ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICByZXR1cm4gc291cmNlLkJPRFlfU1RZTEUgfHwgW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlLml0ZW1zW2ldICYmIHNvdXJjZS5pdGVtc1tpXS5pbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5pdGVtc1tpXS5zdHlsZSB8fCBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICB9XG59XG5pZiAodHlwZW9mIHdpbmRvdy5BVVRPU1RBUlQgPT09IFwiYm9vbGVhblwiICYmIHdpbmRvdy5BVVRPU1RBUlQgPT09IHRydWUpIHtcbiAgICBuZXcgRG9tU25hcHNob3QoKTtcbn1cbmVsc2Uge1xuICAgIHdpbmRvdy5zbmFwc2hvdGVyID0gbmV3IERvbVNuYXBzaG90KCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXX0=
