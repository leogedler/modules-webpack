/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img');
// image.src = 'https://picsum.photos/400/400/?random';
image.src = _small2.default;
document.body.appendChild(image);

var bigImage = document.createElement('img');
bigImage.src = _big2.default;
document.body.appendChild(bigImage);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "53503041286489e756aeb3f1b82a9989.jpeg";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/CABEIAMgAyAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAEEBQYCBwj/2gAIAQEAAAAA92Ig8MyTJ2frpc88Dj4RtTrRCTJJ0uicR4gRjDEp6jRXOlZmdJP2SPBjBHwIUaHmLfQvsUkndyjgQ44+W44DHrs1caui9LSd05osCIHnnhueBAoM7e6bPesu6fosWBEFxxyiEfmFjM3r7em9ZT9OUECHG5Z1W0ultJUby+Dros70N376UKFFrsfprrx2kDI9e0QfIVrOpnor9rriviAheONa1VWHfzNZlsfqJlhi/fn6Thgh4VHjZ2rzeH2+1w8zMyLDKVf0y6SBFCjQKyRNog9SqTUyPEo4K36tTshQ+O+81AtR18G4iYqKT0a8xvjP1okyaDwiRaqkqp7RKuqe93maqrr0pO3BYHPYKKHRjl1u3r/LJK9Dk5qk96ScJRRKLHRbKvu7aVmZlbndK+mHQeoJ0JjVVGSq6i3OhxWeXV7ZTqvjE+5pO0Q5K2uXfNOfKQQH0+sBkq7X69J0CNKNwwosasoiVHOY0Nvla7TeyJJ2iAlSXGAAs/VzMPd56+zp7z1xJOhRI8iYSLH4rMrJFSZju370npySTqLHjtMkl4z55AyVuMkd2W8ZJ0hRxAA8qUYjtwNiMjMkkuY3AhAjMWQc/ZOkuZDJkkgBYIghji5XXXTtxskmSTcR+B8hAEIeOOWblf/EABoBAAIDAQEAAAAAAAAAAAAAAAACAQMEBQb/2gAIAQIQAAAAmAACKOH0ukARALgz198CIgFwUZvSEwlUZnvwU29kITFURIlfdCFxvnqq0MdQITNRmtpudeuQuXCaq0d16hBXVny5NWzBZ3AUmnLkUKvRgLEqhSLvAIVJaZJAkVVWZP/EABsBAAEFAQEAAAAAAAAAAAAAAAABAgQFBgMH/9oACAEDEAAAAEAAFdN1FBSqArlc/Ru6YxQe9A6avnNwKju0p+jqaTX8o+WB3TTrMq6+1fZ+fAq2/CW+4p3SMqDnTrp8DVZLjcZAH3djGr7LhEWbmwJC9bW8r63QwceCidZNsX3WqxoA5HqSpHOsARXqg0QAaOc5yCf/xAA3EAACAgECBQIEBAQFBQAAAAABAgADEQQSBRMhMUEiURAgMmEUMEJxBhWBkRYjJHLBM0NjodH/2gAIAQEAAT8BgHvCwHaFszP5W0nxNnuRPQPM31jxOco8CfiB9odUBLNeta7jNUlzubWOcyjPZhKVwOhnQQtn8oKTNqjuYbFXsI18Nxm8mbjC33ELY/VHsGO8v1Dgbeh+0QXFvM04PmA4Ezn8kKTPSvfqY10a2F5um6bjCYTGMsfajN7DMfU8y3p0lF7dsyo58zUWbF/JC46mNZiPZC8LfMYZqXCUtnz0Eqete6dZRhm6J/eVgAft7TV2ndj58ZmAsd4zwnPyZ+JBhBhE4kvoQZx1i8lD9TMZQ4bGwERSUpyZYTY+PA7/ADYzPpEd4xhMz8mIFnLJnJjU9ItTn6hiceG16RnwZVj2zNJuxgLiXkhMe0Ub3wOij/38uIOgjmMY5hMz8NuY5rpTfYyovuTP5rocE8wn+kq/iakOVuoZfYrK+MaB0zzv6ETT6mjVoWpfdjv9oRG7dJxmpjrFJ6jE04UHsB+807+jcewEsO9u809Oepxj5QITH7xjGMvc10u/sJpuOZOLgT1/TKuI6N/+7t/3CG6lKWtLrsUZJBnFeJNr7we1S/SohwR3IEBCD3B7ERUsc5rDd/acHReH6IV2Nm5/U8Fm+FiPInFrT/Nbhu9u00VDWP2MublVitf6zT1tYcntNRqVqQqp+XxCcdY5hhE1FW+pl95qqG02qZGHpJ6GKxHXf57Sslxt64Piarh9+mPZuvYibtvVsdICX8nv0nDAUVayM/vNWt9BDpk+00uozpAf1Y6ziGttS0Kpl2HvNpcbm7g+Jw3btznOIEN1pluoTTVbR9WJbaSMn3+Z+0MImIUyJrNDVcPXWGPiW8IVDjBGZo+HCl9wLN+8Ne5MMOk1HDNOfUUGTLtE6PmqvcoPT7zhJrt9JBWwD6TLdOr1YHfHeakW0lQgO8nqoicLtvcWWKevjE4pwW6vV7qKLGUr1wJw4pyCvb3yZbqU0wwnVpdqDa5LGF+nzP8AAwCYlzrUu5pvS7snWIpHidFHXrNavNU7H2sO5mk5da8tgQy+T5l+jBZbUYK2ehmr1vKq9HU5x0mh4gNPda9uWL4lPFdLcuTZtPs0utXlM1dg7dDNVrNZfrMHTqD/AOJD6pY1/NZHqsD+RtMfT6pE5jaewJ7kdINRtB7fM8MxAPhxIO1Xp8TTBserpDZg4zGsGRucD9zL71+ihFdj3MFXLpywdbPv5lANgRj4nFnU0rtx0brC/XIjNlvtKje1irQxznr7AThOlakPaz5ZhLUX6yoJE1fFNOgYJVvdhjBHeaii1rSeVsBP04+Zh0hmcCAk+Pg9QMcBGwolt4VztGXA6CLp7r9YvMKkeW3dFjUhbt4tyoPpAEsZmKlj2j8Z2Ia9KjWN5YDoJRbzuH2Eks3NyxJmSCRM+D/czh1Bp1G63HrHQQaymkYyMY7+IOL41TjYTT4I8QJobtYdWAWXPUeCZZqkVf8ApVMPCbfk8QTxGGGmIBgS19qEwaxNmWeXubK81jBPYucTofQbMMR6iogq2H7QuoTsZ+HbXsFBIQex7zQcOXTVY2rOJ1aGhHKKiWOMHb5jECblSjmap8KPA7tNNxdbrPWdhzgEdlE4c/C6dNzg9QA/UxlOv0Wt1PI0pDMozkL4nE+EahLkbT2WM/1FMdCf+JWdUWYWIUx0Ib5exgMsXPWO4VZq+JrSh5eGeam3X2jc5YK36RK7bq8Mr4I8SgPqXJPbHbPmYNdwX7xarLT0WU8MZutjY+wn8p06WCxLLEPkA95r9FrzYW0fEW2jqam/+zhFC312HU1kW9sMczX8O0eiVrnf9llN2mFyVnTltxwGM1HDKgqU0VKMnPQT/DujFO20sWJ8eJotDo9K+6ikI2wKSPM12rKXqrI3JI+sSyqtruYLiR/z8rjpmKZ3mpo3gjxK6K1BQ1KfviNpeacsZqNFXjAcMf2lFJpOQOk1LV0PzCnc/wBpprxbcK0Pp7k+/wC0ZsKcDtDxN91qOD3yMS/Xvc4JGP28x9TXgivmIT53dpSmneyt7rGs/wBxnEDRSiFq92CCAPE0bfiP85Bn2JjVsQd4P2xLTfUhG7pFdtRw6yskFhBwniKpzEDDH6Sfl8Q+kwGEZGI9JGSsbTXv9VkTRis5Y7pykRuh6H3jacdiuZ+GQ3PWmVK9ekVNSqMGuyMeYFy5Oe8anBzGXJgTcQAOsBc0DmAdu5mlSvT6VETtiX2kCaq8jzNDq/8AXBGPpaajXV0YB+ZxM7TA07wriYjID4jjAyOkWtVcvg5Peag86o15KAnqRLNINPYNhysfT5TpHoKdSJu5SbgBv8Zmp1Ot1d3J2HZ52maHies023T3bWC9jLeIlvE1Wv2/V0miZ9TqeYobYvcyyznnB7j5iMiMJkqYr5gOZiZjjpBjZkw012LNTTZXUxYjp26zTan9L/0moUWJmanStewsY4GcYlVNeno7YEe5TcdvmUinlkk9cTU6U6hW6dPtOHf6SjlY6k9ZXWHfp87CEZnVTFsivOhllZx6Zg4wwmSG7TiR/wAkY6mDSWn1MMe0IsCYzK9M7tlsYHacRr1bjZWOkWi7TPm9WH3n4tS/bP3i3sgxnvK1D2TTLtbH5DCEQiCwiLbA+Z0M2CazRWW/Q009VyJiwAxqdwxgQUbPENCuQcDpNRpEt6ECW8AV7fR0lf8AD53ZLxuGtU3aafTsDnH5Djz8DCIQRBaRFugtE3gzIM6QgTZiGvMFQE2Q1g94KwPyD2nY/AiGFYQRN5EFxEGog1AgvHvOcJzROYJzBOYJzR+Sw6wzx8CIRCIVnUTJnMM5xnPM/EGfiTPxJn4g/kn4CH4NDDDDMfJj4Yn/xAAiEAEAAgICAgMBAQEAAAAAAAABABEhMUFREGEgcYEwkaH/2gAIAQEAAT8Qq2DuBKyiLLGL/hUNZTHQ/wCxNjfqOhb7Y6Uk9EdJEalXQAWsLi3eHUspSP8ApAKyql5WPgYOor8qlSpoTHc3PzIBg+47zHO485jFOSh7D/JcU7+oxwGsi1eE6qZhIAJK+KWfhUrzU1JjuIdwcQ/hGbzGdtRHKsetEe5i9x+4sujIkJdUADXfcfX6YjEUK9EGs+vlUqBbiCP+MI0YiN5mdzEYqxjGMfihUsUPKwAAVuESRbyWXBrDUOQ135qVKlQSoJQvb3N4M3ZjrwxSMLG3Rc6HjKsudWtG+ahN+UYh9mustxjdb3GjaS0cXxKlSoEqCVEAwb7mKhl9zNGFisbWDYrouHGqXdspSCvUbaxxmVfjdG0RLmEH7aoKLmlxay3l7SoEqBCBk5lIxG8xSqLzM5emUSybgto6GMYRfUCAAFsdNTPL7beJWoHuDCBBUKRXsYJCKEXLNsPGaRbIBtRzLKQOIVGdUFaYyE4KJUIECZL8TyOps8BpBVQdQEaNBEOCiWqUYzUkA4I9bwZQ4SzLz+QNY4QN+s6YifXAu51VQXcU1E13GF/CJAqEUsXRCLYdsSmY0ISuDwwmImLIECBKmooPTU2dviiy7boUxUAhs2RwTCgjL9wkbHkLb99TIXFZMBL3ZKrNpKUEpPDPDHlBLEZFlXpnvQ9kJQrEPdQhIFXUzkm8ZWg/5cNpLC2FBLOLLwxo5oY6Zt5QIEry6J+wWq+LNgUVMXHemYbpMjNhDTD8URiC9Iwh2OCMWWVC3KVuW7AxgIa+jxKNrHOhRx6Qe1lRTr3gkMdENYDLaCGQ4gHVfcdQKhmB548ZlR5OoMxcNbhjHGi6A5YstEaVjWK+8QUNEw8blADhl/iglZbm4aohByyn2LVaagkFK6jAF1OBIMibKZB4xyQK94AxlQsCCOFBIyra1oDtghtCI819fBhBiYXGyeBMYjgNqujmYsINBCAmwve4ULfQAsDwgYu/Re5QK5TdBbo7AjaUGkMGI4BJFAMpHStZtxEqrK7uY7hCio5YnLGVgC7LJcrhnFqS5gHpHTBK9AoFvHwYMuvDsiEw3rU5xKUyRu1jQFpzDyyKNrUv76NWjaARXjNWXRVqTKOa2rAPAq2rBXRnBySogRwW76qYg4Cg7Ti8QdUKCcucLCTRoDgVsZfKLSrVzYQqcotiZ6L5Fxzbs+CZRSrRLy49jcOAhIINXKIFuEMv+G5d9gAAhnYwCZOiqxK8G6QxToYOormGSgXTCietAUEE4wFRJrlek2QHIbFFvRH6gIC4AoqTJcvtl29FiAmZ4z5Z0aIfgOwzfVeTw5zvwUKbIAV0rDK6MF4hWiVhWy6gr+BYEYE1tKKCubhQBeCO4cXrVuosEBsI6sdg4ri1Wq/QIJPFzmk2MQK213sq9tYUXzTshOJabGpf27KwFGQPggEE0p3YHpl3LFXFoO/jdRslpBBLluxxGoS3eKh6hTeSq6hwmaTIhZfZuZ3Ky6v2gWglvQ6h3XUstxLDANdiUPpsxfskIWUUEK5pgkJaSxGDtRkzSBnAlalc1FC67LBKg73QbIR8kBhYBZp0nk8JaJa3iXkBlmNpBdMw4AdEs+CU3xBEPRWksp1yOoAqlFtX1HNksgcQCr9u4yU0xNMvAQYqM40pAQAFiuVzGAJDsxVUjpO2HPvOjryebYOh1CdMwKfAo7INrfdR7BRv3DmXAlwpQrNdQ5taC+MQ78l6hJQuN+0clQiasFoxqsyEAQCzJo/YgGybCCI3gH4HiwJbZDMah8oIj1iDDCvk7hyAGqjEcWUTOCGzkkurE7TySieC6jDRqvsjKlTau2EmdspFhA6LHMbbDF0WQVLyMLn53FkMMXA1L8LATcacx9l+Ma1GAgYSuuW6eYaJN2guo8b1WRLjNqFkNxkUBh5YUK8guphBcDSCiKGhuWBauV4+e5QsujjZGaYbzD5Sz4imQplOiI3TA9YwJLBEPqFoK+oibhgqOKwlaiBVYILQhsEnDBifxuX4wUiWYghsQsYzTB5Y7mEhJlFEAsLL93mOXi5Q1NCGaYP4C0SrSPUqg7hMQg7bN4zvZ3IiBuYNyQ757Y98e3+NVoabjmEHyRs6okEuYDywHlgPMD5nsj2R73+JsiWV1FxDTDO4KlIPAEYSJKjFRj//xAAhEQEAAgICAgMBAQAAAAAAAAABAAIDERIhBCAQEzFBIv/aAAgBAgEBPwD33NzbM2ThVdwqZL8tSug17b+NzcWeWqATxxmbL/v99dzfooM8jW1mN1VszW+/RlraNymatje9TJmKHXbHPkZj8iym45BmUllUoQMdDT6MsbNMvhT8ZjxOnbLDUmLE5KLEteoRqmhgcNp+s4Po/GTJdycQ6mwlt7V/CO647NZi8jLQ1Md7ZnSaJYKOp/n0dzejuOXkdEyZiqAbmbKr1HHZx7WVBmFaqT67dtXc+zIfz0soOpu169s43rbjZ6lMZy4rGuHFrlPtx8tmtTVe2Y6OthHIv+PxnZ/PT9lsQy3j1/ktiN6J5GPkGmNLUmHSdsyeRUroZjtZvuX8y5bWvRIPxartSXKtVTuGR0liJYqMMf8AWbKGxnDn36pNpBGXxVuaZ9FdahiDoI+OttzJ4lbmpXwiprfskazshdIXJyJsnI9SMYx+D5//xAAlEQACAgICAgMAAgMAAAAAAAABAgADBBEFEiAhExQxEBUiI0H/2gAIAQMBAT8A89TUCzExPmsCy3/VX1lhJbfkBuBZqARROHQBS7CZ5APoTGww1YLDxAgH8bEDRTsbnGKfriZAD2hBO4T14CVp2IUfpl2DfUfakzA498uzX4BKuDxACD7nJcXRjV7QkmBDMU9aBuIAgNphF1p7L4CI5Vgw/wCSjk1sA7CWcmKXHxyjPS2Z+QFt0RB1RiTBcr1ejFU3Eb9KIpUDxEopr+HuT7hQsZXQxUAnW5Une9K7Pcu4am4lvyXVDjnIJ2ZXnswGln3T4DU/ToSqlwdEynH6qdnRigKNsZTkJ9kBRL7RUuyZn2G9/kaIydgGGoMPH14IAWAMpaiggAR8qlqyyDRmRmsVDASr7OUT1M/q7woAPuZBvBCWkmEnfUmfWKj5d7ES9ANd/FMh0hyXY7YxbTqcfcEJB9EynLVpnv39CY+BYzdp9IfXIaVcVQF1ZvfgJr+FI1qUswcAGFl2GU+4ri2zROoFRkCVmEdlIf8AJfeytpfEGaBhBESxkOxDcxO4bSfe5VmvUP8AEyvmLwdMdiPyBc78wZ6M6idJ1M6maPmIIPH/2Q=="

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _sum2.default)(10, 5);
console.log(total);

/***/ }
/******/ ]);