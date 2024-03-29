// source: group.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.group.AcceptMemberReply', null, global);
goog.exportSymbol('proto.group.AcceptMemberRequest', null, global);
goog.exportSymbol('proto.group.ActivityType', null, global);
goog.exportSymbol('proto.group.BanMemberReply', null, global);
goog.exportSymbol('proto.group.BanMemberRequest', null, global);
goog.exportSymbol('proto.group.ChallengeInfo', null, global);
goog.exportSymbol('proto.group.ChallengeProgress', null, global);
goog.exportSymbol('proto.group.ChallengeRuleInfo', null, global);
goog.exportSymbol('proto.group.CreateChallengeReply', null, global);
goog.exportSymbol('proto.group.CreateChallengeRequest', null, global);
goog.exportSymbol('proto.group.CreateGroupReply', null, global);
goog.exportSymbol('proto.group.CreateGroupRequest', null, global);
goog.exportSymbol('proto.group.CreateSeasonReply', null, global);
goog.exportSymbol('proto.group.CreateSeasonRequest', null, global);
goog.exportSymbol('proto.group.DeleteChallengeReply', null, global);
goog.exportSymbol('proto.group.DeleteChallengeRequest', null, global);
goog.exportSymbol('proto.group.DeleteGroupReply', null, global);
goog.exportSymbol('proto.group.DeleteGroupRequest', null, global);
goog.exportSymbol('proto.group.DeleteSeasonReply', null, global);
goog.exportSymbol('proto.group.DeleteSeasonRequest', null, global);
goog.exportSymbol('proto.group.EventInfo', null, global);
goog.exportSymbol('proto.group.GetChallengeReply', null, global);
goog.exportSymbol('proto.group.GetChallengeRequest', null, global);
goog.exportSymbol('proto.group.GetGroupReply', null, global);
goog.exportSymbol('proto.group.GetGroupRequest', null, global);
goog.exportSymbol('proto.group.GetInProgressSeasonReply', null, global);
goog.exportSymbol('proto.group.GetInProgressSeasonRequest', null, global);
goog.exportSymbol('proto.group.GetSeasonReply', null, global);
goog.exportSymbol('proto.group.GetSeasonRequest', null, global);
goog.exportSymbol('proto.group.GroupInfo', null, global);
goog.exportSymbol('proto.group.GroupSortBy', null, global);
goog.exportSymbol('proto.group.JoinGroupReply', null, global);
goog.exportSymbol('proto.group.JoinGroupRequest', null, global);
goog.exportSymbol('proto.group.LeaveGroupReply', null, global);
goog.exportSymbol('proto.group.LeaveGroupRequest', null, global);
goog.exportSymbol('proto.group.ListChallengeReply', null, global);
goog.exportSymbol('proto.group.ListChallengeRequest', null, global);
goog.exportSymbol('proto.group.ListChallengeRequest.ChallengeSortBy', null, global);
goog.exportSymbol('proto.group.ListGroupReply', null, global);
goog.exportSymbol('proto.group.ListGroupRequest', null, global);
goog.exportSymbol('proto.group.ListGroupRequest.FilterBy', null, global);
goog.exportSymbol('proto.group.ListInProgressChallengeReply', null, global);
goog.exportSymbol('proto.group.ListInProgressChallengeRequest', null, global);
goog.exportSymbol('proto.group.ListMembersOfGroupReply', null, global);
goog.exportSymbol('proto.group.ListMembersOfGroupRequest', null, global);
goog.exportSymbol('proto.group.ListMembersOfGroupRequest.MOGSortBy', null, global);
goog.exportSymbol('proto.group.ListSeasonReply', null, global);
goog.exportSymbol('proto.group.ListSeasonRequest', null, global);
goog.exportSymbol('proto.group.ListSeasonRequest.SeasonSortBy', null, global);
goog.exportSymbol('proto.group.ListUserRankingReply', null, global);
goog.exportSymbol('proto.group.ListUserRankingRequest', null, global);
goog.exportSymbol('proto.group.ListUserRankingRequest.SortBy', null, global);
goog.exportSymbol('proto.group.Member', null, global);
goog.exportSymbol('proto.group.Member.Status', null, global);
goog.exportSymbol('proto.group.MemberProgress', null, global);
goog.exportSymbol('proto.group.MemberProgress.RuleProgress', null, global);
goog.exportSymbol('proto.group.Rule', null, global);
goog.exportSymbol('proto.group.RuleStatus', null, global);
goog.exportSymbol('proto.group.SeasonInfo', null, global);
goog.exportSymbol('proto.group.UpdateChallengeReply', null, global);
goog.exportSymbol('proto.group.UpdateChallengeRequest', null, global);
goog.exportSymbol('proto.group.UpdateGroupReply', null, global);
goog.exportSymbol('proto.group.UpdateGroupRequest', null, global);
goog.exportSymbol('proto.group.UpdateSeasonReply', null, global);
goog.exportSymbol('proto.group.UpdateSeasonRequest', null, global);
goog.exportSymbol('proto.group.UserRanking', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.GetInProgressSeasonRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.GetInProgressSeasonRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.GetInProgressSeasonRequest.displayName = 'proto.group.GetInProgressSeasonRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.GetInProgressSeasonReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.GetInProgressSeasonReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.GetInProgressSeasonReply.displayName = 'proto.group.GetInProgressSeasonReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.ListInProgressChallengeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.ListInProgressChallengeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.ListInProgressChallengeRequest.displayName = 'proto.group.ListInProgressChallengeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.ListInProgressChallengeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.group.ListInProgressChallengeReply.repeatedFields_, null);
};
goog.inherits(proto.group.ListInProgressChallengeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.ListInProgressChallengeReply.displayName = 'proto.group.ListInProgressChallengeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.SeasonInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.SeasonInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.SeasonInfo.displayName = 'proto.group.SeasonInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.GetSeasonRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.GetSeasonRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.GetSeasonRequest.displayName = 'proto.group.GetSeasonRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.GetSeasonReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.GetSeasonReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.GetSeasonReply.displayName = 'proto.group.GetSeasonReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.CreateSeasonRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.CreateSeasonRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.CreateSeasonRequest.displayName = 'proto.group.CreateSeasonRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.CreateSeasonReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.CreateSeasonReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.CreateSeasonReply.displayName = 'proto.group.CreateSeasonReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.ListSeasonRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.ListSeasonRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.ListSeasonRequest.displayName = 'proto.group.ListSeasonRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.ListSeasonReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.group.ListSeasonReply.repeatedFields_, null);
};
goog.inherits(proto.group.ListSeasonReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.ListSeasonReply.displayName = 'proto.group.ListSeasonReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.UpdateSeasonRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.UpdateSeasonRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.UpdateSeasonRequest.displayName = 'proto.group.UpdateSeasonRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.UpdateSeasonReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.UpdateSeasonReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.UpdateSeasonReply.displayName = 'proto.group.UpdateSeasonReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.DeleteSeasonRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.DeleteSeasonRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.DeleteSeasonRequest.displayName = 'proto.group.DeleteSeasonRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.DeleteSeasonReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.DeleteSeasonReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.DeleteSeasonReply.displayName = 'proto.group.DeleteSeasonReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.GetChallengeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.GetChallengeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.GetChallengeRequest.displayName = 'proto.group.GetChallengeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.GetChallengeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.GetChallengeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.GetChallengeReply.displayName = 'proto.group.GetChallengeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.CreateChallengeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.CreateChallengeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.CreateChallengeRequest.displayName = 'proto.group.CreateChallengeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.CreateChallengeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.CreateChallengeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.CreateChallengeReply.displayName = 'proto.group.CreateChallengeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.ListChallengeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.group.ListChallengeRequest.repeatedFields_, null);
};
goog.inherits(proto.group.ListChallengeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.ListChallengeRequest.displayName = 'proto.group.ListChallengeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.ListChallengeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.group.ListChallengeReply.repeatedFields_, null);
};
goog.inherits(proto.group.ListChallengeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.ListChallengeReply.displayName = 'proto.group.ListChallengeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.UpdateChallengeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.group.UpdateChallengeRequest.repeatedFields_, null);
};
goog.inherits(proto.group.UpdateChallengeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.UpdateChallengeRequest.displayName = 'proto.group.UpdateChallengeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.UpdateChallengeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.UpdateChallengeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.UpdateChallengeReply.displayName = 'proto.group.UpdateChallengeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.DeleteChallengeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.DeleteChallengeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.DeleteChallengeRequest.displayName = 'proto.group.DeleteChallengeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.DeleteChallengeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.DeleteChallengeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.DeleteChallengeReply.displayName = 'proto.group.DeleteChallengeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.ListUserRankingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.ListUserRankingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.ListUserRankingRequest.displayName = 'proto.group.ListUserRankingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.ListUserRankingReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.group.ListUserRankingReply.repeatedFields_, null);
};
goog.inherits(proto.group.ListUserRankingReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.ListUserRankingReply.displayName = 'proto.group.ListUserRankingReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.UserRanking = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.UserRanking, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.UserRanking.displayName = 'proto.group.UserRanking';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.LeaveGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.LeaveGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.LeaveGroupRequest.displayName = 'proto.group.LeaveGroupRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.LeaveGroupReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.LeaveGroupReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.LeaveGroupReply.displayName = 'proto.group.LeaveGroupReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.BanMemberRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.BanMemberRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.BanMemberRequest.displayName = 'proto.group.BanMemberRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.BanMemberReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.BanMemberReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.BanMemberReply.displayName = 'proto.group.BanMemberReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.AcceptMemberRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.AcceptMemberRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.AcceptMemberRequest.displayName = 'proto.group.AcceptMemberRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.AcceptMemberReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.AcceptMemberReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.AcceptMemberReply.displayName = 'proto.group.AcceptMemberReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.JoinGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.JoinGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.JoinGroupRequest.displayName = 'proto.group.JoinGroupRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.JoinGroupReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.JoinGroupReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.JoinGroupReply.displayName = 'proto.group.JoinGroupReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.CreateGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.CreateGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.CreateGroupRequest.displayName = 'proto.group.CreateGroupRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.CreateGroupReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.CreateGroupReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.CreateGroupReply.displayName = 'proto.group.CreateGroupReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.ListMembersOfGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.ListMembersOfGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.ListMembersOfGroupRequest.displayName = 'proto.group.ListMembersOfGroupRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.ListMembersOfGroupReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.group.ListMembersOfGroupReply.repeatedFields_, null);
};
goog.inherits(proto.group.ListMembersOfGroupReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.ListMembersOfGroupReply.displayName = 'proto.group.ListMembersOfGroupReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.ListGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.group.ListGroupRequest.repeatedFields_, null);
};
goog.inherits(proto.group.ListGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.ListGroupRequest.displayName = 'proto.group.ListGroupRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.ListGroupReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.group.ListGroupReply.repeatedFields_, null);
};
goog.inherits(proto.group.ListGroupReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.ListGroupReply.displayName = 'proto.group.ListGroupReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.GroupInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.GroupInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.GroupInfo.displayName = 'proto.group.GroupInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.GetGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.GetGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.GetGroupRequest.displayName = 'proto.group.GetGroupRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.GetGroupReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.group.GetGroupReply.repeatedFields_, null);
};
goog.inherits(proto.group.GetGroupReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.GetGroupReply.displayName = 'proto.group.GetGroupReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.UpdateGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.UpdateGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.UpdateGroupRequest.displayName = 'proto.group.UpdateGroupRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.UpdateGroupReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.UpdateGroupReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.UpdateGroupReply.displayName = 'proto.group.UpdateGroupReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.DeleteGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.DeleteGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.DeleteGroupRequest.displayName = 'proto.group.DeleteGroupRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.DeleteGroupReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.DeleteGroupReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.DeleteGroupReply.displayName = 'proto.group.DeleteGroupReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.Member = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.Member, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.Member.displayName = 'proto.group.Member';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.ChallengeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.group.ChallengeInfo.repeatedFields_, null);
};
goog.inherits(proto.group.ChallengeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.ChallengeInfo.displayName = 'proto.group.ChallengeInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.MemberProgress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.group.MemberProgress.repeatedFields_, null);
};
goog.inherits(proto.group.MemberProgress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.MemberProgress.displayName = 'proto.group.MemberProgress';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.MemberProgress.RuleProgress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.MemberProgress.RuleProgress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.MemberProgress.RuleProgress.displayName = 'proto.group.MemberProgress.RuleProgress';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.ChallengeRuleInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.ChallengeRuleInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.ChallengeRuleInfo.displayName = 'proto.group.ChallengeRuleInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.EventInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.group.EventInfo.repeatedFields_, null);
};
goog.inherits(proto.group.EventInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.EventInfo.displayName = 'proto.group.EventInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.group.ChallengeProgress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.group.ChallengeProgress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.group.ChallengeProgress.displayName = 'proto.group.ChallengeProgress';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.GetInProgressSeasonRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.group.GetInProgressSeasonRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.GetInProgressSeasonRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.GetInProgressSeasonRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.GetInProgressSeasonRequest}
 */
proto.group.GetInProgressSeasonRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.GetInProgressSeasonRequest;
  return proto.group.GetInProgressSeasonRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.GetInProgressSeasonRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.GetInProgressSeasonRequest}
 */
