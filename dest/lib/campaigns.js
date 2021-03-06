'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('../utils/request');

var _request2 = _interopRequireDefault(_request);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Campaigns = function (_Base) {
  _inherits(Campaigns, _Base);

  function Campaigns() {
    _classCallCheck(this, Campaigns);

    return _possibleConstructorReturn(this, (Campaigns.__proto__ || Object.getPrototypeOf(Campaigns)).apply(this, arguments));
  }

  _createClass(Campaigns, [{
    key: 'getAll',
    value: function getAll() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var url = this.baseUrl + '/stats/campaign/all';
      var promise = _request2.default.get(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'getdomain',
    value: function getdomain() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var url = this.baseUrl + '/stats/campaign/domain';
      var promise = _request2.default.get(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }, {
    key: 'getpopup',
    value: function getpopup() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var url = this.baseUrl + '/stats/campaign/popup';
      var promise = _request2.default.get(url).set('api-token', this.apiKey).query(options).end();
      return promise.then(function (res) {
        return res.body;
      });
    }
  }]);

  return Campaigns;
}(_base2.default);

exports.default = Campaigns;