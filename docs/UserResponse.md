# RoadkillApi.UserResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Gets or sets the primary key for this user. | [optional] 
**userName** | **String** | Gets or sets the user name for this user. | [optional] 
**normalizedUserName** | **String** | Gets or sets the normalized user name for this user. | [optional] 
**email** | **String** | Gets or sets the email address for this user. | [optional] 
**normalizedEmail** | **String** | Gets or sets the normalized email address for this user. | [optional] 
**emailConfirmed** | **Boolean** | Gets or sets a flag indicating if a user has confirmed their email address. | [optional] 
**passwordHash** | **String** | Gets or sets a salted and hashed representation of the password for this user. | [optional] 
**securityStamp** | **String** | A random value that must change whenever a users credentials change (password changed, login removed) | [optional] 
**concurrencyStamp** | **String** | A random value that must change whenever a user is persisted to the store | [optional] 
**phoneNumber** | **String** | Gets or sets a telephone number for the user. | [optional] 
**phoneNumberConfirmed** | **Boolean** | Gets or sets a flag indicating if a user has confirmed their telephone address. | [optional] 
**twoFactorEnabled** | **Boolean** | Gets or sets a flag indicating if two factor authentication is enabled for this user. | [optional] 
**lockoutEnd** | **Date** | Gets or sets the date and time, in UTC, when any user lockout ends. | [optional] 
**lockoutEnabled** | **Boolean** | Gets or sets a flag indicating if the user could be locked out. | [optional] 
**accessFailedCount** | **Number** | Gets or sets the number of failed login attempts for the current user. | [optional] 
**roleClaims** | **[String]** | Gets or sets the roles the user has associated with their login. | [optional] 