proto.group.GetInProgressSeasonRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.GetInProgressSeasonRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.GetInProgressSeasonRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.GetInProgressSeasonRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.GetInProgressSeasonRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.GetInProgressSeasonReply.prototype.toObject = function(opt_includeInstance) {
  return proto.group.GetInProgressSeasonReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.GetInProgressSeasonReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.GetInProgressSeasonReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    seasoninfo: (f = msg.getSeasoninfo()) && proto.group.SeasonInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.GetInProgressSeasonReply}
 */
proto.group.GetInProgressSeasonReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.GetInProgressSeasonReply;
  return proto.group.GetInProgressSeasonReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.GetInProgressSeasonReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.GetInProgressSeasonReply}
 */
proto.group.GetInProgressSeasonReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.group.SeasonInfo;
      reader.readMessage(value,proto.group.SeasonInfo.deserializeBinaryFromReader);
      msg.setSeasoninfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.GetInProgressSeasonReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.GetInProgressSeasonReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.GetInProgressSeasonReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.GetInProgressSeasonReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeasoninfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.group.SeasonInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional SeasonInfo seasonInfo = 1;
 * @return {?proto.group.SeasonInfo}
 */
proto.group.GetInProgressSeasonReply.prototype.getSeasoninfo = function() {
  return /** @type{?proto.group.SeasonInfo} */ (
    jspb.Message.getWrapperField(this, proto.group.SeasonInfo, 1));
};


/**
 * @param {?proto.group.SeasonInfo|undefined} value
 * @return {!proto.group.GetInProgressSeasonReply} returns this
*/
proto.group.GetInProgressSeasonReply.prototype.setSeasoninfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.GetInProgressSeasonReply} returns this
 */
proto.group.GetInProgressSeasonReply.prototype.clearSeasoninfo = function() {
  return this.setSeasoninfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.GetInProgressSeasonReply.prototype.hasSeasoninfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.ListInProgressChallengeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.group.ListInProgressChallengeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.ListInProgressChallengeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ListInProgressChallengeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    activitytype: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.ListInProgressChallengeRequest}
 */
proto.group.ListInProgressChallengeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.ListInProgressChallengeRequest;
  return proto.group.ListInProgressChallengeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.ListInProgressChallengeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.ListInProgressChallengeRequest}
 */
proto.group.ListInProgressChallengeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {!proto.group.ActivityType} */ (reader.readEnum());
      msg.setActivitytype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.ListInProgressChallengeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.ListInProgressChallengeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.ListInProgressChallengeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ListInProgressChallengeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getActivitytype();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional int64 user_id = 1;
 * @return {number}
 */
proto.group.ListInProgressChallengeRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.ListInProgressChallengeRequest} returns this
 */
proto.group.ListInProgressChallengeRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ActivityType activityType = 2;
 * @return {!proto.group.ActivityType}
 */
proto.group.ListInProgressChallengeRequest.prototype.getActivitytype = function() {
  return /** @type {!proto.group.ActivityType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.group.ActivityType} value
 * @return {!proto.group.ListInProgressChallengeRequest} returns this
 */
proto.group.ListInProgressChallengeRequest.prototype.setActivitytype = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.group.ListInProgressChallengeReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.ListInProgressChallengeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.group.ListInProgressChallengeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.ListInProgressChallengeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ListInProgressChallengeReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    challengeInfoListList: jspb.Message.toObjectList(msg.getChallengeInfoListList(),
    proto.group.ChallengeInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.ListInProgressChallengeReply}
 */
proto.group.ListInProgressChallengeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.ListInProgressChallengeReply;
  return proto.group.ListInProgressChallengeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.ListInProgressChallengeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.ListInProgressChallengeReply}
 */
proto.group.ListInProgressChallengeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.group.ChallengeInfo;
      reader.readMessage(value,proto.group.ChallengeInfo.deserializeBinaryFromReader);
      msg.addChallengeInfoList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.ListInProgressChallengeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.ListInProgressChallengeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.ListInProgressChallengeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ListInProgressChallengeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChallengeInfoListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.group.ChallengeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ChallengeInfo challenge_info_list = 1;
 * @return {!Array<!proto.group.ChallengeInfo>}
 */
proto.group.ListInProgressChallengeReply.prototype.getChallengeInfoListList = function() {
  return /** @type{!Array<!proto.group.ChallengeInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.group.ChallengeInfo, 1));
};


/**
 * @param {!Array<!proto.group.ChallengeInfo>} value
 * @return {!proto.group.ListInProgressChallengeReply} returns this
*/
proto.group.ListInProgressChallengeReply.prototype.setChallengeInfoListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.group.ChallengeInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.group.ChallengeInfo}
 */
proto.group.ListInProgressChallengeReply.prototype.addChallengeInfoList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.group.ChallengeInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.group.ListInProgressChallengeReply} returns this
 */
proto.group.ListInProgressChallengeReply.prototype.clearChallengeInfoListList = function() {
  return this.setChallengeInfoListList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.SeasonInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.group.SeasonInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.SeasonInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.SeasonInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    picture: jspb.Message.getFieldWithDefault(msg, 12, ""),
    status: jspb.Message.getFieldWithDefault(msg, 15, 0),
    from: (f = msg.getFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    to: (f = msg.getTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.SeasonInfo}
 */
proto.group.SeasonInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.SeasonInfo;
  return proto.group.SeasonInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.SeasonInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.SeasonInfo}
 */
proto.group.SeasonInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPicture(value);
      break;
    case 15:
      var value = /** @type {!proto.group.RuleStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.SeasonInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.SeasonInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.SeasonInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.SeasonInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPicture();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.group.SeasonInfo.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.SeasonInfo} returns this
 */
proto.group.SeasonInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.group.SeasonInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.group.SeasonInfo} returns this
 */
proto.group.SeasonInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.group.SeasonInfo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.group.SeasonInfo} returns this
 */
proto.group.SeasonInfo.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string picture = 12;
 * @return {string}
 */
proto.group.SeasonInfo.prototype.getPicture = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.group.SeasonInfo} returns this
 */
proto.group.SeasonInfo.prototype.setPicture = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional RuleStatus status = 15;
 * @return {!proto.group.RuleStatus}
 */
proto.group.SeasonInfo.prototype.getStatus = function() {
  return /** @type {!proto.group.RuleStatus} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.group.RuleStatus} value
 * @return {!proto.group.SeasonInfo} returns this
 */
proto.group.SeasonInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 15, value);
};


/**
 * optional google.protobuf.Timestamp from = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.group.SeasonInfo.prototype.getFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.group.SeasonInfo} returns this
*/
proto.group.SeasonInfo.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.SeasonInfo} returns this
 */
proto.group.SeasonInfo.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.SeasonInfo.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp to = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.group.SeasonInfo.prototype.getTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.group.SeasonInfo} returns this
*/
proto.group.SeasonInfo.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.SeasonInfo} returns this
 */
proto.group.SeasonInfo.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.SeasonInfo.prototype.hasTo = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.GetSeasonRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.group.GetSeasonRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.GetSeasonRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.GetSeasonRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.GetSeasonRequest}
 */
proto.group.GetSeasonRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.GetSeasonRequest;
  return proto.group.GetSeasonRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.GetSeasonRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.GetSeasonRequest}
 */
proto.group.GetSeasonRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.GetSeasonRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.GetSeasonRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.GetSeasonRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.GetSeasonRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.group.GetSeasonRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.GetSeasonRequest} returns this
 */
proto.group.GetSeasonRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.GetSeasonReply.prototype.toObject = function(opt_includeInstance) {
  return proto.group.GetSeasonReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.GetSeasonReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.GetSeasonReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    seasoninfo: (f = msg.getSeasoninfo()) && proto.group.SeasonInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.GetSeasonReply}
 */
proto.group.GetSeasonReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.GetSeasonReply;
  return proto.group.GetSeasonReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.GetSeasonReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.GetSeasonReply}
 */
proto.group.GetSeasonReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.group.SeasonInfo;
      reader.readMessage(value,proto.group.SeasonInfo.deserializeBinaryFromReader);
      msg.setSeasoninfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.GetSeasonReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.GetSeasonReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.GetSeasonReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.GetSeasonReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeasoninfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.group.SeasonInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional SeasonInfo seasonInfo = 1;
 * @return {?proto.group.SeasonInfo}
 */
proto.group.GetSeasonReply.prototype.getSeasoninfo = function() {
  return /** @type{?proto.group.SeasonInfo} */ (
    jspb.Message.getWrapperField(this, proto.group.SeasonInfo, 1));
};


/**
 * @param {?proto.group.SeasonInfo|undefined} value
 * @return {!proto.group.GetSeasonReply} returns this
*/
proto.group.GetSeasonReply.prototype.setSeasoninfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.GetSeasonReply} returns this
 */
proto.group.GetSeasonReply.prototype.clearSeasoninfo = function() {
  return this.setSeasoninfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.GetSeasonReply.prototype.hasSeasoninfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.CreateSeasonRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.group.CreateSeasonRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.CreateSeasonRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.CreateSeasonRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    seasoninfo: (f = msg.getSeasoninfo()) && proto.group.SeasonInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.CreateSeasonRequest}
 */
proto.group.CreateSeasonRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.CreateSeasonRequest;
  return proto.group.CreateSeasonRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.CreateSeasonRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.CreateSeasonRequest}
 */
proto.group.CreateSeasonRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.group.SeasonInfo;
      reader.readMessage(value,proto.group.SeasonInfo.deserializeBinaryFromReader);
      msg.setSeasoninfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.CreateSeasonRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.CreateSeasonRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.CreateSeasonRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.CreateSeasonRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeasoninfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.group.SeasonInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional SeasonInfo seasonInfo = 1;
 * @return {?proto.group.SeasonInfo}
 */
proto.group.CreateSeasonRequest.prototype.getSeasoninfo = function() {
  return /** @type{?proto.group.SeasonInfo} */ (
    jspb.Message.getWrapperField(this, proto.group.SeasonInfo, 1));
};


/**
 * @param {?proto.group.SeasonInfo|undefined} value
 * @return {!proto.group.CreateSeasonRequest} returns this
*/
proto.group.CreateSeasonRequest.prototype.setSeasoninfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.CreateSeasonRequest} returns this
 */
proto.group.CreateSeasonRequest.prototype.clearSeasoninfo = function() {
  return this.setSeasoninfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.CreateSeasonRequest.prototype.hasSeasoninfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.CreateSeasonReply.prototype.toObject = function(opt_includeInstance) {
  return proto.group.CreateSeasonReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.CreateSeasonReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.CreateSeasonReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.CreateSeasonReply}
 */
proto.group.CreateSeasonReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.CreateSeasonReply;
  return proto.group.CreateSeasonReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.CreateSeasonReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.CreateSeasonReply}
 */
proto.group.CreateSeasonReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.CreateSeasonReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.CreateSeasonReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.CreateSeasonReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.CreateSeasonReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.ListSeasonRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.group.ListSeasonRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.ListSeasonRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ListSeasonRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ascending: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    sortBy: jspb.Message.getFieldWithDefault(msg, 4, 0),
    searchByName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    status: jspb.Message.getFieldWithDefault(msg, 12, 0),
    from: (f = msg.getFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    to: (f = msg.getTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.ListSeasonRequest}
 */
proto.group.ListSeasonRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.ListSeasonRequest;
  return proto.group.ListSeasonRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.ListSeasonRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.ListSeasonRequest}
 */
proto.group.ListSeasonRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAscending(value);
      break;
    case 4:
      var value = /** @type {!proto.group.ListSeasonRequest.SeasonSortBy} */ (reader.readEnum());
      msg.setSortBy(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchByName(value);
      break;
    case 12:
      var value = /** @type {!proto.group.RuleStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.ListSeasonRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.ListSeasonRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.ListSeasonRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ListSeasonRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAscending();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getSortBy();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getSearchByName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.group.ListSeasonRequest.SeasonSortBy = {
  SEASON_SORT_BY_UNSPECIFIED: 0,
  SEASON_SORT_BY_START_TIME: 1,
  SEASON_SORT_BY_END_TIME: 2,
  SEASON_SORT_BY_NAME: 3
};

/**
 * optional uint32 limit = 1;
 * @return {number}
 */
proto.group.ListSeasonRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.ListSeasonRequest} returns this
 */
proto.group.ListSeasonRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.group.ListSeasonRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.ListSeasonRequest} returns this
 */
proto.group.ListSeasonRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool ascending = 3;
 * @return {boolean}
 */
proto.group.ListSeasonRequest.prototype.getAscending = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.group.ListSeasonRequest} returns this
 */
proto.group.ListSeasonRequest.prototype.setAscending = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional SeasonSortBy sort_by = 4;
 * @return {!proto.group.ListSeasonRequest.SeasonSortBy}
 */
proto.group.ListSeasonRequest.prototype.getSortBy = function() {
  return /** @type {!proto.group.ListSeasonRequest.SeasonSortBy} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.group.ListSeasonRequest.SeasonSortBy} value
 * @return {!proto.group.ListSeasonRequest} returns this
 */
proto.group.ListSeasonRequest.prototype.setSortBy = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string search_by_name = 5;
 * @return {string}
 */
proto.group.ListSeasonRequest.prototype.getSearchByName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.group.ListSeasonRequest} returns this
 */
proto.group.ListSeasonRequest.prototype.setSearchByName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional RuleStatus status = 12;
 * @return {!proto.group.RuleStatus}
 */
