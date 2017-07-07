/**
 * Telstra SMS Messaging API
 * The Telstra SMS Messaging API allows your applications to send and receive SMS text messages from Australia's leading network operator. It also allows your application to track the delivery status of both sent and received SMS messages. 
 *
 * OpenAPI spec version: 2.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/InboundPollResponses', 'model/MessageSentResponse', 'model/OutboundPollResponse', 'model/OutboundPollResponses', 'model/SendSMSRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/InboundPollResponses'), require('../model/MessageSentResponse'), require('../model/OutboundPollResponse'), require('../model/OutboundPollResponses'), require('../model/SendSMSRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Messaging) {
      root.Messaging = {};
    }
    root.Messaging.SMSApi = factory(root.Messaging.ApiClient, root.Messaging.Error, root.Messaging.InboundPollResponses, root.Messaging.MessageSentResponse, root.Messaging.OutboundPollResponse, root.Messaging.OutboundPollResponses, root.Messaging.SendSMSRequest);
  }
}(this, function(ApiClient, Error, InboundPollResponses, MessageSentResponse, OutboundPollResponse, OutboundPollResponses, SendSMSRequest) {
  'use strict';

  /**
   * SMS service.
   * @module api/SMSApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SMSApi. 
   * @alias module:api/SMSApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the messagessmsincoming operation.
     * @callback module:api/SMSApi~messagessmsincomingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InboundPollResponses} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the unread incoming SMS messages
     * Returns a list of unread incoming SMS messages that were sent to the mobile phone nubmer registered with the developer&#39;s application.
     * @param {String} authorization Authorization header in the format &#39;Bearer {access_token}&#39; - get the token by using the OAuth API with the scope &#39;SMS&#39;
     * @param {module:api/SMSApi~messagessmsincomingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InboundPollResponses}
     */
    this.messagessmsincoming = function(authorization, callback) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization == undefined || authorization == null) {
        throw new Error("Missing the required parameter 'authorization' when calling messagessmsincoming");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml'];
      var returnType = InboundPollResponses;

      return this.apiClient.callApi(
        '/messages/sms/incoming', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the messagessmsoutgoingall operation.
     * @callback module:api/SMSApi~messagessmsoutgoingallCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OutboundPollResponses} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the status for all recent outgoing SMS messages
     * Use the unique identifier (messageId) returned as returned in the response from the Send SMS method to get the status. 
     * @param {String} authorization Authorization header in the format &#39;Bearer {access_token}&#39; - get the token by using the OAuth API with the scope &#39;SMS&#39;
     * @param {module:api/SMSApi~messagessmsoutgoingallCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OutboundPollResponses}
     */
    this.messagessmsoutgoingall = function(authorization, callback) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization == undefined || authorization == null) {
        throw new Error("Missing the required parameter 'authorization' when calling messagessmsoutgoingall");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml'];
      var returnType = OutboundPollResponses;

      return this.apiClient.callApi(
        '/messages/sms/outgoing', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the messagessmsoutgoingone operation.
     * @callback module:api/SMSApi~messagessmsoutgoingoneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OutboundPollResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the status of a single outgoing SMS message.
     * Retrieve the status of a message by using the &#39;messageId&#39; that returned as returned in the response from the Send SMS method to get the status. 
     * @param {String} authorization Authorization header in the format &#39;Bearer {access_token}&#39; - get the token by using the OAuth API with the scope &#39;SMS&#39;
     * @param {String} messageId Unique identifier of a message - it is the value returned from a previous POST call to https://api.telstra.com/v2/messages/sms
     * @param {module:api/SMSApi~messagessmsoutgoingoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OutboundPollResponse}
     */
    this.messagessmsoutgoingone = function(authorization, messageId, callback) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization == undefined || authorization == null) {
        throw new Error("Missing the required parameter 'authorization' when calling messagessmsoutgoingone");
      }

      // verify the required parameter 'messageId' is set
      if (messageId == undefined || messageId == null) {
        throw new Error("Missing the required parameter 'messageId' when calling messagessmsoutgoingone");
      }


      var pathParams = {
        'messageId': messageId
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml'];
      var returnType = OutboundPollResponse;

      return this.apiClient.callApi(
        '/messages/sms/{messageId}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the messagessmssend operation.
     * @callback module:api/SMSApi~messagessmssendCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MessageSentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send an SMS to a Australian or International mobile phone.
     * Sends a SMS to a single Australian or International mobile phone number. A unique identifier (messageId) returned in the response, which may be used to query for the delivery status of the message. 
     * @param {String} authorization A header in the format &#39;Bearer {access_token}&#39; - get the token by using the OAuth API with the scope &#39;SMS&#39;
     * @param {module:model/SendSMSRequest} payload A JSON or XML payload containing the recipient&#39;s phone number and text message. The recipient number should be in the format &#39;04xxxxxxxx&#39; where x is a digit
     * @param {module:api/SMSApi~messagessmssendCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MessageSentResponse}
     */
    this.messagessmssend = function(authorization, payload, callback) {
      var postBody = payload;

      // verify the required parameter 'authorization' is set
      if (authorization == undefined || authorization == null) {
        throw new Error("Missing the required parameter 'authorization' when calling messagessmssend");
      }

      // verify the required parameter 'payload' is set
      if (payload == undefined || payload == null) {
        throw new Error("Missing the required parameter 'payload' when calling messagessmssend");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/xml'];
      var accepts = ['application/json', 'text/xml'];
      var returnType = MessageSentResponse;

      return this.apiClient.callApi(
        '/messages/sms', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));