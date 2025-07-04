import {
  BloomEffect,
  BrightnessContrastEffect,
  ChromaticAberrationEffect,
  ColorAverageEffect,
  ColorDepthEffect,
  CopyPass,
  DepthDownsamplingPass,
  DepthEffect,
  DepthOfFieldEffect,
  DepthPickingPass,
  DotScreenEffect,
  Effect,
  EffectComposer,
  EffectPass,
  FXAAEffect,
  GlitchEffect,
  GlitchMode,
  GodRaysEffect,
  GridEffect,
  HueSaturationEffect,
  LUT3DEffect,
  MaskFunction,
  NoiseEffect,
  NormalPass,
  OutlineEffect,
  Pass,
  PixelationEffect,
  RenderPass,
  SMAAEffect,
  SSAOEffect,
  ScanlineEffect,
  SelectiveBloomEffect,
  SepiaEffect,
  ShockWaveEffect,
  TextureEffect,
  TiltShiftEffect,
  ToneMappingEffect,
  VignetteEffect
} from "./chunk-7BKM5LOX.js";
import {
  applyProps,
  createPortal,
  extend,
  require_jsx_runtime,
  useFrame,
  useLoader,
  useThree
} from "./chunk-PU7BOUZL.js";
import "./chunk-7RFQQ6AE.js";
import {
  require_react
} from "./chunk-2GK3IQSO.js";
import {
  Box3,
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  Color,
  DataTexture,
  DepthTexture,
  Euler,
  Float32BufferAttribute,
  FloatType,
  HalfFloatType,
  LinearFilter,
  Matrix3,
  Matrix4,
  Mesh,
  NearestFilter,
  NoColorSpace,
  NoToneMapping,
  OrthographicCamera,
  Quaternion,
  REVISION,
  RGBAFormat,
  RedFormat,
  RepeatWrapping,
  SRGBColorSpace,
  ShaderMaterial,
  Sphere,
  Spherical,
  Texture,
  TextureLoader,
  Triangle,
  Uniform,
  UnsignedIntType,
  Vector2,
  Vector3,
  Vector4,
  WebGLRenderTarget
} from "./chunk-P2WWKT7D.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/@react-three/postprocessing/dist/index.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());

// node_modules/@react-three/postprocessing/node_modules/maath/dist/objectSpread2-284232a6.esm.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}

// node_modules/@react-three/postprocessing/node_modules/maath/dist/isNativeReflectConstruct-5594d075.esm.js
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}

// node_modules/@react-three/postprocessing/node_modules/maath/dist/matrix-baa530bf.esm.js
function determinant2() {
  for (var _len = arguments.length, terms = new Array(_len), _key = 0; _key < _len; _key++) {
    terms[_key] = arguments[_key];
  }
  var a = terms[0], b = terms[1], c = terms[2], d = terms[3];
  return a * d - b * c;
}
function determinant3() {
  for (var _len2 = arguments.length, terms = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    terms[_key2] = arguments[_key2];
  }
  var a = terms[0], b = terms[1], c = terms[2], d = terms[3], e = terms[4], f = terms[5], g = terms[6], h = terms[7], i = terms[8];
  return a * e * i + b * f * g + c * d * h - c * e * g - b * d * i - a * f * h;
}
function determinant4() {
  for (var _len3 = arguments.length, terms = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    terms[_key3] = arguments[_key3];
  }
  terms[0];
  terms[1];
  terms[2];
  terms[3];
  terms[4];
  terms[5];
  terms[6];
  terms[7];
  terms[8];
  terms[9];
  terms[10];
  terms[11];
  terms[12];
  terms[13];
  terms[14];
}
function getMinor(matrix2, r, c) {
  var _matrixTranspose = matrix2.clone().transpose();
  var x = [];
  var l = _matrixTranspose.elements.length;
  var n = Math.sqrt(l);
  for (var i = 0; i < l; i++) {
    var element = _matrixTranspose.elements[i];
    var row = Math.floor(i / n);
    var col2 = i % n;
    if (row !== r - 1 && col2 !== c - 1) {
      x.push(element);
    }
  }
  return determinant3.apply(void 0, x);
}
function matrixSum3(m1, m2) {
  var sum = [];
  var m1Array = m1.toArray();
  var m2Array = m2.toArray();
  for (var i = 0; i < m1Array.length; i++) {
    sum[i] = m1Array[i] + m2Array[i];
  }
  return new Matrix3().fromArray(sum);
}
var matrix = Object.freeze({
  __proto__: null,
  determinant2,
  determinant3,
  determinant4,
  getMinor,
  matrixSum3
});

// node_modules/@react-three/postprocessing/node_modules/maath/dist/triangle-b62b9067.esm.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2) _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function isPointInTriangle(point, triangle2) {
  var _triangle$ = _slicedToArray(triangle2[0], 2), ax = _triangle$[0], ay = _triangle$[1];
  var _triangle$2 = _slicedToArray(triangle2[1], 2), bx = _triangle$2[0], by = _triangle$2[1];
  var _triangle$3 = _slicedToArray(triangle2[2], 2), cx = _triangle$3[0], cy = _triangle$3[1];
  var _point = _slicedToArray(point, 2), px = _point[0], py = _point[1];
  var matrix2 = new Matrix4();
  matrix2.set(ax, ay, ax * ax + ay * ay, 1, bx, by, bx * bx + by * by, 1, cx, cy, cx * cx + cy * cy, 1, px, py, px * px + py * py, 1);
  return matrix2.determinant() <= 0;
}
function triangleDeterminant(triangle2) {
  var _triangle$4 = _slicedToArray(triangle2[0], 2), x1 = _triangle$4[0], y1 = _triangle$4[1];
  var _triangle$5 = _slicedToArray(triangle2[1], 2), x2 = _triangle$5[0], y2 = _triangle$5[1];
  var _triangle$6 = _slicedToArray(triangle2[2], 2), x3 = _triangle$6[0], y3 = _triangle$6[1];
  return determinant3(x1, y1, 1, x2, y2, 1, x3, y3, 1);
}
function arePointsCollinear(points) {
  return triangleDeterminant(points) === 0;
}
function isTriangleClockwise(triangle2) {
  return triangleDeterminant(triangle2) < 0;
}
function getCircumcircle(triangle2) {
  var _triangle$7 = _slicedToArray(triangle2[0], 2), ax = _triangle$7[0], ay = _triangle$7[1];
  var _triangle$8 = _slicedToArray(triangle2[1], 2), bx = _triangle$8[0], by = _triangle$8[1];
  var _triangle$9 = _slicedToArray(triangle2[2], 2), cx = _triangle$9[0], cy = _triangle$9[1];
  if (arePointsCollinear(triangle2)) return null;
  var m = new Matrix4();
  m.set(1, 1, 1, 1, ax * ax + ay * ay, ax, ay, 1, bx * bx + by * by, bx, by, 1, cx * cx + cy * cy, cx, cy, 1);
  var m11 = getMinor(m, 1, 1);
  var m13 = getMinor(m, 1, 3);
  var m12 = getMinor(m, 1, 2);
  var m14 = getMinor(m, 1, 4);
  var x0 = 0.5 * (m12 / m11);
  var y0 = 0.5 * (m13 / m11);
  var r2 = x0 * x0 + y0 * y0 + m14 / m11;
  return {
    x: Math.abs(x0) === 0 ? 0 : x0,
    y: Math.abs(y0) === 0 ? 0 : -y0,
    r: Math.sqrt(r2)
  };
}
function isPointInCircumcircle(point, triangle2) {
  var _ref = Array.isArray(triangle2[0]) ? triangle2[0] : triangle2[0].toArray(), _ref2 = _slicedToArray(_ref, 2), ax = _ref2[0], ay = _ref2[1];
  var _ref3 = Array.isArray(triangle2[1]) ? triangle2[1] : triangle2[1].toArray(), _ref4 = _slicedToArray(_ref3, 2), bx = _ref4[0], by = _ref4[1];
  var _ref5 = Array.isArray(triangle2[2]) ? triangle2[2] : triangle2[2].toArray(), _ref6 = _slicedToArray(_ref5, 2), cx = _ref6[0], cy = _ref6[1];
  var _point2 = _slicedToArray(point, 2), px = _point2[0], py = _point2[1];
  if (arePointsCollinear(triangle2)) throw new Error("Collinear points don't form a triangle");
  var x1mpx = ax - px;
  var aympy = ay - py;
  var bxmpx = bx - px;
  var bympy = by - py;
  var cxmpx = cx - px;
  var cympy = cy - py;
  var d = determinant3(x1mpx, aympy, x1mpx * x1mpx + aympy * aympy, bxmpx, bympy, bxmpx * bxmpx + bympy * bympy, cxmpx, cympy, cxmpx * cxmpx + cympy * cympy);
  if (d === 0) {
    return true;
  }
  return !isTriangleClockwise(triangle2) ? d > 0 : d < 0;
}
var mv1 = new Vector2();
var mv2 = new Vector2();
function doThreePointsMakeARight(points) {
  var _points$map = points.map(function(p4) {
    if (Array.isArray(p4)) {
      return _construct(Vector2, _toConsumableArray(p4));
    }
    return p4;
  }), _points$map2 = _slicedToArray(_points$map, 3), p1 = _points$map2[0], p2 = _points$map2[1], p3 = _points$map2[2];
  if (arePointsCollinear(points)) return false;
  var p2p1 = mv1.subVectors(p2, p1);
  var p3p1 = mv2.subVectors(p3, p1);
  var cross2 = p3p1.cross(p2p1);
  return cross2 > 0;
}
var triangle = Object.freeze({
  __proto__: null,
  isPointInTriangle,
  triangleDeterminant,
  arePointsCollinear,
  isTriangleClockwise,
  getCircumcircle,
  isPointInCircumcircle,
  doThreePointsMakeARight
});

// node_modules/@react-three/postprocessing/node_modules/maath/dist/misc-7d870b3c.esm.js
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function repeat(t, length3) {
  return clamp(t - Math.floor(t / length3) * length3, 0, length3);
}
function deltaAngle(current, target) {
  var delta = repeat(target - current, Math.PI * 2);
  if (delta > Math.PI) delta -= Math.PI * 2;
  return delta;
}
function degToRad(degrees) {
  return degrees / 180 * Math.PI;
}
function radToDeg(radians) {
  return radians * 180 / Math.PI;
}
function fibonacciOnSphere(buffer2, _ref) {
  var _ref$radius = _ref.radius, radius = _ref$radius === void 0 ? 1 : _ref$radius;
  var samples = buffer2.length / 3;
  var offset = 2 / samples;
  var increment = Math.PI * (3 - 2.2360679775);
  for (var i = 0; i < buffer2.length; i += 3) {
    var y = i * offset - 1 + offset / 2;
    var distance3 = Math.sqrt(1 - Math.pow(y, 2));
    var phi = i % samples * increment;
    var x = Math.cos(phi) * distance3;
    var z2 = Math.sin(phi) * distance3;
    buffer2[i] = x * radius;
    buffer2[i + 1] = y * radius;
    buffer2[i + 2] = z2 * radius;
  }
}
function vectorEquals(a, b) {
  var eps = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Number.EPSILON;
  return Math.abs(a.x - b.x) < eps && Math.abs(a.y - b.y) < eps && Math.abs(a.z - b.z) < eps;
}
function lexicographic(a, b) {
  if (a.x === b.x) {
    if (typeof a.z !== "undefined") {
      if (a.y === b.y) {
        return a.z - b.z;
      }
    }
    return a.y - b.y;
  }
  return a.x - b.x;
}
function convexHull(_points) {
  var points = _points.sort(lexicographic);
  var lUpper = [points[0], points[1]];
  for (var i = 2; i < points.length; i++) {
    lUpper.push(points[i]);
    while (lUpper.length > 2 && doThreePointsMakeARight(_toConsumableArray(lUpper.slice(-3)))) {
      lUpper.splice(lUpper.length - 2, 1);
    }
  }
  var lLower = [points[points.length - 1], points[points.length - 2]];
  for (var _i = points.length - 3; _i >= 0; _i--) {
    lLower.push(points[_i]);
    while (lLower.length > 2 && doThreePointsMakeARight(_toConsumableArray(lLower.slice(-3)))) {
      lLower.splice(lLower.length - 2, 1);
    }
  }
  lLower.splice(0, 1);
  lLower.splice(lLower.length - 1, 1);
  var c = [].concat(lUpper, lLower);
  return c;
}
function remap(x, _ref2, _ref3) {
  var _ref4 = _slicedToArray(_ref2, 2), low1 = _ref4[0], high1 = _ref4[1];
  var _ref5 = _slicedToArray(_ref3, 2), low2 = _ref5[0], high2 = _ref5[1];
  return low2 + (x - low1) * (high2 - low2) / (high1 - low1);
}
function fade(t) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}
function lerp(v0, v1, t) {
  return v0 * (1 - t) + v1 * t;
}
function inverseLerp(v0, v1, t) {
  return (t - v0) / (v1 - v0);
}
function normalize(x, y, z2) {
  var m = Math.sqrt(x * x + y * y + z2 * z2);
  return [x / m, y / m, z2 / m];
}
function pointOnCubeToPointOnSphere(x, y, z2) {
  var x2 = x * x;
  var y2 = y * y;
  var z22 = z2 * z2;
  var nx = x * Math.sqrt(1 - (y2 + z22) / 2 + y2 * z22 / 3);
  var ny = y * Math.sqrt(1 - (z22 + x2) / 2 + z22 * x2 / 3);
  var nz = z2 * Math.sqrt(1 - (x2 + y2) / 2 + x2 * y2 / 3);
  return [nx, ny, nz];
}
function rotateVectorOnVector(a, b) {
  var v = new Vector3().crossVectors(a, b);
  var c = a.dot(b);
  var i = new Matrix3().identity();
  var vx = new Matrix3().set(0, -v.z, v.y, v.z, 0, -v.x, -v.y, v.x, 0);
  var vxsquared = new Matrix3().multiplyMatrices(vx, vx).multiplyScalar(1 / (1 + c));
  var _final = matrixSum3(matrixSum3(i, vx), vxsquared);
  return _final;
}
function pointToCoordinate(x, y, z2) {
  var lat = Math.asin(y);
  var lon = Math.atan2(x, -z2);
  return [lat, lon];
}
function coordinateToPoint(lat, lon) {
  var y = Math.sin(lat);
  var r = Math.cos(lat);
  var x = Math.sin(lon) * r;
  var z2 = -Math.cos(lon) * r;
  return [x, y, z2];
}
function planeSegmentIntersection(plane, segment) {
  var _segment = _slicedToArray(segment, 2), a = _segment[0], b = _segment[1];
  var matrix2 = rotateVectorOnVector(plane.normal, new Vector3(0, 1, 0));
  var t = inverseLerp(a.clone().applyMatrix3(matrix2).y, b.clone().applyMatrix3(matrix2).y, 0);
  return new Vector3().lerpVectors(a, b, t);
}
function pointToPlaneDistance(p2, plane) {
  var d = plane.normal.dot(p2);
  return d;
}
function getIndexFrom3D(coords, sides) {
  var _coords = _slicedToArray(coords, 3), ix = _coords[0], iy = _coords[1], iz = _coords[2];
  var _sides = _slicedToArray(sides, 2), rx = _sides[0], ry = _sides[1];
  return iz * rx * ry + iy * rx + ix;
}
function get3DFromIndex(index2, size) {
  var _size = _slicedToArray(size, 2), rx = _size[0], ry = _size[1];
  var a = rx * ry;
  var z2 = index2 / a;
  var b = index2 - a * z2;
  var y = b / rx;
  var x = b % rx;
  return [x, y, z2];
}
function getIndexFrom2D(coords, size) {
  return coords[0] + size[0] * coords[1];
}
function get2DFromIndex(index2, columns) {
  var x = index2 % columns;
  var y = Math.floor(index2 / columns);
  return [x, y];
}
var misc = Object.freeze({
  __proto__: null,
  clamp,
  deltaAngle,
  degToRad,
  radToDeg,
  fibonacciOnSphere,
  vectorEquals,
  lexicographic,
  convexHull,
  remap,
  fade,
  lerp,
  inverseLerp,
  normalize,
  pointOnCubeToPointOnSphere,
  rotateVectorOnVector,
  pointToCoordinate,
  coordinateToPoint,
  planeSegmentIntersection,
  pointToPlaneDistance,
  getIndexFrom3D,
  get3DFromIndex,
  getIndexFrom2D,
  get2DFromIndex
});

// node_modules/@react-three/postprocessing/node_modules/maath/dist/vector2-d2bf51f1.esm.js
function zero() {
  return [0, 0];
}
function one() {
  return [1, 1];
}
function add(a, b) {
  return [a[0] + b[0], a[1] + b[1]];
}
function addValue(a, n) {
  return [a[0] + n, a[1] + n];
}
function sub(a, b) {
  return [a[0] - b[0], a[1] - b[1]];
}
function subValue(a, n) {
  return [a[0] - n, a[1] - n];
}
function scale(a, n) {
  return [a[0] * n, a[1] * n];
}
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
function lengthSqr(a) {
  return a[0] * a[0] + a[1] * a[1];
}
function length(a) {
  return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
}
function distance(a, b) {
  return Math.sqrt((a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]));
}
var vector2 = Object.freeze({
  __proto__: null,
  zero,
  one,
  add,
  addValue,
  sub,
  subValue,
  scale,
  dot,
  lengthSqr,
  length,
  distance
});

// node_modules/@react-three/postprocessing/node_modules/maath/dist/vector3-0a088b7f.esm.js
function zero2() {
  return [0, 0, 0];
}
function one2() {
  return [1, 1, 1];
}
function add2(a, b) {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}
function addValue2(a, n) {
  return [a[0] + n, a[1] + n, a[2] + n];
}
function sub2(a, b) {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}
function subValue2(a, n) {
  return [a[0] - n, a[1] - n, a[2] - n];
}
function scale2(a, n) {
  return [a[0] * n, a[1] * n, a[2] * n];
}
function dot2(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cross(a, b) {
  var x = a[1] * b[2] - a[2] * b[1];
  var y = a[2] * b[0] - a[0] * b[2];
  var z2 = a[0] * b[1] - a[1] * b[0];
  return [x, y, z2];
}
function lengthSqr2(a) {
  return a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
}
function length2(a) {
  return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
}
function distance2(a, b) {
  return Math.sqrt((a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]) + (a[2] - b[2]) * (a[2] - b[2]));
}
var vector3 = Object.freeze({
  __proto__: null,
  zero: zero2,
  one: one2,
  add: add2,
  addValue: addValue2,
  sub: sub2,
  subValue: subValue2,
  scale: scale2,
  dot: dot2,
  cross,
  lengthSqr: lengthSqr2,
  length: length2,
  distance: distance2
});

// node_modules/@react-three/postprocessing/node_modules/maath/dist/buffer-d2a4726c.esm.js
function swizzle(buffer2) {
  var stride = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
  var swizzle2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "xyz";
  var o = {
    x: 0,
    y: 0,
    z: 0
  };
  for (var _i = 0; _i < buffer2.length; _i += stride) {
    o.x = buffer2[_i];
    o.y = buffer2[_i + 1];
    o.z = buffer2[_i + 2];
    var _swizzle$split = swizzle2.split(""), _swizzle$split2 = _slicedToArray(_swizzle$split, 3), x = _swizzle$split2[0], y = _swizzle$split2[1], z2 = _swizzle$split2[2];
    buffer2[_i] = o[x];
    buffer2[_i + 1] = o[y];
    if (stride === 3) {
      buffer2[_i + 2] = o[z2];
    }
  }
  return buffer2;
}
function addAxis(buffer2, size) {
  var valueGenerator = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
    return Math.random();
  };
  var newSize = size + 1;
  var newBuffer = new Float32Array(buffer2.length / size * newSize);
  for (var _i2 = 0; _i2 < buffer2.length; _i2 += size) {
    var _j = _i2 / size * newSize;
    newBuffer[_j] = buffer2[_i2];
    newBuffer[_j + 1] = buffer2[_i2 + 1];
    if (size === 2) {
      newBuffer[_j + 2] = valueGenerator(_j);
    }
    if (size === 3) {
      newBuffer[_j + 2] = buffer2[_i2 + 2];
      newBuffer[_j + 3] = valueGenerator(_j);
    }
  }
  return newBuffer;
}
function lerp2(bufferA, bufferB, _final, t) {
  for (var _i3 = 0; _i3 < bufferA.length; _i3++) {
    _final[_i3] = lerp(bufferA[_i3], bufferB[_i3], t);
  }
}
function translate(buffer2, translationVector) {
  var stride = translationVector.length;
  for (var _i4 = 0; _i4 < buffer2.length; _i4 += stride) {
    buffer2[_i4] += translationVector[0];
    buffer2[_i4 + 1] += translationVector[1];
    buffer2[_i4 + 2] += translationVector[2];
  }
  return buffer2;
}
function rotate(buffer2, rotation) {
  var defaultRotation = {
    center: [0, 0, 0],
    q: new Quaternion().identity()
  };
  var v = new Vector3();
  var _defaultRotation$rota = _objectSpread2(_objectSpread2({}, defaultRotation), rotation), q = _defaultRotation$rota.q, center2 = _defaultRotation$rota.center;
  for (var _i5 = 0; _i5 < buffer2.length; _i5 += 3) {
    v.set(buffer2[_i5] - center2[0], buffer2[_i5 + 1] - center2[1], buffer2[_i5 + 2] - center2[2]);
    v.applyQuaternion(q);
    buffer2[_i5] = v.x + center2[0];
    buffer2[_i5 + 1] = v.y + center2[1];
    buffer2[_i5 + 2] = v.z + center2[1];
  }
  return buffer2;
}
function map(buffer2, stride, callback) {
  for (var _i6 = 0, _j2 = 0; _i6 < buffer2.length; _i6 += stride, _j2++) {
    if (stride === 3) {
      var res = callback([buffer2[_i6], buffer2[_i6 + 1], buffer2[_i6 + 2]], _j2);
      buffer2.set(res, _i6);
    } else {
      buffer2.set(callback([buffer2[_i6], buffer2[_i6 + 1]], _j2), _i6);
    }
  }
  return buffer2;
}
function reduce(b, stride, callback, acc) {
  for (var _i7 = 0, _j3 = 0; _i7 < b.length; _i7 += stride, _j3++) {
    if (stride === 2) {
      acc = callback(acc, [b[_i7], b[_i7 + 1]], _j3);
    } else {
      acc = callback(acc, [b[_i7], b[_i7 + 1], b[_i7 + 2]], _j3);
    }
  }
  return acc;
}
function expand(b, stride, opts) {
  var defaultExpandOptions = {
    center: [0, 0, 0]
  };
  var _defaultExpandOptions = _objectSpread2(_objectSpread2({}, defaultExpandOptions), opts), center2 = _defaultExpandOptions.center, distance3 = _defaultExpandOptions.distance;
  for (var _i8 = 0; _i8 < b.length; _i8 += stride) {
    b[_i8] = (b[_i8] - center2[0]) * (1 + distance3) + center2[0];
    b[_i8 + 1] = (b[_i8 + 1] - center2[1]) * (1 + distance3) + center2[1];
    if (stride === 3) {
      b[_i8 + 2] = (b[_i8 + 2] - center2[1]) * (1 + distance3) + center2[2];
    }
  }
  return b;
}
function center(myBuffer, stride) {
  return reduce(myBuffer, stride, function(acc, point) {
    if (stride === 3) {
      acc = add2(acc, point);
    } else {
      acc = add(acc, point);
    }
    return acc;
  }, zero());
}
function sort(myBuffer, stride, callback) {
  var indices = Int16Array.from({
    length: myBuffer.length / stride
  }, function(_, i) {
    return i;
  });
  indices.sort(function(a, b) {
    var pa = myBuffer.slice(a * stride, a * stride + stride);
    var pb = myBuffer.slice(b * stride, b * stride + stride);
    return callback(pa, pb);
  });
  var prevBuffer = myBuffer.slice(0);
  for (var _i9 = 0; _i9 < indices.length; _i9++) {
    var _j4 = indices[_i9];
    myBuffer.set(prevBuffer.slice(_j4 * stride, _j4 * stride + stride), _i9 * 3);
  }
  return myBuffer;
}
var buffer = Object.freeze({
  __proto__: null,
  swizzle,
  addAxis,
  lerp: lerp2,
  translate,
  rotate,
  map,
  reduce,
  expand,
  center,
  sort
});

