# RoadkillApi.UsersApi

All URIs are relative to *http://http:/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersCreateAdmin**](UsersApi.md#usersCreateAdmin) | **POST** /v3/Users/CreateAdmin | 
[**usersCreateEditor**](UsersApi.md#usersCreateEditor) | **POST** /v3/Users/CreateEditor | 
[**usersDelete**](UsersApi.md#usersDelete) | **DELETE** /v3/Users/Delete | 
[**usersFindAll**](UsersApi.md#usersFindAll) | **GET** /v3/Users/FindAll | 
[**usersFindUsersWithClaim**](UsersApi.md#usersFindUsersWithClaim) | **GET** /v3/Users/FindUsersWithClaim | 
[**usersGet**](UsersApi.md#usersGet) | **GET** /v3/Users/{email} | 



## usersCreateAdmin

> String usersCreateAdmin(userRequest)



### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.UsersApi();
let userRequest = new RoadkillApi.UserRequest(); // UserRequest | 
apiInstance.usersCreateAdmin(userRequest, (error, data, response) => {
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
 **userRequest** | [**UserRequest**](UserRequest.md)|  | 

### Return type

**String**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersCreateEditor

> String usersCreateEditor(userRequest)



### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.UsersApi();
let userRequest = new RoadkillApi.UserRequest(); // UserRequest | 
apiInstance.usersCreateEditor(userRequest, (error, data, response) => {
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
 **userRequest** | [**UserRequest**](UserRequest.md)|  | 

### Return type

**String**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersDelete

> String usersDelete(body)



### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.UsersApi();
let body = "body_example"; // String | 
apiInstance.usersDelete(body, (error, data, response) => {
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


## usersFindAll

> [UserResponse] usersFindAll()



### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.UsersApi();
apiInstance.usersFindAll((error, data, response) => {
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

[**[UserResponse]**](UserResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersFindUsersWithClaim

> [UserResponse] usersFindUsersWithClaim(opts)



### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.UsersApi();
let opts = {
  'claimType': "claimType_example", // String | 
  'claimValue': "claimValue_example" // String | 
};
apiInstance.usersFindUsersWithClaim(opts, (error, data, response) => {
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
 **claimType** | **String**|  | [optional] 
 **claimValue** | **String**|  | [optional] 

### Return type

[**[UserResponse]**](UserResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersGet

> UserResponse usersGet(email)



### Example

```javascript
import RoadkillApi from 'roadkill_api';
let defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new RoadkillApi.UsersApi();
let email = "email_example"; // String | 
apiInstance.usersGet(email, (error, data, response) => {
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
 **email** | **String**|  | 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