proto.group.ListSeasonRequest.prototype.getStatus = function() {
  return /** @type {!proto.group.RuleStatus} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.group.RuleStatus} value
 * @return {!proto.group.ListSeasonRequest} returns this
 */
proto.group.ListSeasonRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional google.protobuf.Timestamp from = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.group.ListSeasonRequest.prototype.getFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.group.ListSeasonRequest} returns this
*/
proto.group.ListSeasonRequest.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.ListSeasonRequest} returns this
 */
proto.group.ListSeasonRequest.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.ListSeasonRequest.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp to = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.group.ListSeasonRequest.prototype.getTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.group.ListSeasonRequest} returns this
*/
proto.group.ListSeasonRequest.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.ListSeasonRequest} returns this
 */
proto.group.ListSeasonRequest.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.ListSeasonRequest.prototype.hasTo = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.group.ListSeasonReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.ListSeasonReply.prototype.toObject = function(opt_includeInstance) {
  return proto.group.ListSeasonReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.ListSeasonReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ListSeasonReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    seasoninfolistList: jspb.Message.toObjectList(msg.getSeasoninfolistList(),
    proto.group.SeasonInfo.toObject, includeInstance),
    total: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.ListSeasonReply}
 */
proto.group.ListSeasonReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.ListSeasonReply;
  return proto.group.ListSeasonReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.ListSeasonReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.ListSeasonReply}
 */
proto.group.ListSeasonReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.group.SeasonInfo;
      reader.readMessage(value,proto.group.SeasonInfo.deserializeBinaryFromReader);
      msg.addSeasoninfolist(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.ListSeasonReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.ListSeasonReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.ListSeasonReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ListSeasonReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeasoninfolistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.group.SeasonInfo.serializeBinaryToWriter
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * repeated SeasonInfo seasonInfoList = 1;
 * @return {!Array<!proto.group.SeasonInfo>}
 */
proto.group.ListSeasonReply.prototype.getSeasoninfolistList = function() {
  return /** @type{!Array<!proto.group.SeasonInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.group.SeasonInfo, 1));
};


/**
 * @param {!Array<!proto.group.SeasonInfo>} value
 * @return {!proto.group.ListSeasonReply} returns this
*/
proto.group.ListSeasonReply.prototype.setSeasoninfolistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.group.SeasonInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.group.SeasonInfo}
 */
proto.group.ListSeasonReply.prototype.addSeasoninfolist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.group.SeasonInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.group.ListSeasonReply} returns this
 */
proto.group.ListSeasonReply.prototype.clearSeasoninfolistList = function() {
  return this.setSeasoninfolistList([]);
};


/**
 * optional int64 total = 2;
 * @return {number}
 */
proto.group.ListSeasonReply.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.ListSeasonReply} returns this
 */
proto.group.ListSeasonReply.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.UpdateSeasonRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.group.UpdateSeasonRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.UpdateSeasonRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.UpdateSeasonRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    seasoninfo: (f = msg.getSeasoninfo()) && proto.group.SeasonInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.UpdateSeasonRequest}
 */
proto.group.UpdateSeasonRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.UpdateSeasonRequest;
  return proto.group.UpdateSeasonRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.UpdateSeasonRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.UpdateSeasonRequest}
 */
proto.group.UpdateSeasonRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.group.SeasonInfo;
      reader.readMessage(value,proto.group.SeasonInfo.deserializeBinaryFromReader);
      msg.setSeasoninfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.UpdateSeasonRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.UpdateSeasonRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.UpdateSeasonRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.UpdateSeasonRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeasoninfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.group.SeasonInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional SeasonInfo seasonInfo = 1;
 * @return {?proto.group.SeasonInfo}
 */
proto.group.UpdateSeasonRequest.prototype.getSeasoninfo = function() {
  return /** @type{?proto.group.SeasonInfo} */ (
    jspb.Message.getWrapperField(this, proto.group.SeasonInfo, 1));
};


/**
 * @param {?proto.group.SeasonInfo|undefined} value
 * @return {!proto.group.UpdateSeasonRequest} returns this
*/
proto.group.UpdateSeasonRequest.prototype.setSeasoninfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.UpdateSeasonRequest} returns this
 */
proto.group.UpdateSeasonRequest.prototype.clearSeasoninfo = function() {
  return this.setSeasoninfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.UpdateSeasonRequest.prototype.hasSeasoninfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.UpdateSeasonReply.prototype.toObject = function(opt_includeInstance) {
  return proto.group.UpdateSeasonReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.UpdateSeasonReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.UpdateSeasonReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.UpdateSeasonReply}
 */
proto.group.UpdateSeasonReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.UpdateSeasonReply;
  return proto.group.UpdateSeasonReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.UpdateSeasonReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.UpdateSeasonReply}
 */
proto.group.UpdateSeasonReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.UpdateSeasonReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.UpdateSeasonReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.UpdateSeasonReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.UpdateSeasonReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.DeleteSeasonRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.group.DeleteSeasonRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.DeleteSeasonRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.DeleteSeasonRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.DeleteSeasonRequest}
 */
proto.group.DeleteSeasonRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.DeleteSeasonRequest;
  return proto.group.DeleteSeasonRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.DeleteSeasonRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.DeleteSeasonRequest}
 */
proto.group.DeleteSeasonRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.DeleteSeasonRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.DeleteSeasonRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.DeleteSeasonRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.DeleteSeasonRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.group.DeleteSeasonRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.DeleteSeasonRequest} returns this
 */
proto.group.DeleteSeasonRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.DeleteSeasonReply.prototype.toObject = function(opt_includeInstance) {
  return proto.group.DeleteSeasonReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.DeleteSeasonReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.DeleteSeasonReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.DeleteSeasonReply}
 */
proto.group.DeleteSeasonReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.DeleteSeasonReply;
  return proto.group.DeleteSeasonReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.DeleteSeasonReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.DeleteSeasonReply}
 */
proto.group.DeleteSeasonReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.DeleteSeasonReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.DeleteSeasonReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.DeleteSeasonReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.DeleteSeasonReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.GetChallengeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.group.GetChallengeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.GetChallengeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.GetChallengeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.GetChallengeRequest}
 */
proto.group.GetChallengeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.GetChallengeRequest;
  return proto.group.GetChallengeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.GetChallengeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.GetChallengeRequest}
 */
proto.group.GetChallengeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.GetChallengeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.GetChallengeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.GetChallengeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.GetChallengeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.group.GetChallengeRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.GetChallengeRequest} returns this
 */
proto.group.GetChallengeRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.GetChallengeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.group.GetChallengeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.GetChallengeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.GetChallengeReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    challengeinfo: (f = msg.getChallengeinfo()) && proto.group.ChallengeInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.GetChallengeReply}
 */
proto.group.GetChallengeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.GetChallengeReply;
  return proto.group.GetChallengeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.GetChallengeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.GetChallengeReply}
 */
proto.group.GetChallengeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.group.ChallengeInfo;
      reader.readMessage(value,proto.group.ChallengeInfo.deserializeBinaryFromReader);
      msg.setChallengeinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.GetChallengeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.GetChallengeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.GetChallengeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.GetChallengeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChallengeinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.group.ChallengeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ChallengeInfo challengeInfo = 1;
 * @return {?proto.group.ChallengeInfo}
 */
proto.group.GetChallengeReply.prototype.getChallengeinfo = function() {
  return /** @type{?proto.group.ChallengeInfo} */ (
    jspb.Message.getWrapperField(this, proto.group.ChallengeInfo, 1));
};


/**
 * @param {?proto.group.ChallengeInfo|undefined} value
 * @return {!proto.group.GetChallengeReply} returns this
*/
proto.group.GetChallengeReply.prototype.setChallengeinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.GetChallengeReply} returns this
 */
proto.group.GetChallengeReply.prototype.clearChallengeinfo = function() {
  return this.setChallengeinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.GetChallengeReply.prototype.hasChallengeinfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.CreateChallengeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.group.CreateChallengeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.CreateChallengeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.CreateChallengeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    challengeinfo: (f = msg.getChallengeinfo()) && proto.group.ChallengeInfo.toObject(includeInstance, f),
    groupId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.CreateChallengeRequest}
 */
proto.group.CreateChallengeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.CreateChallengeRequest;
  return proto.group.CreateChallengeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.CreateChallengeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.CreateChallengeRequest}
 */
proto.group.CreateChallengeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.group.ChallengeInfo;
      reader.readMessage(value,proto.group.ChallengeInfo.deserializeBinaryFromReader);
      msg.setChallengeinfo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGroupId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.CreateChallengeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.CreateChallengeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.CreateChallengeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.CreateChallengeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChallengeinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.group.ChallengeInfo.serializeBinaryToWriter
    );
  }
  f = message.getGroupId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional ChallengeInfo challengeInfo = 1;
 * @return {?proto.group.ChallengeInfo}
 */
proto.group.CreateChallengeRequest.prototype.getChallengeinfo = function() {
  return /** @type{?proto.group.ChallengeInfo} */ (
    jspb.Message.getWrapperField(this, proto.group.ChallengeInfo, 1));
};


/**
 * @param {?proto.group.ChallengeInfo|undefined} value
 * @return {!proto.group.CreateChallengeRequest} returns this
*/
proto.group.CreateChallengeRequest.prototype.setChallengeinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.CreateChallengeRequest} returns this
 */
proto.group.CreateChallengeRequest.prototype.clearChallengeinfo = function() {
  return this.setChallengeinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.CreateChallengeRequest.prototype.hasChallengeinfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 group_id = 2;
 * @return {number}
 */
proto.group.CreateChallengeRequest.prototype.getGroupId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.CreateChallengeRequest} returns this
 */
proto.group.CreateChallengeRequest.prototype.setGroupId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.CreateChallengeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.group.CreateChallengeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.CreateChallengeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.CreateChallengeReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.CreateChallengeReply}
 */
proto.group.CreateChallengeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.CreateChallengeReply;
  return proto.group.CreateChallengeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.CreateChallengeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.CreateChallengeReply}
 */
proto.group.CreateChallengeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.CreateChallengeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.CreateChallengeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.CreateChallengeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.CreateChallengeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.group.ListChallengeRequest.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.ListChallengeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.group.ListChallengeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.ListChallengeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ListChallengeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ascending: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    groupId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    sortBy: jspb.Message.getFieldWithDefault(msg, 4, 0),
    searchByName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    filterByRulesList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    filterByType: jspb.Message.getFieldWithDefault(msg, 10, 0),
    status: jspb.Message.getFieldWithDefault(msg, 12, 0),
    from: (f = msg.getFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    to: (f = msg.getTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.ListChallengeRequest}
 */
proto.group.ListChallengeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.ListChallengeRequest;
  return proto.group.ListChallengeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.ListChallengeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.ListChallengeRequest}
 */
proto.group.ListChallengeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAscending(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGroupId(value);
      break;
    case 4:
      var value = /** @type {!proto.group.ListChallengeRequest.ChallengeSortBy} */ (reader.readEnum());
      msg.setSortBy(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchByName(value);
      break;
    case 7:
      var values = /** @type {!Array<!proto.group.Rule>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addFilterByRules(values[i]);
      }
      break;
    case 10:
      var value = /** @type {!proto.group.ActivityType} */ (reader.readEnum());
      msg.setFilterByType(value);
      break;
    case 12:
      var value = /** @type {!proto.group.RuleStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.ListChallengeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.ListChallengeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.ListChallengeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ListChallengeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAscending();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getGroupId();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getSortBy();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getSearchByName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFilterByRulesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      7,
      f
    );
  }
  f = message.getFilterByType();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.group.ListChallengeRequest.ChallengeSortBy = {
  CHALLENGE_SORT_BY_UNSPECIFIED: 0,
  CHALLENGE_SORT_BY_START_TIME: 1,
  CHALLENGE_SORT_BY_END_TIME: 2,
  CHALLENGE_SORT_BY_NAME: 3
};

/**
 * optional uint32 limit = 1;
 * @return {number}
 */
proto.group.ListChallengeRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.ListChallengeRequest} returns this
 */
proto.group.ListChallengeRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.group.ListChallengeRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.ListChallengeRequest} returns this
 */
proto.group.ListChallengeRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool ascending = 3;
 * @return {boolean}
 */
proto.group.ListChallengeRequest.prototype.getAscending = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.group.ListChallengeRequest} returns this
 */
proto.group.ListChallengeRequest.prototype.setAscending = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int64 group_id = 6;
 * @return {number}
 */
proto.group.ListChallengeRequest.prototype.getGroupId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.ListChallengeRequest} returns this
 */
proto.group.ListChallengeRequest.prototype.setGroupId = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional ChallengeSortBy sort_by = 4;
 * @return {!proto.group.ListChallengeRequest.ChallengeSortBy}
 */
proto.group.ListChallengeRequest.prototype.getSortBy = function() {
  return /** @type {!proto.group.ListChallengeRequest.ChallengeSortBy} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.group.ListChallengeRequest.ChallengeSortBy} value
 * @return {!proto.group.ListChallengeRequest} returns this
 */
proto.group.ListChallengeRequest.prototype.setSortBy = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string search_by_name = 5;
 * @return {string}
 */
proto.group.ListChallengeRequest.prototype.getSearchByName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.group.ListChallengeRequest} returns this
 */
proto.group.ListChallengeRequest.prototype.setSearchByName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated Rule filter_by_rules = 7;
 * @return {!Array<!proto.group.Rule>}
 */
