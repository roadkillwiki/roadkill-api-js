# RoadkillApi.InstallApi

All URIs are relative to *http://http:/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**installCreateTestUser**](InstallApi.md#installCreateTestUser) | **POST** /v3/Install/CreateTestUser | 



## installCreateTestUser

> String installCreateTestUser()



### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.InstallApi();
apiInstance.installCreateTestUser((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**String**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

