# Messaging.MessageSentResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**to** | **String** | The mobile phone number (in E.164 format) that the message was sent to. | 
**deliveryStatus** | **String** | The current status of the message for this address. Possible values are; &#39;DeliveryImpossible&#39; – The message has been rejected and cannot be delivered. see the description field. &#39;MessageWaiting&#39; – The message will be delivered as soon as possible. | 
**description** | **String** | This is a string that describes why a message could not be delivered. | [optional] 
**messageId** | **String** | The message ID of the SMS that was sent. Use this ID to view the message status or to receive get responses. | [optional] 
**messageType** | **String** | A string that identifys the transport mechanism that was selected for delivering the the message. | [optional] 
**numberSegements** | **Number** | An integer between 0 and 65536 that indicates the number of chargable segments in the message. For SMS this will be the number of segments the message had to be divided into (after convertion) to a character set understood by the SMS network. | [optional] 


<a name="MessageTypeEnum"></a>
## Enum: MessageTypeEnum


* `SMS` (value: `"SMS"`)

* `MMS` (value: `"MMS"`)

* `RCS` (value: `"RCS"`)




