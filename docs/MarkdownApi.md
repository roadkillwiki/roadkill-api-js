# RoadkillApi.MarkdownApi

All URIs are relative to *http://http:/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**markdownConvertToHtml**](MarkdownApi.md#markdownConvertToHtml) | **POST** /v3/Markdown/ConvertToHtml | 
[**markdownUpdateLinksToPage**](MarkdownApi.md#markdownUpdateLinksToPage) | **POST** /v3/Markdown/UpdateLinksToPage | 



## markdownConvertToHtml

> String markdownConvertToHtml(body)



### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.MarkdownApi();
let body = "body_example"; // String | 
apiInstance.markdownConvertToHtml(body, (error, data, response) => {
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
 **body** | **String**|  | 

### Return type

**String**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## markdownUpdateLinksToPage

> markdownUpdateLinksToPage(opts)



### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.MarkdownApi();
let opts = {
  'oldTitle': "oldTitle_example", // String | 
  'newTitle': "newTitle_example" // String | 
};
apiInstance.markdownUpdateLinksToPage(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oldTitle** | **String**|  | [optional] 
 **newTitle** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

