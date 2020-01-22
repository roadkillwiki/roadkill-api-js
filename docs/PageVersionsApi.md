# RoadkillApi.PageVersionsApi

All URIs are relative to *http://http:/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pageVersionsAdd**](PageVersionsApi.md#pageVersionsAdd) | **POST** /v3/PageVersions | 
[**pageVersionsAllVersions**](PageVersionsApi.md#pageVersionsAllVersions) | **GET** /v3/PageVersions/AllVersions | 
[**pageVersionsDelete**](PageVersionsApi.md#pageVersionsDelete) | **DELETE** /v3/PageVersions | 
[**pageVersionsFindPageVersionsByAuthor**](PageVersionsApi.md#pageVersionsFindPageVersionsByAuthor) | **GET** /v3/PageVersions/FindPageVersionsByAuthor | 
[**pageVersionsFindPageVersionsByPageId**](PageVersionsApi.md#pageVersionsFindPageVersionsByPageId) | **GET** /v3/PageVersions/FindPageVersionsByPageId | 
[**pageVersionsGet**](PageVersionsApi.md#pageVersionsGet) | **GET** /v3/PageVersions/{id} | 
[**pageVersionsGetLatestVersion**](PageVersionsApi.md#pageVersionsGetLatestVersion) | **GET** /v3/PageVersions/GetLatestVersion | 
[**pageVersionsUpdate**](PageVersionsApi.md#pageVersionsUpdate) | **PUT** /v3/PageVersions | 



## pageVersionsAdd

> PageVersionResponse pageVersionsAdd(opts)



### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.PageVersionsApi();
let opts = {
  'pageId': 56, // Number | 
  'text': "text_example", // String | 
  'author': "author_example", // String | 
  'dateTime': new Date("2013-10-20T19:20:30+01:00") // Date | 
};
apiInstance.pageVersionsAdd(opts, (error, data, response) => {
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
 **pageId** | **Number**|  | [optional] 
 **text** | **String**|  | [optional] 
 **author** | **String**|  | [optional] 
 **dateTime** | **Date**|  | [optional] 

### Return type

[**PageVersionResponse**](PageVersionResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pageVersionsAllVersions

> [PageVersionResponse] pageVersionsAllVersions()



### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.PageVersionsApi();
apiInstance.pageVersionsAllVersions((error, data, response) => {
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

[**[PageVersionResponse]**](PageVersionResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pageVersionsDelete

> String pageVersionsDelete(opts)



### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.PageVersionsApi();
let opts = {
  'id': "id_example" // String | 
};
apiInstance.pageVersionsDelete(opts, (error, data, response) => {
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
 **id** | **String**|  | [optional] 

### Return type

**String**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pageVersionsFindPageVersionsByAuthor

> [PageVersionResponse] pageVersionsFindPageVersionsByAuthor(opts)



### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.PageVersionsApi();
let opts = {
  'username': "username_example" // String | 
};
apiInstance.pageVersionsFindPageVersionsByAuthor(opts, (error, data, response) => {
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
 **username** | **String**|  | [optional] 

### Return type

[**[PageVersionResponse]**](PageVersionResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pageVersionsFindPageVersionsByPageId

> [PageVersionResponse] pageVersionsFindPageVersionsByPageId(opts)



### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.PageVersionsApi();
let opts = {
  'pageId': 56 // Number | 
};
apiInstance.pageVersionsFindPageVersionsByPageId(opts, (error, data, response) => {
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
 **pageId** | **Number**|  | [optional] 

### Return type

[**[PageVersionResponse]**](PageVersionResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pageVersionsGet

> PageVersionResponse pageVersionsGet(id)



### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.PageVersionsApi();
let id = "id_example"; // String | 
apiInstance.pageVersionsGet(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

[**PageVersionResponse**](PageVersionResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pageVersionsGetLatestVersion

> PageVersionResponse pageVersionsGetLatestVersion(opts)



### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.PageVersionsApi();
let opts = {
  'pageId': 56 // Number | 
};
apiInstance.pageVersionsGetLatestVersion(opts, (error, data, response) => {
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
 **pageId** | **Number**|  | [optional] 

### Return type

[**PageVersionResponse**](PageVersionResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pageVersionsUpdate

> String pageVersionsUpdate(pageVersionRequest)



### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.PageVersionsApi();
let pageVersionRequest = new RoadkillApi.PageVersionRequest(); // PageVersionRequest | 
apiInstance.pageVersionsUpdate(pageVersionRequest, (error, data, response) => {
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
 **pageVersionRequest** | [**PageVersionRequest**](PageVersionRequest.md)|  | 

### Return type

**String**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

