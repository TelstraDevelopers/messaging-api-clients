# TelstraSmsMessagingApi.SMSApi

All URIs are relative to *https://slot2.apipractice.t-dev.telstra.net/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMessageStatus**](SMSApi.md#getMessageStatus) | **GET** /messages/sms/{messageId}/status | Get Message Status
[**retrieveMessages**](SMSApi.md#retrieveMessages) | **GET** /messages/sms | Retrieve Messages
[**sendMessage**](SMSApi.md#sendMessage) | **POST** /messages/sms | Send Message


<a name="getMessageStatus"></a>
# **getMessageStatus**
> OutboundPollResponse getMessageStatus(authorization, messageId)

Get Message Status

Retrieve the status of a single outgoing SMS message.

### Example
```javascript
var TelstraSmsMessagingApi = require('telstra_sms_messaging_api');
var defaultClient = TelstraSmsMessagingApi.ApiClient.default;

// Configure OAuth2 access token for authorization: OauthSecurity
var OauthSecurity = defaultClient.authentications['OauthSecurity'];
OauthSecurity.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new TelstraSmsMessagingApi.SMSApi();

var authorization = "authorization_example"; // String | Authorization header in the format 'Bearer {access_token}' - get the token by using the OAuth API with the scope 'SMS'

var messageId = "messageId_example"; // String | Unique identifier of a message - it is the value returned from a previous POST call to https://api.telstra.com/v2/messages/sms


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMessageStatus(authorization, messageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Authorization header in the format &#39;Bearer {access_token}&#39; - get the token by using the OAuth API with the scope &#39;SMS&#39; | 
 **messageId** | **String**| Unique identifier of a message - it is the value returned from a previous POST call to https://api.telstra.com/v2/messages/sms | 

### Return type

[**OutboundPollResponse**](OutboundPollResponse.md)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveMessages"></a>
# **retrieveMessages**
> [InboundPollResponse] retrieveMessages(authorization)

Retrieve Messages

Retrieve the unread incoming SMS messages

### Example
```javascript
var TelstraSmsMessagingApi = require('telstra_sms_messaging_api');
var defaultClient = TelstraSmsMessagingApi.ApiClient.default;

// Configure OAuth2 access token for authorization: OauthSecurity
var OauthSecurity = defaultClient.authentications['OauthSecurity'];
OauthSecurity.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new TelstraSmsMessagingApi.SMSApi();

var authorization = "authorization_example"; // String | Authorization header in the format 'Bearer {access_token}' - get the token by using the OAuth API with the scope 'SMS'


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveMessages(authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Authorization header in the format &#39;Bearer {access_token}&#39; - get the token by using the OAuth API with the scope &#39;SMS&#39; | 

### Return type

[**[InboundPollResponse]**](InboundPollResponse.md)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendMessage"></a>
# **sendMessage**
> MessageSentResponse sendMessage(authorization, payload)

Send Message

Send an SMS to a Australian or International mobile phone.

### Example
```javascript
var TelstraSmsMessagingApi = require('telstra_sms_messaging_api');
var defaultClient = TelstraSmsMessagingApi.ApiClient.default;

// Configure OAuth2 access token for authorization: OauthSecurity
var OauthSecurity = defaultClient.authentications['OauthSecurity'];
OauthSecurity.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new TelstraSmsMessagingApi.SMSApi();

var authorization = "authorization_example"; // String | A header in the format 'Bearer {access_token}' - get the token by using the OAuth API with the scope 'SMS'

var payload = new TelstraSmsMessagingApi.SendSMSRequest(); // SendSMSRequest | A JSON or XML payload containing the recipient's phone number and text message. The recipient number should be in the format '04xxxxxxxx' where x is a digit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendMessage(authorization, payload, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| A header in the format &#39;Bearer {access_token}&#39; - get the token by using the OAuth API with the scope &#39;SMS&#39; | 
 **payload** | [**SendSMSRequest**](SendSMSRequest.md)| A JSON or XML payload containing the recipient&#39;s phone number and text message. The recipient number should be in the format &#39;04xxxxxxxx&#39; where x is a digit | 

### Return type

[**MessageSentResponse**](MessageSentResponse.md)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