// node_modules/@react-three/postprocessing/node_modules/maath/dist/classCallCheck-9098b006.esm.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// node_modules/@react-three/postprocessing/node_modules/maath/dist/index-43782085.esm.js
var Grad = function Grad2(x, y, z2) {
  var _this = this;
  _classCallCheck(this, Grad2);
  _defineProperty(this, "dot2", function(x2, y2) {
    return _this.x * x2 + _this.y * y2;
  });
  _defineProperty(this, "dot3", function(x2, y2, z3) {
    return _this.x * x2 + _this.y * y2 + _this.z * z3;
  });
  this.x = x;
  this.y = y;
  this.z = z2;
};
var grad3 = [new Grad(1, 1, 0), new Grad(-1, 1, 0), new Grad(1, -1, 0), new Grad(-1, -1, 0), new Grad(1, 0, 1), new Grad(-1, 0, 1), new Grad(1, 0, -1), new Grad(-1, 0, -1), new Grad(0, 1, 1), new Grad(0, -1, 1), new Grad(0, 1, -1), new Grad(0, -1, -1)];
var p = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];
var perm = new Array(512);
var gradP = new Array(512);
var seed = function seed2(_seed) {
  if (_seed > 0 && _seed < 1) {
    _seed *= 65536;
  }
  _seed = Math.floor(_seed);
  if (_seed < 256) {
    _seed |= _seed << 8;
  }
  for (var i = 0; i < 256; i++) {
    var v;
    if (i & 1) {
      v = p[i] ^ _seed & 255;
    } else {
      v = p[i] ^ _seed >> 8 & 255;
    }
    perm[i] = perm[i + 256] = v;
    gradP[i] = gradP[i + 256] = grad3[v % 12];
  }
};
seed(0);
var F2 = 0.5 * (Math.sqrt(3) - 1);
var G2 = (3 - Math.sqrt(3)) / 6;
var F3 = 1 / 3;
var G3 = 1 / 6;
var simplex2 = function simplex22(xin, yin) {
  var n0, n1, n2;
  var s = (xin + yin) * F2;
  var i = Math.floor(xin + s);
  var j2 = Math.floor(yin + s);
  var t = (i + j2) * G2;
  var x0 = xin - i + t;
  var y0 = yin - j2 + t;
  var i1, j1;
  if (x0 > y0) {
    i1 = 1;
    j1 = 0;
  } else {
    i1 = 0;
    j1 = 1;
  }
  var x1 = x0 - i1 + G2;
  var y1 = y0 - j1 + G2;
  var x2 = x0 - 1 + 2 * G2;
  var y2 = y0 - 1 + 2 * G2;
  i &= 255;
  j2 &= 255;
  var gi0 = gradP[i + perm[j2]];
  var gi1 = gradP[i + i1 + perm[j2 + j1]];
  var gi2 = gradP[i + 1 + perm[j2 + 1]];
  var t0 = 0.5 - x0 * x0 - y0 * y0;
  if (t0 < 0) {
    n0 = 0;
  } else {
    t0 *= t0;
    n0 = t0 * t0 * gi0.dot2(x0, y0);
  }
  var t1 = 0.5 - x1 * x1 - y1 * y1;
  if (t1 < 0) {
    n1 = 0;
  } else {
    t1 *= t1;
    n1 = t1 * t1 * gi1.dot2(x1, y1);
  }
  var t2 = 0.5 - x2 * x2 - y2 * y2;
  if (t2 < 0) {
    n2 = 0;
  } else {
    t2 *= t2;
    n2 = t2 * t2 * gi2.dot2(x2, y2);
  }
  return 70 * (n0 + n1 + n2);
};
var simplex3 = function simplex32(xin, yin, zin) {
  var n0, n1, n2, n3;
  var s = (xin + yin + zin) * F3;
  var i = Math.floor(xin + s);
  var j2 = Math.floor(yin + s);
  var k2 = Math.floor(zin + s);
  var t = (i + j2 + k2) * G3;
  var x0 = xin - i + t;
  var y0 = yin - j2 + t;
  var z0 = zin - k2 + t;
  var i1, j1, k1;
  var i2, j22, k22;
  if (x0 >= y0) {
    if (y0 >= z0) {
      i1 = 1;
      j1 = 0;
      k1 = 0;
      i2 = 1;
      j22 = 1;
      k22 = 0;
    } else if (x0 >= z0) {
      i1 = 1;
      j1 = 0;
      k1 = 0;
      i2 = 1;
      j22 = 0;
      k22 = 1;
    } else {
      i1 = 0;
      j1 = 0;
      k1 = 1;
      i2 = 1;
      j22 = 0;
      k22 = 1;
    }
  } else {
    if (y0 < z0) {
      i1 = 0;
      j1 = 0;
      k1 = 1;
      i2 = 0;
      j22 = 1;
      k22 = 1;
    } else if (x0 < z0) {
      i1 = 0;
      j1 = 1;
      k1 = 0;
      i2 = 0;
      j22 = 1;
      k22 = 1;
    } else {
      i1 = 0;
      j1 = 1;
      k1 = 0;
      i2 = 1;
      j22 = 1;
      k22 = 0;
    }
  }
  var x1 = x0 - i1 + G3;
  var y1 = y0 - j1 + G3;
  var z1 = z0 - k1 + G3;
  var x2 = x0 - i2 + 2 * G3;
  var y2 = y0 - j22 + 2 * G3;
  var z2 = z0 - k22 + 2 * G3;
  var x3 = x0 - 1 + 3 * G3;
  var y3 = y0 - 1 + 3 * G3;
  var z3 = z0 - 1 + 3 * G3;
  i &= 255;
  j2 &= 255;
  k2 &= 255;
  var gi0 = gradP[i + perm[j2 + perm[k2]]];
  var gi1 = gradP[i + i1 + perm[j2 + j1 + perm[k2 + k1]]];
  var gi2 = gradP[i + i2 + perm[j2 + j22 + perm[k2 + k22]]];
  var gi3 = gradP[i + 1 + perm[j2 + 1 + perm[k2 + 1]]];
  var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
  if (t0 < 0) {
    n0 = 0;
  } else {
    t0 *= t0;
    n0 = t0 * t0 * gi0.dot3(x0, y0, z0);
  }
  var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
  if (t1 < 0) {
    n1 = 0;
  } else {
    t1 *= t1;
    n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
  }
  var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
  if (t2 < 0) {
    n2 = 0;
  } else {
    t2 *= t2;
    n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
  }
  var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
  if (t3 < 0) {
    n3 = 0;
  } else {
    t3 *= t3;
    n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
  }
  return 32 * (n0 + n1 + n2 + n3);
};
var perlin2 = function perlin22(x, y) {
  var X = Math.floor(x), Y = Math.floor(y);
  x = x - X;
  y = y - Y;
  X = X & 255;
  Y = Y & 255;
  var n00 = gradP[X + perm[Y]].dot2(x, y);
  var n01 = gradP[X + perm[Y + 1]].dot2(x, y - 1);
  var n10 = gradP[X + 1 + perm[Y]].dot2(x - 1, y);
  var n11 = gradP[X + 1 + perm[Y + 1]].dot2(x - 1, y - 1);
  var u = fade(x);
  return lerp(lerp(n00, n10, u), lerp(n01, n11, u), fade(y));
};
var perlin3 = function perlin32(x, y, z2) {
  var X = Math.floor(x), Y = Math.floor(y), Z2 = Math.floor(z2);
  x = x - X;
  y = y - Y;
  z2 = z2 - Z2;
  X = X & 255;
  Y = Y & 255;
  Z2 = Z2 & 255;
  var n000 = gradP[X + perm[Y + perm[Z2]]].dot3(x, y, z2);
  var n001 = gradP[X + perm[Y + perm[Z2 + 1]]].dot3(x, y, z2 - 1);
  var n010 = gradP[X + perm[Y + 1 + perm[Z2]]].dot3(x, y - 1, z2);
  var n011 = gradP[X + perm[Y + 1 + perm[Z2 + 1]]].dot3(x, y - 1, z2 - 1);
  var n100 = gradP[X + 1 + perm[Y + perm[Z2]]].dot3(x - 1, y, z2);
  var n101 = gradP[X + 1 + perm[Y + perm[Z2 + 1]]].dot3(x - 1, y, z2 - 1);
  var n110 = gradP[X + 1 + perm[Y + 1 + perm[Z2]]].dot3(x - 1, y - 1, z2);
  var n111 = gradP[X + 1 + perm[Y + 1 + perm[Z2 + 1]]].dot3(x - 1, y - 1, z2 - 1);
  var u = fade(x);
  var v = fade(y);
  var w2 = fade(z2);
  return lerp(lerp(lerp(n000, n100, u), lerp(n001, n101, u), w2), lerp(lerp(n010, n110, u), lerp(n011, n111, u), w2), v);
};
var noise = Object.freeze({
  __proto__: null,
  seed,
  simplex2,
  simplex3,
  perlin2,
  perlin3
});
var TAU = Math.PI * 2;
function normalizeSeed(seed3) {
  if (typeof seed3 === "number") {
    seed3 = Math.abs(seed3);
  } else if (typeof seed3 === "string") {
    var string = seed3;
    seed3 = 0;
    for (var i = 0; i < string.length; i++) {
      seed3 = (seed3 + (i + 1) * (string.charCodeAt(i) % 96)) % 2147483647;
    }
  }
  if (seed3 === 0) {
    seed3 = 311;
  }
  return seed3;
}
function lcgRandom(seed3) {
  var state = normalizeSeed(seed3);
  return function() {
    var result = state * 48271 % 2147483647;
    state = result;
    return result / 2147483647;
  };
}
var Generator = function Generator2(_seed) {
  var _this = this;
  _classCallCheck(this, Generator2);
  _defineProperty(this, "seed", 0);
  _defineProperty(this, "init", function(seed3) {
    _this.seed = seed3;
    _this.value = lcgRandom(seed3);
  });
  _defineProperty(this, "value", lcgRandom(this.seed));
  this.init(_seed);
};
var defaultGen = new Generator(Math.random());
var defaultSphere = {
  radius: 1,
  center: [0, 0, 0]
};
function onSphere(buffer2, sphere) {
  var rng = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultGen;
  var _defaultSphere$sphere = _objectSpread2(_objectSpread2({}, defaultSphere), sphere), radius = _defaultSphere$sphere.radius, center2 = _defaultSphere$sphere.center;
  for (var i = 0; i < buffer2.length; i += 3) {
    var u = rng.value();
    var v = rng.value();
    var theta = Math.acos(2 * v - 1);
    var phi = TAU * u;
    buffer2[i] = Math.sin(theta) * Math.cos(phi) * radius + center2[0];
    buffer2[i + 1] = Math.sin(theta) * Math.sin(phi) * radius + center2[1];
    buffer2[i + 2] = Math.cos(theta) * radius + center2[2];
  }
  return buffer2;
}
function inSphere(buffer2, sphere) {
  var rng = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultGen;
  var _defaultSphere$sphere2 = _objectSpread2(_objectSpread2({}, defaultSphere), sphere), radius = _defaultSphere$sphere2.radius, center2 = _defaultSphere$sphere2.center;
  for (var i = 0; i < buffer2.length; i += 3) {
    var u = Math.pow(rng.value(), 1 / 3);
    var x = rng.value() * 2 - 1;
    var y = rng.value() * 2 - 1;
    var z2 = rng.value() * 2 - 1;
    var mag = Math.sqrt(x * x + y * y + z2 * z2);
    x = u * x / mag;
    y = u * y / mag;
    z2 = u * z2 / mag;
    buffer2[i] = x * radius + center2[0];
    buffer2[i + 1] = y * radius + center2[1];
    buffer2[i + 2] = z2 * radius + center2[2];
  }
  return buffer2;
}
var defaultCircle = {
  radius: 1,
  center: [0, 0]
};
function inCircle(buffer2, circle) {
  var rng = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultGen;
  var _defaultCircle$circle = _objectSpread2(_objectSpread2({}, defaultCircle), circle), radius = _defaultCircle$circle.radius, center2 = _defaultCircle$circle.center;
  for (var i = 0; i < buffer2.length; i += 2) {
    var r = radius * Math.sqrt(rng.value());
    var theta = rng.value() * TAU;
    buffer2[i] = Math.sin(theta) * r + center2[0];
    buffer2[i + 1] = Math.cos(theta) * r + center2[1];
  }
  return buffer2;
}
function onCircle(buffer2, circle) {
  var rng = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultGen;
  var _defaultCircle$circle2 = _objectSpread2(_objectSpread2({}, defaultCircle), circle), radius = _defaultCircle$circle2.radius, center2 = _defaultCircle$circle2.center;
  for (var i = 0; i < buffer2.length; i += 2) {
    var theta = rng.value() * TAU;
    buffer2[i] = Math.sin(theta) * radius + center2[0];
    buffer2[i + 1] = Math.cos(theta) * radius + center2[1];
  }
  return buffer2;
}
var defaultRect = {
  sides: 1,
  center: [0, 0]
};
function inRect(buffer2, rect) {
  var rng = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultGen;
  var _defaultRect$rect = _objectSpread2(_objectSpread2({}, defaultRect), rect), sides = _defaultRect$rect.sides, center2 = _defaultRect$rect.center;
  var sideX = typeof sides === "number" ? sides : sides[0];
  var sideY = typeof sides === "number" ? sides : sides[1];
  for (var i = 0; i < buffer2.length; i += 2) {
    buffer2[i] = (rng.value() - 0.5) * sideX + center2[0];
    buffer2[i + 1] = (rng.value() - 0.5) * sideY + center2[1];
  }
  return buffer2;
}
function onRect(buffer2, rect) {
  return buffer2;
}
function inBox(buffer2, box) {
  var rng = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultGen;
  var _defaultBox$box = _objectSpread2(_objectSpread2({}, defaultBox), box), sides = _defaultBox$box.sides, center2 = _defaultBox$box.center;
  var sideX = typeof sides === "number" ? sides : sides[0];
  var sideY = typeof sides === "number" ? sides : sides[1];
  var sideZ = typeof sides === "number" ? sides : sides[2];
  for (var i = 0; i < buffer2.length; i += 3) {
    buffer2[i] = (rng.value() - 0.5) * sideX + center2[0];
    buffer2[i + 1] = (rng.value() - 0.5) * sideY + center2[1];
    buffer2[i + 2] = (rng.value() - 0.5) * sideZ + center2[2];
  }
  return buffer2;
}
var defaultBox = {
  sides: 1,
  center: [0, 0, 0]
};
function onBox(buffer2, box) {
  var rng = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultGen;
  var _defaultBox$box2 = _objectSpread2(_objectSpread2({}, defaultBox), box), sides = _defaultBox$box2.sides, center2 = _defaultBox$box2.center;
  var sideX = typeof sides === "number" ? sides : sides[0];
  var sideY = typeof sides === "number" ? sides : sides[1];
  var sideZ = typeof sides === "number" ? sides : sides[2];
  for (var i = 0; i < buffer2.length; i += 3) {
    buffer2[i] = (rng.value() - 0.5) * sideX + center2[0];
    buffer2[i + 1] = (rng.value() - 0.5) * sideY + center2[1];
    buffer2[i + 2] = (rng.value() - 0.5) * sideZ + center2[2];
  }
  return buffer2;
}
var index = Object.freeze({
  __proto__: null,
  Generator,
  onSphere,
  inSphere,
  inCircle,
  onCircle,
  inRect,
  onRect,
  inBox,
  onBox,
  noise
});

// node_modules/@react-three/postprocessing/node_modules/maath/dist/easing-3be59c6d.esm.js
var rsqw = function rsqw2(t) {
  var delta = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.01;
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  var f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1 / (2 * Math.PI);
  return a / Math.atan(1 / delta) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);
};
var exp = function exp2(t) {
  return 1 / (1 + t + 0.48 * t * t + 0.235 * t * t * t);
};
function damp(current, prop, target) {
  var smoothTime = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.25;
  var delta = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0.01;
  var maxSpeed = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : Infinity;
  var easing2 = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : exp;
  var eps = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : 1e-3;
  var vel = "velocity_" + prop;
  if (current.__damp === void 0) current.__damp = {};
  if (current.__damp[vel] === void 0) current.__damp[vel] = 0;
  if (Math.abs(current[prop] - target) <= eps) {
    current[prop] = target;
    return false;
  }
  smoothTime = Math.max(1e-4, smoothTime);
  var omega = 2 / smoothTime;
  var t = easing2(omega * delta);
  var change = current[prop] - target;
  var originalTo = target;
  var maxChange = maxSpeed * smoothTime;
  change = Math.min(Math.max(change, -maxChange), maxChange);
  target = current[prop] - change;
  var temp = (current.__damp[vel] + omega * change) * delta;
  current.__damp[vel] = (current.__damp[vel] - omega * temp) * t;
  var output = target + (change + temp) * t;
  if (originalTo - current[prop] > 0 === output > originalTo) {
    output = originalTo;
    current.__damp[vel] = (output - originalTo) / delta;
  }
  current[prop] = output;
  return true;
}
function dampAngle(current, prop, target, smoothTime, delta, maxSpeed, easing2, eps) {
  return damp(current, prop, current[prop] + deltaAngle(current[prop], target), smoothTime, delta, maxSpeed, easing2, eps);
}
var v2d = new Vector2();
var a2;
var b2;
function damp2(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  if (typeof target === "number") v2d.setScalar(target);
  else if (Array.isArray(target)) v2d.set(target[0], target[1]);
  else v2d.copy(target);
  a2 = damp(current, "x", v2d.x, smoothTime, delta, maxSpeed, easing2, eps);
  b2 = damp(current, "y", v2d.y, smoothTime, delta, maxSpeed, easing2, eps);
  return a2 || b2;
}
var v3d = new Vector3();
var a3;
var b3;
var c3;
function damp3(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  if (typeof target === "number") v3d.setScalar(target);
  else if (Array.isArray(target)) v3d.set(target[0], target[1], target[2]);
  else v3d.copy(target);
  a3 = damp(current, "x", v3d.x, smoothTime, delta, maxSpeed, easing2, eps);
  b3 = damp(current, "y", v3d.y, smoothTime, delta, maxSpeed, easing2, eps);
  c3 = damp(current, "z", v3d.z, smoothTime, delta, maxSpeed, easing2, eps);
  return a3 || b3 || c3;
}
var v4d = new Vector4();
var a4;
var b4;
var c4;
var d4;
function damp4(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  if (typeof target === "number") v4d.setScalar(target);
  else if (Array.isArray(target)) v4d.set(target[0], target[1], target[2], target[3]);
  else v4d.copy(target);
  a4 = damp(current, "x", v4d.x, smoothTime, delta, maxSpeed, easing2, eps);
  b4 = damp(current, "y", v4d.y, smoothTime, delta, maxSpeed, easing2, eps);
  c4 = damp(current, "z", v4d.z, smoothTime, delta, maxSpeed, easing2, eps);
  d4 = damp(current, "w", v4d.w, smoothTime, delta, maxSpeed, easing2, eps);
  return a4 || b4 || c4 || d4;
}
var rot = new Euler();
var aE;
var bE;
var cE;
function dampE(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  if (Array.isArray(target)) rot.set(target[0], target[1], target[2], target[3]);
  else rot.copy(target);
  aE = dampAngle(current, "x", rot.x, smoothTime, delta, maxSpeed, easing2, eps);
  bE = dampAngle(current, "y", rot.y, smoothTime, delta, maxSpeed, easing2, eps);
  cE = dampAngle(current, "z", rot.z, smoothTime, delta, maxSpeed, easing2, eps);
  return aE || bE || cE;
}
var col = new Color();
var aC;
var bC;
var cC;
function dampC(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  if (target instanceof Color) col.copy(target);
  else if (Array.isArray(target)) col.setRGB(target[0], target[1], target[2]);
  else col.set(target);
  aC = damp(current, "r", col.r, smoothTime, delta, maxSpeed, easing2, eps);
  bC = damp(current, "g", col.g, smoothTime, delta, maxSpeed, easing2, eps);
  cC = damp(current, "b", col.b, smoothTime, delta, maxSpeed, easing2, eps);
  return aC || bC || cC;
}
var qt = new Quaternion();
var v4result = new Vector4();
var v4velocity = new Vector4();
var v4error = new Vector4();
var aQ;
var bQ;
var cQ;
var dQ;
function dampQ(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  var cur = current;
  if (Array.isArray(target)) qt.set(target[0], target[1], target[2], target[3]);
  else qt.copy(target);
  var multi = current.dot(qt) > 0 ? 1 : -1;
  qt.x *= multi;
  qt.y *= multi;
  qt.z *= multi;
  qt.w *= multi;
  aQ = damp(current, "x", qt.x, smoothTime, delta, maxSpeed, easing2, eps);
  bQ = damp(current, "y", qt.y, smoothTime, delta, maxSpeed, easing2, eps);
  cQ = damp(current, "z", qt.z, smoothTime, delta, maxSpeed, easing2, eps);
  dQ = damp(current, "w", qt.w, smoothTime, delta, maxSpeed, easing2, eps);
  v4result.set(current.x, current.y, current.z, current.w).normalize();
  v4velocity.set(cur.__damp.velocity_x, cur.__damp.velocity_y, cur.__damp.velocity_z, cur.__damp.velocity_w);
  v4error.copy(v4result).multiplyScalar(v4velocity.dot(v4result) / v4result.dot(v4result));
  cur.__damp.velocity_x -= v4error.x;
  cur.__damp.velocity_y -= v4error.y;
  cur.__damp.velocity_z -= v4error.z;
  cur.__damp.velocity_w -= v4error.w;
  current.set(v4result.x, v4result.y, v4result.z, v4result.w);
  return aQ || bQ || cQ || dQ;
}
var spherical = new Spherical();
var aS;
var bS;
var cS;
function dampS(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  if (Array.isArray(target)) spherical.set(target[0], target[1], target[2]);
  else spherical.copy(target);
  aS = damp(current, "radius", spherical.radius, smoothTime, delta, maxSpeed, easing2, eps);
  bS = dampAngle(current, "phi", spherical.phi, smoothTime, delta, maxSpeed, easing2, eps);
  cS = dampAngle(current, "theta", spherical.theta, smoothTime, delta, maxSpeed, easing2, eps);
  return aS || bS || cS;
}
var mat = new Matrix4();
var mPos = new Vector3();
var mRot = new Quaternion();
var mSca = new Vector3();
var aM;
var bM;
var cM;
function dampM(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  var cur = current;
  if (cur.__damp === void 0) {
    cur.__damp = {
      position: new Vector3(),
      rotation: new Quaternion(),
      scale: new Vector3()
    };
    current.decompose(cur.__damp.position, cur.__damp.rotation, cur.__damp.scale);
  }
  if (Array.isArray(target)) mat.set.apply(mat, _toConsumableArray(target));
  else mat.copy(target);
  mat.decompose(mPos, mRot, mSca);
  aM = damp3(cur.__damp.position, mPos, smoothTime, delta, maxSpeed, easing2, eps);
  bM = dampQ(cur.__damp.rotation, mRot, smoothTime, delta, maxSpeed, easing2, eps);
  cM = damp3(cur.__damp.scale, mSca, smoothTime, delta, maxSpeed, easing2, eps);
  current.compose(cur.__damp.position, cur.__damp.rotation, cur.__damp.scale);
  return aM || bM || cM;
}
var easing = Object.freeze({
  __proto__: null,
  rsqw,
  exp,
  damp,
  dampAngle,
  damp2,
  damp3,
  damp4,
  dampE,
  dampC,
  dampQ,
  dampS,
  dampM
});

