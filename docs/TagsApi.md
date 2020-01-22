# RoadkillApi.TagsApi

All URIs are relative to *http://http:/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tagsAllTags**](TagsApi.md#tagsAllTags) | **GET** /v3/Tags/AllTags | 
[**tagsFindPageWithTag**](TagsApi.md#tagsFindPageWithTag) | **GET** /v3/Tags/FindPageWithTag | 
[**tagsRename**](TagsApi.md#tagsRename) | **PUT** /v3/Tags/Rename | 



## tagsAllTags

> [TagResponse] tagsAllTags()



### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.TagsApi();
apiInstance.tagsAllTags((error, data, response) => {
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

[**[TagResponse]**](TagResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tagsFindPageWithTag

> [PageResponse] tagsFindPageWithTag(opts)



### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.TagsApi();
let opts = {
  'tag': "tag_example" // String | 
};
apiInstance.tagsFindPageWithTag(opts, (error, data, response) => {
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
 **tag** | **String**|  | [optional] 

### Return type

[**[PageResponse]**](PageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tagsRename

> String tagsRename(opts)



### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.TagsApi();
let opts = {
  'oldTagName': "oldTagName_example", // String | 
  'newTagName': "newTagName_example" // String | 
};
apiInstance.tagsRename(opts, (error, data, response) => {
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
 **oldTagName** | **String**|  | [optional] 
 **newTagName** | **String**|  | [optional] 

### Return type

**String**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