proto.group.ListChallengeRequest.prototype.getFilterByRulesList = function() {
  return /** @type {!Array<!proto.group.Rule>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<!proto.group.Rule>} value
 * @return {!proto.group.ListChallengeRequest} returns this
 */
proto.group.ListChallengeRequest.prototype.setFilterByRulesList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {!proto.group.Rule} value
 * @param {number=} opt_index
 * @return {!proto.group.ListChallengeRequest} returns this
 */
proto.group.ListChallengeRequest.prototype.addFilterByRules = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.group.ListChallengeRequest} returns this
 */
proto.group.ListChallengeRequest.prototype.clearFilterByRulesList = function() {
  return this.setFilterByRulesList([]);
};


/**
 * optional ActivityType filter_by_type = 10;
 * @return {!proto.group.ActivityType}
 */
proto.group.ListChallengeRequest.prototype.getFilterByType = function() {
  return /** @type {!proto.group.ActivityType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.group.ActivityType} value
 * @return {!proto.group.ListChallengeRequest} returns this
 */
proto.group.ListChallengeRequest.prototype.setFilterByType = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional RuleStatus status = 12;
 * @return {!proto.group.RuleStatus}
 */
proto.group.ListChallengeRequest.prototype.getStatus = function() {
  return /** @type {!proto.group.RuleStatus} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.group.RuleStatus} value
 * @return {!proto.group.ListChallengeRequest} returns this
 */
proto.group.ListChallengeRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional google.protobuf.Timestamp from = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.group.ListChallengeRequest.prototype.getFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.group.ListChallengeRequest} returns this
*/
proto.group.ListChallengeRequest.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.ListChallengeRequest} returns this
 */
proto.group.ListChallengeRequest.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.ListChallengeRequest.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp to = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.group.ListChallengeRequest.prototype.getTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.group.ListChallengeRequest} returns this
*/
proto.group.ListChallengeRequest.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.ListChallengeRequest} returns this
 */
proto.group.ListChallengeRequest.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.ListChallengeRequest.prototype.hasTo = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.group.ListChallengeReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.ListChallengeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.group.ListChallengeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.ListChallengeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ListChallengeReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    challengeinfolistList: jspb.Message.toObjectList(msg.getChallengeinfolistList(),
    proto.group.ChallengeInfo.toObject, includeInstance),
    total: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.ListChallengeReply}
 */
proto.group.ListChallengeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.ListChallengeReply;
  return proto.group.ListChallengeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.ListChallengeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.ListChallengeReply}
 */
proto.group.ListChallengeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.group.ChallengeInfo;
      reader.readMessage(value,proto.group.ChallengeInfo.deserializeBinaryFromReader);
      msg.addChallengeinfolist(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.ListChallengeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.ListChallengeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.ListChallengeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ListChallengeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChallengeinfolistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.group.ChallengeInfo.serializeBinaryToWriter
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * repeated ChallengeInfo challengeInfoList = 1;
 * @return {!Array<!proto.group.ChallengeInfo>}
 */
proto.group.ListChallengeReply.prototype.getChallengeinfolistList = function() {
  return /** @type{!Array<!proto.group.ChallengeInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.group.ChallengeInfo, 1));
};


/**
 * @param {!Array<!proto.group.ChallengeInfo>} value
 * @return {!proto.group.ListChallengeReply} returns this
*/
proto.group.ListChallengeReply.prototype.setChallengeinfolistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.group.ChallengeInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.group.ChallengeInfo}
 */
proto.group.ListChallengeReply.prototype.addChallengeinfolist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.group.ChallengeInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.group.ListChallengeReply} returns this
 */
proto.group.ListChallengeReply.prototype.clearChallengeinfolistList = function() {
  return this.setChallengeinfolistList([]);
};


/**
 * optional int64 total = 2;
 * @return {number}
 */
proto.group.ListChallengeReply.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.ListChallengeReply} returns this
 */
proto.group.ListChallengeReply.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.group.UpdateChallengeRequest.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.UpdateChallengeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.group.UpdateChallengeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.UpdateChallengeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.UpdateChallengeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    challengeinfo: (f = msg.getChallengeinfo()) && proto.group.ChallengeInfo.toObject(includeInstance, f),
    groupId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    idsRuleToDeleteList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    challengeRulesToAddList: jspb.Message.toObjectList(msg.getChallengeRulesToAddList(),
    proto.group.ChallengeRuleInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.UpdateChallengeRequest}
 */
proto.group.UpdateChallengeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.UpdateChallengeRequest;
  return proto.group.UpdateChallengeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.UpdateChallengeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.UpdateChallengeRequest}
 */
proto.group.UpdateChallengeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.group.ChallengeInfo;
      reader.readMessage(value,proto.group.ChallengeInfo.deserializeBinaryFromReader);
      msg.setChallengeinfo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGroupId(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addIdsRuleToDelete(values[i]);
      }
      break;
    case 4:
      var value = new proto.group.ChallengeRuleInfo;
      reader.readMessage(value,proto.group.ChallengeRuleInfo.deserializeBinaryFromReader);
      msg.addChallengeRulesToAdd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.UpdateChallengeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.UpdateChallengeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.UpdateChallengeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.UpdateChallengeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChallengeinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.group.ChallengeInfo.serializeBinaryToWriter
    );
  }
  f = message.getGroupId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getIdsRuleToDeleteList();
  if (f.length > 0) {
    writer.writePackedInt64(
      3,
      f
    );
  }
  f = message.getChallengeRulesToAddList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.group.ChallengeRuleInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ChallengeInfo challengeInfo = 1;
 * @return {?proto.group.ChallengeInfo}
 */
proto.group.UpdateChallengeRequest.prototype.getChallengeinfo = function() {
  return /** @type{?proto.group.ChallengeInfo} */ (
    jspb.Message.getWrapperField(this, proto.group.ChallengeInfo, 1));
};


/**
 * @param {?proto.group.ChallengeInfo|undefined} value
 * @return {!proto.group.UpdateChallengeRequest} returns this
*/
proto.group.UpdateChallengeRequest.prototype.setChallengeinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.UpdateChallengeRequest} returns this
 */
proto.group.UpdateChallengeRequest.prototype.clearChallengeinfo = function() {
  return this.setChallengeinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.UpdateChallengeRequest.prototype.hasChallengeinfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 group_id = 2;
 * @return {number}
 */
proto.group.UpdateChallengeRequest.prototype.getGroupId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.UpdateChallengeRequest} returns this
 */
proto.group.UpdateChallengeRequest.prototype.setGroupId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated int64 ids_rule_to_delete = 3;
 * @return {!Array<number>}
 */
proto.group.UpdateChallengeRequest.prototype.getIdsRuleToDeleteList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.group.UpdateChallengeRequest} returns this
 */
proto.group.UpdateChallengeRequest.prototype.setIdsRuleToDeleteList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.group.UpdateChallengeRequest} returns this
 */
proto.group.UpdateChallengeRequest.prototype.addIdsRuleToDelete = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.group.UpdateChallengeRequest} returns this
 */
proto.group.UpdateChallengeRequest.prototype.clearIdsRuleToDeleteList = function() {
  return this.setIdsRuleToDeleteList([]);
};


/**
 * repeated ChallengeRuleInfo challenge_rules_to_add = 4;
 * @return {!Array<!proto.group.ChallengeRuleInfo>}
 */
proto.group.UpdateChallengeRequest.prototype.getChallengeRulesToAddList = function() {
  return /** @type{!Array<!proto.group.ChallengeRuleInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.group.ChallengeRuleInfo, 4));
};


/**
 * @param {!Array<!proto.group.ChallengeRuleInfo>} value
 * @return {!proto.group.UpdateChallengeRequest} returns this
*/
proto.group.UpdateChallengeRequest.prototype.setChallengeRulesToAddList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.group.ChallengeRuleInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.group.ChallengeRuleInfo}
 */
proto.group.UpdateChallengeRequest.prototype.addChallengeRulesToAdd = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.group.ChallengeRuleInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.group.UpdateChallengeRequest} returns this
 */
proto.group.UpdateChallengeRequest.prototype.clearChallengeRulesToAddList = function() {
  return this.setChallengeRulesToAddList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.UpdateChallengeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.group.UpdateChallengeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.UpdateChallengeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.UpdateChallengeReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.UpdateChallengeReply}
 */
proto.group.UpdateChallengeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.UpdateChallengeReply;
  return proto.group.UpdateChallengeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.UpdateChallengeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.UpdateChallengeReply}
 */
proto.group.UpdateChallengeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.UpdateChallengeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.UpdateChallengeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.UpdateChallengeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.UpdateChallengeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.DeleteChallengeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.group.DeleteChallengeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.DeleteChallengeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.DeleteChallengeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.DeleteChallengeRequest}
 */
proto.group.DeleteChallengeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.DeleteChallengeRequest;
  return proto.group.DeleteChallengeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.DeleteChallengeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.DeleteChallengeRequest}
 */
proto.group.DeleteChallengeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.DeleteChallengeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.DeleteChallengeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.DeleteChallengeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.DeleteChallengeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.group.DeleteChallengeRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.DeleteChallengeRequest} returns this
 */
proto.group.DeleteChallengeRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.DeleteChallengeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.group.DeleteChallengeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.DeleteChallengeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.DeleteChallengeReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.DeleteChallengeReply}
 */
proto.group.DeleteChallengeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.DeleteChallengeReply;
  return proto.group.DeleteChallengeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.DeleteChallengeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.DeleteChallengeReply}
 */
proto.group.DeleteChallengeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.DeleteChallengeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.DeleteChallengeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.DeleteChallengeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.DeleteChallengeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.ListUserRankingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.group.ListUserRankingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.ListUserRankingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ListUserRankingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ascending: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    groupId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    seasonId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    sortby: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.ListUserRankingRequest}
 */
proto.group.ListUserRankingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.ListUserRankingRequest;
  return proto.group.ListUserRankingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.ListUserRankingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.ListUserRankingRequest}
 */
proto.group.ListUserRankingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAscending(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGroupId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSeasonId(value);
      break;
    case 6:
      var value = /** @type {!proto.group.ListUserRankingRequest.SortBy} */ (reader.readEnum());
      msg.setSortby(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.ListUserRankingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.ListUserRankingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.ListUserRankingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ListUserRankingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAscending();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getGroupId();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getSeasonId();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getSortby();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.group.ListUserRankingRequest.SortBy = {
  SORT_BY_UNSPECIFIED: 0,
  SORT_BY_POINT: 1,
  SORT_BY_COUNT_CHALLENGE_COMPLETED: 2
};

/**
 * optional uint32 limit = 1;
 * @return {number}
 */
proto.group.ListUserRankingRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.ListUserRankingRequest} returns this
 */
proto.group.ListUserRankingRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.group.ListUserRankingRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.ListUserRankingRequest} returns this
 */
proto.group.ListUserRankingRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool ascending = 3;
 * @return {boolean}
 */
proto.group.ListUserRankingRequest.prototype.getAscending = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.group.ListUserRankingRequest} returns this
 */
proto.group.ListUserRankingRequest.prototype.setAscending = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int64 group_id = 4;
 * @return {number}
 */
proto.group.ListUserRankingRequest.prototype.getGroupId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.ListUserRankingRequest} returns this
 */
proto.group.ListUserRankingRequest.prototype.setGroupId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 season_id = 5;
 * @return {number}
 */
proto.group.ListUserRankingRequest.prototype.getSeasonId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.ListUserRankingRequest} returns this
 */
proto.group.ListUserRankingRequest.prototype.setSeasonId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional SortBy sortBy = 6;
 * @return {!proto.group.ListUserRankingRequest.SortBy}
 */
proto.group.ListUserRankingRequest.prototype.getSortby = function() {
  return /** @type {!proto.group.ListUserRankingRequest.SortBy} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.group.ListUserRankingRequest.SortBy} value
 * @return {!proto.group.ListUserRankingRequest} returns this
 */
proto.group.ListUserRankingRequest.prototype.setSortby = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.group.ListUserRankingReply.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.ListUserRankingReply.prototype.toObject = function(opt_includeInstance) {
  return proto.group.ListUserRankingReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.ListUserRankingReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ListUserRankingReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    seasoninfo: (f = msg.getSeasoninfo()) && proto.group.SeasonInfo.toObject(includeInstance, f),
    userrankinglistList: jspb.Message.toObjectList(msg.getUserrankinglistList(),
    proto.group.UserRanking.toObject, includeInstance),
    total: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.ListUserRankingReply}
 */
proto.group.ListUserRankingReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.ListUserRankingReply;
  return proto.group.ListUserRankingReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.ListUserRankingReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.ListUserRankingReply}
 */
proto.group.ListUserRankingReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.group.SeasonInfo;
      reader.readMessage(value,proto.group.SeasonInfo.deserializeBinaryFromReader);
      msg.setSeasoninfo(value);
      break;
    case 2:
      var value = new proto.group.UserRanking;
      reader.readMessage(value,proto.group.UserRanking.deserializeBinaryFromReader);
      msg.addUserrankinglist(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.ListUserRankingReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.ListUserRankingReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.ListUserRankingReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ListUserRankingReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeasoninfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.group.SeasonInfo.serializeBinaryToWriter
    );
  }
  f = message.getUserrankinglistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.group.UserRanking.serializeBinaryToWriter
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional SeasonInfo seasonInfo = 1;
 * @return {?proto.group.SeasonInfo}
 */
proto.group.ListUserRankingReply.prototype.getSeasoninfo = function() {
  return /** @type{?proto.group.SeasonInfo} */ (
    jspb.Message.getWrapperField(this, proto.group.SeasonInfo, 1));
};


