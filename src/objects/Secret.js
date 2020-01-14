const ObjectBase = require("./ObjectBase");


module.exports = 
class Secret extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Secret item in a vault.",
			"type": "object",
			"properties": {
				"secret_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "Unique secret ID.",
					"required": false,
					"default": null
				},
				"user_id_owner": {
					"type": [
						"integer",
						"null"
					],
					"description": "Owner. Delegates of this user can manage his secrets as well. When null, defaults to the API authenticated user.",
					"required": false,
					"readonly": false,
					"default": null
				},
				"user_id_authenticated": {
					"type": [
						"integer",
						"null"
					],
					"description": "The user which last updated the secret.",
					"required": false,
					"default": null,
					"readonly": true
				},
				"secret_label": {
					"type": "string",
					"description": "Must be lower case. When copied into the generated variables.json of an AnsibleBundle execution, the label is used as the variable name.",
					"minLength": 1,
					"maxLength": 63,
					"required": true,
					"pattern": "^[a-z]{1,1}[a-z0-9-]{0,61}[a-z0-9]{1,1}|[a-z]{1,1}$"
				},
				"secret_usage": {
					"type": [
						"string",
						"null"
					],
					"description": "If null, any kind of usage is enabled. Otherwise, a comma separated list of allowed usage types. Possible values: [null, \"ansible_bundle\"].",
					"required": false,
					"default": null
				},
				"secret_base64": {
					"type": [
						"string",
						"null"
					],
					"description": "Secret in base64 format. If the base64 contains binary data, it has to be utf8 encoded to work with Ansible. Cannot be null with <code>secret_create</code>. The secret_base64 property is always returned as <code>null</code> by <code>secrets()</code> and <code>secret_get()</code> (it is not retrievable). When using <code>secret_update()</code> null is allowed, in which case the secret contents are not updated.",
					"required": false,
					"default": null
				},
				"secret_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "Date and time of the secret's creation.",
					"default": null,
					"readonly": true
				},
				"secret_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "Date and time of the secret's update (replace).",
					"default": null,
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"Secret"
					],
					"readonly": true
				}
			}
		};
	}
};