# RoadkillApi.AuthorizationApi

All URIs are relative to *http://http:/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorizationAuthenticate**](AuthorizationApi.md#authorizationAuthenticate) | **POST** /v3/Authorization/Authenticate | 



## authorizationAuthenticate

> AuthorizationResponse authorizationAuthenticate(authorizationRequest)



### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.AuthorizationApi();
let authorizationRequest = new RoadkillApi.AuthorizationRequest(); // AuthorizationRequest | 
apiInstance.authorizationAuthenticate(authorizationRequest, (error, data, response) => {
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
 **authorizationRequest** | [**AuthorizationRequest**](AuthorizationRequest.md)|  | 

### Return type

[**AuthorizationResponse**](AuthorizationResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

