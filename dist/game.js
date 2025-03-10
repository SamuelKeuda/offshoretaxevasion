(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/kaboom/dist/kaboom.mjs
  var wi = Object.defineProperty;
  var o = /* @__PURE__ */ __name((r, t) => wi(r, "name", { value: t, configurable: true }), "o");
  var ps = (() => {
    for (var r = new Uint8Array(128), t = 0; t < 64; t++)
      r[t < 26 ? t + 65 : t < 52 ? t + 71 : t < 62 ? t - 4 : t * 4 - 205] = t;
    return (u) => {
      for (var p = u.length, E = new Uint8Array((p - (u[p - 1] == "=") - (u[p - 2] == "=")) * 3 / 4 | 0), M = 0, L = 0; M < p; ) {
        var q = r[u.charCodeAt(M++)], Y = r[u.charCodeAt(M++)], U = r[u.charCodeAt(M++)], Q = r[u.charCodeAt(M++)];
        E[L++] = q << 2 | Y >> 4, E[L++] = Y << 4 | U >> 2, E[L++] = U << 6 | Q;
      }
      return E;
    };
  })();
  function Ae(r) {
    return r * Math.PI / 180;
  }
  __name(Ae, "Ae");
  o(Ae, "deg2rad");
  function st(r) {
    return r * 180 / Math.PI;
  }
  __name(st, "st");
  o(st, "rad2deg");
  function Ge(r, t, u) {
    return t > u ? Ge(r, u, t) : Math.min(Math.max(r, t), u);
  }
  __name(Ge, "Ge");
  o(Ge, "clamp");
  function Oe(r, t, u) {
    if (typeof r == "number" && typeof t == "number")
      return r + (t - r) * u;
    if (r instanceof x && t instanceof x)
      return r.lerp(t, u);
    if (r instanceof z && t instanceof z)
      return r.lerp(t, u);
    throw new Error(`Bad value for lerp(): ${r}, ${t}. Only number, Vec2 and Color is supported.`);
  }
  __name(Oe, "Oe");
  o(Oe, "lerp");
  function Fe(r, t, u, p, E) {
    return p + (r - t) / (u - t) * (E - p);
  }
  __name(Fe, "Fe");
  o(Fe, "map");
  function ws(r, t, u, p, E) {
    return Ge(Fe(r, t, u, p, E), p, E);
  }
  __name(ws, "ws");
  o(ws, "mapc");
  var _a;
  var x = (/* @__PURE__ */ __name(_a = class {
    constructor(t = 0, u = t) {
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      this.x = t, this.y = u;
    }
    static fromAngle(t) {
      let u = Ae(t);
      return new _a(Math.cos(u), Math.sin(u));
    }
    clone() {
      return new _a(this.x, this.y);
    }
    add(...t) {
      let u = S(...t);
      return new _a(this.x + u.x, this.y + u.y);
    }
    sub(...t) {
      let u = S(...t);
      return new _a(this.x - u.x, this.y - u.y);
    }
    scale(...t) {
      let u = S(...t);
      return new _a(this.x * u.x, this.y * u.y);
    }
    dist(...t) {
      let u = S(...t);
      return this.sub(u).len();
    }
    sdist(...t) {
      let u = S(...t);
      return this.sub(u).slen();
    }
    len() {
      return Math.sqrt(this.dot(this));
    }
    slen() {
      return this.dot(this);
    }
    unit() {
      let t = this.len();
      return t === 0 ? new _a(0) : this.scale(1 / t);
    }
    normal() {
      return new _a(this.y, -this.x);
    }
    reflect(t) {
      return this.sub(t.scale(2 * this.dot(t)));
    }
    project(t) {
      return t.scale(t.dot(this) / t.len());
    }
    reject(t) {
      return this.sub(this.project(t));
    }
    dot(t) {
      return this.x * t.x + this.y * t.y;
    }
    cross(t) {
      return this.x * t.y - this.y * t.x;
    }
    angle(...t) {
      let u = S(...t);
      return st(Math.atan2(this.y - u.y, this.x - u.x));
    }
    angleBetween(...t) {
      let u = S(...t);
      return st(Math.atan2(this.cross(u), this.dot(u)));
    }
    lerp(t, u) {
      return new _a(Oe(this.x, t.x, u), Oe(this.y, t.y, u));
    }
    slerp(t, u) {
      let p = this.dot(t), E = this.cross(t), M = Math.atan2(E, p);
      return this.scale(Math.sin((1 - u) * M)).add(t.scale(Math.sin(u * M))).scale(1 / E);
    }
    isZero() {
      return this.x === 0 && this.y === 0;
    }
    toFixed(t) {
      return new _a(Number(this.x.toFixed(t)), Number(this.y.toFixed(t)));
    }
    transform(t) {
      return t.multVec2(this);
    }
    eq(t) {
      return this.x === t.x && this.y === t.y;
    }
    bbox() {
      return new ce(this, 0, 0);
    }
    toString() {
      return `vec2(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }
  }, "r"), (() => {
    o(_a, "Vec2");
  })(), __publicField(_a, "LEFT", new _a(-1, 0)), __publicField(_a, "RIGHT", new _a(1, 0)), __publicField(_a, "UP", new _a(0, -1)), __publicField(_a, "DOWN", new _a(0, 1)), _a);
  function S(...r) {
    if (r.length === 1) {
      if (r[0] instanceof x)
        return new x(r[0].x, r[0].y);
      if (Array.isArray(r[0]) && r[0].length === 2)
        return new x(...r[0]);
    }
    return new x(...r);
  }
  __name(S, "S");
  o(S, "vec2");
  var _a2;
  var z = (/* @__PURE__ */ __name(_a2 = class {
    constructor(t, u, p) {
      __publicField(this, "r", 255);
      __publicField(this, "g", 255);
      __publicField(this, "b", 255);
      this.r = Ge(t, 0, 255), this.g = Ge(u, 0, 255), this.b = Ge(p, 0, 255);
    }
    static fromArray(t) {
      return new _a2(t[0], t[1], t[2]);
    }
    static fromHex(t) {
      if (typeof t == "number")
        return new _a2(t >> 16 & 255, t >> 8 & 255, t >> 0 & 255);
      if (typeof t == "string") {
        let u = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return new _a2(parseInt(u[1], 16), parseInt(u[2], 16), parseInt(u[3], 16));
      } else
        throw new Error("Invalid hex color format");
    }
    static fromHSL(t, u, p) {
      if (u == 0)
        return new _a2(255 * p, 255 * p, 255 * p);
      let E = o((Q, h, Z) => (Z < 0 && (Z += 1), Z > 1 && (Z -= 1), Z < 1 / 6 ? Q + (h - Q) * 6 * Z : Z < 1 / 2 ? h : Z < 2 / 3 ? Q + (h - Q) * (2 / 3 - Z) * 6 : Q), "hue2rgb"), M = p < 0.5 ? p * (1 + u) : p + u - p * u, L = 2 * p - M, q = E(L, M, t + 1 / 3), Y = E(L, M, t), U = E(L, M, t - 1 / 3);
      return new _a2(Math.round(q * 255), Math.round(Y * 255), Math.round(U * 255));
    }
    clone() {
      return new _a2(this.r, this.g, this.b);
    }
    lighten(t) {
      return new _a2(this.r + t, this.g + t, this.b + t);
    }
    darken(t) {
      return this.lighten(-t);
    }
    invert() {
      return new _a2(255 - this.r, 255 - this.g, 255 - this.b);
    }
    mult(t) {
      return new _a2(this.r * t.r / 255, this.g * t.g / 255, this.b * t.b / 255);
    }
    lerp(t, u) {
      return new _a2(Oe(this.r, t.r, u), Oe(this.g, t.g, u), Oe(this.b, t.b, u));
    }
    toHSL() {
      let t = this.r / 255, u = this.g / 255, p = this.b / 255, E = Math.max(t, u, p), M = Math.min(t, u, p), L = (E + M) / 2, q = L, Y = L;
      if (E == M)
        L = q = 0;
      else {
        let U = E - M;
        switch (q = Y > 0.5 ? U / (2 - E - M) : U / (E + M), E) {
          case t:
            L = (u - p) / U + (u < p ? 6 : 0);
            break;
          case u:
            L = (p - t) / U + 2;
            break;
          case p:
            L = (t - u) / U + 4;
            break;
        }
        L /= 6;
      }
      return [L, q, Y];
    }
    eq(t) {
      return this.r === t.r && this.g === t.g && this.b === t.b;
    }
    toString() {
      return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
    toHex() {
      return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }
  }, "r"), (() => {
    o(_a2, "Color");
  })(), __publicField(_a2, "RED", new _a2(255, 0, 0)), __publicField(_a2, "GREEN", new _a2(0, 255, 0)), __publicField(_a2, "BLUE", new _a2(0, 0, 255)), __publicField(_a2, "YELLOW", new _a2(255, 255, 0)), __publicField(_a2, "MAGENTA", new _a2(255, 0, 255)), __publicField(_a2, "CYAN", new _a2(0, 255, 255)), __publicField(_a2, "WHITE", new _a2(255, 255, 255)), __publicField(_a2, "BLACK", new _a2(0, 0, 0)), _a2);
  function J(...r) {
    if (r.length === 0)
      return new z(255, 255, 255);
    if (r.length === 1) {
      if (r[0] instanceof z)
        return r[0].clone();
      if (typeof r[0] == "string")
        return z.fromHex(r[0]);
      if (Array.isArray(r[0]) && r[0].length === 3)
        return z.fromArray(r[0]);
    }
    return new z(...r);
  }
  __name(J, "J");
  o(J, "rgb");
  var bs = o((r, t, u) => z.fromHSL(r, t, u), "hsl2rgb");
  var _a3;
  var re = (/* @__PURE__ */ __name(_a3 = class {
    constructor(t, u, p, E) {
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      __publicField(this, "w", 1);
      __publicField(this, "h", 1);
      this.x = t, this.y = u, this.w = p, this.h = E;
    }
    scale(t) {
      return new _a3(this.x + this.w * t.x, this.y + this.h * t.y, this.w * t.w, this.h * t.h);
    }
    pos() {
      return new x(this.x, this.y);
    }
    clone() {
      return new _a3(this.x, this.y, this.w, this.h);
    }
    eq(t) {
      return this.x === t.x && this.y === t.y && this.w === t.w && this.h === t.h;
    }
    toString() {
      return `quad(${this.x}, ${this.y}, ${this.w}, ${this.h})`;
    }
  }, "r"), (() => {
    o(_a3, "Quad");
  })(), _a3);
  function ie(r, t, u, p) {
    return new re(r, t, u, p);
  }
  __name(ie, "ie");
  o(ie, "quad");
  var _a4;
  var Ue = (/* @__PURE__ */ __name(_a4 = class {
    constructor(t) {
      __publicField(this, "m", [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
      t && (this.m = t);
    }
    static translate(t) {
      return new _a4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t.x, t.y, 0, 1]);
    }
    static scale(t) {
      return new _a4([t.x, 0, 0, 0, 0, t.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    static rotateX(t) {
      t = Ae(-t);
      let u = Math.cos(t), p = Math.sin(t);
      return new _a4([1, 0, 0, 0, 0, u, -p, 0, 0, p, u, 0, 0, 0, 0, 1]);
    }
    static rotateY(t) {
      t = Ae(-t);
      let u = Math.cos(t), p = Math.sin(t);
      return new _a4([u, 0, p, 0, 0, 1, 0, 0, -p, 0, u, 0, 0, 0, 0, 1]);
    }
    static rotateZ(t) {
      t = Ae(-t);
      let u = Math.cos(t), p = Math.sin(t);
      return new _a4([u, -p, 0, 0, p, u, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    translate(t) {
      return this.m[12] += this.m[0] * t.x + this.m[4] * t.y, this.m[13] += this.m[1] * t.x + this.m[5] * t.y, this.m[14] += this.m[2] * t.x + this.m[6] * t.y, this.m[15] += this.m[3] * t.x + this.m[7] * t.y, this;
    }
    scale(t) {
      return this.m[0] *= t.x, this.m[4] *= t.y, this.m[1] *= t.x, this.m[5] *= t.y, this.m[2] *= t.x, this.m[6] *= t.y, this.m[3] *= t.x, this.m[7] *= t.y, this;
    }
    rotate(t) {
      t = Ae(-t);
      let u = Math.cos(t), p = Math.sin(t), E = this.m[0], M = this.m[1], L = this.m[4], q = this.m[5];
      return this.m[0] = E * u + M * p, this.m[1] = -E * p + M * u, this.m[4] = L * u + q * p, this.m[5] = -L * p + q * u, this;
    }
    mult(t) {
      let u = [];
      for (let p = 0; p < 4; p++)
        for (let E = 0; E < 4; E++)
          u[p * 4 + E] = this.m[0 * 4 + E] * t.m[p * 4 + 0] + this.m[1 * 4 + E] * t.m[p * 4 + 1] + this.m[2 * 4 + E] * t.m[p * 4 + 2] + this.m[3 * 4 + E] * t.m[p * 4 + 3];
      return new _a4(u);
    }
    multVec2(t) {
      return new x(t.x * this.m[0] + t.y * this.m[4] + this.m[12], t.x * this.m[1] + t.y * this.m[5] + this.m[13]);
    }
    getTranslation() {
      return new x(this.m[12], this.m[13]);
    }
    getScale() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let t = this.m[0] * this.m[5] - this.m[1] * this.m[4], u = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return new x(u, t / u);
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let t = this.m[0] * this.m[5] - this.m[1] * this.m[4], u = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return new x(t / u, u);
      } else
        return new x(0, 0);
    }
    getRotation() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let t = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return st(this.m[1] > 0 ? Math.acos(this.m[0] / t) : -Math.acos(this.m[0] / t));
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let t = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return st(Math.PI / 2 - (this.m[5] > 0 ? Math.acos(-this.m[4] / t) : -Math.acos(this.m[4] / t)));
      } else
        return 0;
    }
    getSkew() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let t = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return new x(Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (t * t), 0);
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let t = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return new x(0, Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (t * t));
      } else
        return new x(0, 0);
    }
    invert() {
      let t = [], u = this.m[10] * this.m[15] - this.m[14] * this.m[11], p = this.m[9] * this.m[15] - this.m[13] * this.m[11], E = this.m[9] * this.m[14] - this.m[13] * this.m[10], M = this.m[8] * this.m[15] - this.m[12] * this.m[11], L = this.m[8] * this.m[14] - this.m[12] * this.m[10], q = this.m[8] * this.m[13] - this.m[12] * this.m[9], Y = this.m[6] * this.m[15] - this.m[14] * this.m[7], U = this.m[5] * this.m[15] - this.m[13] * this.m[7], Q = this.m[5] * this.m[14] - this.m[13] * this.m[6], h = this.m[4] * this.m[15] - this.m[12] * this.m[7], Z = this.m[4] * this.m[14] - this.m[12] * this.m[6], Pe = this.m[5] * this.m[15] - this.m[13] * this.m[7], ae = this.m[4] * this.m[13] - this.m[12] * this.m[5], de = this.m[6] * this.m[11] - this.m[10] * this.m[7], pe = this.m[5] * this.m[11] - this.m[9] * this.m[7], G = this.m[5] * this.m[10] - this.m[9] * this.m[6], Xe = this.m[4] * this.m[11] - this.m[8] * this.m[7], Ie = this.m[4] * this.m[10] - this.m[8] * this.m[6], b = this.m[4] * this.m[9] - this.m[8] * this.m[5];
      t[0] = this.m[5] * u - this.m[6] * p + this.m[7] * E, t[4] = -(this.m[4] * u - this.m[6] * M + this.m[7] * L), t[8] = this.m[4] * p - this.m[5] * M + this.m[7] * q, t[12] = -(this.m[4] * E - this.m[5] * L + this.m[6] * q), t[1] = -(this.m[1] * u - this.m[2] * p + this.m[3] * E), t[5] = this.m[0] * u - this.m[2] * M + this.m[3] * L, t[9] = -(this.m[0] * p - this.m[1] * M + this.m[3] * q), t[13] = this.m[0] * E - this.m[1] * L + this.m[2] * q, t[2] = this.m[1] * Y - this.m[2] * U + this.m[3] * Q, t[6] = -(this.m[0] * Y - this.m[2] * h + this.m[3] * Z), t[10] = this.m[0] * Pe - this.m[1] * h + this.m[3] * ae, t[14] = -(this.m[0] * Q - this.m[1] * Z + this.m[2] * ae), t[3] = -(this.m[1] * de - this.m[2] * pe + this.m[3] * G), t[7] = this.m[0] * de - this.m[2] * Xe + this.m[3] * Ie, t[11] = -(this.m[0] * pe - this.m[1] * Xe + this.m[3] * b), t[15] = this.m[0] * G - this.m[1] * Ie + this.m[2] * b;
      let ue = this.m[0] * t[0] + this.m[1] * t[4] + this.m[2] * t[8] + this.m[3] * t[12];
      for (let ge = 0; ge < 4; ge++)
        for (let ee = 0; ee < 4; ee++)
          t[ge * 4 + ee] *= 1 / ue;
      return new _a4(t);
    }
    clone() {
      return new _a4([...this.m]);
    }
    toString() {
      return this.m.toString();
    }
  }, "r"), (() => {
    o(_a4, "Mat4");
  })(), _a4);
  function Rn(r, t, u, p = (E) => -Math.cos(E)) {
    return r + (p(u) + 1) / 2 * (t - r);
  }
  __name(Rn, "Rn");
  o(Rn, "wave");
  var bi = 1103515245;
  var vi = 12345;
  var gs = 2147483648;
  var _a5;
  var wt = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a5 = class {
    constructor(t) {
      __publicField(this, "seed");
      this.seed = t;
    }
    gen() {
      return this.seed = (bi * this.seed + vi) % gs, this.seed / gs;
    }
    genNumber(t, u) {
      return t + this.gen() * (u - t);
    }
    genVec2(t, u) {
      return new x(this.genNumber(t.x, u.x), this.genNumber(t.y, u.y));
    }
    genColor(t, u) {
      return new z(this.genNumber(t.r, u.r), this.genNumber(t.g, u.g), this.genNumber(t.b, u.b));
    }
    genAny(...t) {
      if (t.length === 0)
        return this.gen();
      if (t.length === 1) {
        if (typeof t[0] == "number")
          return this.genNumber(0, t[0]);
        if (t[0] instanceof x)
          return this.genVec2(S(0, 0), t[0]);
        if (t[0] instanceof z)
          return this.genColor(J(0, 0, 0), t[0]);
      } else if (t.length === 2) {
        if (typeof t[0] == "number" && typeof t[1] == "number")
          return this.genNumber(t[0], t[1]);
        if (t[0] instanceof x && t[1] instanceof x)
          return this.genVec2(t[0], t[1]);
        if (t[0] instanceof z && t[1] instanceof z)
          return this.genColor(t[0], t[1]);
      }
    }
  }, "_this"), (() => {
    o(_a5, "RNG");
  })(), _a5), "wt");
  var Pn = new wt(Date.now());
  function vs(r) {
    return r != null && (Pn.seed = r), Pn.seed;
  }
  __name(vs, "vs");
  o(vs, "randSeed");
  function yt(...r) {
    return Pn.genAny(...r);
  }
  __name(yt, "yt");
  o(yt, "rand");
  function Dn(...r) {
    return Math.floor(yt(...r));
  }
  __name(Dn, "Dn");
  o(Dn, "randi");
  function ys(r) {
    return yt() <= r;
  }
  __name(ys, "ys");
  o(ys, "chance");
  function xs(r) {
    return r[Dn(r.length)];
  }
  __name(xs, "xs");
  o(xs, "choose");
  function Us(r, t) {
    return r.pos.x + r.width > t.pos.x && r.pos.x < t.pos.x + t.width && r.pos.y + r.height > t.pos.y && r.pos.y < t.pos.y + t.height;
  }
  __name(Us, "Us");
  o(Us, "testRectRect");
  function yi(r, t) {
    if (r.p1.x === r.p2.x && r.p1.y === r.p2.y || t.p1.x === t.p2.x && t.p1.y === t.p2.y)
      return null;
    let u = (t.p2.y - t.p1.y) * (r.p2.x - r.p1.x) - (t.p2.x - t.p1.x) * (r.p2.y - r.p1.y);
    if (u === 0)
      return null;
    let p = ((t.p2.x - t.p1.x) * (r.p1.y - t.p1.y) - (t.p2.y - t.p1.y) * (r.p1.x - t.p1.x)) / u, E = ((r.p2.x - r.p1.x) * (r.p1.y - t.p1.y) - (r.p2.y - r.p1.y) * (r.p1.x - t.p1.x)) / u;
    return p < 0 || p > 1 || E < 0 || E > 1 ? null : p;
  }
  __name(yi, "yi");
  o(yi, "testLineLineT");
  function nt(r, t) {
    let u = yi(r, t);
    return u ? S(r.p1.x + u * (r.p2.x - r.p1.x), r.p1.y + u * (r.p2.y - r.p1.y)) : null;
  }
  __name(nt, "nt");
  o(nt, "testLineLine");
  function Es(r, t) {
    if (bt(r, t.p1) || bt(r, t.p2))
      return true;
    let u = r.points();
    return !!nt(t, new De(u[0], u[1])) || !!nt(t, new De(u[1], u[2])) || !!nt(t, new De(u[2], u[3])) || !!nt(t, new De(u[3], u[0]));
  }
  __name(Es, "Es");
  o(Es, "testRectLine");
  function bt(r, t) {
    return t.x > r.pos.x && t.x < r.pos.x + r.width && t.y > r.pos.y && t.y < r.pos.y + r.height;
  }
  __name(bt, "bt");
  o(bt, "testRectPoint");
  function Cs(r, t) {
    let u = t.sub(r.p1), p = r.p2.sub(r.p1);
    if (Math.abs(u.cross(p)) > Number.EPSILON)
      return false;
    let E = u.dot(p) / p.dot(p);
    return E >= 0 && E <= 1;
  }
  __name(Cs, "Cs");
  o(Cs, "testLinePoint");
  function Gn(r, t) {
    let u = r.p2.sub(r.p1), p = u.dot(u), E = r.p1.sub(t.center), M = 2 * u.dot(E), L = E.dot(E) - t.radius * t.radius, q = M * M - 4 * p * L;
    if (p <= Number.EPSILON || q < 0)
      return false;
    if (q == 0) {
      let Y = -M / (2 * p);
      if (Y >= 0 && Y <= 1)
        return true;
    } else {
      let Y = (-M + Math.sqrt(q)) / (2 * p), U = (-M - Math.sqrt(q)) / (2 * p);
      if (Y >= 0 && Y <= 1 || U >= 0 && U <= 1)
        return true;
    }
    return Ss(t, r.p1);
  }
  __name(Gn, "Gn");
  o(Gn, "testLineCircle");
  function Ss(r, t) {
    return r.center.sdist(t) < r.radius * r.radius;
  }
  __name(Ss, "Ss");
  o(Ss, "testCirclePoint");
  function Ts(r, t) {
    let u = t.pts[t.pts.length - 1];
    for (let p of t.pts) {
      if (Gn(new De(u, p), r))
        return true;
      u = p;
    }
    return Ss(r, t.pts[0]) ? true : Fn(t, r.center);
  }
  __name(Ts, "Ts");
  o(Ts, "testCirclePolygon");
  function Fn(r, t) {
    let u = false, p = r.pts;
    for (let E = 0, M = p.length - 1; E < p.length; M = E++)
      p[E].y > t.y != p[M].y > t.y && t.x < (p[M].x - p[E].x) * (t.y - p[E].y) / (p[M].y - p[E].y) + p[E].x && (u = !u);
    return u;
  }
  __name(Fn, "Fn");
  o(Fn, "testPolygonPoint");
  var _a6;
  var De = (/* @__PURE__ */ __name(_a6 = class {
    constructor(t, u) {
      __publicField(this, "p1");
      __publicField(this, "p2");
      this.p1 = t.clone(), this.p2 = u.clone();
    }
    transform(t) {
      return new _a6(t.multVec2(this.p1), t.multVec2(this.p2));
    }
    bbox() {
      return ce.fromPoints(this.p1, this.p2);
    }
    area() {
      return this.p1.dist(this.p2);
    }
    clone() {
      return new _a6(this.p1, this.p2);
    }
  }, "r"), (() => {
    o(_a6, "Line");
  })(), _a6);
  var _a7;
  var ce = (/* @__PURE__ */ __name(_a7 = class {
    constructor(t, u, p) {
      __publicField(this, "pos");
      __publicField(this, "width");
      __publicField(this, "height");
      this.pos = t.clone(), this.width = u, this.height = p;
    }
    static fromPoints(t, u) {
      return new _a7(t.clone(), u.x - t.x, u.y - t.y);
    }
    center() {
      return new x(this.pos.x + this.width / 2, this.pos.y + this.height / 2);
    }
    points() {
      return [this.pos, this.pos.add(this.width, 0), this.pos.add(this.width, this.height), this.pos.add(0, this.height)];
    }
    transform(t) {
      return new Ye(this.points().map((u) => t.multVec2(u)));
    }
    bbox() {
      return this.clone();
    }
    area() {
      return this.width * this.height;
    }
    clone() {
      return new _a7(this.pos.clone(), this.width, this.height);
    }
    distToPoint(t) {
      return Math.sqrt(this.sdistToPoint(t));
    }
    sdistToPoint(t) {
      let u = this.pos, p = this.pos.add(this.width, this.height), E = Math.max(u.x - t.x, 0, t.x - p.x), M = Math.max(u.y - t.y, 0, t.y - p.y);
      return E * E + M * M;
    }
  }, "r"), (() => {
    o(_a7, "Rect");
  })(), _a7);
  var _a8;
  var vt = (/* @__PURE__ */ __name(_a8 = class {
    constructor(t, u) {
      __publicField(this, "center");
      __publicField(this, "radius");
      this.center = t.clone(), this.radius = u;
    }
    transform(t) {
      return new Mn(this.center, this.radius, this.radius).transform(t);
    }
    bbox() {
      return ce.fromPoints(this.center.sub(S(this.radius)), this.center.add(S(this.radius)));
    }
    area() {
      return this.radius * this.radius * Math.PI;
    }
    clone() {
      return new _a8(this.center, this.radius);
    }
  }, "r"), (() => {
    o(_a8, "Circle");
  })(), _a8);
  var _a9;
  var Mn = (/* @__PURE__ */ __name(_a9 = class {
    constructor(t, u, p) {
      __publicField(this, "center");
      __publicField(this, "radiusX");
      __publicField(this, "radiusY");
      this.center = t.clone(), this.radiusX = u, this.radiusY = p;
    }
    transform(t) {
      return new _a9(t.multVec2(this.center), t.m[0] * this.radiusX, t.m[5] * this.radiusY);
    }
    bbox() {
      return ce.fromPoints(this.center.sub(S(this.radiusX, this.radiusY)), this.center.add(S(this.radiusX, this.radiusY)));
    }
    area() {
      return this.radiusX * this.radiusY * Math.PI;
    }
    clone() {
      return new _a9(this.center, this.radiusX, this.radiusY);
    }
  }, "r"), (() => {
    o(_a9, "Ellipse");
  })(), _a9);
  var _a10;
  var Ye = (/* @__PURE__ */ __name(_a10 = class {
    constructor(t) {
      __publicField(this, "pts");
      if (t.length < 3)
        throw new Error("Polygons should have at least 3 vertices");
      this.pts = t;
    }
    transform(t) {
      return new _a10(this.pts.map((u) => t.multVec2(u)));
    }
    bbox() {
      let t = S(Number.MAX_VALUE), u = S(-Number.MAX_VALUE);
      for (let p of this.pts)
        t.x = Math.min(t.x, p.x), u.x = Math.max(u.x, p.x), t.y = Math.min(t.y, p.y), u.y = Math.max(u.y, p.y);
      return ce.fromPoints(t, u);
    }
    area() {
      let t = 0, u = this.pts.length;
      for (let p = 0; p < u; p++) {
        let E = this.pts[p], M = this.pts[(p + 1) % u];
        t += E.x * M.y * 0.5, t -= M.x * E.y * 0.5;
      }
      return Math.abs(t);
    }
    clone() {
      return new _a10(this.pts.map((t) => t.clone()));
    }
  }, "r"), (() => {
    o(_a10, "Polygon");
  })(), _a10);
  function As(r, t) {
    let u = Number.MAX_VALUE, p = S(0);
    for (let E of [r, t])
      for (let M = 0; M < E.pts.length; M++) {
        let L = E.pts[M], Y = E.pts[(M + 1) % E.pts.length].sub(L).normal().unit(), U = Number.MAX_VALUE, Q = -Number.MAX_VALUE;
        for (let ae = 0; ae < r.pts.length; ae++) {
          let de = r.pts[ae].dot(Y);
          U = Math.min(U, de), Q = Math.max(Q, de);
        }
        let h = Number.MAX_VALUE, Z = -Number.MAX_VALUE;
        for (let ae = 0; ae < t.pts.length; ae++) {
          let de = t.pts[ae].dot(Y);
          h = Math.min(h, de), Z = Math.max(Z, de);
        }
        let Pe = Math.min(Q, Z) - Math.max(U, h);
        if (Pe < 0)
          return null;
        if (Pe < Math.abs(u)) {
          let ae = Z - U, de = h - Q;
          u = Math.abs(ae) < Math.abs(de) ? ae : de, p = Y.scale(u);
        }
      }
    return p;
  }
  __name(As, "As");
  o(As, "sat");
  var _a11;
  var xt = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a11 = class extends Map {
    constructor(...t) {
      super(...t);
      __publicField(this, "lastID");
      this.lastID = 0;
    }
    push(t) {
      let u = this.lastID;
      return this.set(u, t), this.lastID++, u;
    }
    pushd(t) {
      let u = this.push(t);
      return () => this.delete(u);
    }
  }, "_this"), (() => {
    o(_a11, "IDList");
  })(), _a11), "xt");
  var _a12;
  var Be = (/* @__PURE__ */ __name(_a12 = class {
    constructor(t) {
      __publicField(this, "paused", false);
      __publicField(this, "cancel");
      this.cancel = t;
    }
    static join(t) {
      let u = new _a12(() => t.forEach((p) => p.cancel()));
      return Object.defineProperty(u, "paused", { get: () => t[0].paused, set: (p) => t.forEach((E) => E.paused = p) }), u.paused = false, u;
    }
  }, "r"), (() => {
    o(_a12, "EventController");
  })(), _a12);
  var _a13;
  var ye = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a13 = class {
    constructor() {
      __publicField(this, "handlers", new xt());
    }
    add(t) {
      let u = this.handlers.pushd((...E) => {
        p.paused || t(...E);
      }), p = new Be(u);
      return p;
    }
    addOnce(t) {
      let u = this.add((...p) => {
        u.cancel(), t(...p);
      });
      return u;
    }
    next() {
      return new Promise((t) => this.addOnce(t));
    }
    trigger(...t) {
      this.handlers.forEach((u) => u(...t));
    }
    numListeners() {
      return this.handlers.size;
    }
    clear() {
      this.handlers.clear();
    }
  }, "_this"), (() => {
    o(_a13, "Event");
  })(), _a13), "ye");
  var _a14;
  var Le = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a14 = class {
    constructor() {
      __publicField(this, "handlers", {});
    }
    on(t, u) {
      return this.handlers[t] || (this.handlers[t] = new ye()), this.handlers[t].add(u);
    }
    onOnce(t, u) {
      let p = this.on(t, (...E) => {
        p.cancel(), u(...E);
      });
      return p;
    }
    next(t) {
      return new Promise((u) => {
        this.onOnce(t, (...p) => u(p[0]));
      });
    }
    trigger(t, ...u) {
      this.handlers[t] && this.handlers[t].trigger(...u);
    }
    remove(t) {
      delete this.handlers[t];
    }
    clear() {
      this.handlers = {};
    }
    numListeners(t) {
      var _a20, _b;
      return (_b = (_a20 = this.handlers[t]) == null ? void 0 : _a20.numListeners()) != null ? _b : 0;
    }
  }, "_this"), (() => {
    o(_a14, "EventHandler");
  })(), _a14), "Le");
  function Bn(r, t) {
    let u = typeof r, p = typeof t;
    if (u !== p)
      return false;
    if (u === "object" && p === "object" && r !== null && t !== null) {
      let E = Object.keys(r), M = Object.keys(t);
      if (E.length !== M.length)
        return false;
      for (let L of E) {
        let q = r[L], Y = t[L];
        if (!(typeof q == "function" && typeof Y == "function") && !Bn(q, Y))
          return false;
      }
      return true;
    }
    return r === t;
  }
  __name(Bn, "Bn");
  o(Bn, "deepEq");
  function xi(r) {
    let t = window.atob(r), u = t.length, p = new Uint8Array(u);
    for (let E = 0; E < u; E++)
      p[E] = t.charCodeAt(E);
    return p.buffer;
  }
  __name(xi, "xi");
  o(xi, "base64ToArrayBuffer");
  function Os(r) {
    return xi(r.split(",")[1]);
  }
  __name(Os, "Os");
  o(Os, "dataURLToArrayBuffer");
  function Kt(r, t) {
    let u = document.createElement("a");
    u.href = t, u.download = r, u.click();
  }
  __name(Kt, "Kt");
  o(Kt, "download");
  function Ln(r, t) {
    Kt(r, "data:text/plain;charset=utf-8," + t);
  }
  __name(Ln, "Ln");
  o(Ln, "downloadText");
  function Ps(r, t) {
    Ln(r, JSON.stringify(t));
  }
  __name(Ps, "Ps");
  o(Ps, "downloadJSON");
  function In(r, t) {
    let u = URL.createObjectURL(t);
    Kt(r, u), URL.revokeObjectURL(u);
  }
  __name(In, "In");
  o(In, "downloadBlob");
  var Vn = o((r) => r.match(/^data:\w+\/\w+;base64,.+/), "isDataURL");
  var Ms = o((r) => r.split(".").pop(), "getExt");
  var Rs = (() => {
    let r = 0;
    return () => r++;
  })();
  var _a15;
  var $t = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a15 = class {
    constructor(t = (u, p) => u < p) {
      __publicField(this, "_items");
      __publicField(this, "_compareFn");
      this._compareFn = t, this._items = [];
    }
    insert(t) {
      this._items.push(t), this.moveUp(this._items.length - 1);
    }
    remove() {
      if (this._items.length === 0)
        return null;
      let t = this._items[0], u = this._items.pop();
      return this._items.length !== 0 && (this._items[0] = u, this.moveDown(0)), t;
    }
    clear() {
      this._items.splice(0, this._items.length);
    }
    moveUp(t) {
      for (; t > 0; ) {
        let u = Math.floor((t - 1) / 2);
        if (!this._compareFn(this._items[t], this._items[u]) && this._items[t] >= this._items[u])
          break;
        this.swap(t, u), t = u;
      }
    }
    moveDown(t) {
      for (; t < Math.floor(this._items.length / 2); ) {
        let u = 2 * t + 1;
        if (u < this._items.length - 1 && !this._compareFn(this._items[u], this._items[u + 1]) && ++u, this._compareFn(this._items[t], this._items[u]))
          break;
        this.swap(t, u), t = u;
      }
    }
    swap(t, u) {
      [this._items[t], this._items[u]] = [this._items[u], this._items[t]];
    }
    get length() {
      return this._items.length;
    }
  }, "_this"), (() => {
    o(_a15, "BinaryHeap");
  })(), _a15), "$t");
  var kn = { "Joy-Con L+R (STANDARD GAMEPAD Vendor: 057e Product: 200e)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "6": "ltrigger", "7": "rtrigger", "8": "select", "9": "start", "10": "lstick", "11": "rstick", "12": "dpad-up", "13": "dpad-down", "14": "dpad-left", "15": "dpad-right", "16": "home", "17": "capture" }, sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } } }, "Joy-Con (L) (STANDARD GAMEPAD Vendor: 057e Product: 2006)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "9": "select", "10": "lstick", "16": "start" }, sticks: { left: { x: 0, y: 1 } } }, "Joy-Con (R) (STANDARD GAMEPAD Vendor: 057e Product: 2007)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "9": "start", "10": "lstick", "16": "select" }, sticks: { left: { x: 0, y: 1 } } }, "Pro Controller (STANDARD GAMEPAD Vendor: 057e Product: 2009)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "6": "ltrigger", "7": "rtrigger", "8": "select", "9": "start", "10": "lstick", "11": "rstick", "12": "dpad-up", "13": "dpad-down", "14": "dpad-left", "15": "dpad-right", "16": "home", "17": "capture" }, sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } } }, default: { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "6": "ltrigger", "7": "rtrigger", "8": "select", "9": "start", "10": "lstick", "11": "rstick", "12": "dpad-up", "13": "dpad-down", "14": "dpad-left", "15": "dpad-right", "16": "home" }, sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } } } };
  var _a16;
  var rt = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a16 = class {
    constructor() {
      __publicField(this, "pressed", /* @__PURE__ */ new Set([]));
      __publicField(this, "pressedRepeat", /* @__PURE__ */ new Set([]));
      __publicField(this, "released", /* @__PURE__ */ new Set([]));
      __publicField(this, "down", /* @__PURE__ */ new Set([]));
    }
    update() {
      this.pressed.clear(), this.released.clear(), this.pressedRepeat.clear();
    }
    press(t) {
      this.pressed.add(t), this.pressedRepeat.add(t), this.down.add(t);
    }
    pressRepeat(t) {
      this.pressedRepeat.add(t);
    }
    release(t) {
      this.down.delete(t), this.pressed.delete(t), this.released.add(t);
    }
  }, "_this"), (() => {
    o(_a16, "ButtonState");
  })(), _a16), "rt");
  var _a17;
  var jn = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a17 = class {
    constructor() {
      __publicField(this, "buttonState", new rt());
      __publicField(this, "stickState", /* @__PURE__ */ new Map());
    }
  }, "_this"), (() => {
    o(_a17, "GamepadState");
  })(), _a17), "jn");
  var _a18;
  var Nn = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a18 = class {
    constructor() {
      __publicField(this, "dts", []);
      __publicField(this, "timer", 0);
      __publicField(this, "fps", 0);
    }
    tick(t) {
      this.dts.push(t), this.timer += t, this.timer >= 1 && (this.timer = 0, this.fps = Math.round(1 / (this.dts.reduce((u, p) => u + p) / this.dts.length)), this.dts = []);
    }
  }, "_this"), (() => {
    o(_a18, "FPSCounter");
  })(), _a18), "Nn");
  var Ds = o((r) => {
    if (!r.canvas)
      throw new Error("Please provide a canvas");
    let t = { canvas: r.canvas, loopID: null, stopped: false, dt: 0, time: 0, realTime: 0, fpsCounter: new Nn(), timeScale: 1, skipTime: false, numFrames: 0, mousePos: new x(0), mouseDeltaPos: new x(0), keyState: new rt(), mouseState: new rt(), mergedGamepadState: new jn(), gamepadStates: /* @__PURE__ */ new Map(), gamepads: [], charInputted: [], isMouseMoved: false, lastWidth: r.canvas.offsetWidth, lastHeight: r.canvas.offsetHeight, events: new Le() };
    function u() {
      return t.canvas;
    }
    __name(u, "u");
    o(u, "canvas");
    function p() {
      return t.dt * t.timeScale;
    }
    __name(p, "p");
    o(p, "dt");
    function E() {
      return t.time;
    }
    __name(E, "E");
    o(E, "time");
    function M() {
      return t.fpsCounter.fps;
    }
    __name(M, "M");
    o(M, "fps");
    function L() {
      return t.numFrames;
    }
    __name(L, "L");
    o(L, "numFrames");
    function q() {
      return t.canvas.toDataURL();
    }
    __name(q, "q");
    o(q, "screenshot");
    function Y(d) {
      t.canvas.style.cursor = d;
    }
    __name(Y, "Y");
    o(Y, "setCursor");
    function U() {
      return t.canvas.style.cursor;
    }
    __name(U, "U");
    o(U, "getCursor");
    function Q(d) {
      if (d)
        try {
          let v = t.canvas.requestPointerLock();
          v.catch && v.catch((T) => console.error(T));
        } catch (v) {
          console.error(v);
        }
      else
        document.exitPointerLock();
    }
    __name(Q, "Q");
    o(Q, "setCursorLocked");
    function h() {
      return !!document.pointerLockElement;
    }
    __name(h, "h");
    o(h, "isCursorLocked");
    function Z(d) {
      d.requestFullscreen ? d.requestFullscreen() : d.webkitRequestFullscreen && d.webkitRequestFullscreen();
    }
    __name(Z, "Z");
    o(Z, "enterFullscreen");
    function Pe() {
      document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullScreen && document.webkitExitFullScreen();
    }
    __name(Pe, "Pe");
    o(Pe, "exitFullscreen");
    function ae() {
      return document.fullscreenElement || document.webkitFullscreenElement;
    }
    __name(ae, "ae");
    o(ae, "getFullscreenElement");
    function de(d = true) {
      d ? Z(t.canvas) : Pe();
    }
    __name(de, "de");
    o(de, "setFullscreen");
    function pe() {
      return !!ae();
    }
    __name(pe, "pe");
    o(pe, "isFullscreen");
    function G() {
      t.stopped = true;
      for (let d in oe)
        t.canvas.removeEventListener(d, oe[d]);
      for (let d in _e)
        document.removeEventListener(d, _e[d]);
      for (let d in Se)
        window.removeEventListener(d, Se[d]);
      Lt.disconnect();
    }
    __name(G, "G");
    o(G, "quit");
    function Xe(d) {
      t.loopID !== null && cancelAnimationFrame(t.loopID);
      let v = 0, T = o((I) => {
        if (t.stopped)
          return;
        if (document.visibilityState !== "visible") {
          t.loopID = requestAnimationFrame(T);
          return;
        }
        let K = I / 1e3, _ = K - t.realTime, we = r.maxFPS ? 1 / r.maxFPS : 0;
        t.realTime = K, v += _, v > we && (t.skipTime || (t.dt = v, t.time += p(), t.fpsCounter.tick(t.dt)), v = 0, t.skipTime = false, t.numFrames++, dn(), d(), Dt()), t.loopID = requestAnimationFrame(T);
      }, "frame");
      T(0);
    }
    __name(Xe, "Xe");
    o(Xe, "run");
    function Ie() {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    }
    __name(Ie, "Ie");
    o(Ie, "isTouchscreen");
    function b() {
      return t.mousePos.clone();
    }
    __name(b, "b");
    o(b, "mousePos");
    function ue() {
      return t.mouseDeltaPos.clone();
    }
    __name(ue, "ue");
    o(ue, "mouseDeltaPos");
    function ge(d = "left") {
      return t.mouseState.pressed.has(d);
    }
    __name(ge, "ge");
    o(ge, "isMousePressed");
    function ee(d = "left") {
      return t.mouseState.down.has(d);
    }
    __name(ee, "ee");
    o(ee, "isMouseDown");
    function fe(d = "left") {
      return t.mouseState.released.has(d);
    }
    __name(fe, "fe");
    o(fe, "isMouseReleased");
    function Ve() {
      return t.isMouseMoved;
    }
    __name(Ve, "Ve");
    o(Ve, "isMouseMoved");
    function N(d) {
      return d === void 0 ? t.keyState.pressed.size > 0 : t.keyState.pressed.has(d);
    }
    __name(N, "N");
    o(N, "isKeyPressed");
    function A(d) {
      return d === void 0 ? t.keyState.pressedRepeat.size > 0 : t.keyState.pressedRepeat.has(d);
    }
    __name(A, "A");
    o(A, "isKeyPressedRepeat");
    function at(d) {
      return d === void 0 ? t.keyState.down.size > 0 : t.keyState.down.has(d);
    }
    __name(at, "at");
    o(at, "isKeyDown");
    function Me(d) {
      return d === void 0 ? t.keyState.released.size > 0 : t.keyState.released.has(d);
    }
    __name(Me, "Me");
    o(Me, "isKeyReleased");
    function Qt(d) {
      return d === void 0 ? t.mergedGamepadState.buttonState.pressed.size > 0 : t.mergedGamepadState.buttonState.pressed.has(d);
    }
    __name(Qt, "Qt");
    o(Qt, "isGamepadButtonPressed");
    function ut(d) {
      return d === void 0 ? t.mergedGamepadState.buttonState.down.size > 0 : t.mergedGamepadState.buttonState.down.has(d);
    }
    __name(ut, "ut");
    o(ut, "isGamepadButtonDown");
    function We(d) {
      return d === void 0 ? t.mergedGamepadState.buttonState.released.size > 0 : t.mergedGamepadState.buttonState.released.has(d);
    }
    __name(We, "We");
    o(We, "isGamepadButtonReleased");
    function Zt(d) {
      return t.events.on("resize", d);
    }
    __name(Zt, "Zt");
    o(Zt, "onResize");
    let en = o((d, v) => {
      if (typeof d == "function")
        return t.events.on("keyDown", d);
      if (typeof d == "string" && typeof v == "function")
        return t.events.on("keyDown", (T) => T === d && v(d));
    }, "onKeyDown"), Je = o((d, v) => {
      if (typeof d == "function")
        return t.events.on("keyPress", d);
      if (typeof d == "string" && typeof v == "function")
        return t.events.on("keyPress", (T) => T === d && v(d));
    }, "onKeyPress"), tn = o((d, v) => {
      if (typeof d == "function")
        return t.events.on("keyPressRepeat", d);
      if (typeof d == "string" && typeof v == "function")
        return t.events.on("keyPressRepeat", (T) => T === d && v(d));
    }, "onKeyPressRepeat"), Qe = o((d, v) => {
      if (typeof d == "function")
        return t.events.on("keyRelease", d);
      if (typeof d == "string" && typeof v == "function")
        return t.events.on("keyRelease", (T) => T === d && v(d));
    }, "onKeyRelease");
    function nn(d, v) {
      return typeof d == "function" ? t.events.on("mouseDown", (T) => d(T)) : t.events.on("mouseDown", (T) => T === d && v(T));
    }
    __name(nn, "nn");
    o(nn, "onMouseDown");
    function sn(d, v) {
      return typeof d == "function" ? t.events.on("mousePress", (T) => d(T)) : t.events.on("mousePress", (T) => T === d && v(T));
    }
    __name(sn, "sn");
    o(sn, "onMousePress");
    function Et(d, v) {
      return typeof d == "function" ? t.events.on("mouseRelease", (T) => d(T)) : t.events.on("mouseRelease", (T) => T === d && v(T));
    }
    __name(Et, "Et");
    o(Et, "onMouseRelease");
    function Ct(d) {
      return t.events.on("mouseMove", () => d(b(), ue()));
    }
    __name(Ct, "Ct");
    o(Ct, "onMouseMove");
    function St(d) {
      return t.events.on("charInput", d);
    }
    __name(St, "St");
    o(St, "onCharInput");
    function Ne(d) {
      return t.events.on("touchStart", d);
    }
    __name(Ne, "Ne");
    o(Ne, "onTouchStart");
    function rn(d) {
      return t.events.on("touchMove", d);
    }
    __name(rn, "rn");
    o(rn, "onTouchMove");
    function on(d) {
      return t.events.on("touchEnd", d);
    }
    __name(on, "on");
    o(on, "onTouchEnd");
    function an(d) {
      return t.events.on("scroll", d);
    }
    __name(an, "an");
    o(an, "onScroll");
    function un(d) {
      return t.events.on("hide", d);
    }
    __name(un, "un");
    o(un, "onHide");
    function cn(d) {
      return t.events.on("show", d);
    }
    __name(cn, "cn");
    o(cn, "onShow");
    function ln(d, v) {
      if (typeof d == "function")
        return t.events.on("gamepadButtonDown", d);
      if (typeof d == "string" && typeof v == "function")
        return t.events.on("gamepadButtonDown", (T) => T === d && v(d));
    }
    __name(ln, "ln");
    o(ln, "onGamepadButtonDown");
    function Tt(d, v) {
      if (typeof d == "function")
        return t.events.on("gamepadButtonPress", d);
      if (typeof d == "string" && typeof v == "function")
        return t.events.on("gamepadButtonPress", (T) => T === d && v(d));
    }
    __name(Tt, "Tt");
    o(Tt, "onGamepadButtonPress");
    function At(d, v) {
      if (typeof d == "function")
        return t.events.on("gamepadButtonRelease", d);
      if (typeof d == "string" && typeof v == "function")
        return t.events.on("gamepadButtonRelease", (T) => T === d && v(d));
    }
    __name(At, "At");
    o(At, "onGamepadButtonRelease");
    function Ot(d, v) {
      return t.events.on("gamepadStick", (T, I) => T === d && v(I));
    }
    __name(Ot, "Ot");
    o(Ot, "onGamepadStick");
    function Pt(d) {
      t.events.on("gamepadConnect", d);
    }
    __name(Pt, "Pt");
    o(Pt, "onGamepadConnect");
    function Mt(d) {
      t.events.on("gamepadDisconnect", d);
    }
    __name(Mt, "Mt");
    o(Mt, "onGamepadDisconnect");
    function hn(d) {
      return t.mergedGamepadState.stickState.get(d) || new x(0);
    }
    __name(hn, "hn");
    o(hn, "getGamepadStick");
    function ct() {
      return [...t.charInputted];
    }
    __name(ct, "ct");
    o(ct, "charInputted");
    function Rt() {
      return [...t.gamepads];
    }
    __name(Rt, "Rt");
    o(Rt, "getGamepads");
    function dn() {
      t.events.trigger("input"), t.keyState.down.forEach((d) => t.events.trigger("keyDown", d)), t.mouseState.down.forEach((d) => t.events.trigger("mouseDown", d)), Bt();
    }
    __name(dn, "dn");
    o(dn, "processInput");
    function Dt() {
      t.keyState.update(), t.mouseState.update(), t.mergedGamepadState.buttonState.update(), t.mergedGamepadState.stickState.forEach((d, v) => {
        t.mergedGamepadState.stickState.set(v, new x(0));
      }), t.charInputted = [], t.isMouseMoved = false, t.gamepadStates.forEach((d) => {
        d.buttonState.update(), d.stickState.forEach((v, T) => {
          d.stickState.set(T, new x(0));
        });
      });
    }
    __name(Dt, "Dt");
    o(Dt, "resetInput");
    function Gt(d) {
      let v = { index: d.index, isPressed: (T) => t.gamepadStates.get(d.index).buttonState.pressed.has(T), isDown: (T) => t.gamepadStates.get(d.index).buttonState.down.has(T), isReleased: (T) => t.gamepadStates.get(d.index).buttonState.released.has(T), getStick: (T) => t.gamepadStates.get(d.index).stickState.get(T) };
      return t.gamepads.push(v), t.gamepadStates.set(d.index, { buttonState: new rt(), stickState: /* @__PURE__ */ new Map([["left", new x(0)], ["right", new x(0)]]) }), v;
    }
    __name(Gt, "Gt");
    o(Gt, "registerGamepad");
    function Ft(d) {
      t.gamepads = t.gamepads.filter((v) => v.index !== d.index), t.gamepadStates.delete(d.index);
    }
    __name(Ft, "Ft");
    o(Ft, "removeGamepad");
    function Bt() {
      var _a20, _b, _c;
      for (let d of navigator.getGamepads())
        d && !t.gamepadStates.has(d.index) && Gt(d);
      for (let d of t.gamepads) {
        let v = navigator.getGamepads()[d.index], I = (_c = (_b = ((_a20 = r.gamepads) != null ? _a20 : {})[v.id]) != null ? _b : kn[v.id]) != null ? _c : kn.default, K = t.gamepadStates.get(d.index);
        for (let _ = 0; _ < v.buttons.length; _++)
          v.buttons[_].pressed ? (K.buttonState.down.has(I.buttons[_]) || (t.mergedGamepadState.buttonState.press(I.buttons[_]), K.buttonState.press(I.buttons[_]), t.events.trigger("gamepadButtonPress", I.buttons[_])), t.events.trigger("gamepadButtonDown", I.buttons[_])) : K.buttonState.down.has(I.buttons[_]) && (t.mergedGamepadState.buttonState.release(I.buttons[_]), K.buttonState.release(I.buttons[_]), t.events.trigger("gamepadButtonRelease", I.buttons[_]));
        for (let _ in I.sticks) {
          let we = I.sticks[_], Te = new x(v.axes[we.x], v.axes[we.y]);
          K.stickState.set(_, Te), t.mergedGamepadState.stickState.set(_, Te), t.events.trigger("gamepadStick", _, Te);
        }
      }
    }
    __name(Bt, "Bt");
    o(Bt, "processGamepad");
    let oe = {}, _e = {}, Se = {}, Ee = r.pixelDensity || window.devicePixelRatio || 1;
    oe.mousemove = (d) => {
      let v = new x(d.offsetX, d.offsetY), T = new x(d.movementX, d.movementY);
      if (pe()) {
        let I = t.canvas.width / Ee, K = t.canvas.height / Ee, _ = window.innerWidth, we = window.innerHeight, Te = _ / we, mn = I / K;
        if (Te > mn) {
          let xe = we / K, me = (_ - I * xe) / 2;
          v.x = Fe(d.offsetX - me, 0, I * xe, 0, I), v.y = Fe(d.offsetY, 0, K * xe, 0, K);
        } else {
          let xe = _ / I, me = (we - K * xe) / 2;
          v.x = Fe(d.offsetX, 0, I * xe, 0, I), v.y = Fe(d.offsetY - me, 0, K * xe, 0, K);
        }
      }
      t.events.onOnce("input", () => {
        t.isMouseMoved = true, t.mousePos = v, t.mouseDeltaPos = T, t.events.trigger("mouseMove");
      });
    };
    let lt = ["left", "middle", "right", "back", "forward"];
    oe.mousedown = (d) => {
      t.events.onOnce("input", () => {
        let v = lt[d.button];
        v && (t.mouseState.press(v), t.events.trigger("mousePress", v));
      });
    }, oe.mouseup = (d) => {
      t.events.onOnce("input", () => {
        let v = lt[d.button];
        v && (t.mouseState.release(v), t.events.trigger("mouseRelease", v));
      });
    };
    let fn = /* @__PURE__ */ new Set([" ", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab"]), ht = { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down", " ": "space" };
    oe.keydown = (d) => {
      fn.has(d.key) && d.preventDefault(), t.events.onOnce("input", () => {
        let v = ht[d.key] || d.key.toLowerCase();
        v.length === 1 ? (t.events.trigger("charInput", v), t.charInputted.push(v)) : v === "space" && (t.events.trigger("charInput", " "), t.charInputted.push(" ")), d.repeat ? (t.keyState.pressRepeat(v), t.events.trigger("keyPressRepeat", v)) : (t.keyState.press(v), t.events.trigger("keyPressRepeat", v), t.events.trigger("keyPress", v));
      });
    }, oe.keyup = (d) => {
      t.events.onOnce("input", () => {
        let v = ht[d.key] || d.key.toLowerCase();
        t.keyState.release(v), t.events.trigger("keyRelease", v);
      });
    }, oe.touchstart = (d) => {
      d.preventDefault(), t.events.onOnce("input", () => {
        let v = [...d.changedTouches], T = t.canvas.getBoundingClientRect();
        r.touchToMouse !== false && (t.mousePos = new x(v[0].clientX - T.x, v[0].clientY - T.y), t.mouseState.press("left"), t.events.trigger("mousePress", "left")), v.forEach((I) => {
          t.events.trigger("touchStart", new x(I.clientX - T.x, I.clientY - T.y), I);
        });
      });
    }, oe.touchmove = (d) => {
      d.preventDefault(), t.events.onOnce("input", () => {
        let v = [...d.changedTouches], T = t.canvas.getBoundingClientRect();
        r.touchToMouse !== false && (t.mousePos = new x(v[0].clientX - T.x, v[0].clientY - T.y), t.events.trigger("mouseMove")), v.forEach((I) => {
          t.events.trigger("touchMove", new x(I.clientX - T.x, I.clientY - T.y), I);
        });
      });
    }, oe.touchend = (d) => {
      t.events.onOnce("input", () => {
        let v = [...d.changedTouches], T = t.canvas.getBoundingClientRect();
        r.touchToMouse !== false && (t.mousePos = new x(v[0].clientX - T.x, v[0].clientY - T.y), t.mouseState.release("left"), t.events.trigger("mouseRelease", "left")), v.forEach((I) => {
          t.events.trigger("touchEnd", new x(I.clientX - T.x, I.clientY - T.y), I);
        });
      });
    }, oe.touchcancel = (d) => {
      t.events.onOnce("input", () => {
        let v = [...d.changedTouches], T = t.canvas.getBoundingClientRect();
        r.touchToMouse !== false && (t.mousePos = new x(v[0].clientX - T.x, v[0].clientY - T.y), t.mouseState.release("left"), t.events.trigger("mouseRelease", "left")), v.forEach((I) => {
          t.events.trigger("touchEnd", new x(I.clientX - T.x, I.clientY - T.y), I);
        });
      });
    }, oe.wheel = (d) => {
      d.preventDefault(), t.events.onOnce("input", () => {
        t.events.trigger("scroll", new x(d.deltaX, d.deltaY));
      });
    }, oe.contextmenu = (d) => d.preventDefault(), _e.visibilitychange = () => {
      document.visibilityState === "visible" ? (t.skipTime = true, t.events.trigger("show")) : t.events.trigger("hide");
    }, Se.gamepadconnected = (d) => {
      let v = Gt(d.gamepad);
      t.events.onOnce("input", () => {
        t.events.trigger("gamepadConnect", v);
      });
    }, Se.gamepaddisconnected = (d) => {
      let v = Rt().filter((T) => T.index === d.gamepad.index)[0];
      Ft(d.gamepad), t.events.onOnce("input", () => {
        t.events.trigger("gamepadDisconnect", v);
      });
    };
    for (let d in oe)
      t.canvas.addEventListener(d, oe[d]);
    for (let d in _e)
      document.addEventListener(d, _e[d]);
    for (let d in Se)
      window.addEventListener(d, Se[d]);
    let Lt = new ResizeObserver((d) => {
      for (let v of d)
        if (v.target === t.canvas) {
          if (t.lastWidth === t.canvas.offsetWidth && t.lastHeight === t.canvas.offsetHeight)
            return;
          t.lastWidth = t.canvas.offsetWidth, t.lastHeight = t.canvas.offsetHeight, t.events.onOnce("input", () => {
            t.events.trigger("resize");
          });
        }
    });
    return Lt.observe(t.canvas), { dt: p, time: E, run: Xe, canvas: u, fps: M, numFrames: L, quit: G, setFullscreen: de, isFullscreen: pe, setCursor: Y, screenshot: q, getGamepads: Rt, getCursor: U, setCursorLocked: Q, isCursorLocked: h, isTouchscreen: Ie, mousePos: b, mouseDeltaPos: ue, isKeyDown: at, isKeyPressed: N, isKeyPressedRepeat: A, isKeyReleased: Me, isMouseDown: ee, isMousePressed: ge, isMouseReleased: fe, isMouseMoved: Ve, isGamepadButtonPressed: Qt, isGamepadButtonDown: ut, isGamepadButtonReleased: We, getGamepadStick: hn, charInputted: ct, onResize: Zt, onKeyDown: en, onKeyPress: Je, onKeyPressRepeat: tn, onKeyRelease: Qe, onMouseDown: nn, onMousePress: sn, onMouseRelease: Et, onMouseMove: Ct, onCharInput: St, onTouchStart: Ne, onTouchMove: rn, onTouchEnd: on, onScroll: an, onHide: un, onShow: cn, onGamepadButtonDown: ln, onGamepadButtonPress: Tt, onGamepadButtonRelease: At, onGamepadStick: Ot, onGamepadConnect: Pt, onGamepadDisconnect: Mt, events: t.events };
  }, "default");
  var zt = 2.5949095;
  var Gs = 1.70158 + 1;
  var Fs = 2 * Math.PI / 3;
  var Bs = 2 * Math.PI / 4.5;
  var Yt = { linear: (r) => r, easeInSine: (r) => 1 - Math.cos(r * Math.PI / 2), easeOutSine: (r) => Math.sin(r * Math.PI / 2), easeInOutSine: (r) => -(Math.cos(Math.PI * r) - 1) / 2, easeInQuad: (r) => r * r, easeOutQuad: (r) => 1 - (1 - r) * (1 - r), easeInOutQuad: (r) => r < 0.5 ? 2 * r * r : 1 - Math.pow(-2 * r + 2, 2) / 2, easeInCubic: (r) => r * r * r, easeOutCubic: (r) => 1 - Math.pow(1 - r, 3), easeInOutCubic: (r) => r < 0.5 ? 4 * r * r * r : 1 - Math.pow(-2 * r + 2, 3) / 2, easeInQuart: (r) => r * r * r * r, easeOutQuart: (r) => 1 - Math.pow(1 - r, 4), easeInOutQuart: (r) => r < 0.5 ? 8 * r * r * r * r : 1 - Math.pow(-2 * r + 2, 4) / 2, easeInQuint: (r) => r * r * r * r * r, easeOutQuint: (r) => 1 - Math.pow(1 - r, 5), easeInOutQuint: (r) => r < 0.5 ? 16 * r * r * r * r * r : 1 - Math.pow(-2 * r + 2, 5) / 2, easeInExpo: (r) => r === 0 ? 0 : Math.pow(2, 10 * r - 10), easeOutExpo: (r) => r === 1 ? 1 : 1 - Math.pow(2, -10 * r), easeInOutExpo: (r) => r === 0 ? 0 : r === 1 ? 1 : r < 0.5 ? Math.pow(2, 20 * r - 10) / 2 : (2 - Math.pow(2, -20 * r + 10)) / 2, easeInCirc: (r) => 1 - Math.sqrt(1 - Math.pow(r, 2)), easeOutCirc: (r) => Math.sqrt(1 - Math.pow(r - 1, 2)), easeInOutCirc: (r) => r < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * r, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * r + 2, 2)) + 1) / 2, easeInBack: (r) => Gs * r * r * r - 1.70158 * r * r, easeOutBack: (r) => 1 + Gs * Math.pow(r - 1, 3) + 1.70158 * Math.pow(r - 1, 2), easeInOutBack: (r) => r < 0.5 ? Math.pow(2 * r, 2) * ((zt + 1) * 2 * r - zt) / 2 : (Math.pow(2 * r - 2, 2) * ((zt + 1) * (r * 2 - 2) + zt) + 2) / 2, easeInElastic: (r) => r === 0 ? 0 : r === 1 ? 1 : -Math.pow(2, 10 * r - 10) * Math.sin((r * 10 - 10.75) * Fs), easeOutElastic: (r) => r === 0 ? 0 : r === 1 ? 1 : Math.pow(2, -10 * r) * Math.sin((r * 10 - 0.75) * Fs) + 1, easeInOutElastic: (r) => r === 0 ? 0 : r === 1 ? 1 : r < 0.5 ? -(Math.pow(2, 20 * r - 10) * Math.sin((20 * r - 11.125) * Bs)) / 2 : Math.pow(2, -20 * r + 10) * Math.sin((20 * r - 11.125) * Bs) / 2 + 1, easeInBounce: (r) => 1 - Yt.easeOutBounce(1 - r), easeOutBounce: (r) => r < 1 / 2.75 ? 7.5625 * r * r : r < 2 / 2.75 ? 7.5625 * (r -= 1.5 / 2.75) * r + 0.75 : r < 2.5 / 2.75 ? 7.5625 * (r -= 2.25 / 2.75) * r + 0.9375 : 7.5625 * (r -= 2.625 / 2.75) * r + 0.984375, easeInOutBounce: (r) => r < 0.5 ? (1 - Yt.easeOutBounce(1 - 2 * r)) / 2 : (1 + Yt.easeOutBounce(2 * r - 1)) / 2 };
  var it = Yt;
  var _a19;
  var Ut = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a19 = class {
    constructor(t, u) {
      __publicField(this, "time");
      __publicField(this, "action");
      __publicField(this, "finished", false);
      __publicField(this, "paused", false);
      this.time = t, this.action = u;
    }
    tick(t) {
      return this.finished || this.paused ? false : (this.time -= t, this.time <= 0 ? (this.action(), this.finished = true, this.time = 0, true) : false);
    }
    reset(t) {
      this.time = t, this.finished = false;
    }
  }, "_this"), (() => {
    o(_a19, "Timer");
  })(), _a19), "Ut");
  var Ls = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA1CAYAAADyMeOEAAAAAXNSR0IArs4c6QAAAoVJREFUaIHdm7txwkAQhheGAqACiCHzOKQDQrqgILpwSAeEDBnEUAF0gCMxZ7G72qce/mec2Lpf9+3unaS78wgSNZ8uX5729+d1FNWXUuGmXlBOUUEIMckEpeQJgBu6C+BSFngztBR2vd+ovY+7g+p6LbgaWgJrAeUkDYIUXgXdBBwNi6kpABJwMTQH3AZsXRR8GHTfgEth8E3gjdAUcNewpbTgY85sCMCUuOokozE0YM0YRzM9NGAAXd8+omAF5h4lnmBRvpSnZHyLoLEbaN+aKB9KWv/KWw0tAbbANnlG+UvB2dm77NxxdwgBpjrF/d7rW9cbmpvio2A5z8iAYpVU8pGZlo6/2+MSco2lHfd3rv9jAP038e1xef9o2mjvYb2OqpqKE81028/jeietlSEVO5FRWsxWsJit1G3aFpW8iWe5RwpiCZAk25QvV6nz6fIlynRGuTd5WqpJ4guAlDfVKBK87hXljflgv1ON6fV+4+5gVlA17SfeG0heKqQd4l4jI/wrmaA9N9R4ar+wpHJDZyrrfcH0nB66PqAzPi76pn+faSyJk/vzOorYhGurQrzj/P68jtBMawHaHBIR9xoD5O34dy0qQOSYHvqExq2TpT2nf76+w7y251OYF0CRaU+J920TwLUa6inx6OxE6g80lu2ux7Y2eJLF/rCXE6zEPdnenk9o+4ih9AEdnW2q81HXl5LuU6OTl2fXUhqganbXAGq3g6jJOWV/OnoesO6YqqEB/GdNsjf7uHtwj2DzmRNpp7iOZfm6D9oAxB6Yi1gC4oIYeo4MIPdopEQRB+cAko5J1tW386HpB2Kz1eop4Epdwls/kgZ1sh8gZsEjdcWkr//D8Qu3Z3l5Nl1NtAAAAABJRU5ErkJggg==";
  var Is = ps("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L5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
  var Vs = "data:image/png;base64,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";
  var ks = "data:image/png;base64,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";
  var Ai = "3000.1.12";
  var js = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  var Xt = "topleft";
  var Ns = 64;
  var Oi = "monospace";
  var Wt = "monospace";
  var Pi = 36;
  var _s = 64;
  var Hs = 256;
  var qs = 2048;
  var $s = 2048;
  var Ks = 2048;
  var zs = 2048;
  var Ys = 0.1;
  var Mi = 64;
  var _n = "nearest";
  var Ri = 8;
  var Di = 4;
  var Js = [{ name: "a_pos", size: 2 }, { name: "a_uv", size: 2 }, { name: "a_color", size: 4 }];
  var Jt = Js.reduce((r, t) => r + t.size, 0);
  var Qs = 2048;
  var Xs = Qs * 4 * Jt;
  var Ws = Qs * 6;
  var Gi = `
attribute vec2 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 0.0, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`;
  var Fi = `
precision mediump float;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	return v_color * texture2D(u_tex, v_uv);
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`;
  var Hn = `
vec4 vert(vec2 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`;
  var qn = `
vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`;
  var Bi = /* @__PURE__ */ new Set(["id", "require"]);
  var Li = /* @__PURE__ */ new Set(["add", "update", "draw", "destroy", "inspect", "drawInspect"]);
  function ot(r) {
    switch (r) {
      case "topleft":
        return new x(-1, -1);
      case "top":
        return new x(0, -1);
      case "topright":
        return new x(1, -1);
      case "left":
        return new x(-1, 0);
      case "center":
        return new x(0, 0);
      case "right":
        return new x(1, 0);
      case "botleft":
        return new x(-1, 1);
      case "bot":
        return new x(0, 1);
      case "botright":
        return new x(1, 1);
      default:
        return r;
    }
  }
  __name(ot, "ot");
  o(ot, "anchorPt");
  function Ii(r) {
    switch (r) {
      case "left":
        return 0;
      case "center":
        return 0.5;
      case "right":
        return 1;
      default:
        return 0;
    }
  }
  __name(Ii, "Ii");
  o(Ii, "alignPt");
  function Vi(r) {
    return r.createBuffer(1, 1, 44100);
  }
  __name(Vi, "Vi");
  o(Vi, "createEmptyAudioBuffer");
  var bo = o((r = {}) => {
    var _a20, _b, _c;
    let t = (_a20 = r.root) != null ? _a20 : document.body;
    t === document.body && (document.body.style.width = "100%", document.body.style.height = "100%", document.body.style.margin = "0px", document.documentElement.style.width = "100%", document.documentElement.style.height = "100%");
    let u = (_b = r.canvas) != null ? _b : (() => {
      let e = document.createElement("canvas");
      return t.appendChild(e), e;
    })(), p = (_c = r.scale) != null ? _c : 1, E = r.width && r.height && !r.stretch && !r.letterbox;
    E ? (u.width = r.width * p, u.height = r.height * p) : (u.width = u.parentElement.offsetWidth, u.height = u.parentElement.offsetHeight);
    let M = ["outline: none", "cursor: default"];
    if (E) {
      let e = u.width, n = u.height;
      M.push(`width: ${e}px`), M.push(`height: ${n}px`);
    } else
      M.push("width: 100%"), M.push("height: 100%");
    r.crisp && (M.push("image-rendering: pixelated"), M.push("image-rendering: crisp-edges")), u.style.cssText = M.join(";");
    let L = r.pixelDensity || window.devicePixelRatio;
    u.width *= L, u.height *= L, u.tabIndex = 0;
    let q = document.createElement("canvas");
    q.width = Hs, q.height = Hs;
    let Y = q.getContext("2d", { willReadFrequently: true }), U = Ds({ canvas: u, touchToMouse: r.touchToMouse, gamepads: r.gamepads, pixelDensity: r.pixelDensity, maxFPS: r.maxFPS }), Q = [], h = U.canvas().getContext("webgl", { antialias: true, depth: true, stencil: true, alpha: true, preserveDrawingBuffer: true });
    function Z(e) {
      let n = {};
      return { cur: (s) => {
        var _a21;
        let i = (_a21 = n[s]) != null ? _a21 : [];
        return i[i.length - 1];
      }, push: (s, i) => {
        n[s] || (n[s] = []), n[s].push(i), e(s, i);
      }, pop: (s) => {
        var _a21;
        let i = n[s];
        if (!i)
          throw new Error(`Unknown WebGL type: ${s}`);
        if (i.length <= 0)
          throw new Error("Can't unbind texture when there's no texture bound");
        i.pop(), e(s, (_a21 = i[i.length - 1]) != null ? _a21 : null);
      } };
    }
    __name(Z, "Z");
    o(Z, "genBindFunc");
    let Pe = Z(h.bindTexture.bind(h)), ae = Z(h.bindFramebuffer.bind(h)), de = Z(h.bindRenderbuffer.bind(h));
    const _pe = class {
      constructor(n, s, i = {}) {
        __publicField(this, "src", null);
        __publicField(this, "glTex");
        __publicField(this, "width");
        __publicField(this, "height");
        this.glTex = h.createTexture(), Q.push(() => this.free()), this.bind(), n && s && h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, n, s, 0, h.RGBA, h.UNSIGNED_BYTE, null), this.width = n, this.height = s;
        let a = (() => {
          var _a21;
          switch ((_a21 = i.filter) != null ? _a21 : r.texFilter) {
            case "linear":
              return h.LINEAR;
            case "nearest":
              return h.NEAREST;
            default:
              return h.NEAREST;
          }
        })(), c = (() => {
          switch (i.wrap) {
            case "repeat":
              return h.REPEAT;
            case "clampToEdge":
              return h.CLAMP_TO_EDGE;
            default:
              return h.CLAMP_TO_EDGE;
          }
        })();
        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, a), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, a), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, c), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, c), this.unbind();
      }
      static fromImage(n, s = {}) {
        let i = new _pe(0, 0, s);
        return i.bind(), h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, n), i.width = n.width, i.height = n.height, i.unbind(), i.src = n, i;
      }
      update(n, s = 0, i = 0) {
        this.bind(), h.texSubImage2D(h.TEXTURE_2D, 0, s, i, h.RGBA, h.UNSIGNED_BYTE, n), this.unbind();
      }
      bind() {
        Pe.push(h.TEXTURE_2D, this.glTex);
      }
      unbind() {
        Pe.pop(h.TEXTURE_2D);
      }
      free() {
        h.deleteTexture(this.glTex);
      }
    };
    let pe = _pe;
    __name(pe, "pe");
    (() => {
      o(_pe, "Texture");
    })();
    const _G = class extends Error {
      constructor(n) {
        super(n), this.name = "KaboomError";
      }
    };
    let G = _G;
    __name(G, "G");
    (() => {
      o(_G, "KaboomError");
    })();
    const _Xe = class {
      constructor(n, s) {
        __publicField(this, "tex");
        __publicField(this, "canvas");
        __publicField(this, "ctx");
        __publicField(this, "x", 0);
        __publicField(this, "y", 0);
        __publicField(this, "curHeight", 0);
        this.canvas = document.createElement("canvas"), this.canvas.width = n, this.canvas.height = s, this.tex = pe.fromImage(this.canvas), this.ctx = this.canvas.getContext("2d");
      }
      add(n) {
        if (n.width > this.canvas.width || n.height > this.canvas.height)
          throw new G(`Texture size (${n.width} x ${n.height}) exceeds limit (${this.canvas.width} x ${this.canvas.height})`);
        this.x + n.width > this.canvas.width && (this.x = 0, this.y += this.curHeight, this.curHeight = 0), this.y + n.height > this.canvas.height && (this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.tex = pe.fromImage(this.canvas), this.x = 0, this.y = 0, this.curHeight = 0);
        let s = new x(this.x, this.y);
        return this.x += n.width, n.height > this.curHeight && (this.curHeight = n.height), n instanceof ImageData ? this.ctx.putImageData(n, s.x, s.y) : this.ctx.drawImage(n, s.x, s.y), this.tex.update(this.canvas), [this.tex, new re(s.x / this.canvas.width, s.y / this.canvas.height, n.width / this.canvas.width, n.height / this.canvas.height)];
      }
    };
    let Xe = _Xe;
    __name(Xe, "Xe");
    (() => {
      o(_Xe, "TexPacker");
    })();
    const _Ie = class {
      constructor(n, s, i = {}) {
        __publicField(this, "tex");
        __publicField(this, "glFramebuffer");
        __publicField(this, "glRenderbuffer");
        this.tex = new pe(n, s, i), this.glFramebuffer = h.createFramebuffer(), this.glRenderbuffer = h.createRenderbuffer(), Q.push(() => this.free()), this.bind(), h.renderbufferStorage(h.RENDERBUFFER, h.DEPTH_STENCIL, n, s), h.framebufferTexture2D(h.FRAMEBUFFER, h.COLOR_ATTACHMENT0, h.TEXTURE_2D, this.tex.glTex, 0), h.framebufferRenderbuffer(h.FRAMEBUFFER, h.DEPTH_STENCIL_ATTACHMENT, h.RENDERBUFFER, this.glRenderbuffer), this.unbind();
      }
      get width() {
        return this.tex.width;
      }
      get height() {
        return this.tex.height;
      }
      toImageData() {
        let n = new Uint8ClampedArray(this.width * this.height * 4);
        this.bind(), h.readPixels(0, 0, this.width, this.height, h.RGBA, h.UNSIGNED_BYTE, n), this.unbind();
        let s = this.width * 4, i = new Uint8Array(s);
        for (let a = 0; a < (this.height / 2 | 0); a++) {
          let c = a * s, f = (this.height - a - 1) * s;
          i.set(n.subarray(c, c + s)), n.copyWithin(c, f, f + s), n.set(i, f);
        }
        return new ImageData(n, this.width, this.height);
      }
      toDataURL() {
        let n = document.createElement("canvas"), s = n.getContext("2d");
        return n.width = this.width, n.height = this.height, s.putImageData(this.toImageData(), 0, 0), n.toDataURL();
      }
      bind() {
        ae.push(h.FRAMEBUFFER, this.glFramebuffer), de.push(h.RENDERBUFFER, this.glRenderbuffer);
      }
      unbind() {
        ae.pop(h.FRAMEBUFFER), de.pop(h.RENDERBUFFER);
      }
      free() {
        h.deleteFramebuffer(this.glFramebuffer), h.deleteRenderbuffer(this.glRenderbuffer), this.tex.free();
      }
    };
    let Ie = _Ie;
    __name(Ie, "Ie");
    (() => {
      o(_Ie, "FrameBuffer");
    })();
    let b = (() => {
      var _a21, _b2, _c2;
      let e = oe(Hn, qn), n = pe.fromImage(new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1)), s = r.width && r.height ? new Ie(r.width * L * p, r.height * L * p) : new Ie(h.drawingBufferWidth, h.drawingBufferHeight), i = null, a = 1;
      r.background && (i = z.fromArray(r.background), a = (_a21 = r.background[3]) != null ? _a21 : 1, h.clearColor(i.r / 255, i.g / 255, i.b / 255, a)), h.enable(h.BLEND), h.blendFuncSeparate(h.SRC_ALPHA, h.ONE_MINUS_SRC_ALPHA, h.ONE, h.ONE_MINUS_SRC_ALPHA);
      let c = h.createBuffer();
      h.bindBuffer(h.ARRAY_BUFFER, c), h.bufferData(h.ARRAY_BUFFER, Xs * 4, h.DYNAMIC_DRAW), Js.reduce((m, l, g) => (h.vertexAttribPointer(g, l.size, h.FLOAT, false, Jt * 4, m), h.enableVertexAttribArray(g), m + l.size * 4), 0), h.bindBuffer(h.ARRAY_BUFFER, null);
      let f = h.createBuffer();
      h.bindBuffer(h.ELEMENT_ARRAY_BUFFER, f), h.bufferData(h.ELEMENT_ARRAY_BUFFER, Ws * 4, h.DYNAMIC_DRAW), h.bindBuffer(h.ELEMENT_ARRAY_BUFFER, null);
      let w = pe.fromImage(new ImageData(new Uint8ClampedArray([128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128, 128, 128, 255]), 2, 2), { wrap: "repeat", filter: "nearest" });
      return { drawCalls: 0, lastDrawCalls: 0, defShader: e, curShader: e, frameBuffer: s, postShader: null, postShaderUniform: null, defTex: n, curTex: n, curUniform: {}, vbuf: c, ibuf: f, vqueue: [], iqueue: [], transform: new Ue(), transformStack: [], bgTex: w, bgColor: i, bgAlpha: a, width: (_b2 = r.width) != null ? _b2 : h.drawingBufferWidth / L / p, height: (_c2 = r.height) != null ? _c2 : h.drawingBufferHeight / L / p, viewport: { x: 0, y: 0, width: h.drawingBufferWidth, height: h.drawingBufferHeight }, fixed: false };
    })();
    const _ue = class {
      constructor(n, s, i = {}, a = null) {
        __publicField(this, "tex");
        __publicField(this, "frames", [new re(0, 0, 1, 1)]);
        __publicField(this, "anims", {});
        __publicField(this, "slice9", null);
        this.tex = n, s && (this.frames = s), this.anims = i, this.slice9 = a;
      }
      get width() {
        return this.tex.width * this.frames[0].w;
      }
      get height() {
        return this.tex.height * this.frames[0].h;
      }
      static from(n, s = {}) {
        return typeof n == "string" ? _ue.fromURL(n, s) : Promise.resolve(_ue.fromImage(n, s));
      }
      static fromImage(n, s = {}) {
        let [i, a] = N.packer.add(n), c = s.frames ? s.frames.map((f) => new re(a.x + f.x * a.w, a.y + f.y * a.h, f.w * a.w, f.h * a.h)) : Et(s.sliceX || 1, s.sliceY || 1, a.x, a.y, a.w, a.h);
        return new _ue(i, c, s.anims, s.slice9);
      }
      static fromURL(n, s = {}) {
        return Je(n).then((i) => _ue.fromImage(i, s));
      }
    };
    let ue = _ue;
    __name(ue, "ue");
    (() => {
      o(_ue, "SpriteData");
    })();
    const _ge = class {
      constructor(n) {
        __publicField(this, "buf");
        this.buf = n;
      }
      static fromArrayBuffer(n) {
        return new Promise((s, i) => ee.ctx.decodeAudioData(n, s, i)).then((s) => new _ge(s));
      }
      static fromURL(n) {
        return Vn(n) ? _ge.fromArrayBuffer(Os(n)) : en(n).then((s) => _ge.fromArrayBuffer(s));
      }
    };
    let ge = _ge;
    __name(ge, "ge");
    (() => {
      o(_ge, "SoundData");
    })();
    let ee = (() => {
      let e = new (window.AudioContext || window.webkitAudioContext)(), n = e.createGain();
      n.connect(e.destination);
      let s = new ge(Vi(e));
      return e.decodeAudioData(Is.buffer.slice(0)).then((i) => {
        s.buf = i;
      }).catch((i) => {
        console.error("Failed to load burp: ", i);
      }), { ctx: e, masterNode: n, burpSnd: s };
    })();
    const _fe = class {
      constructor(n) {
        __publicField(this, "loaded", false);
        __publicField(this, "data", null);
        __publicField(this, "error", null);
        __publicField(this, "onLoadEvents", new ye());
        __publicField(this, "onErrorEvents", new ye());
        __publicField(this, "onFinishEvents", new ye());
        n.then((s) => {
          this.data = s, this.onLoadEvents.trigger(s);
        }).catch((s) => {
          if (this.error = s, this.onErrorEvents.numListeners() > 0)
            this.onErrorEvents.trigger(s);
          else
            throw s;
        }).finally(() => {
          this.onFinishEvents.trigger(), this.loaded = true;
        });
      }
      static loaded(n) {
        let s = new _fe(Promise.resolve(n));
        return s.data = n, s.loaded = true, s;
      }
      onLoad(n) {
        return this.loaded && this.data ? n(this.data) : this.onLoadEvents.add(n), this;
      }
      onError(n) {
        return this.loaded && this.error ? n(this.error) : this.onErrorEvents.add(n), this;
      }
      onFinish(n) {
        return this.loaded ? n() : this.onFinishEvents.add(n), this;
      }
      then(n) {
        return this.onLoad(n);
      }
      catch(n) {
        return this.onError(n);
      }
      finally(n) {
        return this.onFinish(n);
      }
    };
    let fe = _fe;
    __name(fe, "fe");
    (() => {
      o(_fe, "Asset");
    })();
    const _Ve = class {
      constructor() {
        __publicField(this, "assets", /* @__PURE__ */ new Map());
        __publicField(this, "lastUID", 0);
      }
      add(n, s) {
        let i = n != null ? n : this.lastUID++ + "", a = new fe(s);
        return this.assets.set(i, a), a;
      }
      addLoaded(n, s) {
        let i = n != null ? n : this.lastUID++ + "", a = fe.loaded(s);
        return this.assets.set(i, a), a;
      }
      get(n) {
        return this.assets.get(n);
      }
      progress() {
        if (this.assets.size === 0)
          return 1;
        let n = 0;
        return this.assets.forEach((s) => {
          s.loaded && n++;
        }), n / this.assets.size;
      }
    };
    let Ve = _Ve;
    __name(Ve, "Ve");
    (() => {
      o(_Ve, "AssetBucket");
    })();
    let N = { urlPrefix: "", sprites: new Ve(), fonts: new Ve(), bitmapFonts: new Ve(), sounds: new Ve(), shaders: new Ve(), custom: new Ve(), packer: new Xe(Ks, zs), loaded: false }, A = { events: new Le(), objEvents: new Le(), root: gn([]), gravity: 0, scenes: {}, logs: [], cam: { pos: null, scale: new x(1), angle: 0, shake: 0, transform: new Ue() } };
    function at(e) {
      return N.custom.add(null, e);
    }
    __name(at, "at");
    o(at, "load");
    function Me() {
      let e = [N.sprites, N.sounds, N.shaders, N.fonts, N.bitmapFonts, N.custom];
      return e.reduce((n, s) => n + s.progress(), 0) / e.length;
    }
    __name(Me, "Me");
    o(Me, "loadProgress");
    function Qt(e) {
      return e !== void 0 && (N.urlPrefix = e), N.urlPrefix;
    }
    __name(Qt, "Qt");
    o(Qt, "loadRoot");
    function ut(e) {
      let n = N.urlPrefix + e;
      return fetch(n).then((s) => {
        if (!s.ok)
          throw new G(`Failed to fetch "${n}"`);
        return s;
      });
    }
    __name(ut, "ut");
    o(ut, "fetchURL");
    function We(e) {
      return ut(e).then((n) => n.json());
    }
    __name(We, "We");
    o(We, "fetchJSON");
    function Zt(e) {
      return ut(e).then((n) => n.text());
    }
    __name(Zt, "Zt");
    o(Zt, "fetchText");
    function en(e) {
      return ut(e).then((n) => n.arrayBuffer());
    }
    __name(en, "en");
    o(en, "fetchArrayBuffer");
    function Je(e) {
      let n = new Image();
      return n.crossOrigin = "anonymous", n.src = Vn(e) ? e : N.urlPrefix + e, new Promise((s, i) => {
        n.onload = () => s(n), n.onerror = () => i(new G(`Failed to load image from "${e}"`));
      });
    }
    __name(Je, "Je");
    o(Je, "loadImg");
    function tn(e, n) {
      return N.custom.add(e, We(n));
    }
    __name(tn, "tn");
    o(tn, "loadJSON");
    const _Qe = class {
      constructor(n, s = {}) {
        __publicField(this, "fontface");
        __publicField(this, "filter", _n);
        __publicField(this, "outline", null);
        var _a21;
        this.fontface = n, this.filter = (_a21 = s.filter) != null ? _a21 : _n, s.outline && (this.outline = { width: 1, color: J(0, 0, 0) }, typeof s.outline == "number" ? this.outline.width = s.outline : typeof s.outline == "object" && (s.outline.width && (this.outline.width = s.outline.width), s.outline.color && (this.outline.color = s.outline.color)));
      }
    };
    let Qe = _Qe;
    __name(Qe, "Qe");
    (() => {
      o(_Qe, "FontData");
    })();
    function nn(e, n, s = {}) {
      let i = new FontFace(e, typeof n == "string" ? `url(${n})` : n);
      return document.fonts.add(i), N.fonts.add(e, i.load().catch((a) => {
        throw new G(`Failed to load font from "${n}": ${a}`);
      }).then((a) => new Qe(a, s)));
    }
    __name(nn, "nn");
    o(nn, "loadFont");
    function sn(e, n, s, i, a = {}) {
      return N.bitmapFonts.add(e, Je(n).then((c) => {
        var _a21;
        return _e(pe.fromImage(c, a), s, i, (_a21 = a.chars) != null ? _a21 : js);
      }));
    }
    __name(sn, "sn");
    o(sn, "loadBitmapFont");
    function Et(e = 1, n = 1, s = 0, i = 0, a = 1, c = 1) {
      let f = [], w = a / e, m = c / n;
      for (let l = 0; l < n; l++)
        for (let g = 0; g < e; g++)
          f.push(new re(s + g * w, i + l * m, w, m));
      return f;
    }
    __name(Et, "Et");
    o(Et, "slice");
    function Ct(e, n) {
      return at(typeof n == "string" ? new Promise((s, i) => {
        We(n).then((a) => {
          Ct(e, a).then(s).catch(i);
        });
      }) : ue.from(e).then((s) => {
        let i = {};
        for (let a in n) {
          let c = n[a], f = s.frames[0], w = Ks * f.w, m = zs * f.h, l = c.frames ? c.frames.map((C) => new re(f.x + (c.x + C.x) / w * f.w, f.y + (c.y + C.y) / m * f.h, C.w / w * f.w, C.h / m * f.h)) : Et(c.sliceX || 1, c.sliceY || 1, f.x + c.x / w * f.w, f.y + c.y / m * f.h, c.width / w * f.w, c.height / m * f.h), g = new ue(s.tex, l, c.anims);
          N.sprites.addLoaded(a, g), i[a] = g;
        }
        return i;
      }));
    }
    __name(Ct, "Ct");
    o(Ct, "loadSpriteAtlas");
    function St(e, n = {}) {
      let s = document.createElement("canvas"), i = e[0].width, a = e[0].height;
      s.width = i * e.length, s.height = a;
      let c = s.getContext("2d");
      e.forEach((w, m) => {
        w instanceof ImageData ? c.putImageData(w, m * i, 0) : c.drawImage(w, m * i, 0);
      });
      let f = c.getImageData(0, 0, e.length * i, a);
      return ue.fromImage(f, __spreadProps(__spreadValues({}, n), { sliceX: e.length, sliceY: 1 }));
    }
    __name(St, "St");
    o(St, "createSpriteSheet");
    function Ne(e, n, s = { sliceX: 1, sliceY: 1, anims: {} }) {
      return Array.isArray(n) ? n.some((i) => typeof i == "string") ? N.sprites.add(e, Promise.all(n.map((i) => typeof i == "string" ? Je(i) : Promise.resolve(i))).then((i) => St(i, s))) : N.sprites.addLoaded(e, St(n, s)) : typeof n == "string" ? N.sprites.add(e, ue.from(n, s)) : N.sprites.addLoaded(e, ue.fromImage(n, s));
    }
    __name(Ne, "Ne");
    o(Ne, "loadSprite");
    function rn(e, n) {
      return N.sprites.add(e, new Promise((s) => __async(this, null, function* () {
        let i = typeof n == "string" ? yield We(n) : n, a = yield Promise.all(i.frames.map(Je)), c = document.createElement("canvas");
        c.width = i.width, c.height = i.height * i.frames.length;
        let f = c.getContext("2d");
        a.forEach((m, l) => {
          f.drawImage(m, 0, l * i.height);
        });
        let w = yield Ne(null, c, { sliceY: i.frames.length, anims: i.anims });
        s(w);
      })));
    }
    __name(rn, "rn");
    o(rn, "loadPedit");
    function on(e, n, s) {
      typeof n == "string" && !s && (s = n.replace(new RegExp(`${Ms(n)}$`), "json"));
      let i = typeof s == "string" ? We(s) : Promise.resolve(s);
      return N.sprites.add(e, i.then((a) => {
        let c = a.meta.size, f = a.frames.map((m) => new re(m.frame.x / c.w, m.frame.y / c.h, m.frame.w / c.w, m.frame.h / c.h)), w = {};
        for (let m of a.meta.frameTags)
          m.from === m.to ? w[m.name] = m.from : w[m.name] = { from: m.from, to: m.to, speed: 10, loop: true, pingpong: m.direction === "pingpong" };
        return ue.from(n, { frames: f, anims: w });
      }));
    }
    __name(on, "on");
    o(on, "loadAseprite");
    function an(e, n, s) {
      return N.shaders.addLoaded(e, oe(n, s));
    }
    __name(an, "an");
    o(an, "loadShader");
    function un(e, n, s) {
      let i = o((c) => c ? Zt(c) : Promise.resolve(null), "resolveUrl"), a = Promise.all([i(n), i(s)]).then(([c, f]) => oe(c, f));
      return N.shaders.add(e, a);
    }
    __name(un, "un");
    o(un, "loadShaderURL");
    function cn(e, n) {
      return N.sounds.add(e, typeof n == "string" ? ge.fromURL(n) : ge.fromArrayBuffer(n));
    }
    __name(cn, "cn");
    o(cn, "loadSound");
    function ln(e = "bean") {
      return Ne(e, Ls);
    }
    __name(ln, "ln");
    o(ln, "loadBean");
    function Tt(e) {
      return N.sprites.get(e);
    }
    __name(Tt, "Tt");
    o(Tt, "getSprite");
    function At(e) {
      return N.sounds.get(e);
    }
    __name(At, "At");
    o(At, "getSound");
    function Ot(e) {
      return N.fonts.get(e);
    }
    __name(Ot, "Ot");
    o(Ot, "getFont");
    function Pt(e) {
      return N.bitmapFonts.get(e);
    }
    __name(Pt, "Pt");
    o(Pt, "getBitmapFont");
    function Mt(e) {
      return N.shaders.get(e);
    }
    __name(Mt, "Mt");
    o(Mt, "getShader");
    function hn(e) {
      return N.custom.get(e);
    }
    __name(hn, "hn");
    o(hn, "getAsset");
    function ct(e) {
      if (typeof e == "string") {
        let n = Tt(e);
        if (n)
          return n;
        if (Me() < 1)
          return null;
        throw new G(`Sprite not found: ${e}`);
      } else {
        if (e instanceof ue)
          return fe.loaded(e);
        if (e instanceof fe)
          return e;
        throw new G(`Invalid sprite: ${e}`);
      }
    }
    __name(ct, "ct");
    o(ct, "resolveSprite");
    function Rt(e) {
      if (typeof e == "string") {
        let n = At(e);
        if (n)
          return n;
        if (Me() < 1)
          return null;
        throw new G(`Sound not found: ${e}`);
      } else {
        if (e instanceof ge)
          return fe.loaded(e);
        if (e instanceof fe)
          return e;
        throw new G(`Invalid sound: ${e}`);
      }
    }
    __name(Rt, "Rt");
    o(Rt, "resolveSound");
    function dn(e) {
      var _a21;
      if (!e)
        return b.defShader;
      if (typeof e == "string") {
        let n = Mt(e);
        if (n)
          return (_a21 = n.data) != null ? _a21 : n;
        if (Me() < 1)
          return null;
        throw new G(`Shader not found: ${e}`);
      } else if (e instanceof fe)
        return e.data ? e.data : e;
      return e;
    }
    __name(dn, "dn");
    o(dn, "resolveShader");
    function Dt(e) {
      var _a21, _b2, _c2;
      if (!e)
        return Dt((_a21 = r.font) != null ? _a21 : Oi);
      if (typeof e == "string") {
        let n = Pt(e), s = Ot(e);
        if (n)
          return (_b2 = n.data) != null ? _b2 : n;
        if (s)
          return (_c2 = s.data) != null ? _c2 : s;
        if (document.fonts.check(`${_s}px ${e}`))
          return e;
        if (Me() < 1)
          return null;
        throw new G(`Font not found: ${e}`);
      } else if (e instanceof fe)
        return e.data ? e.data : e;
      return e;
    }
    __name(Dt, "Dt");
    o(Dt, "resolveFont");
    function Gt(e) {
      return e !== void 0 && (ee.masterNode.gain.value = e), ee.masterNode.gain.value;
    }
    __name(Gt, "Gt");
    o(Gt, "volume");
    function Ft(e, n = {}) {
      var _a21, _b2, _c2, _d, _e2;
      let s = ee.ctx, i = (_a21 = n.paused) != null ? _a21 : false, a = s.createBufferSource(), c = new ye(), f = s.createGain(), w = (_b2 = n.seek) != null ? _b2 : 0, m = 0, l = 0, g = false;
      a.loop = !!n.loop, a.detune.value = (_c2 = n.detune) != null ? _c2 : 0, a.playbackRate.value = (_d = n.speed) != null ? _d : 1, a.connect(f), a.onended = () => {
        var _a22;
        k() >= ((_a22 = a.buffer) == null ? void 0 : _a22.duration) && c.trigger();
      }, f.connect(ee.masterNode), f.gain.value = (_e2 = n.volume) != null ? _e2 : 1;
      let C = o((R) => {
        a.buffer = R.buf, i || (m = s.currentTime, a.start(0, w), g = true);
      }, "start"), P = Rt(e);
      P instanceof fe && P.onLoad(C);
      let k = o(() => {
        if (!a.buffer)
          return 0;
        let R = i ? l - m : s.currentTime - m, O = a.buffer.duration;
        return a.loop ? R % O : Math.min(R, O);
      }, "getTime"), j = o((R) => {
        let O = s.createBufferSource();
        return O.buffer = R.buffer, O.loop = R.loop, O.playbackRate.value = R.playbackRate.value, O.detune.value = R.detune.value, O.onended = R.onended, O.connect(f), O;
      }, "cloneNode");
      return { stop() {
        this.paused = true, this.seek(0);
      }, set paused(R) {
        if (i !== R)
          if (i = R, R)
            g && (a.stop(), g = false), l = s.currentTime;
          else {
            a = j(a);
            let O = l - m;
            a.start(0, O), g = true, m = s.currentTime - O, l = 0;
          }
      }, get paused() {
        return i;
      }, play(R = 0) {
        this.seek(R), this.paused = false;
      }, seek(R) {
        var _a22;
        ((_a22 = a.buffer) == null ? void 0 : _a22.duration) && (R > a.buffer.duration || (i ? (a = j(a), m = l - R) : (a.stop(), a = j(a), m = s.currentTime - R, a.start(0, R), g = true, l = 0)));
      }, set speed(R) {
        a.playbackRate.value = R;
      }, get speed() {
        return a.playbackRate.value;
      }, set detune(R) {
        a.detune.value = R;
      }, get detune() {
        return a.detune.value;
      }, set volume(R) {
        f.gain.value = Math.max(R, 0);
      }, get volume() {
        return f.gain.value;
      }, set loop(R) {
        a.loop = R;
      }, get loop() {
        return a.loop;
      }, duration() {
        var _a22, _b3;
        return (_b3 = (_a22 = a.buffer) == null ? void 0 : _a22.duration) != null ? _b3 : 0;
      }, time() {
        return k() % this.duration();
      }, onEnd(R) {
        return c.add(R);
      }, then(R) {
        return this.onEnd(R);
      } };
    }
    __name(Ft, "Ft");
    o(Ft, "play");
    function Bt(e) {
      return Ft(ee.burpSnd, e);
    }
    __name(Bt, "Bt");
    o(Bt, "burp");
    function oe(e = Hn, n = qn) {
      let s = Gi.replace("{{user}}", e != null ? e : Hn), i = Fi.replace("{{user}}", n != null ? n : qn), a = h.createShader(h.VERTEX_SHADER), c = h.createShader(h.FRAGMENT_SHADER);
      h.shaderSource(a, s), h.shaderSource(c, i), h.compileShader(a), h.compileShader(c);
      let f = h.createProgram();
      if (Q.push(() => h.deleteProgram(f)), h.attachShader(f, a), h.attachShader(f, c), h.bindAttribLocation(f, 0, "a_pos"), h.bindAttribLocation(f, 1, "a_uv"), h.bindAttribLocation(f, 2, "a_color"), h.linkProgram(f), !h.getProgramParameter(f, h.LINK_STATUS)) {
        let w = o((C) => {
          let P = new RegExp("^ERROR:\\s0:(?<line>\\d+):\\s(?<msg>.+)"), k = C.match(P);
          return { line: Number(k.groups.line), msg: k.groups.msg.replace(/\n\0$/, "") };
        }, "formatShaderError"), m = h.getShaderInfoLog(a), l = h.getShaderInfoLog(c), g = "";
        if (m) {
          let C = w(m);
          g += `Vertex shader line ${C.line - 14}: ${C.msg}`;
        }
        if (l) {
          let C = w(l);
          g += `Fragment shader line ${C.line - 14}: ${C.msg}`;
        }
        throw new G(g);
      }
      return h.deleteShader(a), h.deleteShader(c), { bind() {
        h.useProgram(f);
      }, unbind() {
        h.useProgram(null);
      }, free() {
        h.deleteProgram(f);
      }, send(w) {
        for (let m in w) {
          let l = w[m], g = h.getUniformLocation(f, m);
          typeof l == "number" ? h.uniform1f(g, l) : l instanceof Ue ? h.uniformMatrix4fv(g, false, new Float32Array(l.m)) : l instanceof z ? h.uniform3f(g, l.r, l.g, l.b) : l instanceof x && h.uniform2f(g, l.x, l.y);
        }
      } };
    }
    __name(oe, "oe");
    o(oe, "makeShader");
    function _e(e, n, s, i) {
      let a = e.width / n, c = {}, f = i.split("").entries();
      for (let [w, m] of f)
        c[m] = new re(w % a * n, Math.floor(w / a) * s, n, s);
      return { tex: e, map: c, size: s };
    }
    __name(_e, "_e");
    o(_e, "makeFont");
    function Se(e, n, s, i = b.defTex, a = b.defShader, c = {}) {
      let f = dn(a);
      if (!f || f instanceof fe)
        return;
      (i !== b.curTex || f !== b.curShader || !Bn(b.curUniform, c) || b.vqueue.length + e.length * Jt > Xs || b.iqueue.length + n.length > Ws) && Ee();
      let w = b.fixed || s ? b.transform : A.cam.transform.mult(b.transform);
      for (let m of e) {
        let l = Lt(w.multVec2(m.pos));
        b.vqueue.push(l.x, l.y, m.uv.x, m.uv.y, m.color.r / 255, m.color.g / 255, m.color.b / 255, m.opacity);
      }
      for (let m of n)
        b.iqueue.push(m + b.vqueue.length / Jt - e.length);
      b.curTex = i, b.curShader = f, b.curUniform = c;
    }
    __name(Se, "Se");
    o(Se, "drawRaw");
    function Ee() {
      !b.curTex || !b.curShader || b.vqueue.length === 0 || b.iqueue.length === 0 || (h.bindBuffer(h.ARRAY_BUFFER, b.vbuf), h.bufferSubData(h.ARRAY_BUFFER, 0, new Float32Array(b.vqueue)), h.bindBuffer(h.ELEMENT_ARRAY_BUFFER, b.ibuf), h.bufferSubData(h.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(b.iqueue)), b.curShader.bind(), b.curShader.send(b.curUniform), b.curTex.bind(), h.drawElements(h.TRIANGLES, b.iqueue.length, h.UNSIGNED_SHORT, 0), b.curTex.unbind(), b.curShader.unbind(), h.bindBuffer(h.ARRAY_BUFFER, null), h.bindBuffer(h.ELEMENT_ARRAY_BUFFER, null), b.vqueue.length = 0, b.iqueue.length = 0, b.drawCalls++);
    }
    __name(Ee, "Ee");
    o(Ee, "flush");
    function lt() {
      h.clear(h.COLOR_BUFFER_BIT), b.frameBuffer.bind(), h.viewport(0, 0, b.frameBuffer.width, b.frameBuffer.height), h.clear(h.COLOR_BUFFER_BIT), b.bgColor || ke(() => {
        we({ width: be(), height: ve(), quad: new re(0, 0, be() / Ns, ve() / Ns), tex: b.bgTex, fixed: true });
      }), b.drawCalls = 0, b.fixed = false, b.transformStack.length = 0, b.transform = new Ue();
    }
    __name(lt, "lt");
    o(lt, "frameStart");
    function fn(e, n) {
      b.postShader = e, b.postShaderUniform = n != null ? n : null;
    }
    __name(fn, "fn");
    o(fn, "usePostEffect");
    function ht() {
      Ee(), b.lastDrawCalls = b.drawCalls, b.frameBuffer.unbind(), h.viewport(0, 0, h.drawingBufferWidth, h.drawingBufferHeight);
      let e = b.width, n = b.height;
      b.width = h.drawingBufferWidth / L, b.height = h.drawingBufferHeight / L, Te({ flipY: true, tex: b.frameBuffer.tex, pos: new x(b.viewport.x, b.viewport.y), width: b.viewport.width, height: b.viewport.height, shader: b.postShader, uniform: typeof b.postShaderUniform == "function" ? b.postShaderUniform() : b.postShaderUniform, fixed: true }), Ee(), b.width = e, b.height = n;
    }
    __name(ht, "ht");
    o(ht, "frameEnd");
    function Lt(e) {
      return new x(e.x / be() * 2 - 1, -e.y / ve() * 2 + 1);
    }
    __name(Lt, "Lt");
    o(Lt, "screen2ndc");
    function d(e) {
      b.transform = e.clone();
    }
    __name(d, "d");
    o(d, "pushMatrix");
    function v(...e) {
      if (e[0] === void 0)
        return;
      let n = S(...e);
      n.x === 0 && n.y === 0 || b.transform.translate(n);
    }
    __name(v, "v");
    o(v, "pushTranslate");
    function T(...e) {
      if (e[0] === void 0)
        return;
      let n = S(...e);
      n.x === 1 && n.y === 1 || b.transform.scale(n);
    }
    __name(T, "T");
    o(T, "pushScale");
    function I(e) {
      e && b.transform.rotate(e);
    }
    __name(I, "I");
    o(I, "pushRotate");
    function K() {
      b.transformStack.push(b.transform.clone());
    }
    __name(K, "K");
    o(K, "pushTransform");
    function _() {
      b.transformStack.length > 0 && (b.transform = b.transformStack.pop());
    }
    __name(_, "_");
    o(_, "popTransform");
    function we(e) {
      var _a21;
      if (e.width === void 0 || e.height === void 0)
        throw new G('drawUVQuad() requires property "width" and "height".');
      if (e.width <= 0 || e.height <= 0)
        return;
      let n = e.width, s = e.height, a = ot(e.anchor || Xt).scale(new x(n, s).scale(-0.5)), c = e.quad || new re(0, 0, 1, 1), f = e.color || J(255, 255, 255), w = (_a21 = e.opacity) != null ? _a21 : 1, m = e.tex ? Ys / e.tex.width : 0, l = e.tex ? Ys / e.tex.height : 0, g = c.x + m, C = c.y + l, P = c.w - m * 2, k = c.h - l * 2;
      K(), v(e.pos), I(e.angle), T(e.scale), v(a), Se([{ pos: new x(-n / 2, s / 2), uv: new x(e.flipX ? g + P : g, e.flipY ? C : C + k), color: f, opacity: w }, { pos: new x(-n / 2, -s / 2), uv: new x(e.flipX ? g + P : g, e.flipY ? C + k : C), color: f, opacity: w }, { pos: new x(n / 2, -s / 2), uv: new x(e.flipX ? g : g + P, e.flipY ? C + k : C), color: f, opacity: w }, { pos: new x(n / 2, s / 2), uv: new x(e.flipX ? g : g + P, e.flipY ? C : C + k), color: f, opacity: w }], [0, 1, 3, 1, 2, 3], e.fixed, e.tex, e.shader, e.uniform), _();
    }
    __name(we, "we");
    o(we, "drawUVQuad");
    function Te(e) {
      var _a21;
      if (!e.tex)
        throw new G('drawTexture() requires property "tex".');
      let n = (_a21 = e.quad) != null ? _a21 : new re(0, 0, 1, 1), s = e.tex.width * n.w, i = e.tex.height * n.h, a = new x(1);
      if (e.tiled) {
        let c = Math.ceil((e.width || s) / s), f = Math.ceil((e.height || i) / i), m = ot(e.anchor || Xt).add(new x(1, 1)).scale(0.5).scale(c * s, f * i);
        for (let l = 0; l < c; l++)
          for (let g = 0; g < f; g++)
            we(Object.assign({}, e, { pos: (e.pos || new x(0)).add(new x(s * l, i * g)).sub(m), scale: a.scale(e.scale || new x(1)), tex: e.tex, quad: n, width: s, height: i, anchor: "topleft" }));
      } else
        e.width && e.height ? (a.x = e.width / s, a.y = e.height / i) : e.width ? (a.x = e.width / s, a.y = a.x) : e.height && (a.y = e.height / i, a.x = a.y), we(Object.assign({}, e, { scale: a.scale(e.scale || new x(1)), tex: e.tex, quad: n, width: s, height: i }));
    }
    __name(Te, "Te");
    o(Te, "drawTexture");
    function mn(e) {
      var _a21, _b2, _c2;
      if (!e.sprite)
        throw new G('drawSprite() requires property "sprite"');
      let n = ct(e.sprite);
      if (!n || !n.data)
        return;
      let s = n.data.frames[(_a21 = e.frame) != null ? _a21 : 0];
      if (!s)
        throw new G(`Frame not found: ${(_b2 = e.frame) != null ? _b2 : 0}`);
      Te(Object.assign({}, e, { tex: n.data.tex, quad: s.scale((_c2 = e.quad) != null ? _c2 : new re(0, 0, 1, 1)) }));
    }
    __name(mn, "mn");
    o(mn, "drawSprite");
    function xe(e, n, s, i, a, c = 1) {
      i = Ae(i % 360), a = Ae(a % 360), a <= i && (a += Math.PI * 2);
      let f = [], w = Math.ceil((a - i) / Ae(8) * c), m = (a - i) / w;
      for (let l = i; l < a; l += m)
        f.push(e.add(n * Math.cos(l), s * Math.sin(l)));
      return f.push(e.add(n * Math.cos(a), s * Math.sin(a))), f;
    }
    __name(xe, "xe");
    o(xe, "getArcPts");
    function me(e) {
      if (e.width === void 0 || e.height === void 0)
        throw new G('drawRect() requires property "width" and "height".');
      if (e.width <= 0 || e.height <= 0)
        return;
      let n = e.width, s = e.height, a = ot(e.anchor || Xt).add(1, 1).scale(new x(n, s).scale(-0.5)), c = [new x(0, 0), new x(n, 0), new x(n, s), new x(0, s)];
      if (e.radius) {
        let f = Math.min(Math.min(n, s) / 2, e.radius);
        c = [new x(f, 0), new x(n - f, 0), ...xe(new x(n - f, f), f, f, 270, 360), new x(n, f), new x(n, s - f), ...xe(new x(n - f, s - f), f, f, 0, 90), new x(n - f, s), new x(f, s), ...xe(new x(f, s - f), f, f, 90, 180), new x(0, s - f), new x(0, f), ...xe(new x(f, f), f, f, 180, 270)];
      }
      He(Object.assign({}, e, __spreadValues({ offset: a, pts: c }, e.gradient ? { colors: e.horizontal ? [e.gradient[0], e.gradient[1], e.gradient[1], e.gradient[0]] : [e.gradient[0], e.gradient[0], e.gradient[1], e.gradient[1]] } : {})));
    }
    __name(me, "me");
    o(me, "drawRect");
    function dt(e) {
      let { p1: n, p2: s } = e;
      if (!n || !s)
        throw new G('drawLine() requires properties "p1" and "p2".');
      let i = e.width || 1, a = s.sub(n).unit().normal().scale(i * 0.5), c = [n.sub(a), n.add(a), s.add(a), s.sub(a)].map((f) => {
        var _a21, _b2;
        return { pos: new x(f.x, f.y), uv: new x(0), color: (_a21 = e.color) != null ? _a21 : z.WHITE, opacity: (_b2 = e.opacity) != null ? _b2 : 1 };
      });
      Se(c, [0, 1, 3, 1, 2, 3], e.fixed, b.defTex, e.shader, e.uniform);
    }
    __name(dt, "dt");
    o(dt, "drawLine");
    function $n(e) {
      let n = e.pts;
      if (!n)
        throw new G('drawLines() requires property "pts".');
      if (!(n.length < 2))
        if (e.radius && n.length >= 3) {
          let s = n[0].sdist(n[1]);
          for (let a = 1; a < n.length - 1; a++)
            s = Math.min(n[a].sdist(n[a + 1]), s);
          let i = Math.min(e.radius, Math.sqrt(s) / 2);
          dt(Object.assign({}, e, { p1: n[0], p2: n[1] }));
          for (let a = 1; a < n.length - 2; a++) {
            let c = n[a], f = n[a + 1];
            dt(Object.assign({}, e, { p1: c, p2: f }));
          }
          dt(Object.assign({}, e, { p1: n[n.length - 2], p2: n[n.length - 1] }));
        } else
          for (let s = 0; s < n.length - 1; s++)
            dt(Object.assign({}, e, { p1: n[s], p2: n[s + 1] })), e.join !== "none" && Ze(Object.assign({}, e, { pos: n[s], radius: e.width / 2 }));
    }
    __name($n, "$n");
    o($n, "drawLines");
    function Kn(e) {
      if (!e.p1 || !e.p2 || !e.p3)
        throw new G('drawPolygon() requires properties "p1", "p2" and "p3".');
      return He(Object.assign({}, e, { pts: [e.p1, e.p2, e.p3] }));
    }
    __name(Kn, "Kn");
    o(Kn, "drawTriangle");
    function Ze(e) {
      if (typeof e.radius != "number")
        throw new G('drawCircle() requires property "radius".');
      e.radius !== 0 && zn(Object.assign({}, e, { radiusX: e.radius, radiusY: e.radius, angle: 0 }));
    }
    __name(Ze, "Ze");
    o(Ze, "drawCircle");
    function zn(e) {
      var _a21, _b2, _c2;
      if (e.radiusX === void 0 || e.radiusY === void 0)
        throw new G('drawEllipse() requires properties "radiusX" and "radiusY".');
      if (e.radiusX === 0 || e.radiusY === 0)
        return;
      let n = (_a21 = e.start) != null ? _a21 : 0, s = (_b2 = e.end) != null ? _b2 : 360, i = ot((_c2 = e.anchor) != null ? _c2 : "center").scale(new x(-e.radiusX, -e.radiusY)), a = xe(i, e.radiusX, e.radiusY, n, s, e.resolution);
      a.unshift(i);
      let c = Object.assign({}, e, __spreadValues({ pts: a, radius: 0 }, e.gradient ? { colors: [e.gradient[0], ...Array(a.length - 1).fill(e.gradient[1])] } : {}));
      if (s - n >= 360 && e.outline) {
        e.fill !== false && He(Object.assign(c, { outline: null })), He(Object.assign(c, { pts: a.slice(1), fill: false }));
        return;
      }
      He(c);
    }
    __name(zn, "zn");
    o(zn, "drawEllipse");
    function He(e) {
      var _a21, _b2;
      if (!e.pts)
        throw new G('drawPolygon() requires property "pts".');
      let n = e.pts.length;
      if (!(n < 3)) {
        if (K(), v(e.pos), T(e.scale), I(e.angle), v(e.offset), e.fill !== false) {
          let s = (_a21 = e.color) != null ? _a21 : z.WHITE, i = e.pts.map((c, f) => {
            var _a22, _b3;
            return { pos: new x(c.x, c.y), uv: new x(0, 0), color: e.colors ? (_a22 = e.colors[f]) != null ? _a22 : s : s, opacity: (_b3 = e.opacity) != null ? _b3 : 1 };
          }), a = [...Array(n - 2).keys()].map((c) => [0, c + 1, c + 2]).flat();
          Se(i, (_b2 = e.indices) != null ? _b2 : a, e.fixed, b.defTex, e.shader, e.uniform);
        }
        e.outline && $n({ pts: [...e.pts, e.pts[0]], radius: e.radius, width: e.outline.width, color: e.outline.color, join: e.outline.join, uniform: e.uniform, fixed: e.fixed, opacity: e.opacity }), _();
      }
    }
    __name(He, "He");
    o(He, "drawPolygon");
    function Yn(e, n, s) {
      Ee(), h.clear(h.STENCIL_BUFFER_BIT), h.enable(h.STENCIL_TEST), h.stencilFunc(h.NEVER, 1, 255), h.stencilOp(h.REPLACE, h.REPLACE, h.REPLACE), n(), Ee(), h.stencilFunc(s, 1, 255), h.stencilOp(h.KEEP, h.KEEP, h.KEEP), e(), Ee(), h.disable(h.STENCIL_TEST);
    }
    __name(Yn, "Yn");
    o(Yn, "drawStenciled");
    function Xn(e, n) {
      Yn(e, n, h.EQUAL);
    }
    __name(Xn, "Xn");
    o(Xn, "drawMasked");
    function Wn(e, n) {
      Yn(e, n, h.NOTEQUAL);
    }
    __name(Wn, "Wn");
    o(Wn, "drawSubtracted");
    function Jn() {
      return (b.viewport.width + b.viewport.height) / (b.width + b.height);
    }
    __name(Jn, "Jn");
    o(Jn, "getViewportScale");
    function ke(e) {
      Ee();
      let n = b.width, s = b.height;
      b.width = b.viewport.width, b.height = b.viewport.height, e(), Ee(), b.width = n, b.height = s;
    }
    __name(ke, "ke");
    o(ke, "drawUnscaled");
    function Qn(e, n) {
      n.pos && (e.pos = e.pos.add(n.pos)), n.scale && (e.scale = e.scale.scale(S(n.scale))), n.angle && (e.angle += n.angle), n.color && (e.color = e.color.mult(n.color)), n.opacity && (e.opacity *= n.opacity);
    }
    __name(Qn, "Qn");
    o(Qn, "applyCharTransform");
    let Zn = new RegExp("\\[(?<style>\\w+)\\](?<text>.*?)\\[\\/\\k<style>\\]", "g");
    function Zs(e) {
      let n = {}, s = e.replace(Zn, "$2"), i = 0;
      for (let a of e.matchAll(Zn)) {
        let c = a.index - i;
        for (let f = 0; f < a.groups.text.length; f++)
          n[f + c] = [a.groups.style];
        i += a[0].length - a.groups.text.length;
      }
      return { charStyleMap: n, text: s };
    }
    __name(Zs, "Zs");
    o(Zs, "compileStyledText");
    let pn = {};
    function qe(e) {
      var _a21, _b2, _c2, _d, _e2, _f, _g, _h, _i, _j, _k;
      if (e.text === void 0)
        throw new G('formatText() requires property "text".');
      let n = Dt(e.font);
      if (e.text === "" || n instanceof fe || !n)
        return { width: 0, height: 0, chars: [], opt: e };
      let { charStyleMap: s, text: i } = Zs(e.text + ""), a = i.split("");
      if (n instanceof Qe || typeof n == "string") {
        let X = n instanceof Qe ? n.fontface.family : n, H = n instanceof Qe ? { outline: n.outline, filter: n.filter } : { outline: null, filter: _n }, V = (_a21 = pn[X]) != null ? _a21 : { font: { tex: new pe(qs, $s, { filter: H.filter }), map: {}, size: _s }, cursor: new x(0), outline: H.outline };
        pn[X] || (pn[X] = V), n = V.font;
        for (let le of a)
          if (!V.font.map[le]) {
            let y = Y;
            y.clearRect(0, 0, q.width, q.height), y.font = `${n.size}px ${X}`, y.textBaseline = "top", y.textAlign = "left", y.fillStyle = "#ffffff";
            let D = y.measureText(le), F = Math.ceil(D.width), B = n.size;
            V.outline && (y.lineJoin = "round", y.lineWidth = V.outline.width * 2, y.strokeStyle = V.outline.color.toHex(), y.strokeText(le, V.outline.width, V.outline.width), F += V.outline.width * 2, B += V.outline.width * 3), y.fillText(le, (_c2 = (_b2 = V.outline) == null ? void 0 : _b2.width) != null ? _c2 : 0, (_e2 = (_d = V.outline) == null ? void 0 : _d.width) != null ? _e2 : 0);
            let $ = y.getImageData(0, 0, F, B);
            if (V.cursor.x + F > qs && (V.cursor.x = 0, V.cursor.y += B, V.cursor.y > $s))
              throw new G("Font atlas exceeds character limit");
            n.tex.update($, V.cursor.x, V.cursor.y), n.map[le] = new re(V.cursor.x, V.cursor.y, F, B), V.cursor.x += F;
          }
      }
      let c = e.size || n.size, f = S((_f = e.scale) != null ? _f : 1).scale(c / n.size), w = (_g = e.lineSpacing) != null ? _g : 0, m = (_h = e.letterSpacing) != null ? _h : 0, l = 0, g = 0, C = 0, P = [], k = [], j = 0, R = null, O = null;
      for (; j < a.length; ) {
        let X = a[j];
        if (X === `
`)
          C += c + w, P.push({ width: l - m, chars: k }), R = null, O = null, l = 0, k = [];
        else {
          let H = n.map[X];
          if (H) {
            let V = H.w * f.x;
            e.width && l + V > e.width && (C += c + w, R != null && (j -= k.length - R, X = a[j], H = n.map[X], V = H.w * f.x, k = k.slice(0, R - 1), l = O), R = null, O = null, P.push({ width: l - m, chars: k }), l = 0, k = []), k.push({ tex: n.tex, width: H.w, height: H.h, quad: new re(H.x / n.tex.width, H.y / n.tex.height, H.w / n.tex.width, H.h / n.tex.height), ch: X, pos: new x(l, C), opacity: (_i = e.opacity) != null ? _i : 1, color: (_j = e.color) != null ? _j : z.WHITE, scale: S(f), angle: 0 }), X === " " && (R = k.length, O = l), l += V, g = Math.max(g, l), l += m;
          }
        }
        j++;
      }
      P.push({ width: l - m, chars: k }), C += c, e.width && (g = e.width);
      let ne = [];
      for (let X of P) {
        let H = (g - X.width) * Ii((_k = e.align) != null ? _k : "left");
        for (let V of X.chars) {
          let le = n.map[V.ch], y = ne.length;
          if (V.pos = V.pos.add(H, 0).add(le.w * f.x * 0.5, le.h * f.y * 0.5), e.transform) {
            let D = typeof e.transform == "function" ? e.transform(y, V.ch) : e.transform;
            D && Qn(V, D);
          }
          if (s[y]) {
            let D = s[y];
            for (let F of D) {
              let B = e.styles[F], $ = typeof B == "function" ? B(y, V.ch) : B;
              $ && Qn(V, $);
            }
          }
          ne.push(V);
        }
      }
      return { width: g, height: C, chars: ne, opt: e };
    }
    __name(qe, "qe");
    o(qe, "formatText");
    function es(e) {
      $e(qe(e));
    }
    __name(es, "es");
    o(es, "drawText");
    function $e(e) {
      var _a21;
      K(), v(e.opt.pos), I(e.opt.angle), v(ot((_a21 = e.opt.anchor) != null ? _a21 : "topleft").add(1, 1).scale(e.width, e.height).scale(-0.5)), e.chars.forEach((n) => {
        we({ tex: n.tex, width: n.width, height: n.height, pos: n.pos, scale: n.scale, angle: n.angle, color: n.color, opacity: n.opacity, quad: n.quad, anchor: "center", uniform: e.opt.uniform, shader: e.opt.shader, fixed: e.opt.fixed });
      }), _();
    }
    __name($e, "$e");
    o($e, "drawFormattedText");
    function be() {
      return b.width;
    }
    __name(be, "be");
    o(be, "width");
    function ve() {
      return b.height;
    }
    __name(ve, "ve");
    o(ve, "height");
    let et = {};
    function er(e) {
      return new x((e.x - b.viewport.x) * be() / b.viewport.width, (e.y - b.viewport.y) * ve() / b.viewport.height);
    }
    __name(er, "er");
    o(er, "windowToContent");
    function tr(e) {
      return new x(e.x * b.viewport.width / b.width, e.y * b.viewport.height / b.height);
    }
    __name(tr, "tr");
    o(tr, "contentToView");
    function It() {
      return er(U.mousePos());
    }
    __name(It, "It");
    o(It, "mousePos"), et.error = (e) => {
      e.error && e.error instanceof G ? Cn(e.error) : e instanceof G && Cn(e);
    }, et.unhandledrejection = (e) => {
      e.reason instanceof G && Cn(e.reason);
    };
    for (let e in et)
      window.addEventListener(e, et[e]);
    let ts = false, te = { inspect: false, timeScale: 1, showLog: true, fps: () => U.fps(), numFrames: () => U.numFrames(), stepFrame: hs, drawCalls: () => b.lastDrawCalls, clearLog: () => A.logs = [], log: (e) => {
      var _a21;
      let n = (_a21 = r.logMax) != null ? _a21 : Ri;
      A.logs.unshift({ msg: e, time: U.time() }), A.logs.length > n && (A.logs = A.logs.slice(0, n));
    }, error: (e) => te.log(new G(e.toString ? e.toString() : e)), curRecording: null, numObjects: () => Un("*", { recursive: true }).length, get paused() {
      return ts;
    }, set paused(e) {
      ts = e, e ? ee.ctx.suspend() : ee.ctx.resume();
    } };
    function Ce() {
      return U.dt() * te.timeScale;
    }
    __name(Ce, "Ce");
    o(Ce, "dt");
    function nr(...e) {
      return e.length > 0 && (A.cam.pos = S(...e)), A.cam.pos ? A.cam.pos.clone() : Ht();
    }
    __name(nr, "nr");
    o(nr, "camPos");
    function sr(...e) {
      return e.length > 0 && (A.cam.scale = S(...e)), A.cam.scale.clone();
    }
    __name(sr, "sr");
    o(sr, "camScale");
    function rr(e) {
      return e !== void 0 && (A.cam.angle = e), A.cam.angle;
    }
    __name(rr, "rr");
    o(rr, "camRot");
    function ir(e = 12) {
      A.cam.shake += e;
    }
    __name(ir, "ir");
    o(ir, "shake");
    function ns(e) {
      return A.cam.transform.multVec2(e);
    }
    __name(ns, "ns");
    o(ns, "toScreen");
    function ss(e) {
      return A.cam.transform.invert().multVec2(e);
    }
    __name(ss, "ss");
    o(ss, "toWorld");
    function Vt(e) {
      let n = new Ue();
      return e.pos && n.translate(e.pos), e.scale && n.scale(e.scale), e.angle && n.rotate(e.angle), e.parent ? n.mult(e.parent.transform) : n;
    }
    __name(Vt, "Vt");
    o(Vt, "calcTransform");
    function gn(e = []) {
      let n = /* @__PURE__ */ new Map(), s = {}, i = new Le(), a = [], c = null, f = false, w = { id: Rs(), hidden: false, transform: new Ue(), children: [], parent: null, set paused(l) {
        if (l !== f) {
          f = l;
          for (let g of a)
            g.paused = l;
        }
      }, get paused() {
        return f;
      }, add(l = []) {
        let g = Array.isArray(l) ? gn(l) : l;
        if (g.parent)
          throw new G("Cannot add a game obj that already has a parent.");
        return g.parent = this, g.transform = Vt(g), this.children.push(g), g.trigger("add", g), A.events.trigger("add", g), g;
      }, readd(l) {
        let g = this.children.indexOf(l);
        return g !== -1 && (this.children.splice(g, 1), this.children.push(l)), l;
      }, remove(l) {
        let g = this.children.indexOf(l);
        if (g !== -1) {
          l.parent = null, this.children.splice(g, 1);
          let C = o((P) => {
            P.trigger("destroy"), A.events.trigger("destroy", P), P.children.forEach((k) => C(k));
          }, "trigger");
          C(l);
        }
      }, removeAll(l) {
        if (l)
          this.get(l).forEach((g) => this.remove(g));
        else
          for (let g of [...this.children])
            this.remove(g);
      }, update() {
        this.paused || (this.children.sort((l, g) => {
          var _a21, _b2;
          return ((_a21 = l.z) != null ? _a21 : 0) - ((_b2 = g.z) != null ? _b2 : 0);
        }).forEach((l) => l.update()), this.trigger("update"));
      }, draw() {
        if (this.hidden)
          return;
        let l = b.fixed;
        this.fixed && (b.fixed = true), K(), v(this.pos), T(this.scale), I(this.angle);
        let g = this.children.sort((C, P) => {
          var _a21, _b2;
          return ((_a21 = C.z) != null ? _a21 : 0) - ((_b2 = P.z) != null ? _b2 : 0);
        });
        if (this.mask) {
          let C = { intersect: Xn, subtract: Wn }[this.mask];
          if (!C)
            throw new G(`Invalid mask func: "${this.mask}"`);
          C(() => {
            g.forEach((P) => P.draw());
          }, () => {
            this.trigger("draw");
          });
        } else
          this.trigger("draw"), g.forEach((C) => C.draw());
        _(), b.fixed = l;
      }, drawInspect() {
        this.hidden || (K(), v(this.pos), T(this.scale), I(this.angle), this.children.sort((l, g) => {
          var _a21, _b2;
          return ((_a21 = l.z) != null ? _a21 : 0) - ((_b2 = g.z) != null ? _b2 : 0);
        }).forEach((l) => l.drawInspect()), this.trigger("drawInspect"), _());
      }, use(l) {
        if (!l)
          return;
        if (typeof l == "string")
          return this.use({ id: l });
        let g = [];
        l.id && (this.unuse(l.id), s[l.id] = [], g = s[l.id], n.set(l.id, l));
        for (let P in l) {
          if (Bi.has(P))
            continue;
          let k = Object.getOwnPropertyDescriptor(l, P);
          if (typeof k.value == "function" && (l[P] = l[P].bind(this)), k.set && Object.defineProperty(l, P, { set: k.set.bind(this) }), k.get && Object.defineProperty(l, P, { get: k.get.bind(this) }), Li.has(P)) {
            let j = P === "add" ? () => {
              c = o((R) => g.push(R), "onCurCompCleanup"), l[P](), c = null;
            } : l[P];
            g.push(this.on(P, j).cancel);
          } else if (this[P] === void 0)
            Object.defineProperty(this, P, { get: () => l[P], set: (j) => l[P] = j, configurable: true, enumerable: true }), g.push(() => delete this[P]);
          else
            throw new G(`Duplicate component property: "${P}"`);
        }
        let C = o(() => {
          if (l.require) {
            for (let P of l.require)
              if (!this.c(P))
                throw new G(`Component "${l.id}" requires component "${P}"`);
          }
        }, "checkDeps");
        l.destroy && g.push(l.destroy.bind(this)), this.exists() ? (C(), l.add && (c = o((P) => g.push(P), "onCurCompCleanup"), l.add.call(this), c = null)) : l.require && g.push(this.on("add", C).cancel);
      }, unuse(l) {
        s[l] && (s[l].forEach((g) => g()), delete s[l]), n.has(l) && n.delete(l);
      }, c(l) {
        return n.get(l);
      }, get(l, g = {}) {
        let C = g.recursive ? this.children.flatMap(o(/* @__PURE__ */ __name(function P(k) {
          return [k, ...k.children.flatMap(P)];
        }, "P"), "recurse")) : this.children;
        if (C = C.filter((P) => l ? P.is(l) : true), g.liveUpdate) {
          let P = o((j) => g.recursive ? this.isAncestorOf(j) : j.parent === this, "isChild"), k = [];
          k.push(bn((j) => {
            P(j) && j.is(l) && C.push(j);
          })), k.push(rs((j) => {
            if (P(j) && j.is(l)) {
              let R = C.findIndex((O) => O.id === j.id);
              R !== -1 && C.splice(R, 1);
            }
          })), this.onDestroy(() => {
            for (let j of k)
              j.cancel();
          });
        }
        return C;
      }, isAncestorOf(l) {
        return l.parent ? l.parent === this || this.isAncestorOf(l.parent) : false;
      }, exists() {
        return A.root.isAncestorOf(this);
      }, is(l) {
        if (l === "*")
          return true;
        if (Array.isArray(l)) {
          for (let g of l)
            if (!this.c(g))
              return false;
          return true;
        } else
          return this.c(l) != null;
      }, on(l, g) {
        let C = i.on(l, g.bind(this));
        return c && c(() => C.cancel()), C;
      }, trigger(l, ...g) {
        i.trigger(l, ...g), A.objEvents.trigger(l, this, ...g);
      }, destroy() {
        this.parent && this.parent.remove(this);
      }, inspect() {
        let l = {};
        for (let [g, C] of n)
          l[g] = C.inspect ? C.inspect() : null;
        return l;
      }, onAdd(l) {
        return this.on("add", l);
      }, onUpdate(l) {
        return this.on("update", l);
      }, onDraw(l) {
        return this.on("draw", l);
      }, onDestroy(l) {
        return this.on("destroy", l);
      }, clearEvents() {
        i.clear();
      } }, m = ["onKeyPress", "onKeyPressRepeat", "onKeyDown", "onKeyRelease", "onMousePress", "onMouseDown", "onMouseRelease", "onMouseMove", "onCharInput", "onMouseMove", "onTouchStart", "onTouchMove", "onTouchEnd", "onScroll", "onGamepadButtonPress", "onGamepadButtonDown", "onGamepadButtonRelease", "onGamepadStick"];
      for (let l of m)
        w[l] = (...g) => {
          let C = U[l](...g);
          return a.push(C), w.onDestroy(() => C.cancel()), C;
        };
      for (let l of e)
        w.use(l);
      return w;
    }
    __name(gn, "gn");
    o(gn, "make");
    function je(e, n, s) {
      return A.objEvents[e] || (A.objEvents[e] = new xt()), A.objEvents.on(e, (i, ...a) => {
        i.is(n) && s(i, ...a);
      });
    }
    __name(je, "je");
    o(je, "on");
    let wn = o((e, n) => {
      if (typeof e == "function" && n === void 0) {
        let s = pt([{ update: e }]);
        return { get paused() {
          return s.paused;
        }, set paused(i) {
          s.paused = i;
        }, cancel: () => s.destroy() };
      } else if (typeof e == "string")
        return je("update", e, n);
    }, "onUpdate"), or = o((e, n) => {
      if (typeof e == "function" && n === void 0) {
        let s = pt([{ draw: e }]);
        return { get paused() {
          return s.hidden;
        }, set paused(i) {
          s.hidden = i;
        }, cancel: () => s.destroy() };
      } else if (typeof e == "string")
        return je("draw", e, n);
    }, "onDraw");
    function bn(e, n) {
      if (typeof e == "function" && n === void 0)
        return A.events.on("add", e);
      if (typeof e == "string")
        return je("add", e, n);
    }
    __name(bn, "bn");
    o(bn, "onAdd");
    function rs(e, n) {
      if (typeof e == "function" && n === void 0)
        return A.events.on("destroy", e);
      if (typeof e == "string")
        return je("destroy", e, n);
    }
    __name(rs, "rs");
    o(rs, "onDestroy");
    function ar(e, n, s) {
      return je("collide", e, (i, a, c) => a.is(n) && s(i, a, c));
    }
    __name(ar, "ar");
    o(ar, "onCollide");
    function ur(e, n, s) {
      return je("collideUpdate", e, (i, a, c) => a.is(n) && s(i, a, c));
    }
    __name(ur, "ur");
    o(ur, "onCollideUpdate");
    function cr(e, n, s) {
      return je("collideEnd", e, (i, a, c) => a.is(n) && s(i, a, c));
    }
    __name(cr, "cr");
    o(cr, "onCollideEnd");
    function kt(e, n) {
      Un(e, { recursive: true }).forEach(n), bn(e, n);
    }
    __name(kt, "kt");
    o(kt, "forAllCurrentAndFuture");
    function lr(e, n) {
      if (typeof e == "function")
        return U.onMousePress(e);
      {
        let s = [];
        return kt(e, (i) => {
          if (!i.area)
            throw new G("onClick() requires the object to have area() component");
          s.push(i.onClick(() => n(i)));
        }), Be.join(s);
      }
    }
    __name(lr, "lr");
    o(lr, "onClick");
    function hr(e, n) {
      let s = [];
      return kt(e, (i) => {
        if (!i.area)
          throw new G("onHover() requires the object to have area() component");
        s.push(i.onHover(() => n(i)));
      }), Be.join(s);
    }
    __name(hr, "hr");
    o(hr, "onHover");
    function dr(e, n) {
      let s = [];
      return kt(e, (i) => {
        if (!i.area)
          throw new G("onHoverUpdate() requires the object to have area() component");
        s.push(i.onHoverUpdate(() => n(i)));
      }), Be.join(s);
    }
    __name(dr, "dr");
    o(dr, "onHoverUpdate");
    function fr(e, n) {
      let s = [];
      return kt(e, (i) => {
        if (!i.area)
          throw new G("onHoverEnd() requires the object to have area() component");
        s.push(i.onHoverEnd(() => n(i)));
      }), Be.join(s);
    }
    __name(fr, "fr");
    o(fr, "onHoverEnd");
    function jt(e, n) {
      let s = 0, i = [];
      n && i.push(n);
      let a = wn(() => {
        s += Ce(), s >= e && (a.cancel(), i.forEach((c) => c()));
      });
      return { paused: a.paused, cancel: a.cancel, onEnd(c) {
        i.push(c);
      }, then(c) {
        return this.onEnd(c), this;
      } };
    }
    __name(jt, "jt");
    o(jt, "wait");
    function mr(e, n) {
      let s = null, i = o(() => {
        s = jt(e, i), n();
      }, "newAction");
      return s = jt(0, i), { get paused() {
        return s.paused;
      }, set paused(a) {
        s.paused = a;
      }, cancel: () => s.cancel() };
    }
    __name(mr, "mr");
    o(mr, "loop");
    function pr() {
      U.onKeyPress("f1", () => {
        te.inspect = !te.inspect;
      }), U.onKeyPress("f2", () => {
        te.clearLog();
      }), U.onKeyPress("f8", () => {
        te.paused = !te.paused;
      }), U.onKeyPress("f7", () => {
        te.timeScale = ft(Ge(te.timeScale - 0.2, 0, 2), 1);
      }), U.onKeyPress("f9", () => {
        te.timeScale = ft(Ge(te.timeScale + 0.2, 0, 2), 1);
      }), U.onKeyPress("f10", () => {
        te.stepFrame();
      });
    }
    __name(pr, "pr");
    o(pr, "enterDebugMode");
    function gr() {
      U.onKeyPress("b", () => Bt());
    }
    __name(gr, "gr");
    o(gr, "enterBurpMode");
    function wr(e) {
      A.gravity = e;
    }
    __name(wr, "wr");
    o(wr, "setGravity");
    function br() {
      return A.gravity;
    }
    __name(br, "br");
    o(br, "getGravity");
    function vr(...e) {
      e.length === 1 || e.length === 2 ? (b.bgColor = J(e[0]), e[1] && (b.bgAlpha = e[1])) : (e.length === 3 || e.length === 4) && (b.bgColor = J(e[0], e[1], e[2]), e[3] && (b.bgAlpha = e[3])), h.clearColor(b.bgColor.r / 255, b.bgColor.g / 255, b.bgColor.b / 255, b.bgAlpha);
    }
    __name(vr, "vr");
    o(vr, "setBackground");
    function yr() {
      return b.bgColor.clone();
    }
    __name(yr, "yr");
    o(yr, "getBackground");
    function Nt(...e) {
      return { id: "pos", pos: S(...e), moveBy(...n) {
        this.pos = this.pos.add(S(...n));
      }, move(...n) {
        this.moveBy(S(...n).scale(Ce()));
      }, moveTo(...n) {
        if (typeof n[0] == "number" && typeof n[1] == "number")
          return this.moveTo(S(n[0], n[1]), n[2]);
        let s = n[0], i = n[1];
        if (i === void 0) {
          this.pos = S(s);
          return;
        }
        let a = s.sub(this.pos);
        if (a.len() <= i * Ce()) {
          this.pos = S(s);
          return;
        }
        this.move(a.unit().scale(i));
      }, worldPos() {
        return this.parent ? this.parent.transform.multVec2(this.pos) : this.pos;
      }, screenPos() {
        let n = this.worldPos();
        return mt(this) ? n : ns(n);
      }, inspect() {
        return `(${Math.round(this.pos.x)}, ${Math.round(this.pos.y)})`;
      }, drawInspect() {
        Ze({ color: J(255, 0, 0), radius: 4 / Jn() });
      } };
    }
    __name(Nt, "Nt");
    o(Nt, "pos");
    function _t(...e) {
      return e.length === 0 ? _t(1) : { id: "scale", scale: S(...e), scaleTo(...n) {
        this.scale = S(...n);
      }, scaleBy(...n) {
        this.scale.scale(S(...n));
      }, inspect() {
        return `(${ft(this.scale.x, 2)}, ${ft(this.scale.y, 2)})`;
      } };
    }
    __name(_t, "_t");
    o(_t, "scale");
    function xr(e) {
      return { id: "rotate", angle: e != null ? e : 0, rotateBy(n) {
        this.angle += n;
      }, rotateTo(n) {
        this.angle = n;
      }, inspect() {
        return `${Math.round(this.angle)}`;
      } };
    }
    __name(xr, "xr");
    o(xr, "rotate");
    function Ur(...e) {
      return { id: "color", color: J(...e), inspect() {
        return this.color.toString();
      } };
    }
    __name(Ur, "Ur");
    o(Ur, "color");
    function ft(e, n) {
      return Number(e.toFixed(n));
    }
    __name(ft, "ft");
    o(ft, "toFixed");
    function Er(e) {
      return { id: "opacity", opacity: e != null ? e : 1, inspect() {
        return `${ft(this.opacity, 1)}`;
      }, fadeOut(n = 1, s = it.linear) {
        return Sn(this.opacity, 0, n, (i) => this.opacity = i, s);
      } };
    }
    __name(Er, "Er");
    o(Er, "opacity");
    function vn(e) {
      if (!e)
        throw new G("Please define an anchor");
      return { id: "anchor", anchor: e, inspect() {
        return typeof this.anchor == "string" ? this.anchor : this.anchor.toString();
      } };
    }
    __name(vn, "vn");
    o(vn, "anchor");
    function Cr(e) {
      return { id: "z", z: e, inspect() {
        return `${this.z}`;
      } };
    }
    __name(Cr, "Cr");
    o(Cr, "z");
    function Sr(e, n) {
      return { id: "follow", require: ["pos"], follow: { obj: e, offset: n != null ? n : S(0) }, add() {
        e.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      }, update() {
        e.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      } };
    }
    __name(Sr, "Sr");
    o(Sr, "follow");
    function Tr(e, n) {
      let s = typeof e == "number" ? x.fromAngle(e) : e.unit();
      return { id: "move", require: ["pos"], update() {
        this.move(s.scale(n));
      } };
    }
    __name(Tr, "Tr");
    o(Tr, "move");
    let Ar = 200;
    function Or(e = {}) {
      var _a21;
      let n = (_a21 = e.distance) != null ? _a21 : Ar, s = false;
      return { id: "offscreen", require: ["pos"], isOffScreen() {
        let i = this.screenPos(), a = new ce(S(0), be(), ve());
        return !bt(a, i) && a.sdistToPoint(i) > n * n;
      }, onExitScreen(i) {
        return this.on("exitView", i);
      }, onEnterScreen(i) {
        return this.on("enterView", i);
      }, update() {
        this.isOffScreen() ? (s || (this.trigger("exitView"), s = true), e.hide && (this.hidden = true), e.pause && (this.paused = true), e.destroy && this.destroy()) : (s && (this.trigger("enterView"), s = false), e.hide && (this.hidden = false), e.pause && (this.paused = false));
      } };
    }
    __name(Or, "Or");
    o(Or, "offscreen");
    function mt(e) {
      return e.fixed ? true : e.parent ? mt(e.parent) : false;
    }
    __name(mt, "mt");
    o(mt, "isFixed");
    function Pr(e = {}) {
      var _a21, _b2, _c2, _d;
      let n = {}, s = /* @__PURE__ */ new Set();
      return { id: "area", collisionIgnore: (_a21 = e.collisionIgnore) != null ? _a21 : [], add() {
        this.area.cursor && this.onHover(() => U.setCursor(this.area.cursor)), this.onCollideUpdate((i, a) => {
          n[i.id] || this.trigger("collide", i, a), n[i.id] = a, s.add(i.id);
        });
      }, update() {
        for (let i in n)
          s.has(Number(i)) || (this.trigger("collideEnd", n[i].target), delete n[i]);
        s.clear();
      }, drawInspect() {
        let i = this.localArea();
        K(), T(this.area.scale), v(this.area.offset);
        let a = { outline: { width: 4 / Jn(), color: J(0, 0, 255) }, anchor: this.anchor, fill: false, fixed: mt(this) };
        i instanceof ce ? me(__spreadProps(__spreadValues({}, a), { pos: i.pos, width: i.width, height: i.height })) : i instanceof Ye ? He(__spreadProps(__spreadValues({}, a), { pts: i.pts })) : i instanceof vt && Ze(__spreadProps(__spreadValues({}, a), { pos: i.center, radius: i.radius })), _();
      }, area: { shape: (_b2 = e.shape) != null ? _b2 : null, scale: e.scale ? S(e.scale) : S(1), offset: (_c2 = e.offset) != null ? _c2 : S(0), cursor: (_d = e.cursor) != null ? _d : null }, isClicked() {
        return U.isMousePressed() && this.isHovering();
      }, isHovering() {
        let i = mt(this) ? It() : ss(It());
        return this.hasPoint(i);
      }, checkCollision(i) {
        var _a22;
        return (_a22 = n[i.id]) != null ? _a22 : null;
      }, getCollisions() {
        return Object.values(n);
      }, isColliding(i) {
        return !!n[i.id];
      }, isOverlapping(i) {
        let a = n[i.id];
        return a && a.hasOverlap();
      }, onClick(i) {
        let a = U.onMousePress("left", () => {
          this.isHovering() && i();
        });
        return this.onDestroy(() => a.cancel()), a;
      }, onHover(i) {
        let a = false;
        return this.onUpdate(() => {
          a ? a = this.isHovering() : this.isHovering() && (a = true, i());
        });
      }, onHoverUpdate(i) {
        return this.onUpdate(() => {
          this.isHovering() && i();
        });
      }, onHoverEnd(i) {
        let a = false;
        return this.onUpdate(() => {
          a ? this.isHovering() || (a = false, i()) : a = this.isHovering();
        });
      }, onCollide(i, a) {
        if (typeof i == "function" && a === void 0)
          return this.on("collide", i);
        if (typeof i == "string")
          return this.onCollide((c, f) => {
            c.is(i) && a(c, f);
          });
      }, onCollideUpdate(i, a) {
        if (typeof i == "function" && a === void 0)
          return this.on("collideUpdate", i);
        if (typeof i == "string")
          return this.on("collideUpdate", (c, f) => c.is(i) && a(c, f));
      }, onCollideEnd(i, a) {
        if (typeof i == "function" && a === void 0)
          return this.on("collideEnd", i);
        if (typeof i == "string")
          return this.on("collideEnd", (c) => c.is(i) && a(c));
      }, hasPoint(i) {
        return Fn(this.worldArea(), i);
      }, resolveCollision(i) {
        let a = this.checkCollision(i);
        a && !a.resolved && (this.pos = this.pos.add(a.displacement), a.resolved = true);
      }, localArea() {
        return this.area.shape ? this.area.shape : this.renderArea();
      }, worldArea() {
        var _a22;
        let i = this.localArea();
        if (!(i instanceof Ye || i instanceof ce))
          throw new G("Only support polygon and rect shapes for now");
        let a = this.transform.clone().scale(S((_a22 = this.area.scale) != null ? _a22 : 1)).translate(this.area.offset);
        if (i instanceof ce) {
          let c = ot(this.anchor || Xt).add(1, 1).scale(-0.5).scale(i.width, i.height);
          a.translate(c);
        }
        return i.transform(a);
      }, screenArea() {
        let i = this.worldArea();
        return mt(this) ? i : i.transform(A.cam.transform);
      } };
    }
    __name(Pr, "Pr");
    o(Pr, "area");
    function tt(e) {
      return { color: e.color, opacity: e.opacity, anchor: e.anchor, outline: e.outline, shader: e.shader, uniform: e.uniform };
    }
    __name(tt, "tt");
    o(tt, "getRenderProps");
    function yn(e, n = {}) {
      var _a21, _b2, _c2;
      let s = null, i = null, a = null, c = new ye();
      if (!e)
        throw new G("Please pass the resource name or data to sprite()");
      let f = o((w, m, l, g) => {
        let C = S(1, 1);
        return l && g ? (C.x = l / (w.width * m.w), C.y = g / (w.height * m.h)) : l ? (C.x = l / (w.width * m.w), C.y = C.x) : g && (C.y = g / (w.height * m.h), C.x = C.y), C;
      }, "calcTexScale");
      return { id: "sprite", width: 0, height: 0, frame: n.frame || 0, quad: n.quad || new re(0, 0, 1, 1), animSpeed: (_a21 = n.animSpeed) != null ? _a21 : 1, flipX: (_b2 = n.flipX) != null ? _b2 : false, flipY: (_c2 = n.flipY) != null ? _c2 : false, draw() {
        var _a22, _b3, _c3;
        if (!s)
          return;
        let w = s.frames[(_a22 = this.frame) != null ? _a22 : 0];
        if (!w)
          throw new G(`Frame not found: ${(_b3 = this.frame) != null ? _b3 : 0}`);
        if (s.slice9) {
          let { left: m, right: l, top: g, bottom: C } = s.slice9, P = s.tex.width * w.w, k = s.tex.height * w.h, j = this.width - m - l, R = this.height - g - C, O = m / P, ne = l / P, X = 1 - O - ne, H = g / k, V = C / k, le = 1 - H - V, y = [ie(0, 0, O, H), ie(O, 0, X, H), ie(O + X, 0, ne, H), ie(0, H, O, le), ie(O, H, X, le), ie(O + X, H, ne, le), ie(0, H + le, O, V), ie(O, H + le, X, V), ie(O + X, H + le, ne, V), ie(0, 0, m, g), ie(m, 0, j, g), ie(m + j, 0, l, g), ie(0, g, m, R), ie(m, g, j, R), ie(m + j, g, l, R), ie(0, g + R, m, C), ie(m, g + R, j, C), ie(m + j, g + R, l, C)];
          for (let D = 0; D < 9; D++) {
            let F = y[D], B = y[D + 9];
            Te(Object.assign(tt(this), { pos: B.pos(), tex: s.tex, quad: w.scale(F), flipX: this.flipX, flipY: this.flipY, tiled: n.tiled, width: B.w, height: B.h }));
          }
        } else
          Te(Object.assign(tt(this), { tex: s.tex, quad: w.scale((_c3 = this.quad) != null ? _c3 : new re(0, 0, 1, 1)), flipX: this.flipX, flipY: this.flipY, tiled: n.tiled, width: this.width, height: this.height }));
      }, add() {
        let w = o((l) => {
          let g = l.frames[0].clone();
          n.quad && (g = g.scale(n.quad));
          let C = f(l.tex, g, n.width, n.height);
          this.width = l.tex.width * g.w * C.x, this.height = l.tex.height * g.h * C.y, n.anim && this.play(n.anim), s = l, c.trigger(s);
        }, "setSpriteData"), m = ct(e);
        m ? m.onLoad(w) : xn(() => w(ct(e).data));
      }, update() {
        if (!i)
          return;
        let w = s.anims[i.name];
        if (typeof w == "number") {
          this.frame = w;
          return;
        }
        if (w.speed === 0)
          throw new G("Sprite anim speed cannot be 0");
        i.timer += Ce() * this.animSpeed, i.timer >= 1 / i.speed && (i.timer = 0, this.frame += a, (this.frame < Math.min(w.from, w.to) || this.frame > Math.max(w.from, w.to)) && (i.loop ? i.pingpong ? (this.frame -= a, a *= -1, this.frame += a) : this.frame = w.from : (this.frame = w.to, i.onEnd(), this.stop())));
      }, play(w, m = {}) {
        var _a22, _b3, _c3, _d, _e2, _f, _g;
        if (!s) {
          c.add(() => this.play(w, m));
          return;
        }
        let l = s.anims[w];
        if (l === void 0)
          throw new G(`Anim not found: ${w}`);
        i && this.stop(), i = typeof l == "number" ? { name: w, timer: 0, loop: false, pingpong: false, speed: 0, onEnd: () => {
        } } : { name: w, timer: 0, loop: (_b3 = (_a22 = m.loop) != null ? _a22 : l.loop) != null ? _b3 : false, pingpong: (_d = (_c3 = m.pingpong) != null ? _c3 : l.pingpong) != null ? _d : false, speed: (_f = (_e2 = m.speed) != null ? _e2 : l.speed) != null ? _f : 10, onEnd: (_g = m.onEnd) != null ? _g : () => {
        } }, a = typeof l == "number" ? null : l.from < l.to ? 1 : -1, this.frame = typeof l == "number" ? l : l.from, this.trigger("animStart", w);
      }, stop() {
        if (!i)
          return;
        let w = i.name;
        i = null, this.trigger("animEnd", w);
      }, numFrames() {
        var _a22;
        return (_a22 = s == null ? void 0 : s.frames.length) != null ? _a22 : 0;
      }, curAnim() {
        return i == null ? void 0 : i.name;
      }, onAnimEnd(w) {
        return this.on("animEnd", w);
      }, onAnimStart(w) {
        return this.on("animStart", w);
      }, renderArea() {
        return new ce(S(0), this.width, this.height);
      }, inspect() {
        if (typeof e == "string")
          return `"${e}"`;
      } };
    }
    __name(yn, "yn");
    o(yn, "sprite");
    function Mr(e, n = {}) {
      var _a21, _b2;
      function s(a) {
        var _a22, _b3;
        let c = qe(Object.assign(tt(a), { text: a.text + "", size: a.textSize, font: a.font, width: n.width && a.width, align: a.align, letterSpacing: a.letterSpacing, lineSpacing: a.lineSpacing, transform: a.textTransform, styles: a.textStyles }));
        return n.width || (a.width = c.width / (((_a22 = a.scale) == null ? void 0 : _a22.x) || 1)), a.height = c.height / (((_b3 = a.scale) == null ? void 0 : _b3.y) || 1), c;
      }
      __name(s, "s");
      o(s, "update");
      let i = { id: "text", set text(a) {
        e = a, s(this);
      }, get text() {
        return e;
      }, textSize: (_a21 = n.size) != null ? _a21 : Pi, font: n.font, width: (_b2 = n.width) != null ? _b2 : 0, height: 0, align: n.align, lineSpacing: n.lineSpacing, letterSpacing: n.letterSpacing, textTransform: n.transform, textStyles: n.styles, add() {
        xn(() => s(this));
      }, draw() {
        $e(s(this));
      }, renderArea() {
        return new ce(S(0), this.width, this.height);
      } };
      return s(i), i;
    }
    __name(Mr, "Mr");
    o(Mr, "text");
    function Rr(e, n, s = {}) {
      return { id: "rect", width: e, height: n, radius: s.radius || 0, draw() {
        me(Object.assign(tt(this), { width: this.width, height: this.height, radius: this.radius, fill: s.fill }));
      }, renderArea() {
        return new ce(S(0), this.width, this.height);
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    __name(Rr, "Rr");
    o(Rr, "rect");
    function Dr(e, n) {
      return { id: "rect", width: e, height: n, draw() {
        we(Object.assign(tt(this), { width: this.width, height: this.height }));
      }, renderArea() {
        return new ce(S(0), this.width, this.height);
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    __name(Dr, "Dr");
    o(Dr, "uvquad");
    function Gr(e, n = {}) {
      return { id: "circle", radius: e, draw() {
        Ze(Object.assign(tt(this), { radius: this.radius, fill: n.fill }));
      }, renderArea() {
        return new ce(new x(this.anchor ? 0 : -this.radius), this.radius * 2, this.radius * 2);
      }, inspect() {
        return `${Math.ceil(this.radius)}`;
      } };
    }
    __name(Gr, "Gr");
    o(Gr, "circle");
    function Fr(e = 1, n = J(0, 0, 0)) {
      return { id: "outline", outline: { width: e, color: n } };
    }
    __name(Fr, "Fr");
    o(Fr, "outline");
    function is() {
      return { id: "timer", wait(e, n) {
        let s = [];
        n && s.push(n);
        let i = 0, a = this.onUpdate(() => {
          i += Ce(), i >= e && (s.forEach((c) => c()), a.cancel());
        });
        return { get paused() {
          return a.paused;
        }, set paused(c) {
          a.paused = c;
        }, cancel: a.cancel, onEnd(c) {
          s.push(c);
        }, then(c) {
          return this.onEnd(c), this;
        } };
      }, loop(e, n) {
        let s = null, i = o(() => {
          s = this.wait(e, i), n();
        }, "newAction");
        return s = this.wait(0, i), { get paused() {
          return s.paused;
        }, set paused(a) {
          s.paused = a;
        }, cancel: () => s.cancel() };
      }, tween(e, n, s, i, a = it.linear) {
        let c = 0, f = [], w = this.onUpdate(() => {
          c += Ce();
          let m = Math.min(c / s, 1);
          i(Oe(e, n, a(m))), m === 1 && (w.cancel(), i(n), f.forEach((l) => l()));
        });
        return { get paused() {
          return w.paused;
        }, set paused(m) {
          w.paused = m;
        }, onEnd(m) {
          f.push(m);
        }, then(m) {
          return this.onEnd(m), this;
        }, cancel() {
          w.cancel();
        }, finish() {
          w.cancel(), i(n), f.forEach((m) => m());
        } };
      } };
    }
    __name(is, "is");
    o(is, "timer");
    let Br = 640, Lr = 65536;
    function Ir(e = {}) {
      var _a21, _b2, _c2, _d;
      let n = S(0), s = null, i = null, a = false;
      return { id: "body", require: ["pos", "area"], jumpForce: (_a21 = e.jumpForce) != null ? _a21 : Br, gravityScale: (_b2 = e.gravityScale) != null ? _b2 : 1, isStatic: (_c2 = e.isStatic) != null ? _c2 : false, mass: (_d = e.mass) != null ? _d : 1, add() {
        if (this.mass === 0)
          throw new G("Can't set body mass to 0");
        this.onCollideUpdate((c, f) => {
          if (c.is("body") && !f.resolved && (this.trigger("beforePhysicsResolve", f), c.trigger("beforePhysicsResolve", f.reverse()), !f.resolved && !(this.isStatic && c.isStatic))) {
            if (!this.isStatic && !c.isStatic) {
              let w = this.mass + c.mass;
              this.pos = this.pos.add(f.displacement.scale(c.mass / w)), c.pos = c.pos.add(f.displacement.scale(-this.mass / w)), this.transform = Vt(this), c.transform = Vt(c);
            } else {
              let w = !this.isStatic && c.isStatic ? f : f.reverse();
              w.source.pos = w.source.pos.add(w.displacement), w.source.transform = Vt(w.source);
            }
            f.resolved = true, this.trigger("physicsResolve", f), c.trigger("physicsResolve", f.reverse());
          }
        }), this.onPhysicsResolve((c) => {
          A.gravity && (c.isBottom() && this.isFalling() ? (n.y = 0, s = c.target, i = c.target.pos, a ? a = false : this.trigger("ground", s)) : c.isTop() && this.isJumping() && (n.y = 0, this.trigger("headbutt", c.target)));
        });
      }, update() {
        var _a22;
        if (!A.gravity || this.isStatic)
          return;
        if (a && (s = null, i = null, this.trigger("fallOff"), a = false), s)
          if (!this.isOverlapping(s) || !s.exists() || !s.is("body"))
            a = true;
          else {
            !s.pos.eq(i) && e.stickToPlatform !== false && this.moveBy(s.pos.sub(i)), i = s.pos;
            return;
          }
        let c = n.y;
        n.y += A.gravity * this.gravityScale * Ce(), n.y = Math.min(n.y, (_a22 = e.maxVelocity) != null ? _a22 : Lr), c < 0 && n.y >= 0 && this.trigger("fall"), this.move(n);
      }, onPhysicsResolve(c) {
        return this.on("physicsResolve", c);
      }, onBeforePhysicsResolve(c) {
        return this.on("beforePhysicsResolve", c);
      }, curPlatform() {
        return s;
      }, isGrounded() {
        return s !== null;
      }, isFalling() {
        return n.y > 0;
      }, isJumping() {
        return n.y < 0;
      }, jump(c) {
        s = null, i = null, n.y = -c || -this.jumpForce;
      }, onGround(c) {
        return this.on("ground", c);
      }, onFall(c) {
        return this.on("fall", c);
      }, onFallOff(c) {
        return this.on("fallOff", c);
      }, onHeadbutt(c) {
        return this.on("headbutt", c);
      } };
    }
    __name(Ir, "Ir");
    o(Ir, "body");
    function Vr(e = 2) {
      let n = e;
      return { id: "doubleJump", require: ["body"], numJumps: e, add() {
        this.onGround(() => {
          n = this.numJumps;
        });
      }, doubleJump(s) {
        n <= 0 || (n < this.numJumps && this.trigger("doubleJump"), n--, this.jump(s));
      }, onDoubleJump(s) {
        return this.on("doubleJump", s);
      }, inspect() {
        return `${n}`;
      } };
    }
    __name(Vr, "Vr");
    o(Vr, "doubleJump");
    function kr(e, n) {
      return __spreadValues({ id: "shader", shader: e }, typeof n == "function" ? { uniform: n(), update() {
        this.uniform = n();
      } } : { uniform: n });
    }
    __name(kr, "kr");
    o(kr, "shader");
    function jr() {
      return { id: "fixed", fixed: true };
    }
    __name(jr, "jr");
    o(jr, "fixed");
    function os(e) {
      return { id: "stay", stay: true, scenesToStay: e };
    }
    __name(os, "os");
    o(os, "stay");
    function Nr(e) {
      if (e == null)
        throw new G("health() requires the initial amount of hp");
      let n = e;
      return { id: "health", hurt(s = 1) {
        this.setHP(e - s), this.trigger("hurt", s);
      }, heal(s = 1) {
        this.setHP(e + s), this.trigger("heal", s);
      }, hp() {
        return e;
      }, maxHP() {
        return n;
      }, setHP(s) {
        e = s, e <= 0 && this.trigger("death");
      }, onHurt(s) {
        return this.on("hurt", s);
      }, onHeal(s) {
        return this.on("heal", s);
      }, onDeath(s) {
        return this.on("death", s);
      }, inspect() {
        return `${e}`;
      } };
    }
    __name(Nr, "Nr");
    o(Nr, "health");
    function _r(e, n = {}) {
      var _a21;
      if (e == null)
        throw new G("lifespan() requires time");
      let s = (_a21 = n.fade) != null ? _a21 : 0;
      return { id: "lifespan", add() {
        return __async(this, null, function* () {
          yield jt(e), s > 0 && this.opacity && (yield Sn(this.opacity, 0, s, (i) => this.opacity = i, it.linear)), this.destroy();
        });
      } };
    }
    __name(_r, "_r");
    o(_r, "lifespan");
    function Hr(e, n, s) {
      if (!e)
        throw new G("state() requires an initial state");
      let i = {};
      function a(m) {
        i[m] || (i[m] = { enter: new ye(), end: new ye(), update: new ye(), draw: new ye() });
      }
      __name(a, "a");
      o(a, "initStateEvents");
      function c(m, l, g) {
        return a(l), i[l][m].add(g);
      }
      __name(c, "c");
      o(c, "on");
      function f(m, l, ...g) {
        a(l), i[l][m].trigger(...g);
      }
      __name(f, "f");
      o(f, "trigger");
      let w = false;
      return { id: "state", state: e, enterState(m, ...l) {
        if (w = true, n && !n.includes(m))
          throw new G(`State not found: ${m}`);
        let g = this.state;
        if (s) {
          if (!(s == null ? void 0 : s[g]))
            return;
          let C = typeof s[g] == "string" ? [s[g]] : s[g];
          if (!C.includes(m))
            throw new G(`Cannot transition state from "${g}" to "${m}". Available transitions: ${C.map((P) => `"${P}"`).join(", ")}`);
        }
        f("end", g, ...l), this.state = m, f("enter", m, ...l), f("enter", `${g} -> ${m}`, ...l);
      }, onStateTransition(m, l, g) {
        return c("enter", `${m} -> ${l}`, g);
      }, onStateEnter(m, l) {
        return c("enter", m, l);
      }, onStateUpdate(m, l) {
        return c("update", m, l);
      }, onStateDraw(m, l) {
        return c("draw", m, l);
      }, onStateEnd(m, l) {
        return c("end", m, l);
      }, update() {
        w || (f("enter", e), w = true), f("update", this.state);
      }, draw() {
        f("draw", this.state);
      }, inspect() {
        return this.state;
      } };
    }
    __name(Hr, "Hr");
    o(Hr, "state");
    function qr(e = 1) {
      let n = 0, s = false;
      return { require: ["opacity"], add() {
        this.opacity = 0;
      }, update() {
        s || (n += Ce(), this.opacity = Fe(n, 0, e, 0, 1), n >= e && (this.opacity = 1, s = true));
      } };
    }
    __name(qr, "qr");
    o(qr, "fadeIn");
    function $r(e = "intersect") {
      return { id: "mask", mask: e };
    }
    __name($r, "$r");
    o($r, "mask");
    function xn(e) {
      N.loaded ? e() : A.events.on("load", e);
    }
    __name(xn, "xn");
    o(xn, "onLoad");
    function Kr(e, n) {
      A.scenes[e] = n;
    }
    __name(Kr, "Kr");
    o(Kr, "scene");
    function zr(e, ...n) {
      if (!A.scenes[e])
        throw new G(`Scene not found: ${e}`);
      A.events.onOnce("frameEnd", () => {
        A.events.trigger("sceneLeave", e), U.events.clear(), A.events.clear(), A.objEvents.clear(), [...A.root.children].forEach((s) => {
          (!s.stay || s.scenesToStay && !s.scenesToStay.includes(e)) && A.root.remove(s);
        }), A.root.clearEvents(), ms(), A.cam = { pos: null, scale: S(1), angle: 0, shake: 0, transform: new Ue() }, A.scenes[e](...n);
      });
    }
    __name(zr, "zr");
    o(zr, "go");
    function Yr(e) {
      return A.events.on("sceneLeave", e);
    }
    __name(Yr, "Yr");
    o(Yr, "onSceneLeave");
    function Xr(e, n) {
      try {
        return JSON.parse(window.localStorage[e]);
      } catch (e2) {
        return n ? (as(e, n), n) : null;
      }
    }
    __name(Xr, "Xr");
    o(Xr, "getData");
    function as(e, n) {
      window.localStorage[e] = JSON.stringify(n);
    }
    __name(as, "as");
    o(as, "setData");
    function us(e, ...n) {
      let s = e(Ke), i;
      typeof s == "function" ? i = s(...n)(Ke) : i = s;
      for (let a in i)
        Ke[a] = i[a], r.global !== false && (window[a] = i[a]);
      return Ke;
    }
    __name(us, "us");
    o(us, "plug");
    function Ht() {
      return S(be() / 2, ve() / 2);
    }
    __name(Ht, "Ht");
    o(Ht, "center");
    let Wr;
    ((O) => (O[O.None = 0] = "None", O[O.Left = 1] = "Left", O[O.Top = 2] = "Top", O[O.LeftTop = 3] = "LeftTop", O[O.Right = 4] = "Right", O[O.Horizontal = 5] = "Horizontal", O[O.RightTop = 6] = "RightTop", O[O.HorizontalTop = 7] = "HorizontalTop", O[O.Bottom = 8] = "Bottom", O[O.LeftBottom = 9] = "LeftBottom", O[O.Vertical = 10] = "Vertical", O[O.LeftVertical = 11] = "LeftVertical", O[O.RightBottom = 12] = "RightBottom", O[O.HorizontalBottom = 13] = "HorizontalBottom", O[O.RightVertical = 14] = "RightVertical", O[O.All = 15] = "All"))(Wr || (Wr = {}));
    function cs(e = {}) {
      var _a21, _b2, _c2, _d;
      let n = S(0), s = (_a21 = e.isObstacle) != null ? _a21 : false, i = (_b2 = e.cost) != null ? _b2 : 0, a = (_c2 = e.edges) != null ? _c2 : [], c = o(() => {
        let w = { left: 1, top: 2, right: 4, bottom: 8 };
        return a.map((m) => w[m] || 0).reduce((m, l) => m | l, 0);
      }, "getEdgeMask"), f = c();
      return { id: "tile", tilePosOffset: (_d = e.offset) != null ? _d : S(0), set tilePos(w) {
        let m = this.getLevel();
        n = w.clone(), this.pos = S(this.tilePos.x * m.tileWidth(), this.tilePos.y * m.tileHeight()).add(this.tilePosOffset);
      }, get tilePos() {
        return n;
      }, set isObstacle(w) {
        s !== w && (s = w, this.getLevel().invalidateNavigationMap());
      }, get isObstacle() {
        return s;
      }, set cost(w) {
        i !== w && (i = w, this.getLevel().invalidateNavigationMap());
      }, get cost() {
        return i;
      }, set edges(w) {
        a = w, f = c(), this.getLevel().invalidateNavigationMap();
      }, get edges() {
        return a;
      }, get edgeMask() {
        return f;
      }, getLevel() {
        return this.parent;
      }, moveLeft() {
        this.tilePos = this.tilePos.add(S(-1, 0));
      }, moveRight() {
        this.tilePos = this.tilePos.add(S(1, 0));
      }, moveUp() {
        this.tilePos = this.tilePos.add(S(0, -1));
      }, moveDown() {
        this.tilePos = this.tilePos.add(S(0, 1));
      } };
    }
    __name(cs, "cs");
    o(cs, "tile");
    function Jr(e, n) {
      var _a21;
      if (!n.tileWidth || !n.tileHeight)
        throw new G("Must provide tileWidth and tileHeight.");
      let s = pt([Nt((_a21 = n.pos) != null ? _a21 : S(0))]), i = e.length, a = 0, c = null, f = null, w = null, m = null, l = o((y) => y.x + y.y * a, "tile2Hash"), g = o((y) => S(Math.floor(y % a), Math.floor(y / a)), "hash2Tile"), C = o(() => {
        c = [];
        for (let y of s.children)
          P(y);
      }, "createSpatialMap"), P = o((y) => {
        let D = l(y.tilePos);
        c[D] ? c[D].push(y) : c[D] = [y];
      }, "insertIntoSpatialMap"), k = o((y) => {
        let D = l(y.tilePos);
        if (c[D]) {
          let F = c[D].indexOf(y);
          F >= 0 && c[D].splice(F, 1);
        }
      }, "removeFromSpatialMap"), j = o(() => {
        let y = false;
        for (let D of s.children) {
          let F = s.pos2Tile(D.pos);
          (D.tilePos.x != F.x || D.tilePos.y != F.y) && (y = true, k(D), D.tilePos.x = F.x, D.tilePos.y = F.y, P(D));
        }
        y && s.trigger("spatial_map_changed");
      }, "updateSpatialMap"), R = o(() => {
        let y = s.getSpatialMap(), D = s.numRows() * s.numColumns();
        f ? f.length = D : f = new Array(D), f.fill(1, 0, D);
        for (let F = 0; F < y.length; F++) {
          let B = y[F];
          if (B) {
            let $ = 0;
            for (let W of B)
              if (W.isObstacle) {
                $ = 1 / 0;
                break;
              } else
                $ += W.cost;
            f[F] = $ || 1;
          }
        }
      }, "createCostMap"), O = o(() => {
        let y = s.getSpatialMap(), D = s.numRows() * s.numColumns();
        w ? w.length = D : w = new Array(D), w.fill(15, 0, D);
        for (let F = 0; F < y.length; F++) {
          let B = y[F];
          if (B) {
            let $ = B.length, W = 15;
            for (let se = 0; se < $; se++)
              W |= B[se].edgeMask;
            w[F] = W;
          }
        }
      }, "createEdgeMap"), ne = o(() => {
        let y = s.numRows() * s.numColumns(), D = o((B, $) => {
          let W = [];
          for (W.push(B); W.length > 0; ) {
            let se = W.pop();
            V(se).forEach((he) => {
              m[he] < 0 && (m[he] = $, W.push(he));
            });
          }
        }, "traverse");
        m ? m.length = y : m = new Array(y), m.fill(-1, 0, y);
        let F = 0;
        for (let B = 0; B < f.length; B++) {
          if (m[B] >= 0) {
            F++;
            continue;
          }
          D(B, F), F++;
        }
      }, "createConnectivityMap"), X = o((y, D) => f[D], "getCost"), H = o((y, D) => {
        let F = g(y), B = g(D);
        return F.dist(B);
      }, "getHeuristic"), V = o((y, D) => {
        let F = [], B = Math.floor(y % a), $ = B > 0 && w[y] & 1 && f[y - 1] !== 1 / 0, W = y >= a && w[y] & 2 && f[y - a] !== 1 / 0, se = B < a - 1 && w[y] & 4 && f[y + 1] !== 1 / 0, he = y < a * i - a - 1 && w[y] & 8 && f[y + a] !== 1 / 0;
        return D ? ($ && (W && F.push(y - a - 1), F.push(y - 1), he && F.push(y + a - 1)), W && F.push(y - a), se && (W && F.push(y - a + 1), F.push(y + 1), he && F.push(y + a + 1)), he && F.push(y + a)) : ($ && F.push(y - 1), W && F.push(y - a), se && F.push(y + 1), he && F.push(y + a)), F;
      }, "getNeighbours"), le = { id: "level", tileWidth() {
        return n.tileWidth;
      }, tileHeight() {
        return n.tileHeight;
      }, spawn(y, ...D) {
        let F = S(...D), B = (() => {
          if (typeof y == "string") {
            if (n.tiles[y]) {
              if (typeof n.tiles[y] != "function")
                throw new G("Level symbol def must be a function returning a component list");
              return n.tiles[y](F);
            } else if (n.wildcardTile)
              return n.wildcardTile(y, F);
          } else {
            if (Array.isArray(y))
              return y;
            throw new G("Expected a symbol or a component list");
          }
        })();
        if (!B)
          return null;
        let $ = false, W = false;
        for (let he of B)
          he.id === "tile" && (W = true), he.id === "pos" && ($ = true);
        $ || B.push(Nt()), W || B.push(cs());
        let se = s.add(B);
        return $ && (se.tilePosOffset = se.pos.clone()), se.tilePos = F, c && (P(se), this.trigger("spatial_map_changed"), this.trigger("navigation_map_invalid")), se;
      }, numColumns() {
        return a;
      }, numRows() {
        return i;
      }, levelWidth() {
        return a * this.tileWidth();
      }, levelHeight() {
        return i * this.tileHeight();
      }, tile2Pos(...y) {
        return S(...y).scale(this.tileWidth(), this.tileHeight());
      }, pos2Tile(...y) {
        let D = S(...y);
        return S(Math.floor(D.x / this.tileWidth()), Math.floor(D.y / this.tileHeight()));
      }, getSpatialMap() {
        return c || C(), c;
      }, onSpatialMapChanged(y) {
        return this.on("spatial_map_changed", y);
      }, onNavigationMapInvalid(y) {
        return this.on("navigation_map_invalid", y);
      }, getAt(y) {
        c || C();
        let D = l(y);
        return c[D] || [];
      }, update() {
        c && j();
      }, invalidateNavigationMap() {
        f = null, w = null, m = null;
      }, onNavigationMapChanged(y) {
        return this.on("navigation_map_changed", y);
      }, getTilePath(y, D, F = {}) {
        var _a22;
        if (f || R(), w || O(), m || ne(), y.x < 0 || y.x >= a || y.y < 0 || y.y >= i || D.x < 0 || D.x >= a || D.y < 0 || D.y >= i)
          return null;
        let B = l(y), $ = l(D);
        if (f[$] === 1 / 0)
          return null;
        if (B === $)
          return [];
        if (m[B] != -1 && m[B] !== m[$])
          return null;
        let W = new $t((Re, An) => Re.cost < An.cost);
        W.insert({ cost: 0, node: B });
        let se = /* @__PURE__ */ new Map();
        se.set(B, B);
        let he = /* @__PURE__ */ new Map();
        for (he.set(B, 0); W.length !== 0; ) {
          let Re = (_a22 = W.remove()) == null ? void 0 : _a22.node;
          if (Re === $)
            break;
          let An = V(Re, F.allowDiagonals);
          for (let ze of An) {
            let On = (he.get(Re) || 0) + X(Re, ze) + H(ze, $);
            (!he.has(ze) || On < he.get(ze)) && (he.set(ze, On), W.insert({ cost: On, node: ze }), se.set(ze, Re));
          }
        }
        let Tn = [], gt = $, gi = g(gt);
        for (Tn.push(gi); gt !== B; ) {
          gt = se.get(gt);
          let Re = g(gt);
          Tn.push(Re);
        }
        return Tn.reverse();
      }, getPath(y, D, F = {}) {
        let B = this.tileWidth(), $ = this.tileHeight(), W = this.getTilePath(this.pos2Tile(y), this.pos2Tile(D), F);
        return W ? [y, ...W.slice(1, -1).map((se) => se.scale(B, $).add(B / 2, $ / 2)), D] : null;
      } };
      return s.use(le), s.onNavigationMapInvalid(() => {
        s.invalidateNavigationMap(), s.trigger("navigation_map_changed");
      }), e.forEach((y, D) => {
        let F = y.split("");
        a = Math.max(F.length, a), F.forEach((B, $) => {
          s.spawn(B, S($, D));
        });
      }), s;
    }
    __name(Jr, "Jr");
    o(Jr, "addLevel");
    function Qr(e = {}) {
      var _a21, _b2;
      let n = null, s = null, i = null, a = null;
      return { id: "agent", require: ["pos", "tile"], agentSpeed: (_a21 = e.speed) != null ? _a21 : 100, allowDiagonals: (_b2 = e.allowDiagonals) != null ? _b2 : true, getDistanceToTarget() {
        return n ? this.pos.dist(n) : 0;
      }, getNextLocation() {
        return s && i ? s[i] : null;
      }, getPath() {
        return s ? s.slice() : null;
      }, getTarget() {
        return n;
      }, isNavigationFinished() {
        return s ? i === null : true;
      }, isTargetReachable() {
        return s !== null;
      }, isTargetReached() {
        return n ? this.pos.eq(n) : true;
      }, setTarget(c) {
        n = c, s = this.getLevel().getPath(this.pos, n, { allowDiagonals: this.allowDiagonals }), i = s ? 0 : null, s ? (a || (a = this.getLevel().onNavigationMapChanged(() => {
          s && i !== null && (s = this.getLevel().getPath(this.pos, n, { allowDiagonals: this.allowDiagonals }), i = s ? 0 : null, s ? this.trigger("navigation-next", this, s[i]) : this.trigger("navigation-ended", this));
        }), this.onDestroy(() => a.cancel())), this.trigger("navigation-started", this), this.trigger("navigation-next", this, s[i])) : this.trigger("navigation-ended", this);
      }, update() {
        if (s && i !== null) {
          if (this.pos.sdist(s[i]) < 2)
            if (i === s.length - 1) {
              this.pos = n.clone(), i = null, this.trigger("navigation-ended", this), this.trigger("target-reached", this);
              return;
            } else
              i++, this.trigger("navigation-next", this, s[i]);
          this.moveTo(s[i], this.agentSpeed);
        }
      }, onNavigationStarted(c) {
        return this.on("navigation-started", c);
      }, onNavigationNext(c) {
        return this.on("navigation-next", c);
      }, onNavigationEnded(c) {
        return this.on("navigation-ended", c);
      }, onTargetReached(c) {
        return this.on("target-reached", c);
      }, inspect() {
        return JSON.stringify({ target: JSON.stringify(n), path: JSON.stringify(s) });
      } };
    }
    __name(Qr, "Qr");
    o(Qr, "agent");
    function Zr(e) {
      let n = U.canvas().captureStream(e), s = ee.ctx.createMediaStreamDestination();
      ee.masterNode.connect(s);
      let i = new MediaRecorder(n), a = [];
      return i.ondataavailable = (c) => {
        c.data.size > 0 && a.push(c.data);
      }, i.onerror = () => {
        ee.masterNode.disconnect(s), n.getTracks().forEach((c) => c.stop());
      }, i.start(), { resume() {
        i.resume();
      }, pause() {
        i.pause();
      }, stop() {
        return i.stop(), ee.masterNode.disconnect(s), n.getTracks().forEach((c) => c.stop()), new Promise((c) => {
          i.onstop = () => {
            c(new Blob(a, { type: "video/mp4" }));
          };
        });
      }, download(c = "kaboom.mp4") {
        this.stop().then((f) => In(c, f));
      } };
    }
    __name(Zr, "Zr");
    o(Zr, "record");
    function ei() {
      return document.activeElement === U.canvas();
    }
    __name(ei, "ei");
    o(ei, "isFocused");
    function ti(e) {
      e.destroy();
    }
    __name(ti, "ti");
    o(ti, "destroy");
    let pt = A.root.add.bind(A.root), ni = A.root.readd.bind(A.root), si = A.root.removeAll.bind(A.root), Un = A.root.get.bind(A.root);
    function ls(e = 2, n = 1) {
      let s = 0;
      return { id: "boom", require: ["scale"], update() {
        let i = Math.sin(s * e) * n;
        i < 0 && this.destroy(), this.scale = S(i), s += Ce();
      } };
    }
    __name(ls, "ls");
    o(ls, "boom");
    let ri = Ne(null, Vs), ii = Ne(null, ks);
    function oi(e, n = {}) {
      var _a21, _b2;
      let s = pt([Nt(e), os()]), i = (n.speed || 1) * 5, a = n.scale || 1;
      s.add([yn(ii), _t(0), vn("center"), ls(i, a), ...(_a21 = n.comps) != null ? _a21 : []]);
      let c = s.add([yn(ri), _t(0), vn("center"), is(), ...(_b2 = n.comps) != null ? _b2 : []]);
      return c.wait(0.4 / i, () => c.use(ls(i, a))), c.onDestroy(() => s.destroy()), s;
    }
    __name(oi, "oi");
    o(oi, "addKaboom");
    function hs() {
      A.root.update();
    }
    __name(hs, "hs");
    o(hs, "updateFrame");
    const _En = class {
      constructor(n, s, i, a = false) {
        __publicField(this, "source");
        __publicField(this, "target");
        __publicField(this, "displacement");
        __publicField(this, "resolved", false);
        this.source = n, this.target = s, this.displacement = i, this.resolved = a;
      }
      reverse() {
        return new _En(this.target, this.source, this.displacement.scale(-1), this.resolved);
      }
      hasOverlap() {
        return !this.displacement.isZero();
      }
      isLeft() {
        return this.displacement.x > 0;
      }
      isRight() {
        return this.displacement.x < 0;
      }
      isTop() {
        return this.displacement.y > 0;
      }
      isBottom() {
        return this.displacement.y < 0;
      }
      preventResolution() {
        this.resolved = true;
      }
    };
    let En = _En;
    __name(En, "En");
    (() => {
      o(_En, "Collision");
    })();
    function ai() {
      let e = {}, n = r.hashGridSize || Mi, s = new Ue(), i = [];
      function a(c) {
        if (i.push(s.clone()), c.pos && s.translate(c.pos), c.scale && s.scale(c.scale), c.angle && s.rotate(c.angle), c.transform = s.clone(), c.c("area") && !c.paused) {
          let f = c, m = f.worldArea().bbox(), l = Math.floor(m.pos.x / n), g = Math.floor(m.pos.y / n), C = Math.ceil((m.pos.x + m.width) / n), P = Math.ceil((m.pos.y + m.height) / n), k = /* @__PURE__ */ new Set();
          for (let j = l; j <= C; j++)
            for (let R = g; R <= P; R++)
              if (!e[j])
                e[j] = {}, e[j][R] = [f];
              else if (!e[j][R])
                e[j][R] = [f];
              else {
                let O = e[j][R];
                e:
                  for (let ne of O) {
                    if (ne.paused || !ne.exists() || k.has(ne.id))
                      continue;
                    for (let H of f.collisionIgnore)
                      if (ne.is(H))
                        continue e;
                    for (let H of ne.collisionIgnore)
                      if (f.is(H))
                        continue e;
                    let X = As(f.worldArea(), ne.worldArea());
                    if (X) {
                      let H = new En(f, ne, X);
                      f.trigger("collideUpdate", ne, H);
                      let V = H.reverse();
                      V.resolved = H.resolved, ne.trigger("collideUpdate", f, V);
                    }
                    k.add(ne.id);
                  }
                O.push(f);
              }
        }
        c.children.forEach(a), s = i.pop();
      }
      __name(a, "a");
      o(a, "checkObj"), a(A.root);
    }
    __name(ai, "ai");
    o(ai, "checkFrame");
    function ui() {
      var _a21;
      let e = A.cam, n = x.fromAngle(yt(0, 360)).scale(e.shake);
      e.shake = Oe(e.shake, 0, 5 * Ce()), e.transform = new Ue().translate(Ht()).scale(e.scale).rotate(e.angle).translate(((_a21 = e.pos) != null ? _a21 : Ht()).scale(-1).add(n)), A.root.draw(), Ee();
    }
    __name(ui, "ui");
    o(ui, "drawFrame");
    function ci() {
      let e = Me();
      A.events.numListeners("loading") > 0 ? A.events.trigger("loading", e) : ke(() => {
        let n = be() / 2, s = 24, i = S(be() / 2, ve() / 2).sub(S(n / 2, s / 2));
        me({ pos: S(0), width: be(), height: ve(), color: J(0, 0, 0) }), me({ pos: i, width: n, height: s, fill: false, outline: { width: 4 } }), me({ pos: i, width: n * e, height: s });
      });
    }
    __name(ci, "ci");
    o(ci, "drawLoadScreen");
    function ds(e, n) {
      ke(() => {
        let s = S(8);
        K(), v(e);
        let i = qe({ text: n, font: Wt, size: 16, pos: s, color: J(255, 255, 255), fixed: true }), a = i.width + s.x * 2, c = i.height + s.x * 2;
        e.x + a >= be() && v(S(-a, 0)), e.y + c >= ve() && v(S(0, -c)), me({ width: a, height: c, color: J(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), $e(i), _();
      });
    }
    __name(ds, "ds");
    o(ds, "drawInspectText");
    function li() {
      if (te.inspect) {
        let e = null;
        for (let n of A.root.get("*", { recursive: true }))
          if (n.c("area") && n.isHovering()) {
            e = n;
            break;
          }
        if (A.root.drawInspect(), e) {
          let n = [], s = e.inspect();
          for (let i in s)
            s[i] ? n.push(`${i}: ${s[i]}`) : n.push(`${i}`);
          ds(tr(It()), n.join(`
`));
        }
        ds(S(8), `FPS: ${te.fps()}`);
      }
      te.paused && ke(() => {
        K(), v(be(), 0), v(-8, 8);
        let e = 32;
        me({ width: e, height: e, anchor: "topright", color: J(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let n = 1; n <= 2; n++)
          me({ width: 4, height: e * 0.6, anchor: "center", pos: S(-e / 3 * n, e * 0.5), color: J(255, 255, 255), radius: 2, fixed: true });
        _();
      }), te.timeScale !== 1 && ke(() => {
        K(), v(be(), ve()), v(-8, -8);
        let e = 8, n = qe({ text: te.timeScale.toFixed(1), font: Wt, size: 16, color: J(255, 255, 255), pos: S(-e), anchor: "botright", fixed: true });
        me({ width: n.width + e * 2 + e * 4, height: n.height + e * 2, anchor: "botright", color: J(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let s = 0; s < 2; s++) {
          let i = te.timeScale < 1;
          Kn({ p1: S(-n.width - e * (i ? 2 : 3.5), -e), p2: S(-n.width - e * (i ? 2 : 3.5), -e - n.height), p3: S(-n.width - e * (i ? 3.5 : 2), -e - n.height / 2), pos: S(-s * e * 1 + (i ? -e * 0.5 : 0), 0), color: J(255, 255, 255), fixed: true });
        }
        $e(n), _();
      }), te.curRecording && ke(() => {
        K(), v(0, ve()), v(24, -24), Ze({ radius: 12, color: J(255, 0, 0), opacity: Rn(0, 1, U.time() * 4), fixed: true }), _();
      }), te.showLog && A.logs.length > 0 && ke(() => {
        var _a21;
        K(), v(0, ve()), v(8, -8);
        let e = 8, n = [];
        for (let i of A.logs) {
          let a = "", c = i.msg instanceof Error ? "error" : "info";
          a += `[time]${i.time.toFixed(2)}[/time]`, a += " ", a += `[${c}]${((_a21 = i.msg) == null ? void 0 : _a21.toString) ? i.msg.toString() : i.msg}[/${c}]`, n.push(a);
        }
        A.logs = A.logs.filter((i) => U.time() - i.time < (r.logTime || Di));
        let s = qe({ text: n.join(`
`), font: Wt, pos: S(e, -e), anchor: "botleft", size: 16, width: be() * 0.6, lineSpacing: e / 2, fixed: true, styles: { time: { color: J(127, 127, 127) }, info: { color: J(255, 255, 255) }, error: { color: J(255, 0, 127) } } });
        me({ width: s.width + e * 2, height: s.height + e * 2, anchor: "botleft", color: J(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), $e(s), _();
      });
    }
    __name(li, "li");
    o(li, "drawDebug");
    function hi(e) {
      A.events.on("loading", e);
    }
    __name(hi, "hi");
    o(hi, "onLoading");
    function di(e) {
      U.onResize(e);
    }
    __name(di, "di");
    o(di, "onResize");
    function fi(e) {
      A.events.on("error", e);
    }
    __name(fi, "fi");
    o(fi, "onError");
    function Cn(e) {
      ee.ctx.suspend(), U.run(() => {
        ke(() => {
          let i = be(), a = ve(), c = { size: 36, width: i - 32 * 2, letterSpacing: 4, lineSpacing: 4, font: Wt, fixed: true };
          me({ width: i, height: a, color: J(0, 0, 255), fixed: true });
          let f = qe(__spreadProps(__spreadValues({}, c), { text: "Error", pos: S(32), color: J(255, 128, 0), fixed: true }));
          $e(f), es(__spreadProps(__spreadValues({}, c), { text: e.message, pos: S(32, 32 + f.height + 16), fixed: true })), _(), A.events.trigger("error", e);
        });
      });
    }
    __name(Cn, "Cn");
    o(Cn, "handleErr");
    function mi(e) {
      Q.push(e);
    }
    __name(mi, "mi");
    o(mi, "onCleanup");
    function pi() {
      A.events.onOnce("frameEnd", () => {
        U.quit();
        for (let n in et)
          window.removeEventListener(n, et[n]);
        h.clear(h.COLOR_BUFFER_BIT | h.DEPTH_BUFFER_BIT | h.STENCIL_BUFFER_BIT);
        let e = h.getParameter(h.MAX_TEXTURE_IMAGE_UNITS);
        for (let n = 0; n < e; n++)
          h.activeTexture(h.TEXTURE0 + n), h.bindTexture(h.TEXTURE_2D, null), h.bindTexture(h.TEXTURE_CUBE_MAP, null);
        h.bindBuffer(h.ARRAY_BUFFER, null), h.bindBuffer(h.ELEMENT_ARRAY_BUFFER, null), h.bindRenderbuffer(h.RENDERBUFFER, null), h.bindFramebuffer(h.FRAMEBUFFER, null), Q.forEach((n) => n()), h.deleteBuffer(b.vbuf), h.deleteBuffer(b.ibuf);
      });
    }
    __name(pi, "pi");
    o(pi, "quit");
    function Sn(e, n, s, i, a = it.linear) {
      let c = 0, f = [], w = wn(() => {
        c += Ce();
        let m = Math.min(c / s, 1);
        i(Oe(e, n, a(m))), m === 1 && (w.cancel(), i(n), f.forEach((l) => l()));
      });
      return { get paused() {
        return w.paused;
      }, set paused(m) {
        w.paused = m;
      }, onEnd(m) {
        f.push(m);
      }, then(m) {
        return this.onEnd(m), this;
      }, cancel() {
        w.cancel();
      }, finish() {
        w.cancel(), i(n), f.forEach((m) => m());
      } };
    }
    __name(Sn, "Sn");
    o(Sn, "tween");
    let qt = true;
    U.run(() => {
      N.loaded || Me() === 1 && !qt && (N.loaded = true, A.events.trigger("load")), !N.loaded && r.loadingScreen !== false || qt ? (lt(), ci(), ht()) : (te.paused || hs(), ai(), lt(), ui(), r.debug !== false && li(), ht()), qt && (qt = false), A.events.trigger("frameEnd");
    });
    function fs() {
      let e = L, n = h.drawingBufferWidth / e, s = h.drawingBufferHeight / e;
      if (r.letterbox) {
        if (!r.width || !r.height)
          throw new G("Letterboxing requires width and height defined.");
        let i = n / s, a = r.width / r.height;
        if (i > a) {
          let c = s * a, f = (n - c) / 2;
          b.viewport = { x: f, y: 0, width: c, height: s };
        } else {
          let c = n / a, f = (s - c) / 2;
          b.viewport = { x: 0, y: f, width: n, height: c };
        }
        return;
      }
      if (r.stretch && (!r.width || !r.height))
        throw new G("Stretching requires width and height defined.");
      b.viewport = { x: 0, y: 0, width: n, height: s };
    }
    __name(fs, "fs");
    o(fs, "updateViewport");
    function ms() {
      U.onHide(() => {
        r.backgroundAudio || ee.ctx.suspend();
      }), U.onShow(() => {
        r.backgroundAudio || ee.ctx.resume();
      }), U.onResize(() => {
        if (U.isFullscreen())
          return;
        let e = r.width && r.height;
        e && !r.stretch && !r.letterbox || (u.width = u.offsetWidth * L, u.height = u.offsetHeight * L, fs(), e || (b.frameBuffer.free(), b.frameBuffer = new Ie(h.drawingBufferWidth, h.drawingBufferHeight), b.width = h.drawingBufferWidth / L, b.height = h.drawingBufferHeight / L));
      }), r.debug !== false && pr(), r.burp && gr();
    }
    __name(ms, "ms");
    o(ms, "initEvents"), fs(), ms();
    let Ke = { VERSION: Ai, loadRoot: Qt, loadProgress: Me, loadSprite: Ne, loadSpriteAtlas: Ct, loadSound: cn, loadBitmapFont: sn, loadFont: nn, loadShader: an, loadShaderURL: un, loadAseprite: on, loadPedit: rn, loadBean: ln, loadJSON: tn, load: at, getSprite: Tt, getSound: At, getFont: Ot, getBitmapFont: Pt, getShader: Mt, getAsset: hn, Asset: fe, SpriteData: ue, SoundData: ge, width: be, height: ve, center: Ht, dt: Ce, time: U.time, screenshot: U.screenshot, record: Zr, isFocused: ei, setCursor: U.setCursor, getCursor: U.getCursor, setCursorLocked: U.setCursorLocked, isCursorLocked: U.isCursorLocked, setFullscreen: U.setFullscreen, isFullscreen: U.isFullscreen, isTouchscreen: U.isTouchscreen, onLoad: xn, onLoading: hi, onResize: di, onGamepadConnect: U.onGamepadConnect, onGamepadDisconnect: U.onGamepadDisconnect, onError: fi, onCleanup: mi, camPos: nr, camScale: sr, camRot: rr, shake: ir, toScreen: ns, toWorld: ss, setGravity: wr, getGravity: br, setBackground: vr, getBackground: yr, getGamepads: U.getGamepads, add: pt, make: gn, destroy: ti, destroyAll: si, get: Un, readd: ni, pos: Nt, scale: _t, rotate: xr, color: Ur, opacity: Er, anchor: vn, area: Pr, sprite: yn, text: Mr, rect: Rr, circle: Gr, uvquad: Dr, outline: Fr, body: Ir, doubleJump: Vr, shader: kr, timer: is, fixed: jr, stay: os, health: Nr, lifespan: _r, z: Cr, move: Tr, offscreen: Or, follow: Sr, state: Hr, fadeIn: qr, mask: $r, tile: cs, agent: Qr, on: je, onUpdate: wn, onDraw: or, onAdd: bn, onDestroy: rs, onClick: lr, onCollide: ar, onCollideUpdate: ur, onCollideEnd: cr, onHover: hr, onHoverUpdate: dr, onHoverEnd: fr, onKeyDown: U.onKeyDown, onKeyPress: U.onKeyPress, onKeyPressRepeat: U.onKeyPressRepeat, onKeyRelease: U.onKeyRelease, onMouseDown: U.onMouseDown, onMousePress: U.onMousePress, onMouseRelease: U.onMouseRelease, onMouseMove: U.onMouseMove, onCharInput: U.onCharInput, onTouchStart: U.onTouchStart, onTouchMove: U.onTouchMove, onTouchEnd: U.onTouchEnd, onScroll: U.onScroll, onHide: U.onHide, onShow: U.onShow, onGamepadButtonDown: U.onGamepadButtonDown, onGamepadButtonPress: U.onGamepadButtonPress, onGamepadButtonRelease: U.onGamepadButtonRelease, onGamepadStick: U.onGamepadStick, mousePos: It, mouseDeltaPos: U.mouseDeltaPos, isKeyDown: U.isKeyDown, isKeyPressed: U.isKeyPressed, isKeyPressedRepeat: U.isKeyPressedRepeat, isKeyReleased: U.isKeyReleased, isMouseDown: U.isMouseDown, isMousePressed: U.isMousePressed, isMouseReleased: U.isMouseReleased, isMouseMoved: U.isMouseMoved, isGamepadButtonPressed: U.isGamepadButtonPressed, isGamepadButtonDown: U.isGamepadButtonDown, isGamepadButtonReleased: U.isGamepadButtonReleased, charInputted: U.charInputted, loop: mr, wait: jt, play: Ft, volume: Gt, burp: Bt, audioCtx: ee.ctx, Timer: Ut, Line: De, Rect: ce, Circle: vt, Polygon: Ye, Vec2: x, Color: z, Mat4: Ue, Quad: re, RNG: wt, rand: yt, randi: Dn, randSeed: vs, vec2: S, rgb: J, hsl2rgb: bs, quad: ie, choose: xs, chance: ys, lerp: Oe, tween: Sn, easings: it, map: Fe, mapc: ws, wave: Rn, deg2rad: Ae, rad2deg: st, clamp: Ge, testLineLine: nt, testRectRect: Us, testRectLine: Es, testRectPoint: bt, testCirclePolygon: Ts, testLinePoint: Cs, testLineCircle: Gn, drawSprite: mn, drawText: es, formatText: qe, drawRect: me, drawLine: dt, drawLines: $n, drawTriangle: Kn, drawCircle: Ze, drawEllipse: zn, drawUVQuad: we, drawPolygon: He, drawFormattedText: $e, drawMasked: Xn, drawSubtracted: Wn, pushTransform: K, popTransform: _, pushTranslate: v, pushScale: T, pushRotate: I, pushMatrix: d, usePostEffect: fn, debug: te, scene: Kr, go: zr, onSceneLeave: Yr, addLevel: Jr, getData: Xr, setData: as, download: Kt, downloadJSON: Ps, downloadText: Ln, downloadBlob: In, plug: us, ASCII_CHARS: js, canvas: U.canvas(), addKaboom: oi, LEFT: x.LEFT, RIGHT: x.RIGHT, UP: x.UP, DOWN: x.DOWN, RED: z.RED, GREEN: z.GREEN, BLUE: z.BLUE, YELLOW: z.YELLOW, MAGENTA: z.MAGENTA, CYAN: z.CYAN, WHITE: z.WHITE, BLACK: z.BLACK, quit: pi, Event: ye, EventHandler: Le, EventController: Be, KaboomError: G };
    if (r.plugins && r.plugins.forEach(us), r.global !== false)
      for (let e in Ke)
        window[e] = Ke[e];
    return r.focus !== false && U.canvas().focus(), Ke;
  }, "default");

  // code/main.ts
  bo({
    global: true,
    width: window.innerWidth,
    height: window.innerHeight,
    scale: 1.25,
    debug: true,
    background: [245, 255, 240]
  });
  loadSprite("bg", "sprites/bg.png");
  loadSprite("bg_UL", "sprites/bg_UL.png");
  loadSprite("bg_UR", "sprites/bg_UR.png");
  loadSprite("bg_DL", "sprites/bg_DL.png");
  loadSprite("bg_DR", "sprites/bg_DR.png");
  loadSprite("bg_L", "sprites/bg_L.png");
  loadSprite("bg_R", "sprites/bg_R.png");
  loadSprite("bg_DN", "sprites/bg_DN.png");
  loadSprite("bg_UP", "sprites/bg_UP.png");
  loadSprite("char", "sprites/char.png");
  loadSprite("button", "sprites/button1.png");
  scene("main", ({ PPscore, VVscore, KKscore, SSscore, SPscore }) => {
    add([text("Piilotettu p\xE4\xE4oma    :"), pos(20, 20), scale(0.5), color(0, 0, 1)]);
    add([text("Verovapaat Varat     :"), pos(20, 40), scale(0.5), color(0, 0, 1)]);
    add([text("K\xE4tketyt Kassavirrat :"), pos(20, 60), scale(0.5), color(0, 0, 1)]);
    add([text("Salatut Sijoitukset  :"), pos(20, 80), scale(0.5), color(0, 0, 1)]);
    add([text("Salaiset Pankkitilit :"), pos(20, 100), scale(0.5), color(0, 0, 1)]);
    let score_PP = add([
      text(PPscore),
      pos(260, 20),
      scale(0.5),
      color(0, 0, 1),
      {
        value: PPscore
      }
    ]);
    let score_VV = add([
      text(VVscore),
      pos(260, 40),
      scale(0.5),
      color(0, 0, 1),
      {
        value: VVscore
      }
    ]);
    let score_KK = add([
      text(KKscore),
      pos(260, 60),
      scale(0.5),
      color(0, 0, 1),
      {
        value: KKscore
      }
    ]);
    let score_SS = add([
      text(SSscore),
      pos(260, 80),
      scale(0.5),
      color(0, 0, 1),
      {
        value: SSscore
      }
    ]);
    let score_SP = add([
      text(SPscore),
      pos(260, 100),
      scale(0.5),
      color(0, 0, 1),
      {
        value: SPscore
      }
    ]);
    const PP = add([
      sprite("button"),
      pos(20, 160),
      scale(7, 2.75),
      area(),
      "pp"
    ]);
    const PP_text = add([
      text("Piilotettu P\xE4\xE4oma"),
      pos(120, 170),
      scale(0.75, 0.75),
      color(0, 0, 1)
    ]);
    const VV = add([
      sprite("button"),
      pos(25, 240),
      scale(2.75, 2.75),
      area(),
      "vv"
    ]);
    const VV_text = add([
      text("Verovapaat Varat"),
      pos(30, 250),
      scale(0.4, 0.5),
      color(0, 0, 1)
    ]);
    const KK = add([
      sprite("button"),
      pos(25, 300),
      scale(2.75, 2.75),
      area(),
      "kk"
    ]);
    const KK_text = add([
      text("K\xE4tketyt Kassavirrat"),
      pos(30, 310),
      scale(0.4, 0.5),
      color(0, 0, 1)
    ]);
    const SS = add([
      sprite("button"),
      pos(280, 240),
      scale(2.75, 2.75),
      area(),
      "ss"
    ]);
    const SS_text = add([
      text("Salatut Sijoitukset"),
      pos(285, 250),
      scale(0.4, 0.5),
      color(0, 0, 1)
    ]);
    const SP = add([
      sprite("button"),
      pos(280, 300),
      scale(2.75, 2.75),
      area(),
      "sp"
    ]);
    const SP_text = add([
      text("Salaiset Pankkitilit"),
      pos(285, 310),
      scale(0.4, 0.5),
      color(0, 0, 1)
    ]);
    onClick("pp", () => {
      score_PP.value++, score_PP.text = score_PP.value;
      go("PP", { PPscore: score_PP.value, VVscore: score_VV.value, KKscore: score_KK.value, SSscore: score_SS.value, SPscore: score_SP.value });
    });
    onClick("vv", () => {
      go("VV", { PPscore: score_PP.value, VVscore: score_VV.value, KKscore: score_KK.value, SSscore: score_SS.value, SPscore: score_SP.value });
    });
    onClick("kk", () => {
      go("KK", { PPscore: score_PP.value, VVscore: score_VV.value, KKscore: score_KK.value, SSscore: score_SS.value, SPscore: score_SP.value });
    });
    onClick("ss", () => {
      go("SS", { PPscore: score_PP.value, VVscore: score_VV.value, KKscore: score_KK.value, SSscore: score_SS.value, SPscore: score_SP.value });
    });
    onClick("sp", () => {
      go("SP", { PPscore: score_PP.value, VVscore: score_VV.value, KKscore: score_KK.value, SSscore: score_SS.value, SPscore: score_SP.value });
    });
    const obj = add([
      timer()
    ]);
    obj.loop(1, () => {
      score_PP.value += pp2_amount;
      score_PP.value += pp3_amount * 100;
      score_PP.value += pp4_amount * 1e4;
      score_PP.value += pp5_amount * 1e6;
      score_PP.text = score_PP.value;
    });
  });
  go("main", { PPscore: 0, VVscore: 0, KKscore: 0, SSscore: 0, SPscore: 0 });
  var pp2_amount = 0;
  var pp3_amount = 0;
  var pp4_amount = 0;
  var pp5_amount = 0;
  scene("PP", ({ PPscore, VVscore, KKscore, SSscore, SPscore }) => {
    let pp2_price = 100;
    let pp3_price = 1e4;
    let pp4_price = 1e6;
    let pp5_price = 1e8;
    add([text("Piilotettu p\xE4\xE4oma    :"), pos(20, 20), scale(0.5), color(0, 0, 1)]);
    add([text("Verovapaat Varat     :"), pos(20, 40), scale(0.5), color(0, 0, 1)]);
    add([text("K\xE4tketyt Kassavirrat :"), pos(20, 60), scale(0.5), color(0, 0, 1)]);
    add([text("Salatut Sijoitukset  :"), pos(20, 80), scale(0.5), color(0, 0, 1)]);
    add([text("Salaiset Pankkitilit :"), pos(20, 100), scale(0.5), color(0, 0, 1)]);
    let score_PP = add([
      text(PPscore),
      pos(260, 20),
      scale(0.5),
      color(0, 0, 1),
      {
        value: PPscore
      }
    ]);
    let score_VV = add([
      text(VVscore),
      pos(260, 40),
      scale(0.5),
      color(0, 0, 1),
      {
        value: VVscore
      }
    ]);
    let score_KK = add([
      text(KKscore),
      pos(260, 60),
      scale(0.5),
      color(0, 0, 1),
      {
        value: KKscore
      }
    ]);
    let score_SS = add([
      text(SSscore),
      pos(260, 80),
      scale(0.5),
      color(0, 0, 1),
      {
        value: SSscore
      }
    ]);
    let score_SP = add([
      text(SPscore),
      pos(260, 100),
      scale(0.5),
      color(0, 0, 1),
      {
        value: SPscore
      }
    ]);
    const PP = add([
      sprite("button"),
      pos(20, 160),
      scale(7, 2.75),
      area(),
      "pp1"
    ]);
    const PP_text = add([
      text("Piilotettu P\xE4\xE4oma"),
      pos(120, 170),
      scale(0.75, 0.75),
      color(0, 0, 1)
    ]);
    const PP2 = add([
      sprite("button"),
      pos(25, 240),
      scale(2.75, 2.75),
      area(),
      "pp2"
    ]);
    const PP2_text = add([
      text("PP 2       +1 PP/s\nHinta " + pp2_price + "       x" + pp2_amount),
      pos(30, 250),
      scale(0.4),
      color(0, 0, 1)
    ]);
    const PP3 = add([
      sprite("button"),
      pos(25, 300),
      scale(2.75, 2.75),
      area(),
      "pp3"
    ]);
    const PP3_text = add([
      text("PP 3     +100 PP/s\nHinta " + pp3_price + "     x" + pp3_amount),
      pos(30, 310),
      scale(0.4),
      color(0, 0, 1)
    ]);
    const PP4 = add([
      sprite("button"),
      pos(280, 240),
      scale(2.75, 2.75),
      area(),
      "pp4"
    ]);
    const PP4_text = add([
      text("PP 4     +10k PP/s\nHinta " + pp4_price + "   x" + pp4_amount),
      pos(285, 250),
      scale(0.4),
      color(0, 0, 1)
    ]);
    const PP5 = add([
      sprite("button"),
      pos(280, 300),
      scale(2.75, 2.75),
      area(),
      "pp5"
    ]);
    const PP5_text = add([
      text("PP 5      +1m PP/s\nHinta " + pp5_price + " x" + pp5_amount),
      pos(285, 310),
      scale(0.4),
      color(0, 0, 1)
    ]);
    const back = add([
      sprite("button"),
      pos(450, 5),
      scale(0.45, 1.3),
      area(),
      "back"
    ]);
    add([
      text("X"),
      pos(460, 8),
      scale(0.5),
      color(0, 0, 1)
    ]);
    onClick("back", () => {
      go("main", { PPscore: score_PP.value, VVscore: score_VV.value, KKscore: score_KK.value, SSscore: score_SS.value, SPscore: score_SP.value });
    });
    let pp_multi = 1 + (1.2 * score_VV.value + 1.5 * score_KK.value + 1.8 * score_SS.value + 2.1 * score_SP.value);
    const obj = add([
      timer()
    ]);
    obj.loop(1, () => {
      score_PP.value += pp2_amount * pp_multi;
      score_PP.value += pp3_amount * 100 * pp_multi;
      score_PP.value += pp4_amount * 1e4 * pp_multi;
      score_PP.value += pp5_amount * 1e6 * pp_multi;
      score_PP.text = score_PP.value.toFixed(0);
    });
    onClick("pp1", () => {
      score_PP.value += 1 * pp_multi, score_PP.text = score_PP.value.toFixed(0);
    });
    onClick("pp2", () => {
      if (score_PP.value >= pp2_price) {
        score_PP.value -= pp2_price;
        pp2_amount += 1;
        score_PP.text = score_PP.value.toFixed(0);
        PP2_text.text = "PP 2       +1 PP/s\nHinta " + pp2_price + "       x" + pp2_amount;
      }
    });
    onClick("pp3", () => {
      if (score_PP.value >= pp3_price) {
        score_PP.value -= pp3_price;
        pp3_amount += 1;
        score_PP.text = score_PP.value.toFixed(0);
        PP3_text.text = "PP 3     +100 PP/s\nHinta " + pp3_price + "     x" + pp3_amount;
      }
    });
    onClick("pp4", () => {
      if (score_PP.value >= pp4_price) {
        score_PP.value -= pp4_price;
        pp4_amount += 1;
        score_PP.text = score_PP.value.toFixed(0);
        PP4_text.text = "PP 4     +10k PP/s\nHinta " + pp4_price + "   x" + pp4_amount;
      }
    });
    onClick("pp5", () => {
      score_PP.value += 1e23;
      if (score_PP.value >= pp5_price) {
        score_PP.value -= pp5_price;
        score_PP.text = score_PP.value.toFixed(0);
        PP5_text.text = "PP 5      +1m PP/s\nHinta " + pp5_price + " x" + pp5_amount;
      }
    });
  });
  scene("VV", ({ PPscore, VVscore, KKscore, SSscore, SPscore }) => {
    let vv2_price = 1e5;
    let vv3_price = 1e7;
    let vv4_price = 1e9;
    let vv5_price = 1e11;
    add([text("Piilotettu p\xE4\xE4oma    :"), pos(20, 20), scale(0.5), color(0, 0, 1)]);
    add([text("Verovapaat Varat     :"), pos(20, 40), scale(0.5), color(0, 0, 1)]);
    add([text("K\xE4tketyt Kassavirrat :"), pos(20, 60), scale(0.5), color(0, 0, 1)]);
    add([text("Salatut Sijoitukset  :"), pos(20, 80), scale(0.5), color(0, 0, 1)]);
    add([text("Salaiset Pankkitilit :"), pos(20, 100), scale(0.5), color(0, 0, 1)]);
    let score_PP = add([
      text(PPscore),
      pos(260, 20),
      scale(0.5),
      color(0, 0, 1),
      {
        value: PPscore
      }
    ]);
    let score_VV = add([
      text(VVscore),
      pos(260, 40),
      scale(0.5),
      color(0, 0, 1),
      {
        value: VVscore
      }
    ]);
    let score_KK = add([
      text(KKscore),
      pos(260, 60),
      scale(0.5),
      color(0, 0, 1),
      {
        value: KKscore
      }
    ]);
    let score_SS = add([
      text(SSscore),
      pos(260, 80),
      scale(0.5),
      color(0, 0, 1),
      {
        value: SSscore
      }
    ]);
    let score_SP = add([
      text(SPscore),
      pos(260, 100),
      scale(0.5),
      color(0, 0, 1),
      {
        value: SPscore
      }
    ]);
    const PP = add([
      sprite("button"),
      pos(20, 160),
      scale(7, 2.75),
      area(),
      "pp1"
    ]);
    const PP_text = add([
      text("Verovapaat varat"),
      pos(120, 170),
      scale(0.75, 0.75),
      color(0, 0, 1)
    ]);
    const PP2 = add([
      sprite("button"),
      pos(25, 240),
      scale(2.75, 2.75),
      area(),
      "pp2"
    ]);
    const PP2_text = add([
      text("VV 2       +1\nHinta " + vv2_price),
      pos(30, 250),
      scale(0.4),
      color(0, 0, 1)
    ]);
    const PP3 = add([
      sprite("button"),
      pos(25, 300),
      scale(2.75, 2.75),
      area(),
      "pp3"
    ]);
    const PP3_text = add([
      text("VV 3     +100\nHinta " + vv3_price),
      pos(30, 310),
      scale(0.4),
      color(0, 0, 1)
    ]);
    const PP4 = add([
      sprite("button"),
      pos(280, 240),
      scale(2.75, 2.75),
      area(),
      "pp4"
    ]);
    const PP4_text = add([
      text("VV 4     +10k\nHinta " + vv4_price),
      pos(285, 250),
      scale(0.4),
      color(0, 0, 1)
    ]);
    const PP5 = add([
      sprite("button"),
      pos(280, 300),
      scale(2.75, 2.75),
      area(),
      "pp5"
    ]);
    const PP5_text = add([
      text("VV 5      +1m\nHinta " + vv5_price),
      pos(285, 310),
      scale(0.4),
      color(0, 0, 1)
    ]);
    const back = add([
      sprite("button"),
      pos(450, 5),
      scale(0.45, 1.3),
      area(),
      "back"
    ]);
    add([
      text("X"),
      pos(460, 8),
      scale(0.5),
      color(0, 0, 1)
    ]);
    onClick("back", () => {
      go("main", { PPscore: score_PP.value, VVscore: score_VV.value, KKscore: score_KK.value, SSscore: score_SS.value, SPscore: score_SP.value });
    });
    const obj = add([
      timer()
    ]);
    obj.loop(1, () => {
      score_PP.value += pp2_amount;
      score_PP.value += pp3_amount * 100;
      score_PP.value += pp4_amount * 1e4;
      score_PP.value += pp5_amount * 1e6;
      score_PP.text = score_PP.value;
    });
    onClick("pp1", () => {
      if (score_PP.value >= 1e4) {
        score_PP.value = 0, score_PP.text = score_PP.value;
        score_VV.value += 1, score_VV.text = score_VV.value;
      }
    });
    onClick("pp2", () => {
      if (score_VV.value >= vv2_price) {
        score_PP.value = 0;
        score_VV.value = 0;
        score_PP.text = score_PP.value;
        score_VV.text = score_VV.value;
      }
    });
    onClick("pp3", () => {
      if (score_VV.value >= vv3_price) {
        score_PP.value = 0;
        score_VV.value = 0;
        score_PP.text = score_PP.value;
        score_VV.text = score_VV.value;
      }
    });
    onClick("pp4", () => {
      if (score_VV.value >= vv4_price) {
        score_PP.value = 0;
        score_VV.value = 0;
        score_PP.text = score_PP.value;
        score_VV.text = score_VV.value;
      }
    });
    onClick("pp5", () => {
      if (score_VV.value >= vv5_price) {
        score_PP.value = 0;
        score_VV.value = 0;
        score_PP.text = score_PP.value;
        score_VV.text = score_VV.value;
      }
    });
  });
  scene("KK", ({ PPscore, VVscore, KKscore, SSscore, SPscore }) => {
    let kk2_price = 100;
    let kk3_price = 1e4;
    let kk4_price = 1e6;
    let kk5_price = 1e8;
    add([text("Piilotettu p\xE4\xE4oma    :"), pos(20, 20), scale(0.5), color(0, 0, 1)]);
    add([text("Verovapaat Varat     :"), pos(20, 40), scale(0.5), color(0, 0, 1)]);
    add([text("K\xE4tketyt Kassavirrat :"), pos(20, 60), scale(0.5), color(0, 0, 1)]);
    add([text("Salatut Sijoitukset  :"), pos(20, 80), scale(0.5), color(0, 0, 1)]);
    add([text("Salaiset Pankkitilit :"), pos(20, 100), scale(0.5), color(0, 0, 1)]);
    let score_PP = add([
      text(PPscore),
      pos(260, 20),
      scale(0.5),
      color(0, 0, 1),
      {
        value: PPscore
      }
    ]);
    let score_VV = add([
      text(VVscore),
      pos(260, 40),
      scale(0.5),
      color(0, 0, 1),
      {
        value: VVscore
      }
    ]);
    let score_KK = add([
      text(KKscore),
      pos(260, 60),
      scale(0.5),
      color(0, 0, 1),
      {
        value: KKscore
      }
    ]);
    let score_SS = add([
      text(SSscore),
      pos(260, 80),
      scale(0.5),
      color(0, 0, 1),
      {
        value: SSscore
      }
    ]);
    let score_SP = add([
      text(SPscore),
      pos(260, 100),
      scale(0.5),
      color(0, 0, 1),
      {
        value: SPscore
      }
    ]);
    const PP = add([
      sprite("button"),
      pos(20, 160),
      scale(7, 2.75),
      area(),
      "pp1"
    ]);
    const PP_text = add([
      text("K\xE4tketyt kassavirrat"),
      pos(120, 170),
      scale(0.75, 0.75),
      color(0, 0, 1)
    ]);
    const PP2 = add([
      sprite("button"),
      pos(25, 240),
      scale(2.75, 2.75),
      area(),
      "pp2"
    ]);
    const PP2_text = add([
      text("KK 2       +1 PP/s\nHinta " + kk2_price),
      pos(30, 250),
      scale(0.4),
      color(0, 0, 1)
    ]);
    const PP3 = add([
      sprite("button"),
      pos(25, 300),
      scale(2.75, 2.75),
      area(),
      "pp3"
    ]);
    const PP3_text = add([
      text("KK 3     +100 PP/s\nHinta " + kk3_price),
      pos(30, 310),
      scale(0.4),
      color(0, 0, 1)
    ]);
    const PP4 = add([
      sprite("button"),
      pos(280, 240),
      scale(2.75, 2.75),
      area(),
      "pp4"
    ]);
    const PP4_text = add([
      text("KK 4     +10k PP/s\nHinta " + kk4_price),
      pos(285, 250),
      scale(0.4),
      color(0, 0, 1)
    ]);
    const PP5 = add([
      sprite("button"),
      pos(280, 300),
      scale(2.75, 2.75),
      area(),
      "pp5"
    ]);
    const PP5_text = add([
      text("KK 5      +1m PP/s\nHinta " + kk5_price),
      pos(285, 310),
      scale(0.4),
      color(0, 0, 1)
    ]);
    const back = add([
      sprite("button"),
      pos(450, 5),
      scale(0.45, 1.3),
      area(),
      "back"
    ]);
    add([
      text("X"),
      pos(460, 8),
      scale(0.5),
      color(0, 0, 1)
    ]);
    onClick("back", () => {
      go("main", { PPscore: score_PP.value, VVscore: score_VV.value, KKscore: score_KK.value, SSscore: score_SS.value, SPscore: score_SP.value });
    });
    const obj = add([
      timer()
    ]);
    obj.loop(1, () => {
      score_PP.value += pp2_amount;
      score_PP.value += pp3_amount * 100;
      score_PP.value += pp4_amount * 1e4;
      score_PP.value += pp5_amount * 1e6;
      score_PP.text = score_PP.value;
    });
    onClick("pp1", () => {
    });
    onClick("pp2", () => {
      if (score_VV.value >= kk2_price) {
        score_VV.value -= Math.floor(kk2_price);
        score_PP.value = 0;
        score_VV.value = 0;
        score_KK.value = 0;
        score_PP.text = score_PP.value;
        score_VV.text = score_VV.value;
        score_KK.text = score_KK.value;
      }
    });
    onClick("pp3", () => {
      if (score_VV.value >= kk3_price) {
        score_VV.value -= Math.floor(kk3_price);
        score_PP.value = 0;
        score_VV.value = 0;
        score_KK.value = 0;
        score_PP.text = score_PP.value;
        score_VV.text = score_VV.value;
        score_KK.text = score_KK.value;
      }
    });
    onClick("pp4", () => {
      if (score_VV.value >= kk4_price) {
        score_VV.value -= Math.floor(kk4_price);
        score_PP.value = 0;
        score_VV.value = 0;
        score_KK.value = 0;
        score_PP.text = score_PP.value;
        score_VV.text = score_VV.value;
        score_KK.text = score_KK.value;
      }
    });
    onClick("pp5", () => {
      if (score_VV.value >= kk5_price) {
        score_VV.value -= Math.floor(kk5_price);
        score_PP.value = 0;
        score_VV.value = 0;
        score_KK.value = 0;
        score_PP.text = score_PP.value;
        score_VV.text = score_VV.value;
        score_KK.text = score_KK.value;
      }
    });
  });
  scene("SS", ({ PPscore, VVscore, KKscore, SSscore, SPscore }) => {
    let ss2_price = 100;
    let ss3_price = 1e4;
    let ss4_price = 1e6;
    let ss5_price = 1e8;
    add([text("Piilotettu p\xE4\xE4oma    :"), pos(20, 20), scale(0.5), color(0, 0, 1)]);
    add([text("Verovapaat Varat     :"), pos(20, 40), scale(0.5), color(0, 0, 1)]);
    add([text("K\xE4tketyt Kassavirrat :"), pos(20, 60), scale(0.5), color(0, 0, 1)]);
    add([text("Salatut Sijoitukset  :"), pos(20, 80), scale(0.5), color(0, 0, 1)]);
    add([text("Salaiset Pankkitilit :"), pos(20, 100), scale(0.5), color(0, 0, 1)]);
    let score_PP = add([
      text(PPscore),
      pos(260, 20),
      scale(0.5),
      color(0, 0, 1),
      {
        value: PPscore
      }
    ]);
    let score_VV = add([
      text(VVscore),
      pos(260, 40),
      scale(0.5),
      color(0, 0, 1),
      {
        value: VVscore
      }
    ]);
    let score_KK = add([
      text(KKscore),
      pos(260, 60),
      scale(0.5),
      color(0, 0, 1),
      {
        value: KKscore
      }
    ]);
    let score_SS = add([
      text(SSscore),
      pos(260, 80),
      scale(0.5),
      color(0, 0, 1),
      {
        value: SSscore
      }
    ]);
    let score_SP = add([
      text(SPscore),
      pos(260, 100),
      scale(0.5),
      color(0, 0, 1),
      {
        value: SPscore
      }
    ]);
    const PP = add([
      sprite("button"),
      pos(20, 160),
      scale(7, 2.75),
      area(),
      "pp1"
    ]);
    const PP_text = add([
      text("Salatut sijoitukset"),
      pos(120, 170),
      scale(0.75, 0.75),
      color(0, 0, 1)
    ]);
    const PP2 = add([
      sprite("button"),
      pos(25, 240),
      scale(2.75, 2.75),
      area(),
      "pp2"
    ]);
    const PP2_text = add([
      text("SS 2       +1 PP/s\nHinta " + ss2_price),
      pos(30, 250),
      scale(0.4),
      color(0, 0, 1)
    ]);
    const PP3 = add([
      sprite("button"),
      pos(25, 300),
      scale(2.75, 2.75),
      area(),
      "pp3"
    ]);
    const PP3_text = add([
      text("SS 3     +100 PP/s\nHinta " + ss3_price),
      pos(30, 310),
      scale(0.4),
      color(0, 0, 1)
    ]);
    const PP4 = add([
      sprite("button"),
      pos(280, 240),
      scale(2.75, 2.75),
      area(),
      "pp4"
    ]);
    const PP4_text = add([
      text("SS 4     +10k PP/s\nHinta " + ss4_price),
      pos(285, 250),
      scale(0.4),
      color(0, 0, 1)
    ]);
    const PP5 = add([
      sprite("button"),
      pos(280, 300),
      scale(2.75, 2.75),
      area(),
      "pp5"
    ]);
    const PP5_text = add([
      text("SS 5      +1m PP/s\nHinta " + ss5_price),
      pos(285, 310),
      scale(0.4),
      color(0, 0, 1)
    ]);
    const back = add([
      sprite("button"),
      pos(450, 5),
      scale(0.45, 1.3),
      area(),
      "back"
    ]);
    add([
      text("X"),
      pos(460, 8),
      scale(0.5),
      color(0, 0, 1)
    ]);
    onClick("back", () => {
      go("main", { PPscore: score_PP.value, VVscore: score_VV.value, KKscore: score_KK.value, SSscore: score_SS.value, SPscore: score_SP.value });
    });
    const obj = add([
      timer()
    ]);
    obj.loop(1, () => {
      score_PP.value += pp2_amount;
      score_PP.value += pp3_amount * 100;
      score_PP.value += pp4_amount * 1e4;
      score_PP.value += pp5_amount * 1e6;
      score_PP.text = score_PP.value;
    });
    onClick("pp1", () => {
    });
    onClick("pp2", () => {
      if (score_KK.value >= ss2_price) {
        score_VV.value -= Math.floor(ss2_price);
        score_PP.value = 0;
        score_VV.value = 0;
        score_KK.value = 0;
        score_SS.value = 0;
        score_PP.text = score_PP.value;
        score_VV.text = score_VV.value;
        score_KK.text = score_KK.value;
        score_SS.text = score_SS.value;
      }
    });
    onClick("pp3", () => {
      if (score_KK.value >= ss3_price) {
        score_KK.value -= Math.floor(ss3_price);
        score_PP.value = 0;
        score_VV.value = 0;
        score_KK.value = 0;
        score_SS.value = 0;
        score_PP.text = score_PP.value;
        score_VV.text = score_VV.value;
        score_KK.text = score_KK.value;
        score_SS.text = score_SS.value;
      }
    });
    onClick("pp4", () => {
      if (score_KK.value >= ss4_price) {
        score_KK.value -= Math.floor(ss4_price);
        score_PP.value = 0;
        score_VV.value = 0;
        score_KK.value = 0;
        score_SS.value = 0;
        score_PP.text = score_PP.value;
        score_VV.text = score_VV.value;
        score_KK.text = score_KK.value;
        score_SS.text = score_SS.value;
      }
    });
    onClick("pp5", () => {
      if (score_KK.value >= ss5_price) {
        score_KK.value -= Math.floor(ss5_price);
        score_PP.value = 0;
        score_VV.value = 0;
        score_KK.value = 0;
        score_SS.value = 0;
        score_PP.text = score_PP.value;
        score_VV.text = score_VV.value;
        score_KK.text = score_KK.value;
        score_SS.text = score_SS.value;
      }
    });
  });
  scene("SP", ({ PPscore, VVscore, KKscore, SSscore, SPscore }) => {
    let sp2_price = 100;
    let sp3_price = 1e4;
    let sp4_price = 1e6;
    let sp5_price = 1e8;
    add([text("Piilotettu p\xE4\xE4oma    :"), pos(20, 20), scale(0.5), color(0, 0, 1)]);
    add([text("Verovapaat Varat     :"), pos(20, 40), scale(0.5), color(0, 0, 1)]);
    add([text("K\xE4tketyt Kassavirrat :"), pos(20, 60), scale(0.5), color(0, 0, 1)]);
    add([text("Salatut Sijoitukset  :"), pos(20, 80), scale(0.5), color(0, 0, 1)]);
    add([text("Salaiset Pankkitilit :"), pos(20, 100), scale(0.5), color(0, 0, 1)]);
    let score_PP = add([
      text(PPscore),
      pos(260, 20),
      scale(0.5),
      color(0, 0, 1),
      {
        value: PPscore
      }
    ]);
    let score_VV = add([
      text(VVscore),
      pos(260, 40),
      scale(0.5),
      color(0, 0, 1),
      {
        value: VVscore
      }
    ]);
    let score_KK = add([
      text(KKscore),
      pos(260, 60),
      scale(0.5),
      color(0, 0, 1),
      {
        value: KKscore
      }
    ]);
    let score_SS = add([
      text(SSscore),
      pos(260, 80),
      scale(0.5),
      color(0, 0, 1),
      {
        value: SSscore
      }
    ]);
    let score_SP = add([
      text(SPscore),
      pos(260, 100),
      scale(0.5),
      color(0, 0, 1),
      {
        value: SPscore
      }
    ]);
    const PP = add([
      sprite("button"),
      pos(20, 160),
      scale(7, 2.75),
      area(),
      "pp1"
    ]);
    const PP_text = add([
      text("Salaiset Pankkitilit"),
      pos(120, 170),
      scale(0.75, 0.75),
      color(0, 0, 1)
    ]);
    const PP2 = add([
      sprite("button"),
      pos(25, 240),
      scale(2.75, 2.75),
      area(),
      "pp2"
    ]);
    const PP2_text = add([
      text("SP 2       +1 PP/s\nHinta " + sp2_price),
      pos(30, 250),
      scale(0.4),
      color(0, 0, 1)
    ]);
    const PP3 = add([
      sprite("button"),
      pos(25, 300),
      scale(2.75, 2.75),
      area(),
      "pp3"
    ]);
    const PP3_text = add([
      text("SP 3     +100 PP/s\nHinta " + sp3_price),
      pos(30, 310),
      scale(0.4),
      color(0, 0, 1)
    ]);
    const PP4 = add([
      sprite("button"),
      pos(280, 240),
      scale(2.75, 2.75),
      area(),
      "pp4"
    ]);
    const PP4_text = add([
      text("SP 4     +10k PP/s\nHinta " + sp4_price),
      pos(285, 250),
      scale(0.4),
      color(0, 0, 1)
    ]);
    const PP5 = add([
      sprite("button"),
      pos(280, 300),
      scale(2.75, 2.75),
      area(),
      "pp5"
    ]);
    const PP5_text = add([
      text("SP 5      +1m PP/s\nHinta " + sp5_price),
      pos(285, 310),
      scale(0.4),
      color(0, 0, 1)
    ]);
    const back = add([
      sprite("button"),
      pos(450, 5),
      scale(0.45, 1.3),
      area(),
      "back"
    ]);
    add([
      text("X"),
      pos(460, 8),
      scale(0.5),
      color(0, 0, 1)
    ]);
    onClick("back", () => {
      go("main", { PPscore: score_PP.value, VVscore: score_VV.value, KKscore: score_KK.value, SSscore: score_SS.value, SPscore: score_SP.value });
    });
    const obj = add([
      timer()
    ]);
    obj.loop(1, () => {
      score_PP.value += pp2_amount;
      score_PP.value += pp3_amount * 100;
      score_PP.value += pp4_amount * 1e4;
      score_PP.value += pp5_amount * 1e6;
      score_PP.text = score_PP.value;
    });
    onClick("pp1", () => {
    });
    onClick("pp2", () => {
      if (score_SS.value >= sp2_price) {
        score_SP.value += 1;
        score_PP.value = 0;
        score_VV.value = 0;
        score_KK.value = 0;
        score_SS.value = 0;
        score_PP.text = score_PP.value;
        score_VV.text = score_VV.value;
        score_KK.text = score_KK.value;
        score_SS.text = score_SS.value;
        score_SP.text = score_SP.value;
      }
    });
    onClick("pp3", () => {
      if (score_SS.value >= sp3_price) {
        score_SS.value -= Math.floor(sp3_price);
        score_PP.value = 0;
        score_VV.value = 0;
        score_KK.value = 0;
        score_SS.value = 0;
        score_PP.text = score_PP.value;
        score_VV.text = score_VV.value;
        score_KK.text = score_KK.value;
        score_SS.text = score_SS.value;
        score_SP.text = score_SP.value;
      }
    });
    onClick("pp4", () => {
      if (score_SS.value >= sp4_price) {
        score_SS.value -= Math.floor(sp4_price);
        score_PP.value = 0;
        score_VV.value = 0;
        score_KK.value = 0;
        score_SS.value = 0;
        score_PP.text = score_PP.value;
        score_VV.text = score_VV.value;
        score_KK.text = score_KK.value;
        score_SS.text = score_SS.value;
        score_SP.text = score_SP.value;
      }
    });
    onClick("pp5", () => {
      if (score_SS.value >= sp5_price) {
        score_SS.value -= Math.floor(sp5_price);
        score_PP.value = 0;
        score_VV.value = 0;
        score_KK.value = 0;
        score_SS.value = 0;
        score_PP.text = score_PP.value;
        score_VV.text = score_VV.value;
        score_KK.text = score_KK.value;
        score_SS.text = score_SS.value;
        score_SP.text = score_SP.value;
      }
    });
  });
})();
//# sourceMappingURL=game.js.map
