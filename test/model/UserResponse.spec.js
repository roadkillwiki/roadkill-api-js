/**
 * Roadkill API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.RoadkillApi);
  }
}(this, function(expect, RoadkillApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new RoadkillApi.UserResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UserResponse', function() {
    it('should create an instance of UserResponse', function() {
      // uncomment below and update the code to test UserResponse
      //var instane = new RoadkillApi.UserResponse();
      //expect(instance).to.be.a(RoadkillApi.UserResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new RoadkillApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property userName (base name: "userName")', function() {
      // uncomment below and update the code to test the property userName
      //var instane = new RoadkillApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property normalizedUserName (base name: "normalizedUserName")', function() {
      // uncomment below and update the code to test the property normalizedUserName
      //var instane = new RoadkillApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new RoadkillApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property normalizedEmail (base name: "normalizedEmail")', function() {
      // uncomment below and update the code to test the property normalizedEmail
      //var instane = new RoadkillApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property emailConfirmed (base name: "emailConfirmed")', function() {
      // uncomment below and update the code to test the property emailConfirmed
      //var instane = new RoadkillApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property passwordHash (base name: "passwordHash")', function() {
      // uncomment below and update the code to test the property passwordHash
      //var instane = new RoadkillApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property securityStamp (base name: "securityStamp")', function() {
      // uncomment below and update the code to test the property securityStamp
      //var instane = new RoadkillApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property concurrencyStamp (base name: "concurrencyStamp")', function() {
      // uncomment below and update the code to test the property concurrencyStamp
      //var instane = new RoadkillApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phoneNumber")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instane = new RoadkillApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumberConfirmed (base name: "phoneNumberConfirmed")', function() {
      // uncomment below and update the code to test the property phoneNumberConfirmed
      //var instane = new RoadkillApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property twoFactorEnabled (base name: "twoFactorEnabled")', function() {
      // uncomment below and update the code to test the property twoFactorEnabled
      //var instane = new RoadkillApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property lockoutEnd (base name: "lockoutEnd")', function() {
      // uncomment below and update the code to test the property lockoutEnd
      //var instane = new RoadkillApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property lockoutEnabled (base name: "lockoutEnabled")', function() {
      // uncomment below and update the code to test the property lockoutEnabled
      //var instane = new RoadkillApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property accessFailedCount (base name: "accessFailedCount")', function() {
      // uncomment below and update the code to test the property accessFailedCount
      //var instane = new RoadkillApi.UserResponse();
      //expect(instance).to.be();
    });

    it('should have the property roleClaims (base name: "roleClaims")', function() {
      // uncomment below and update the code to test the property roleClaims
      //var instane = new RoadkillApi.UserResponse();
      //expect(instance).to.be();
    });

  });

}));
