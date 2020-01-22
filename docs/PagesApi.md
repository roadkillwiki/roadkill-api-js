# RoadkillApi.PagesApi

All URIs are relative to *http://http:/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pagesAdd**](PagesApi.md#pagesAdd) | **POST** /v3/Pages | Add a page to the database using the provided meta information. This will only add the meta information not the page text, use PageVersions to add text for a page.
[**pagesAllPages**](PagesApi.md#pagesAllPages) | **GET** /v3/Pages/AllPages | Retrieves all pages in the Roadkill database.
[**pagesAllPagesCreatedBy**](PagesApi.md#pagesAllPagesCreatedBy) | **GET** /v3/Pages/AllPagesCreatedBy | Retrieves all pages created by a particular user.
[**pagesDelete**](PagesApi.md#pagesDelete) | **DELETE** /v3/Pages | Deletes an existing page from the database. This is an administrator-only action.
[**pagesFindByTitle**](PagesApi.md#pagesFindByTitle) | **GET** /v3/Pages/FindByTitle | Finds the first page matching the given page title.
[**pagesFindHomePage**](PagesApi.md#pagesFindHomePage) | **GET** /v3/Pages/FindHomePage | Finds the first page in the database with the \&quot;homepage\&quot; tag.
[**pagesGet**](PagesApi.md#pagesGet) | **GET** /v3/Pages/{id} | Gets a single page by its ID.
[**pagesUpdate**](PagesApi.md#pagesUpdate) | **PUT** /v3/Pages | Updates an existing page in the database.



## pagesAdd

> PageResponse pagesAdd(pageRequest)

Add a page to the database using the provided meta information. This will only add the meta information not the page text, use PageVersions to add text for a page.

### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.PagesApi();
let pageRequest = new RoadkillApi.PageRequest(); // PageRequest | The page information to add.
apiInstance.pagesAdd(pageRequest, (error, data, response) => {
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
 **pageRequest** | [**PageRequest**](PageRequest.md)| The page information to add. | 

### Return type

[**PageResponse**](PageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## pagesAllPages

> [PageResponse] pagesAllPages()

Retrieves all pages in the Roadkill database.

### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.PagesApi();
apiInstance.pagesAllPages((error, data, response) => {
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

[**[PageResponse]**](PageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pagesAllPagesCreatedBy

> [PageResponse] pagesAllPagesCreatedBy(opts)

Retrieves all pages created by a particular user.

### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.PagesApi();
let opts = {
  'username': "username_example" // String | The username (typically an email address) of the user that created             the the pages.
};
apiInstance.pagesAllPagesCreatedBy(opts, (error, data, response) => {
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
 **username** | **String**| The username (typically an email address) of the user that created             the the pages. | [optional] 

### Return type

[**[PageResponse]**](PageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pagesDelete

> String pagesDelete(opts)

Deletes an existing page from the database. This is an administrator-only action.

### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.PagesApi();
let opts = {
  'pageId': 56 // Number | The id of the page to remove.
};
apiInstance.pagesDelete(opts, (error, data, response) => {
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
 **pageId** | **Number**| The id of the page to remove. | [optional] 

### Return type

**String**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pagesFindByTitle

> PageResponse pagesFindByTitle(opts)

Finds the first page matching the given page title.

### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.PagesApi();
let opts = {
  'title': "title_example" // String | The title of the page to search for (case-insensitive).
};
apiInstance.pagesFindByTitle(opts, (error, data, response) => {
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
 **title** | **String**| The title of the page to search for (case-insensitive). | [optional] 

### Return type

[**PageResponse**](PageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pagesFindHomePage

> PageResponse pagesFindHomePage()

Finds the first page in the database with the \&quot;homepage\&quot; tag.

### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.PagesApi();
apiInstance.pagesFindHomePage((error, data, response) => {
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

[**PageResponse**](PageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pagesGet

> PageResponse pagesGet(id)

Gets a single page by its ID.

### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.PagesApi();
let id = 56; // Number | The unique ID of the page to retrieve.
apiInstance.pagesGet(id, (error, data, response) => {
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
 **id** | **Number**| The unique ID of the page to retrieve. | 

### Return type

[**PageResponse**](PageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pagesUpdate

> PageResponse pagesUpdate(pageRequest)

Updates an existing page in the database.

### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.PagesApi();
let pageRequest = new RoadkillApi.PageRequest(); // PageRequest | The page details to update, which should include the page id.
apiInstance.pagesUpdate(pageRequest, (error, data, response) => {
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
 **pageRequest** | [**PageRequest**](PageRequest.md)| The page details to update, which should include the page id. | 

### Return type

[**PageResponse**](PageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

