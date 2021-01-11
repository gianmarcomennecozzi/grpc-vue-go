/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./exercise_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ExerciseStoreClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ExerciseStorePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.GetExercisesResponse>}
 */
const methodDescriptor_ExerciseStore_GetExercises = new grpc.web.MethodDescriptor(
  '/ExerciseStore/GetExercises',
  grpc.web.MethodType.UNARY,
  proto.Empty,
  proto.GetExercisesResponse,
  /**
   * @param {!proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetExercisesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Empty,
 *   !proto.GetExercisesResponse>}
 */
const methodInfo_ExerciseStore_GetExercises = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetExercisesResponse,
  /**
   * @param {!proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetExercisesResponse.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetExercisesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetExercisesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ExerciseStoreClient.prototype.getExercises =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ExerciseStore/GetExercises',
      request,
      metadata || {},
      methodDescriptor_ExerciseStore_GetExercises,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetExercisesResponse>}
 *     A native promise that resolves to the response
 */
proto.ExerciseStorePromiseClient.prototype.getExercises =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ExerciseStore/GetExercises',
      request,
      metadata || {},
      methodDescriptor_ExerciseStore_GetExercises);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetExerciseByTagsRequest,
 *   !proto.GetExercisesResponse>}
 */
const methodDescriptor_ExerciseStore_GetExerciseByTags = new grpc.web.MethodDescriptor(
  '/ExerciseStore/GetExerciseByTags',
  grpc.web.MethodType.UNARY,
  proto.GetExerciseByTagsRequest,
  proto.GetExercisesResponse,
  /**
   * @param {!proto.GetExerciseByTagsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetExercisesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetExerciseByTagsRequest,
 *   !proto.GetExercisesResponse>}
 */
const methodInfo_ExerciseStore_GetExerciseByTags = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetExercisesResponse,
  /**
   * @param {!proto.GetExerciseByTagsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetExercisesResponse.deserializeBinary
);


/**
 * @param {!proto.GetExerciseByTagsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetExercisesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetExercisesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ExerciseStoreClient.prototype.getExerciseByTags =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ExerciseStore/GetExerciseByTags',
      request,
      metadata || {},
      methodDescriptor_ExerciseStore_GetExerciseByTags,
      callback);
};


/**
 * @param {!proto.GetExerciseByTagsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetExercisesResponse>}
 *     A native promise that resolves to the response
 */
proto.ExerciseStorePromiseClient.prototype.getExerciseByTags =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ExerciseStore/GetExerciseByTags',
      request,
      metadata || {},
      methodDescriptor_ExerciseStore_GetExerciseByTags);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetExerciseByCategoryRequest,
 *   !proto.GetExercisesResponse>}
 */
const methodDescriptor_ExerciseStore_GetExerciseByCategory = new grpc.web.MethodDescriptor(
  '/ExerciseStore/GetExerciseByCategory',
  grpc.web.MethodType.UNARY,
  proto.GetExerciseByCategoryRequest,
  proto.GetExercisesResponse,
  /**
   * @param {!proto.GetExerciseByCategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetExercisesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetExerciseByCategoryRequest,
 *   !proto.GetExercisesResponse>}
 */
const methodInfo_ExerciseStore_GetExerciseByCategory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetExercisesResponse,
  /**
   * @param {!proto.GetExerciseByCategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetExercisesResponse.deserializeBinary
);


/**
 * @param {!proto.GetExerciseByCategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetExercisesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetExercisesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ExerciseStoreClient.prototype.getExerciseByCategory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ExerciseStore/GetExerciseByCategory',
      request,
      metadata || {},
      methodDescriptor_ExerciseStore_GetExerciseByCategory,
      callback);
};


/**
 * @param {!proto.GetExerciseByCategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetExercisesResponse>}
 *     A native promise that resolves to the response
 */
proto.ExerciseStorePromiseClient.prototype.getExerciseByCategory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ExerciseStore/GetExerciseByCategory',
      request,
      metadata || {},
      methodDescriptor_ExerciseStore_GetExerciseByCategory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.GetCategoriesResponse>}
 */
const methodDescriptor_ExerciseStore_GetCategories = new grpc.web.MethodDescriptor(
  '/ExerciseStore/GetCategories',
  grpc.web.MethodType.UNARY,
  proto.Empty,
  proto.GetCategoriesResponse,
  /**
   * @param {!proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetCategoriesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Empty,
 *   !proto.GetCategoriesResponse>}
 */
const methodInfo_ExerciseStore_GetCategories = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetCategoriesResponse,
  /**
   * @param {!proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetCategoriesResponse.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetCategoriesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetCategoriesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ExerciseStoreClient.prototype.getCategories =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ExerciseStore/GetCategories',
      request,
      metadata || {},
      methodDescriptor_ExerciseStore_GetCategories,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetCategoriesResponse>}
 *     A native promise that resolves to the response
 */
proto.ExerciseStorePromiseClient.prototype.getCategories =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ExerciseStore/GetCategories',
      request,
      metadata || {},
      methodDescriptor_ExerciseStore_GetCategories);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AddExerciseRequest,
 *   !proto.ResponseStatus>}
 */
