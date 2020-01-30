# roadkill_api

RoadkillApi - JavaScript client for roadkill_api

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var RoadkillApi = require('roadkill_api');

var defaultClient = RoadkillApi.ApiClient.instance;
// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix['Authorization'] = "Token"

var api = new RoadkillApi.AuthorizationApi()
var authorizationRequest = new RoadkillApi.AuthorizationRequest(); // {AuthorizationRequest} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.authorizationAuthenticate(authorizationRequest, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://http:/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*RoadkillApi.AuthorizationApi* | [**authorizationAuthenticate**](AuthorizationApi.md#authorizationAuthenticate) | **POST** /v3/Authorization/Authenticate | 
*RoadkillApi.EmailApi* | [**emailSend**](EmailApi.md#emailSend) | **POST** /v3/Email | 
*RoadkillApi.ExportApi* | [**exportExportAsSql**](ExportApi.md#exportExportAsSql) | **POST** /v3/Export/ExportAsSql | 
*RoadkillApi.ExportApi* | [**exportExportAttachments**](ExportApi.md#exportExportAttachments) | **POST** /v3/Export/ExportAttachments | 
*RoadkillApi.ExportApi* | [**exportExportPagesToXml**](ExportApi.md#exportExportPagesToXml) | **POST** /v3/Export/ExportPagesToXml | 
*RoadkillApi.ExportApi* | [**exportExportPagesVersionsToXml**](ExportApi.md#exportExportPagesVersionsToXml) | **POST** /v3/Export/ExportPagesVersionsToXml | 
*RoadkillApi.InstallApi* | [**installCreateTestUser**](InstallApi.md#installCreateTestUser) | **POST** /v3/Install/CreateTestUser | 
*RoadkillApi.MarkdownApi* | [**markdownConvertToHtml**](MarkdownApi.md#markdownConvertToHtml) | **POST** /v3/Markdown/ConvertToHtml | 
*RoadkillApi.MarkdownApi* | [**markdownUpdateLinksToPage**](MarkdownApi.md#markdownUpdateLinksToPage) | **POST** /v3/Markdown/UpdateLinksToPage | 
*RoadkillApi.PageVersionsApi* | [**pageVersionsAdd**](PageVersionsApi.md#pageVersionsAdd) | **POST** /v3/PageVersions | 
*RoadkillApi.PageVersionsApi* | [**pageVersionsAllVersions**](PageVersionsApi.md#pageVersionsAllVersions) | **GET** /v3/PageVersions/AllVersions | 
*RoadkillApi.PageVersionsApi* | [**pageVersionsDelete**](PageVersionsApi.md#pageVersionsDelete) | **DELETE** /v3/PageVersions | 
*RoadkillApi.PageVersionsApi* | [**pageVersionsFindPageVersionsByAuthor**](PageVersionsApi.md#pageVersionsFindPageVersionsByAuthor) | **GET** /v3/PageVersions/FindPageVersionsByAuthor | 
*RoadkillApi.PageVersionsApi* | [**pageVersionsFindPageVersionsByPageId**](PageVersionsApi.md#pageVersionsFindPageVersionsByPageId) | **GET** /v3/PageVersions/FindPageVersionsByPageId | 
*RoadkillApi.PageVersionsApi* | [**pageVersionsGet**](PageVersionsApi.md#pageVersionsGet) | **GET** /v3/PageVersions/{id} | 
*RoadkillApi.PageVersionsApi* | [**pageVersionsGetLatestVersion**](PageVersionsApi.md#pageVersionsGetLatestVersion) | **GET** /v3/PageVersions/GetLatestVersion | 
*RoadkillApi.PageVersionsApi* | [**pageVersionsUpdate**](PageVersionsApi.md#pageVersionsUpdate) | **PUT** /v3/PageVersions | 
*RoadkillApi.PagesApi* | [**pagesAdd**](PagesApi.md#pagesAdd) | **POST** /v3/Pages | Add a page to the database using the provided meta information. This will only add the meta information not the page text, use PageVersions to add text for a page.
*RoadkillApi.PagesApi* | [**pagesAllPages**](PagesApi.md#pagesAllPages) | **GET** /v3/Pages/AllPages | Retrieves all pages in the Roadkill database.
*RoadkillApi.PagesApi* | [**pagesAllPagesCreatedBy**](PagesApi.md#pagesAllPagesCreatedBy) | **GET** /v3/Pages/AllPagesCreatedBy | Retrieves all pages created by a particular user.
*RoadkillApi.PagesApi* | [**pagesDelete**](PagesApi.md#pagesDelete) | **DELETE** /v3/Pages | Deletes an existing page from the database. This is an administrator-only action.
*RoadkillApi.PagesApi* | [**pagesFindByTitle**](PagesApi.md#pagesFindByTitle) | **GET** /v3/Pages/FindByTitle | Finds the first page matching the given page title.
*RoadkillApi.PagesApi* | [**pagesFindHomePage**](PagesApi.md#pagesFindHomePage) | **GET** /v3/Pages/FindHomePage | Finds the first page in the database with the \&quot;homepage\&quot; tag.
*RoadkillApi.PagesApi* | [**pagesGet**](PagesApi.md#pagesGet) | **GET** /v3/Pages/{id} | Gets a single page by its ID.
*RoadkillApi.PagesApi* | [**pagesUpdate**](PagesApi.md#pagesUpdate) | **PUT** /v3/Pages | Updates an existing page in the database.
*RoadkillApi.TagsApi* | [**tagsAllTags**](TagsApi.md#tagsAllTags) | **GET** /v3/Tags/AllTags | 
*RoadkillApi.TagsApi* | [**tagsFindPageWithTag**](TagsApi.md#tagsFindPageWithTag) | **GET** /v3/Tags/FindPageWithTag | 
*RoadkillApi.TagsApi* | [**tagsRename**](TagsApi.md#tagsRename) | **PUT** /v3/Tags/Rename | 
*RoadkillApi.UsersApi* | [**usersCreateAdmin**](UsersApi.md#usersCreateAdmin) | **POST** /v3/Users/CreateAdmin | 
*RoadkillApi.UsersApi* | [**usersCreateEditor**](UsersApi.md#usersCreateEditor) | **POST** /v3/Users/CreateEditor | 
*RoadkillApi.UsersApi* | [**usersDelete**](UsersApi.md#usersDelete) | **DELETE** /v3/Users/Delete | 
*RoadkillApi.UsersApi* | [**usersFindAll**](UsersApi.md#usersFindAll) | **GET** /v3/Users/FindAll | 
*RoadkillApi.UsersApi* | [**usersFindUsersWithClaim**](UsersApi.md#usersFindUsersWithClaim) | **GET** /v3/Users/FindUsersWithClaim | 
*RoadkillApi.UsersApi* | [**usersGet**](UsersApi.md#usersGet) | **GET** /v3/Users/{email} | 


## Documentation for Models

 - [RoadkillApi.AuthorizationRequest](AuthorizationRequest.md)
 - [RoadkillApi.AuthorizationResponse](AuthorizationResponse.md)
 - [RoadkillApi.PageRequest](PageRequest.md)
 - [RoadkillApi.PageResponse](PageResponse.md)
 - [RoadkillApi.PageVersionRequest](PageVersionRequest.md)
 - [RoadkillApi.PageVersionResponse](PageVersionResponse.md)
 - [RoadkillApi.ProblemDetails](ProblemDetails.md)
 - [RoadkillApi.TagResponse](TagResponse.md)
 - [RoadkillApi.UserRequest](UserRequest.md)
 - [RoadkillApi.UserResponse](UserResponse.md)


## Documentation for Authorization

### JWT


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### Regenerating this API

Simplest path is to use Docker

```
docker run --rm \
  -v ${PWD}:/local openapitools/openapi-generator-cli generate \
  -i /local/roadkill-openapi-schema.json \
  -g javascript \
  -o /local/out/javascript
```