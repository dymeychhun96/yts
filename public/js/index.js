/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/index.js"
/*!*******************************!*\
  !*** ./resources/js/index.js ***!
  \*******************************/
() {

eval("{$(function () {\n  var _this = this;\n  $.ajaxSetup({\n    headers: {\n      \"X-CSRF-TOKEN\": $('meta[name=\"csrf-token\"]').attr(\"content\")\n    }\n  });\n  var scrapeTorrent = function scrapeTorrent(torrentUrl) {\n    var formData = {\n      url: torrentUrl\n    };\n    $.ajax({\n      type: \"GET\",\n      url: \"\".concat(_this.location.origin, \"/scrape-torrent\"),\n      data: formData,\n      success: function success(response) {\n        console.log(response);\n      },\n      error: function error(response) {\n        console.log(response);\n      }\n    });\n  };\n  $(\".btn-download\").on(\"click\", function () {\n    var url = $(this).data(\"url\");\n    scrapeTorrent(url);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvaW5kZXguanMiLCJuYW1lcyI6WyIkIiwiX3RoaXMiLCJhamF4U2V0dXAiLCJoZWFkZXJzIiwiYXR0ciIsInNjcmFwZVRvcnJlbnQiLCJ0b3JyZW50VXJsIiwiZm9ybURhdGEiLCJ1cmwiLCJhamF4IiwidHlwZSIsImNvbmNhdCIsImxvY2F0aW9uIiwib3JpZ2luIiwiZGF0YSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm9uIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaW5kZXguanM/YmY3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uICgpIHtcclxuICAgICQuYWpheFNldHVwKHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiWC1DU1JGLVRPS0VOXCI6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKFwiY29udGVudFwiKVxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzY3JhcGVUb3JyZW50ID0gKHRvcnJlbnRVcmwpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0ge1xyXG4gICAgICAgICAgICB1cmw6IHRvcnJlbnRVcmxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7dGhpcy5sb2NhdGlvbi5vcmlnaW59L3NjcmFwZS10b3JyZW50YCxcclxuICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAkKFwiLmJ0bi1kb3dubG9hZFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgdXJsID0gJCh0aGlzKS5kYXRhKFwidXJsXCIpO1xyXG5cclxuICAgICAgICBzY3JhcGVUb3JyZW50KHVybCk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUFBLENBQUMsQ0FBQyxZQUFZO0VBQUEsSUFBQUMsS0FBQTtFQUNWRCxDQUFDLENBQUNFLFNBQVMsQ0FBQztJQUNSQyxPQUFPLEVBQUU7TUFDTCxjQUFjLEVBQUVILENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDSSxJQUFJLENBQUMsU0FBUztJQUMvRDtFQUNKLENBQUMsQ0FBQztFQUVGLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBSUMsVUFBVSxFQUFLO0lBRWxDLElBQUlDLFFBQVEsR0FBRztNQUNYQyxHQUFHLEVBQUVGO0lBQ1QsQ0FBQztJQUVETixDQUFDLENBQUNTLElBQUksQ0FBQztNQUNIQyxJQUFJLEVBQUUsS0FBSztNQUNYRixHQUFHLEtBQUFHLE1BQUEsQ0FBS1YsS0FBSSxDQUFDVyxRQUFRLENBQUNDLE1BQU0sb0JBQWlCO01BQzdDQyxJQUFJLEVBQUVQLFFBQVE7TUFDZFEsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQVlDLFFBQVEsRUFBRTtRQUN6QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVEsQ0FBQztNQUN6QixDQUFDO01BQ0RHLEtBQUssRUFBRSxTQUFQQSxLQUFLQSxDQUFZSCxRQUFRLEVBQUU7UUFDdkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixRQUFRLENBQUM7TUFDekI7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBRURoQixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNvQixFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVk7SUFDdkMsSUFBSVosR0FBRyxHQUFHUixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNjLElBQUksQ0FBQyxLQUFLLENBQUM7SUFFN0JULGFBQWEsQ0FBQ0csR0FBRyxDQUFDO0VBQ3RCLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyIsImlnbm9yZUxpc3QiOltdfQ==\n//# sourceURL=webpack-internal:///./resources/js/index.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/index.js"]();
/******/ 	
/******/ })()
;