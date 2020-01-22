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

import ApiClient from '../ApiClient';

/**
 * The ProblemDetails model module.
 * @module model/ProblemDetails
 * @version 3.0
 */
class ProblemDetails {
    /**
     * Constructs a new <code>ProblemDetails</code>.
     * @alias module:model/ProblemDetails
     */
    constructor() { 
        
        ProblemDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProblemDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProblemDetails} obj Optional instance to populate.
     * @return {module:model/ProblemDetails} The populated <code>ProblemDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProblemDetails();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
            }
            if (data.hasOwnProperty('instance')) {
                obj['instance'] = ApiClient.convertToType(data['instance'], 'String');
            }
            if (data.hasOwnProperty('extensions')) {
                obj['extensions'] = ApiClient.convertToType(data['extensions'], {'String': Object});
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
ProblemDetails.prototype['type'] = undefined;

/**
 * @member {String} title
 */
ProblemDetails.prototype['title'] = undefined;

/**
 * @member {Number} status
 */
ProblemDetails.prototype['status'] = undefined;

/**
 * @member {String} detail
 */
ProblemDetails.prototype['detail'] = undefined;

/**
 * @member {String} instance
 */
ProblemDetails.prototype['instance'] = undefined;

/**
 * @member {Object.<String, Object>} extensions
 */
ProblemDetails.prototype['extensions'] = undefined;






export default ProblemDetails;

