"use strict";
(self["webpackChunk_15_01_2025"] = self["webpackChunk_15_01_2025"] || []).push([["src_app_modules_tst_tst_module_ts"],{

/***/ 2219:
/*!***************************************************!*\
  !*** ./src/app/modules/tst/tst-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TstRoutingModule": () => (/* binding */ TstRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tst_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tst.component */ 1062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _tst_component__WEBPACK_IMPORTED_MODULE_0__.TstComponent
}];
class TstRoutingModule {
  static {
    this.ɵfac = function TstRoutingModule_Factory(t) {
      return new (t || TstRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: TstRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TstRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1062:
/*!**********************************************!*\
  !*** ./src/app/modules/tst/tst.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TstComponent": () => (/* binding */ TstComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _tst_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tst.service */ 5337);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




const _c0 = function (a0) {
  return {
    "bg-blue-200": a0
  };
};
function TstComponent_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function TstComponent_div_36_div_1_Template_div_keydown_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const country_r6 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.onKeyDown($event, country_r6.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const country_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, i_r7 === ctx_r5.selectedCountryIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", country_r6.name, " ");
  }
}
function TstComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TstComponent_div_36_div_1_Template, 2, 4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.filteredCountries);
  }
}
function TstComponent_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TstComponent_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 37)(2, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TstComponent_tr_55_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.blankRow.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 37)(4, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TstComponent_tr_55_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.blankRow.population = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 37)(6, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TstComponent_tr_55_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.blankRow.area = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 37)(8, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TstComponent_tr_55_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.blankRow.capital = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 37)(10, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TstComponent_tr_55_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.updateRowData(ctx_r15.blankRow));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "path", 42)(13, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.blankRow.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.blankRow.population);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.blankRow.area);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.blankRow.capital);
  }
}
function TstComponent_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 36)(2, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TstComponent_tr_56_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.updateCountry(ctx_r16.countries.length - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Update Row ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function TstComponent_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 45)(1, "td", 37)(2, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TstComponent_tr_57_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const country_r18 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](country_r18.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 37)(4, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TstComponent_tr_57_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const country_r18 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](country_r18.population = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 37)(6, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TstComponent_tr_57_Template_input_ngModelChange_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const country_r18 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](country_r18.area = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 37)(8, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TstComponent_tr_57_Template_input_ngModelChange_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const country_r18 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](country_r18.capital = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 37)(10, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TstComponent_tr_57_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const country_r18 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.updateRowData(country_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "path", 42)(13, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const country_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", country_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", country_r18.population);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", country_r18.area);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", country_r18.capital);
  }
}
class TstComponent {
  constructor(tstService) {
    this.tstService = tstService;
    this.math = Math;
    this.blogs = [{
      title: 'Blog Post 1',
      description: 'Description for blog post 1'
    }, {
      title: 'Blog Post 2',
      description: 'Description for blog post 2'
    }, {
      title: 'Blog Post 3',
      description: 'Description for blog post 3'
    }];
    this.countries = [{
      name: 'United States',
      population: 331002651,
      area: 9833517,
      capital: 'Washington, D.C.'
    }, {
      name: 'Canada',
      population: 37742154,
      area: 9984670,
      capital: 'Ottawa'
    }, {
      name: 'United Kingdom',
      population: 67886011,
      area: 243610,
      capital: 'London'
    }, {
      name: 'Australia',
      population: 25499884,
      area: 7692024,
      capital: 'Canberra'
    }, {
      name: 'India',
      population: 1380004385,
      area: 3287263,
      capital: 'New Delhi'
    }, {
      name: 'China',
      population: 1439323776,
      area: 9596961,
      capital: 'Beijing'
    }, {
      name: 'Brazil',
      population: 212559417,
      area: 8515767,
      capital: 'Brasília'
    }, {
      name: 'Russia',
      population: 145912025,
      area: 17098242,
      capital: 'Moscow'
    }, {
      name: 'Mexico',
      population: 128932753,
      area: 1964375,
      capital: 'Mexico City'
    }, {
      name: 'Japan',
      population: 126476461,
      area: 377975,
      capital: 'Tokyo'
    }, {
      name: 'Germany',
      population: 83783942,
      area: 357022,
      capital: 'Berlin'
    }, {
      name: 'France',
      population: 65273511,
      area: 551695,
      capital: 'Paris'
    }, {
      name: 'Italy',
      population: 60244639,
      area: 301340,
      capital: 'Rome'
    }, {
      name: 'South Africa',
      population: 59308690,
      area: 1219090,
      capital: 'Pretoria'
    }, {
      name: 'South Korea',
      population: 51269185,
      area: 100210,
      capital: 'Seoul'
    }, {
      name: 'Spain',
      population: 46754778,
      area: 505992,
      capital: 'Madrid'
    }, {
      name: 'Argentina',
      population: 45195777,
      area: 2780400,
      capital: 'Buenos Aires'
    }, {
      name: 'Colombia',
      population: 50882891,
      area: 1141748,
      capital: 'Bogotá'
    }, {
      name: 'Kenya',
      population: 53771296,
      area: 580367,
      capital: 'Nairobi'
    }, {
      name: 'Nigeria',
      population: 206139589,
      area: 923768,
      capital: 'Abuja'
    }, {
      name: 'Egypt',
      population: 102334155,
      area: 1002450,
      capital: 'Cairo'
    }, {
      name: 'Turkey',
      population: 84339067,
      area: 783356,
      capital: 'Ankara'
    }, {
      name: 'Vietnam',
      population: 97338579,
      area: 331212,
      capital: 'Hanoi'
    }, {
      name: 'Philippines',
      population: 109581078,
      area: 300000,
      capital: 'Manila'
    }, {
      name: 'Thailand',
      population: 69799978,
      area: 513120,
      capital: 'Bangkok'
    }, {
      name: 'Iran',
      population: 83992949,
      area: 1648195,
      capital: 'Tehran'
    }, {
      name: 'Iraq',
      population: 40222493,
      area: 438317,
      capital: 'Baghdad'
    }, {
      name: 'Saudi Arabia',
      population: 34813867,
      area: 2149690,
      capital: 'Riyadh'
    }, {
      name: 'Malaysia',
      population: 32365999,
      area: 330803,
      capital: 'Kuala Lumpur'
    }, {
      name: 'Singapore',
      population: 5850342,
      area: 728.6,
      capital: 'Singapore'
    }, {
      name: 'New Zealand',
      population: 4822233,
      area: 268021,
      capital: 'Wellington'
    }, {
      name: 'Portugal',
      population: 10196709,
      area: 92212,
      capital: 'Lisbon'
    }, {
      name: 'Greece',
      population: 10423054,
      area: 131957,
      capital: 'Athens'
    }, {
      name: 'Czech Republic',
      population: 10708981,
      area: 78865,
      capital: 'Prague'
    }, {
      name: 'Hungary',
      population: 9660351,
      area: 93030,
      capital: 'Budapest'
    }, {
      name: 'Sweden',
      population: 10099265,
      area: 450295,
      capital: 'Stockholm'
    }, {
      name: 'Finland',
      population: 5540720,
      area: 338424,
      capital: 'Helsinki'
    }, {
      name: 'Norway',
      population: 5421241,
      area: 323802,
      capital: 'Oslo'
    }, {
      name: 'Denmark',
      population: 5818553,
      area: 43094,
      capital: 'Copenhagen'
    }, {
      name: 'Ireland',
      population: 4937786,
      area: 70273,
      capital: 'Dublin'
    }, {
      name: 'Iceland',
      population: 366418,
      area: 103000,
      capital: 'Reykjavik'
    }, {
      name: 'Ukraine',
      population: 43733762,
      area: 603500,
      capital: 'Kyiv'
    }, {
      name: 'Romania',
      population: 19237691,
      area: 238397,
      capital: 'Bucharest'
    }, {
      name: 'Bulgaria',
      population: 6948445,
      area: 110994,
      capital: 'Sofia'
    }, {
      name: 'Slovakia',
      population: 5456362,
      area: 49035,
      capital: 'Bratislava'
    }, {
      name: 'Croatia',
      population: 4105267,
      area: 56594,
      capital: 'Zagreb'
    }, {
      name: 'Serbia',
      population: 8772235,
      area: 77474,
      capital: 'Belgrade'
    }, {
      name: 'Slovenia',
      population: 2078654,
      area: 20273,
      capital: 'Ljubljana'
    }, {
      name: 'Estonia',
      population: 1326535,
      area: 45227,
      capital: 'Tallinn'
    }, {
      name: 'Latvia',
      population: 1886198,
      area: 64559,
      capital: 'Riga'
    }, {
      name: 'Lithuania',
      population: 2722289,
      area: 65301,
      capital: 'Vilnius'
    }, {
      name: 'Moldova',
      population: 2657637,
      area: 33851,
      capital: 'Chișinău'
    }, {
      name: 'Belarus',
      population: 9449323,
      area: 207600,
      capital: 'Minsk'
    }];
    this.blankRow = {
      name: '',
      population: 0,
      area: 0,
      capital: ''
    };
    this.showBlankRow = false;
    this.filteredCountries = [];
    this.searchTerm = '';
    this.activeIndex = -1;
    this.selectedCountryIndex = -1;
    this.currentPage = 1;
    this.itemsPerPage = 5; // Number of items to display per page
    this.sortDirection = true; // true for ascending, false for descending
    this.sortColumn = 'name'; // default sort column
    this.editorContent = '';
  }
  get paginatedCountries() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.countries.slice(start, start + this.itemsPerPage);
  }
  nextPage() {
    if (this.currentPage < Math.ceil(this.countries.length / this.itemsPerPage)) {
      this.currentPage++;
    }
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  filterCountries() {
    const searchTerm = this.searchTerm.toLowerCase();
    this.filteredCountries = this.countries.filter(country => country.name.toLowerCase().includes(searchTerm));
  }
  autocompleteCountryNames(event) {
    const input = event.target.value; // Type assertion
    const filteredCountries = this.countries.filter(country => country.name.toLowerCase().includes(input.toLowerCase()));
    return filteredCountries.map(country => country.name);
  }
  addBlankRow() {
    this.showBlankRow = true;
    this.blankRow = {
      name: '',
      population: 0,
      area: 0,
      capital: ''
    };
  }
  updateCountry(index) {
    console.log('Blank Row Values:', this.blankRow);
    this.countries[index] = {
      ...this.countries[index],
      ...this.blankRow
    };
    this.blankRow = {
      name: '',
      population: 0,
      area: 0,
      capital: ''
    };
    this.showBlankRow = false; // Hide the blank row after updating
  }
  updateCountryData(country) {
    console.log('Updating country:', country);
    // Additional logic to update the country can be added here
  }
  updateRowData(rowData) {
    console.log('Updating row data:', rowData);
    // Additional logic to update the row data can be added here
  }
  onKeyDown(event, countryName) {
    if (event.key === 'Enter') {
      this.searchTerm = countryName;
      this.filteredCountries = [];
      this.activeIndex = -1; // Reset active index
    } else if (event.key === 'ArrowDown') {
      event.preventDefault(); // Prevent default scrolling
      this.activeIndex = Math.min(this.activeIndex + 1, this.filteredCountries.length - 1);
      this.selectedCountryIndex = Math.min(this.selectedCountryIndex + 1, this.filteredCountries.length - 1);
      this.searchTerm = this.filteredCountries[this.activeIndex]?.name || '';
    } else if (event.key === 'ArrowUp') {
      event.preventDefault(); // Prevent default scrolling
      this.activeIndex = Math.max(this.activeIndex - 1, 0);
      this.selectedCountryIndex = Math.max(this.selectedCountryIndex - 1, 0);
      this.searchTerm = this.filteredCountries[this.activeIndex]?.name || '';
    }
  }
  convertCsvToJson(csvData) {
    const lines = csvData.split('\n');
    const headers = lines[0].split(',');
    const jsonArray = lines.slice(1).filter(line => line.trim() !== '') // Filter out empty lines
    .map(line => {
      const values = line.split(',');
      const jsonObject = {};
      headers.forEach((header, index) => {
        if (header && values[index] !== undefined) {
          // Check for undefined
          jsonObject[header.trim()] = values[index].trim();
        } else if (header && values[index] === undefined) {
          jsonObject[header.trim()] = '';
        }
      });
      return jsonObject;
    });
    return jsonArray;
  }
  uploadCsv() {
    const fileInput = document.getElementById('csvFileInput');
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const csvData = reader.result;
        const jsonArray = this.convertCsvToJson(csvData); // Convert CSV to JSON
        const formData = new FormData();
        formData.append('file', new Blob([JSON.stringify(jsonArray)], {
          type: 'application/json'
        }), 'data.json'); // Convert JSON to Blob
        this.tstService.uploadFile(jsonArray).subscribe(response => {
          console.log('File uploaded successfully', response);
        }, error => {
          console.error('Error uploading file', error);
        });
      };
      reader.readAsText(file); // Read the uploaded file as text
    }
  }
  sortData(column) {
    this.sortColumn = column;
    this.sortDirection = !this.sortDirection; // toggle sort direction
    this.countries.sort((a, b) => {
      if (a[column] < b[column]) {
        return this.sortDirection ? -1 : 1;
      }
      if (a[column] > b[column]) {
        return this.sortDirection ? 1 : -1;
      }
      return 0;
    });
  }
  formatText(command, value) {
    document.execCommand(command, false, value);
  }
  setTextSize(size) {
    this.formatText('fontSize', size);
  }
  setTextColor(color) {
    this.formatText('foreColor', color);
  }
  alignText(alignment) {
    this.formatText('justify' + alignment);
  }
  onInputChange(event) {
    const inputElement = event.target; // Type assertion
    const value = inputElement.value; // Access the value
    console.log(value);
  }
  static {
    this.ɵfac = function TstComponent_Factory(t) {
      return new (t || TstComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tst_service__WEBPACK_IMPORTED_MODULE_0__.TstService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TstComponent,
      selectors: [["app-tst"]],
      decls: 65,
      vars: 12,
      consts: [[1, "max-w-xl", "mx-auto", "bg-white", "shadow-md", "rounded-lg", "p-4"], [1, "toolbar", "flex", "space-x-2", "mb-4"], [1, "btn-bold", "px-2", "py-1", "bg-gray-200", "rounded", "hover:bg-gray-300", 3, "click"], [1, "btn-italic", "px-2", "py-1", "bg-gray-200", "rounded", "hover:bg-gray-300", 3, "click"], [1, "btn-underline", "px-2", "py-1", "bg-gray-200", "rounded", "hover:bg-gray-300", 3, "click"], [1, "text-size", "px-2", "py-1", "bg-gray-200", "rounded", "hover:bg-gray-300"], ["value", "1"], ["value", "3"], ["value", "5"], ["type", "color", "title", "Text Color", 1, "text-color", "px-2", "py-1", "bg-gray-200", "rounded", "hover:bg-gray-300"], [1, "btn-left", "px-2", "py-1", "bg-gray-200", "rounded", "hover:bg-gray-300", 3, "click"], [1, "btn-center", "px-2", "py-1", "bg-gray-200", "rounded", "hover:bg-gray-300", 3, "click"], [1, "btn-right", "px-2", "py-1", "bg-gray-200", "rounded", "hover:bg-gray-300", 3, "click"], ["contenteditable", "true", 1, "editor", "border", "p-4", "rounded", "bg-white", "min-h-[150px]"], ["type", "file", "accept", ".csv", "id", "csvFileInput"], [1, "relative", "inline-block", "group"], [1, "bg-blue-500", "text-white", "py-2", "px-4", "rounded", 3, "click"], [1, "absolute", "top-full", "left-1/2", "-translate-x-1/2", "bg-green-100", "text-green-500", "border", "border-green-500", "p-1", "rounded", "hidden", "group-hover:block", "whitespace-nowrap"], [1, "p-6", "text-center"], [1, "text-3xl", "font-bold", "mb-6"], ["type", "text", "placeholder", "Search countries...", 1, "mb-4", "p-2", "border", "border-gray-300", "rounded", "w-1/2", 3, "ngModel", "ngModelChange", "input", "keydown"], ["class", "absolute bg-white border border-gray-300 rounded w-1/2 mt-1", 4, "ngIf"], [1, "overflow-x-auto"], [1, "mb-4", "bg-blue-500", "text-white", "py-2", "px-4", "rounded", 3, "click"], [1, "min-w-full", "bg-white", "border", "border-gray-300"], [1, "bg-gray-200", "text-gray-700"], [1, "cursor-pointer", "py-2", "px-4", "border-b", 3, "click"], [1, "cursor-pointer", "py-2", "px-4", "border-b"], [4, "ngIf"], ["class", "hover:bg-gray-100", 4, "ngFor", "ngForOf"], [1, "flex", "justify-center", "mt-4"], [1, "cursor-pointer", "mx-4", "text-xl", 3, "click"], [1, "self-center"], [1, "absolute", "bg-white", "border", "border-gray-300", "rounded", "w-1/2", "mt-1"], ["class", "p-2 hover:bg-gray-200 cursor-pointer", 3, "ngClass", "keydown", 4, "ngFor", "ngForOf"], [1, "p-2", "hover:bg-gray-200", "cursor-pointer", 3, "ngClass", "keydown"], ["colspan", "5", 1, "py-2", "px-4", "border-b", "text-center"], [1, "py-2", "px-4", "border-b"], [1, "border", "rounded", "p-1", 3, "ngModel", "ngModelChange"], ["type", "number", 1, "border", "rounded", "p-1", 3, "ngModel", "ngModelChange"], ["aria-label", "Edit", 1, "bg-transparent", "border-0", "cursor-pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-pencil"], ["d", "M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-1.5 1.5-3-3 1.5-1.5z"], ["fill-rule", "evenodd", "d", "M1 13.5V15h1.5l8.5-8.5-1.5-1.5L1 13.5z"], ["title", "Update the last country row", "data-tooltip", "Update the last country row", 1, "mt-2", "bg-green-500", "text-white", "py-2", "px-4", "rounded", 3, "click"], [1, "hover:bg-gray-100"]],
      template: function TstComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TstComponent_Template_button_click_2_listener() {
            return ctx.formatText("bold");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Bold");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TstComponent_Template_button_click_4_listener() {
            return ctx.formatText("italic");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Italic");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TstComponent_Template_button_click_6_listener() {
            return ctx.formatText("underline");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Underline");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "select", 5)(9, "option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Small");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Normal");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Large");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TstComponent_Template_button_click_16_listener() {
            return ctx.alignText("Left");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TstComponent_Template_button_click_18_listener() {
            return ctx.alignText("Center");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Center");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TstComponent_Template_button_click_20_listener() {
            return ctx.alignText("Right");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " tst works!\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 15)(28, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TstComponent_Template_button_click_28_listener() {
            return ctx.uploadCsv();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Upload CSV ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Upload a CSV file to the application ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 18)(33, "h1", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Country List");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TstComponent_Template_input_ngModelChange_35_listener($event) {
            return ctx.searchTerm = $event;
          })("input", function TstComponent_Template_input_input_35_listener() {
            return ctx.filterCountries();
          })("keydown", function TstComponent_Template_input_keydown_35_listener($event) {
            return ctx.onKeyDown($event, ctx.searchTerm);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, TstComponent_div_36_Template, 2, 1, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 22)(38, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TstComponent_Template_button_click_38_listener() {
            ctx.addBlankRow();
            return ctx.showBlankRow = true;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Add Blank Row");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "table", 24)(41, "thead")(42, "tr", 25)(43, "th", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TstComponent_Template_th_click_43_listener() {
            return ctx.sortData("name");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Country Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "th", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TstComponent_Template_th_click_45_listener() {
            return ctx.sortData("population");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Population");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "th", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TstComponent_Template_th_click_47_listener() {
            return ctx.sortData("area");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Area (km\u00B2)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "th", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TstComponent_Template_th_click_49_listener() {
            return ctx.sortData("capital");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Capital");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "th", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, TstComponent_tr_54_Template, 2, 0, "tr", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, TstComponent_tr_55_Template, 14, 4, "tr", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, TstComponent_tr_56_Template, 4, 0, "tr", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, TstComponent_tr_57_Template, 14, 4, "tr", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 30)(59, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TstComponent_Template_button_click_59_listener() {
            return ctx.previousPage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "\u25C0");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TstComponent_Template_button_click_63_listener() {
            return ctx.nextPage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "\u25B6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filteredCountries.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showBlankRow);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showBlankRow);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showBlankRow);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.paginatedCountries);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx.currentPage === 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Page ", ctx.currentPage, " of ", ctx.math.ceil(ctx.countries.length / ctx.itemsPerPage), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx.currentPage === ctx.math.ceil(ctx.countries.length / ctx.itemsPerPage));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
      styles: [".bg-blue-200[_ngcontent-%COMP%] {\n  background-color: #bfdbfe; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzdC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcMTUtMDEtMjAyNSUyMC0lMjBDb3B5XFxzcmNcXGFwcFxcbW9kdWxlc1xcdHN0XFx0c3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQSxFQUFBLHFCQUFBO0FDQ0oiLCJmaWxlIjoidHN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWJsdWUtMjAwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZkYmZlOyAvKiBMaWdodCBibHVlIGNvbG9yICovXG4gIH1cblxuIiwiLmJnLWJsdWUtMjAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmZGJmZTsgLyogTGlnaHQgYmx1ZSBjb2xvciAqL1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy90c3QvdHN0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vMTUtMDEtMjAyNSUyMC0lMjBDb3B5L3NyYy9hcHAvbW9kdWxlcy90c3QvdHN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUEsRUFBQSxxQkFBQTtBQ0NKO0FEQ0EsZ2tCQUFna0IiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctYmx1ZS0yMDAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZmRiZmU7IC8qIExpZ2h0IGJsdWUgY29sb3IgKi9cbiAgfVxuXG4iLCIuYmctYmx1ZS0yMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZkYmZlOyAvKiBMaWdodCBibHVlIGNvbG9yICovXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4027:
/*!*******************************************!*\
  !*** ./src/app/modules/tst/tst.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TstModule": () => (/* binding */ TstModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tst_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tst-routing.module */ 2219);
/* harmony import */ var _tst_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tst.component */ 1062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class TstModule {
  static {
    this.ɵfac = function TstModule_Factory(t) {
      return new (t || TstModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: TstModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _tst_routing_module__WEBPACK_IMPORTED_MODULE_0__.TstRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TstModule, {
    declarations: [_tst_component__WEBPACK_IMPORTED_MODULE_1__.TstComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _tst_routing_module__WEBPACK_IMPORTED_MODULE_0__.TstRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 5337:
/*!********************************************!*\
  !*** ./src/app/modules/tst/tst.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TstService": () => (/* binding */ TstService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class TstService {
  constructor(http) {
    this.http = http;
  }
  // Define your service methods here
  uploadFile(data) {
    const apiEndpoint = 'api/tst/csvtojson';
    const body = data;
    const headers = {
      'content-type': 'application/json'
    };
    return this.http.post(apiEndpoint, body, {
      'headers': headers
    });
  }
  static {
    this.ɵfac = function TstService_Factory(t) {
      return new (t || TstService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TstService,
      factory: TstService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_tst_tst_module_ts.js.map