/**
 * @param {?proto.group.SeasonInfo|undefined} value
 * @return {!proto.group.ListUserRankingReply} returns this
*/
proto.group.ListUserRankingReply.prototype.setSeasoninfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.ListUserRankingReply} returns this
 */
proto.group.ListUserRankingReply.prototype.clearSeasoninfo = function() {
  return this.setSeasoninfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.ListUserRankingReply.prototype.hasSeasoninfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated UserRanking userRankingList = 2;
 * @return {!Array<!proto.group.UserRanking>}
 */
proto.group.ListUserRankingReply.prototype.getUserrankinglistList = function() {
  return /** @type{!Array<!proto.group.UserRanking>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.group.UserRanking, 2));
};


/**
 * @param {!Array<!proto.group.UserRanking>} value
 * @return {!proto.group.ListUserRankingReply} returns this
*/
proto.group.ListUserRankingReply.prototype.setUserrankinglistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.group.UserRanking=} opt_value
 * @param {number=} opt_index
 * @return {!proto.group.UserRanking}
 */
proto.group.ListUserRankingReply.prototype.addUserrankinglist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.group.UserRanking, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.group.ListUserRankingReply} returns this
 */
proto.group.ListUserRankingReply.prototype.clearUserrankinglistList = function() {
  return this.setUserrankinglistList([]);
};


/**
 * optional int64 total = 3;
 * @return {number}
 */
proto.group.ListUserRankingReply.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.ListUserRankingReply} returns this
 */
proto.group.ListUserRankingReply.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.UserRanking.prototype.toObject = function(opt_includeInstance) {
  return proto.group.UserRanking.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.UserRanking} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.UserRanking.toObject = function(includeInstance, msg) {
  var f, obj = {
    member: (f = msg.getMember()) && proto.group.Member.toObject(includeInstance, f),
    point: jspb.Message.getFieldWithDefault(msg, 2, 0),
    countChallengeCompleted: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.UserRanking}
 */
proto.group.UserRanking.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.UserRanking;
  return proto.group.UserRanking.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.UserRanking} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.UserRanking}
 */
proto.group.UserRanking.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.group.Member;
      reader.readMessage(value,proto.group.Member.deserializeBinaryFromReader);
      msg.setMember(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPoint(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCountChallengeCompleted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.UserRanking.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.UserRanking.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.UserRanking} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.UserRanking.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMember();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.group.Member.serializeBinaryToWriter
    );
  }
  f = message.getPoint();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCountChallengeCompleted();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional Member member = 1;
 * @return {?proto.group.Member}
 */
proto.group.UserRanking.prototype.getMember = function() {
  return /** @type{?proto.group.Member} */ (
    jspb.Message.getWrapperField(this, proto.group.Member, 1));
};


/**
 * @param {?proto.group.Member|undefined} value
 * @return {!proto.group.UserRanking} returns this
*/
proto.group.UserRanking.prototype.setMember = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.UserRanking} returns this
 */
proto.group.UserRanking.prototype.clearMember = function() {
  return this.setMember(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.UserRanking.prototype.hasMember = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 point = 2;
 * @return {number}
 */
proto.group.UserRanking.prototype.getPoint = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.UserRanking} returns this
 */
proto.group.UserRanking.prototype.setPoint = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 count_challenge_completed = 3;
 * @return {number}
 */
proto.group.UserRanking.prototype.getCountChallengeCompleted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.UserRanking} returns this
 */
proto.group.UserRanking.prototype.setCountChallengeCompleted = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.LeaveGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.group.LeaveGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.LeaveGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.LeaveGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.LeaveGroupRequest}
 */
proto.group.LeaveGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.LeaveGroupRequest;
  return proto.group.LeaveGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.LeaveGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.LeaveGroupRequest}
 */
proto.group.LeaveGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGroupId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.LeaveGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.LeaveGroupRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.LeaveGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.LeaveGroupRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 group_id = 1;
 * @return {number}
 */
proto.group.LeaveGroupRequest.prototype.getGroupId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.LeaveGroupRequest} returns this
 */
proto.group.LeaveGroupRequest.prototype.setGroupId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.LeaveGroupReply.prototype.toObject = function(opt_includeInstance) {
  return proto.group.LeaveGroupReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.LeaveGroupReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.LeaveGroupReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.LeaveGroupReply}
 */
proto.group.LeaveGroupReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.LeaveGroupReply;
  return proto.group.LeaveGroupReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.LeaveGroupReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.LeaveGroupReply}
 */
proto.group.LeaveGroupReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.LeaveGroupReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.LeaveGroupReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.LeaveGroupReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.LeaveGroupReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.BanMemberRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.group.BanMemberRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.BanMemberRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.BanMemberRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    memberId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    groupId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.BanMemberRequest}
 */
proto.group.BanMemberRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.BanMemberRequest;
  return proto.group.BanMemberRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.BanMemberRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.BanMemberRequest}
 */
proto.group.BanMemberRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMemberId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGroupId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.BanMemberRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.BanMemberRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.BanMemberRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.BanMemberRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemberId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getGroupId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 member_id = 1;
 * @return {number}
 */
proto.group.BanMemberRequest.prototype.getMemberId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.BanMemberRequest} returns this
 */
proto.group.BanMemberRequest.prototype.setMemberId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 group_id = 2;
 * @return {number}
 */
proto.group.BanMemberRequest.prototype.getGroupId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.BanMemberRequest} returns this
 */
proto.group.BanMemberRequest.prototype.setGroupId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.BanMemberReply.prototype.toObject = function(opt_includeInstance) {
  return proto.group.BanMemberReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.BanMemberReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.BanMemberReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.BanMemberReply}
 */
proto.group.BanMemberReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.BanMemberReply;
  return proto.group.BanMemberReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.BanMemberReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.BanMemberReply}
 */
proto.group.BanMemberReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.BanMemberReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.BanMemberReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.BanMemberReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.BanMemberReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.AcceptMemberRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.group.AcceptMemberRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.AcceptMemberRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.AcceptMemberRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    memberId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.AcceptMemberRequest}
 */
proto.group.AcceptMemberRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.AcceptMemberRequest;
  return proto.group.AcceptMemberRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.AcceptMemberRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.AcceptMemberRequest}
 */
proto.group.AcceptMemberRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGroupId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMemberId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.AcceptMemberRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.AcceptMemberRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.AcceptMemberRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.AcceptMemberRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMemberId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 group_id = 1;
 * @return {number}
 */
proto.group.AcceptMemberRequest.prototype.getGroupId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.AcceptMemberRequest} returns this
 */
proto.group.AcceptMemberRequest.prototype.setGroupId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 member_id = 2;
 * @return {number}
 */
proto.group.AcceptMemberRequest.prototype.getMemberId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.AcceptMemberRequest} returns this
 */
proto.group.AcceptMemberRequest.prototype.setMemberId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.AcceptMemberReply.prototype.toObject = function(opt_includeInstance) {
  return proto.group.AcceptMemberReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.AcceptMemberReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.AcceptMemberReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.AcceptMemberReply}
 */
proto.group.AcceptMemberReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.AcceptMemberReply;
  return proto.group.AcceptMemberReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.AcceptMemberReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.AcceptMemberReply}
 */
proto.group.AcceptMemberReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.AcceptMemberReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.AcceptMemberReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.AcceptMemberReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.AcceptMemberReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.JoinGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.group.JoinGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.JoinGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.JoinGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.JoinGroupRequest}
 */
proto.group.JoinGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.JoinGroupRequest;
  return proto.group.JoinGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.JoinGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.JoinGroupRequest}
 */
proto.group.JoinGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGroupId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.JoinGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.JoinGroupRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.JoinGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.JoinGroupRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 group_id = 1;
 * @return {number}
 */
proto.group.JoinGroupRequest.prototype.getGroupId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.JoinGroupRequest} returns this
 */
proto.group.JoinGroupRequest.prototype.setGroupId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.JoinGroupReply.prototype.toObject = function(opt_includeInstance) {
  return proto.group.JoinGroupReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.JoinGroupReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.JoinGroupReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.JoinGroupReply}
 */
proto.group.JoinGroupReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.JoinGroupReply;
  return proto.group.JoinGroupReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.JoinGroupReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.JoinGroupReply}
 */
proto.group.JoinGroupReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.JoinGroupReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.JoinGroupReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.JoinGroupReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.JoinGroupReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.CreateGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.group.CreateGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.CreateGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.CreateGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupInfo: (f = msg.getGroupInfo()) && proto.group.GroupInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.CreateGroupRequest}
 */
proto.group.CreateGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.CreateGroupRequest;
  return proto.group.CreateGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.CreateGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.CreateGroupRequest}
 */
proto.group.CreateGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.group.GroupInfo;
      reader.readMessage(value,proto.group.GroupInfo.deserializeBinaryFromReader);
      msg.setGroupInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.CreateGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.CreateGroupRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.CreateGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.CreateGroupRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.group.GroupInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional GroupInfo group_info = 1;
 * @return {?proto.group.GroupInfo}
 */
proto.group.CreateGroupRequest.prototype.getGroupInfo = function() {
  return /** @type{?proto.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, proto.group.GroupInfo, 1));
};


/**
 * @param {?proto.group.GroupInfo|undefined} value
 * @return {!proto.group.CreateGroupRequest} returns this
*/
proto.group.CreateGroupRequest.prototype.setGroupInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.CreateGroupRequest} returns this
 */
proto.group.CreateGroupRequest.prototype.clearGroupInfo = function() {
  return this.setGroupInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.CreateGroupRequest.prototype.hasGroupInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.CreateGroupReply.prototype.toObject = function(opt_includeInstance) {
  return proto.group.CreateGroupReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.CreateGroupReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.CreateGroupReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.CreateGroupReply}
 */
proto.group.CreateGroupReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.CreateGroupReply;
  return proto.group.CreateGroupReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.CreateGroupReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.CreateGroupReply}
 */
proto.group.CreateGroupReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.CreateGroupReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.CreateGroupReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.CreateGroupReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.CreateGroupReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.ListMembersOfGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.group.ListMembersOfGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.ListMembersOfGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ListMembersOfGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ascending: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    groupId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    sortBy: jspb.Message.getFieldWithDefault(msg, 4, 0),
    searchByName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    status: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.ListMembersOfGroupRequest}
 */
proto.group.ListMembersOfGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.ListMembersOfGroupRequest;
  return proto.group.ListMembersOfGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.ListMembersOfGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.ListMembersOfGroupRequest}
 */
proto.group.ListMembersOfGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAscending(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGroupId(value);
      break;
    case 4:
      var value = /** @type {!proto.group.ListMembersOfGroupRequest.MOGSortBy} */ (reader.readEnum());
      msg.setSortBy(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchByName(value);
      break;
    case 7:
      var value = /** @type {!proto.group.Member.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.ListMembersOfGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.ListMembersOfGroupRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.ListMembersOfGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ListMembersOfGroupRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAscending();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getGroupId();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getSortBy();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getSearchByName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.group.ListMembersOfGroupRequest.MOGSortBy = {
  MOG_SORT_BY_UNSPECIFIED: 0,
  MOG_SORT_BY_CREATED_TIME: 1,
  MOG_SORT_BY_NAME: 2
};

/**
 * optional uint32 limit = 1;
 * @return {number}
 */
proto.group.ListMembersOfGroupRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.ListMembersOfGroupRequest} returns this
 */
proto.group.ListMembersOfGroupRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.group.ListMembersOfGroupRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.ListMembersOfGroupRequest} returns this
 */
proto.group.ListMembersOfGroupRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool ascending = 3;
 * @return {boolean}
 */
proto.group.ListMembersOfGroupRequest.prototype.getAscending = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.group.ListMembersOfGroupRequest} returns this
 */
proto.group.ListMembersOfGroupRequest.prototype.setAscending = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int64 group_id = 6;
 * @return {number}
 */
proto.group.ListMembersOfGroupRequest.prototype.getGroupId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.ListMembersOfGroupRequest} returns this
 */
proto.group.ListMembersOfGroupRequest.prototype.setGroupId = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional MOGSortBy sort_by = 4;
 * @return {!proto.group.ListMembersOfGroupRequest.MOGSortBy}
 */
proto.group.ListMembersOfGroupRequest.prototype.getSortBy = function() {
  return /** @type {!proto.group.ListMembersOfGroupRequest.MOGSortBy} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.group.ListMembersOfGroupRequest.MOGSortBy} value
 * @return {!proto.group.ListMembersOfGroupRequest} returns this
 */
proto.group.ListMembersOfGroupRequest.prototype.setSortBy = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string search_by_name = 5;
 * @return {string}
 */
proto.group.ListMembersOfGroupRequest.prototype.getSearchByName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.group.ListMembersOfGroupRequest} returns this
 */
proto.group.ListMembersOfGroupRequest.prototype.setSearchByName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Member.Status status = 7;
 * @return {!proto.group.Member.Status}
 */
proto.group.ListMembersOfGroupRequest.prototype.getStatus = function() {
  return /** @type {!proto.group.Member.Status} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.group.Member.Status} value
 * @return {!proto.group.ListMembersOfGroupRequest} returns this
 */
proto.group.ListMembersOfGroupRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.group.ListMembersOfGroupReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.ListMembersOfGroupReply.prototype.toObject = function(opt_includeInstance) {
  return proto.group.ListMembersOfGroupReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.ListMembersOfGroupReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ListMembersOfGroupReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    membersList: jspb.Message.toObjectList(msg.getMembersList(),
    proto.group.Member.toObject, includeInstance),
    total: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.ListMembersOfGroupReply}
 */
proto.group.ListMembersOfGroupReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.ListMembersOfGroupReply;
  return proto.group.ListMembersOfGroupReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.ListMembersOfGroupReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.ListMembersOfGroupReply}
 */