// node_modules/@react-three/postprocessing/node_modules/maath/dist/geometry-982366ff.esm.js
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
var RoundedPlaneGeometry = function(_THREE$BufferGeometry) {
  _inherits(RoundedPlaneGeometry2, _THREE$BufferGeometry);
  var _super = _createSuper(RoundedPlaneGeometry2);
  function RoundedPlaneGeometry2() {
    var _this;
    var width = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 2;
    var height = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    var radius = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.2;
    var segments = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 16;
    _classCallCheck(this, RoundedPlaneGeometry2);
    _this = _super.call(this);
    var wi = width / 2 - radius;
    var hi = height / 2 - radius;
    var ul = radius / width;
    var ur = (width - radius) / width;
    var vl = radius / height;
    var vh = (height - radius) / height;
    var positions = [wi, hi, 0, -wi, hi, 0, -wi, -hi, 0, wi, -hi, 0];
    var uvs = [ur, vh, ul, vh, ul, vl, ur, vl];
    var n = [3 * (segments + 1) + 3, 3 * (segments + 1) + 4, segments + 4, segments + 5, 2 * (segments + 1) + 4, 2, 1, 2 * (segments + 1) + 3, 3, 4 * (segments + 1) + 3, 4, 0];
    var indices = [n[0], n[1], n[2], n[0], n[2], n[3], n[4], n[5], n[6], n[4], n[6], n[7], n[8], n[9], n[10], n[8], n[10], n[11]];
    var phi, cos, sin, xc, yc, uc, vc, idx;
    for (var i = 0; i < 4; i++) {
      xc = i < 1 || i > 2 ? wi : -wi;
      yc = i < 2 ? hi : -hi;
      uc = i < 1 || i > 2 ? ur : ul;
      vc = i < 2 ? vh : vl;
      for (var j2 = 0; j2 <= segments; j2++) {
        phi = Math.PI / 2 * (i + j2 / segments);
        cos = Math.cos(phi);
        sin = Math.sin(phi);
        positions.push(xc + radius * cos, yc + radius * sin, 0);
        uvs.push(uc + ul * cos, vc + vl * sin);
        if (j2 < segments) {
          idx = (segments + 1) * i + j2 + 4;
          indices.push(i, idx, idx + 1);
        }
      }
    }
    _this.setIndex(new BufferAttribute(new Uint32Array(indices), 1));
    _this.setAttribute("position", new BufferAttribute(new Float32Array(positions), 3));
    _this.setAttribute("uv", new BufferAttribute(new Float32Array(uvs), 2));
    return _this;
  }
  return RoundedPlaneGeometry2;
}(BufferGeometry);
function applySphereUV(bufferGeometry) {
  var uvs = [];
  var vertices = [];
  for (var i = 0; i < bufferGeometry.attributes.position.array.length / 3; i++) {
    var x = bufferGeometry.attributes.position.array[i * 3 + 0];
    var y = bufferGeometry.attributes.position.array[i * 3 + 1];
    var z2 = bufferGeometry.attributes.position.array[i * 3 + 2];
    vertices.push(new Vector3(x, y, z2));
  }
  var polarVertices = vertices.map(cartesian2polar);
  for (var _i = 0; _i < polarVertices.length / 3; _i++) {
    var tri = new Triangle(vertices[_i * 3 + 0], vertices[_i * 3 + 1], vertices[_i * 3 + 2]);
    var normal = tri.getNormal(new Vector3());
    for (var f = 0; f < 3; f++) {
      var vertex = polarVertices[_i * 3 + f];
      if (vertex.theta === 0 && (vertex.phi === 0 || vertex.phi === Math.PI)) {
        var alignedVertice = vertex.phi === 0 ? _i * 3 + 1 : _i * 3 + 0;
        vertex = {
          r: vertex.r,
          phi: vertex.phi,
          theta: polarVertices[alignedVertice].theta
        };
      }
      if (vertex.theta === Math.PI && cartesian2polar(normal).theta < Math.PI / 2) {
        vertex.theta = -Math.PI;
      }
      var canvasPoint = polar2canvas(vertex);
      uvs.push(1 - canvasPoint.x, 1 - canvasPoint.y);
    }
  }
  if (bufferGeometry.attributes.uv) delete bufferGeometry.attributes.uv;
  bufferGeometry.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
  bufferGeometry.attributes.uv.needsUpdate = true;
  return bufferGeometry;
}
function cartesian2polar(position) {
  var r = Math.sqrt(position.x * position.x + position.z * position.z + position.y * position.y);
  return {
    r,
    phi: Math.acos(position.y / r),
    theta: Math.atan2(position.z, position.x)
  };
}
function polar2canvas(polarPoint) {
  return {
    y: polarPoint.phi / Math.PI,
    x: (polarPoint.theta + Math.PI) / (2 * Math.PI)
  };
}
function applyBoxUV(bufferGeometry) {
  bufferGeometry.computeBoundingBox();
  var bboxSize = bufferGeometry.boundingBox.getSize(new Vector3());
  var boxSize = Math.min(bboxSize.x, bboxSize.y, bboxSize.z);
  var boxGeometry = new BoxGeometry(boxSize, boxSize, boxSize);
  var cube = new Mesh(boxGeometry);
  cube.rotation.set(0, 0, 0);
  cube.updateWorldMatrix(true, false);
  var transformMatrix = cube.matrix.clone().invert();
  var uvBbox = new Box3(new Vector3(-boxSize / 2, -boxSize / 2, -boxSize / 2), new Vector3(boxSize / 2, boxSize / 2, boxSize / 2));
  _applyBoxUV(bufferGeometry, transformMatrix, uvBbox, boxSize);
  bufferGeometry.attributes.uv.needsUpdate = true;
  return bufferGeometry;
}
function _applyBoxUV(geom, transformMatrix, bbox, bbox_max_size) {
  var coords = [];
  coords.length = 2 * geom.attributes.position.array.length / 3;
  var makeUVs = function makeUVs2(v02, v12, v22) {
    v02.applyMatrix4(transformMatrix);
    v12.applyMatrix4(transformMatrix);
    v22.applyMatrix4(transformMatrix);
    var n = new Vector3();
    n.crossVectors(v12.clone().sub(v02), v12.clone().sub(v22)).normalize();
    n.x = Math.abs(n.x);
    n.y = Math.abs(n.y);
    n.z = Math.abs(n.z);
    var uv0 = new Vector2();
    var uv1 = new Vector2();
    var uv2 = new Vector2();
    if (n.y > n.x && n.y > n.z) {
      uv0.x = (v02.x - bbox.min.x) / bbox_max_size;
      uv0.y = (bbox.max.z - v02.z) / bbox_max_size;
      uv1.x = (v12.x - bbox.min.x) / bbox_max_size;
      uv1.y = (bbox.max.z - v12.z) / bbox_max_size;
      uv2.x = (v22.x - bbox.min.x) / bbox_max_size;
      uv2.y = (bbox.max.z - v22.z) / bbox_max_size;
    } else if (n.x > n.y && n.x > n.z) {
      uv0.x = (v02.z - bbox.min.z) / bbox_max_size;
      uv0.y = (v02.y - bbox.min.y) / bbox_max_size;
      uv1.x = (v12.z - bbox.min.z) / bbox_max_size;
      uv1.y = (v12.y - bbox.min.y) / bbox_max_size;
      uv2.x = (v22.z - bbox.min.z) / bbox_max_size;
      uv2.y = (v22.y - bbox.min.y) / bbox_max_size;
    } else if (n.z > n.y && n.z > n.x) {
      uv0.x = (v02.x - bbox.min.x) / bbox_max_size;
      uv0.y = (v02.y - bbox.min.y) / bbox_max_size;
      uv1.x = (v12.x - bbox.min.x) / bbox_max_size;
      uv1.y = (v12.y - bbox.min.y) / bbox_max_size;
      uv2.x = (v22.x - bbox.min.x) / bbox_max_size;
      uv2.y = (v22.y - bbox.min.y) / bbox_max_size;
    }
    return {
      uv0,
      uv1,
      uv2
    };
  };
  if (geom.index) {
    for (var vi = 0; vi < geom.index.array.length; vi += 3) {
      var idx0 = geom.index.array[vi];
      var idx1 = geom.index.array[vi + 1];
      var idx2 = geom.index.array[vi + 2];
      var vx0 = geom.attributes.position.array[3 * idx0];
      var vy0 = geom.attributes.position.array[3 * idx0 + 1];
      var vz0 = geom.attributes.position.array[3 * idx0 + 2];
      var vx1 = geom.attributes.position.array[3 * idx1];
      var vy1 = geom.attributes.position.array[3 * idx1 + 1];
      var vz1 = geom.attributes.position.array[3 * idx1 + 2];
      var vx2 = geom.attributes.position.array[3 * idx2];
      var vy2 = geom.attributes.position.array[3 * idx2 + 1];
      var vz2 = geom.attributes.position.array[3 * idx2 + 2];
      var v0 = new Vector3(vx0, vy0, vz0);
      var v1 = new Vector3(vx1, vy1, vz1);
      var v2 = new Vector3(vx2, vy2, vz2);
      var uvs = makeUVs(v0, v1, v2);
      coords[2 * idx0] = uvs.uv0.x;
      coords[2 * idx0 + 1] = uvs.uv0.y;
      coords[2 * idx1] = uvs.uv1.x;
      coords[2 * idx1 + 1] = uvs.uv1.y;
      coords[2 * idx2] = uvs.uv2.x;
      coords[2 * idx2 + 1] = uvs.uv2.y;
    }
  } else {
    for (var _vi = 0; _vi < geom.attributes.position.array.length; _vi += 9) {
      var _vx = geom.attributes.position.array[_vi];
      var _vy = geom.attributes.position.array[_vi + 1];
      var _vz = geom.attributes.position.array[_vi + 2];
      var _vx2 = geom.attributes.position.array[_vi + 3];
      var _vy2 = geom.attributes.position.array[_vi + 4];
      var _vz2 = geom.attributes.position.array[_vi + 5];
      var _vx3 = geom.attributes.position.array[_vi + 6];
      var _vy3 = geom.attributes.position.array[_vi + 7];
      var _vz3 = geom.attributes.position.array[_vi + 8];
      var _v = new Vector3(_vx, _vy, _vz);
      var _v2 = new Vector3(_vx2, _vy2, _vz2);
      var _v3 = new Vector3(_vx3, _vy3, _vz3);
      var _uvs = makeUVs(_v, _v2, _v3);
      var _idx = _vi / 3;
      var _idx2 = _idx + 1;
      var _idx3 = _idx + 2;
      coords[2 * _idx] = _uvs.uv0.x;
      coords[2 * _idx + 1] = _uvs.uv0.y;
      coords[2 * _idx2] = _uvs.uv1.x;
      coords[2 * _idx2 + 1] = _uvs.uv1.y;
      coords[2 * _idx3] = _uvs.uv2.x;
      coords[2 * _idx3 + 1] = _uvs.uv2.y;
    }
  }
  if (geom.attributes.uv) delete geom.attributes.uv;
  geom.setAttribute("uv", new Float32BufferAttribute(coords, 2));
}
var geometry = Object.freeze({
  __proto__: null,
  RoundedPlaneGeometry,
  applySphereUV,
  applyBoxUV
});

// node_modules/@react-three/postprocessing/node_modules/maath/dist/three-eb2ad8c0.esm.js
function bufferToVectors(buffer2) {
  var stride = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
  var p2 = [];
  for (var i = 0, j2 = 0; i < buffer2.length; i += stride, j2++) {
    if (stride === 3) {
      p2[j2] = new Vector3(buffer2[i], buffer2[i + 1], buffer2[i + 2]);
    } else {
      p2[j2] = new Vector2(buffer2[i], buffer2[i + 1]);
    }
  }
  return p2;
}
function vectorsToBuffer(vectorArray) {
  var l = vectorArray.length;
  var stride = vectorArray[0].hasOwnProperty("z") ? 3 : 2;
  var buffer2 = new Float32Array(l * stride);
  for (var i = 0; i < l; i++) {
    var j2 = i * stride;
    buffer2[j2] = vectorArray[i].x;
    buffer2[j2 + 1] = vectorArray[i].y;
    if (stride === 3) {
      buffer2[j2 + 2] = vectorArray[i].z;
    }
  }
  return buffer2;
}
var three = Object.freeze({
  __proto__: null,
  bufferToVectors,
  vectorsToBuffer
});

