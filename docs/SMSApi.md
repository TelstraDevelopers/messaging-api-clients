# Messaging.SMSApi

All URIs are relative to *https://sapi.telstra.com/v2/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**messagessmsincoming**](SMSApi.md#messagessmsincoming) | **GET** /messages/sms/incoming | Retrieve the unread incoming SMS messages
[**messagessmsoutgoingall**](SMSApi.md#messagessmsoutgoingall) | **GET** /messages/sms/outgoing | Retrieve the status for all recent outgoing SMS messages
[**messagessmsoutgoingone**](SMSApi.md#messagessmsoutgoingone) | **GET** /messages/sms/{messageId}/status | Retrieve the status of a single outgoing SMS message.
[**messagessmssend**](SMSApi.md#messagessmssend) | **POST** /messages/sms | Send an SMS to a Australian or International mobile phone.


<a name="messagessmsincoming"></a>
# **messagessmsincoming**
> InboundPollResponses messagessmsincoming(authorization)

Retrieve the unread incoming SMS messages

Returns a list of unread incoming SMS messages that were sent to the mobile phone nubmer registered with the developer&#39;s application.

### Example
```javascript
var Messaging = require('messaging');

var apiInstance = new Messaging.SMSApi();

var authorization = "authorization_example"; // String | Authorization header in the format 'Bearer {access_token}' - get the token by using the OAuth API with the scope 'SMS'


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.messagessmsincoming(authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Authorization header in the format &#39;Bearer {access_token}&#39; - get the token by using the OAuth API with the scope &#39;SMS&#39; | 

### Return type

[**InboundPollResponses**](InboundPollResponses.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml

<a name="messagessmsoutgoingall"></a>
# **messagessmsoutgoingall**
> OutboundPollResponses messagessmsoutgoingall(authorization)

Retrieve the status for all recent outgoing SMS messages

Use the unique identifier (messageId) returned as returned in the response from the Send SMS method to get the status. 

### Example
```javascript
var Messaging = require('messaging');

var apiInstance = new Messaging.SMSApi();

var authorization = "authorization_example"; // String | Authorization header in the format 'Bearer {access_token}' - get the token by using the OAuth API with the scope 'SMS'


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.messagessmsoutgoingall(authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Authorization header in the format &#39;Bearer {access_token}&#39; - get the token by using the OAuth API with the scope &#39;SMS&#39; | 

### Return type

[**OutboundPollResponses**](OutboundPollResponses.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml

<a name="messagessmsoutgoingone"></a>
# **messagessmsoutgoingone**
> OutboundPollResponse messagessmsoutgoingone(authorization, messageId)

Retrieve the status of a single outgoing SMS message.

Retrieve the status of a message by using the &#39;messageId&#39; that returned as returned in the response from the Send SMS method to get the status. 

### Example
```javascript
var Messaging = require('messaging');

var apiInstance = new Messaging.SMSApi();

var authorization = "authorization_example"; // String | Authorization header in the format 'Bearer {access_token}' - get the token by using the OAuth API with the scope 'SMS'

var messageId = "messageId_example"; // String | Unique identifier of a message - it is the value returned from a previous POST call to https://api.telstra.com/v2/messages/sms


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.messagessmsoutgoingone(authorization, messageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Authorization header in the format &#39;Bearer {access_token}&#39; - get the token by using the OAuth API with the scope &#39;SMS&#39; | 
 **messageId** | **String**| Unique identifier of a message - it is the value returned from a previous POST call to https://api.telstra.com/v2/messages/sms | 

### Return type

[**OutboundPollResponse**](OutboundPollResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml

<a name="messagessmssend"></a>
# **messagessmssend**
> MessageSentResponse messagessmssend(authorization, payload)

Send an SMS to a Australian or International mobile phone.

Sends a SMS to a single Australian or International mobile phone number. A unique identifier (messageId) returned in the response, which may be used to query for the delivery status of the message. 

### Example
```javascript
var Messaging = require('messaging');

var apiInstance = new Messaging.SMSApi();

var authorization = "authorization_example"; // String | A header in the format 'Bearer {access_token}' - get the token by using the OAuth API with the scope 'SMS'

var payload = new Messaging.SendSMSRequest(); // SendSMSRequest | A JSON or XML payload containing the recipient's phone number and text message. The recipient number should be in the format '04xxxxxxxx' where x is a digit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.messagessmssend(authorization, payload, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| A header in the format &#39;Bearer {access_token}&#39; - get the token by using the OAuth API with the scope &#39;SMS&#39; | 
 **payload** | [**SendSMSRequest**](SendSMSRequest.md)| A JSON or XML payload containing the recipient&#39;s phone number and text message. The recipient number should be in the format &#39;04xxxxxxxx&#39; where x is a digit | 

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/xml
 - **Accept**: application/json, text/xml