proto.group.ListMembersOfGroupReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.group.Member;
      reader.readMessage(value,proto.group.Member.deserializeBinaryFromReader);
      msg.addMembers(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.ListMembersOfGroupReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.ListMembersOfGroupReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.ListMembersOfGroupReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ListMembersOfGroupReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMembersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.group.Member.serializeBinaryToWriter
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * repeated Member members = 1;
 * @return {!Array<!proto.group.Member>}
 */
proto.group.ListMembersOfGroupReply.prototype.getMembersList = function() {
  return /** @type{!Array<!proto.group.Member>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.group.Member, 1));
};


/**
 * @param {!Array<!proto.group.Member>} value
 * @return {!proto.group.ListMembersOfGroupReply} returns this
*/
proto.group.ListMembersOfGroupReply.prototype.setMembersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.group.Member=} opt_value
 * @param {number=} opt_index
 * @return {!proto.group.Member}
 */
proto.group.ListMembersOfGroupReply.prototype.addMembers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.group.Member, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.group.ListMembersOfGroupReply} returns this
 */
proto.group.ListMembersOfGroupReply.prototype.clearMembersList = function() {
  return this.setMembersList([]);
};


/**
 * optional int64 total = 2;
 * @return {number}
 */
proto.group.ListMembersOfGroupReply.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.ListMembersOfGroupReply} returns this
 */
proto.group.ListMembersOfGroupReply.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.group.ListGroupRequest.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.ListGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.group.ListGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.ListGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ListGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ascending: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    searchByName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    filterBy: jspb.Message.getFieldWithDefault(msg, 6, 0),
    groupIdsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    sortBy: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.ListGroupRequest}
 */
proto.group.ListGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.ListGroupRequest;
  return proto.group.ListGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.ListGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.ListGroupRequest}
 */
proto.group.ListGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAscending(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchByName(value);
      break;
    case 6:
      var value = /** @type {!proto.group.ListGroupRequest.FilterBy} */ (reader.readEnum());
      msg.setFilterBy(value);
      break;
    case 7:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addGroupIds(values[i]);
      }
      break;
    case 4:
      var value = /** @type {!proto.group.GroupSortBy} */ (reader.readEnum());
      msg.setSortBy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.ListGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.ListGroupRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.ListGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ListGroupRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAscending();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getSearchByName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFilterBy();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getGroupIdsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      7,
      f
    );
  }
  f = message.getSortBy();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.group.ListGroupRequest.FilterBy = {
  FILTER_BY_UNSPECIFIED: 0,
  FILTER_BY_IS_MEMBER: 1,
  FILTER_BY_IS_NOT_MEMBER: 2,
  FILTER_BY_IS_ADMIN: 3
};

/**
 * optional uint32 limit = 1;
 * @return {number}
 */
proto.group.ListGroupRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.ListGroupRequest} returns this
 */
proto.group.ListGroupRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.group.ListGroupRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.ListGroupRequest} returns this
 */
proto.group.ListGroupRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool ascending = 3;
 * @return {boolean}
 */
proto.group.ListGroupRequest.prototype.getAscending = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.group.ListGroupRequest} returns this
 */
proto.group.ListGroupRequest.prototype.setAscending = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string search_by_name = 5;
 * @return {string}
 */
proto.group.ListGroupRequest.prototype.getSearchByName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.group.ListGroupRequest} returns this
 */
proto.group.ListGroupRequest.prototype.setSearchByName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional FilterBy filter_by = 6;
 * @return {!proto.group.ListGroupRequest.FilterBy}
 */
proto.group.ListGroupRequest.prototype.getFilterBy = function() {
  return /** @type {!proto.group.ListGroupRequest.FilterBy} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.group.ListGroupRequest.FilterBy} value
 * @return {!proto.group.ListGroupRequest} returns this
 */
proto.group.ListGroupRequest.prototype.setFilterBy = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * repeated int64 group_ids = 7;
 * @return {!Array<number>}
 */
proto.group.ListGroupRequest.prototype.getGroupIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.group.ListGroupRequest} returns this
 */
proto.group.ListGroupRequest.prototype.setGroupIdsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.group.ListGroupRequest} returns this
 */
proto.group.ListGroupRequest.prototype.addGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.group.ListGroupRequest} returns this
 */
proto.group.ListGroupRequest.prototype.clearGroupIdsList = function() {
  return this.setGroupIdsList([]);
};


/**
 * optional GroupSortBy sort_by = 4;
 * @return {!proto.group.GroupSortBy}
 */
proto.group.ListGroupRequest.prototype.getSortBy = function() {
  return /** @type {!proto.group.GroupSortBy} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.group.GroupSortBy} value
 * @return {!proto.group.ListGroupRequest} returns this
 */
proto.group.ListGroupRequest.prototype.setSortBy = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.group.ListGroupReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.ListGroupReply.prototype.toObject = function(opt_includeInstance) {
  return proto.group.ListGroupReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.ListGroupReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ListGroupReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupListList: jspb.Message.toObjectList(msg.getGroupListList(),
    proto.group.GroupInfo.toObject, includeInstance),
    total: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.ListGroupReply}
 */
proto.group.ListGroupReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.ListGroupReply;
  return proto.group.ListGroupReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.ListGroupReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.ListGroupReply}
 */
proto.group.ListGroupReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.group.GroupInfo;
      reader.readMessage(value,proto.group.GroupInfo.deserializeBinaryFromReader);
      msg.addGroupList(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.ListGroupReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.ListGroupReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.ListGroupReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ListGroupReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.group.GroupInfo.serializeBinaryToWriter
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * repeated GroupInfo group_list = 1;
 * @return {!Array<!proto.group.GroupInfo>}
 */
proto.group.ListGroupReply.prototype.getGroupListList = function() {
  return /** @type{!Array<!proto.group.GroupInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.group.GroupInfo, 1));
};


/**
 * @param {!Array<!proto.group.GroupInfo>} value
 * @return {!proto.group.ListGroupReply} returns this
*/
proto.group.ListGroupReply.prototype.setGroupListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.group.GroupInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.group.GroupInfo}
 */
proto.group.ListGroupReply.prototype.addGroupList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.group.GroupInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.group.ListGroupReply} returns this
 */
proto.group.ListGroupReply.prototype.clearGroupListList = function() {
  return this.setGroupListList([]);
};


/**
 * optional int64 total = 2;
 * @return {number}
 */
proto.group.ListGroupReply.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.ListGroupReply} returns this
 */
proto.group.ListGroupReply.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.GroupInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.group.GroupInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.GroupInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.GroupInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    backgroundPicture: jspb.Message.getFieldWithDefault(msg, 4, ""),
    leaderId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    memberStatus: jspb.Message.getFieldWithDefault(msg, 8, 0),
    numOfMembers: jspb.Message.getFieldWithDefault(msg, 9, 0),
    numOfChallenge: jspb.Message.getFieldWithDefault(msg, 10, 0),
    numOfEventParticipated: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.GroupInfo}
 */
proto.group.GroupInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.GroupInfo;
  return proto.group.GroupInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.GroupInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.GroupInfo}
 */
proto.group.GroupInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackgroundPicture(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLeaderId(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 8:
      var value = /** @type {!proto.group.Member.Status} */ (reader.readEnum());
      msg.setMemberStatus(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumOfMembers(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumOfChallenge(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumOfEventParticipated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.GroupInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.GroupInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.GroupInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.GroupInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBackgroundPicture();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLeaderId();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMemberStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getNumOfMembers();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getNumOfChallenge();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getNumOfEventParticipated();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.group.GroupInfo.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.GroupInfo} returns this
 */
proto.group.GroupInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.group.GroupInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.group.GroupInfo} returns this
 */
proto.group.GroupInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.group.GroupInfo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.group.GroupInfo} returns this
 */
proto.group.GroupInfo.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string background_picture = 4;
 * @return {string}
 */
proto.group.GroupInfo.prototype.getBackgroundPicture = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.group.GroupInfo} returns this
 */
proto.group.GroupInfo.prototype.setBackgroundPicture = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 leader_id = 5;
 * @return {number}
 */
proto.group.GroupInfo.prototype.getLeaderId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.GroupInfo} returns this
 */
proto.group.GroupInfo.prototype.setLeaderId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.group.GroupInfo.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.group.GroupInfo} returns this
*/
proto.group.GroupInfo.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.GroupInfo} returns this
 */
proto.group.GroupInfo.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.GroupInfo.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.group.GroupInfo.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.group.GroupInfo} returns this
*/
proto.group.GroupInfo.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.GroupInfo} returns this
 */
proto.group.GroupInfo.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.GroupInfo.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Member.Status member_status = 8;
 * @return {!proto.group.Member.Status}
 */
proto.group.GroupInfo.prototype.getMemberStatus = function() {
  return /** @type {!proto.group.Member.Status} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.group.Member.Status} value
 * @return {!proto.group.GroupInfo} returns this
 */
proto.group.GroupInfo.prototype.setMemberStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional int64 num_of_members = 9;
 * @return {number}
 */
proto.group.GroupInfo.prototype.getNumOfMembers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.GroupInfo} returns this
 */
proto.group.GroupInfo.prototype.setNumOfMembers = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 num_of_challenge = 10;
 * @return {number}
 */
proto.group.GroupInfo.prototype.getNumOfChallenge = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.GroupInfo} returns this
 */
proto.group.GroupInfo.prototype.setNumOfChallenge = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 num_of_event_participated = 11;
 * @return {number}
 */
proto.group.GroupInfo.prototype.getNumOfEventParticipated = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.GroupInfo} returns this
 */
proto.group.GroupInfo.prototype.setNumOfEventParticipated = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.GetGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.group.GetGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.GetGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.GetGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.GetGroupRequest}
 */
proto.group.GetGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.GetGroupRequest;
  return proto.group.GetGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.GetGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.GetGroupRequest}
 */
proto.group.GetGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGroupId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.GetGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.GetGroupRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.GetGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.GetGroupRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 group_id = 1;
 * @return {number}
 */
proto.group.GetGroupRequest.prototype.getGroupId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.GetGroupRequest} returns this
 */
proto.group.GetGroupRequest.prototype.setGroupId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.group.GetGroupReply.repeatedFields_ = [2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.GetGroupReply.prototype.toObject = function(opt_includeInstance) {
  return proto.group.GetGroupReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.GetGroupReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.GetGroupReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupinfo: (f = msg.getGroupinfo()) && proto.group.GroupInfo.toObject(includeInstance, f),
    membersList: jspb.Message.toObjectList(msg.getMembersList(),
    proto.group.Member.toObject, includeInstance),
    challengesList: jspb.Message.toObjectList(msg.getChallengesList(),
    proto.group.ChallengeInfo.toObject, includeInstance),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.group.EventInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.GetGroupReply}
 */
proto.group.GetGroupReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.GetGroupReply;
  return proto.group.GetGroupReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.GetGroupReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.GetGroupReply}
 */
proto.group.GetGroupReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.group.GroupInfo;
      reader.readMessage(value,proto.group.GroupInfo.deserializeBinaryFromReader);
      msg.setGroupinfo(value);
      break;
    case 2:
      var value = new proto.group.Member;
      reader.readMessage(value,proto.group.Member.deserializeBinaryFromReader);
      msg.addMembers(value);
      break;
    case 3:
      var value = new proto.group.ChallengeInfo;
      reader.readMessage(value,proto.group.ChallengeInfo.deserializeBinaryFromReader);
      msg.addChallenges(value);
      break;
    case 4:
      var value = new proto.group.EventInfo;
      reader.readMessage(value,proto.group.EventInfo.deserializeBinaryFromReader);
      msg.addEvents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.GetGroupReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.GetGroupReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.GetGroupReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.GetGroupReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.group.GroupInfo.serializeBinaryToWriter
    );
  }
  f = message.getMembersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.group.Member.serializeBinaryToWriter
    );
  }
  f = message.getChallengesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.group.ChallengeInfo.serializeBinaryToWriter
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.group.EventInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional GroupInfo groupInfo = 1;
 * @return {?proto.group.GroupInfo}
 */
proto.group.GetGroupReply.prototype.getGroupinfo = function() {
  return /** @type{?proto.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, proto.group.GroupInfo, 1));
};


/**
 * @param {?proto.group.GroupInfo|undefined} value
 * @return {!proto.group.GetGroupReply} returns this
*/
proto.group.GetGroupReply.prototype.setGroupinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.GetGroupReply} returns this
 */
proto.group.GetGroupReply.prototype.clearGroupinfo = function() {
  return this.setGroupinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.GetGroupReply.prototype.hasGroupinfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Member members = 2;
 * @return {!Array<!proto.group.Member>}
 */
proto.group.GetGroupReply.prototype.getMembersList = function() {
  return /** @type{!Array<!proto.group.Member>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.group.Member, 2));
};


/**
 * @param {!Array<!proto.group.Member>} value
 * @return {!proto.group.GetGroupReply} returns this
*/
proto.group.GetGroupReply.prototype.setMembersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.group.Member=} opt_value
 * @param {number=} opt_index
 * @return {!proto.group.Member}
 */
proto.group.GetGroupReply.prototype.addMembers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.group.Member, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.group.GetGroupReply} returns this
 */