// node_modules/three/examples/jsm/postprocessing/Pass.js
var _camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
var FullscreenTriangleGeometry = class extends BufferGeometry {
  constructor() {
    super();
    this.setAttribute("position", new Float32BufferAttribute([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
    this.setAttribute("uv", new Float32BufferAttribute([0, 2, 0, 0, 2, 0], 2));
  }
};
var _geometry = new FullscreenTriangleGeometry();

// node_modules/n8ao/dist/N8AO.js
var $e4ca8dcb0218f846$var$_geometry = new BufferGeometry();
$e4ca8dcb0218f846$var$_geometry.setAttribute("position", new BufferAttribute(new Float32Array([
  -1,
  -1,
  3,
  -1,
  -1,
  3
]), 2));
$e4ca8dcb0218f846$var$_geometry.setAttribute("uv", new BufferAttribute(new Float32Array([
  0,
  0,
  2,
  0,
  0,
  2
]), 2));
$e4ca8dcb0218f846$var$_geometry.boundingSphere = new Sphere();
$e4ca8dcb0218f846$var$_geometry.computeBoundingSphere = function() {
};
var $e4ca8dcb0218f846$var$_camera = new OrthographicCamera();
var $e4ca8dcb0218f846$export$dcd670d73db751f5 = class {
  constructor(material) {
    this._mesh = new Mesh($e4ca8dcb0218f846$var$_geometry, material);
    this._mesh.frustumCulled = false;
  }
  render(renderer) {
    renderer.render(this._mesh, $e4ca8dcb0218f846$var$_camera);
  }
  get material() {
    return this._mesh.material;
  }
  set material(value) {
    this._mesh.material = value;
  }
  dispose() {
    this._mesh.material.dispose();
    this._mesh.geometry.dispose();
  }
};
var $1ed45968c1160c3c$export$c9b263b9a17dffd7 = {
  uniforms: {
    "sceneDiffuse": {
      value: null
    },
    "sceneDepth": {
      value: null
    },
    "sceneNormal": {
      value: null
    },
    "projMat": {
      value: new Matrix4()
    },
    "viewMat": {
      value: new Matrix4()
    },
    "projViewMat": {
      value: new Matrix4()
    },
    "projectionMatrixInv": {
      value: new Matrix4()
    },
    "viewMatrixInv": {
      value: new Matrix4()
    },
    "cameraPos": {
      value: new Vector3()
    },
    "resolution": {
      value: new Vector2()
    },
    "biasAdjustment": {
      value: new Vector2()
    },
    "time": {
      value: 0
    },
    "samples": {
      value: []
    },
    "bluenoise": {
      value: null
    },
    "distanceFalloff": {
      value: 1
    },
    "radius": {
      value: 5
    },
    "near": {
      value: 0.1
    },
    "far": {
      value: 1e3
    },
    "logDepth": {
      value: false
    },
    "ortho": {
      value: false
    },
    "screenSpaceRadius": {
      value: false
    },
    "frame": {
      value: 0
    }
  },
  depthWrite: false,
  depthTest: false,
  vertexShader: (
    /* glsl */
    `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1);
}`
  ),
  fragmentShader: (
    /* glsl */
    `
    #define SAMPLES 16
    #define FSAMPLES 16.0
uniform sampler2D sceneDiffuse;
uniform highp sampler2D sceneNormal;
uniform highp sampler2D sceneDepth;
uniform mat4 projectionMatrixInv;
uniform mat4 viewMatrixInv;
uniform mat4 projMat;
uniform mat4 viewMat;
uniform mat4 projViewMat;
uniform vec3 cameraPos;
uniform vec2 resolution;
uniform vec2 biasAdjustment;
uniform float time;
uniform vec3[SAMPLES] samples;
uniform float radius;
uniform float distanceFalloff;
uniform float near;
uniform float far;
uniform float frame;
uniform bool logDepth;
uniform bool ortho;
uniform bool screenSpaceRadius;
uniform sampler2D bluenoise;
    varying vec2 vUv;
    highp float linearize_depth(highp float d, highp float zNear,highp float zFar)
    {
        return (zFar * zNear) / (zFar - d * (zFar - zNear));
    }
    highp float linearize_depth_ortho(highp float d, highp float nearZ, highp float farZ) {
      return nearZ + (farZ - nearZ) * d;
    }
    highp float linearize_depth_log(highp float d, highp float nearZ,highp float farZ) {
      float depth = pow(2.0, d * log2(farZ + 1.0)) - 1.0;
      float a = farZ / (farZ - nearZ);
      float b = farZ * nearZ / (nearZ - farZ);
      float linDepth = a + b / depth;
      /*return ortho ? linearize_depth_ortho(
        linDepth,
        nearZ,
        farZ
      ) :linearize_depth(linDepth, nearZ, farZ);*/
       #ifdef ORTHO

       return linearize_depth_ortho(d, nearZ, farZ);

        #else
        return linearize_depth(linDepth, nearZ, farZ);
        #endif
    }

    vec3 getWorldPosLog(vec3 posS) {
      vec2 uv = posS.xy;
      float z = posS.z;
      float nearZ =near;
      float farZ = far;
      float depth = pow(2.0, z * log2(farZ + 1.0)) - 1.0;
      float a = farZ / (farZ - nearZ);
      float b = farZ * nearZ / (nearZ - farZ);
      float linDepth = a + b / depth;
      vec4 clipVec = vec4(uv, linDepth, 1.0) * 2.0 - 1.0;
      vec4 wpos = projectionMatrixInv * clipVec;
      return wpos.xyz / wpos.w;
    }
    vec3 getWorldPos(float depth, vec2 coord) {
      #ifdef LOGDEPTH
        #ifndef ORTHO
          return getWorldPosLog(vec3(coord, depth));
        #endif
      #endif
      float z = depth * 2.0 - 1.0;
      vec4 clipSpacePosition = vec4(coord * 2.0 - 1.0, z, 1.0);
      vec4 viewSpacePosition = projectionMatrixInv * clipSpacePosition;
      // Perspective division
     vec4 worldSpacePosition = viewSpacePosition;
     worldSpacePosition.xyz /= worldSpacePosition.w;
      return worldSpacePosition.xyz;
  }

  vec3 computeNormal(vec3 worldPos, vec2 vUv) {
    ivec2 p = ivec2(vUv * resolution);
    float c0 = texelFetch(sceneDepth, p, 0).x;
    float l2 = texelFetch(sceneDepth, p - ivec2(2, 0), 0).x;
    float l1 = texelFetch(sceneDepth, p - ivec2(1, 0), 0).x;
    float r1 = texelFetch(sceneDepth, p + ivec2(1, 0), 0).x;
    float r2 = texelFetch(sceneDepth, p + ivec2(2, 0), 0).x;
    float b2 = texelFetch(sceneDepth, p - ivec2(0, 2), 0).x;
    float b1 = texelFetch(sceneDepth, p - ivec2(0, 1), 0).x;
    float t1 = texelFetch(sceneDepth, p + ivec2(0, 1), 0).x;
    float t2 = texelFetch(sceneDepth, p + ivec2(0, 2), 0).x;

    float dl = abs((2.0 * l1 - l2) - c0);
    float dr = abs((2.0 * r1 - r2) - c0);
    float db = abs((2.0 * b1 - b2) - c0);
    float dt = abs((2.0 * t1 - t2) - c0);

    vec3 ce = getWorldPos(c0, vUv).xyz;

    vec3 dpdx = (dl < dr) ? ce - getWorldPos(l1, (vUv - vec2(1.0 / resolution.x, 0.0))).xyz
                          : -ce + getWorldPos(r1, (vUv + vec2(1.0 / resolution.x, 0.0))).xyz;
    vec3 dpdy = (db < dt) ? ce - getWorldPos(b1, (vUv - vec2(0.0, 1.0 / resolution.y))).xyz
                          : -ce + getWorldPos(t1, (vUv + vec2(0.0, 1.0 / resolution.y))).xyz;

    return normalize(cross(dpdx, dpdy));
}

mat3 makeRotationZ(float theta) {
	float c = cos(theta);
	float s = sin(theta);
	return mat3(c, - s, 0,
			s,  c, 0,
			0,  0, 1);
  }

void main() {
      vec4 diffuse = texture2D(sceneDiffuse, vUv);
      float depth = texture2D(sceneDepth, vUv).x;
      if (depth == 1.0) {
        gl_FragColor = vec4(vec3(1.0), 1.0);
        return;
      }
      vec3 worldPos = getWorldPos(depth, vUv);
      #ifdef HALFRES
        vec3 normal = texture2D(sceneNormal, vUv).rgb;
      #else
        vec3 normal = computeNormal(worldPos, vUv);
      #endif
      vec4 noise = texture2D(bluenoise, gl_FragCoord.xy / 128.0);
      vec2 harmoniousNumbers = vec2(
        1.618033988749895,
        1.324717957244746
      );
      noise.rg += harmoniousNumbers * frame;
      noise.rg = fract(noise.rg);
        vec3 helperVec = vec3(0.0, 1.0, 0.0);
        if (dot(helperVec, normal) > 0.99) {
          helperVec = vec3(1.0, 0.0, 0.0);
        }
        vec3 tangent = normalize(cross(helperVec, normal));
        vec3 bitangent = cross(normal, tangent);
        mediump mat3 tbn = mat3(tangent, bitangent, normal) *  makeRotationZ( noise.r * 3.1415962 * 2.0) ;

      mediump float occluded = 0.0;
      mediump float totalWeight = 0.0;
      float radiusToUse = screenSpaceRadius ? distance(
        worldPos,
        getWorldPos(depth, vUv +
          vec2(radius, 0.0) / resolution)
      ) : radius;
      float distanceFalloffToUse =screenSpaceRadius ?
          radiusToUse * distanceFalloff
      : radiusToUse * distanceFalloff * 0.2;
      float bias = (min(
        0.1,
        distanceFalloffToUse * 0.1
      ) / near) * fwidth(distance(worldPos, cameraPos)) / radiusToUse;
      bias = biasAdjustment.x + biasAdjustment.y * bias;
      mediump float offsetMove = noise.g;
      mediump float offsetMoveInv = 1.0 / FSAMPLES;
      float farTimesNear = far * near;
      float farMinusNear = far - near;
      
      for(int i = 0; i < SAMPLES; i++) {
        mediump vec3 sampleDirection = tbn * samples[i];

        float moveAmt = fract(offsetMove);
        offsetMove += offsetMoveInv;
        vec3 samplePos = worldPos + radiusToUse * moveAmt * sampleDirection;
        vec4 offset = projMat * vec4(samplePos, 1.0);
        offset.xyz /= offset.w;
        offset.xyz = offset.xyz * 0.5 + 0.5;
        
        if (all(greaterThan(offset.xyz * (1.0 - offset.xyz), vec3(0.0)))) {
          float sampleDepth = textureLod(sceneDepth, offset.xy, 0.0).x;

          /*#ifdef LOGDEPTH
          float distSample = linearize_depth_log(sampleDepth, near, far);
      #else
          #ifdef ORTHO
              float distSample = near + farMinusNear * sampleDepth;
          #else
              float distSample = (farTimesNear) / (far - sampleDepth * farMinusNear);
          #endif
      #endif*/
      #ifdef ORTHO
          float distSample = near + sampleDepth * farMinusNear;
      #else
          #ifdef LOGDEPTH
              float distSample = linearize_depth_log(sampleDepth, near, far);
          #else
              float distSample = (farTimesNear) / (far - sampleDepth * farMinusNear);
          #endif
      #endif
      
      #ifdef ORTHO
          float distWorld = near + offset.z * farMinusNear;
      #else
          float distWorld = (farTimesNear) / (far - offset.z * farMinusNear);
      #endif
          
          mediump float rangeCheck = smoothstep(0.0, 1.0, distanceFalloffToUse / (abs(distSample - distWorld)));
          vec2 diff = gl_FragCoord.xy - floor(offset.xy * resolution);
          occluded += rangeCheck * float(distSample != distWorld) * float(sampleDepth != depth) * step(distSample + bias, distWorld) * step(
            1.0,
            dot(diff, diff)
          );
          
          totalWeight ++;
        }
      }
      float occ = clamp(1.0 - occluded / (totalWeight == 0.0 ? 1.0 : totalWeight), 0.0, 1.0);
      gl_FragColor = vec4(occ, 0.5 + 0.5 * normal);
}`
  )
};
var $12b21d24d1192a04$export$a815acccbd2c9a49 = {
  uniforms: {
    "sceneDiffuse": {
      value: null
    },
    "sceneDepth": {
      value: null
    },
    "tDiffuse": {
      value: null
    },
    "transparencyDWFalse": {
      value: null
    },
    "transparencyDWTrue": {
      value: null
    },
    "transparencyDWTrueDepth": {
      value: null
    },
    "transparencyAware": {
      value: false
    },
    "projMat": {
      value: new Matrix4()
    },
    "viewMat": {
      value: new Matrix4()
    },
    "projectionMatrixInv": {
      value: new Matrix4()
    },
    "viewMatrixInv": {
      value: new Matrix4()
    },
    "cameraPos": {
      value: new Vector3()
    },
    "resolution": {
      value: new Vector2()
    },
    "color": {
      value: new Vector3(0, 0, 0)
    },
    "blueNoise": {
      value: null
    },
    "downsampledDepth": {
      value: null
    },
    "time": {
      value: 0
    },
    "intensity": {
      value: 10
    },
    "renderMode": {
      value: 0
    },
    "gammaCorrection": {
      value: false
    },
    "logDepth": {
      value: false
    },
    "ortho": {
      value: false
    },
    "near": {
      value: 0.1
    },
    "far": {
      value: 1e3
    },
    "screenSpaceRadius": {
      value: false
    },
    "radius": {
      value: 0
    },
    "distanceFalloff": {
      value: 1
    },
    "fog": {
      value: false
    },
    "fogExp": {
      value: false
    },
    "fogDensity": {
      value: 0
    },
    "fogNear": {
      value: Infinity
    },
    "fogFar": {
      value: Infinity
    },
    "colorMultiply": {
      value: true
    },
    "aoTones": {
      value: 0
    }
  },
  depthWrite: false,
  depthTest: false,
  vertexShader: (
    /* glsl */
    `
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = vec4(position, 1);
		}`
  ),
  fragmentShader: (
    /* glsl */
    `
		uniform sampler2D sceneDiffuse;
    uniform highp sampler2D sceneDepth;
    uniform highp sampler2D downsampledDepth;
    uniform highp sampler2D transparencyDWFalse;
    uniform highp sampler2D transparencyDWTrue;
    uniform highp sampler2D transparencyDWTrueDepth;
    uniform sampler2D tDiffuse;
    uniform sampler2D blueNoise;
    uniform vec2 resolution;
    uniform vec3 color;
    uniform mat4 projectionMatrixInv;
    uniform mat4 viewMatrixInv;
    uniform float intensity;
    uniform float renderMode;
    uniform float near;
    uniform float far;
    uniform float aoTones;
    uniform bool gammaCorrection;
    uniform bool logDepth;
    uniform bool ortho;
    uniform bool screenSpaceRadius;
    uniform bool fog;
    uniform bool fogExp;
    uniform bool colorMultiply;
    uniform bool transparencyAware;
    uniform float fogDensity;
    uniform float fogNear;
    uniform float fogFar;
    uniform float radius;
    uniform float distanceFalloff;
    uniform vec3 cameraPos;
    varying vec2 vUv;
    highp float linearize_depth(highp float d, highp float zNear,highp float zFar)
    {
        return (zFar * zNear) / (zFar - d * (zFar - zNear));
    }
    highp float linearize_depth_ortho(highp float d, highp float nearZ, highp float farZ) {
      return nearZ + (farZ - nearZ) * d;
    }
    highp float linearize_depth_log(highp float d, highp float nearZ,highp float farZ) {
      float depth = pow(2.0, d * log2(farZ + 1.0)) - 1.0;
      float a = farZ / (farZ - nearZ);
      float b = farZ * nearZ / (nearZ - farZ);
      float linDepth = a + b / depth;
      return ortho ? linearize_depth_ortho(
        linDepth,
        nearZ,
        farZ
      ) :linearize_depth(linDepth, nearZ, farZ);
    }
    vec3 getWorldPosLog(vec3 posS) {
        vec2 uv = posS.xy;
        float z = posS.z;
        float nearZ =near;
        float farZ = far;
        float depth = pow(2.0, z * log2(farZ + 1.0)) - 1.0;
        float a = farZ / (farZ - nearZ);
        float b = farZ * nearZ / (nearZ - farZ);
        float linDepth = a + b / depth;
        vec4 clipVec = vec4(uv, linDepth, 1.0) * 2.0 - 1.0;
        vec4 wpos = projectionMatrixInv * clipVec;
        return wpos.xyz / wpos.w;
      }
      vec3 getWorldPos(float depth, vec2 coord) {
       // if (logDepth) {
        #ifdef LOGDEPTH
          #ifndef ORTHO
            return getWorldPosLog(vec3(coord, depth));
          #endif
        #endif
      //  }
        float z = depth * 2.0 - 1.0;
        vec4 clipSpacePosition = vec4(coord * 2.0 - 1.0, z, 1.0);
        vec4 viewSpacePosition = projectionMatrixInv * clipSpacePosition;
        // Perspective division
       vec4 worldSpacePosition = viewSpacePosition;
       worldSpacePosition.xyz /= worldSpacePosition.w;
        return worldSpacePosition.xyz;
    }
  
    vec3 computeNormal(vec3 worldPos, vec2 vUv) {
      ivec2 p = ivec2(vUv * resolution);
      float c0 = texelFetch(sceneDepth, p, 0).x;
      float l2 = texelFetch(sceneDepth, p - ivec2(2, 0), 0).x;
      float l1 = texelFetch(sceneDepth, p - ivec2(1, 0), 0).x;
      float r1 = texelFetch(sceneDepth, p + ivec2(1, 0), 0).x;
      float r2 = texelFetch(sceneDepth, p + ivec2(2, 0), 0).x;
      float b2 = texelFetch(sceneDepth, p - ivec2(0, 2), 0).x;
      float b1 = texelFetch(sceneDepth, p - ivec2(0, 1), 0).x;
      float t1 = texelFetch(sceneDepth, p + ivec2(0, 1), 0).x;
      float t2 = texelFetch(sceneDepth, p + ivec2(0, 2), 0).x;
  
      float dl = abs((2.0 * l1 - l2) - c0);
      float dr = abs((2.0 * r1 - r2) - c0);
      float db = abs((2.0 * b1 - b2) - c0);
      float dt = abs((2.0 * t1 - t2) - c0);
  
      vec3 ce = getWorldPos(c0, vUv).xyz;
  
      vec3 dpdx = (dl < dr) ? ce - getWorldPos(l1, (vUv - vec2(1.0 / resolution.x, 0.0))).xyz
                            : -ce + getWorldPos(r1, (vUv + vec2(1.0 / resolution.x, 0.0))).xyz;
      vec3 dpdy = (db < dt) ? ce - getWorldPos(b1, (vUv - vec2(0.0, 1.0 / resolution.y))).xyz
                            : -ce + getWorldPos(t1, (vUv + vec2(0.0, 1.0 / resolution.y))).xyz;
  
      return normalize(cross(dpdx, dpdy));
  }

    #include <common>
    #include <dithering_pars_fragment>
    void main() {
        //vec4 texel = texture2D(tDiffuse, vUv);//vec3(0.0);
        vec4 sceneTexel = texture2D(sceneDiffuse, vUv);
        float depth = texture2D(
            sceneDepth,
            vUv
        ).x;
        #ifdef HALFRES 
        vec4 texel;
        if (depth == 1.0) {
            texel = vec4(0.0, 0.0, 0.0, 1.0);
        } else {
        vec3 worldPos = getWorldPos(depth, vUv);
        vec3 normal = computeNormal(getWorldPos(depth, vUv), vUv);
       // vec4 texel = texture2D(tDiffuse, vUv);
       // Find closest depth;
       float totalWeight = 0.0;
       float radiusToUse = screenSpaceRadius ? distance(
        worldPos,
        getWorldPos(depth, vUv +
          vec2(radius, 0.0) / resolution)
      ) : radius;
      float distanceFalloffToUse =screenSpaceRadius ?
          radiusToUse * distanceFalloff
      : distanceFalloff;
        for(float x = -1.0; x <= 1.0; x++) {
            for(float y = -1.0; y <= 1.0; y++) {
                vec2 offset = vec2(x, y);
                ivec2 p = ivec2(
                    (vUv * resolution * 0.5) + offset
                );
                vec2 pUv = vec2(p) / (resolution * 0.5);
                float sampleDepth = texelFetch(downsampledDepth,p, 0).x;
                vec4 sampleInfo = texelFetch(tDiffuse, p, 0);
                vec3 normalSample = sampleInfo.gba * 2.0 - 1.0;
                vec3 worldPosSample = getWorldPos(sampleDepth, pUv);
                float tangentPlaneDist = abs(dot(worldPosSample - worldPos, normal));
                float rangeCheck = exp(-1.0 * tangentPlaneDist * (1.0 / distanceFalloffToUse)) * max(dot(normal, normalSample), 0.0);
                float weight = rangeCheck;
                totalWeight += weight;
                texel += sampleInfo * weight;
            }
        }
        if (totalWeight == 0.0) {
            texel = texture2D(tDiffuse, vUv);
        } else {
            texel /= totalWeight;
        }
    }
        #else
        vec4 texel = texture2D(tDiffuse, vUv);
        #endif

        #ifdef LOGDEPTH
        texel.r = clamp(texel.r, 0.0, 1.0);
        if (texel.r == 0.0) {
          texel.r = 1.0;
        }
        #endif
     
        float finalAo = pow(texel.r, intensity);
        if (aoTones > 0.0) {
            finalAo = ceil(finalAo * aoTones) / aoTones;
        }
        float fogFactor;
        float fogDepth = distance(
            cameraPos,
            getWorldPos(depth, vUv)
        );
        if (fog) {
            if (fogExp) {
                fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
            } else {
                fogFactor = smoothstep( fogNear, fogFar, fogDepth );
            }
        }
        if (transparencyAware) {
            float transparencyDWOff = texture2D(transparencyDWFalse, vUv).a;
            float transparencyDWOn = texture2D(transparencyDWTrue, vUv).a;
            float adjustmentFactorOff = transparencyDWOff;
            float adjustmentFactorOn = (1.0 - transparencyDWOn) * (
                texture2D(transparencyDWTrueDepth, vUv).r == texture2D(sceneDepth, vUv).r ? 1.0 : 0.0
            );
            float adjustmentFactor = max(adjustmentFactorOff, adjustmentFactorOn);
            finalAo = mix(finalAo, 1.0, adjustmentFactor);
        }
        finalAo = mix(finalAo, 1.0, fogFactor);
        vec3 aoApplied = color * mix(vec3(1.0), sceneTexel.rgb, float(colorMultiply));
        if (renderMode == 0.0) {
            gl_FragColor = vec4( mix(sceneTexel.rgb, aoApplied, 1.0 - finalAo), sceneTexel.a);
        } else if (renderMode == 1.0) {
            gl_FragColor = vec4( mix(vec3(1.0), aoApplied, 1.0 - finalAo), sceneTexel.a);
        } else if (renderMode == 2.0) {
            gl_FragColor = vec4( sceneTexel.rgb, sceneTexel.a);
        } else if (renderMode == 3.0) {
            if (vUv.x < 0.5) {
                gl_FragColor = vec4( sceneTexel.rgb, sceneTexel.a);
            } else if (abs(vUv.x - 0.5) < 1.0 / resolution.x) {
                gl_FragColor = vec4(1.0);
            } else {
                gl_FragColor = vec4( mix(sceneTexel.rgb, aoApplied, 1.0 - finalAo), sceneTexel.a);
            }
        } else if (renderMode == 4.0) {
            if (vUv.x < 0.5) {
                gl_FragColor = vec4( sceneTexel.rgb, sceneTexel.a);
            } else if (abs(vUv.x - 0.5) < 1.0 / resolution.x) {
                gl_FragColor = vec4(1.0);
            } else {
                gl_FragColor = vec4( mix(vec3(1.0), aoApplied, 1.0 - finalAo), sceneTexel.a);
            }
        }
        #include <dithering_fragment>
        if (gammaCorrection) {
            gl_FragColor = sRGBTransferOETF(gl_FragColor);
        }
    }
    `
  )
};
var $e52378cd0f5a973d$export$57856b59f317262e = {
  uniforms: {
    "sceneDiffuse": {
      value: null
    },
    "sceneDepth": {
      value: null
    },
    "tDiffuse": {
      value: null
    },
    "projMat": {
      value: new Matrix4()
    },
    "viewMat": {
      value: new Matrix4()
    },
    "projectionMatrixInv": {
      value: new Matrix4()
    },
    "viewMatrixInv": {
      value: new Matrix4()
    },
    "cameraPos": {
      value: new Vector3()
    },
    "resolution": {
      value: new Vector2()
    },
    "time": {
      value: 0
    },
    "r": {
      value: 5
    },
    "blueNoise": {
      value: null
    },
    "radius": {
      value: 12
    },
    "worldRadius": {
      value: 5
    },
    "index": {
      value: 0
    },
    "poissonDisk": {
      value: []
    },
    "distanceFalloff": {
      value: 1
    },
    "near": {
      value: 0.1
    },
    "far": {
      value: 1e3
    },
    "logDepth": {
      value: false
    },
    "screenSpaceRadius": {
      value: false
    }
  },
  depthWrite: false,
  depthTest: false,
  vertexShader: (
    /* glsl */
    `
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = vec4(position, 1.0);
		}`
  ),
  fragmentShader: (
    /* glsl */
    `
		uniform sampler2D sceneDiffuse;
    uniform highp sampler2D sceneDepth;
    uniform sampler2D tDiffuse;
    uniform sampler2D blueNoise;
    uniform mat4 projectionMatrixInv;
    uniform mat4 viewMatrixInv;
    uniform vec2 resolution;
    uniform float r;
    uniform float radius;
     uniform float worldRadius;
    uniform float index;
     uniform float near;
     uniform float far;
     uniform float distanceFalloff;
     uniform bool logDepth;
     uniform bool screenSpaceRadius;
    varying vec2 vUv;

    highp float linearize_depth(highp float d, highp float zNear,highp float zFar)
    {
        highp float z_n = 2.0 * d - 1.0;
        return 2.0 * zNear * zFar / (zFar + zNear - z_n * (zFar - zNear));
    }
    highp float linearize_depth_log(highp float d, highp float nearZ,highp float farZ) {
     float depth = pow(2.0, d * log2(farZ + 1.0)) - 1.0;
     float a = farZ / (farZ - nearZ);
     float b = farZ * nearZ / (nearZ - farZ);
     float linDepth = a + b / depth;
     return linearize_depth(linDepth, nearZ, farZ);
   }
   highp float linearize_depth_ortho(highp float d, highp float nearZ, highp float farZ) {
     return nearZ + (farZ - nearZ) * d;
   }
   vec3 getWorldPosLog(vec3 posS) {
     vec2 uv = posS.xy;
     float z = posS.z;
     float nearZ =near;
     float farZ = far;
     float depth = pow(2.0, z * log2(farZ + 1.0)) - 1.0;
     float a = farZ / (farZ - nearZ);
     float b = farZ * nearZ / (nearZ - farZ);
     float linDepth = a + b / depth;
     vec4 clipVec = vec4(uv, linDepth, 1.0) * 2.0 - 1.0;
     vec4 wpos = projectionMatrixInv * clipVec;
     return wpos.xyz / wpos.w;
   }
    vec3 getWorldPos(float depth, vec2 coord) {
     #ifdef LOGDEPTH
      #ifndef ORTHO
          return getWorldPosLog(vec3(coord, depth));
      #endif
     #endif
        
        float z = depth * 2.0 - 1.0;
        vec4 clipSpacePosition = vec4(coord * 2.0 - 1.0, z, 1.0);
        vec4 viewSpacePosition = projectionMatrixInv * clipSpacePosition;
        // Perspective division
       vec4 worldSpacePosition = viewSpacePosition;
       worldSpacePosition.xyz /= worldSpacePosition.w;
        return worldSpacePosition.xyz;
    }
    #include <common>
    #define NUM_SAMPLES 16
    uniform vec2 poissonDisk[NUM_SAMPLES];
    void main() {
        const float pi = 3.14159;
        vec2 texelSize = vec2(1.0 / resolution.x, 1.0 / resolution.y);
        vec2 uv = vUv;
        vec4 data = texture2D(tDiffuse, vUv);
        float occlusion = data.r;
        float baseOcc = data.r;
        vec3 normal = data.gba * 2.0 - 1.0;
        float count = 1.0;
        float d = texture2D(sceneDepth, vUv).x;
        if (d == 1.0) {
          gl_FragColor = data;
          return;
        }
        vec3 worldPos = getWorldPos(d, vUv);
        float size = radius;
        float angle;
        if (index == 0.0) {
             angle = texture2D(blueNoise, gl_FragCoord.xy / 128.0).w * PI2;
        } else if (index == 1.0) {
             angle = texture2D(blueNoise, gl_FragCoord.xy / 128.0).z * PI2;
        } else if (index == 2.0) {
             angle = texture2D(blueNoise, gl_FragCoord.xy / 128.0).y * PI2;
        } else {
             angle = texture2D(blueNoise, gl_FragCoord.xy / 128.0).x * PI2;
        }

        mat2 rotationMatrix = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
        float radiusToUse = screenSpaceRadius ? distance(
          worldPos,
          getWorldPos(d, vUv +
            vec2(worldRadius, 0.0) / resolution)
        ) : worldRadius;
        float distanceFalloffToUse =screenSpaceRadius ?
        radiusToUse * distanceFalloff
    : radiusToUse * distanceFalloff * 0.2;

        float invDistance = (1.0 / distanceFalloffToUse);
        for(int i = 0; i < NUM_SAMPLES; i++) {
            vec2 offset = (rotationMatrix * poissonDisk[i]) * texelSize * size;
            vec4 dataSample = texture2D(tDiffuse, uv + offset);
            float occSample = dataSample.r;
            vec3 normalSample = dataSample.gba * 2.0 - 1.0;
            float dSample = texture2D(sceneDepth, uv + offset).x;
            vec3 worldPosSample = getWorldPos(dSample, uv + offset);
            float tangentPlaneDist = abs(dot(worldPosSample - worldPos, normal));
            float rangeCheck = float(dSample != 1.0) * exp(-1.0 * tangentPlaneDist * invDistance ) * max(dot(normal, normalSample), 0.0);
            occlusion += occSample * rangeCheck;
            count += rangeCheck;
        }
        if (count > 0.0) {
          occlusion /= count;
        }
        #ifdef LOGDEPTH
          occlusion = clamp(occlusion, 0.0, 1.0);
          if (occlusion == 0.0) {
            occlusion = 1.0;
          }
        #endif
        gl_FragColor = vec4(occlusion, 0.5 + 0.5 * normal);
    }
    `
  )
};
var $26aca173e0984d99$export$1efdf491687cd442 = {
  uniforms: {
    "sceneDepth": {
      value: null
    },
    "resolution": {
      value: new Vector2()
    },
    "near": {
      value: 0.1
    },
    "far": {
      value: 1e3
    },
    "viewMatrixInv": {
      value: new Matrix4()
    },
    "projectionMatrixInv": {
      value: new Matrix4()
    },
    "logDepth": {
      value: false
    },
    "ortho": {
      value: false
    }
  },
  depthWrite: false,
  depthTest: false,
  vertexShader: (
    /* glsl */
    `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position, 1);
    }`
  ),
  fragmentShader: (
    /* glsl */
    `
    uniform highp sampler2D sceneDepth;
    uniform vec2 resolution;
    uniform float near;
    uniform float far;
    uniform bool logDepth;
    uniform bool ortho;
    uniform mat4 viewMatrixInv;
    uniform mat4 projectionMatrixInv;
    varying vec2 vUv;
    layout(location = 1) out vec4 gNormal;
    vec3 getWorldPosLog(vec3 posS) {
        vec2 uv = posS.xy;
        float z = posS.z;
        float nearZ =near;
        float farZ = far;
        float depth = pow(2.0, z * log2(farZ + 1.0)) - 1.0;
        float a = farZ / (farZ - nearZ);
        float b = farZ * nearZ / (nearZ - farZ);
        float linDepth = a + b / depth;
        vec4 clipVec = vec4(uv, linDepth, 1.0) * 2.0 - 1.0;
        vec4 wpos = projectionMatrixInv * clipVec;
        return wpos.xyz / wpos.w;
      }
      vec3 getWorldPos(float depth, vec2 coord) {
        if (logDepth && !ortho) {
          return getWorldPosLog(vec3(coord, depth));
        }
        float z = depth * 2.0 - 1.0;
        vec4 clipSpacePosition = vec4(coord * 2.0 - 1.0, z, 1.0);
        vec4 viewSpacePosition = projectionMatrixInv * clipSpacePosition;
        // Perspective division
       vec4 worldSpacePosition = viewSpacePosition;
       worldSpacePosition.xyz /= worldSpacePosition.w;
        return worldSpacePosition.xyz;
    }
  
    vec3 computeNormal(vec3 worldPos, vec2 vUv) {
      ivec2 p = ivec2(vUv * resolution);
      float c0 = texelFetch(sceneDepth, p, 0).x;
      float l2 = texelFetch(sceneDepth, p - ivec2(2, 0), 0).x;
      float l1 = texelFetch(sceneDepth, p - ivec2(1, 0), 0).x;
      float r1 = texelFetch(sceneDepth, p + ivec2(1, 0), 0).x;
      float r2 = texelFetch(sceneDepth, p + ivec2(2, 0), 0).x;
      float b2 = texelFetch(sceneDepth, p - ivec2(0, 2), 0).x;
      float b1 = texelFetch(sceneDepth, p - ivec2(0, 1), 0).x;
      float t1 = texelFetch(sceneDepth, p + ivec2(0, 1), 0).x;
      float t2 = texelFetch(sceneDepth, p + ivec2(0, 2), 0).x;
  
      float dl = abs((2.0 * l1 - l2) - c0);
      float dr = abs((2.0 * r1 - r2) - c0);
      float db = abs((2.0 * b1 - b2) - c0);
      float dt = abs((2.0 * t1 - t2) - c0);
  
      vec3 ce = getWorldPos(c0, vUv).xyz;
  
      vec3 dpdx = (dl < dr) ? ce - getWorldPos(l1, (vUv - vec2(1.0 / resolution.x, 0.0))).xyz
                            : -ce + getWorldPos(r1, (vUv + vec2(1.0 / resolution.x, 0.0))).xyz;
      vec3 dpdy = (db < dt) ? ce - getWorldPos(b1, (vUv - vec2(0.0, 1.0 / resolution.y))).xyz
                            : -ce + getWorldPos(t1, (vUv + vec2(0.0, 1.0 / resolution.y))).xyz;
  
      return normalize(cross(dpdx, dpdy));
  }
    void main() {
        vec2 uv = vUv - vec2(0.5) / resolution;
        vec2 pixelSize = vec2(1.0) / resolution;
        highp vec2[4] uvSamples;
        uvSamples[0] = uv;
        uvSamples[1] = uv + vec2(pixelSize.x, 0.0);
        uvSamples[2] = uv + vec2(0.0, pixelSize.y);
        uvSamples[3] = uv + pixelSize;
        float depth00 = texture2D(sceneDepth, uvSamples[0]).r;
        float depth10 = texture2D(sceneDepth, uvSamples[1]).r;
        float depth01 = texture2D(sceneDepth, uvSamples[2]).r;
        float depth11 = texture2D(sceneDepth, uvSamples[3]).r;
        float minDepth = min(min(depth00, depth10), min(depth01, depth11));
        float maxDepth = max(max(depth00, depth10), max(depth01, depth11));
        float targetDepth = minDepth;
        // Checkerboard pattern to avoid artifacts
        if (mod(gl_FragCoord.x + gl_FragCoord.y, 2.0) > 0.5) { 
            targetDepth = maxDepth;
        }
        int chosenIndex = 0;
        float[4] samples;
        samples[0] = depth00;
        samples[1] = depth10;
        samples[2] = depth01;
        samples[3] = depth11;
        for(int i = 0; i < 4; ++i) {
            if (samples[i] == targetDepth) {
                chosenIndex = i;
                break;
            }
        }
        gl_FragColor = vec4(samples[chosenIndex], 0.0, 0.0, 1.0);
        gNormal = vec4(computeNormal(
            getWorldPos(samples[chosenIndex], uvSamples[chosenIndex]), uvSamples[chosenIndex]
        ), 0.0);
    }`
  )
};
var $06269ad78f3c5fdf$export$2e2bcd8739ae039 = `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`;
var $ff9437d9c7577f11$var$version = (() => parseInt(REVISION.replace(/\D+/g, "")))();
var $ff9437d9c7577f11$export$156f6a58f569aa09 = $ff9437d9c7577f11$var$version >= 162 ? class extends WebGLRenderTarget {
  constructor(width = 1, height = 1, count = 1, options = {}) {
    super(width, height, {
      ...options,
      count
    });
    this.isWebGLMultipleRenderTargets = true;
  }
  get texture() {
    return this.textures;
  }
} : class extends WebGLRenderTarget {
  constructor(width = 1, height = 1, count = 1, options = {}) {
    super(width, height, options);
    this.isWebGLMultipleRenderTargets = true;
    const texture = this.texture;
    this.texture = [];
    for (let i = 0; i < count; i++) {
      this.texture[i] = texture.clone();
      this.texture[i].isRenderTargetTexture = true;
    }
  }
  setSize(width, height, depth = 1) {
    if (this.width !== width || this.height !== height || this.depth !== depth) {
      this.width = width;
      this.height = height;
      this.depth = depth;
      for (let i = 0, il = this.texture.length; i < il; i++) {
        this.texture[i].image.width = width;
        this.texture[i].image.height = height;
        this.texture[i].image.depth = depth;
      }
      this.dispose();
    }
    this.viewport.set(0, 0, width, height);
    this.scissor.set(0, 0, width, height);
  }
  copy(source) {
    this.dispose();
    this.width = source.width;
    this.height = source.height;
    this.depth = source.depth;
    this.scissor.copy(source.scissor);
    this.scissorTest = source.scissorTest;
    this.viewport.copy(source.viewport);
    this.depthBuffer = source.depthBuffer;
    this.stencilBuffer = source.stencilBuffer;
    if (source.depthTexture !== null) this.depthTexture = source.depthTexture.clone();
    this.texture.length = 0;
    for (let i = 0, il = source.texture.length; i < il; i++) {
      this.texture[i] = source.texture[i].clone();
      this.texture[i].isRenderTargetTexture = true;
    }
    return this;
  }
};
var $87431ee93b037844$var$bluenoiseBits = Uint8Array.from(atob((0, $06269ad78f3c5fdf$export$2e2bcd8739ae039)), (c) => c.charCodeAt(0));
function $87431ee93b037844$var$checkTimerQuery(timerQuery, gl, pass) {
  const available = gl.getQueryParameter(timerQuery, gl.QUERY_RESULT_AVAILABLE);
  if (available) {
    const elapsedTimeInNs = gl.getQueryParameter(timerQuery, gl.QUERY_RESULT);
    const elapsedTimeInMs = elapsedTimeInNs / 1e6;
    pass.lastTime = pass.lastTime === 0 ? elapsedTimeInMs : pass.timeRollingAverage * pass.lastTime + (1 - pass.timeRollingAverage) * elapsedTimeInMs;
  } else
    setTimeout(() => {
      $87431ee93b037844$var$checkTimerQuery(timerQuery, gl, pass);
    }, 1);
}
var $87431ee93b037844$export$2489f9981ab0fa82 = class extends (0, Pass) {
  /**
   * 
   * @param {THREE.Scene} scene
   * @param {THREE.Camera} camera 
   * @param {number} width 
   * @param {number} height
   *  
   * @property {THREE.Scene} scene
   * @property {THREE.Camera} camera
   * @property {number} width
   * @property {number} height
   */
  constructor(scene, camera, width = 512, height = 512) {
    super();
    this.width = width;
    this.height = height;
    this.clear = true;
    this.camera = camera;
    this.scene = scene;
    this.autosetGamma = true;
    this.configuration = new Proxy({
      aoSamples: 16,
      aoRadius: 5,
      aoTones: 0,
      denoiseSamples: 8,
      denoiseRadius: 12,
      distanceFalloff: 1,
      intensity: 5,
      denoiseIterations: 2,
      renderMode: 0,
      biasOffset: 0,
      biasMultiplier: 0,
      color: new Color(0, 0, 0),
      gammaCorrection: true,
      logarithmicDepthBuffer: false,
      screenSpaceRadius: false,
      halfRes: false,
      depthAwareUpsampling: true,
      colorMultiply: true,
      transparencyAware: false,
      accumulate: false
    }, {
      set: (target, propName, value) => {
        const oldProp = target[propName];
        target[propName] = value;
        if (value.equals) {
          if (!value.equals(oldProp)) this.firstFrame();
        } else if (oldProp !== value) this.firstFrame();
        if (propName === "aoSamples" && oldProp !== value) this.configureAOPass(this.configuration.logarithmicDepthBuffer, this.camera.isOrthographicCamera);
        if (propName === "denoiseSamples" && oldProp !== value) this.configureDenoisePass(this.configuration.logarithmicDepthBuffer, this.camera.isOrthographicCamera);
        if (propName === "halfRes" && oldProp !== value) {
          this.configureAOPass(this.configuration.logarithmicDepthBuffer, this.camera.isOrthographicCamera);
          this.configureHalfResTargets();
          this.configureEffectCompositer(this.configuration.logarithmicDepthBuffer, this.camera.isOrthographicCamera);
          this.setSize(this.width, this.height);
        }
        if (propName === "depthAwareUpsampling" && oldProp !== value) this.configureEffectCompositer(this.configuration.logarithmicDepthBuffer, this.camera.isOrthographicCamera);
        if (propName === "gammaCorrection") this.autosetGamma = false;
        if (propName === "transparencyAware" && oldProp !== value) {
          this.autoDetectTransparency = false;
          this.configureTransparencyTarget();
        }
        return true;
      }
    });
    this.samples = [];
    this.samplesDenoise = [];
    this.autoDetectTransparency = true;
    this.frames = 0;
    this.lastViewMatrix = new Matrix4();
    this.lastProjectionMatrix = new Matrix4();
    this.configureEffectCompositer(this.configuration.logarithmicDepthBuffer);
    this.configureSampleDependentPasses();
    this.configureHalfResTargets();
    this.detectTransparency();
    this.configureTransparencyTarget();
    this.copyQuad = new (0, $e4ca8dcb0218f846$export$dcd670d73db751f5)(new ShaderMaterial({
      uniforms: {
        tDiffuse: {
          value: null
        }
      },
      depthWrite: false,
      vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = vec4(position, 1);
            }
            `,
      fragmentShader: `
            uniform sampler2D tDiffuse;
            varying vec2 vUv;
            void main() {
                gl_FragColor = texture2D(tDiffuse, vUv);
            }
            `
    }));
    this.writeTargetInternal = new WebGLRenderTarget(this.width, this.height, {
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      depthBuffer: false,
      format: RGBAFormat
    });
    this.readTargetInternal = new WebGLRenderTarget(this.width, this.height, {
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      depthBuffer: false,
      format: RGBAFormat
    });
    this.outputTargetInternal = new WebGLRenderTarget(this.width, this.height, {
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      depthBuffer: false
    });
    this.accumulationRenderTarget = new WebGLRenderTarget(this.width, this.height, {
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      depthBuffer: false,
      format: RGBAFormat,
      type: HalfFloatType,
      stencilBuffer: false,
      depthBuffer: false,
      alpha: true
    });
    this.accumulationQuad = new (0, $e4ca8dcb0218f846$export$dcd670d73db751f5)(new ShaderMaterial({
      uniforms: {
        frame: {
          value: 0
        },
        tDiffuse: {
          value: null
        }
      },
      transparent: true,
      opacity: 1,
      vertexShader: `
             varying vec2 vUv;
             void main() {
                 vUv = uv;
                 gl_Position = vec4(position, 1);
             }`,
      fragmentShader: `
             uniform sampler2D tDiffuse;
             uniform float frame;
                varying vec2 vUv;
                void main() {
                    vec4 color = texture2D(tDiffuse, vUv);
                    gl_FragColor = vec4(color.rgb, 1.0 / (frame + 1.0));
                }
                `
    }));
    this.bluenoise = new DataTexture($87431ee93b037844$var$bluenoiseBits, 128, 128);
    this.bluenoise.colorSpace = NoColorSpace;
    this.bluenoise.wrapS = RepeatWrapping;
    this.bluenoise.wrapT = RepeatWrapping;
    this.bluenoise.minFilter = NearestFilter;
    this.bluenoise.magFilter = NearestFilter;
    this.bluenoise.needsUpdate = true;
    this.lastTime = 0;
    this.timeRollingAverage = 0.99;
    this.needsDepthTexture = true;
    this.needsSwap = true;
    this._r = new Vector2();
    this._c = new Color();
  }
  configureHalfResTargets() {
    this.firstFrame();
    if (this.configuration.halfRes) {
      this.depthDownsampleTarget = new (0, $ff9437d9c7577f11$export$156f6a58f569aa09)(this.width / 2, this.height / 2, 2);
      if (REVISION <= 161) this.depthDownsampleTarget.textures = this.depthDownsampleTarget.texture;
      this.depthDownsampleTarget.textures[0].format = RedFormat;
      this.depthDownsampleTarget.textures[0].type = FloatType;
      this.depthDownsampleTarget.textures[0].minFilter = NearestFilter;
      this.depthDownsampleTarget.textures[0].magFilter = NearestFilter;
      this.depthDownsampleTarget.textures[0].depthBuffer = false;
      this.depthDownsampleTarget.textures[1].format = RGBAFormat;
      this.depthDownsampleTarget.textures[1].type = HalfFloatType;
      this.depthDownsampleTarget.textures[1].minFilter = NearestFilter;
      this.depthDownsampleTarget.textures[1].magFilter = NearestFilter;
      this.depthDownsampleTarget.textures[1].depthBuffer = false;
      this.depthDownsampleQuad = new (0, $e4ca8dcb0218f846$export$dcd670d73db751f5)(new ShaderMaterial((0, $26aca173e0984d99$export$1efdf491687cd442)));
    } else {
      if (this.depthDownsampleTarget) {
        this.depthDownsampleTarget.dispose();
        this.depthDownsampleTarget = null;
      }
      if (this.depthDownsampleQuad) {
        this.depthDownsampleQuad.dispose();
        this.depthDownsampleQuad = null;
      }
    }
  }
  detectTransparency() {
    if (this.autoDetectTransparency) {
      let isTransparency = false;
      this.scene.traverse((obj) => {
        if (obj.material && obj.material.transparent) isTransparency = true;
      });
      if (isTransparency) this.configuration.transparencyAware = true;
    }
  }
  configureTransparencyTarget() {
    if (this.configuration.transparencyAware) {
      this.transparencyRenderTargetDWFalse = new WebGLRenderTarget(this.width, this.height, {
        minFilter: LinearFilter,
        magFilter: NearestFilter,
        type: HalfFloatType,
        format: RGBAFormat
      });
      this.transparencyRenderTargetDWTrue = new WebGLRenderTarget(this.width, this.height, {
        minFilter: LinearFilter,
        magFilter: NearestFilter,
        type: HalfFloatType,
        format: RGBAFormat
      });
      this.transparencyRenderTargetDWTrue.depthTexture = new DepthTexture(this.width, this.height, UnsignedIntType);
      this.depthCopyPass = new (0, $e4ca8dcb0218f846$export$dcd670d73db751f5)(new ShaderMaterial({
        uniforms: {
          depthTexture: {
            value: this.depthTexture
          }
        },
        vertexShader: (
          /* glsl */
          `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = vec4(position, 1);
            }`
        ),
        fragmentShader: (
          /* glsl */
          `
            uniform sampler2D depthTexture;
            varying vec2 vUv;
            void main() {
               gl_FragDepth = texture2D(depthTexture, vUv).r + 0.00001;
               gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
            }
            `
        )
      }));
    } else {
      if (this.transparencyRenderTargetDWFalse) {
        this.transparencyRenderTargetDWFalse.dispose();
        this.transparencyRenderTargetDWFalse = null;
      }
      if (this.transparencyRenderTargetDWTrue) {
        this.transparencyRenderTargetDWTrue.dispose();
        this.transparencyRenderTargetDWTrue = null;
      }
      if (this.depthCopyPass) {
        this.depthCopyPass.dispose();
        this.depthCopyPass = null;
      }
    }
  }
  renderTransparency(renderer) {
    const oldBackground = this.scene.background;
    const oldClearColor = renderer.getClearColor(new Color());
    const oldClearAlpha = renderer.getClearAlpha();
    const oldVisibility = /* @__PURE__ */ new Map();
    const oldAutoClearDepth = renderer.autoClearDepth;
    this.scene.traverse((obj) => {
      oldVisibility.set(obj, obj.visible);
    });
    this.scene.background = null;
    renderer.autoClearDepth = false;
    renderer.setClearColor(new Color(0, 0, 0), 0);
    this.depthCopyPass.material.uniforms.depthTexture.value = this.depthTexture;
    renderer.setRenderTarget(this.transparencyRenderTargetDWFalse);
    this.scene.traverse((obj) => {
      if (obj.material) obj.visible = oldVisibility.get(obj) && (obj.material.transparent && !obj.material.depthWrite && !obj.userData.treatAsOpaque || !!obj.userData.cannotReceiveAO);
    });
    renderer.clear(true, true, true);
    this.depthCopyPass.render(renderer);
    renderer.render(this.scene, this.camera);
    renderer.setRenderTarget(this.transparencyRenderTargetDWTrue);
    this.scene.traverse((obj) => {
      if (obj.material) obj.visible = oldVisibility.get(obj) && obj.material.transparent && obj.material.depthWrite && !obj.userData.treatAsOpaque;
    });
    renderer.clear(true, true, true);
    this.depthCopyPass.render(renderer);
    renderer.render(this.scene, this.camera);
    this.scene.traverse((obj) => {
      obj.visible = oldVisibility.get(obj);
    });
    renderer.setClearColor(oldClearColor, oldClearAlpha);
    this.scene.background = oldBackground;
    renderer.autoClearDepth = oldAutoClearDepth;
  }
  configureSampleDependentPasses() {
    this.configureAOPass(this.configuration.logarithmicDepthBuffer, this.camera.isOrthographicCamera);
    this.configureDenoisePass(this.configuration.logarithmicDepthBuffer, this.camera.isOrthographicCamera);
  }
  configureAOPass(logarithmicDepthBuffer = false, ortho = false) {
    this.firstFrame();
    this.samples = this.generateHemisphereSamples(this.configuration.aoSamples);
    const e = {
      ...(0, $1ed45968c1160c3c$export$c9b263b9a17dffd7)
    };
    e.fragmentShader = e.fragmentShader.replace("16", this.configuration.aoSamples).replace("16.0", this.configuration.aoSamples + ".0");
    if (logarithmicDepthBuffer) e.fragmentShader = "#define LOGDEPTH\n" + e.fragmentShader;
    if (ortho) e.fragmentShader = "#define ORTHO\n" + e.fragmentShader;
    if (this.configuration.halfRes) e.fragmentShader = "#define HALFRES\n" + e.fragmentShader;
    if (this.effectShaderQuad) {
      this.effectShaderQuad.material.dispose();
      this.effectShaderQuad.material = new ShaderMaterial(e);
    } else this.effectShaderQuad = new (0, $e4ca8dcb0218f846$export$dcd670d73db751f5)(new ShaderMaterial(e));
  }
  configureDenoisePass(logarithmicDepthBuffer = false, ortho = false) {
    this.firstFrame();
    this.samplesDenoise = this.generateDenoiseSamples(this.configuration.denoiseSamples, 11);
    const p2 = {
      ...(0, $e52378cd0f5a973d$export$57856b59f317262e)
    };
    p2.fragmentShader = p2.fragmentShader.replace("16", this.configuration.denoiseSamples);
    if (logarithmicDepthBuffer) p2.fragmentShader = "#define LOGDEPTH\n" + p2.fragmentShader;
    if (ortho) p2.fragmentShader = "#define ORTHO\n" + p2.fragmentShader;
    if (this.poissonBlurQuad) {
      this.poissonBlurQuad.material.dispose();
      this.poissonBlurQuad.material = new ShaderMaterial(p2);
    } else this.poissonBlurQuad = new (0, $e4ca8dcb0218f846$export$dcd670d73db751f5)(new ShaderMaterial(p2));
  }
  configureEffectCompositer(logarithmicDepthBuffer = false, ortho = false) {
    this.firstFrame();
    const e = {
      ...(0, $12b21d24d1192a04$export$a815acccbd2c9a49)
    };
    if (logarithmicDepthBuffer) e.fragmentShader = "#define LOGDEPTH\n" + e.fragmentShader;
    if (ortho) e.fragmentShader = "#define ORTHO\n" + e.fragmentShader;
    if (this.configuration.halfRes && this.configuration.depthAwareUpsampling) e.fragmentShader = "#define HALFRES\n" + e.fragmentShader;
    if (this.effectCompositerQuad) {
      this.effectCompositerQuad.material.dispose();
      this.effectCompositerQuad.material = new ShaderMaterial(e);
    } else this.effectCompositerQuad = new (0, $e4ca8dcb0218f846$export$dcd670d73db751f5)(new ShaderMaterial(e));
  }
  /**
       * 
       * @param {Number} n 
       * @returns {THREE.Vector3[]}
       */
  generateHemisphereSamples(n) {
    const points = [];
    for (let k2 = 0; k2 < n; k2++) {
      const theta = 2.399963 * k2;
      const r = Math.sqrt(k2 + 0.5) / Math.sqrt(n);
      const x = r * Math.cos(theta);
      const y = r * Math.sin(theta);
      const z2 = Math.sqrt(1 - (x * x + y * y));
      points.push(new Vector3(x, y, z2));
    }
    return points;
  }
  /**
       * 
       * @param {number} numSamples 
       * @param {number} numRings 
       * @returns {THREE.Vector2[]}
       */
  generateDenoiseSamples(numSamples, numRings) {
    const angleStep = 2 * Math.PI * numRings / numSamples;
    const invNumSamples = 1 / numSamples;
    const radiusStep = invNumSamples;
    const samples = [];
    let radius = invNumSamples;
    let angle = 0;
    for (let i = 0; i < numSamples; i++) {
      samples.push(new Vector2(Math.cos(angle), Math.sin(angle)).multiplyScalar(Math.pow(radius, 0.75)));
      radius += radiusStep;
      angle += angleStep;
    }
    return samples;
  }
  setSize(width, height) {
    this.firstFrame();
    this.width = width;
    this.height = height;
    const c = this.configuration.halfRes ? 0.5 : 1;
    this.writeTargetInternal.setSize(width * c, height * c);
    this.readTargetInternal.setSize(width * c, height * c);
    this.accumulationRenderTarget.setSize(width * c, height * c);
    if (this.configuration.halfRes) this.depthDownsampleTarget.setSize(width * c, height * c);
    if (this.configuration.transparencyAware) {
      this.transparencyRenderTargetDWFalse.setSize(width, height);
      this.transparencyRenderTargetDWTrue.setSize(width, height);
    }
    this.outputTargetInternal.setSize(width, height);
  }
  setDepthTexture(depthTexture) {
    this.depthTexture = depthTexture;
  }
  firstFrame() {
    this.needsFrame = true;
  }
  render(renderer, inputBuffer, outputBuffer) {
    const xrEnabled = renderer.xr.enabled;
    renderer.xr.enabled = false;
    if (renderer.capabilities.logarithmicDepthBuffer !== this.configuration.logarithmicDepthBuffer) {
      this.configuration.logarithmicDepthBuffer = renderer.capabilities.logarithmicDepthBuffer;
      this.configureAOPass(this.configuration.logarithmicDepthBuffer, this.camera.isOrthographicCamera);
      this.configureDenoisePass(this.configuration.logarithmicDepthBuffer, this.camera.isOrthographicCamera);
      this.configureEffectCompositer(this.configuration.logarithmicDepthBuffer, this.camera.isOrthographicCamera);
    }
    this.detectTransparency();
    if (inputBuffer.texture.type !== this.outputTargetInternal.texture.type || inputBuffer.texture.format !== this.outputTargetInternal.texture.format) {
      this.outputTargetInternal.texture.type = inputBuffer.texture.type;
      this.outputTargetInternal.texture.format = inputBuffer.texture.format;
      this.outputTargetInternal.texture.needsUpdate = true;
    }
    this.camera.updateMatrixWorld();
    if (this.lastViewMatrix.equals(this.camera.matrixWorldInverse) && this.lastProjectionMatrix.equals(this.camera.projectionMatrix) && this.configuration.accumulate && !this.needsFrame) this.frame++;
    else {
      if (this.configuration.accumulate) {
        renderer.setRenderTarget(this.accumulationRenderTarget);
        renderer.clear(true, true, true);
      }
      this.frame = 0;
      this.needsFrame = false;
    }
    this.lastViewMatrix.copy(this.camera.matrixWorldInverse);
    this.lastProjectionMatrix.copy(this.camera.projectionMatrix);
    let gl;
    let ext;
    let timerQuery;
    if (this.debugMode) {
      gl = renderer.getContext();
      ext = gl.getExtension("EXT_disjoint_timer_query_webgl2");
      if (ext === null) {
        console.error("EXT_disjoint_timer_query_webgl2 not available, disabling debug mode.");
        this.debugMode = false;
      }
    }
    if (this.debugMode) {
      timerQuery = gl.createQuery();
      gl.beginQuery(ext.TIME_ELAPSED_EXT, timerQuery);
    }
    if (this.configuration.transparencyAware) this.renderTransparency(renderer);
    this._r.set(this.width, this.height);
    let trueRadius = this.configuration.aoRadius;
    if (this.configuration.halfRes && this.configuration.screenSpaceRadius) trueRadius *= 0.5;
    if (this.frame < 1024 / this.configuration.aoSamples) {
      if (this.configuration.halfRes) {
        renderer.setRenderTarget(this.depthDownsampleTarget);
        this.depthDownsampleQuad.material.uniforms.sceneDepth.value = this.depthTexture;
        this.depthDownsampleQuad.material.uniforms.resolution.value = this._r;
        this.depthDownsampleQuad.material.uniforms["near"].value = this.camera.near;
        this.depthDownsampleQuad.material.uniforms["far"].value = this.camera.far;
        this.depthDownsampleQuad.material.uniforms["projectionMatrixInv"].value = this.camera.projectionMatrixInverse;
        this.depthDownsampleQuad.material.uniforms["viewMatrixInv"].value = this.camera.matrixWorld;
        this.depthDownsampleQuad.material.uniforms["logDepth"].value = this.configuration.logarithmicDepthBuffer;
        this.depthDownsampleQuad.material.uniforms["ortho"].value = this.camera.isOrthographicCamera;
        this.depthDownsampleQuad.render(renderer);
      }
      this.effectShaderQuad.material.uniforms["sceneDiffuse"].value = inputBuffer.texture;
      this.effectShaderQuad.material.uniforms["sceneDepth"].value = this.configuration.halfRes ? this.depthDownsampleTarget.textures[0] : this.depthTexture;
      this.effectShaderQuad.material.uniforms["sceneNormal"].value = this.configuration.halfRes ? this.depthDownsampleTarget.textures[1] : null;
      this.effectShaderQuad.material.uniforms["projMat"].value = this.camera.projectionMatrix;
      this.effectShaderQuad.material.uniforms["viewMat"].value = this.camera.matrixWorldInverse;
      this.effectShaderQuad.material.uniforms["projViewMat"].value = this.camera.projectionMatrix.clone().multiply(this.camera.matrixWorldInverse.clone());
      this.effectShaderQuad.material.uniforms["projectionMatrixInv"].value = this.camera.projectionMatrixInverse;
      this.effectShaderQuad.material.uniforms["viewMatrixInv"].value = this.camera.matrixWorld;
      this.effectShaderQuad.material.uniforms["cameraPos"].value = this.camera.getWorldPosition(new Vector3());
      this.effectShaderQuad.material.uniforms["biasAdjustment"].value = new Vector2(this.configuration.biasOffset, this.configuration.biasMultiplier);
      this.effectShaderQuad.material.uniforms["resolution"].value = this.configuration.halfRes ? this._r.clone().multiplyScalar(0.5).floor() : this._r;
      this.effectShaderQuad.material.uniforms["time"].value = performance.now() / 1e3;
      this.effectShaderQuad.material.uniforms["samples"].value = this.samples;
      this.effectShaderQuad.material.uniforms["bluenoise"].value = this.bluenoise;
      this.effectShaderQuad.material.uniforms["radius"].value = trueRadius;
      this.effectShaderQuad.material.uniforms["distanceFalloff"].value = this.configuration.distanceFalloff;
      this.effectShaderQuad.material.uniforms["near"].value = this.camera.near;
      this.effectShaderQuad.material.uniforms["far"].value = this.camera.far;
      this.effectShaderQuad.material.uniforms["logDepth"].value = renderer.capabilities.logarithmicDepthBuffer;
      this.effectShaderQuad.material.uniforms["ortho"].value = this.camera.isOrthographicCamera;
      this.effectShaderQuad.material.uniforms["screenSpaceRadius"].value = this.configuration.screenSpaceRadius;
      this.effectShaderQuad.material.uniforms["frame"].value = this.frame;
      renderer.setRenderTarget(this.writeTargetInternal);
      this.effectShaderQuad.render(renderer);
      for (let i = 0; i < this.configuration.denoiseIterations; i++) {
        [this.writeTargetInternal, this.readTargetInternal] = [
          this.readTargetInternal,
          this.writeTargetInternal
        ];
        this.poissonBlurQuad.material.uniforms["tDiffuse"].value = this.readTargetInternal.texture;
        this.poissonBlurQuad.material.uniforms["sceneDepth"].value = this.configuration.halfRes ? this.depthDownsampleTarget.textures[0] : this.depthTexture;
        this.poissonBlurQuad.material.uniforms["projMat"].value = this.camera.projectionMatrix;
        this.poissonBlurQuad.material.uniforms["viewMat"].value = this.camera.matrixWorldInverse;
        this.poissonBlurQuad.material.uniforms["projectionMatrixInv"].value = this.camera.projectionMatrixInverse;
        this.poissonBlurQuad.material.uniforms["viewMatrixInv"].value = this.camera.matrixWorld;
        this.poissonBlurQuad.material.uniforms["cameraPos"].value = this.camera.getWorldPosition(new Vector3());
        this.poissonBlurQuad.material.uniforms["resolution"].value = this.configuration.halfRes ? this._r.clone().multiplyScalar(0.5).floor() : this._r;
        this.poissonBlurQuad.material.uniforms["time"].value = performance.now() / 1e3;
        this.poissonBlurQuad.material.uniforms["blueNoise"].value = this.bluenoise;
        this.poissonBlurQuad.material.uniforms["radius"].value = this.configuration.denoiseRadius * (this.configuration.halfRes ? 0.5 : 1);
        this.poissonBlurQuad.material.uniforms["worldRadius"].value = trueRadius;
        this.poissonBlurQuad.material.uniforms["distanceFalloff"].value = this.configuration.distanceFalloff;
        this.poissonBlurQuad.material.uniforms["index"].value = i;
        this.poissonBlurQuad.material.uniforms["poissonDisk"].value = this.samplesDenoise;
        this.poissonBlurQuad.material.uniforms["near"].value = this.camera.near;
        this.poissonBlurQuad.material.uniforms["far"].value = this.camera.far;
        this.poissonBlurQuad.material.uniforms["logDepth"].value = renderer.capabilities.logarithmicDepthBuffer;
        this.poissonBlurQuad.material.uniforms["screenSpaceRadius"].value = this.configuration.screenSpaceRadius;
        renderer.setRenderTarget(this.writeTargetInternal);
        this.poissonBlurQuad.render(renderer);
      }
      renderer.setRenderTarget(this.accumulationRenderTarget);
      const oldAutoClear = renderer.autoClear;
      renderer.autoClear = false;
      this.accumulationQuad.material.uniforms["tDiffuse"].value = this.writeTargetInternal.texture;
      this.accumulationQuad.material.uniforms["frame"].value = this.frame;
      this.accumulationQuad.render(renderer);
      renderer.autoClear = oldAutoClear;
    }
    if (this.configuration.transparencyAware) {
      this.effectCompositerQuad.material.uniforms["transparencyDWFalse"].value = this.transparencyRenderTargetDWFalse.texture;
      this.effectCompositerQuad.material.uniforms["transparencyDWTrue"].value = this.transparencyRenderTargetDWTrue.texture;
      this.effectCompositerQuad.material.uniforms["transparencyDWTrueDepth"].value = this.transparencyRenderTargetDWTrue.depthTexture;
      this.effectCompositerQuad.material.uniforms["transparencyAware"].value = true;
    }
    this.effectCompositerQuad.material.uniforms["sceneDiffuse"].value = inputBuffer.texture;
    this.effectCompositerQuad.material.uniforms["sceneDepth"].value = this.depthTexture;
    this.effectCompositerQuad.material.uniforms["aoTones"].value = this.configuration.aoTones;
    this.effectCompositerQuad.material.uniforms["near"].value = this.camera.near;
    this.effectCompositerQuad.material.uniforms["far"].value = this.camera.far;
    this.effectCompositerQuad.material.uniforms["projectionMatrixInv"].value = this.camera.projectionMatrixInverse;
    this.effectCompositerQuad.material.uniforms["viewMatrixInv"].value = this.camera.matrixWorld;
    this.effectCompositerQuad.material.uniforms["logDepth"].value = renderer.capabilities.logarithmicDepthBuffer;
    this.effectCompositerQuad.material.uniforms["ortho"].value = this.camera.isOrthographicCamera;
    this.effectCompositerQuad.material.uniforms["downsampledDepth"].value = this.configuration.halfRes ? this.depthDownsampleTarget.textures[0] : this.depthTexture;
    this.effectCompositerQuad.material.uniforms["resolution"].value = this._r;
    this.effectCompositerQuad.material.uniforms["blueNoise"].value = this.bluenoise;
    this.effectCompositerQuad.material.uniforms["intensity"].value = this.configuration.intensity;
    this.effectCompositerQuad.material.uniforms["renderMode"].value = this.configuration.renderMode;
    this.effectCompositerQuad.material.uniforms["screenSpaceRadius"].value = this.configuration.screenSpaceRadius;
    this.effectCompositerQuad.material.uniforms["radius"].value = trueRadius;
    this.effectCompositerQuad.material.uniforms["distanceFalloff"].value = this.configuration.distanceFalloff;
    this.effectCompositerQuad.material.uniforms["gammaCorrection"].value = this.autosetGamma ? this.renderToScreen : this.configuration.gammaCorrection;
    this.effectCompositerQuad.material.uniforms["tDiffuse"].value = this.accumulationRenderTarget.texture;
    this.effectCompositerQuad.material.uniforms["color"].value = this._c.copy(this.configuration.color).convertSRGBToLinear();
    this.effectCompositerQuad.material.uniforms["colorMultiply"].value = this.configuration.colorMultiply;
    this.effectCompositerQuad.material.uniforms["cameraPos"].value = this.camera.getWorldPosition(new Vector3());
    this.effectCompositerQuad.material.uniforms["fog"].value = !!this.scene.fog;
    if (this.scene.fog) {
      if (this.scene.fog.isFog) {
        this.effectCompositerQuad.material.uniforms["fogExp"].value = false;
        this.effectCompositerQuad.material.uniforms["fogNear"].value = this.scene.fog.near;
        this.effectCompositerQuad.material.uniforms["fogFar"].value = this.scene.fog.far;
      } else if (this.scene.fog.isFogExp2) {
        this.effectCompositerQuad.material.uniforms["fogExp"].value = true;
        this.effectCompositerQuad.material.uniforms["fogDensity"].value = this.scene.fog.density;
      } else console.error(`Unsupported fog type ${this.scene.fog.constructor.name} in SSAOPass.`);
    }
    renderer.setRenderTarget(
      /* this.renderToScreen ? null :
      outputBuffer*/
      this.outputTargetInternal
    );
    this.effectCompositerQuad.render(renderer);
    renderer.setRenderTarget(this.renderToScreen ? null : outputBuffer);
    this.copyQuad.material.uniforms["tDiffuse"].value = this.outputTargetInternal.texture;
    this.copyQuad.render(renderer);
    if (this.debugMode) {
      gl.endQuery(ext.TIME_ELAPSED_EXT);
      $87431ee93b037844$var$checkTimerQuery(timerQuery, gl, this);
    }
    renderer.xr.enabled = xrEnabled;
  }
  /**
       * Enables the debug mode of the AO, meaning the lastTime value will be updated.
       */
  enableDebugMode() {
    this.debugMode = true;
  }
  /**
       * Disables the debug mode of the AO, meaning the lastTime value will not be updated.
       */
  disableDebugMode() {
    this.debugMode = false;
  }
  /**
       * Sets the display mode of the AO
       * @param {"Combined" | "AO" | "No AO" | "Split" | "Split AO"} mode - The display mode. 
       */
  setDisplayMode(mode) {
    this.configuration.renderMode = [
      "Combined",
      "AO",
      "No AO",
      "Split",
      "Split AO"
    ].indexOf(mode);
  }
  /**
       * 
       * @param {"Performance" | "Low" | "Medium" | "High" | "Ultra"} mode 
       */
  setQualityMode(mode) {
    if (mode === "Performance") {
      this.configuration.aoSamples = 8;
      this.configuration.denoiseSamples = 4;
      this.configuration.denoiseRadius = 12;
    } else if (mode === "Low") {
      this.configuration.aoSamples = 16;
      this.configuration.denoiseSamples = 4;
      this.configuration.denoiseRadius = 12;
    } else if (mode === "Medium") {
      this.configuration.aoSamples = 16;
      this.configuration.denoiseSamples = 8;
      this.configuration.denoiseRadius = 12;
    } else if (mode === "High") {
      this.configuration.aoSamples = 64;
      this.configuration.denoiseSamples = 8;
      this.configuration.denoiseRadius = 6;
    } else if (mode === "Ultra") {
      this.configuration.aoSamples = 64;
      this.configuration.denoiseSamples = 16;
      this.configuration.denoiseRadius = 6;
    }
  }
};
var $05f6997e4b65da14$var$bluenoiseBits = Uint8Array.from(atob((0, $06269ad78f3c5fdf$export$2e2bcd8739ae039)), (c) => c.charCodeAt(0));

// node_modules/@react-three/postprocessing/dist/index.js
var H = (0, import_react.createContext)(null);
function pt({ children: e, enabled: t = true }) {
  const [o, r] = (0, import_react.useState)([]), a = (0, import_react.useMemo)(() => ({ selected: o, select: r, enabled: t }), [o, r, t]);
  return (0, import_jsx_runtime.jsx)(H.Provider, { value: a, children: e });
}
function mt({ enabled: e = false, children: t, ...o }) {
  const r = (0, import_react.useRef)(null), a = (0, import_react.useContext)(H);
  return (0, import_react.useEffect)(() => {
    if (a && e) {
      let n = false;
      const i = [];
      if (r.current.traverse((s) => {
        s.type === "Mesh" && i.push(s), a.selected.indexOf(s) === -1 && (n = true);
      }), n) return a.select((s) => [...s, ...i]), () => {
        a.select((s) => s.filter((l) => !i.includes(l)));
      };
    }
  }, [e, t, a]), (0, import_jsx_runtime.jsx)("group", { ref: r, ...o, children: t });
}
var D = (0, import_react.createContext)(null);
var ie = (e) => (e.getAttributes() & 2) === 2;
var dt = (0, import_react.memo)((0, import_react.forwardRef)(({ children: e, camera: t, scene: o, resolutionScale: r, enabled: a = true, renderPriority: n = 1, autoClear: i = true, depthBuffer: s, enableNormalPass: l, stencilBuffer: p2, multisampling: _ = 8, frameBufferType: S = HalfFloatType }, g) => {
  const { gl: d, scene: m, camera: v, size: x } = useThree(), f = o || m, u = t || v, [c, U, b] = (0, import_react.useMemo)(() => {
    const C = new EffectComposer(d, { depthBuffer: s, stencilBuffer: p2, multisampling: _, frameBufferType: S });
    C.addPass(new RenderPass(f, u));
    let R = null, E = null;
    return l && (E = new NormalPass(f, u), E.enabled = false, C.addPass(E), r !== void 0 && (R = new DepthDownsamplingPass({ normalBuffer: E.texture, resolutionScale: r }), R.enabled = false, C.addPass(R))), [C, E, R];
  }, [u, d, s, p2, _, S, f, l, r]);
  (0, import_react.useEffect)(() => c == null ? void 0 : c.setSize(x.width, x.height), [c, x]), useFrame((C, R) => {
    if (a) {
      const E = d.autoClear;
      d.autoClear = i, p2 && !i && d.clearStencil(), c.render(R), d.autoClear = E;
    }
  }, a ? n : 0);
  const F = (0, import_react.useRef)(null);
  (0, import_react.useLayoutEffect)(() => {
    var _a;
    const C = [], R = F.current.__r3f;
    if (R && c) {
      const E = R.children;
      for (let T = 0; T < E.length; T++) {
        const N = E[T].object;
        if (N instanceof Effect) {
          const q = [N];
          if (!ie(N)) {
            let G = null;
            for (; (G = (_a = E[T + 1]) == null ? void 0 : _a.object) instanceof Effect && !ie(G); ) q.push(G), T++;
          }
          const $ = new EffectPass(u, ...q);
          C.push($);
        } else N instanceof Pass && C.push(N);
      }
      for (const T of C) c == null ? void 0 : c.addPass(T);
      U && (U.enabled = true), b && (b.enabled = true);
    }
    return () => {
      for (const E of C) c == null ? void 0 : c.removePass(E);
      U && (U.enabled = false), b && (b.enabled = false);
    };
  }, [c, e, u, U, b]), (0, import_react.useEffect)(() => {
    const C = d.toneMapping;
    return d.toneMapping = NoToneMapping, () => {
      d.toneMapping = C;
    };
  }, [d]);
  const X = (0, import_react.useMemo)(() => ({ composer: c, normalPass: U, downSamplingPass: b, resolutionScale: r, camera: u, scene: f }), [c, U, b, r, u, f]);
  return (0, import_react.useImperativeHandle)(g, () => c, [c]), (0, import_jsx_runtime.jsx)(D.Provider, { value: X, children: (0, import_jsx_runtime.jsx)("group", { ref: F, children: e }) });
}));
var k = (e) => typeof e == "object" && e != null && "current" in e ? e.current : e;
var vt = 0;
var le = /* @__PURE__ */ new WeakMap();
var P = (e, t) => function({ blendFunction: o = t == null ? void 0 : t.blendFunction, opacity: r = t == null ? void 0 : t.opacity, ...a }) {
  let n = le.get(e);
  if (!n) {
    const l = `@react-three/postprocessing/${e.name}-${vt++}`;
    extend({ [l]: e }), le.set(e, n = l);
  }
  const i = useThree((l) => l.camera), s = import_react.default.useMemo(() => [...(t == null ? void 0 : t.args) ?? [], ...a.args ?? [{ ...t, ...a }]], [JSON.stringify(a)]);
  return (0, import_jsx_runtime.jsx)(n, { camera: i, "blendMode-blendFunction": o, "blendMode-opacity-value": r, ...a, args: s });
};
var Z = (e, t) => {
  const o = e[t];
  return import_react.default.useMemo(() => typeof o == "number" ? new Vector2(o, o) : o ? new Vector2(...o) : new Vector2(), [o]);
};
var ce = (0, import_react.forwardRef)(function({ blendFunction: e, worldFocusDistance: t, worldFocusRange: o, focusDistance: r, focusRange: a, focalLength: n, bokehScale: i, resolutionScale: s, resolutionX: l, resolutionY: p2, width: _, height: S, target: g, depthTexture: d, ...m }, v) {
  const { camera: x } = (0, import_react.useContext)(D), f = g != null, u = (0, import_react.useMemo)(() => {
    const c = new DepthOfFieldEffect(x, { blendFunction: e, worldFocusDistance: t, worldFocusRange: o, focusDistance: r, focusRange: a, focalLength: n, bokehScale: i, resolutionScale: s, resolutionX: l, resolutionY: p2, width: _, height: S });
    f && (c.target = new Vector3()), d && c.setDepthTexture(d.texture, d.packing);
    const U = c.maskPass;
    return U.maskFunction = MaskFunction.MULTIPLY_RGB_SET_ALPHA, c;
  }, [x, e, t, o, r, a, n, i, s, l, p2, _, S, f, d]);
  return (0, import_react.useEffect)(() => () => {
    u.dispose();
  }, [u]), (0, import_jsx_runtime.jsx)("primitive", { ...m, ref: v, object: u, target: g });
});
var ht = (0, import_react.forwardRef)(({ target: e = void 0, mouse: t = false, debug: o = void 0, manual: r = false, smoothTime: a = 0.25, ...n }, i) => {
  const s = (0, import_react.useRef)(null), l = (0, import_react.useRef)(null), p2 = (0, import_react.useRef)(null), _ = useThree(({ scene: b }) => b), S = useThree(({ pointer: b }) => b), { composer: g, camera: d } = (0, import_react.useContext)(D), [m] = (0, import_react.useState)(() => new DepthPickingPass()), [v] = (0, import_react.useState)(() => new CopyPass());
  (0, import_react.useEffect)(() => (g.addPass(m), g.addPass(v), () => {
    g.removePass(m), g.removePass(v);
  }), [g, m, v]), (0, import_react.useEffect)(() => () => {
    m.dispose(), v.dispose();
  }, [m, v]);
  const [x] = (0, import_react.useState)(() => new Vector3(0, 0, 0)), [f] = (0, import_react.useState)(() => new Vector3(0, 0, 0)), u = (0, import_react.useCallback)(async (b, F) => (f.x = b, f.y = F, f.z = await m.readDepth(f), f.z = f.z * 2 - 1, 1 - f.z > 1e-7 ? f.unproject(d) : false), [f, m, d]), c = (0, import_react.useCallback)(async (b, F = true) => {
    var _a;
    if (e) x.set(...e);
    else {
      const { x: X, y: C } = t ? S : { x: 0, y: 0 }, R = await u(X, C);
      R && x.copy(R);
    }
    F && ((_a = s.current) == null ? void 0 : _a.target) && (a > 0 && b > 0 ? easing.damp3(s.current.target, x, a, b) : s.current.target.copy(x));
  }, [e, x, t, u, a, S]);
  useFrame(async (b, F) => {
    var _a;
    r || c(F), l.current && l.current.position.copy(x), p2.current && ((_a = s.current) == null ? void 0 : _a.target) && p2.current.position.copy(s.current.target);
  });
  const U = (0, import_react.useMemo)(() => ({ dofRef: s, hitpoint: x, update: c }), [x, c]);
  return (0, import_react.useImperativeHandle)(i, () => U, [U]), (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [o ? createPortal((0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsxs)("mesh", { ref: l, children: [(0, import_jsx_runtime.jsx)("sphereGeometry", { args: [o, 16, 16] }), (0, import_jsx_runtime.jsx)("meshBasicMaterial", { color: "#00ff00", opacity: 1, transparent: true, depthWrite: false })] }), (0, import_jsx_runtime.jsxs)("mesh", { ref: p2, children: [(0, import_jsx_runtime.jsx)("sphereGeometry", { args: [o / 2, 16, 16] }), (0, import_jsx_runtime.jsx)("meshBasicMaterial", { color: "#00ff00", opacity: 0.5, transparent: true, depthWrite: false })] })] }), _) : null, (0, import_jsx_runtime.jsx)(ce, { ref: s, ...n, target: x })] });
});
var _t = { fragmentShader: `
    uniform float time;
    uniform vec2 lensPosition;
    uniform vec2 screenRes;
    uniform vec3 colorGain;
    uniform float starPoints;
    uniform float glareSize;
    uniform float flareSize;
    uniform float flareSpeed;
    uniform float flareShape;
    uniform float haloScale;
    uniform float opacity;
    uniform bool animated;
    uniform bool anamorphic;
    uniform bool enabled;
    uniform bool secondaryGhosts;
    uniform bool starBurst;
    uniform float ghostScale;
    uniform bool aditionalStreaks;
    uniform sampler2D lensDirtTexture;
    vec2 vTexCoord;
    
    float rand(float n){return fract(sin(n) * 43758.5453123);}

    float noise(float p){
      float fl = floor(p);
      float fc = fract(p);
      return mix(rand(fl),rand(fl + 1.0), fc);
    }

    vec3 hsv2rgb(vec3 c)
    {
      vec4 k = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + k.xyz) * 6.0 - k.www);
      return c.z * mix(k.xxx, clamp(p - k.xxx, 0.0, 1.0), c.y);
    }

    float saturate(float x)
    {
      return clamp(x, 0.,1.);
    }

    vec2 rotateUV(vec2 uv, float rotation)
    {
      return vec2(
          cos(rotation) * uv.x + sin(rotation) * uv.y,
          cos(rotation) * uv.y - sin(rotation) * uv.x
      );
    }

    // Based on https://www.shadertoy.com/view/XtKfRV
    vec3 drawflare(vec2 p, float intensity, float rnd, float speed, int id)
    {
      float flarehueoffset = (1. / 32.) * float(id) * 0.1;
      float lingrad = distance(vec2(0.), p);
      float expgrad = 1. / exp(lingrad * (fract(rnd) * 0.66 + 0.33));
      vec3 colgrad = hsv2rgb(vec3( fract( (expgrad * 8.) + speed * flareSpeed + flarehueoffset), pow(1.-abs(expgrad*2.-1.), 0.45), 20.0 * expgrad * intensity)); //rainbow spectrum effect

      float internalStarPoints;

      if(anamorphic){
        internalStarPoints = 1.0;
      } else{
        internalStarPoints = starPoints;
      }
      
      float blades = length(p * flareShape * sin(internalStarPoints * atan(p.x, p.y)));
      
      float comp = pow(1.-saturate(blades), ( anamorphic ? 100. : 12.));
      comp += saturate(expgrad-0.9) * 3.;
      comp = pow(comp * expgrad, 8. + (1.-intensity) * 5.);
      
      if(flareSpeed > 0.0){
        return vec3(comp) * colgrad;
      } else{
        return vec3(comp) * flareSize * 15.;
      }
    }

    float dist(vec3 a, vec3 b) { return abs(a.x - b.x) + abs(a.y - b.y) + abs(a.z - b.z); }

    vec3 saturate(vec3 x)
    {
      return clamp(x, vec3(0.0), vec3(1.0));
    }

    // Based on https://www.shadertoy.com/view/XtKfRV
    float glare(vec2 uv, vec2 pos, float size)
    {
      vec2 main;

      if(animated){
        main = rotateUV(uv-pos, time * 0.1);      
      } else{
        main = uv-pos;     
      }
      
      float ang = atan(main.y, main.x) * (anamorphic ? 1.0 : starPoints);
      float dist = length(main); 
      dist = pow(dist, .9);
      
      float f0 = 1.0/(length(uv-pos)*(1.0/size*16.0)+.2);

      return f0+f0*(sin((ang))*.2 +.3);
    }

    float sdHex(vec2 p){
      p = abs(p);
      vec2 q = vec2(p.x*2.0*0.5773503, p.y + p.x*0.5773503);
      return dot(step(q.xy,q.yx), 1.0-q.yx);
    }

    //Based on https://www.shadertoy.com/view/dllSRX
    float fpow(float x, float k){
      return x > k ? pow((x-k)/(1.0-k),2.0) : 0.0;
    }

    vec3 renderhex(vec2 uv, vec2 p, float s, vec3 col){
      uv -= p;
      if (abs(uv.x) < 0.2*s && abs(uv.y) < 0.2*s){
          return mix(vec3(0),mix(vec3(0),col,0.1 + fpow(length(uv/s),0.1)*10.0),smoothstep(0.0,0.1,sdHex(uv*20.0/s)));
      }
      return vec3(0);
    }

    // Based on https://www.shadertoy.com/view/4sX3Rs
    vec3 LensFlare(vec2 uv, vec2 pos)
    {
      vec2 main = uv-pos;
      vec2 uvd = uv*(length(uv));
      
      float ang = atan(main.x,main.y);
      
      float f0 = .3/(length(uv-pos)*16.0+1.0);
      
      f0 = f0*(sin(noise(sin(ang*3.9-(animated ? time : 0.0) * 0.3) * starPoints))*.2 );
      
      float f1 = max(0.01-pow(length(uv+1.2*pos),1.9),.0)*7.0;

      float f2 = max(.9/(10.0+32.0*pow(length(uvd+0.99*pos),2.0)),.0)*0.35;
      float f22 = max(.9/(11.0+32.0*pow(length(uvd+0.85*pos),2.0)),.0)*0.23;
      float f23 = max(.9/(12.0+32.0*pow(length(uvd+0.95*pos),2.0)),.0)*0.6;
      
      vec2 uvx = mix(uv,uvd, 0.1);
      
      float f4 = max(0.01-pow(length(uvx+0.4*pos),2.9),.0)*4.02;
      float f42 = max(0.0-pow(length(uvx+0.45*pos),2.9),.0)*4.1;
      float f43 = max(0.01-pow(length(uvx+0.5*pos),2.9),.0)*4.6;
      
      uvx = mix(uv,uvd,-.4);
      
      float f5 = max(0.01-pow(length(uvx+0.1*pos),5.5),.0)*2.0;
      float f52 = max(0.01-pow(length(uvx+0.2*pos),5.5),.0)*2.0;
      float f53 = max(0.01-pow(length(uvx+0.1*pos),5.5),.0)*2.0;
      
      uvx = mix(uv,uvd, 2.1);
      
      float f6 = max(0.01-pow(length(uvx-0.3*pos),1.61),.0)*3.159;
      float f62 = max(0.01-pow(length(uvx-0.325*pos),1.614),.0)*3.14;
      float f63 = max(0.01-pow(length(uvx-0.389*pos),1.623),.0)*3.12;
      
      vec3 c = vec3(glare(uv,pos, glareSize));

      vec2 prot;

      if(animated){
        prot = rotateUV(uv - pos, (time * 0.1));  
      } else if(anamorphic){
        prot = rotateUV(uv - pos, 1.570796);     
      } else {
        prot = uv - pos;
      }

      c += drawflare(prot, (anamorphic ? flareSize * 10. : flareSize), 0.1, time, 1);
      
      c.r+=f1+f2+f4+f5+f6; c.g+=f1+f22+f42+f52+f62; c.b+=f1+f23+f43+f53+f63;
      c = c*1.3 * vec3(length(uvd)+.09);
      c+=vec3(f0);
      
      return c;
    }

    vec3 cc(vec3 color, float factor,float factor2)
    {
      float w = color.x+color.y+color.z;
      return mix(color,vec3(w)*factor,w*factor2);
    }    

    float rnd(vec2 p)
    {
      float f = fract(sin(dot(p, vec2(12.1234, 72.8392) )*45123.2));
      return f;   
    }

    float rnd(float w)
    {
      float f = fract(sin(w)*1000.);
      return f;   
    }

    float regShape(vec2 p, int N)
    {
      float f;
      
      float a=atan(p.x,p.y)+.2;
      float b=6.28319/float(N);
      f=smoothstep(.5,.51, cos(floor(.5+a/b)*b-a)*length(p.xy)* 2.0  -ghostScale);
          
      return f;
    }

    // Based on https://www.shadertoy.com/view/Xlc3D2
    vec3 circle(vec2 p, float size, float decay, vec3 color, vec3 color2, float dist, vec2 position)
    {
      float l = length(p + position*(dist*2.))+size/2.;
      float l2 = length(p + position*(dist*4.))+size/3.;
      
      float c = max(0.01-pow(length(p + position*dist), size*ghostScale), 0.0)*10.;
      float c1 = max(0.001-pow(l-0.3, 1./40.)+sin(l*20.), 0.0)*3.;
      float c2 =  max(0.09/pow(length(p-position*dist/.5)*1., .95), 0.0)/20.;
      float s = max(0.02-pow(regShape(p*5. + position*dist*5. + decay, 6) , 1.), 0.0)*1.5;
      
      color = cos(vec3(0.44, .24, .2)*16. + dist/8.)*0.5+.5;
      vec3 f = c*color;
      f += c1*color;
      f += c2*color;  
      f +=  s*color;
      return f;
    }

    vec4 getLensColor(float x){
      return vec4(vec3(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(vec3(0., 0., 0.),
        vec3(0., 0., 0.), smoothstep(0.0, 0.063, x)),
        vec3(0., 0., 0.), smoothstep(0.063, 0.125, x)),
        vec3(0.0, 0., 0.), smoothstep(0.125, 0.188, x)),
        vec3(0.188, 0.131, 0.116), smoothstep(0.188, 0.227, x)),
        vec3(0.31, 0.204, 0.537), smoothstep(0.227, 0.251, x)),
        vec3(0.192, 0.106, 0.286), smoothstep(0.251, 0.314, x)),
        vec3(0.102, 0.008, 0.341), smoothstep(0.314, 0.392, x)),
        vec3(0.086, 0.0, 0.141), smoothstep(0.392, 0.502, x)),
        vec3(1.0, 0.31, 0.0), smoothstep(0.502, 0.604, x)),
        vec3(.1, 0.1, 0.1), smoothstep(0.604, 0.643, x)),
        vec3(1.0, 0.929, 0.0), smoothstep(0.643, 0.761, x)),
        vec3(1.0, 0.086, 0.424), smoothstep(0.761, 0.847, x)),
        vec3(1.0, 0.49, 0.0), smoothstep(0.847, 0.89, x)),
        vec3(0.945, 0.275, 0.475), smoothstep(0.89, 0.941, x)),
        vec3(0.251, 0.275, 0.796), smoothstep(0.941, 1.0, x))),
      1.0);
    }

    float dirtNoise(vec2 p){
      vec2 f = fract(p);
      f = (f * f) * (3.0 - (2.0 * f));    
      float n = dot(floor(p), vec2(1.0, 157.0));
      vec4 a = fract(sin(vec4(n + 0.0, n + 1.0, n + 157.0, n + 158.0)) * 43758.5453123);
      return mix(mix(a.x, a.y, f.x), mix(a.z, a.w, f.x), f.y);
    } 

    float fbm(vec2 p){
      const mat2 m = mat2(0.80, -0.60, 0.60, 0.80);
      float f = 0.0;
      f += 0.5000*dirtNoise(p); p = m*p*2.02;
      f += 0.2500*dirtNoise(p); p = m*p*2.03;
      f += 0.1250*dirtNoise(p); p = m*p*2.01;
      f += 0.0625*dirtNoise(p);
      return f/0.9375;
    }

    vec4 getLensStar(vec2 p){
      vec2 pp = (p - vec2(0.5)) * 2.0;
      float a = atan(pp.y, pp.x);
      vec4 cp = vec4(sin(a * 1.0), length(pp), sin(a * 13.0), sin(a * 53.0));
      float d = sin(clamp(pow(length(vec2(0.5) - p) * 0.5 + haloScale /2., 5.0), 0.0, 1.0) * 3.14159);
      vec3 c = vec3(d) * vec3(fbm(cp.xy * 16.0) * fbm(cp.zw * 9.0) * max(max(max(max(0.5, sin(a * 1.0)), sin(a * 3.0) * 0.8), sin(a * 7.0) * 0.8), sin(a * 9.0) * 10.6));
      c *= vec3(mix(2.0, (sin(length(pp.xy) * 256.0) * 0.5) + 0.5, sin((clamp((length(pp.xy) - 0.875) / 0.1, 0.0, 1.0) + 0.0) * 2.0 * 3.14159) * 1.5) + 0.5) * 0.3275;
      return vec4(vec3(c * 1.0), d);	
    }

    vec4 getLensDirt(vec2 p){
      p.xy += vec2(fbm(p.yx * 3.0), fbm(p.yx * 2.0)) * 0.0825;
      vec3 o = vec3(mix(0.125, 0.25, max(max(smoothstep(0.1, 0.0, length(p - vec2(0.25))),
                                            smoothstep(0.4, 0.0, length(p - vec2(0.75)))),
                                            smoothstep(0.8, 0.0, length(p - vec2(0.875, 0.125))))));
      o += vec3(max(fbm(p * 1.0) - 0.5, 0.0)) * 0.5;
      o += vec3(max(fbm(p * 2.0) - 0.5, 0.0)) * 0.5;
      o += vec3(max(fbm(p * 4.0) - 0.5, 0.0)) * 0.25;
      o += vec3(max(fbm(p * 8.0) - 0.75, 0.0)) * 1.0;
      o += vec3(max(fbm(p * 16.0) - 0.75, 0.0)) * 0.75;
      o += vec3(max(fbm(p * 64.0) - 0.75, 0.0)) * 0.5;
      return vec4(clamp(o, vec3(0.15), vec3(1.0)), 1.0);	
    }

    vec4 textureLimited(sampler2D tex, vec2 texCoord){
      if(((texCoord.x < 0.) || (texCoord.y < 0.)) || ((texCoord.x > 1.) || (texCoord.y > 1.))){
        return vec4(0.0);
      }else{
        return texture(tex, texCoord); 
      }
    }

    vec4 textureDistorted(sampler2D tex, vec2 texCoord, vec2 direction, vec3 distortion) {
      return vec4(textureLimited(tex, (texCoord + (direction * distortion.r))).r,
                  textureLimited(tex, (texCoord + (direction * distortion.g))).g,
                  textureLimited(tex, (texCoord + (direction * distortion.b))).b,
                  1.0);
    }

    // Based on https://www.shadertoy.com/view/4sK3W3
    vec4 getStartBurst(){
      vec2 aspectTexCoord = vec2(1.0) - (((vTexCoord - vec2(0.5)) * vec2(1.0)) + vec2(0.5)); 
      vec2 texCoord = vec2(1.0) - vTexCoord; 
      vec2 ghostVec = (vec2(0.5) - texCoord) * 0.3 - lensPosition;
      vec2 ghostVecAspectNormalized = normalize(ghostVec * vec2(1.0)) * vec2(1.0);
      vec2 haloVec = normalize(ghostVec) * 0.6;
      vec2 haloVecAspectNormalized = ghostVecAspectNormalized * 0.6;
      vec2 texelSize = vec2(1.0) / vec2(screenRes.xy);
      vec3 distortion = vec3(-(texelSize.x * 1.5), 0.2, texelSize.x * 1.5);
      vec4 c = vec4(0.0);
      for (int i = 0; i < 8; i++) {
        vec2 offset = texCoord + (ghostVec * float(i));
        c += textureDistorted(lensDirtTexture, offset, ghostVecAspectNormalized, distortion) * pow(max(0.0, 1.0 - (length(vec2(0.5) - offset) / length(vec2(0.5)))), 10.0);
      }                       
      vec2 haloOffset = texCoord + haloVecAspectNormalized; 
      return (c * getLensColor((length(vec2(0.5) - aspectTexCoord) / length(vec2(haloScale))))) + 
            (textureDistorted(lensDirtTexture, haloOffset, ghostVecAspectNormalized, distortion) * pow(max(0.0, 1.0 - (length(vec2(0.5) - haloOffset) / length(vec2(0.5)))), 10.0));
    } 

    void mainImage(vec4 inputColor, vec2 uv, out vec4 outputColor)
    {
      vec2 myUV = uv -0.5;
      myUV.y *= screenRes.y/screenRes.x;
      vec2 finalLensPosition = lensPosition * 0.5;
      finalLensPosition.y *= screenRes.y/screenRes.x;
      
      //First Lens flare pass
      vec3 finalColor = LensFlare(myUV, finalLensPosition) * 20.0 * colorGain / 256.;

      //Aditional streaks
      if(aditionalStreaks){
        vec3 circColor = vec3(0.9, 0.2, 0.1);
        vec3 circColor2 = vec3(0.3, 0.1, 0.9);

        for(float i=0.;i<10.;i++){
          finalColor += circle(myUV, pow(rnd(i*2000.)*2.8, .1)+1.41, 0.0, circColor+i , circColor2+i, rnd(i*20.)*3.+0.2-.5, lensPosition);
        }
      }

      //Alternative ghosts
      if(secondaryGhosts){
        vec3 altGhosts = vec3(0);
        altGhosts += renderhex(myUV, -lensPosition*0.25, ghostScale * 1.4, vec3(0.25,0.35,0));
        altGhosts += renderhex(myUV, lensPosition*0.25, ghostScale * 0.5, vec3(1,0.5,0.5));
        altGhosts += renderhex(myUV, lensPosition*0.1, ghostScale * 1.6, vec3(1,1,1));
        altGhosts += renderhex(myUV, lensPosition*1.8, ghostScale * 2.0, vec3(0,0.5,0.75));
        altGhosts += renderhex(myUV, lensPosition*1.25, ghostScale * 0.8, vec3(1,1,0.5));
        altGhosts += renderhex(myUV, -lensPosition*1.25, ghostScale * 5.0, vec3(0.5,0.5,0.25));
        
        //Circular ghosts
        altGhosts += fpow(1.0 - abs(distance(lensPosition*0.8,myUV) - 0.7),0.985)*colorGain / 2100.;
        finalColor += altGhosts;
      }
      

      //Starburst                     
      if(starBurst){
        vTexCoord = myUV + 0.5;
        vec4 lensMod = getLensDirt(myUV);
        float tooBright = 1.0 - (clamp(0.5, 0.0, 0.5) * 2.0); 
        float tooDark = clamp(0.5 - 0.5, 0.0, 0.5) * 2.0;
        lensMod += mix(lensMod, pow(lensMod * 2.0, vec4(2.0)) * 0.5, tooBright);
        float lensStarRotationAngle = ((myUV.x + myUV.y)) * (1.0 / 6.0);
        vec2 lensStarTexCoord = (mat2(cos(lensStarRotationAngle), -sin(lensStarRotationAngle), sin(lensStarRotationAngle), cos(lensStarRotationAngle)) * vTexCoord);
        lensMod += getLensStar(lensStarTexCoord) * 2.;
        
        finalColor += clamp((lensMod.rgb * getStartBurst().rgb ), 0.01, 1.0);
      }

      //Final composed output
      if(enabled){
        outputColor = vec4(mix(finalColor, vec3(.0), opacity) + inputColor.rgb, inputColor.a);
      } else {
        outputColor = vec4(inputColor);
      }
    }
  ` };
var fe = class extends Effect {
  constructor({ blendFunction: t, enabled: o, glareSize: r, lensPosition: a, screenRes: n, starPoints: i, flareSize: s, flareSpeed: l, flareShape: p2, animated: _, anamorphic: S, colorGain: g, lensDirtTexture: d, haloScale: m, secondaryGhosts: v, aditionalStreaks: x, ghostScale: f, opacity: u, starBurst: c }) {
    super("LensFlareEffect", _t.fragmentShader, { blendFunction: t, uniforms: /* @__PURE__ */ new Map([["enabled", new Uniform(o)], ["glareSize", new Uniform(r)], ["lensPosition", new Uniform(a)], ["time", new Uniform(0)], ["screenRes", new Uniform(n)], ["starPoints", new Uniform(i)], ["flareSize", new Uniform(s)], ["flareSpeed", new Uniform(l)], ["flareShape", new Uniform(p2)], ["animated", new Uniform(_)], ["anamorphic", new Uniform(S)], ["colorGain", new Uniform(g)], ["lensDirtTexture", new Uniform(d)], ["haloScale", new Uniform(m)], ["secondaryGhosts", new Uniform(v)], ["aditionalStreaks", new Uniform(x)], ["ghostScale", new Uniform(f)], ["starBurst", new Uniform(c)], ["opacity", new Uniform(u)]]) });
  }
  update(t, o, r) {
    const a = this.uniforms.get("time");
    a && (a.value += r);
  }
};
var xt = P(fe);
var gt = ({ smoothTime: e = 0.07, blendFunction: t = 23, enabled: o = true, glareSize: r = 0.2, lensPosition: a = new Vector3(-25, 6, -60), screenRes: n = new Vector2(0, 0), starPoints: i = 6, flareSize: s = 0.01, flareSpeed: l = 0.01, flareShape: p2 = 0.01, animated: _ = true, anamorphic: S = false, colorGain: g = new Color(20, 20, 20), lensDirtTexture: d = null, haloScale: m = 0.5, secondaryGhosts: v = true, aditionalStreaks: x = true, ghostScale: f = 0, opacity: u = 1, starBurst: c = false }) => {
  const U = useThree(({ viewport: T }) => T), b = useThree(({ raycaster: T }) => T), { scene: F, camera: X } = (0, import_react.useContext)(D), [C] = (0, import_react.useState)(() => new Vector2()), [R] = (0, import_react.useState)(() => new Vector3()), E = (0, import_react.useRef)(null);
  return useFrame((T, N) => {
    var _a, _b, _c;
    if (!(E == null ? void 0 : E.current)) return;
    const q = E.current.uniforms.get("lensPosition"), $ = E.current.uniforms.get("opacity");
    if (!q || !$) return;
    let G = 1;
    if (R.copy(a).project(X), R.z > 1) return;
    q.value.x = R.x, q.value.y = R.y, C.x = R.x, C.y = R.y, b.setFromCamera(C, X);
    const ve = b.intersectObjects(F.children, true), { object: I } = ve[0] || {};
    I && (((_a = I.userData) == null ? void 0 : _a.lensflare) === "no-occlusion" ? G = 0 : I instanceof Mesh && (((_c = (_b = I.material.uniforms) == null ? void 0 : _b._transmission) == null ? void 0 : _c.value) > 0.2 || I.material._transmission && I.material._transmission > 0.2 ? G = 0.2 : I.material.transparent && (G = I.material.opacity))), easing.damp($, "value", G, e, N);
  }), (0, import_react.useEffect)(() => {
    if (!(E == null ? void 0 : E.current)) return;
    const T = E.current.uniforms.get("screenRes");
    T && (T.value.x = U.width, T.value.y = U.height);
  }, [U]), (0, import_jsx_runtime.jsx)(xt, { ref: E, blendFunction: t, enabled: o, glareSize: r, lensPosition: a, screenRes: n, starPoints: i, flareSize: s, flareSpeed: l, flareShape: p2, animated: _, anamorphic: S, colorGain: g, lensDirtTexture: d, haloScale: m, secondaryGhosts: v, aditionalStreaks: x, ghostScale: f, opacity: u, starBurst: c });
};
var wt = P(BloomEffect, { blendFunction: 0 });
var St = P(BrightnessContrastEffect);
var yt = P(ChromaticAberrationEffect);
var Pt = (0, import_react.forwardRef)(function({ blendFunction: e = 23 }, t) {
  const o = (0, import_react.useMemo)(() => new ColorAverageEffect(e), [e]);
  return (0, import_jsx_runtime.jsx)("primitive", { ref: t, object: o, dispose: null });
});
var bt = P(ColorDepthEffect);
var Et = P(DepthEffect);
var Rt = P(DotScreenEffect);
var Ut = (0, import_react.forwardRef)(function({ active: e = true, ...t }, o) {
  const r = useThree((p2) => p2.invalidate), a = Z(t, "delay"), n = Z(t, "duration"), i = Z(t, "strength"), s = Z(t, "chromaticAberrationOffset"), l = (0, import_react.useMemo)(() => new GlitchEffect({ ...t, delay: a, duration: n, strength: i, chromaticAberrationOffset: s }), [a, n, t, i, s]);
  return (0, import_react.useLayoutEffect)(() => {
    l.mode = e ? t.mode || GlitchMode.SPORADIC : GlitchMode.DISABLED, r();
  }, [e, l, r, t.mode]), (0, import_react.useEffect)(() => () => {
    var _a;
    (_a = l.dispose) == null ? void 0 : _a.call(l);
  }, [l]), (0, import_jsx_runtime.jsx)("primitive", { ref: o, object: l, dispose: null });
});
var Ct = (0, import_react.forwardRef)(function(e, t) {
  const { camera: o } = (0, import_react.useContext)(D), r = (0, import_react.useMemo)(() => new GodRaysEffect(o, k(e.sun), e), [o, e]);
  return (0, import_react.useLayoutEffect)(() => void (r.lightSource = k(e.sun)), [r, e.sun]), (0, import_jsx_runtime.jsx)("primitive", { ref: t, object: r, dispose: null });
});
var zt = (0, import_react.forwardRef)(function({ size: e, ...t }, o) {
  const r = useThree((n) => n.invalidate), a = (0, import_react.useMemo)(() => new GridEffect(t), [t]);
  return (0, import_react.useLayoutEffect)(() => {
    e && a.setSize(e.width, e.height), r();
  }, [a, e, r]), (0, import_jsx_runtime.jsx)("primitive", { ref: o, object: a, dispose: null });
});
var Tt = P(HueSaturationEffect);
var At = P(NoiseEffect, { blendFunction: 5 });
var Bt = (0, import_react.forwardRef)(function({ selection: e = [], selectionLayer: t = 10, blendFunction: o, patternTexture: r, edgeStrength: a, pulseSpeed: n, visibleEdgeColor: i, hiddenEdgeColor: s, width: l, height: p2, kernelSize: _, blur: S, xRay: g, ...d }, m) {
  const v = useThree((U) => U.invalidate), { scene: x, camera: f } = (0, import_react.useContext)(D), u = (0, import_react.useMemo)(() => new OutlineEffect(x, f, { blendFunction: o, patternTexture: r, edgeStrength: a, pulseSpeed: n, visibleEdgeColor: i, hiddenEdgeColor: s, width: l, height: p2, kernelSize: _, blur: S, xRay: g, ...d }), [o, S, f, a, p2, s, _, r, n, x, i, l, g]), c = (0, import_react.useContext)(H);
  return (0, import_react.useEffect)(() => {
    if (!c && e) return u.selection.set(Array.isArray(e) ? e.map(k) : [k(e)]), v(), () => {
      u.selection.clear(), v();
    };
  }, [u, e, c, v]), (0, import_react.useEffect)(() => {
    u.selectionLayer = t, v();
  }, [u, v, t]), (0, import_react.useRef)(void 0), (0, import_react.useEffect)(() => {
    var _a;
    if (c && c.enabled && ((_a = c.selected) == null ? void 0 : _a.length)) return u.selection.set(c.selected), v(), () => {
      u.selection.clear(), v();
    };
  }, [c, u.selection, v]), (0, import_react.useEffect)(() => () => {
    u.dispose();
  }, [u]), (0, import_jsx_runtime.jsx)("primitive", { ref: m, object: u });
});
var Vt = (0, import_react.forwardRef)(function({ granularity: e = 5 }, t) {
  const o = (0, import_react.useMemo)(() => new PixelationEffect(e), [e]);
  return (0, import_jsx_runtime.jsx)("primitive", { ref: t, object: o, dispose: null });
});
var Ft = P(ScanlineEffect, { blendFunction: 24, density: 1.25 });
var Mt = (e, t) => e.layers.enable(t.selection.layer);
var Dt = (e, t) => e.layers.disable(t.selection.layer);
var kt = (0, import_react.forwardRef)(function({ selection: e = [], selectionLayer: t = 10, lights: o = [], inverted: r = false, ignoreBackground: a = false, luminanceThreshold: n, luminanceSmoothing: i, intensity: s, width: l, height: p2, kernelSize: _, mipmapBlur: S, ...g }, d) {
  o.length === 0 && console.warn("SelectiveBloom requires lights to work.");
  const m = useThree((c) => c.invalidate), { scene: v, camera: x } = (0, import_react.useContext)(D), f = (0, import_react.useMemo)(() => {
    const c = new SelectiveBloomEffect(v, x, { blendFunction: 0, luminanceThreshold: n, luminanceSmoothing: i, intensity: s, width: l, height: p2, kernelSize: _, mipmapBlur: S, ...g });
    return c.inverted = r, c.ignoreBackground = a, c;
  }, [v, x, n, i, s, l, p2, _, S, r, a, g]), u = (0, import_react.useContext)(H);
  return (0, import_react.useEffect)(() => {
    if (!u && e) return f.selection.set(Array.isArray(e) ? e.map(k) : [k(e)]), m(), () => {
      f.selection.clear(), m();
    };
  }, [f, e, u, m]), (0, import_react.useEffect)(() => {
    f.selection.layer = t, m();
  }, [f, m, t]), (0, import_react.useEffect)(() => {
    if (o && o.length > 0) return o.forEach((c) => Mt(k(c), f)), m(), () => {
      o.forEach((c) => Dt(k(c), f)), m();
    };
  }, [f, m, o, t]), (0, import_react.useEffect)(() => {
    var _a;
    if (u && u.enabled && ((_a = u.selected) == null ? void 0 : _a.length)) return f.selection.set(u.selected), m(), () => {
      f.selection.clear(), m();
    };
  }, [u, f.selection, m]), (0, import_jsx_runtime.jsx)("primitive", { ref: d, object: f, dispose: null });
});
var Gt = P(SepiaEffect);
var It = (0, import_react.forwardRef)(function(e, t) {
  const { camera: o, normalPass: r, downSamplingPass: a, resolutionScale: n } = (0, import_react.useContext)(D), i = (0, import_react.useMemo)(() => r === null && a === null ? (console.error("Please enable the NormalPass in the EffectComposer in order to use SSAO."), {}) : new SSAOEffect(o, r && !a ? r.texture : null, { blendFunction: 21, samples: 30, rings: 4, distanceThreshold: 1, distanceFalloff: 0, rangeThreshold: 0.5, rangeFalloff: 0.1, luminanceInfluence: 0.9, radius: 20, bias: 0.5, intensity: 1, color: void 0, normalDepthBuffer: a ? a.texture : null, resolutionScale: n ?? 1, depthAwareUpsampling: true, ...e }), [o, a, r, n]);
  return (0, import_jsx_runtime.jsx)("primitive", { ref: t, object: i, dispose: null });
});
var Lt = P(SMAAEffect);
var Nt = P(FXAAEffect);
var jt = { fragmentShader: `
    uniform int rampType;

    uniform vec2 rampStart;
    uniform vec2 rampEnd;

    uniform vec4 startColor;
    uniform vec4 endColor;

    uniform float rampBias;
    uniform float rampGain;

    uniform bool rampMask;
    uniform bool rampInvert;

    float getBias(float time, float bias) {
      return time / (((1.0 / bias) - 2.0) * (1.0 - time) + 1.0);
    }

    float getGain(float time, float gain) {
      if (time < 0.5)
        return getBias(time * 2.0, gain) / 2.0;
      else
        return getBias(time * 2.0 - 1.0, 1.0 - gain) / 2.0 + 0.5;
    }

    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
      vec2 centerPixel = uv * resolution;
      vec2 startPixel = rampStart * resolution;
      vec2 endPixel = rampEnd * resolution;

      float rampAlpha;

      if (rampType == 1) {
        vec2 fuv = centerPixel / resolution.y;
        vec2 suv = startPixel / resolution.y;
        vec2 euv = endPixel / resolution.y;

        float radius = length(suv - euv);
        float falloff = length(fuv - suv);
        rampAlpha = smoothstep(0.0, radius, falloff);
      } else {
        float radius = length(startPixel - endPixel);
        vec2 direction = normalize(vec2(endPixel.x - startPixel.x, -(startPixel.y - endPixel.y)));

        float fade = dot(centerPixel - startPixel, direction);
        if (rampType == 2) fade = abs(fade);

        rampAlpha = smoothstep(0.0, 1.0, fade / radius);
      }

      rampAlpha = abs((rampInvert ? 1.0 : 0.0) - getBias(rampAlpha, rampBias) * getGain(rampAlpha, rampGain));

      if (rampMask) {
        vec4 inputBuff = texture2D(inputBuffer, uv);
        outputColor = mix(inputBuff, inputColor, rampAlpha);
      } else {
        outputColor = mix(startColor, endColor, rampAlpha);
      }
    }
  ` };
var ue = ((e) => (e[e.Linear = 0] = "Linear", e[e.Radial = 1] = "Radial", e[e.MirroredLinear = 2] = "MirroredLinear", e))(ue || {});
var pe = class extends Effect {
  constructor({ rampType: t = 0, rampStart: o = [0.5, 0.5], rampEnd: r = [1, 1], startColor: a = [0, 0, 0, 1], endColor: n = [1, 1, 1, 1], rampBias: i = 0.5, rampGain: s = 0.5, rampMask: l = false, rampInvert: p2 = false, ..._ } = {}) {
    super("RampEffect", jt.fragmentShader, { ..._, uniforms: /* @__PURE__ */ new Map([["rampType", new Uniform(t)], ["rampStart", new Uniform(o)], ["rampEnd", new Uniform(r)], ["startColor", new Uniform(a)], ["endColor", new Uniform(n)], ["rampBias", new Uniform(i)], ["rampGain", new Uniform(s)], ["rampMask", new Uniform(l)], ["rampInvert", new Uniform(p2)]]) });
  }
};
var Ot = P(pe);
var Wt = (0, import_react.forwardRef)(function({ textureSrc: e, texture: t, opacity: o = 1, ...r }, a) {
  const n = useLoader(TextureLoader, e);
  (0, import_react.useLayoutEffect)(() => {
    n.colorSpace = SRGBColorSpace, n.wrapS = n.wrapT = RepeatWrapping;
  }, [n]);
  const i = (0, import_react.useMemo)(() => new TextureEffect({ ...r, texture: n || t }), [r, n, t]);
  return (0, import_jsx_runtime.jsx)("primitive", { ref: a, object: i, "blendMode-opacity-value": o, dispose: null });
});
var Xt = P(ToneMappingEffect);
var qt2 = P(VignetteEffect);
var Ht = P(ShockWaveEffect);
var Zt = (0, import_react.forwardRef)(function({ lut: e, tetrahedralInterpolation: t, ...o }, r) {
  const a = (0, import_react.useMemo)(() => new LUT3DEffect(e, o), [e, o]), n = useThree((i) => i.invalidate);
  return (0, import_react.useLayoutEffect)(() => {
    t && (a.tetrahedralInterpolation = t), e && (a.lut = e), n();
  }, [a, n, e, t]), (0, import_jsx_runtime.jsx)("primitive", { ref: r, object: a, dispose: null });
});
var $t = P(TiltShiftEffect, { blendFunction: 0 });
var Kt = { fragmentShader: `

    // original shader by Evan Wallace

    #define MAX_ITERATIONS 100

    uniform float blur;
    uniform float taper;
    uniform vec2 start;
    uniform vec2 end;
    uniform vec2 direction;
    uniform int samples;

    float random(vec3 scale, float seed) {
        /* use the fragment position for a different seed per-pixel */
        return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
    }

    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        vec4 color = vec4(0.0);
        float total = 0.0;
        vec2 startPixel = vec2(start.x * resolution.x, start.y * resolution.y);
        vec2 endPixel = vec2(end.x * resolution.x, end.y * resolution.y);
        float f_samples = float(samples);
        float half_samples = f_samples / 2.0;

        // use screen diagonal to normalize blur radii
        float maxScreenDistance = distance(vec2(0.0), resolution); // diagonal distance
        float gradientRadius = taper * (maxScreenDistance);
        float blurRadius = blur * (maxScreenDistance / 16.0);

        /* randomize the lookup values to hide the fixed number of samples */
        float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
        vec2 normal = normalize(vec2(startPixel.y - endPixel.y, endPixel.x - startPixel.x));
        float radius = smoothstep(0.0, 1.0, abs(dot(uv * resolution - startPixel, normal)) / gradientRadius) * blurRadius;

        #pragma unroll_loop_start
        for (int i = 0; i <= MAX_ITERATIONS; i++) {
            if (i >= samples) { break; } // return early if over sample count
            float f_i = float(i);
            float s_i = -half_samples + f_i;
            float percent = (s_i + offset - 0.5) / half_samples;
            float weight = 1.0 - abs(percent);
            vec4 sample_i = texture2D(inputBuffer, uv + normalize(direction) / resolution * percent * radius);
            /* switch to pre-multiplied alpha to correctly blur transparent images */
            sample_i.rgb *= sample_i.a;
            color += sample_i * weight;
            total += weight;
        }
        #pragma unroll_loop_end

        outputColor = color / total;

        /* switch back from pre-multiplied alpha */
        outputColor.rgb /= outputColor.a + 0.00001;
    }
    ` };
var me = class extends Effect {
  constructor({ blendFunction: t = 23, blur: o = 0.15, taper: r = 0.5, start: a = [0.5, 0], end: n = [0.5, 1], samples: i = 10, direction: s = [1, 1] } = {}) {
    super("TiltShiftEffect", Kt.fragmentShader, { blendFunction: t, attributes: 2, uniforms: /* @__PURE__ */ new Map([["blur", new Uniform(o)], ["taper", new Uniform(r)], ["start", new Uniform(a)], ["end", new Uniform(n)], ["samples", new Uniform(i)], ["direction", new Uniform(s)]]) });
  }
};
var Yt = P(me, { blendFunction: 23 });
var Jt = `
uniform sampler2D uCharacters;
uniform float uCharactersCount;
uniform float uCellSize;
uniform bool uInvert;
uniform vec3 uColor;

