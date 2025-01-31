"use strict";
(self["webpackChunk_15_01_2025"] = self["webpackChunk_15_01_2025"] || []).push([["src_app_modules_home_home_module_ts"],{

/***/ 4601:
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 5493);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}];
class HomeRoutingModule {
  static {
    this.ɵfac = function HomeRoutingModule_Factory(t) {
      return new (t || HomeRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: HomeRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5493:
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class HomeComponent {
  constructor(router) {
    this.router = router;
  }
  static {
    this.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 128,
      vars: 0,
      consts: [[1, "flex", "flex-wrap", "justify-between", "p-6", "bg-opacity-50", "backdrop-blur-md"], [1, "w-full", "md:w-4/5", "p-4"], [1, "bg-white", "rounded-lg", "shadow-lg", "p-6", "mb-6"], [1, "text-2xl", "font-semibold", "mb-4"], [1, "text-gray-700", "mb-4"], [1, "list-disc", "ml-5"], [1, "text-xl", "font-semibold", "mb-4"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "bg-white", "rounded-lg", "shadow-lg", "p-4"], ["src", "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", "alt", "JavaScript", 1, "w-full", "h-32", "object-cover", "rounded-t-lg"], [1, "font-bold", "mt-2"], [1, "text-gray-700"], [1, "text-blue-500", "hover:underline"], ["src", "https://www.typescriptlang.org/icons/icon-48x48.png", "alt", "TypeScript", 1, "w-full", "h-32", "object-cover", "rounded-t-lg"], ["src", "https://angular.io/assets/images/logos/angular/angular.png", "alt", "Angular", 1, "w-full", "h-32", "object-cover", "rounded-t-lg"], ["src", "https://reactjs.org/logo-og.png", "alt", "React", 1, "w-full", "h-32", "object-cover", "rounded-t-lg"], ["src", "https://nextjs.org/static/favicon/favicon.ico", "alt", "Next.js", 1, "w-full", "h-32", "object-cover", "rounded-t-lg"], ["src", "https://cdn.jsdelivr.net/npm/@nuxtjs/docs@latest/assets/img/nuxt-icon.png", "alt", "Nuxt.js", 1, "w-full", "h-32", "object-cover", "rounded-t-lg"], [1, "bg-white", "rounded-lg", "shadow-lg", "p-6", "mt-6"], ["type", "text", "placeholder", "Your Name", "required", "", 1, "w-full", "p-2", "border", "border-gray-300", "rounded", "mb-4"], ["type", "email", "placeholder", "Your Email", "required", "", 1, "w-full", "p-2", "border", "border-gray-300", "rounded", "mb-4"], ["rows", "4", "placeholder", "Your Message", "required", "", 1, "w-full", "p-2", "border", "border-gray-300", "rounded", "mb-4"], ["type", "submit", 1, "bg-blue-500", "text-white", "p-2", "rounded"], [1, "w-full", "md:w-1/5", "p-4"], [1, "bg-white", "rounded-lg", "shadow-lg", "p-6"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome to My Portfolio");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hello! I am a modern web developer skilled in JavaScript and TypeScript. I have developed various projects including: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5)(8, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Document Management System");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "School Attendance Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Library Book Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Inventory Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "To-Do Web Application");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "I am passionate about creating efficient and user-friendly applications that solve real-world problems. My experience includes working with various frameworks and libraries, ensuring that the applications I develop are not only functional but also aesthetically pleasing and easy to use. I believe in continuous learning and staying updated with the latest technologies to deliver the best solutions for my clients.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Programming Languages");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7)(23, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "JavaScript");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "JavaScript is a versatile programming language used for web development. It allows developers to create dynamic and interactive web applications. With frameworks like Node.js, JavaScript can also be used for server-side programming. Its asynchronous capabilities and extensive libraries make it a popular choice among developers.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Read More");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "TypeScript");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "TypeScript is a superset of JavaScript that adds static typing to the language. This helps developers catch errors early in the development process and makes code more maintainable. TypeScript is widely used in large applications, especially when working with frameworks like Angular.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Read More");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Angular");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Angular is a platform for building mobile and desktop web applications. It provides a comprehensive framework for developing single-page applications (SPAs) with a focus on performance and scalability. Angular uses TypeScript and offers powerful tools for building complex applications.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Read More");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "React");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components, making it easier to manage the state of applications. React is often used in conjunction with other libraries and frameworks to build complex applications.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Read More");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h4", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Next.js");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Next.js is a React framework that enables server-side rendering and static site generation. It simplifies the process of building React applications and provides features like automatic code splitting and optimized performance.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Read More");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h4", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Nuxt.js");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Nuxt.js is a framework based on Vue.js for building server-rendered applications. It provides a powerful set of tools to create universal applications that can run both on the server and the client.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Read More");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 18)(72, "h3", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Current Application");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Our current application focuses on: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ul", 5)(77, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Document management (keeping records of documents and their validity)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Indian stock market portfolio management");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Notes management");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Inventory system");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "We provide notifications over email for short validity documents to ensure timely actions.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 18)(88, "h3", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Contact Us");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "form");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "input", 19)(92, "input", 20)(93, "textarea", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Send Message");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 18)(97, "h3", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Contact Details");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Address: Your Address Here");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Phone: Your Phone Number Here");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Email: Your Email Here");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 23)(106, "div", 2)(107, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Recent Projects");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "ul", 5)(110, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "School Attendance Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Library Book Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Inventory Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "To-Do Web Application");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 24)(119, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Upcoming Projects");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "ul", 5)(122, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Indian Stock Market Portfolio Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Notes Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Inventory System");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4882:
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 4601);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 5493);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class HomeModule {
  static {
    this.ɵfac = function HomeModule_Factory(t) {
      return new (t || HomeModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_home_home_module_ts.js.map