proto.group.GetGroupReply.prototype.clearMembersList = function() {
  return this.setMembersList([]);
};


/**
 * repeated ChallengeInfo challenges = 3;
 * @return {!Array<!proto.group.ChallengeInfo>}
 */
proto.group.GetGroupReply.prototype.getChallengesList = function() {
  return /** @type{!Array<!proto.group.ChallengeInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.group.ChallengeInfo, 3));
};


/**
 * @param {!Array<!proto.group.ChallengeInfo>} value
 * @return {!proto.group.GetGroupReply} returns this
*/
proto.group.GetGroupReply.prototype.setChallengesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.group.ChallengeInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.group.ChallengeInfo}
 */
proto.group.GetGroupReply.prototype.addChallenges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.group.ChallengeInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.group.GetGroupReply} returns this
 */
proto.group.GetGroupReply.prototype.clearChallengesList = function() {
  return this.setChallengesList([]);
};


/**
 * repeated EventInfo events = 4;
 * @return {!Array<!proto.group.EventInfo>}
 */
proto.group.GetGroupReply.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.group.EventInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.group.EventInfo, 4));
};


/**
 * @param {!Array<!proto.group.EventInfo>} value
 * @return {!proto.group.GetGroupReply} returns this
*/
proto.group.GetGroupReply.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.group.EventInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.group.EventInfo}
 */
proto.group.GetGroupReply.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.group.EventInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.group.GetGroupReply} returns this
 */
proto.group.GetGroupReply.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.UpdateGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.group.UpdateGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.UpdateGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.UpdateGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupinfo: (f = msg.getGroupinfo()) && proto.group.GroupInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.UpdateGroupRequest}
 */
proto.group.UpdateGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.UpdateGroupRequest;
  return proto.group.UpdateGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.UpdateGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.UpdateGroupRequest}
 */
proto.group.UpdateGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.group.GroupInfo;
      reader.readMessage(value,proto.group.GroupInfo.deserializeBinaryFromReader);
      msg.setGroupinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.UpdateGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.UpdateGroupRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.UpdateGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.UpdateGroupRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.group.GroupInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional GroupInfo groupInfo = 1;
 * @return {?proto.group.GroupInfo}
 */
proto.group.UpdateGroupRequest.prototype.getGroupinfo = function() {
  return /** @type{?proto.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, proto.group.GroupInfo, 1));
};


/**
 * @param {?proto.group.GroupInfo|undefined} value
 * @return {!proto.group.UpdateGroupRequest} returns this
*/
proto.group.UpdateGroupRequest.prototype.setGroupinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.UpdateGroupRequest} returns this
 */
proto.group.UpdateGroupRequest.prototype.clearGroupinfo = function() {
  return this.setGroupinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.UpdateGroupRequest.prototype.hasGroupinfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.UpdateGroupReply.prototype.toObject = function(opt_includeInstance) {
  return proto.group.UpdateGroupReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.UpdateGroupReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.UpdateGroupReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.UpdateGroupReply}
 */
proto.group.UpdateGroupReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.UpdateGroupReply;
  return proto.group.UpdateGroupReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.UpdateGroupReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.UpdateGroupReply}
 */
proto.group.UpdateGroupReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.UpdateGroupReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.UpdateGroupReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.UpdateGroupReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.UpdateGroupReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.DeleteGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.group.DeleteGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.DeleteGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.DeleteGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    idToDelete: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.DeleteGroupRequest}
 */
proto.group.DeleteGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.DeleteGroupRequest;
  return proto.group.DeleteGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.DeleteGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.DeleteGroupRequest}
 */
proto.group.DeleteGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIdToDelete(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.DeleteGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.DeleteGroupRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.DeleteGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.DeleteGroupRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdToDelete();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id_to_delete = 1;
 * @return {number}
 */
proto.group.DeleteGroupRequest.prototype.getIdToDelete = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.DeleteGroupRequest} returns this
 */
proto.group.DeleteGroupRequest.prototype.setIdToDelete = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.DeleteGroupReply.prototype.toObject = function(opt_includeInstance) {
  return proto.group.DeleteGroupReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.DeleteGroupReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.DeleteGroupReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.DeleteGroupReply}
 */
proto.group.DeleteGroupReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.DeleteGroupReply;
  return proto.group.DeleteGroupReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.DeleteGroupReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.DeleteGroupReply}
 */
proto.group.DeleteGroupReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.DeleteGroupReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.DeleteGroupReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.DeleteGroupReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.DeleteGroupReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.Member.prototype.toObject = function(opt_includeInstance) {
  return proto.group.Member.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.Member} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.Member.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    memberId: jspb.Message.getFieldWithDefault(msg, 9, 0),
    displayName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    username: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    profilePicture: jspb.Message.getFieldWithDefault(msg, 11, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 8, 0),
    isAdmin: jspb.Message.getBooleanFieldWithDefault(msg, 10, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.Member}
 */
proto.group.Member.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.Member;
  return proto.group.Member.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.Member} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.Member}
 */
proto.group.Member.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMemberId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfilePicture(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 8:
      var value = /** @type {!proto.group.Member.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAdmin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.Member.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.Member.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.Member} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.Member.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMemberId();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProfilePicture();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getIsAdmin();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.group.Member.Status = {
  MEMBER_STATUS_UNSPECIFIED: 0,
  MEMBER_STATUS_WAITING: 1,
  MEMBER_STATUS_BANNED: 2,
  MEMBER_STATUS_ACTIVE: 3,
  MEMBER_STATUS_REJECTED: 4
};

/**
 * optional int64 user_id = 1;
 * @return {number}
 */
proto.group.Member.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.Member} returns this
 */
proto.group.Member.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 member_id = 9;
 * @return {number}
 */
proto.group.Member.prototype.getMemberId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.Member} returns this
 */
proto.group.Member.prototype.setMemberId = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string display_name = 7;
 * @return {string}
 */
proto.group.Member.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.group.Member} returns this
 */
proto.group.Member.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.group.Member.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.group.Member} returns this
 */
proto.group.Member.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.group.Member.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.group.Member} returns this
 */
proto.group.Member.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string profile_picture = 11;
 * @return {string}
 */
proto.group.Member.prototype.getProfilePicture = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.group.Member} returns this
 */
proto.group.Member.prototype.setProfilePicture = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.group.Member.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.group.Member} returns this
*/
proto.group.Member.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.Member} returns this
 */
proto.group.Member.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.Member.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Status status = 8;
 * @return {!proto.group.Member.Status}
 */
proto.group.Member.prototype.getStatus = function() {
  return /** @type {!proto.group.Member.Status} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.group.Member.Status} value
 * @return {!proto.group.Member} returns this
 */
proto.group.Member.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional bool is_admin = 10;
 * @return {boolean}
 */
proto.group.Member.prototype.getIsAdmin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.group.Member} returns this
 */
proto.group.Member.prototype.setIsAdmin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.group.ChallengeInfo.repeatedFields_ = [16,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.ChallengeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.group.ChallengeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.ChallengeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ChallengeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    groupId: jspb.Message.getFieldWithDefault(msg, 14, 0),
    completedFirstMember: (f = msg.getCompletedFirstMember()) && proto.group.Member.toObject(includeInstance, f),
    memberProgressListList: jspb.Message.toObjectList(msg.getMemberProgressListList(),
    proto.group.MemberProgress.toObject, includeInstance),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    picture: jspb.Message.getFieldWithDefault(msg, 12, ""),
    challengerulesList: jspb.Message.toObjectList(msg.getChallengerulesList(),
    proto.group.ChallengeRuleInfo.toObject, includeInstance),
    type: jspb.Message.getFieldWithDefault(msg, 9, 0),
    status: jspb.Message.getFieldWithDefault(msg, 15, 0),
    from: (f = msg.getFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    to: (f = msg.getTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.ChallengeInfo}
 */
proto.group.ChallengeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.ChallengeInfo;
  return proto.group.ChallengeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.ChallengeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.ChallengeInfo}
 */
proto.group.ChallengeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGroupId(value);
      break;
    case 13:
      var value = new proto.group.Member;
      reader.readMessage(value,proto.group.Member.deserializeBinaryFromReader);
      msg.setCompletedFirstMember(value);
      break;
    case 16:
      var value = new proto.group.MemberProgress;
      reader.readMessage(value,proto.group.MemberProgress.deserializeBinaryFromReader);
      msg.addMemberProgressList(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPicture(value);
      break;
    case 8:
      var value = new proto.group.ChallengeRuleInfo;
      reader.readMessage(value,proto.group.ChallengeRuleInfo.deserializeBinaryFromReader);
      msg.addChallengerules(value);
      break;
    case 9:
      var value = /** @type {!proto.group.ActivityType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 15:
      var value = /** @type {!proto.group.RuleStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.ChallengeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.ChallengeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.ChallengeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ChallengeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getGroupId();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = message.getCompletedFirstMember();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.group.Member.serializeBinaryToWriter
    );
  }
  f = message.getMemberProgressListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      16,
      f,
      proto.group.MemberProgress.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPicture();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getChallengerulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.group.ChallengeRuleInfo.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.group.ChallengeInfo.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.ChallengeInfo} returns this
 */
proto.group.ChallengeInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 group_id = 14;
 * @return {number}
 */
proto.group.ChallengeInfo.prototype.getGroupId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.ChallengeInfo} returns this
 */
proto.group.ChallengeInfo.prototype.setGroupId = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional Member completed_first_member = 13;
 * @return {?proto.group.Member}
 */
proto.group.ChallengeInfo.prototype.getCompletedFirstMember = function() {
  return /** @type{?proto.group.Member} */ (
    jspb.Message.getWrapperField(this, proto.group.Member, 13));
};


/**
 * @param {?proto.group.Member|undefined} value
 * @return {!proto.group.ChallengeInfo} returns this
*/
proto.group.ChallengeInfo.prototype.setCompletedFirstMember = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.ChallengeInfo} returns this
 */
proto.group.ChallengeInfo.prototype.clearCompletedFirstMember = function() {
  return this.setCompletedFirstMember(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.ChallengeInfo.prototype.hasCompletedFirstMember = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * repeated MemberProgress member_progress_list = 16;
 * @return {!Array<!proto.group.MemberProgress>}
 */
proto.group.ChallengeInfo.prototype.getMemberProgressListList = function() {
  return /** @type{!Array<!proto.group.MemberProgress>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.group.MemberProgress, 16));
};


/**
 * @param {!Array<!proto.group.MemberProgress>} value
 * @return {!proto.group.ChallengeInfo} returns this
*/
proto.group.ChallengeInfo.prototype.setMemberProgressListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 16, value);
};


/**
 * @param {!proto.group.MemberProgress=} opt_value
 * @param {number=} opt_index
 * @return {!proto.group.MemberProgress}
 */
proto.group.ChallengeInfo.prototype.addMemberProgressList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 16, opt_value, proto.group.MemberProgress, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.group.ChallengeInfo} returns this
 */
proto.group.ChallengeInfo.prototype.clearMemberProgressListList = function() {
  return this.setMemberProgressListList([]);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.group.ChallengeInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.group.ChallengeInfo} returns this
 */
proto.group.ChallengeInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.group.ChallengeInfo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.group.ChallengeInfo} returns this
 */
proto.group.ChallengeInfo.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string picture = 12;
 * @return {string}
 */
proto.group.ChallengeInfo.prototype.getPicture = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.group.ChallengeInfo} returns this
 */
proto.group.ChallengeInfo.prototype.setPicture = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * repeated ChallengeRuleInfo challengeRules = 8;
 * @return {!Array<!proto.group.ChallengeRuleInfo>}
 */
proto.group.ChallengeInfo.prototype.getChallengerulesList = function() {
  return /** @type{!Array<!proto.group.ChallengeRuleInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.group.ChallengeRuleInfo, 8));
};


/**
 * @param {!Array<!proto.group.ChallengeRuleInfo>} value
 * @return {!proto.group.ChallengeInfo} returns this
*/
proto.group.ChallengeInfo.prototype.setChallengerulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.group.ChallengeRuleInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.group.ChallengeRuleInfo}
 */
proto.group.ChallengeInfo.prototype.addChallengerules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.group.ChallengeRuleInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.group.ChallengeInfo} returns this
 */
proto.group.ChallengeInfo.prototype.clearChallengerulesList = function() {
  return this.setChallengerulesList([]);
};


/**
 * optional ActivityType type = 9;
 * @return {!proto.group.ActivityType}
 */
proto.group.ChallengeInfo.prototype.getType = function() {
  return /** @type {!proto.group.ActivityType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.group.ActivityType} value
 * @return {!proto.group.ChallengeInfo} returns this
 */
proto.group.ChallengeInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional RuleStatus status = 15;
 * @return {!proto.group.RuleStatus}
 */
proto.group.ChallengeInfo.prototype.getStatus = function() {
  return /** @type {!proto.group.RuleStatus} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.group.RuleStatus} value
 * @return {!proto.group.ChallengeInfo} returns this
 */
proto.group.ChallengeInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 15, value);
};


/**
 * optional google.protobuf.Timestamp from = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.group.ChallengeInfo.prototype.getFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.group.ChallengeInfo} returns this
*/
proto.group.ChallengeInfo.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.ChallengeInfo} returns this
 */
proto.group.ChallengeInfo.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.ChallengeInfo.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp to = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.group.ChallengeInfo.prototype.getTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.group.ChallengeInfo} returns this
*/
proto.group.ChallengeInfo.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.ChallengeInfo} returns this
 */
