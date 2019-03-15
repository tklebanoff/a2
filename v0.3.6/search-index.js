var N = null;var searchIndex = {};
searchIndex["a2"]={"doc":"A2","items":[[3,"LocalizedNotificationBuilder","a2","A builder to create a localized APNs payload.",N,N],[3,"PlainNotificationBuilder","","A builder to create a simple APNs notification payload.",N,N],[3,"SilentNotificationBuilder","","A builder to create an APNs silent notification payload which can be used to send custom data to the user's phone if the user hasn't been running the app for a while. The custom data needs to be implementing `Serialize` from Serde.",N,N],[3,"CollapseId","","",N,N],[12,"value","","",0,N],[3,"NotificationOptions","","Headers to specify options to the notification.",N,N],[12,"apns_id","","A canonical UUID that identifies the notification. If there is an error sending the notification, APNs uses this value to identify the notification to your server.",1,N],[12,"apns_expiration","","A UNIX epoch date expressed in seconds (UTC). This header identifies the date when the notification is no longer valid and can be discarded.",1,N],[12,"apns_priority","","The priority of the notification.",1,N],[12,"apns_topic","","The topic of the remote notification, which is typically the bundle ID for your app. The certificate you create in your developer account must include the capability for this topic.",1,N],[12,"apns_collapse_id","","Multiple notifications with the same collapse identifier are displayed to the user as a single notification. The value of this key must not exceed 64 bytes.",1,N],[4,"Priority","","The importance how fast to bring the notification for the user..",N,N],[13,"High","","Send the push message immediately. Notifications with this priority must trigger an alert, sound, or badge on the target device. Cannot be used with the silent notification.",2,N],[13,"Normal","","Send the push message at a time that takes into account power considerations for the device. Notifications with this priority might be grouped and delivered in bursts. They are throttled, and in some cases are not delivered.",2,N],[0,"request","","The request payload module",N,N],[0,"notification","a2::request","The `aps` notification content builders",N,N],[3,"LocalizedAlert","a2::request::notification","",N,N],[3,"LocalizedNotificationBuilder","","A builder to create a localized APNs payload.",N,N],[3,"PlainNotificationBuilder","","A builder to create a simple APNs notification payload.",N,N],[3,"SilentNotificationBuilder","","A builder to create an APNs silent notification payload which can be used to send custom data to the user's phone if the user hasn't been running the app for a while. The custom data needs to be implementing `Serialize` from Serde.",N,N],[3,"CollapseId","","",N,N],[12,"value","","",0,N],[3,"NotificationOptions","","Headers to specify options to the notification.",N,N],[12,"apns_id","","A canonical UUID that identifies the notification. If there is an error sending the notification, APNs uses this value to identify the notification to your server.",1,N],[12,"apns_expiration","","A UNIX epoch date expressed in seconds (UTC). This header identifies the date when the notification is no longer valid and can be discarded.",1,N],[12,"apns_priority","","The priority of the notification.",1,N],[12,"apns_topic","","The topic of the remote notification, which is typically the bundle ID for your app. The certificate you create in your developer account must include the capability for this topic.",1,N],[12,"apns_collapse_id","","Multiple notifications with the same collapse identifier are displayed to the user as a single notification. The value of this key must not exceed 64 bytes.",1,N],[4,"Priority","","The importance how fast to bring the notification for the user..",N,N],[13,"High","","Send the push message immediately. Notifications with this priority must trigger an alert, sound, or badge on the target device. Cannot be used with the silent notification.",2,N],[13,"Normal","","Send the push message at a time that takes into account power considerations for the device. Notifications with this priority might be grouped and delivered in bursts. They are throttled, and in some cases are not delivered.",2,N],[11,"new","a2","Creates a new builder with the minimum amount of content.",3,[[["str"],["str"]],["localizednotificationbuilder"]]],[11,"set_badge","","A number to show on a badge on top of the app icon.",3,[[["self"],["u32"]],["self"]]],[11,"set_sound","","File name of the custom sound to play when receiving the notification.",3,[[["self"],["str"]],["self"]]],[11,"set_category","","When a notification includes the category key, the system displays the actions for that category as buttons in the banner or alert interface.",3,[[["self"],["str"]],["self"]]],[11,"set_title_loc_key","","The localization key for the notification title.",3,[[["self"],["str"]],["self"]]],[11,"set_title_loc_args","","Arguments for the title localization.",3,N],[11,"set_action_loc_key","","The localization key for the action.",3,[[["self"],["str"]],["self"]]],[11,"set_loc_key","","The localization key for the push message body.",3,[[["self"],["str"]],["self"]]],[11,"set_loc_args","","Arguments for the content localization.",3,N],[11,"set_launch_image","","Image to display in the rich notification.",3,[[["self"],["str"]],["self"]]],[11,"set_mutable_content","","Allow client to modify push content before displaying.",3,[[["self"]],["self"]]],[11,"new","","Creates a new builder with the minimum amount of content.",4,[[["str"]],["plainnotificationbuilder"]]],[11,"set_badge","","A number to show on a badge on top of the app icon.",4,[[["self"],["u32"]],["self"]]],[11,"set_sound","","File name of the custom sound to play when receiving the notification.",4,[[["self"],["str"]],["self"]]],[11,"set_category","","When a notification includes the category key, the system displays the actions for that category as buttons in the banner or alert interface.",4,[[["self"],["str"]],["self"]]],[11,"new","","Creates a new builder.",5,[[],["silentnotificationbuilder"]]],[11,"new","","",0,[[["str"]],["result",["collapseid","error"]]]],[8,"NotificationBuilder","a2::request::notification","",N,N],[10,"build","","Generates the request payload to be send with the `Client`.",6,[[["self"],["str"],["notificationoptions"]],["payload"]]],[0,"payload","a2::request","Payload with `aps` and custom data",N,N],[3,"Payload","a2::request::payload","The data and options for a push notification.",N,N],[12,"options","","Send options",7,N],[12,"device_token","","The token for the receiving device",7,N],[12,"aps","","The pre-defined notification payload",7,N],[12,"data","","Application specific payload",7,N],[3,"APS","","The pre-defined notification data.",N,N],[12,"alert","","The notification content. Can be empty for silent notifications.",8,N],[12,"badge","","A number shown on top of the app icon.",8,N],[12,"sound","","The name of the sound file to play when user receives the notification.",8,N],[12,"content_available","","Set to one for silent notifications.",8,N],[12,"category","","When a notification includes the category key, the system displays the actions for that category as buttons in the banner or alert interface.",8,N],[12,"mutable_content","","If set to one, the app can change the notification content before displaying it to the user.",8,N],[4,"APSAlert","","Different notification content types.",N,N],[13,"Plain","","Text-only notification.",9,N],[13,"Localized","","A rich localized notification.",9,N],[11,"add_custom_data","","Client-specific custom data to be added in the payload. The `root_key` defines the JSON key in the root of the request data, and `data` the object containing custom data. The `data` should implement `Serialize`, which allows using of any Rust collection or if needing more strict type definitions, any struct that has `#[derive(Serialize)]` from Serde.",7,[[["self"],["str"],["serialize"]],["result",["error"]]]],[11,"to_json_string","","Combine the APS payload and the custom data to a final payload JSON. Returns an error if serialization fails.",7,[[["self"]],["result",["string","error"]]]],[0,"error","a2","Error and result module",N,N],[4,"Error","a2::error","",N,N],[13,"SerializeError","","User request or Apple response JSON data was faulty.",10,N],[13,"ConnectionError","","A problem connecting to APNs servers.",10,N],[13,"TimeoutError","","APNs couldn't response in a timely manner, if using send_with_timeout",10,N],[13,"SignerError","","Couldn't generate an APNs token with the given key.",10,N],[13,"ResponseError","","APNs couldn't accept the notification. Contains Response with additional information.",10,N],[13,"InvalidOptions","","Invalid option values given in NotificationOptions",10,N],[13,"TlsError","","TLS connection failed",10,N],[13,"ReadError","","Error reading the certificate or private key.",10,N],[0,"response","a2","The APNs response types",N,N],[3,"Response","a2::response","The response data from APNs.",N,N],[12,"error","","If the notification was not successful, has the body content from APNs.",11,N],[12,"apns_id","","Is the value defined in the `NotificationOptions` or a new Uuid generated by APNs.",11,N],[12,"code","","The HTTP response code.",11,N],[3,"ErrorBody","","The response body from APNs. Only available for errors.",N,N],[12,"reason","","The error indicating the reason for the failure.",12,N],[12,"timestamp","","If the value of the `ErrorReason` is `Unregistered`, the value of this key is the last time at which APNs confirmed that the device token was no longer valid for the topic.",12,N],[4,"ErrorReason","","A description what went wrong with the push notification.",N,N],[13,"BadCollapseId","","The collapse identifier exceeds the maximum allowed size.",13,N],[13,"BadDeviceToken","","The specified device token was bad. Verify that the request contains a valid token and that the token matches the environment.",13,N],[13,"BadExpirationDate","","The `apns_expiration` in `NotificationOptions` is bad.",13,N],[13,"BadMessageId","","The `apns_id` in `NotificationOptions` is bad.",13,N],[13,"BadPriority","","The `apns_priority` in `NotificationOptions` is bad.",13,N],[13,"BadTopic","","The `apns_topic` in `NotificationOptions` is bad.",13,N],[13,"DeviceTokenNotForTopic","","The device token does not match the specified topic.",13,N],[13,"DuplicateHeaders","","One or more headers were repeated.",13,N],[13,"IdleTimeout","","Idle time out.",13,N],[13,"MissingDeviceToken","","The device token is not specified in the payload.",13,N],[13,"MissingTopic","","The `apns_topic` of the `NotificationOptions` was not specified and was required. The `apns_topic` header is mandatory when the client is connected using the `CertificateConnector` and the included PKCS12 file includes multiple topics, or when using the `TokenConnector`.",13,N],[13,"PayloadEmpty","","The message payload was empty.",13,N],[13,"TopicDisallowed","","Pushing to this topic is not allowed.",13,N],[13,"BadCertificate","","The certificate was bad.",13,N],[13,"BadCertificateEnvironment","","The client certificate was for the wrong environment.",13,N],[13,"ExpiredProviderToken","","The provider token is stale and a new token should be generated.",13,N],[13,"Forbidden","","The specified action is not allowed.",13,N],[13,"InvalidProviderToken","","The provider token is not valid or the token signature could not be verified.",13,N],[13,"MissingProviderToken","","No provider certificate was used to connect to APNs and Authorization header was missing or no provider token was specified.",13,N],[13,"BadPath","","The request path value is bad.",13,N],[13,"MethodNotAllowed","","The request method was not `POST`.",13,N],[13,"Unregistered","","The device token is inactive for the specified topic. You should stop sending notifications to this token.",13,N],[13,"PayloadTooLarge","","The message payload was too large (4096 bytes)",13,N],[13,"TooManyProviderTokenUpdates","","The provider token is being updated too often.",13,N],[13,"TooManyRequests","","Too many requests were made consecutively to the same device token.",13,N],[13,"InternalServerError","","An internal server error occurred.",13,N],[13,"ServiceUnavailable","","The service is unavailable.",13,N],[13,"Shutdown","","The server is shutting down.",13,N],[0,"client","a2","The client module for sending requests and parsing responses",N,N],[3,"Client","a2::client","Handles requests to and responses from Apple Push Notification service. Connects using a given connector. Handles the needed authentication and maps responses.",N,N],[3,"FutureResponse","","",N,N],[4,"Endpoint","","The APNs service endpoint to connect.",N,N],[13,"Production","","The production environment (api.push.apple.com)",14,N],[13,"Sandbox","","The development/test environment (api.development.push.apple.com)",14,N],[11,"certificate","","Create a connection to APNs using the provider client certificate which you obtain from your Apple developer account.",15,[[["r"],["str"],["endpoint"]],["result",["client","error"]]]],[11,"token","","Create a connection to APNs using system certificates, signing every request with a signature using a private key, key id and team id provisioned from your Apple developer account.",15,[[["r"],["s"],["t"],["endpoint"]],["result",["client","error"]]]],[11,"send","","Send a notification payload. Returns a future that needs to be given to an executor.",15,[[["self"],["payload"]],["futureresponse"]]],[11,"send_with_timeout","","Sends a notification with a timeout. Triggers `Error::TimeoutError` if the request takes too long.",15,[[["self"],["payload"],["duration"]],["timeout",["futureresponse"]]]],[11,"from","a2","",3,[[["t"]],["t"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,N],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,N],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"to_string","","",2,[[["self"]],["string"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,N],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"from","a2::request::notification","",16,[[["t"]],["t"]]],[11,"into","","",16,[[["self"]],["u"]]],[11,"to_owned","","",16,[[["self"]],["t"]]],[11,"clone_into","","",16,N],[11,"try_from","","",16,[[["u"]],["result"]]],[11,"borrow","","",16,[[["self"]],["t"]]],[11,"borrow_mut","","",16,[[["self"]],["t"]]],[11,"try_into","","",16,[[["self"]],["result"]]],[11,"get_type_id","","",16,[[["self"]],["typeid"]]],[11,"erased_serialize","","",16,[[["self"],["serializer"]],["result",["ok","error"]]]],[11,"from","a2::request::payload","",7,[[["t"]],["t"]]],[11,"into","","",7,[[["self"]],["u"]]],[11,"to_owned","","",7,[[["self"]],["t"]]],[11,"clone_into","","",7,N],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"try_into","","",7,[[["self"]],["result"]]],[11,"get_type_id","","",7,[[["self"]],["typeid"]]],[11,"from","","",8,[[["t"]],["t"]]],[11,"into","","",8,[[["self"]],["u"]]],[11,"to_owned","","",8,[[["self"]],["t"]]],[11,"clone_into","","",8,N],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"try_into","","",8,[[["self"]],["result"]]],[11,"get_type_id","","",8,[[["self"]],["typeid"]]],[11,"erased_serialize","","",8,[[["self"],["serializer"]],["result",["ok","error"]]]],[11,"from","","",9,[[["t"]],["t"]]],[11,"into","","",9,[[["self"]],["u"]]],[11,"to_owned","","",9,[[["self"]],["t"]]],[11,"clone_into","","",9,N],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"try_into","","",9,[[["self"]],["result"]]],[11,"get_type_id","","",9,[[["self"]],["typeid"]]],[11,"erased_serialize","","",9,[[["self"],["serializer"]],["result",["ok","error"]]]],[11,"from","a2::error","",10,[[["t"]],["t"]]],[11,"into","","",10,[[["self"]],["u"]]],[11,"to_string","","",10,[[["self"]],["string"]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"try_into","","",10,[[["self"]],["result"]]],[11,"get_type_id","","",10,[[["self"]],["typeid"]]],[11,"from","a2::response","",11,[[["t"]],["t"]]],[11,"into","","",11,[[["self"]],["u"]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"try_into","","",11,[[["self"]],["result"]]],[11,"get_type_id","","",11,[[["self"]],["typeid"]]],[11,"from","","",12,[[["t"]],["t"]]],[11,"into","","",12,[[["self"]],["u"]]],[11,"try_from","","",12,[[["u"]],["result"]]],[11,"borrow","","",12,[[["self"]],["t"]]],[11,"borrow_mut","","",12,[[["self"]],["t"]]],[11,"try_into","","",12,[[["self"]],["result"]]],[11,"get_type_id","","",12,[[["self"]],["typeid"]]],[11,"from","","",13,[[["t"]],["t"]]],[11,"into","","",13,[[["self"]],["u"]]],[11,"to_string","","",13,[[["self"]],["string"]]],[11,"try_from","","",13,[[["u"]],["result"]]],[11,"borrow","","",13,[[["self"]],["t"]]],[11,"borrow_mut","","",13,[[["self"]],["t"]]],[11,"try_into","","",13,[[["self"]],["result"]]],[11,"get_type_id","","",13,[[["self"]],["typeid"]]],[11,"from","a2::client","",15,[[["t"]],["t"]]],[11,"into","","",15,[[["self"]],["u"]]],[11,"try_from","","",15,[[["u"]],["result"]]],[11,"borrow","","",15,[[["self"]],["t"]]],[11,"borrow_mut","","",15,[[["self"]],["t"]]],[11,"try_into","","",15,[[["self"]],["result"]]],[11,"get_type_id","","",15,[[["self"]],["typeid"]]],[11,"from","","",17,[[["t"]],["t"]]],[11,"into","","",17,[[["self"]],["u"]]],[11,"try_from","","",17,[[["u"]],["result"]]],[11,"borrow","","",17,[[["self"]],["t"]]],[11,"borrow_mut","","",17,[[["self"]],["t"]]],[11,"try_into","","",17,[[["self"]],["result"]]],[11,"get_type_id","","",17,[[["self"]],["typeid"]]],[11,"into_future","","",17,[[["self"]],["f"]]],[11,"from","","",14,[[["t"]],["t"]]],[11,"into","","",14,[[["self"]],["u"]]],[11,"to_string","","",14,[[["self"]],["string"]]],[11,"to_owned","","",14,[[["self"]],["t"]]],[11,"clone_into","","",14,N],[11,"try_from","","",14,[[["u"]],["result"]]],[11,"borrow","","",14,[[["self"]],["t"]]],[11,"borrow_mut","","",14,[[["self"]],["t"]]],[11,"try_into","","",14,[[["self"]],["result"]]],[11,"get_type_id","","",14,[[["self"]],["typeid"]]],[11,"build","a2","",3,[[["self"],["str"],["notificationoptions"]],["payload"]]],[11,"build","","",4,[[["self"],["str"],["notificationoptions"]],["payload"]]],[11,"build","","",5,[[["self"],["str"],["notificationoptions"]],["payload"]]],[11,"clone","a2::request::notification","",16,[[["self"]],["localizedalert"]]],[11,"clone","a2","",0,[[["self"]],["collapseid"]]],[11,"clone","","",1,[[["self"]],["notificationoptions"]]],[11,"clone","","",2,[[["self"]],["priority"]]],[11,"clone","a2::request::payload","",7,[[["self"]],["payload"]]],[11,"clone","","",8,[[["self"]],["aps"]]],[11,"clone","","",9,[[["self"]],["apsalert"]]],[11,"clone","a2::client","",14,[[["self"]],["endpoint"]]],[11,"from","a2::error","",10,[[["timeouterror",["futureresponse"]]],["error"]]],[11,"from","","",10,[[["serdeerror"]],["error"]]],[11,"from","","",10,[[["errorstack"]],["error"]]],[11,"from","","",10,[[["ioerror"]],["error"]]],[11,"default","a2","",1,[[],["notificationoptions"]]],[11,"eq","a2::response","",12,[[["self"],["errorbody"]],["bool"]]],[11,"ne","","",12,[[["self"],["errorbody"]],["bool"]]],[11,"eq","","",13,[[["self"],["errorreason"]],["bool"]]],[11,"fmt","a2","",2,[[["self"],["formatter"]],["result"]]],[11,"fmt","a2::error","",10,[[["self"],["formatter"]],["result"]]],[11,"fmt","a2::response","",13,[[["self"],["formatter"]],["result"]]],[11,"fmt","a2::client","",14,[[["self"],["formatter"]],["result"]]],[11,"fmt","a2::request::notification","",16,[[["self"],["formatter"]],["result"]]],[11,"fmt","a2","",0,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"fmt","a2::request::payload","",7,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",8,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",9,[[["self"],["formatter"]],["result"]]],[11,"fmt","a2::error","",10,[[["self"],["formatter"]],["result"]]],[11,"fmt","a2::response","",11,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",12,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",13,[[["self"],["formatter"]],["result"]]],[11,"fmt","a2::client","",14,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",17,[[["self"],["formatter"]],["result"]]],[11,"description","a2::error","",10,[[["self"]],["str"]]],[11,"cause","","",10,[[["self"]],["option",["stderror"]]]],[11,"serialize","a2::request::notification","",16,[[["self"],["__s"]],["result"]]],[11,"serialize","a2::request::payload","",8,[[["self"],["__s"]],["result"]]],[11,"serialize","","",9,[[["self"],["__s"]],["result"]]],[11,"deserialize","a2::response","",12,[[["__d"]],["result"]]],[11,"deserialize","","",13,[[["__d"]],["result"]]],[11,"poll","a2::client","",17,[[["self"]],["poll"]]]],"paths":[[3,"CollapseId"],[3,"NotificationOptions"],[4,"Priority"],[3,"LocalizedNotificationBuilder"],[3,"PlainNotificationBuilder"],[3,"SilentNotificationBuilder"],[8,"NotificationBuilder"],[3,"Payload"],[3,"APS"],[4,"APSAlert"],[4,"Error"],[3,"Response"],[3,"ErrorBody"],[4,"ErrorReason"],[4,"Endpoint"],[3,"Client"],[3,"LocalizedAlert"],[3,"FutureResponse"]]};
initSearch(searchIndex);