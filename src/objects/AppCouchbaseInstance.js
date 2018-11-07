const ObjectBase = require('./ObjectBase');

/**
 * Details about the Instance object specific to Couchbase. The information
 * presented here is obtained by interrogating the Couchbase API. Backward
 * compatibility object will not be ensured when the underlying Couchbase API changes.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class AppCouchbaseInstance extends ObjectBase
{
	constructor()
	{
		super();

		const arrPropertyNames = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
		arrPropertyNames.shift();

		for(let strProperty in arrPropertyNames)
		{
			if(arrPropertyNames.hasOwnProperty(strProperty))
			{
				const strPropertyProtected = "_" + arrPropertyNames[strProperty];
				this[strPropertyProtected] = this[arrPropertyNames[strProperty]];
			}
		}
	}

	/**
	 * The initial admin username on the instance.
	 */
	get admin_username()
	{
		return (this._admin_username !== undefined ? this._admin_username : null);
	}

	set admin_username(admin_username)
	{
		this._admin_username = admin_username;
	}

	/**
	 * The initial admin password on the instance.
	 */
	get admin_initial_password()
	{
		return (this._admin_initial_password !== undefined ? this._admin_initial_password : null);
	}

	set admin_initial_password(admin_initial_password)
	{
		this._admin_initial_password = admin_initial_password;
	}

	/**
	 * The name of the instance. Usually the IP of the instance.
	 */
	get hostname()
	{
		return (this._hostname !== undefined ? this._hostname : null);
	}

	set hostname(hostname)
	{
		this._hostname = hostname;
	}

	/**
	 * The URL of the instance. Usually the subdomain name of the instance.
	 */
	get url()
	{
		return (this._url !== undefined ? this._url : null);
	}

	set url(url)
	{
		this._url = url;
	}

	/**
	 * The health status of the instance.
	 */
	get status()
	{
		return (this._status !== undefined ? this._status : null);
	}

	set status(status)
	{
		this._status = status;
	}

	/**
	 * The version of the Couchbase software.
	 */
	get version()
	{
		return (this._version !== undefined ? this._version : null);
	}

	set version(version)
	{
		this._version = version;
	}

	/**
	 *
	 */
	get memoryTotal()
	{
		return (this._memoryTotal !== undefined ? this._memoryTotal : null);
	}

	set memoryTotal(memoryTotal)
	{
		this._memoryTotal = memoryTotal;
	}

	/**
	 *
	 */
	get memoryFree()
	{
		return (this._memoryFree !== undefined ? this._memoryFree : null);
	}

	set memoryFree(memoryFree)
	{
		this._memoryFree = memoryFree;
	}

	/**
	 * The ID of the instance associated with the node
	 */
	get instance_id()
	{
		return (this._instance_id !== undefined ? this._instance_id : null);
	}

	set instance_id(instance_id)
	{
		this._instance_id = instance_id;
	}

	/**
	 * The label of the instance associated with the node
	 */
	get instance_label()
	{
		return (this._instance_label !== undefined ? this._instance_label : null);
	}

	set instance_label(instance_label)
	{
		this._instance_label = instance_label;
	}

	/**
	 * The status of the instance.
	 */
	get instance_service_status()
	{
		return (this._instance_service_status !== undefined ? this._instance_service_status : null);
	}

	set instance_service_status(instance_service_status)
	{
		this._instance_service_status = instance_service_status;
	}

	/**
	 * The schema type
	 */
	get type()
	{
		return (this._type !== undefined ? this._type : null);
	}

	set type(type)
	{
		this._type = type;
	}

	/**
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [

		];
	}
};