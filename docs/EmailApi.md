# RoadkillApi.EmailApi

All URIs are relative to *http://http:/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**emailSend**](EmailApi.md#emailSend) | **POST** /v3/Email | 



## emailSend

> File emailSend(opts)



### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.EmailApi();
let opts = {
  'from': "from_example", // String | 
  'to': "to_example", // String | 
  'subject': "subject_example", // String | 
  'body': "body_example" // String | 
};
apiInstance.emailSend(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **String**|  | [optional] 
 **to** | **String**|  | [optional] 
 **subject** | **String**|  | [optional] 
 **body** | **String**|  | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream

