# RoadkillApi.PageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The unique Id of the page. This is generated on the server. | [optional] 
**title** | **String** | The title of the page. | 
**seoFriendlyTitle** | **String** | The url-friendly slug for the page title. | [optional] 
**createdBy** | **String** | The user who created the page. | 
**createdOn** | **Date** | The UTC-based date the page was created. | [optional] 
**lastModifiedBy** | **String** | The user who last modified the page. If the page has note been modified yet, this will match the CreatedBy property. | [optional] 
**lastModifiedOn** | **Date** | The date the page was last modified on. If the page has note been modified yet, this will match the creation date. | [optional] 
**isLocked** | **Boolean** | Whether the page is locked so no edits can be made (except by admins). | 
**tags** | **String** | The list of tags, comma separated, for the page. | 