const vec2 SIZE = vec2(16.);

vec3 greyscale(vec3 color, float strength) {
    float g = dot(color, vec3(0.299, 0.587, 0.114));
    return mix(color, vec3(g), strength);
}

vec3 greyscale(vec3 color) {
    return greyscale(color, 1.0);
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec2 cell = resolution / uCellSize;
    vec2 grid = 1.0 / cell;
    vec2 pixelizedUV = grid * (0.5 + floor(uv / grid));
    vec4 pixelized = texture2D(inputBuffer, pixelizedUV);
    float greyscaled = greyscale(pixelized.rgb).r;

    if (uInvert) {
        greyscaled = 1.0 - greyscaled;
    }

    float characterIndex = floor((uCharactersCount - 1.0) * greyscaled);
    vec2 characterPosition = vec2(mod(characterIndex, SIZE.x), floor(characterIndex / SIZE.y));
    vec2 offset = vec2(characterPosition.x, -characterPosition.y) / SIZE;
    vec2 charUV = mod(uv * (cell / SIZE), 1.0 / SIZE) - vec2(0., 1.0 / SIZE) + offset;
    vec4 asciiCharacter = texture2D(uCharacters, charUV);

    asciiCharacter.rgb = uColor * asciiCharacter.r;
    asciiCharacter.a = pixelized.a;
    outputColor = asciiCharacter;
}
`;
var Qt = class extends Effect {
  constructor({ font: t = "arial", characters: o = " .:,'-^=*+?!|0#X%WM@", fontSize: r = 54, cellSize: a = 16, color: n = "#ffffff", invert: i = false } = {}) {
    const s = /* @__PURE__ */ new Map([["uCharacters", new Uniform(new Texture())], ["uCellSize", new Uniform(a)], ["uCharactersCount", new Uniform(o.length)], ["uColor", new Uniform(new Color(n))], ["uInvert", new Uniform(i)]]);
    super("ASCIIEffect", Jt, { uniforms: s });
    const l = this.uniforms.get("uCharacters");
    l && (l.value = this.createCharactersTexture(o, t, r));
  }
  createCharactersTexture(t, o, r) {
    const a = document.createElement("canvas"), n = 1024, i = 16, s = n / i;
    a.width = a.height = n;
    const l = new CanvasTexture(a, void 0, RepeatWrapping, RepeatWrapping, NearestFilter, NearestFilter), p2 = a.getContext("2d");
    if (!p2) throw new Error("Context not available");
    p2.clearRect(0, 0, n, n), p2.font = `${r}px ${o}`, p2.textAlign = "center", p2.textBaseline = "middle", p2.fillStyle = "#fff";
    for (let _ = 0; _ < t.length; _++) {
      const S = t[_], g = _ % i, d = Math.floor(_ / i);
      p2.fillText(S, g * s + s / 2, d * s + s / 2);
    }
    return l.needsUpdate = true, l;
  }
};
var eo = (0, import_react.forwardRef)(({ font: e = "arial", characters: t = " .:,'-^=*+?!|0#X%WM@", fontSize: o = 54, cellSize: r = 16, color: a = "#ffffff", invert: n = false }, i) => {
  const s = (0, import_react.useMemo)(() => new Qt({ characters: t, font: e, fontSize: o, cellSize: r, color: a, invert: n }), [t, o, r, a, n, e]);
  return (0, import_jsx_runtime.jsx)("primitive", { ref: i, object: s });
});
var to = { fragmentShader: `
    uniform float factor;

    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
      vec2 vUv = uv;
      float frequency = 6.0 * factor;
      float amplitude = 0.015 * factor;
      float x = vUv.y * frequency + time * 0.7; 
      float y = vUv.x * frequency + time * 0.3;
      vUv.x += cos(x + y) * amplitude * cos(y);
      vUv.y += sin(x - y) * amplitude * cos(y);
      vec4 rgba = texture(inputBuffer, vUv);
      outputColor = rgba;
    }
  ` };
var de = class extends Effect {
  constructor({ blendFunction: t = 23, factor: o = 0 } = {}) {
    super("WaterEffect", to.fragmentShader, { blendFunction: t, attributes: 2, uniforms: /* @__PURE__ */ new Map([["factor", new Uniform(o)]]) });
  }
};
var oo = P(de, { blendFunction: 23 });
var ao = (0, import_react.forwardRef)(({ halfRes: e, screenSpaceRadius: t, quality: o, depthAwareUpsampling: r = true, aoRadius: a = 5, aoSamples: n = 16, denoiseSamples: i = 4, denoiseRadius: s = 12, distanceFalloff: l = 1, intensity: p2 = 1, color: _, renderMode: S = 0 }, g) => {
  const { camera: d, scene: m } = useThree(), v = (0, import_react.useMemo)(() => new $87431ee93b037844$export$2489f9981ab0fa82(m, d), [d, m]);
  return (0, import_react.useLayoutEffect)(() => {
    applyProps(v.configuration, { color: _, aoRadius: a, distanceFalloff: l, intensity: p2, aoSamples: n, denoiseSamples: i, denoiseRadius: s, screenSpaceRadius: t, renderMode: S, halfRes: e, depthAwareUpsampling: r });
  }, [t, _, a, l, p2, n, i, s, S, e, r, v]), (0, import_react.useLayoutEffect)(() => {
    o && v.setQualityMode(o.charAt(0).toUpperCase() + o.slice(1));
  }, [v, o]), (0, import_jsx_runtime.jsx)("primitive", { ref: g, object: v });
});
export {
  eo as ASCII,
  ht as Autofocus,
  wt as Bloom,
  St as BrightnessContrast,
  yt as ChromaticAberration,
  Pt as ColorAverage,
  bt as ColorDepth,
  Et as Depth,
  ce as DepthOfField,
  Rt as DotScreen,
  dt as EffectComposer,
  D as EffectComposerContext,
  Nt as FXAA,
  Ut as Glitch,
  Ct as GodRays,
  zt as Grid,
  Tt as HueSaturation,
  Zt as LUT,
  gt as LensFlare,
  fe as LensFlareEffect,
  ao as N8AO,
  At as Noise,
  Bt as Outline,
  Vt as Pixelation,
  Ot as Ramp,
  pe as RampEffect,
  ue as RampType,
  Lt as SMAA,
  It as SSAO,
  Ft as Scanline,
  mt as Select,
  pt as Selection,
  kt as SelectiveBloom,
  Gt as Sepia,
  Ht as ShockWave,
  Wt as Texture,
  $t as TiltShift,
  Yt as TiltShift2,
  me as TiltShiftEffect,
  Xt as ToneMapping,
  qt2 as Vignette,
  oo as WaterEffect,
  de as WaterEffectImpl,
  k as resolveRef,
  H as selectionContext,
  Z as useVector2,
  P as wrapEffect
};
//# sourceMappingURL=@react-three_postprocessing.js.map
