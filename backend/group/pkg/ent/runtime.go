// Code generated by ent, DO NOT EDIT.

package ent

import (
	"time"

	"github.com/manhrev/runtracking/backend/group/pkg/ent/challenge"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challengemember"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challengememberrule"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challengerule"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/groupz"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/member"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/schema"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/season"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/seasonmember"
)

// The init function reads all schema descriptors with runtime code
// (default values, validators, hooks and policies) and stitches it
// to their package variables.
func init() {
	challengeFields := schema.Challenge{}.Fields()
	_ = challengeFields
	// challengeDescCreatedAt is the schema descriptor for created_at field.
	challengeDescCreatedAt := challengeFields[2].Descriptor()
	// challenge.DefaultCreatedAt holds the default value on creation for the created_at field.
	challenge.DefaultCreatedAt = challengeDescCreatedAt.Default.(func() time.Time)
	// challengeDescPicture is the schema descriptor for picture field.
	challengeDescPicture := challengeFields[4].Descriptor()
	// challenge.DefaultPicture holds the default value on creation for the picture field.
	challenge.DefaultPicture = challengeDescPicture.Default.(string)
	// challengeDescStatus is the schema descriptor for status field.
	challengeDescStatus := challengeFields[8].Descriptor()
	// challenge.DefaultStatus holds the default value on creation for the status field.
	challenge.DefaultStatus = challengeDescStatus.Default.(int64)
	challengememberFields := schema.ChallengeMember{}.Fields()
	_ = challengememberFields
	// challengememberDescPoint is the schema descriptor for point field.
	challengememberDescPoint := challengememberFields[1].Descriptor()
	// challengemember.DefaultPoint holds the default value on creation for the point field.
	challengemember.DefaultPoint = challengememberDescPoint.Default.(int64)
	// challengememberDescStatus is the schema descriptor for status field.
	challengememberDescStatus := challengememberFields[4].Descriptor()
	// challengemember.DefaultStatus holds the default value on creation for the status field.
	challengemember.DefaultStatus = challengememberDescStatus.Default.(int64)
	// challengememberDescCreatedAt is the schema descriptor for created_at field.
	challengememberDescCreatedAt := challengememberFields[6].Descriptor()
	// challengemember.DefaultCreatedAt holds the default value on creation for the created_at field.
	challengemember.DefaultCreatedAt = challengememberDescCreatedAt.Default.(time.Time)
	// challengememberDescUpdatedAt is the schema descriptor for updated_at field.
	challengememberDescUpdatedAt := challengememberFields[7].Descriptor()
	// challengemember.DefaultUpdatedAt holds the default value on creation for the updated_at field.
	challengemember.DefaultUpdatedAt = challengememberDescUpdatedAt.Default.(func() time.Time)
	// challengemember.UpdateDefaultUpdatedAt holds the default value on update for the updated_at field.
	challengemember.UpdateDefaultUpdatedAt = challengememberDescUpdatedAt.UpdateDefault.(func() time.Time)
	challengememberruleFields := schema.ChallengeMemberRule{}.Fields()
	_ = challengememberruleFields
	// challengememberruleDescTotal is the schema descriptor for total field.
	challengememberruleDescTotal := challengememberruleFields[1].Descriptor()
	// challengememberrule.DefaultTotal holds the default value on creation for the total field.
	challengememberrule.DefaultTotal = challengememberruleDescTotal.Default.(int64)
	// challengememberruleDescStatus is the schema descriptor for status field.
	challengememberruleDescStatus := challengememberruleFields[3].Descriptor()
	// challengememberrule.DefaultStatus holds the default value on creation for the status field.
	challengememberrule.DefaultStatus = challengememberruleDescStatus.Default.(int64)
	// challengememberruleDescUpdatedAt is the schema descriptor for updated_at field.
	challengememberruleDescUpdatedAt := challengememberruleFields[5].Descriptor()
	// challengememberrule.DefaultUpdatedAt holds the default value on creation for the updated_at field.
	challengememberrule.DefaultUpdatedAt = challengememberruleDescUpdatedAt.Default.(func() time.Time)
	// challengememberrule.UpdateDefaultUpdatedAt holds the default value on update for the updated_at field.
	challengememberrule.UpdateDefaultUpdatedAt = challengememberruleDescUpdatedAt.UpdateDefault.(func() time.Time)
	challengeruleFields := schema.ChallengeRule{}.Fields()
	_ = challengeruleFields
	// challengeruleDescGoal is the schema descriptor for goal field.
	challengeruleDescGoal := challengeruleFields[1].Descriptor()
	// challengerule.DefaultGoal holds the default value on creation for the goal field.
	challengerule.DefaultGoal = challengeruleDescGoal.Default.(int64)
	// challengeruleDescCreatedAt is the schema descriptor for created_at field.
	challengeruleDescCreatedAt := challengeruleFields[3].Descriptor()
	// challengerule.DefaultCreatedAt holds the default value on creation for the created_at field.
	challengerule.DefaultCreatedAt = challengeruleDescCreatedAt.Default.(time.Time)
	// challengeruleDescUpdatedAt is the schema descriptor for updated_at field.
	challengeruleDescUpdatedAt := challengeruleFields[4].Descriptor()
	// challengerule.DefaultUpdatedAt holds the default value on creation for the updated_at field.
	challengerule.DefaultUpdatedAt = challengeruleDescUpdatedAt.Default.(func() time.Time)
	// challengerule.UpdateDefaultUpdatedAt holds the default value on update for the updated_at field.
	challengerule.UpdateDefaultUpdatedAt = challengeruleDescUpdatedAt.UpdateDefault.(func() time.Time)
	groupzFields := schema.Groupz{}.Fields()
	_ = groupzFields
	// groupzDescGroupPicture is the schema descriptor for group_picture field.
	groupzDescGroupPicture := groupzFields[3].Descriptor()
	// groupz.DefaultGroupPicture holds the default value on creation for the group_picture field.
	groupz.DefaultGroupPicture = groupzDescGroupPicture.Default.(string)
	// groupzDescBackgroundPicture is the schema descriptor for background_picture field.
	groupzDescBackgroundPicture := groupzFields[4].Descriptor()
	// groupz.DefaultBackgroundPicture holds the default value on creation for the background_picture field.
	groupz.DefaultBackgroundPicture = groupzDescBackgroundPicture.Default.(string)
	// groupzDescCreatedAt is the schema descriptor for created_at field.
	groupzDescCreatedAt := groupzFields[5].Descriptor()
	// groupz.DefaultCreatedAt holds the default value on creation for the created_at field.
	groupz.DefaultCreatedAt = groupzDescCreatedAt.Default.(func() time.Time)
	// groupzDescUpdatedAt is the schema descriptor for updated_at field.
	groupzDescUpdatedAt := groupzFields[6].Descriptor()
	// groupz.DefaultUpdatedAt holds the default value on creation for the updated_at field.
	groupz.DefaultUpdatedAt = groupzDescUpdatedAt.Default.(func() time.Time)
	// groupz.UpdateDefaultUpdatedAt holds the default value on update for the updated_at field.
	groupz.UpdateDefaultUpdatedAt = groupzDescUpdatedAt.UpdateDefault.(func() time.Time)
	memberFields := schema.Member{}.Fields()
	_ = memberFields
	// memberDescCreatedAt is the schema descriptor for created_at field.
	memberDescCreatedAt := memberFields[1].Descriptor()
	// member.DefaultCreatedAt holds the default value on creation for the created_at field.
	member.DefaultCreatedAt = memberDescCreatedAt.Default.(func() time.Time)
	// memberDescStatus is the schema descriptor for status field.
	memberDescStatus := memberFields[3].Descriptor()
	// member.DefaultStatus holds the default value on creation for the status field.
	member.DefaultStatus = memberDescStatus.Default.(uint32)
	// memberDescPoint is the schema descriptor for point field.
	memberDescPoint := memberFields[5].Descriptor()
	// member.DefaultPoint holds the default value on creation for the point field.
	member.DefaultPoint = memberDescPoint.Default.(int64)
	// memberDescCompletedChallengeCount is the schema descriptor for completed_challenge_count field.
	memberDescCompletedChallengeCount := memberFields[6].Descriptor()
	// member.DefaultCompletedChallengeCount holds the default value on creation for the completed_challenge_count field.
	member.DefaultCompletedChallengeCount = memberDescCompletedChallengeCount.Default.(int64)
	seasonFields := schema.Season{}.Fields()
	_ = seasonFields
	// seasonDescPicture is the schema descriptor for picture field.
	seasonDescPicture := seasonFields[3].Descriptor()
	// season.DefaultPicture holds the default value on creation for the picture field.
	season.DefaultPicture = seasonDescPicture.Default.(string)
	// seasonDescCreatedAt is the schema descriptor for created_at field.
	seasonDescCreatedAt := seasonFields[4].Descriptor()
	// season.DefaultCreatedAt holds the default value on creation for the created_at field.
	season.DefaultCreatedAt = seasonDescCreatedAt.Default.(func() time.Time)
	// seasonDescUpdatedAt is the schema descriptor for updated_at field.
	seasonDescUpdatedAt := seasonFields[5].Descriptor()
	// season.DefaultUpdatedAt holds the default value on creation for the updated_at field.
	season.DefaultUpdatedAt = seasonDescUpdatedAt.Default.(func() time.Time)
	// season.UpdateDefaultUpdatedAt holds the default value on update for the updated_at field.
	season.UpdateDefaultUpdatedAt = seasonDescUpdatedAt.UpdateDefault.(func() time.Time)
	// seasonDescStatus is the schema descriptor for status field.
	seasonDescStatus := seasonFields[8].Descriptor()
	// season.DefaultStatus holds the default value on creation for the status field.
	season.DefaultStatus = seasonDescStatus.Default.(int64)
	seasonmemberFields := schema.SeasonMember{}.Fields()
	_ = seasonmemberFields
	// seasonmemberDescPoint is the schema descriptor for point field.
	seasonmemberDescPoint := seasonmemberFields[1].Descriptor()
	// seasonmember.DefaultPoint holds the default value on creation for the point field.
	seasonmember.DefaultPoint = seasonmemberDescPoint.Default.(int64)
	// seasonmemberDescCreatedAt is the schema descriptor for created_at field.
	seasonmemberDescCreatedAt := seasonmemberFields[4].Descriptor()
	// seasonmember.DefaultCreatedAt holds the default value on creation for the created_at field.
	seasonmember.DefaultCreatedAt = seasonmemberDescCreatedAt.Default.(time.Time)
	// seasonmemberDescUpdatedAt is the schema descriptor for updated_at field.
	seasonmemberDescUpdatedAt := seasonmemberFields[5].Descriptor()
	// seasonmember.DefaultUpdatedAt holds the default value on creation for the updated_at field.
	seasonmember.DefaultUpdatedAt = seasonmemberDescUpdatedAt.Default.(func() time.Time)
	// seasonmember.UpdateDefaultUpdatedAt holds the default value on update for the updated_at field.
	seasonmember.UpdateDefaultUpdatedAt = seasonmemberDescUpdatedAt.UpdateDefault.(func() time.Time)
}