const methodDescriptor_ExerciseStore_AddExercise = new grpc.web.MethodDescriptor(
  '/ExerciseStore/AddExercise',
  grpc.web.MethodType.UNARY,
  proto.AddExerciseRequest,
  proto.ResponseStatus,
  /**
   * @param {!proto.AddExerciseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ResponseStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AddExerciseRequest,
 *   !proto.ResponseStatus>}
 */
const methodInfo_ExerciseStore_AddExercise = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ResponseStatus,
  /**
   * @param {!proto.AddExerciseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ResponseStatus.deserializeBinary
);


/**
 * @param {!proto.AddExerciseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ResponseStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ResponseStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ExerciseStoreClient.prototype.addExercise =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ExerciseStore/AddExercise',
      request,
      metadata || {},
      methodDescriptor_ExerciseStore_AddExercise,
      callback);
};


/**
 * @param {!proto.AddExerciseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ResponseStatus>}
 *     A native promise that resolves to the response
 */
proto.ExerciseStorePromiseClient.prototype.addExercise =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ExerciseStore/AddExercise',
      request,
      metadata || {},
      methodDescriptor_ExerciseStore_AddExercise);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AddCategoryRequest,
 *   !proto.ResponseStatus>}
 */
const methodDescriptor_ExerciseStore_AddCategory = new grpc.web.MethodDescriptor(
  '/ExerciseStore/AddCategory',
  grpc.web.MethodType.UNARY,
  proto.AddCategoryRequest,
  proto.ResponseStatus,
  /**
   * @param {!proto.AddCategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ResponseStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AddCategoryRequest,
 *   !proto.ResponseStatus>}
 */
const methodInfo_ExerciseStore_AddCategory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ResponseStatus,
  /**
   * @param {!proto.AddCategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ResponseStatus.deserializeBinary
);


/**
 * @param {!proto.AddCategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ResponseStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ResponseStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ExerciseStoreClient.prototype.addCategory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ExerciseStore/AddCategory',
      request,
      metadata || {},
      methodDescriptor_ExerciseStore_AddCategory,
      callback);
};


/**
 * @param {!proto.AddCategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ResponseStatus>}
 *     A native promise that resolves to the response
 */
proto.ExerciseStorePromiseClient.prototype.addCategory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ExerciseStore/AddCategory',
      request,
      metadata || {},
      methodDescriptor_ExerciseStore_AddCategory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UpdateExerciseRequest,
 *   !proto.ResponseStatus>}
 */
const methodDescriptor_ExerciseStore_UpdateExercise = new grpc.web.MethodDescriptor(
  '/ExerciseStore/UpdateExercise',
  grpc.web.MethodType.UNARY,
  proto.UpdateExerciseRequest,
  proto.ResponseStatus,
  /**
   * @param {!proto.UpdateExerciseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ResponseStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.UpdateExerciseRequest,
 *   !proto.ResponseStatus>}
 */
const methodInfo_ExerciseStore_UpdateExercise = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ResponseStatus,
  /**
   * @param {!proto.UpdateExerciseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ResponseStatus.deserializeBinary
);


/**
 * @param {!proto.UpdateExerciseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ResponseStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ResponseStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ExerciseStoreClient.prototype.updateExercise =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ExerciseStore/UpdateExercise',
      request,
      metadata || {},
      methodDescriptor_ExerciseStore_UpdateExercise,
      callback);
};


/**
 * @param {!proto.UpdateExerciseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ResponseStatus>}
 *     A native promise that resolves to the response
 */
proto.ExerciseStorePromiseClient.prototype.updateExercise =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ExerciseStore/UpdateExercise',
      request,
      metadata || {},
      methodDescriptor_ExerciseStore_UpdateExercise);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UpdateCategoryRequest,
 *   !proto.ResponseStatus>}
 */
const methodDescriptor_ExerciseStore_UpdateCategory = new grpc.web.MethodDescriptor(
  '/ExerciseStore/UpdateCategory',
  grpc.web.MethodType.UNARY,
  proto.UpdateCategoryRequest,
  proto.ResponseStatus,
  /**
   * @param {!proto.UpdateCategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ResponseStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.UpdateCategoryRequest,
 *   !proto.ResponseStatus>}
 */
const methodInfo_ExerciseStore_UpdateCategory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ResponseStatus,
  /**
   * @param {!proto.UpdateCategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ResponseStatus.deserializeBinary
);


/**
 * @param {!proto.UpdateCategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ResponseStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ResponseStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ExerciseStoreClient.prototype.updateCategory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ExerciseStore/UpdateCategory',
      request,
      metadata || {},
      methodDescriptor_ExerciseStore_UpdateCategory,
      callback);
};


/**
 * @param {!proto.UpdateCategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ResponseStatus>}
 *     A native promise that resolves to the response
 */
proto.ExerciseStorePromiseClient.prototype.updateCategory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ExerciseStore/UpdateCategory',
      request,
      metadata || {},
      methodDescriptor_ExerciseStore_UpdateCategory);
};


module.exports = proto;