proto.group.ChallengeInfo.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.ChallengeInfo.prototype.hasTo = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.group.MemberProgress.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.MemberProgress.prototype.toObject = function(opt_includeInstance) {
  return proto.group.MemberProgress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.MemberProgress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.MemberProgress.toObject = function(includeInstance, msg) {
  var f, obj = {
    isCompletedFirst: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    challengeProgress: jspb.Message.getFieldWithDefault(msg, 5, 0),
    memberInfo: (f = msg.getMemberInfo()) && proto.group.Member.toObject(includeInstance, f),
    ruleProgressListList: jspb.Message.toObjectList(msg.getRuleProgressListList(),
    proto.group.MemberProgress.RuleProgress.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.MemberProgress}
 */
proto.group.MemberProgress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.MemberProgress;
  return proto.group.MemberProgress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.MemberProgress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.MemberProgress}
 */
proto.group.MemberProgress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsCompletedFirst(value);
      break;
    case 5:
      var value = /** @type {!proto.group.RuleStatus} */ (reader.readEnum());
      msg.setChallengeProgress(value);
      break;
    case 1:
      var value = new proto.group.Member;
      reader.readMessage(value,proto.group.Member.deserializeBinaryFromReader);
      msg.setMemberInfo(value);
      break;
    case 7:
      var value = new proto.group.MemberProgress.RuleProgress;
      reader.readMessage(value,proto.group.MemberProgress.RuleProgress.deserializeBinaryFromReader);
      msg.addRuleProgressList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.MemberProgress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.MemberProgress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.MemberProgress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.MemberProgress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsCompletedFirst();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getChallengeProgress();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getMemberInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.group.Member.serializeBinaryToWriter
    );
  }
  f = message.getRuleProgressListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.group.MemberProgress.RuleProgress.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.MemberProgress.RuleProgress.prototype.toObject = function(opt_includeInstance) {
  return proto.group.MemberProgress.RuleProgress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.MemberProgress.RuleProgress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.MemberProgress.RuleProgress.toObject = function(includeInstance, msg) {
  var f, obj = {
    rule: jspb.Message.getFieldWithDefault(msg, 1, 0),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    total: jspb.Message.getFieldWithDefault(msg, 4, 0),
    timeCompleted: (f = msg.getTimeCompleted()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.MemberProgress.RuleProgress}
 */
proto.group.MemberProgress.RuleProgress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.MemberProgress.RuleProgress;
  return proto.group.MemberProgress.RuleProgress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.MemberProgress.RuleProgress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.MemberProgress.RuleProgress}
 */
proto.group.MemberProgress.RuleProgress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.group.Rule} */ (reader.readEnum());
      msg.setRule(value);
      break;
    case 2:
      var value = /** @type {!proto.group.RuleStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimeCompleted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.MemberProgress.RuleProgress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.MemberProgress.RuleProgress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.MemberProgress.RuleProgress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.MemberProgress.RuleProgress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRule();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getTimeCompleted();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional Rule rule = 1;
 * @return {!proto.group.Rule}
 */
proto.group.MemberProgress.RuleProgress.prototype.getRule = function() {
  return /** @type {!proto.group.Rule} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.group.Rule} value
 * @return {!proto.group.MemberProgress.RuleProgress} returns this
 */
proto.group.MemberProgress.RuleProgress.prototype.setRule = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional RuleStatus status = 2;
 * @return {!proto.group.RuleStatus}
 */
proto.group.MemberProgress.RuleProgress.prototype.getStatus = function() {
  return /** @type {!proto.group.RuleStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.group.RuleStatus} value
 * @return {!proto.group.MemberProgress.RuleProgress} returns this
 */
proto.group.MemberProgress.RuleProgress.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int64 total = 4;
 * @return {number}
 */
proto.group.MemberProgress.RuleProgress.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.MemberProgress.RuleProgress} returns this
 */
proto.group.MemberProgress.RuleProgress.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp time_completed = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.group.MemberProgress.RuleProgress.prototype.getTimeCompleted = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.group.MemberProgress.RuleProgress} returns this
*/
proto.group.MemberProgress.RuleProgress.prototype.setTimeCompleted = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.MemberProgress.RuleProgress} returns this
 */
proto.group.MemberProgress.RuleProgress.prototype.clearTimeCompleted = function() {
  return this.setTimeCompleted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.MemberProgress.RuleProgress.prototype.hasTimeCompleted = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool is_completed_first = 6;
 * @return {boolean}
 */
proto.group.MemberProgress.prototype.getIsCompletedFirst = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.group.MemberProgress} returns this
 */
proto.group.MemberProgress.prototype.setIsCompletedFirst = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional RuleStatus challenge_progress = 5;
 * @return {!proto.group.RuleStatus}
 */
proto.group.MemberProgress.prototype.getChallengeProgress = function() {
  return /** @type {!proto.group.RuleStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.group.RuleStatus} value
 * @return {!proto.group.MemberProgress} returns this
 */
proto.group.MemberProgress.prototype.setChallengeProgress = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional Member member_info = 1;
 * @return {?proto.group.Member}
 */
proto.group.MemberProgress.prototype.getMemberInfo = function() {
  return /** @type{?proto.group.Member} */ (
    jspb.Message.getWrapperField(this, proto.group.Member, 1));
};


/**
 * @param {?proto.group.Member|undefined} value
 * @return {!proto.group.MemberProgress} returns this
*/
proto.group.MemberProgress.prototype.setMemberInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.MemberProgress} returns this
 */
proto.group.MemberProgress.prototype.clearMemberInfo = function() {
  return this.setMemberInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.MemberProgress.prototype.hasMemberInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated RuleProgress rule_progress_list = 7;
 * @return {!Array<!proto.group.MemberProgress.RuleProgress>}
 */
proto.group.MemberProgress.prototype.getRuleProgressListList = function() {
  return /** @type{!Array<!proto.group.MemberProgress.RuleProgress>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.group.MemberProgress.RuleProgress, 7));
};


/**
 * @param {!Array<!proto.group.MemberProgress.RuleProgress>} value
 * @return {!proto.group.MemberProgress} returns this
*/
proto.group.MemberProgress.prototype.setRuleProgressListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.group.MemberProgress.RuleProgress=} opt_value
 * @param {number=} opt_index
 * @return {!proto.group.MemberProgress.RuleProgress}
 */
proto.group.MemberProgress.prototype.addRuleProgressList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.group.MemberProgress.RuleProgress, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.group.MemberProgress} returns this
 */
proto.group.MemberProgress.prototype.clearRuleProgressListList = function() {
  return this.setRuleProgressListList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.ChallengeRuleInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.group.ChallengeRuleInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.ChallengeRuleInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ChallengeRuleInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    goal: jspb.Message.getFieldWithDefault(msg, 2, 0),
    rule: jspb.Message.getFieldWithDefault(msg, 3, 0),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.ChallengeRuleInfo}
 */
proto.group.ChallengeRuleInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.ChallengeRuleInfo;
  return proto.group.ChallengeRuleInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.ChallengeRuleInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.ChallengeRuleInfo}
 */
proto.group.ChallengeRuleInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGoal(value);
      break;
    case 3:
      var value = /** @type {!proto.group.Rule} */ (reader.readEnum());
      msg.setRule(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.ChallengeRuleInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.ChallengeRuleInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.ChallengeRuleInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ChallengeRuleInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getGoal();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getRule();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.group.ChallengeRuleInfo.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.ChallengeRuleInfo} returns this
 */
proto.group.ChallengeRuleInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 goal = 2;
 * @return {number}
 */
proto.group.ChallengeRuleInfo.prototype.getGoal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.ChallengeRuleInfo} returns this
 */
proto.group.ChallengeRuleInfo.prototype.setGoal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Rule rule = 3;
 * @return {!proto.group.Rule}
 */
proto.group.ChallengeRuleInfo.prototype.getRule = function() {
  return /** @type {!proto.group.Rule} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.group.Rule} value
 * @return {!proto.group.ChallengeRuleInfo} returns this
 */
proto.group.ChallengeRuleInfo.prototype.setRule = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.group.ChallengeRuleInfo.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.group.ChallengeRuleInfo} returns this
*/
proto.group.ChallengeRuleInfo.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.ChallengeRuleInfo} returns this
 */
proto.group.ChallengeRuleInfo.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.ChallengeRuleInfo.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.group.ChallengeRuleInfo.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.group.ChallengeRuleInfo} returns this
*/
proto.group.ChallengeRuleInfo.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.ChallengeRuleInfo} returns this
 */
proto.group.ChallengeRuleInfo.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.ChallengeRuleInfo.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.group.EventInfo.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.EventInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.group.EventInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.EventInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.EventInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    rulesList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    type: jspb.Message.getFieldWithDefault(msg, 9, 0),
    goal: jspb.Message.getFieldWithDefault(msg, 10, 0),
    total: jspb.Message.getFieldWithDefault(msg, 11, 0),
    from: (f = msg.getFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    to: (f = msg.getTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.EventInfo}
 */
proto.group.EventInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.EventInfo;
  return proto.group.EventInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.EventInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.EventInfo}
 */
proto.group.EventInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 8:
      var values = /** @type {!Array<!proto.group.Rule>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRules(values[i]);
      }
      break;
    case 9:
      var value = /** @type {!proto.group.ActivityType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGoal(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.EventInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.EventInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.EventInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.EventInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      8,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getGoal();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.group.EventInfo.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.EventInfo} returns this
 */
proto.group.EventInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.group.EventInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.group.EventInfo} returns this
 */
proto.group.EventInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.group.EventInfo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.group.EventInfo} returns this
 */
proto.group.EventInfo.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Rule rules = 8;
 * @return {!Array<!proto.group.Rule>}
 */
proto.group.EventInfo.prototype.getRulesList = function() {
  return /** @type {!Array<!proto.group.Rule>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<!proto.group.Rule>} value
 * @return {!proto.group.EventInfo} returns this
 */
proto.group.EventInfo.prototype.setRulesList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {!proto.group.Rule} value
 * @param {number=} opt_index
 * @return {!proto.group.EventInfo} returns this
 */
proto.group.EventInfo.prototype.addRules = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.group.EventInfo} returns this
 */
proto.group.EventInfo.prototype.clearRulesList = function() {
  return this.setRulesList([]);
};


/**
 * optional ActivityType type = 9;
 * @return {!proto.group.ActivityType}
 */
proto.group.EventInfo.prototype.getType = function() {
  return /** @type {!proto.group.ActivityType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.group.ActivityType} value
 * @return {!proto.group.EventInfo} returns this
 */
proto.group.EventInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional int64 goal = 10;
 * @return {number}
 */
proto.group.EventInfo.prototype.getGoal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.EventInfo} returns this
 */
proto.group.EventInfo.prototype.setGoal = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 total = 11;
 * @return {number}
 */
proto.group.EventInfo.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.EventInfo} returns this
 */
proto.group.EventInfo.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional google.protobuf.Timestamp from = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.group.EventInfo.prototype.getFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.group.EventInfo} returns this
*/
proto.group.EventInfo.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.EventInfo} returns this
 */
proto.group.EventInfo.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.EventInfo.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp to = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.group.EventInfo.prototype.getTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.group.EventInfo} returns this
*/
proto.group.EventInfo.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.EventInfo} returns this
 */
proto.group.EventInfo.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.EventInfo.prototype.hasTo = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.group.ChallengeProgress.prototype.toObject = function(opt_includeInstance) {
  return proto.group.ChallengeProgress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.group.ChallengeProgress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ChallengeProgress.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    value: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.group.ChallengeProgress}
 */
proto.group.ChallengeProgress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.group.ChallengeProgress;
  return proto.group.ChallengeProgress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.group.ChallengeProgress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.group.ChallengeProgress}
 */
proto.group.ChallengeProgress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.group.ChallengeProgress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.group.ChallengeProgress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.group.ChallengeProgress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.group.ChallengeProgress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp timestamp = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.group.ChallengeProgress.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.group.ChallengeProgress} returns this
*/
proto.group.ChallengeProgress.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.group.ChallengeProgress} returns this
 */
proto.group.ChallengeProgress.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.group.ChallengeProgress.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 value = 2;
 * @return {number}
 */
proto.group.ChallengeProgress.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.group.ChallengeProgress} returns this
 */
proto.group.ChallengeProgress.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.group.Rule = {
  RULE_UNSPECIFIED: 0,
  RULE_TOTAL_DISTANCE: 1,
  RULE_TOTAL_TIME: 2,
  RULE_TOTAL_CALORIES: 3
};

/**
 * @enum {number}
 */
proto.group.RuleStatus = {
  RULE_STATUS_UNSPECIFIED: 0,
  RULE_STATUS_COMPLETED: 2,
  RULE_STATUS_INPROGRESS: 3,
  RULE_STATUS_COMING_SOON: 4,
  RULE_STATUS_FAILED: 1
};

/**
 * @enum {number}
 */
proto.group.ActivityType = {
  ACTIVITY_TYPE_UNSPECIFIED: 0,
  ACTIVITY_TYPE_RUNNING: 1,
  ACTIVITY_TYPE_CYCLING: 2,
  ACTIVITY_TYPE_WALKING: 3
};

/**
 * @enum {number}
 */
proto.group.GroupSortBy = {
  GROUP_SORT_BY_UNSPECIFIED: 0,
  GROUP_SORT_BY_CREATED_TIME: 1,
  GROUP_SORT_BY_NAME: 2
};

goog.object.extend(exports, proto.group);
