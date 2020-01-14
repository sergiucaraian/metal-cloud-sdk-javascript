const ObjectBase = require("./ObjectBase");


module.exports = 
class OSAsset extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "An asset file used by a volume template for booting or installing an OS.",
			"type": "object",
			"properties": {
				"os_asset_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the OS asset.",
					"default": null,
					"readonly": true
				},
				"user_id_owner": {
					"type": [
						"integer",
						"null"
					],
					"description": "Owner. Delegates of this user can manage his Ansible bundles as well. When null, defaults to the API authenticated user.",
					"default": null,
					"readonly": false,
					"required": false
				},
				"user_id_authenticated": {
					"type": [
						"integer",
						"null"
					],
					"description": "The user which last updated the bundle.",
					"default": null,
					"readonly": true,
					"required": false
				},
				"os_asset_is_public": {
					"type": "boolean",
					"description": "Public assets are published by us and are accessible by all users.",
					"default": false,
					"readonly": true
				},
				"os_asset_filename": {
					"type": "string",
					"description": "Filename of the OS asset file.",
					"minLength": 1,
					"maxLength": 100,
					"required": true
				},
				"os_asset_file_size_bytes": {
					"type": "integer",
					"description": "File size of the stored OS asset content. Null if os_asset_source_url is given."
				},
				"os_asset_file_mime": {
					"enum": [
						"application/octet-stream",
						"text/plain"
					],
					"description": "File mime of the OS asset file.",
					"type": "string",
					"default": "application/octet-stream"
				},
				"os_asset_contents_base64": {
					"type": [
						"string",
						"null"
					],
					"description": "Stored contents in base 64.",
					"default": null,
					"required": false
				},
				"os_asset_contents_sha256_hex": {
					"type": [
						"string",
						"null"
					],
					"default": null,
					"description": "Original content sha256 hash as a lowercase hex string.",
					"readonly": true
				},
				"os_asset_usage": {
					"type": [
						"string",
						"null"
					],
					"description": "Usage of OS asset.",
					"default": null,
					"readonly": false,
					"required": false
				},
				"os_asset_source_url": {
					"type": [
						"string",
						"null"
					],
					"default": null,
					"description": "URL from which to serve the file. If just absolute pathname, the file will be served from our repo. If a complete http(s) URL it will be used as is. If os_asset_contents_base64 is set this will be ignored.",
					"readonly": false,
					"required": false
				},
				"os_asset_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "Date and time of the OS template's creation.",
					"default": null,
					"readonly": true
				},
				"os_asset_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "Date and time of the OS template's update (replace).",
					"default": null,
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"OSAsset"
					],
					"readonly": true
				}
			}
		};
	}
};